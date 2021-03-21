<template>
  <button @click="handleClick" class="dropdown-btn">
      <span class="dropdown-btn__text">{{text}}</span>
      <font-awesome-icon 
       :class="`dropdown-btn__icon ${isOpen ? 'dropdown-btn__icon--active' : ''}`" 
       icon="caret-down" 
      />
  </button>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  name: "Button",
  props: {
    text: String,
    handleClick: Function,
    isOpen: Boolean
  }
});
</script>

<style scoped>
  .dropdown-btn{
    display: flex;
    align-items: center;
    padding: 0 12px;
    width: 180px;
    height: 50px;
    cursor: pointer;
    border-radius: 10px;
    border: 0;
  }
  .dropdown-btn:focus{
    outline: none;
  }
  .dropdown-btn__text{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    font-size: 15px;
  }
  .dropdown-btn__icon{
    font-size: 18px;
    transition: transform .4s;
    transform-origin: 50% 55%;
  }
  .dropdown-btn__icon--active{
    transform: rotate(180deg);
  }
</style>
