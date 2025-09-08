<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();



</script>

<template>

    <div v-if="route.name == 'Dashboard'" class="container row gap-2 mx-auto">
    <!-- GPA -->
    <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center">
        <span>Overall GPA</span>
        <i class="ri-donut-chart-line"></i>
      </div>
      <div class="pt-2">
        <h4>88.25</h4>
        <p class="fst-italic fw-light mt-3">+2.1 from last semester</p>
      </div>

    </div>
    <!-- Active Subjects -->
     <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Active Subjects</span>
        <i class="ri-book-open-line"></i>
      </div>
      <div class="pt-2">
        <h4>4</h4>
        <p class="fst-italic fw-light mt-3 ">Currently Tracking</p>
      </div>
    </div>
    <!-- Pending Task -->
    <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Pending Task</span>
        <i class="ri-calendar-line"></i>
      </div>
      <div class="pt-2">
        <h4>3</h4>
        <p class="fst-italic fw-light mt-3">Due this week</p>
      </div>
    </div>
    <!-- Completed Task  -->
     <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Completed</span>
        <i class="ri-checkbox-circle-line"></i>
      </div>
      <div class="pt-2">
        <h4>12</h4>
        <p class="fst-italic fw-light mt-3">Task this month</p>
      </div>

    </div>
    </div>

    <div v-if="route.name == 'Subjects'" class="container row gap-2 mx-auto">
    <!-- Subjects -->
    <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center">
        <span>Total Subjects</span>
        <i class="ri-book-open-line"></i>
      </div>
      <div class="pt-2">
        <h4>4</h4>
        <p class="fst-italic fw-light mt-3">Currently Tracking</p>
      </div>

    </div>
    <!-- Above Target -->
     <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Above Target</span>
        <i class="ri-donut-chart-line"></i>
      </div>
      <div class="pt-2">
        <h4>4</h4>
        <p class="fst-italic fw-light mt-3 ">Out of 4 Subjects</p>
      </div>
    </div>
    <!-- Average Grade -->
    <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Average Grade</span>
        <i class="ri-line-chart-fill"></i>
      </div>
      <div class="pt-2">
        <h4>88.3%</h4>
        <p class="fst-italic fw-light mt-3">Across all subjects</p>
      </div>
    </div>
    <!-- Completed Task  -->
     <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Total Assessments</span>
        <i class="ri-award-line"></i>
      </div>
      <div class="pt-2">
        <h4>5</h4>
        <p class="fst-italic fw-light mt-3">Recorded this semester</p>
      </div>

    </div>
    </div>

</template>
