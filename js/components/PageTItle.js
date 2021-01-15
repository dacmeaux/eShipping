Vue.component('page-title', {
    data() {
        return {
            title: 'Vehicle Delivery Tracker'
        }
    },
    template: /*html*/`
    <div class="row">
        <div class="col">
            <h1>{{ title }}</h1>
        </div>
    </div>`
})