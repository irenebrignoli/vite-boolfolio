<script>
export default {
  name: "Contacts",
};
</script>

<template>
  <div
    class="ms_viewport-h d-flex flex-column align-content-center align-items-center"
  >
    <h1 class="text-center mt-5">Contact us</h1>
    <!-- example form -->
    <form class="w-75 m-auto">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Example textarea</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Send</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
