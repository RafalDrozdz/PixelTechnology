<template>
    <div class="noPatients">
      There is no patients yet... 
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "NoPatients",
});
</script>

<style scoped>
  .noPatients{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 60px);
    font-size: 40px;
  }
  @media (max-width: 1025px) {
        .noPatients{
          font-size: 20px;
          min-height: calc(100vh - 180px);
        }
  }

</style>