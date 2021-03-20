<template>
    <div class="medicine__popup">
          <div class="medicine__popup__contanier">
            <div class="medicine__popup__name">{{medicine.medicationName}}</div>
            <div class="medicine__popup__form">{{medicine.form}}</div>
            <div class="medicine__popup__expDate">{{medicine.expDate}}</div>
            <div class="medicine__popup__strength">{{medicine.strength}}</div>
            <div class="medicine__popup__unit">{{medicine.unit}}</div>
          </div>
        <div class="medicine__popup__background" @click="handleClose" />
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Popup",
  props: {
    medicine: Object,
  },
  computed: {
  },
  methods: {
    handleClose(){
      this.$emit('handleClose', false)
    }
  }
    
});
</script>

<style scoped>
  .medicine__popup__background{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
  }
  .medicine__popup__contanier{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    width: 90%;
    max-width: 400px;
    min-width: 240px;
    z-index: 2;
    background-color: #fff;
    border-radius: 10px;
  }
</style>