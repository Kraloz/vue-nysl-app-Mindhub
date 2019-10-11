<template>
  <div class="bg-bayoux flex flex-col">
    <div class="flex flex-col justify-center items-center w-auto mx-auto">
      <div class="flex justify-around text-mantis font-black">
        <h2 class="text-2xl px-8">1</h2>
        <h2 class="text-2xl px-8">2</h2>
      </div>
      <div class="flex justify-center items-center -mt-6">
        <img class="w-20 h-20" src="@/assets/images/boca.png" alt="">
        <div><svg id="stadium" :height="heightSvg" :width="widthSvg" class="inline-block" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g :fill="colorSvg" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g :fill="colorSvg" id="icon-7-soccer-court"><path d="M2,21 L2,24.0025781 C2,25.1057238 2.89971268,26 3.99328744,26 L16,26 L16,26 L16,20.9725356 C13.7500247,20.7238135 12,18.8162769 12,16.5 C12,14.1837231 13.7500247,12.2761865 16,12.0274644 L16,7 L3.99328744,7 C2.89242519,7 2,7.89092539 2,8.99742191 L2,12 L7,12 L7,21 L2,21 L2,21 L2,21 Z M31,21 L31,24.0025781 C31,25.1090746 30.1075748,26 29.0067126,26 L17,26 L17,26 L17,20.9725356 C19.2499753,20.7238135 21,18.8162769 21,16.5 C21,14.1837231 19.2499753,12.2761865 17,12.0274644 L17,7 L29.0067126,7 C30.1002873,7 31,7.89427625 31,8.99742191 L31,12 L26,12 L26,21 L31,21 L31,21 L31,21 Z M17,19.9645556 C18.6961471,19.7219408 20,18.263236 20,16.5 C20,14.736764 18.6961471,13.2780592 17,13.0354444 L17,19.9645556 L17,19.9645556 L17,19.9645556 Z M16,13.0354444 C14.3038529,13.2780592 13,14.736764 13,16.5 C13,18.263236 14.3038529,19.7219408 16,19.9645556 L16,13.0354444 L16,13.0354444 Z M27,13 L27,20 L31,20 L31,13 L27,13 L27,13 Z M2,13 L2,20 L6,20 L6,13 L2,13 L2,13 Z" id="soccer-court"/></g></g></svg></div>
        <img class="w-20 h-20" src="@/assets/images/boca.png" alt="">
      </div>
    </div>
    <div id="minisheet" class="flex-1 mt-2 w-full bg-mercury block">
      <div class="flex flex-col mt-6 mx-4 h-full justify-start">
        <div class="text-xl container flex justify-around">
          <div class="flex flex-col">
            <h4>Date:</h4>
            <h4>Location:</h4>
            <h4>Time:</h4>
          </div>
          <div class="flex flex-col">
            <h4><time date="2019-10-28">28/10</time></h4>
            <h4>AJ Katzenmaier</h4>
            <h4><time time="13:00">13:00 PM</time></h4>
          </div>
        </div>
        <button
          class="mt-14 mx-4 flex justify-center items-center p-3 bg-white border border-b border-black rounded-lg"
          @click="goToLocation"
        >
          <span class="text-xl"> VIEW LOCATION</span>
          <v-icon class="ml-4 text-red-600" name="map-marker-alt" scale="1.5"></v-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchInfo',
  props: ['match'],
  data () {
    return {
      'heightSvg': '164px',
      'widthSvg': '164px',
      'colorSvg': '#FFF'
    }
  },
  methods: {
    goToLocation() {
      
    }
  }
}
</script>

<style scoped>
  #minisheet {
    border-radius: 1.65rem 1.65rem 0 0;
  }
  
  #stadium-container {
    margin-top: -1rem;
  }
</style>
