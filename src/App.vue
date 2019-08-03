<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-app id="app">
        <v-content>
            <v-container>


                <dialog-system
                        v-model="dialog2"
                        text="Autentufucacion Rquerida!"
                        subtext="Ingrese contraseña"
                        cancelText="Cancelar"
                        confirmText="Confirmar"
                        color="#2196F3"
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
                    <template v-slot:dialoginputs>
                        <v-form ref="form">
                            <dialog-input v-model="textinput"
                                     :rules="nameRules"
                                     type="password"
                                     :counter="10"
                                     icon="lock"
                                     color="#2196F3"
                            ></dialog-input>
                            <!--<v-text-field
                                    label="Name"
                                    v-model="textinput"
                                    :rules="nameRules"
                                    :counter="10"
                                    required
                            ></v-text-field>-->
                        </v-form>
                    </template>
                </dialog-system>
                <img alt="Vue logo" src="./assets/logo.png">
                <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HelloWorld from "./components/HelloWorld.vue";
    import DialogSystem from "@/components/DialogSystem/DialogSystem.vue";
    import DialogInput from "@/components/DialogInput/DialogInput.vue";

    @Component({
        components: {
            HelloWorld,
            DialogSystem,
            DialogInput,
        },
    })
    export default class App extends Vue {
        public dialog2: boolean = true;
        public textinput: string = "";
        nameRules: any= [
            (v: any) => !!v || 'amir ',
            (v: any) => (v && v.length <= 15) || 'Name must be less than 15v characters',
        ];

        public confirmar() {
            const ref: any =this.$refs
            if (ref.form.validate()) {
                console.log('si')
            }else {
                console.log('no')
            }
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
