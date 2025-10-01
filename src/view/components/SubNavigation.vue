<script setup>
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
import { useSubjects } from "../../composables/subjects.js";

const route = useRoute();

const token = localStorage.getItem("token");
const { subjects, getSubjects } = useSubjects(token);

// Subjects above target
const aboveTarget = computed(() =>
  subjects.value.filter(s => s.current_grade > s.target_grade).length
);

// Average grade (percentage)
const averageGrade = computed(() => {
  if (!subjects.value.length) return 0;
  const sum = subjects.value.reduce((acc, s) => acc + (s.current_grade || 0), 0);
  return (sum / subjects.value.length).toFixed(1); // one decimal place
});

// Total assessments
const totalAssessments = computed(() => {
  if (!subjects.value.length) return 0;
  return subjects.value.reduce((acc, s) => acc + (s.assessments_count || 0), 0);
});

// Overall GPA (percentage)
// const overallGPA = computed(() => {
//   if (!subjects.value.length) return 0;
//   const total = subjects.value.reduce((acc, s) => {
//     const avg = s.current_grade || 0;
//     return acc + avg;
//   }, 0);
//   return (total / subjects.value.length).toFixed(2);
// });

// Optional: Overall GPA in 4.0 scale
const percentageToGPA = (percent) => {
  if (percent >= 90) return 4.0;
  if (percent >= 80) return 3.0;
  if (percent >= 70) return 2.0;
  if (percent >= 60) return 1.0;
  return 0;
};

const overallGPA4 = computed(() => {
  if (!subjects.value.length) return 0;
  const total = subjects.value.reduce((acc, s) => acc + percentageToGPA(s.current_grade || 0), 0);
  return (total / subjects.value.length).toFixed(2);
});

onMounted(getSubjects);


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
    <div v-if="subjects.length > 0" class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center">
        <span>Total Subjects</span>
        <i class="ri-book-open-line"></i>
      </div>
      <div class="pt-2">
        <h4>{{ subjects.length }}</h4>
        <p class="fst-italic fw-light mt-3">Currently Tracking</p>
      </div>


    </div>

    <div v-else class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center">
        <span>Total Subjects</span>
        <i class="ri-book-open-line"></i>
      </div>
      <div class="pt-2">
        <h4>0</h4>
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
        <h4>{{ aboveTarget }}</h4>
        <p class="fst-italic fw-light mt-3">Out of {{ subjects.length }} Subjects</p>
      </div>
    </div>
    <!-- Average Grade -->
    <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Average Grade</span>
        <i class="ri-line-chart-fill"></i>
      </div>
      <div class="pt-2">
        <h4>{{ averageGrade }}%</h4>
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
        <h4>{{ totalAssessments }}</h4>
        <p class="fst-italic fw-light mt-3">Recorded this semester</p>
      </div>

    </div>
    </div>

    <div v-if="route.name == 'Analytics'" class="container row gap-2 mx-auto">
    <!-- Overall GPA -->
    <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center">
        <span>Overall GPA</span>
        <i class="ri-donut-chart-line"></i>

      </div>
      <div class="pt-2">
        <h4>4</h4>
        <p class="fst-italic fw-light mt-3">Currently Tracking</p>
      </div>

    </div>
    <!-- Task Completion -->
     <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Task Completion</span>
        <i class="ri-calendar-line"></i>

      </div>
      <div class="pt-2">
        <h4>78%</h4>
        <div class="progress mt-4" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="height: 10px">
          <div class="progress-bar" style="width: 78%"></div>
        </div>
      </div>
    </div>
    <!-- Target Achieved -->
    <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Target Achieved</span>
        <i class="ri-award-line"></i>
      </div>
      <div class="pt-2">
        <h4>4/4</h4>
        <p class="fst-italic fw-light mt-3">Subjects above target</p>
      </div>
    </div>
    <!-- Study Streak  -->
     <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Study Streak</span>
        <i class="ri-book-open-line"></i>
      </div>
      <div class="pt-2">
        <h4>12</h4>
        <p class="fst-italic fw-light mt-3">Days consecutive</p>
      </div>

    </div>
    </div>

    <div v-if="route.name == 'Grades'" class="container row gap-2 mx-auto">
      <!-- Overall GPA -->
      <div class="col border rounded px-4 py-3">
        <div class="d-flex justify-content-between align-items-center">
          <span>Overall GPA</span>
          <i class="ri-donut-chart-line"></i>
        </div>
        <div class="pt-2">
          <h4>{{ overallGPA4 }}</h4>
          <p class="fst-italic fw-light mt-3">Currently Tracking</p>
        </div>
      </div>

      <!-- Total Assessments -->
      <div class="col border rounded px-4 py-3">
        <div class="d-flex justify-content-between align-items-center">
          <span>Total Assessments</span>
          <i class="ri-book-open-line"></i>
        </div>
        <div class="pt-2">
          <h4>{{ totalAssessments }}</h4>
          <p class="fst-italic fw-light mt-3">Recorded this semester</p>
        </div>
      </div>

      <!-- Targets Met -->
      <div class="col border rounded px-4 py-3">
        <div class="d-flex justify-content-between align-items-center">
          <span>Targets Met</span>
          <i class="ri-calendar-line"></i>
        </div>
        <div class="pt-2">
          <h4>{{ aboveTarget }}</h4>
          <p class="fst-italic fw-light mt-3">
            Out of {{ subjects.length }} subjects
          </p>
        </div>
      </div>

      <!-- Best Subject -->
      <div class="col border rounded px-4 py-3">
        <div class="d-flex justify-content-between align-items-center">
          <span>Best Subject</span>
          <i class="ri-award-line"></i>
        </div>
        <div class="pt-2">
          <h4>
            {{
              subjects.length
                ? Math.max(...subjects.map(s => s.current_grade || 0)) + '%'
                : '0%'
            }}
          </h4>
          <p class="fst-italic fw-light mt-3">
            {{
              subjects.length
                ? subjects.reduce((best, s) =>
                    (s.current_grade || 0) > (best.current_grade || 0) ? s : best
                  ).name
                : '-'
            }}
          </p>
        </div>
      </div>
    </div>

     <div v-if="route.name == 'ManageTask'" class="container row gap-2 mx-auto">
    <!-- Total Tasks -->
    <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center">
        <span>Total Tasks</span>
        <i class="ri-list-check-3"></i>

      </div>
      <div class="pt-2">
        <h4>5</h4>

      </div>

    </div>
    <!-- Pending -->
     <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Pending</span>
        <i class="ri-history-line"></i>
      </div>
      <div class="pt-2">
        <h4 class="text-primary">4</h4>

      </div>

    </div>
    <!-- Due Today -->
     <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Due Today</span>
        <i class="ri-error-warning-line"></i>

      </div>
      <div class="pt-2">
        <h4 class="text-warning">4</h4>

      </div>
    </div>
    <!-- Overdue -->
    <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Overdue</span>
        <i class="ri-error-warning-line"></i>
      </div>
      <div class="pt-2">
        <h4 class="text-danger">4</h4>

      </div>
    </div>
    <!-- Completed -->
    <div class="col border rounded px-4 py-3">
      <div class="d-flex justify-content-between align-items-center ">
        <span>Completed</span>
        <i class="ri-checkbox-circle-line"></i>
      </div>
      <div class="pt-2">
        <h4 class="text-success">1</h4>

      </div>
    </div>

    </div>


</template>
