import Vue from "vue";
import Vuex from "vuex";
import { getPatientsData, getMedicinesData } from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        patients: [],
        medicines: [],
    },
    mutations: {
        setPatients(state, payload) {
            state.patients = payload;
        },
        setMedicines(state, payload) {
            state.medicines = payload;
        },
    },
    actions: {
        async setPatients(state) {
            const patients = await getPatientsData();
            state.commit("setPatients", patients);
        },
        async setMedicines(state) {
            const medicines = await getMedicinesData();
            state.commit("setMedicines", medicines);
        },
    },
    getters: {
        getPatients: (state) => state.patients,
        getMedicines: (state) => state.medicines,
    },
});
