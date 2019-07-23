import Vue from "vue";
import FlockButton from "./DialogSystem.vue";
import FlockBanner from "./DInput.vue";

const Components: any = {
    FlockButton,
    FlockBanner,
};

Object.keys(Components).forEach((name: any) => {
    Vue.component(name, Components[name]);
});

export default Components;
