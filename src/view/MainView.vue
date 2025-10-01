<script setup>
// import SliderComponent from '@/view/components/OfferSliderComponent.vue';

import { onMounted } from "vue";

const about_description =
 [
  "No more spreadsheets.",
  "No more confusing websites.",
  "We'll handle the math."
 ]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>

    <section id="main-content" class="container-fluid text-white py-5">
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
            <div class="text-center">
              <router-link to="/signin" class="customized-btn">Get Start</router-link>
            </div>
        </div>
    </section>

    <section id="about" class="py-5">
         <div class="container animate-on-scroll">
            <h2 class="text-center"> Grade Tracker Design to work for <span class="text-decoration-underline">you</span></h2>
            <div class="text-center">
              <ul class="py-5">
                <li v-for="(item, index) in about_description" :key="index" class="text-decoration-none list-unstyled">
                  <h5 class="fw-light">{{ item }}</h5>
                </li>
              </ul>
            </div>
            <div class="container pb-3">
                <div class="text-center px-5">
                    <img src="/image/image.png" alt="dashboard" class="img-fluid w-100 shadow p-3 mb-5 bg-body-tertiary rounded">
                </div>
            </div>
         </div>

         <div class="container mt-3 animate-on-scroll">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 align-items-center">
              <div class="col">
                <h4>📊 Visual dashboard</h4>
                <p>Track your progress across all subjects with clear progress bars
                  and averages so you always know where you stand.</p>
              </div>
              <div class="col">
                  <img src="/image/visual-dashboard.png" alt="analyze" class="img-fluid w-100 shadow p-3 mb-5 bg-body-tertiary rounded">
              </div>
            </div>
         </div>
         <div class="container mt-3 animate-on-scroll">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 align-items-center flex-row-reverse">
              <div class="col">
                <h4>✅  Assessment history</h4>
                <p>View quizzes, exams, and assignments in one place, with detailed percentages and scores.</p>
              </div>
              <div class="col">
                  <img src="/image/assessments.png" alt="analyze" class="img-fluid w-100 shadow p-3 mb-5 bg-body-tertiary rounded">

              </div>
            </div>
         </div>
         <div class="container mt-3 animate-on-scroll">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 align-items-center ">
              <div class="col">
                <h4>🎯 Goal tracking</h4>
                <p>Compare your current grades with your target grade to stay motivated and on track.</p>
              </div>
              <div class="col">
                  <img src="/image/visual-dashboard.png" alt="analyze" class="img-fluid w-100 shadow p-3 mb-5 bg-body-tertiary rounded">

              </div>
            </div>
         </div>
    </section>




  <!-- <div>
    <SliderComponent class="py-5 container" />
  </div> -->

</template>

<style scoped>
  #about{
  background: #5a2f4b;
  border-top: 2px solid #2b1826;
  color: white;
  }
  

  /* Default hidden state */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-in-out;
  }

  /* Visible state */
  .animate-on-scroll.in-view {
    opacity: 1;
    transform: translateY(0);
  }
  .customized-btn{
    display: inline-block;
    padding-left: 50px;
    padding-right: 50px;
    font-weight: 700;
    color: white;
    background: transparent;
    border: 2px solid white;
    border-radius: 24px;
    transition: 0.5s ease-in-out;
    text-decoration: none;
    
  }
  .customized-btn:hover{
    transform: scale(1.2);
    transition: 0.5s all;
    border: 2px solid #4a2b3f;
    background: white;
    color: #532444;
  }

  #main-content{
    background-image: url(/image/background.png);
    background-size: cover;
    background-repeat: no-repeat;

  }

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
