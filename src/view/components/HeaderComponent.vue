<script setup>


</script>

<template>
    <div class="container">
        <router-link class="navbar-brand py-2" to="/">Grade Tracker App</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav gap-2 text-center">
          <li class="nav-item">
            <router-link class="nav-link link" to="grades"> <i class="ri-settings-5-line"></i> Manage Subjects</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link link" href="#"><i class="ri-line-chart-line"></i> View Analytics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link" href="#"> <i class="ri-bar-chart-box-line"></i> View Grades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link" href="#"> <i class="ri-calendar-todo-line"></i> Manage Task</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link" href="#"><i class="ri-login-circle-line"> Sign Up </i></a>
          </li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
  .navbar-collapse {
      flex-grow: 0 !important;
  }

  .link{
    border-bottom: 0 solid black;
    transition: border-bottom-width 0.6s ease-in-out;
  }

  /* hover a  */
  .link:hover{
    border-bottom-width: 1px;
  }

</style>
