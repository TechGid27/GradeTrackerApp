<script setup>


import { useRoute} from "vue-router";
import { useSubjects } from "../../composables/subjects.js";
import { useAssessment } from "../../composables/assessment.js";
import AddUpdateComponent from "./AddUpdateComponent.vue";
import { ref } from "vue";

const route = useRoute();
const token = localStorage.getItem("token");

const { addSubject } = useSubjects(token);
const { addAssessment  } = useAssessment(token);

const subjectModal = ref(null);

const handleAdd = async (form) => {
  await addSubject(form);
  await addAssessment(form);

};

</script>
<template>
<div class="container justify-items-end">
  <ul class="list-unstyled text-center w-customized">
      <li v-if="route.name === 'Grades'" class="nav-item py-1">
        <a  class="nav-link customize-border py-1 link" @click="subjectModal.openForAdd('assessment')">+ Assessments</a>
      </li>
      <li v-else-if="route.name === 'ManageTask'" class="nav-item py-1">
        <a  class="nav-link customize-border py-1 link" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add Task</a>
      </li>
      <li v-else-if="route.name === 'Subjects'" class="nav-item py-1">
        <a  class="nav-link customize-border py-1 link" @click="subjectModal.openForAdd('subject')">+ Add Subject</a>
      </li>
      <li v-else class="nav-item py-1">
        <router-link  @click="$emit('link-click')"  class="nav-link customize-border py-1 link" to="subjects">+ Add Subject</router-link>
      </li>
  </ul>
</div>

  <AddUpdateComponent
    ref="subjectModal" @add="handleAdd"
  />
</template>

<style scoped>
.w-customized{
    width: 273px
}
.customize-border{
    border: solid 1px #d5d5d5f5;
    border-radius: 6px;
    box-shadow: gray 0px 2.5px 3px 0px;

}
.customize-border:hover{
    box-shadow: #0a0c1a 0px 2.5px 3px 0px;
    transition: all 0.5s;
}
</style>