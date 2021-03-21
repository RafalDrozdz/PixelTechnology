<template>
     <div class="medicine__popup__close" @click="handleClose"><font-awesome-icon icon="times" /></div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MedicineClose",
  methods: {
    handleClose(){
      this.$emit('handleClose', false)
    }
  }
});
</script>

<style scoped>
  .medicine__popup__close{
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      right: 15px;
      top: 12px;
      font-size: 24px;
      line-height: 24px;
      cursor: pointer;
      transition: transform .4s;
  }
  .medicine__popup__close:hover{
    transform: rotate(180deg);
  }
</style>