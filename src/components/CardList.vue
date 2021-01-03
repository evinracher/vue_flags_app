<template>
  <div class="row">
    <div class="col-12" v-for="(country, index) in countries" :key="index">
      <Card :country="country" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: { Card },
  setup() {
    const store = useStore();

    const countries = computed(() => {
      return store.getters.countriesByPopulation;
    });

    onMounted(async () => {
      await store.dispatch("getCountries");
      await store.dispatch("filterByRegion", "");
    });

    return { countries };
  },
};
</script>