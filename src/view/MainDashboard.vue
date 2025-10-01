<script setup>
  // import NavigationComponent from './components/NavigationComponent.vue';
  import NavigationChild from './components/NavigationChild.vue';
  import SubNavigation from './components/SubNavigation.vue';

  import { useSubjects } from "../composables/subjects.js";

    const token = localStorage.getItem("token");
    const { subjects, loading} = useSubjects(token);

</script>

<template>
  <!-- <NavigationComponent /> -->
   <NavigationChild/>
  <SubNavigation />

   <div v-if="loading" class="mt-3 text-center loading-customized">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p>Loading...</p>
    </div>

  <div class="container  py-3 px-3 mt-3">
    <div class="row g-3">
      <div class="col-lg-8 col-md-7">
        <div class="border rounded py-3 px-3">
            <div class="px-5">
              <h4>Subject Performance</h4>
              <p class="fst-italic fw-light mb-0">Your current grades and progress toward targets</p>
            </div>

            <div class="px-5">
              <div
                class="row justify-content-around align-items-center py-3 rounded border mb-3"
                v-for="subject in subjects"
                :key="subject.id"
              >
                <div :class="subject.color" class="col-1 ms-2 border rounded-circle shadow" style="height:30px; width:30px">
                </div>
                <div class="col-lg-4">
                  <h6>{{ subject.name }}</h6>
                  <p class="fst-italic fw-light mb-0">{{ subject.assessments_count }} assessments</p>
                </div>

                <div class="col-lg-4 text-start">
                  <h6>{{ subject.current_grade }}%</h6>
                  <p class="fst-italic fw-light mb-0">Target : {{ subject.target_grade }}%</p>
                </div>

                <div class="col-lg-3 pt-3">
                  <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div
                      class="progress-bar"
                      :style="{ width: subject.current_grade + '%' }"
                    >
                      {{ subject.current_grade }}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

      </div>
      <div class="col-lg-4 col-md-5">
        <div class="border rounded  py-3 px-3">
            <div class="px-3">
              <h4>Upcoming Task</h4>
              <p class="fst-italic fw-light mb-0">Your Pending assignments and deadlines</p>
            </div>
            <div>

              <!-- Task Upcoming  -->
              <!-- for loop task to database  -->
              <div class="border rounded p-3 mx-3">
                <h6>Complete Chapter 5 homework</h6>
                <p class="fst-italic fw-light mb-0 mb-0">Mathematics</p>
                <div class="d-flex align-items-center gap-3 pt-1">
                  <p class="bg-danger fs-6 mb-0 px-2 rounded text-white fw-lighter fst-italic">High</p>
                  <p class="fs-6 mb-0 fw-lighter fst-italic">2024-02-01</p>
                </div>
              </div>

            </div>
            <router-link to="task" class="nav-link text-center rounded border mx-3 mt-3">+ Manage All Task</router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.loading-customized{
  height: 100%;
  position: fixed;
  top: 0%;
  background: #ffffffad;
  width: 100%;
  align-content: center;
  margin: 0px !important;
}

</style>
