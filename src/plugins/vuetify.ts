import Vue from 'vue';
import Vuetify, {
  VCard,
  VRating,
  VToolbar,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';
import es from 'vuetify/src/locale/es';

Vue.use(Vuetify, {
  components: {
    VCard,
    VRating,
    VToolbar,
  },
  directives: {
    Ripple,
  },
});

export default new Vuetify();
