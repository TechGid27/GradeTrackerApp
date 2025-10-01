<script setup>
import ChartComponent from './components/ChartsComponent.vue';
// import NavigationComponent from './components/NavigationComponent.vue';
import NavigationChild from './components/NavigationChild.vue';
import SubNavigation from './components/SubNavigation.vue';


// 📊 Bar Chart (Current vs Target Performance)
const barData = {
  labels: ["Chemistry", "Math", "English", "Physics"],
  datasets: [
    { label: "Current Grade", data: [88, 86, 84, 82], backgroundColor: "#3b82f6" },
    { label: "Target Grade", data: [85, 83, 81, 80], backgroundColor: "#a855f7" },
  ],
};
const barOptions = {
  responsive: true,
  plugins: {
    legend: { position: "bottom" },
    title: { display: true, text: "Current vs Target Performance" },
  },
  scales: { y: { beginAtZero: true, max: 100 } },
};

// 📈 Line Chart (Grade Trends)
const lineData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    { label: "Chemistry", data: [80, 82, 85, 88], borderColor: "green", fill: false },
    { label: "Math", data: [82, 84, 87, 90], borderColor: "blue", fill: false },
    { label: "English", data: [78, 80, 82, 85], borderColor: "orange", fill: false },
    { label: "Physics", data: [79, 81, 83, 86], borderColor: "purple", fill: false },
  ],
};
const lineOptions = {
  responsive: true,
  plugins: {
    legend: { position: "bottom" },
    title: { display: true, text: "Grade Trends Over Time" },
  },
};

// 🥧 Pie Chart (Assessment Distribution)
const pieData = {
  labels: ["Quiz", "Test", "Exam", "Assignment", "Project"],
  datasets: [
    {
      label: "Count",
      data: [8, 4, 2, 6, 3],
      backgroundColor: ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a855f7"],
    },
  ],
};
const pieOptions = {
  responsive: true,
  plugins: {
    legend: { position: "right" },
    title: { display: true, text: "Assessment Type Distribution" },
  },
};

// 🌊 Area Chart (Task Completion Trends)
const areaData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Created Tasks",
      data: [5, 8, 6, 9],
      fill: true,
      backgroundColor: "rgba(34,197,94,0.5)",
      borderColor: "green",
    },
    {
      label: "Completed Tasks",
      data: [7, 6, 9, 5],
      fill: true,
      backgroundColor: "rgba(59,130,246,0.5)",
      borderColor: "blue",
    },
  ],
};
const areaOptions = {
  responsive: true,
  plugins: {
    legend: { position: "bottom" },
    title: { display: true, text: "Task Completion Trends" },
  },
};

</script>


<template>

  <!-- <NavigationComponent /> -->
   <NavigationChild />
  <SubNavigation />

  <div class="container  py-3 px-3 mt-3">
    <div class="row g-3">
      <div class="col-lg-7 col-md-7">
        <div class="border rounded py-3 px-3">
          <div class="px-5">
            <h4>Performance Insights</h4>
            <p class="fst-italic fw-light">Key trends and achievement in your academic journey</p>
          </div>
          <div class="px-5">
            <div class="row justify-content-around py-3 rounded border align-items-center bg-success text-white shadow">
              <div class="col-1">
                <i class="ri-line-chart-line fs-1"></i>
              </div>
              <div class="col">
                 <h5>Strong Improvements Trend</h5>
                 <p class="mb-0">Your average grade has improved by 5.2% over the last month</p>
              </div>
            </div>
          </div>

          <div class="row rows-col-2 gap-5 my-3 text-center mx-5">
            <div class="col shadow border py-2 ">
              <h4 class="text-primary fw-bolder">23</h4>
              <p class="mb-0 fst-italic">Total Assesstments</p>
            </div>
             <div class="col shadow border py-2">
              <h4 class="text-primary fw-bolder">12</h4>
              <p class="mb-0 fst-italic">Day Study Streak</p>
            </div>
          </div>

        </div>
      </div>
      <div class="col-lg-5 col-md-5">
        <div class="border rounded  py-3 px-3">
            <div class="px-3">
              <h4>Subject Rankings</h4>
              <p class="fst-italic fw-light">Your sujects ranked by current performance</p>
            </div>
            <div>

              <!-- Task Upcoming  -->
              <!-- for loop task to database  -->
              <div class="row rows-col-3 border rounded p-3 mx-3 align-items-center">
                  <div class="col-2 text-center">
                    <i class="rounded border p-1">1</i>
                  </div>
                  <div class="col-5">Chemistry</div>
                  <div class="col text-end">
                    <h6 class="fs-5 mb-0">91%</h6>
                    <i class="text-success fs-6 m-0 text-nowrap">About Target</i>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container py-3 mt-3">
      <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 mx-0 mb-4 gap-lg-2 justify-content-center align-items-center">
        <div class="col-lg-6 col-md-6 sized col-auto shadow rounded border rounded p-4">
          <h4>Grade Trends Over Time</h4>
          <p>Track your academic progress across all subjects</p>
          <div class="mt-3">
            <ChartComponent type="line" :chart-data="lineData" :chart-options="lineOptions" />
          </div>
        </div>
        <div class="col-lg-5 col-md-6 sized col-auto shadow rounded border rounded p-4">
          <h4>Grade Trends Over Time</h4>
          <p>Track your academic progress across all subjects</p>
          <div class="mt-3">
            <ChartComponent type="bar" :chart-data="barData" :chart-options="barOptions" />
          </div>
        </div>
      </div>
      <div  class="row row-cols-1 row-cols-lg-2 row-cols-md-2 mx-0 mb-4 gap-lg-2 justify-content-center">
        <div class="col-lg-5 w-sized col-md-6 sized-1 col-auto shadow rounded border rounded p-4">
          <h4>Assessment Type Distribution</h4>
          <p>Breakdown of your recorded assessments by type</p>
          <div class="mt-3">
             <ChartComponent type="pie" :chart-data="pieData" :chart-options="pieOptions" />
          </div>
        </div>
        <div class="col-lg-5 col-md-6 w-sized sized-1 col-auto shadow rounded border rounded p-4">
          <h4>Task Completion Trends</h4>
          <p>Weekly task creation vs completion rates</p>
          <div class="mb-5 pt-5">
            <ChartComponent class="line-size" type="line" :chart-data="areaData" :chart-options="areaOptions" />
          </div>
        </div>
      </div>
  </div>

</template>

<style scoped>
  .sized{
  height: 380px;
  width: 553px;
  }
  .w-sized{
     width: 553px;
  }

  .line-size{
    height: 295px;
  }


</style>
