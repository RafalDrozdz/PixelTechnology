<template>
  <main @click="fetchPatients">
    <ul>
        <li v-for="item in patients" :key="item.id">
            <div>{{item.name}}</div>
        </li>
    </ul>
  </main>
</template>

<script>
import { getPatients } from "../../api";

export default {
  name: "Main",
  data(){
      return{
          patients: [],
      }
  },
  methods:{
      fetchPatients: function(){
        const data = getPatients();
        data.then((result) => this.patients = result);
      }
  },
};
</script>

<style scoped>
main {
  width: 100%;
  background: #ddd;
  color: #fff;
  height: 100px;
  margin-top: 60px;
}
</style>
