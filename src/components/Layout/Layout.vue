<template>
  <div>
      <Header />
      <slot />
  </div>
</template>

<script>
import Vue from "vue";
import Header from "@/components/Header"

export default Vue.extend({
  name: "Layout",
  components: {
      Header,
  }
});
</script>