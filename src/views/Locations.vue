<template>
  <div id="locations-view" class="absolute">
    <gmap-map
      class="h-full"
      :center="{
        //lat:12.152242,
        //lng:-1.734264
        lat:41.9107828,
        lng:-87.634767
      }"
      :zoom="12.75"
      :options="{disableDefaultUI:true}"
      map-type-id="terrain"
    >

      <gmap-info-window
        :options="infoOptions"
        :position="infoPosition"
        :opened="infoOpened"
        @closeclick="infoOpened=false"
      >
        {{infoContent}}
      </gmap-info-window>

      <gmap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :clickable="true"
        :draggable="false"
        :title="'x'"
        @click="toggleInfo(marker, index)"
    />
    </gmap-map>
    <drawer-bottom>
      <div class="flex flex-col mx-6 mt-6 pb-14">
        <location-button
          class="my-2 bg-gray-300"
          v-for="(marker, index) in markers"
          :key="index"
          :location="marker"
        />
      </div>
    </drawer-bottom>
  </div>
</template>

<script>
import DrawerBottom from '@/components/DrawerBottom.vue'
import LocationButton from '@/components/LocationButton.vue'
export default {
  name: 'Locations',
  components: {
    DrawerBottom,
    LocationButton
  },
  methods: {
    markerInfo(marker) {
      console.log(marker)
    },
    getPosition: function(marker) {
      return {
        lat: parseFloat(marker.position.lat),
        lng: parseFloat(marker.position.lng)
      }
    },
    toggleInfo: function(marker, key) {
      this.infoPosition = this.getPosition(marker);
      this.infoContent = marker.name;
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    }
  },
  data () {
    return {
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      markers: [
        {
          name: 'AJ Katzenmaier Elementary',
          address: '24 W. Walton St., Chicago, IL 60610',
          position: {
            lat: 41.900492,
            lng: -87.629083
          }
        },
        {
          name: 'Greenbay Elementary',
          address: '1734 N. Orleans St., Chicago, IL 60614',
          position: {
            lat: 41.914144,
            lng: -87.637780
          }
        },
        {
          name: 'Howard A Yeager Elementary',
          address: '1368 W. Belden Ave, Chicago, IL 60614',
          position: {
            lat: 41.923445,
            lng: -87.662911
          }
        },
        {
          name: 'Marjorie P Hart Elementary',
          address: '2625 N. Orchard St., Chicago, IL 60610',
          position: {
            lat: 41.929826,
            lng: -87.645930
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
  .vue-map-container,
  .vue-map-container .vue-map {
    /* border: 5px solid black; */
    height: 100%;
    /* max-height: 100%;
    min-height: 100%; */
    /* width: 100%; */
    /* padding-bottom: 50px; */
    /* display:block;
    z-index: 1; */
  }
</style>
