Vue.component('location', {
    data() {
        return {
            buttonText: 'Get Location',
            buttonName: 'locate-button',
            latitude: 0,
            longitude: 0,
            displayData:[]
        }
    },
    methods: {
        async getLocation(obj) {
            const fakePost = async () => {
                // Add a delay to simulate data retrieval
                const delay = () => new Promise(resolve => setTimeout(resolve, 2000))
                await delay()
            }

            await fakePost()
            this.$emit('onGetData')
        }
    },
    props: {endpoint: {type:String, required:true}, apikey: {type:String, required:true}, simdata: {type:Array, required:true}, geocodeapi:{type:String, required:true}},
    template: /*html*/`
    <div class="row">
        <div class="col">
            <general-button class="btn btn btn-primary" :name="buttonName" @onButtonClicked="getLocation">{{ buttonText }}</general-button>
        </div>
    </div>`
});