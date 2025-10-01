<script setup>
  // import NavigationComponent from './components/NavigationComponent.vue';
  import NavigationChild from './components/NavigationChild.vue';
  
  import SubNavigation from './components/SubNavigation.vue';
  import FilterComponent from './components/FilterComponent.vue';
  import AddUpdateComponent from './components/AddUpdateComponent.vue';

  import { onMounted, ref, computed } from 'vue';
  import { useSubjects } from "../composables/subjects.js";
  

  const token = localStorage.getItem("token");
  const subjectModal = ref(null);
  const searchQuery = ref("");
  const sortOption = ref("name");

  const { subjects, loading, getSubjects, deleteSubject} = useSubjects(token);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this subject?")) {
      return;
    }
    await deleteSubject(id);
  };

  const filteredSubjects = computed(() => {
  if (!subjects.value) return [];

  let result = subjects.value.filter(sub =>
    sub.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

    switch (sortOption.value) {
      case "name":
        return result.sort((a, b) => a.name.localeCompare(b.name));
      case "1":
        return result.sort((a, b) => b.current_grade - a.current_grade);
      case "2":
        return result.sort((a, b) => b.target_grade - a.target_grade);
      case "3":
        return result.sort((a, b) => b.assessments_count - a.assessments_count);
      case "4":
         return result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      default:
        return result;
    }
  });


  onMounted(getSubjects);

</script>

<template>
    <!-- <NavigationComponent /> -->
     <NavigationChild />
    <SubNavigation />
    <FilterComponent
     v-model:searchQuery="searchQuery"
     v-model:sortOption="sortOption"
    />

      <div v-if="loading" class="mt-3 text-center loading-customized">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p>Loading...</p>
      </div>




    <div class="container-fluid">
      <div class="mx-lg-5 mx-md-5 mx-5">
        <div class="mx-lg-5 mx-md-5 mx-1">
          <transition-group name="fade-slide" tag="div" class="customize-margin-x row row-cols-2 row-cols-lg-3 row-cols-md-2   gap-1 mt-3 py-3">
                <div v-for="subject in filteredSubjects"  :key="subject.user_id" class="col cos-size mt-2 rounded border shadow">
                  <div class="row justify-content-between align-items-center px-2 py-3">
                      <div :class="subject.color" class="col-1 border rounded-circle shadow" style="height:30px; width:30px">
                      </div>
                      <div class="col-5">
                        <h4 class="mb-0 text-capitalize">{{ subject.name }}</h4>
                        <p class="mb-0 fs-6 fst-italic">{{ subject.assessments_count }} assessments recorded</p>
                      </div>
                      <div class="col">
                        <div class="d-flex justify-content-end gap-2">
                          <a class="btn ri-edit-circle-line fs-5" @click="subjectModal.openForEdit('subject', subject)"></a>
                          <a class="btn ri-delete-bin-line text-danger fs-5"  @click="handleDelete(subject.id)"></a>
                        </div>
                      </div>
                  </div>
                  <div class="row py-2">
                      <div class="col">
                        <h6 class="text-center">{{ subject.current_grade }}%</h6>
                        <p class="fst-italic fs-7 fw-lighter">Current Grade</p>
                      </div>
                      <div class="col">
                        <h6 class="text-center">{{ subject.target_grade}}%</h6>
                        <p class="fst-italic fs-7 fw-lighter">Target Grade</p>
                      </div>
                      <div class="col">
                        <h6 class="text-center">{{ subject.assessments_count }}</h6>
                        <p class="fst-italic fs-7 fw-lighter">Assessments</p>
                      </div>
                  </div>
                  <div id="progress" class=" py-3">
                      <div class="row gap-1 align-items-center">
                          <div class="col">
                            <h6>Progress to Target</h6>
                          </div>
                          <div class="col ">
                            <p class="mb-0 w-50 text-center rounded border text-white bg-success justify-end">{{subject.current_grade}}%</p>
                          </div>
                      </div>
                      <div class="progress mt-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="height: 6px">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" v-if="subject.current_grade > subject.target_grade" :style="{ width: 100 + '%' }"></div>
                        <div class="progress-bar progress-bar-striped progress-bar-animated" v-else :style="{ width: subject.current_grade + '%' }"></div>
                      </div>
                      <div class="row justify-content-center gap-2 align-items-center text-center p-3">
                        <div class="col rounded shadow  bg-secondary text-white">
                          <h6 class="fs-7 mb-0 py-1"><i class="ri-donut-chart-line"></i> Target : {{ subject.target_grade}}%</h6>
                        </div>
                        <div class="col-4 rounded shadow  bg-secondary text-white">
                          <h6 class="fs-7 mb-0 padding-customized"><i class="ri-book-open-line"></i> {{ subject.assessments_count }} recorded</h6>
                        </div>
                        <div class="col-4 rounded shadow  bg-success text-white">
                          <h6 class="fs-7 mb-0 padding-customized">Above Target</h6>
                        </div>
                      </div>
                  </div>
                </div>
            </transition-group>
        </div>
      </div>
    </div>

    <AddUpdateComponent
      ref="subjectModal"
       @add="handleAdd"
    />



</template>


<style scoped>

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s ease-in-out;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.padding-customized{
  padding-top: 11px;
  padding-bottom: 11px;
}

.loading-customized{
  height: 100%;
  position: fixed;
  top: 0%;
  background: #ffffffad;
  width: 100%;
  align-content: center;
  margin: 0px !important;
}

.justify-end{
  justify-self: end;
}
.fs-8{
  font-size: 10px;
}
.fs-7{
  font-size: 12px;
}
.cos-size{
  width: 370px;
}
</style>
