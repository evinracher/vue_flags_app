<template>
  <form>
    <input
      class="form-control my-3"
      type="text"
      placeholder="Enter country name"
      v-model="text"
      @keyup="processInput"
    />
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const text = ref("");
    const store = useStore();

    const processInput = () => {
      store.dispatch("filterByName", text.value.trim());
    };

    return { text, processInput };
  },
};
</script>