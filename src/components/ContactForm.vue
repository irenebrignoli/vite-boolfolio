<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "ContactForm",
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      success: false,
      sending: false,
      errors: {},
    };
  },
  methods: {
    sendForm() {
      this.success = false;
      this.sending = true;

      axios
        .post(`${this.store.baseUrl}/api/contacts`, {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((response) => {
          if (response.data.success) {
            this.name = "";
            this.email = "";
            this.message = "";
            this.success = true;
          } else {
            this.errors = response.data.errors;
          }

          this.sending = false;
        })
        .catch((error) => {
          this.sending = false;
        });
    },
  },
};
</script>

<template>
  <div v-if="success" class="alert alert-success" role="alert">
    Thank you for contacting me, I'll reply within 24 working hours!
  </div>

  <div class="d-flex flex-column align-content-center align-items-center">
    <h1 class="text-center my-5">Contact us</h1>

    <form @submit.prevent="sendForm()" class="w-75 m-auto">
      <!-- name -->
      <div class="mb-3">
        <label for="name" class="form-label">Your name:</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.name }"
          id="name"
          v-model="name"
        />
      </div>
      <div class="invalid-feedback" v-for="error in errors.name">
        {{ error }}
      </div>

      <!-- email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email address:</label>
        <input
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          id="email"
          v-model="email"
        />
      </div>
      <div class="invalid-feedback" v-for="error in errors.email">
        {{ error }}
      </div>

      <!-- message -->
      <div class="mb-3">
        <label for="message" class="form-label">Write here your message:</label>
        <textarea
          class="form-control"
          id="message"
          :class="{ 'is-invalid': errors.message }"
          rows="3"
          v-model="message"
        ></textarea>
      </div>
      <div class="invalid-feedback" v-for="error in errors.message">
        {{ error }}
      </div>

      <!-- button -->
      <button type="submit" class="btn btn-primary mt-3" :disabled="sending">
        {{ sending ? "Sending..." : "Send message" }}
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
