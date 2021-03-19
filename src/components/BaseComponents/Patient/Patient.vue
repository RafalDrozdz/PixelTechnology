<template>
        <div class="patient">
            <div class="patient__name">{{`${patient.name} ${patient.lastName}`}}</div>
            <div class="patient__gender">Gender: {{patient.gender}}</div>
            <div class="patient__age">Age: {{patient.age}}</div>
            <div class="patient__phoneNumber">Phone: {{patient.phoneNumber}}</div>
            <div class="patient__adress">Adress: {{patient.adress}}</div>         
        </div>
</template>

<script>

export default {
  name: "Patient",
  props: ['patient']
};
</script>

<style scoped>
.patient{
    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 400px;
    width: 40%;
    border: 1px solid #000;
    border-radius: 12px;
    padding: 5px;
    margin: 10px;
}
.patient__name{
    font-size: 20px;
    font-weight: 700;
}
@media (max-width: 600px) {
.patient{
    width: 90%;
}
    
}
</style>