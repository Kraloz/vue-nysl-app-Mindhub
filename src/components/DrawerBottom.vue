<template>
  <div
    class="solapa overflow-y-hidden w-full h-8 bg-mercury justify-center items-center"
    :class="{
      'active': isActive,
      'inactive': !isActive,
      'preload': preload,
      'overflow-y-scroll': isActive,
      'overflow-y-hidden': !isActive
    }"
  >
    <v-icon
      class="my-auto w-full"
      @click.native="toggleActive"
      name="chevron-up"
      scale="1.45"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DrawerBottom',
  data () {
    return {
      preload: true,
      isActive: false
    }
  },
  methods: {
    toggleActive () {
      if (this.preload) this.preload = false
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
  .solapa {
    position: absolute;
    margin-top: -2rem;
    border-radius: 25px 25px 0 0;
    box-shadow: 0 -1px 20px rgba(0,0,0,0.19), 0 -4px 6px rgba(0,0,0,0.23);
    height: 75%;
  }
  .preload {
    -webkit-animation: none !important;
    -moz-animation:    none !important;
    -ms-animation:     none !important;
    -o-animation:      none !important;
    animation:         none !important;
  }
  .active {
    -webkit-animation: slide-top 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
            animation: slide-top 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
  }
  .inactive {
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
            animation: slide-bottom 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
  }

  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-25rem);
              transform: translateY(-25rem);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-25rem);
              transform: translateY(-25rem);
    }
  }
  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-25rem);
      transform: translateY(-25rem);

    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-25rem);
      transform: translateY(-25rem);

    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
</style>
