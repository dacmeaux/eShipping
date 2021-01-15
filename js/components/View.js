Vue.component('location-view', {
    data() {
        return {
            listButtonName: 'list-view',
            mapButtonName: 'map-view',
            selectedView: 'list-view',
            showBar: true,
            locationData: [],
            simData: [],
            dataLoaded: false
        }
    },
    computed: {
    
    },
    methods: {
        handleClick(data) {
            this.selectedView = data.name
        },

        handleData() {
            this.dataLoaded = true;
            this.simData = this.$store.state.simData;
            let geoData

            for( const locData of this.simData ) {
                const endpoint = `${this.geocodeapi}?latlng=${locData.dest.lat},${locData.dest.lng}&key=${this.apikey}`

                fetch(endpoint, {
                    mode: 'cors',
                    method: 'GET',
                    credentials: 'same-origin', // include, *same-origin, omit
                    // headers: {
                    //     'Content-Type': 'application/json'
                    // }
                })
                .then((response) => response.json())
                .then((rawData) => {
                    geoData = {
                        destination: rawData.results[0].formatted_address,
                        location: locData.location,
                        battery: locData.battery,
                        id: locData.id
                    }

                    // Drop pins on map
                    const contentString =
                        /*html*/`
                        <div id="content">
                            <div id="siteNotice"></div>
                            <h3 id="firstHeading" class="firstHeading">${locData.battery}% remaining</h3>
                            <div id="bodyContent">
                                <p><b>eShip (${locData.id})</b><br>dest: ${geoData.destination}<br>loc: ${locData.location.lat}, ${locData.location.lng}<br></p>
                            </div>
                        </div>`

                    const infowindow = new google.maps.InfoWindow({
                        content: contentString,
                        maxWidth: 300,
                    });

                    const marker = new google.maps.Marker({
                        position: locData.location,
                        map,
                        title: `eShip ${locData.id}`,
                        label: locData.id.toString()
                    });
                    marker.addListener("click", () => {
                        infowindow.open(map, marker);
                    });

                    this.locationData.push(geoData)
                })
                .catch((error) => console.error(error))
            }
        },

        togglePercent() {
            if( this.showBar === true )
                this.showBar = false
            else   
                this.showBar = true
        }
    },
    props: {endpoint: {type:String, required:true}, apikey: {type:String, required:true}, geocodeapi:{type:String, required:true}},
    template: /*html*/`
    <div>
        <div class="btn-group" role="group" aria-label="location-view" v-show="dataLoaded">
            <general-button class="btn btn-secondary btn-sm" :name="listButtonName" @onButtonClicked="handleClick" :class="{active: selectedView == 'list-view'}">List View</general-button>
            <general-button class="btn btn-secondary btn-sm" :name="mapButtonName" @onButtonClicked="handleClick" :class="{active: selectedView == 'map-view'}">Map View</general-button>
        </div>
        <div class="jumbotron jumbotron-fluid" v-show="selectedView == 'map-view'">
            <div class="container">
                <gmap></gmap>
            </div>
        </div>
        <ul class="list-group" v-show="selectedView == 'list-view'">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(location, index) of locationData" :key="index">
            <span class="badge badge-primary badge-pill">{{ location.id }}</span> <span class="destination"><b>Destination:</b> {{ location.destination }}</span>
                <div class="progress" style="height: 10px; width: 100px; cursor: pointer;" v-show="showBar" @click="togglePercent">
                    <div class="progress-bar" role="progressbar" :style="{width: location.battery +'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span class="badge badge-primary badge-pill" v-show="!showBar" @click="togglePercent" style="cursor: pointer">{{ location.battery }}%</span>
            </li>
        </ul>
        <location :endpoint="endpoint" :apikey="apikey" :simdata="simData" @onGetData="handleData" :geocodeapi="geocodeapi" v-show="!dataLoaded"></location>
    </div>`
})