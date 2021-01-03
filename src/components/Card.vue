<template>
  <div class="card my-1">
    <div class="card-body">
      <h5 class="text-center">{{ country.name }}</h5>
      <p class="text-center">
        <img
          class="img-fluid w-50 border"
          :src="country.flag"
          :alt="`flag-${country.name}`"
        />
      </p>
      <p class="card-text">
        <span class="badge badge-dark d-block mb-1"
          >nativeName: {{ country.nativeName }}</span
        >
        <span class="badge badge-info d-block mb-1 p-3"
          >population: {{ formatNumber(country.population) }}</span
        >
        <span class="badge badge-dark d-block mb-1"
          >capital: {{ country.capital }}</span
        >
        <span class="badge badge-dark d-block mb-1"
          >region: {{ country.region }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["country"],
  setup() {
    const formatNumber = (num) => {
      return new Intl.NumberFormat("us-US").format(num);
    };

    return { formatNumber };
  },
};
</script>