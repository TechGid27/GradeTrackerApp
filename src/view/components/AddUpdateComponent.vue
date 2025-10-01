<script setup>
import { reactive, ref } from "vue";
import { Modal } from "bootstrap";
import { useSubjects } from "../../composables/subjects.js";
import { useAssessment } from "../../composables/assessment.js";

const token = localStorage.getItem("token");
const { getSubjects, subjects, addSubject, updateSubject } = useSubjects(token);
const { addAssessment, updateAssessment } = useAssessment(token);

const emit = defineEmits(["add", "update"]);
const isEditing = ref(false);
const modalRef = ref(null);
let bsModal = null;

const type = ref("subject");

const defaultForm = {
  id: null,
  name: "",
  target_grade: "",
  color: "bg-secondary",

  subject_id: null,
  type_assessment: "quiz",
  grade: 0,
  max_grade: 100,
  weight: 0,
  date_taken: new Date().toISOString().split("T")[0],
};

const form = reactive({ ...defaultForm });

const colors = [
  "bg-warning bg-opacity-75",
  "bg-danger",
  "bg-secondary",
  "bg-primary bg-opacity-25",
  "bg-black",
  "bg-primary",
  "bg-danger bg-opacity-25",
  "bg-warning bg-opacity-25",
  "bg-black bg-opacity-25",
  "bg-success",
];

const setColor = (color) => (form.color = color);

const resetForm = () => Object.assign(form, { ...defaultForm });

/**
 * Open modal for add/edit
 */
const openModal = (modalType, data = null) => {
  type.value = modalType;
  isEditing.value = !!data;

  resetForm();

  if (data) {
    if (modalType === "subject") {
      Object.assign(form, {
        id: data.id,
        name: data.name,
        target_grade: data.target_grade,
        color: data.color || "bg-secondary",
      });
    } else if (modalType === "assessment") {
      Object.assign(form, {
        id: data.id,
        subject_id: data.subject_id,
        name: data.name,
        type_assessment: data.type_assessment ?? data.type, // <- safe mapping
        grade: data.grade,
        max_grade: data.max_grade,
        weight: data.weight,
        date_taken: data.date_taken,
      });
    }
  }

  if (!bsModal) bsModal = new Modal(modalRef.value);
  bsModal.show();
};

const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  try {
    if (type.value === "subject") {
      isEditing.value ? await updateSubject(form) : await addSubject(form);
    } else {
      const payload = {
        subject_id: form.subject_id,
        name: form.name,
        type: form.type_assessment,
        grade: form.grade,
        max_grade: form.max_grade,
        weight: form.weight,
        date_taken: form.date_taken,
      };

      isEditing.value
        ? await updateAssessment({ id: form.id, ...payload })
        : await addAssessment(payload);

      await getSubjects(); // refresh list after add/update
    }

    emit("update", { ...form });
  } finally {
    loading.value = false;
    Modal.getInstance(modalRef.value)?.hide();
  }
};

// Expose modal methods for parent usage
defineExpose({
  openForAdd: (t) => openModal(t),
  openForEdit: (t, d) => openModal(t, d),
});
</script>


<template>
  <div class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="container">
            <h1 class="modal-title fs-5">
              {{ isEditing ? "Edit" : "Add New" }} {{ type === "subject" ? "Subject" : "Assessment" }}
            </h1>
            <p class="mb-0">
              {{ type === "subject" ? isEditing ? "Update your subject details and settings." : "Create a new record to track your progress."  : "Record a new quiz, test, exam, or assignment grade." }}
            </p>
          </div>
        </div>

        <div class="modal-body">
          <form @submit.prevent="handleSubmit">

            <!-- SUBJECT -->
            <template v-if="type === 'subject'">
              <div class="mb-3">
                <label class="form-label">{{ type === "subject" ? "Subject Name" : "Assessment Name" }}</label>
                <input v-model="form.name" type="text" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Target Grade (%)</label>
                <input v-model="form.target_grade" type="number" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Color</label>
                <div class="d-flex gap-2 flex-wrap">
                  <button
                    v-for="color in colors"
                    :key="color"
                    type="button"
                    class="col-2 p-3 rounded-circle shadow border h-75"
                    :class="[color, form.color === color ? 'border-3 border-dark' : '']"
                    @click="setColor(color)"
                  ></button>
                </div>
              </div>
            </template>

            <!-- ASSESSMENT -->
            <template v-if="type === 'assessment'">

              <div class="mb-3">
                <label class="form-label">Subject</label>
                <select v-model="form.subject_id" class="form-select" required>
                  <option value="" disabled>Select a subject</option>
                  <option v-for="subject in subjects" :key="subject.id" :value="subject.id">
                    {{ subject.name }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label class="form-label">Assessment Name</label>
                <input v-model="form.name" type="text" class="form-control" required />
              </div>


              <div class="mb-3">
                <label class="form-label">Type</label>
                <select v-model="form.type_assessment" class="form-select">
                  <option value="quiz">Quizzes</option>
                  <option value="test">Tests</option>
                  <option value="exam">Exam</option>
                  <option value="assignment">Assignment</option>
                  <option value="project">project</option>
                </select>
              </div>
              <div class="row row-cols-2">
                <div class="mb-3">
                  <label class="form-label">Score</label>
                  <input v-model.number="form.grade" type="number" class="form-control" :max="form.max_grade" required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Total Score</label>
                  <input v-model.number="form.max_grade" type="number" class="form-control" required />
                </div>
              </div>
              <div class="row row-cols-2">
                <div class="mb-3">
                  <label class="form-label">Weight (%) <span class="text-secondary fst-italic mb-0">(Grade impact)</span></label>
                  <input v-model.number="form.weight" type="number" class="form-control" step="0.01" min="0" max="100" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Date Taken</label>
                  <input v-model="form.date_taken" type="date" class="form-control" required />
                </div>
              </div>
            </template>

            <div class="d-flex justify-content-end gap-2">
              <button type="button" class="btn btn-outline-primary px-3" @click="bsModal.hide()">Close</button>
              <button type="submit" class="btn btn-outline-primary px-3">{{ isEditing ? "Update" : "Add" }}</button>
            </div>

            <div v-if="loading" class="mt-3 text-center loading-customized">
              <div class="spinner-border text-primary" role="status"></div>
              <p class="mb-0 ps-3 fw-semibold">Loading...</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.loading-customized {
  position: absolute;
  left: 50%;
  top: 29.3%;
  transform: translate(-50%, -50%);
  width: 100%;
  min-height: 150vh;
  max-height: 100vh;
  background: #80808054;
  display: flex;
  justify-content: center;
  align-items: center;
}

.h-75 {
  height: 75px !important;
}
</style>
