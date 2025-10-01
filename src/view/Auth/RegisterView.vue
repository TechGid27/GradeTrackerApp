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
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
const loading = ref(false);
const errors = reactive({});
const localErrors = reactive({});
const successMessage = ref("");

// Validate frontend before submit
const validateForm = () => {
  localErrors.password = "";
  localErrors.password_confirmation = "";

  if (!form.email) {
    localErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    localErrors.email = "Please enter a valid email address";
  } else {
    localErrors.email = "";
  }

  if (form.password.length > 0 && form.password.length < 6) {
    localErrors.password = "Password must be at least 6 characters";
  }

  if (form.password_confirmation && form.password !== form.password_confirmation) {
    localErrors.password_confirmation = "Passwords do not match";
  }

  return !localErrors.password && !localErrors.password_confirmation;
};



// Submit
const register = async () => {
  // Reset previous state
  Object.keys(errors).forEach((key) => (errors[key] = ""));
  successMessage.value = "";
  localErrors.value = "";
  loading.value = true;

  const start = Date.now();

  // Stop if frontend validation fails
  if (!validateForm()) {
    loading.value = false;
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      // Backend validation errors
      if (data.errors) {
        Object.assign(errors, data.errors);
      } else if (typeof data === "object") {
        Object.assign(errors, data);
      } else {
        console.error("Unexpected response:", data);
        localErrors.value = "Something went wrong. Please try again.";
        setTimeout(() => (localErrors.value = ""), 3000);
      }
      return;
    }

    // Success
    const elapsed = Date.now() - start;
    const minTime = 1500;

    setTimeout(() => {
      successMessage.value = "Registration successful!";
      Object.keys(form).forEach((key) => (form[key] = ""));
    }, Math.max(0, minTime - elapsed));
    
  } catch (err) {
    console.error("Network/Server Error:", err);
    localErrors.value = "Unable to register. Please try again later.";
    setTimeout(() => (localErrors.value = ""), 3000);
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
      @submit.prevent="register"
      :class="['border shadow rounded p-5', isMobile ? 'mx-2' : 'w-50 mx-auto']"
      class="mt-5"
      >
      <!-- Name Err -->
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input required v-model="form.name" type="text" class="form-control" />
        <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
      </div>

      <!-- Email Err -->
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input required v-model="form.email" type="email" class="form-control" />
        <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
      </div>

      <!-- Password Err -->
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input required v-model="form.password" type="password" class="form-control" />

        <!-- Frontend Err -->
        <small class="text-danger" v-if="localErrors.password">
          {{ localErrors.password }}
        </small>

        <!-- Backend Err -->
        <small class="text-danger" v-if="errors.password">
          {{ errors.password[0] }}
        </small>
      </div>

      <!-- Confirm Password Err-->
      <div class="mb-3">
        <label class="form-label">Confirm Password</label>
        <input required
          v-model="form.password_confirmation"
          type="password"
          class="form-control"
        />

        <!-- Frontend Err -->
        <small class="text-danger" v-if="localErrors.password_confirmation">
          {{ localErrors.password_confirmation }}
        </small>

        <!-- Backend Err-->
        <small class="text-danger" v-if="errors.password_confirmation">
          {{ errors.password_confirmation[0] }}
        </small>
      </div>

      <!-- Submit-->
      <div class="text-center">
        <button type="submit" class="btn btn-primary shadow px-5">
          Signup
        </button>
      </div>

      <!-- Success -->
      <div class="mt-3 text-success" v-if="successMessage">
        {{ successMessage }}
      </div>
    </form>
  </div>
</template>

