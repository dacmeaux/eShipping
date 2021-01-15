Vue.component('general-button', {
    data() {
        return {
            defaultButtonText: 'Button'
        }
    },
    methods: {
        handleClick() {
            this.$emit('onButtonClicked', {name: this.name, el: this.$refs[this.name]})
        } 
    },
    template: /*html*/`
    <button :ref="name" type="button" :id="name" @click="handleClick"><slot></slot></button>`,
    props: {
        name: {type: String, required: true}
    }
})