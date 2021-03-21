import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import store from "@/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faVenus,
    faMars,
    faBirthdayCake,
    faPhoneAlt,
    faMapMarkerAlt,
    faCaretDown,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faVenus,
    faMars,
    faBirthdayCake,
    faPhoneAlt,
    faMapMarkerAlt,
    faCaretDown,
    faTimes
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    store,
}).$mount("#app");
