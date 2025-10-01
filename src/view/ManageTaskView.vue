<script setup>
  // import NavigationComponent from './components/NavigationComponent.vue';
  import NavigationChild from './components/NavigationChild.vue';
  import SubNavigation from './components/SubNavigation.vue';
  import FilterComponent from './components/FilterComponent.vue';


</script>

<template>
    <!-- <NavigationComponent /> -->
     <NavigationChild />
    <SubNavigation />
    <FilterComponent />

      <div class="container mt-3">

            <ul class="row row-cols-1 customize-bg row-cols-md-5  row-cols-lg-5 list-unstyled text-center align-items-center shadow border rounded mx-1">
                <li class="nav-item p-1">
                  <button class="text-center customize-button" >All</button>
                </li>
                <li class="nav-item p-1">
                  <button class="text-center customize-button" >Pending</button>
                </li>
                <li class="nav-item p-1">
                  <button class="text-center customize-button" >Due today</button>
                </li>
                <li class="nav-item p-1">
                  <button class="text-center customize-button" >Over Due</button>
                </li>
                <li class="nav-item p-1">
                  <button class="text-center customize-button" >Complated</button>
                </li>
            </ul>
       </div>
       <div class="container mt-3 pb-5">
          <div class="customize-bg p-4 shadow rounded">
             <div class="row row-cols-2 align-items-center">
              <div class="col">
                <h5 class="mb-0">Complete Chapter 5 Homework</h5>
                <p class="mb-0">Solve problems 1-2 from the algebra textbook</p>
              </div>
              <div class="col text-end">
                <i class="ri-edit-circle-line fs-6 px-2"></i>
                <i class="ri-delete-bin-line text-danger fs-6 px-2"></i>
              </div>
            </div>
            <div class="d-flex gap-2 mt-2">
              <p class="mb-0 fs-6 px-2 rounded shadow bg-danger text-white">High</p>
              <p class="mb-0 fs-6 px-2 rounded shadow bg-white">(Color) Mathematics</p>
              <p class="mb-0 fs-6 px-2 text-danger">Over Due</p>
            </div>
          </div>
       </div>

</template>

<style scoped>
.customize-bg{
  background: #8a8a8a57;
}
.customize-button{
    width: 100%;
    border: none;
    border-radius: 8px;
    background: white;
    box-shadow: 0px 2px 1px gray;
    transition: ease-in-out 0.3s all;
}
.customize-button:hover{
    box-shadow: 0px 2px 1px #000000;
    font-weight: bold;
    transition: ease-in-out 0.2s all;
}

</style>
