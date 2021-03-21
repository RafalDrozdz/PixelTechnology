import Vue from "vue";
import App from "./App.vue";
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

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");
