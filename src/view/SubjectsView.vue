<script setup>
  import NavigationComponent from './components/NavigationComponent.vue';
  import SubNavigation from './components/SubNavigation.vue';


</script>

<template>
    <NavigationComponent />
    <SubNavigation />

    <div class="container mt-4">
      <div class="d-flex">
          <div class="col-lg-6">
            <div class="input-wrapper">
              <i class="ri-seo-line"></i>
              <input
                type="text"
                class="form-control ps-5"
                placeholder="Search Subjects..."
                aria-label="Search Subjects"
              />
            </div>
          </div>

      </div>


    </div>

</template>


<style scoped>

.input-wrapper {
  position: relative;
}

.input-wrapper i {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #555;
}

/* Add left padding so text doesn't overlap the icon */
.input-wrapper input {
  padding-left: 40px !important;
}
</style>
