<template>
  <div class="container">
    <h1 class="text-center">Country Flags App</h1>
    <p class="text-center mb-4">Created by evinracher</p>
    <Continents />
    <Searcher />
    <CardList />
  </div>
</template>

<script>
import CardList from "./components/CardList.vue";
import Continents from "./components/Continents.vue";
import Searcher from "./components/Searcher.vue";
export default {
  name: "App",
  components: {
    CardList,
    Continents,
    Searcher,
  },
};
</script>

    Continents