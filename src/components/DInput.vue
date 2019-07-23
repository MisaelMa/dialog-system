<template>
    <div class="input-container pt-2 pb-2">
        <input
             :value="value"
             v-on:input="$emit('input', $event.target.value)"
             :class="'input-field'"
             :type="type"
             :placeholder="placeholder"
             :name="name"
             :style="colorText"
        >
        <i v-if="icon!==''" :class="iconType" :style="coloricon">{{iconI}}</i>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue, Watch} from "vue-property-decorator";
    @Component
    export default class DInput extends Vue {
        @Prop({
            required: true
        })
        public value:any;

        @Prop({
            default: 'dodgerblue',
            required: false
        })
        public color: any;

        @Prop({
            type: String,
            default: 'text',
            required: false
        })
        public type: any;

        @Prop({
            type: String,
            default: '',
            required: false
        })
        public placeholder: any;
        @Prop({
            type: String,
            default: '',
            required: false
        })
        public name: any;

        @Prop({
            type: String,
            default: '',
            required: false
        })
        public icon: any;

        public iconType: string = '';
        public iconI: string = '';
        public coloricon: any  = {
                color: this.color,
                border: '1px solid ' + this.color,
                height: '25px',
                padding : '',
                textAlign: 'center',
                borderTopRightRadius: '3px',
                borderBottomTightRadius: '3px',
            };

        get colorText() {
          return   'border: 1px solid ' + this.color;
        }

        public isFontAwesome5(iconType: string): boolean {
            return ['fas', 'far', 'fal', 'fab'].some(val => iconType.includes(val))
        }

        public mounted() {
            this.createicon(this.icon);
        }
        public createicon(icon: string) {


            // Material Icon delimiter is _
            // https://material.io/icons/
            const delimiterIndex = icon.indexOf('-');
            const isMaterialIcon = delimiterIndex <= -1;

            if (isMaterialIcon) {
                this.iconType = 'material-icons';
                this.iconI = icon
                // Material icon uses ligatures.

            } else {
                this.coloricon.padding = '5px';
                this.iconType = icon
            }
        }

    }
</script>

<style scoped>
    .input-container {
        display: -ms-flexbox; /* IE10 */
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

    .form-wrapper-outer{
        padding: 40px;
        border-radius: 8px;
        margin: auto;
        width: 460px;
        border: 1px solid #DADCE0;
        margin-top: 7%;
    }

    .form-wrapper-outer .form-logo{
        margin: 0px auto 15px;
        width: 100px;
    }

    .form-wrapper-outer .form-logo img{
        width: 100%;
    }

    .form-greeting{
        text-align: center;
        font-size: 25px;
        margin-bottom: 15px;
    }

    .form-button{
        text-align: right;
    }

    .field-wrapper{
        position: relative;
        margin-bottom: 15px;
    }

    .field-wrapper input{
        border: 1px solid #DADCE0;
        padding: 15px;
        border-radius: 4px;
        width: 100%;
    }

    .field-wrapper .field-placeholder{
        font-size: 16px;
        position: absolute;
        /* background: #fff; */
        bottom: 17px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #80868b;
        left: 8px;
        padding: 0 8px;
        -webkit-transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
        transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
        z-index: 1;

        text-align: left;
        width: 100%;
    }

    .field-wrapper .field-placeholder span{
        background: #ffffff;
        padding: 0px 8px;
    }

    .field-wrapper input:not([disabled]):focus~.field-placeholder,
    .field-wrapper.hasValue input:not([disabled])~.field-placeholder
    {
        -webkit-transform: scale(.75) translateY(-39px) translateX(-60px);
        transform: scale(.75) translateY(-39px) translateX(-60px);

    }

</style>

