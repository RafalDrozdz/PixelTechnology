<template>
        <div class="patient__gender">
             <font-awesome-icon class="male" icon="mars" v-if="gender==='male'"/> 
             <font-awesome-icon class="female" icon="venus" v-else />
        </div>   
</template>

<script>

export default {
  name: "Gender",
  props: {
      gender: String
  }
};
</script>

<style scoped>
    .patient__gender{
        margin-left: 10px;    
    }
    .male{
        color: #00f;
    }
    .female{
        color: #f0f;
    }
</style>