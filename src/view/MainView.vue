<script setup>
import SliderComponent from '@/view/components/OfferSliderComponent.vue';
</script>

<template>
  <div class="container h-90 align-content-center">
   <h1 class="text-center fw-bold customize-title animate-title">
      <span>G</span>
      <span>r</span>
      <span>a</span>
      <span>d</span>
      <span>e</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>T</span>
      <span>r</span>
      <span>a</span>
      <span>c</span>
      <span>k</span>
      <span>e</span>
      <span>r</span>
      <span>&nbsp;</span>
      <!-- <span>A</span>
      <span>p</span>
      <span>p</span> -->
    </h1>
    <p class="text-center fst-italic">Track your grades, manage assignments, and monitor progress</p>
  </div>
  <div>
    <p class="text-center fs-3">This Website Application Offer for those Student's want track there grades </p>
    <SliderComponent class="py-5" />
  </div>

</template>

<style scoped>

  .animate-title span {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.5s forwards, bounce 1.5s infinite ease-in-out;
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  /* Delay each letter for a presentation effect */
  .animate-title span:nth-child(1) { animation-delay: 0s; }
  .animate-title span:nth-child(2) { animation-delay: 0.1s; }
  .animate-title span:nth-child(3) { animation-delay: 0.2s; }
  .animate-title span:nth-child(4) { animation-delay: 0.3s; }
  .animate-title span:nth-child(5) { animation-delay: 0.4s; }
  .animate-title span:nth-child(6) { animation-delay: 0.5s; }
  .animate-title span:nth-child(7) { animation-delay: 0.6s; }
  .animate-title span:nth-child(8) { animation-delay: 0.7s; }
  .animate-title span:nth-child(9) { animation-delay: 0.8s; }
  .animate-title span:nth-child(10) { animation-delay: 0.9s; }
  .animate-title span:nth-child(11) { animation-delay: 1s; }
  .animate-title span:nth-child(12) { animation-delay: 1.1s; }
  .animate-title span:nth-child(13) { animation-delay: 1.2s; }
  .animate-title span:nth-child(14) { animation-delay: 1.3s; }
  .animate-title span:nth-child(15) { animation-delay: 1.4s; }
  .animate-title span:nth-child(16) { animation-delay: 1.5s; }

  .customize-title{
    font-size: 90px;
    transform: scale(1);
    transition: all 0.5s;

  }
   @media (max-width:990px){
    .customize-title{
    font-size: 50px;
    transition: all 0.5s;
    transform: scale(0.99);
    }
  }
  @media (max-width:768px){
     .customize-title{
    font-size: 50px;
    transition: all 0.5s;
    transform: scale(0.99);
    }
  }

  .h-90{
  height: 90vh;
  }
</style>
