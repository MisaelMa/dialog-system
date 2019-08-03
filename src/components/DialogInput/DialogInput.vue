<template>
    <div>
        <div class="input-container pt-2 pb-0" style="margin-right: 10px">
              <input
                    :value="value"
                    v-on:input="$emit('input', $event.target.value)"
                    @keyup.enter.prevent="alert('s')"
                    class="input-field"
                    :type="type"
                    :placeholder="placeholder"
                    :style="colorText"
            >

            <i v-if="icon!==''" :class="iconType" :style="coloricon">{{iconI}}</i>
        </div>
        <div class="v-text-field__details text-left">
            <div class="v-messages error--text" v-if="validationState==='error'">
                <div class="v-messages__wrapper">
                    <div class="v-messages__message">{{validations[0]}}</div>
                </div>
            </div>
<!--            <div class="v-counter error--text v-messages__message">{{counterValue}} / {{counter}}</div>-->
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue, Watch} from "vue-property-decorator";
    // @ts-ignore
    import Validatable from "vuetify/lib/mixins/validatable/index.js";
    // import mixins  from 'vuetify/src/mixins/validatable';
    import {mixins} from "vue-class-component";

    @Component
    export default class DialogInput extends mixins(Validatable) {
        @Prop({
            required: true
        })
        public value: any;

        @Prop({
            default: "dodgerblue",
            required: false
        })
        public color: any;

        @Prop({
            type: String,
            default: "text",
            required: false
        })
        public type: any;

        @Prop({
            type: String,
            default: "",
            required: false
        })
        public placeholder: any;


        @Prop({
            type: String,
            default: "",
            required: false
        })
        public icon: any;

        @Prop({
            type: [Boolean, Number, String],
            default: "",
            required: false
        })
        public counter!: [Boolean, Number, String]

        public iconType: string = "";
        public iconI: string = "";
        public coloricon: any = {
            color: this.color,
            border: Validatable.validationState === 'error' ? '1px solid  #ff5252 !important;' : '1px solid '+ this.color,
            height: "25px",
            padding: "",
            textAlign: "center",
        //    marginRight: "17px",
            borderTopRightRadius: "3px",
            borderBottomTightRadius: "3px",
        };

        get colorText() {
            //let color = this.validationState==='error' ? '#ff5252 !important;' : this.color;
            return "border: 1px solid " + this.color;
        }
        get counterValue (): number {
            return (Validatable.internalValue || '').toString().length
        }

        public isFontAwesome5(iconType: string): boolean {
            return ["fas", "far", "fal", "fab"].some(val => iconType.includes(val));
        }

        public mounted() {
            this.createicon(this.icon);
        }

        public createicon(icon: string) {


            // Material Icon delimiter is _
            // https://material.io/icons/
            const delimiterIndex = icon.indexOf("-");
            const isMaterialIcon = delimiterIndex <= -1;

            if (isMaterialIcon) {
                this.iconType = "material-icons";
                this.iconI = icon;
                // Material icon uses ligatures.

            } else {
                this.coloricon.padding = "5px";
                this.iconType = icon;
            }
        }

    }

</script>
<style scoped>
    .input-container {
        display: -ms-flexbox;
        display: flex;
        width: 100%;
    }

    .input-field {
        width: 100%;
        height: 25px;
        outline: none;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }

    .form-wrapper-outer {
        padding: 40px;
        border-radius: 8px;
        margin: auto;
        width: 460px;
        border: 1px solid #DADCE0;
        margin-top: 7%;
    }

    .form-wrapper-outer .form-logo {
        margin: 0px auto 15px;
        width: 100px;
    }

    .form-wrapper-outer .form-logo img {
        width: 100%;
    }

    .form-greeting {
        text-align: center;
        font-size: 25px;
        margin-bottom: 15px;
    }

    .form-button {
        text-align: right;
    }

    .field-wrapper {
        position: relative;
        margin-bottom: 15px;
    }

    .field-wrapper input {
        border: 1px solid #DADCE0;
        padding: 15px;
        border-radius: 4px;
        width: 100%;
    }

    .field-wrapper .field-placeholder {
        font-size: 16px;
        position: absolute;
        bottom: 17px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #80868b;
        left: 8px;
        padding: 0 8px;
        -webkit-transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1;

        text-align: left;
        width: 100%;
    }

    .field-wrapper .field-placeholder span {
        background: #ffffff;
        padding: 0px 8px;
    }

    .field-wrapper input:not([disabled]):focus ~ .field-placeholder,
    .field-wrapper.hasValue input:not([disabled]) ~ .field-placeholder {
        -webkit-transform: scale(.75) translateY(-39px) translateX(-60px);
        transform: scale(.75) translateY(-39px) translateX(-60px);

    }

</style>
