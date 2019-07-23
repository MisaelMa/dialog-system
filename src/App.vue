<template>
  <div id="app">
    <dialog-system
            v-model="dialog2"
            text="Autentufucacion Rquerida!"
            subtext="Ingrese contraseña"
            cancelText="Cancelar"
            confirmText="Confirmar"
            color="#4A148C"
            @confirmar="confirmar()"
            @cancelar="cancelar()"
    >
      <template v-slot:img>
        <v-img
                :src="require('@/assets/actions/info.png')"
                height="60px"
                class="mt-3"
                contain
        ></v-img>
      </template>
      <template v-slot:input>
        <d-input v-model="textinput"
                 type="password"
                 icon="delete"
                 color="#4A148C"
        ></d-input>
      </template>
    </dialog-system>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import DialogSystem from '@/components/DialogSystem.vue';
import DInput from '@/components/DInput.vue';

@Component({
  components: {
    HelloWorld,
    DialogSystem,
    DInput,
  },
})
export default class App extends Vue {
  public dialog2: boolean = true;
  public textinput: string = '';
  public confirmar() {

  }
  public cancelar() {

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
