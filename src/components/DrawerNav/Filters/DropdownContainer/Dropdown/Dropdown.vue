<template>
    <div class="dropdown">
        <div 
         v-for="item in options" 
         :key="item.option" 
         class="dropdown__option"
         @click="handleClick(item)"
        >
            {{item.text}}
        </div>  
    </div>
</template>

<script>
import Vue from "vue"
import store from "@/store";

export default Vue.extend({
  name: "Dropdown",
  props: {
      id: String,
      options: Array
  },
  computed: {
  },
  methods:{
      handleClick(option){
          store.dispatch("setFilter", option)
      }
  }
});
</script>

<style scoped>
    .dropdown{
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 52px;
        left: 0;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: -2px 5px 6px 3px #aaa;
        overflow: hidden;
    }
    .dropdown__option{
        padding: 16px;
        cursor: pointer;
    }
    .dropdown__option:hover{
        background-color: #ddd;
    }
</style>