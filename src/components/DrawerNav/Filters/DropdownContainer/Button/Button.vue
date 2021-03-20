<template>
  <button @click="handleClick" class="dropdownBtn">
      <span class="dropdownBtn__text">{{text}}</span>
      <font-awesome-icon icon="caret-down" />
  </button>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  name: "Button",
  props: {
    text: String,
    handleClick: Function
  }
});
</script>

<style scoped>
  .dropdownBtn{
    display: flex;
    align-items: center;
    padding: 0 12px;
    width: 180px;
    height: 50px;
    cursor: pointer;
    border-radius: 10px;
    border: 0;
  }
  .dropdownBtn:focus{
    outline: none;
  }
  .dropdownBtn__text{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    font-size: 15px;
  }
</style>
