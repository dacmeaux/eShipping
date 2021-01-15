const store = new Vuex.Store({
    state: {
        simData: [
            {
                "dest": {
                    "lat": 33.98416939084185, "lng": -84.8034757403876
                },
                "accuracy": 30,
                "battery": 100,
                "id": 1,
                "location": {"lat": 33.98200139817616, "lng": -84.80006805529577}
            },
            {
                "dest": {
                "lat": 33.984240952507626, "lng": -84.8007104693103
                },
                "accuracy": 30,
                "battery": 50,
                "id": 2,
                "location": {"lat": 33.984976175444004, "lng": -84.79571469178576}
            },
            {
                "dest": {
                "lat": 33.98401015240381, "lng": -84.79681228038217
                },
                "accuracy": 30,
                "battery": 25,
                "id": 3,
                "location": {"lat": 33.976634741031326, "lng": -84.80272359006123}
            },
            {
                "dest": {
                "lat": 33.98118660215457, "lng": -84.80235000224684
                },
                "accuracy": 30,
                "battery": 83,
                "id": 4,
                "location": {"lat": 33.97848519889157, "lng": -84.80613909974475}
            },
            {
                "dest": {
                "lat": 33.982778701889835, "lng": -84.80469918875215
                },
                "accuracy": 30,
                "battery": 17,
                "id": 5,
                "location": {"lat": 33.97365399783928, "lng": -84.80143428624139}
            },
            {
                "dest": {
                "lat": 33.981052568653496, "lng": -84.80049308690637
                },
                "accuracy": 30,
                "battery": 5,
                "id": 6,
                "location": {"lat": 33.97320023097072, "lng": -84.80532885373287}
            },
            {
                "dest": {
                "lat": 33.9806669138651, "lng": -84.79898444294841
                },
                "accuracy": 30,
                "battery": 0,
                "id": 7,
                "location": {"lat": 33.97002379503683, "lng": -84.7957587319996}
            }
        ]
    },
    mutations: {
        add(state, payload) {
            state.simData.push(payload)
        }
    }
})

const App = new Vue({
    el: '#app',
    data: { 
        apiEndpoint: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBh6zcmBFF01tTcY64onDaWps44lLf6VwM',
        geocodeAPI: 'https://maps.googleapis.com/maps/api/geocode/json',
        apiKey: 'AIzaSyBh6zcmBFF01tTcY64onDaWps44lLf6VwM',
        loggedin: false
    },
    methods: {
        handleLogin(status) {
            this.loggedin = status
        },

        logout() {
            console.log('Duane')
            this.loggedin = false;
        }
    },
    store
});

