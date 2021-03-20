import Vue from "vue";
import Vuex from "vuex";
import { getPatientsData, getMedicinesData } from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        patients: [],
        medicines: [],
        filter: {
            option: "all-data",
            text: "Wszystkie dane",
        },
    },
    mutations: {
        setPatients(state, payload) {
            state.patients = payload;
        },
        setMedicines(state, payload) {
            state.medicines = payload;
        },
        setFilter(state, payload) {
            state.filter = payload;
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
        setFilter(state, payload) {
            state.commit("setFilter", payload);
        },
    },
    getters: {
        getPatients: (state) => state.patients,
        getMedicines: (state) => state.medicines,
        getFilter: (state) => state.filter,
    },
});
