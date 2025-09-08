<script setup>
  import NavigationComponent from './components/NavigationComponent.vue';
  import SubNavigation from './components/SubNavigation.vue';

</script>



<template>
  <NavigationComponent />
  <SubNavigation />

  <div class="container  py-3 px-3 mt-3">
    <div class="row">
      <div class="col-lg-8 col-md-7">
        <div class="border rounded py-3 px-3">
          <div class="px-5">
            <h4>Subject Performance</h4>
            <p class="fst-italic fw-light">Your current grades and progress toward targets</p>
          </div>
          <div class="px-5">
            <div class="row justify-content-around py-3 rounded border">
                <div class="col-lg-4">
                  <h6>Mathematics</h6>
                  <p class="fst-italic fw-light">3 assesments</p>
                </div>
                <div class="col-lg-4 text-start">
                  <h6>90%</h6>
                  <p class="fst-italic fw-light">Target : 85%</p>
                </div>
                <div class="col-lg-3 pt-3">
                  <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 90%">90%</div>
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
              <p class="fst-italic fw-light">Your Pending assignments and deadlines</p>
            </div>
            <div>

              <!-- Task Upcoming  -->
              <!-- for loop task to database  -->
              <div class="border rounded p-3 mx-3">
                <h6>Complete Chapter 5 homework</h6>
                <p class="fst-italic fw-light mb-0">Mathematics</p>
                <div class="d-flex align-items-center gap-3 pt-1">
                  <p class="bg-danger fs-6 mb-0 px-2 rounded text-white fw-lighter fst-italic">High</p>
                  <p class="fs-6 mb-0 fw-lighter fst-italic">2024-02-01</p>
                </div>
              </div>

            </div>
            <a href="#" class="nav-link text-center rounded border mx-3 mt-3">+ Manage All Task</a>
        </div>
      </div>

    </div>



  </div>




</template>
