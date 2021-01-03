<template>
  <div class="text-center">
    <h6 class="text-center">Filter by continents:</h6>
    <div class="btn-group mb-3">
      <button class="btn btn-dark" @click="filter('Americas')">AM</button>
      <button class="btn btn-dark" @click="filter('Europe')">EU</button>
      <button class="btn btn-dark" @click="filter('Asia')">AS</button>
      <button class="btn btn-dark" @click="filter('Oceania')">OC</button>
      <button class="btn btn-dark" @click="filter('Africa')">AF</button>
      <button class="btn btn-dark" @click="filter('')">ALL</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const filter = (region) => {
      store.dispatch("filterByRegion", region);
    };

    return { filter };
  },
};
</script>