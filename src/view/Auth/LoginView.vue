<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";

// Responsive check
const width = ref(window.innerWidth);
const isMobile = computed(() => width.value <= 768);

const handleResize = () => (width.value = window.innerWidth);
onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));

// Form state
const form = reactive({
  email: "",
  password: "",
});

const errors = reactive({});       // backend validation
const localErrors = reactive({});  // frontend validation
const successMessage = ref("");
const ErrorMessage = ref("");
const loading = ref(false);

const validateForm = () => {
  localErrors.email = "";
  localErrors.password = "";


  if (!form.email) {
    localErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    localErrors.email = "Please enter a valid email address";
  }

  if (!form.password) {
    localErrors.password = "Password is required";
  } else if (form.password.length < 6) {
    localErrors.password = "Password must be at least 6 characters";
  }
    setTimeout( ()=> {
      Object.keys(localErrors).forEach((key) => (localErrors[key] = ""));

    }, 3000)

  return !localErrors.email && !localErrors.password;
};

// ✅ Submit Login
const login = async () => {
  loading.value = true;
  const start = Date.now();

  // Clear previous states
  Object.keys(errors).forEach((key) => (errors[key] = ""));
  successMessage.value = "";
  ErrorMessage.value = "";

  // Stop if frontend validation fails
  
  if (!validateForm()) {
    loading.value = false;
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle error responses
      if (data.message) {
        ErrorMessage.value = data.message || "Please try again...";
        setTimeout(() => (ErrorMessage.value = ""), 3000);
      }

      if (data.errors) {
        Object.assign(errors, data.errors);
      } else if (typeof data === "object") {
        Object.assign(errors, data);
      } else {
        console.error("Unexpected response:", data);
      }
      return;
    }
    const elapsed = Date.now() - start;
    const minTime = 1500;

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    setTimeout(() => {

      successMessage.value = "Login successful!";
      Object.keys(form).forEach((key) => (form[key] = ""));
      window.location.href = "/dashboard";
    }, Math.max(0, minTime - elapsed));


  } catch (err) {

    console.error("Network/Server Error:", err);
    ErrorMessage.value = "Something went wrong. Please try again.";
    setTimeout(() => (ErrorMessage.value = ""), 3000);

  } finally {
    loading.value = false;
  }
};

</script>

<template>
  <div class="container full-h">
        <!-- Overlay loader -->
        <div
          v-if="loading"
          class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-75"
          style="z-index: 10"
        >
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
    <form
      @submit.prevent="login"
      :class="['border shadow rounded p-5', isMobile ? 'mx-2' : 'w-50 mx-auto']"
    >
      <!-- Email -->
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input v-model="form.email" type="email" class="form-control" />

        <!-- Frontend error -->
        <small class="text-danger" v-if="localErrors.email">{{ localErrors.email }}</small>
        <!-- Backend error -->
        <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
      </div>

      <!-- Password -->
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input v-model="form.password" type="password" class="form-control" />

        <!-- Frontend error -->
        <small class="text-danger" v-if="localErrors.password">{{ localErrors.password }}</small>
        <!-- Backend error -->
        <small class="text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
      </div>

      <!-- Submit -->
      <div class="text-center">
        <button type="submit" class="btn btn-primary shadow px-5">Login</button>
      </div>

      <!-- Success -->
      <div class="mt-3 text-success" v-if="successMessage">{{ successMessage }}</div>
      <div class="mt-3 text-danger" v-if="ErrorMessage">{{ ErrorMessage }}</div>
    </form>
  </div>
</template>

