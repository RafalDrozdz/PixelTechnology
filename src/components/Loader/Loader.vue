<template>
        <div class="loader">
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
</template>

<script>
import Vue from "vue";



export default Vue.extend({
  name: "Loader",
});
</script>

<style scoped>
.loader {
  display: inline-block;
  position: relative;
}
.loader div {
  position: absolute;
  border-radius: 50%;
  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.medium{
    width: 80px;
    height: 80px;
}
.medium div{
    width: 64px;
    height: 64px;
    margin: 6px;
    border: 6px solid #888;
    border-color: #888 transparent transparent transparent;
}
.large{
    width: 160px;
    height: 160px;
}
.large div{
    width: 128px;
    height: 128px;
    margin: 12px;
    border: 12px solid #888;
    border-color: #888 transparent transparent transparent;
    
}
.loader div:nth-child(1) {
  animation-delay: -0.45s;
}
.loader div:nth-child(2) {
  animation-delay: -0.3s;
}
.loader div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>