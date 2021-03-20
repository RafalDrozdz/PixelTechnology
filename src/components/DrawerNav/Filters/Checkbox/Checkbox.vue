<template>
    <div @click="handleClick">
        <input type="checkbox" :id="id" v-model="checked">
        <label :for="id">{{text}}</label>
    </div>
</template>

<script>
import Vue from "vue"
import store from "@/store";

export default Vue.extend({
  name: "Checkbox",
  props: {
      id: String,
      checkedName: String,
      text: String,
  },
  computed: {
      checked(){
          const filters = store.getters.getFilters
          return filters[this.checkedName];
      }
  },
  methods:{
      handleClick(){

      }
  }
});
</script>

<style scoped>

</style>