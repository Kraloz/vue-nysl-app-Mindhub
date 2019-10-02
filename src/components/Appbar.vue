<template>
  <div class="container">
    <div id="header" class="bg-bayoux fixed inset-x-0 top-0 h-24 container flex text-white">
      <div class="flex w-full">
        <div class="flex-grow flex justify-center items-center">
          <h1 class="font-display text-3xl">Home NYSL</h1>
        </div>
        <div class="flex-1 flex justify-center items-center">
          <img class="w-14 h-14 rounded-half object-cover" src="@/assets/images/doge.jpeg" alt="Profile image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAppbar'
}
</script>

<style scoped>
   /* #header::after {
    content: '';
    position: absolute;
    margin: 0;
    width: 100%;
    top: 85%;
    height: 1rem;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    background: #e2e2e2;
  } */
  /* #header:after {
    content:'';
    position: absolute;
    background: none;
    top: 92%;
    left: -600%;
    width: 1300%;
    padding-bottom: 1300%;
    border-radius: 100%;
    z-index:-1;
    box-shadow: 0px 0px 0px 9999px #386374;
} */

</style>
