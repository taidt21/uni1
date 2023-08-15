<!-- @format -->

<template>
  <section>
    <div
      class="container d-flex justify-content-center flex-column align-items-center">
      <h1 class="title text-blue">404</h1>
      <h2 class="description text-black">
        OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!
      </h2>
      <div class="search-box d-flex gap-3 mt-5 flex-column flex-sm-row">
        <div class="search-input flex-grow-1">
          <input class="w-100" type="text" placeholder="Search..." />
        </div>
        <Button class="btn-submit" textBtn="Search" />
      </div>
      <router-link
        class="text-decoration-none fw-bold text-blue mt-5 d-flex align-items-center gap-2"
        to="/">
        <span class="arrow"></span>
        Return To Homepage</router-link
      >
    </div>
  </section>
</template>

<script setup>
import Button from "../components/Button.vue";
</script>

<style scoped>
section {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.title {
  font-size: 168px;
  font-weight: 900;
}
.description {
  font-size: 22px;
  text-transform: uppercase;
  margin-top: 20px;
}

.btn-search {
  background-color: var(--dark-blue);
}
.search-input input {
  border: 1px solid grey;
  padding: 12px 16px;
}
.arrow {
  border: solid var(--dark-blue);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
@media (max-width: 992px) {
  .title {
    font-size: 85px;
  }
}
@media (max-width: 576px) {
  .title {
    font-size: 60px;
  }
  .description {
    text-align: center;
  }
  .btn-submit {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
