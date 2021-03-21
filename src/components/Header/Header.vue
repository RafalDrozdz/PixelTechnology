<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/logo.png"  alt="logo-Rafał Drożdż">
    </div>
    <div class="header__name">
      Rafał Drożdż
    </div>
    </header>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Header",
});
</script>

<style scoped>
header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  width: 100%;
  background: #444;
  color: #fff;
  height: 60px;
  border-bottom: 3px solid #fff;
  z-index: 3;
}
.header__logo{
  height: 100%;
}
.header__logo img{
  height: 100%;
}
.header__name{
  font-size: 1.8em;
}
</style>