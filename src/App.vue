<script setup>
import HeaderComponent from '@/view/components/HeaderComponent.vue'
// import FooterComponent from '@/view/components/FooterComponent.vue'
</script>

<template >
  <div>
    <header class="navbar navbar-expand-lg bg-body-primary">
      <HeaderComponent />
    </header>

    <section>
        <router-view />
    </section>

    <!-- <footer>
      <FooterComponent />
    </footer> -->
  </div>

</template>

