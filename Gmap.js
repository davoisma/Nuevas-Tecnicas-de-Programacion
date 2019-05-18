<template>
    <div>
        <label>
            AutoComplete
            <GmapAutocomplete :position.sync="markers[0].position" @keyup.enter="usePlace" @place_changed="setPlace">
            </GmapAutocomplete>
            <button @click="usePlace">Add</button>
        </label>
        <br/>

        <gmap-map
            :center="center"
            :zoom="7"
            map-type-id="terrain"
            style="width: 100%; height: 500px"
        >
            <gmap-marker
                @dragend="updateMaker" 
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            ></gmap-marker>

        </gmap-map>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                center: {lat: 10.0, lng: 10.0},
                markers: [{
                    position: {lat: 11.0, lng: 11.0}
                }],
                place: null,
            }
        },
        description: 'Autocomplete Example (#164)',
        methods: {
            setPlace(place) {
                this.place = place
            },
            setDescription(description) {
                this.description = description;
            },
            usePlace(place) {
                if (this.place) {
                    var newPostion = {
                        lat: this.place.geometry.location.lat(),
                        lng: this.place.geometry.location.lng(),
                    };
                    this.center = newPostion;
                    this.markers[0].position =  newPostion;
                    this.place = null;
                }
            },
            updateMaker: function(event) {
                console.log('updateMaker, ', event.latLng.lat());
                this.markers[0].position = {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                }
            },
        }
    }
</script>