<template>
    <v-dialog
            v-model="value"
            max-width="400px"
            persistent
    >
        <v-card :style="style">
            <v-card-text
            >
                    <v-layout row wrap >
                    <v-flex v-if="$slots.img" xs12 sm3 md3 >
                        <slot name="img"></slot>
                    </v-flex>
                    <v-flex :class="[$slots.img ? 'xs12 sm9 md9' : 'xs12 sm12 md12' ]" >
                        <div class="body-2 mt-3 text-xs-left">{{text}}</div>
                        <div class="text-xs-left" style="color:rgba(0,0,0,0.54);">{{subtext}}</div>
                        <slot name="input"></slot>

                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="pa-0 ma-0">
                <v-btn
                        v-if="ifcancel"
                        :color="color"
                        :flat="hoverCancel"
                        :dark="!hoverCancel"
                        small
                        class="pa-0 ma-0 elevation-0"
                        block
                        @mouseover="overbutton('cancel')"
                        @mouseleave="leave('cancel')"
                        @click="cancel()"
                >{{cancelText}}</v-btn>
                <v-divider vertical v-if="ifcancel && ifconfirm"></v-divider>
                <v-btn
                        v-if="ifconfirm"
                        :color="color"
                        :flat="hoverConfirm"
                        :dark="!hoverConfirm"
                        small
                        class="pa-0 ma-0 elevation-0"
                        block
                        @mouseover="overbutton('confirm')"
                        @mouseleave="leave('confirm')"
                        @click="confirm()"
                >{{confirmText}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue, Watch} from "vue-property-decorator";
    @Component
    export default class DialogSystem extends Vue {
        @Prop({
            required: true
        })
        public value:any;

        public style: any =  {
            borderRadius: '6px'
        };

        @Prop({
            type: String,
            default:'¿Desea continuar con la accion?',
            required: false
        })
        public text!:string;

        @Prop({
            type: String,
            default:'Estas acciones no se pueden redeshacer',
            required: false
        })
        public subtext!:string;

        @Prop({
            type: String,
            default:'',
            required: false
        })
        public cancelText!:string;

        @Prop({
            type: String,
            default:'',
            required: false
        })
        public confirmText!:string;
        @Prop({
            default: 'blue',
            required: false
        })
        public color: any;

        public hoverCancel = true;
        public hoverConfirm = true;

        get ifcancel() {
            if (this.cancelText !== ''){
                return true;
            } else {
                return false;
            }
        }

        get ifconfirm() {
            if (this.confirmText!== '') {
                return true;
            } else {
                return false;
            }
        }
        public mounted() {
            console.log(this.$slots)
        }
        public overbutton(typeAction: string) {
            if (typeAction === 'cancel') {
                this.hoverCancel = false;
            } else {
                  this.hoverConfirm = false;
            }
        }
        public leave(typeAction: string) {
            if (typeAction === 'cancel') {
                this.hoverCancel = true;
            } else {
                this.hoverConfirm = true
            }
        }

        @Emit('confirmar')
        public confirm() {

        }

        @Emit('cancelar')
        public cancel() {

        }
    }
</script>
