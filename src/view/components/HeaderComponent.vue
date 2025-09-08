<script setup>


</script>

<template>
    <div class="container">
        <router-link class="navbar-brand py-2" to="/"><img src="/image/logo.png" alt="Logo" class="logo"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav gap-2 text-center">
          <li class="nav-item">
            <router-link  class="nav-link link" to="Dashboard"><i class="ri-login-circle-line"> Sign Up </i></router-link>
          </li>
        </ul>
      </div>

    </div>
</template>

<style scoped>
  .logo{
    width: 100px;
  }
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
