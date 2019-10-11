<template>
  <div id="locations-view" class="absolute">
    <gmap-map
      class="h-full"
      :center="{lat:10, lng:10}"
      :zoom="7"
      :options="{disableDefaultUI:true}"
      map-type-id="terrain"
    >
    </gmap-map>
    <drawer-bottom>
      <div class="flex flex-col mx-6 mt-6 pb-14">
        <location-button
          class="my-2 bg-gray-300"
          v-for="(location, index) in locations"
          :key="index"
          :location="location"
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
  data () {
    return {
      locations: [
        {
          name: 'AJ Katzenmaier Elementary',
          address: '24 W. Walton St., Chicago, IL 60610'
        },
        {
          name: 'Greenbay Elementary',
          address: '24 W. Walton St., Chicago, IL 60610'
        },
        {
          name: 'Howard A Yeager Elementary',
          address: '24 W. Walton St., Chicago, IL 60610'
        },
        {
          name: 'Marjorie P Hart Elementary',
          address: '24 W. Walton St., Chicago, IL 60610'
        },
        {
          name: 'AJ Katzenmaier Elementary',
          address: '24 W. Walton St., Chicago, IL 60610'
        },
        {
          name: 'Greenbay Elementary',
          address: '24 W. Walton St., Chicago, IL 60610'
        },
        {
          name: 'Howard A Yeager Elementary',
          address: '24 W. Walton St., Chicago, IL 60610'
        },
        {
          name: 'Marjorie P Hart Elementary',
          address: '24 W. Walton St., Chicago, IL 60610'
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
