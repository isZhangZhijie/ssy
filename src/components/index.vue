<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide class="slide-first">Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide class="slide-last">Slide 6</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        width: window.innerWidth,
        height: window.innerHeight,
        mousewheel: true,
        simulateTouch: false,
        keyboard: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideNextTransitionStart: function () {
            console.log(this.activeIndex)
            $('.the-header').hide()
          },
          slidePrevTransitionStart: function () {
            console.log(this.activeIndex)
            if (this.activeIndex === 0) $('.the-header').show()
          }
        }
      }
    }
  },
  mounted: function () {
    // $('body, html, #app').css({'height': '100%', 'position': 'relative', 'overflow-y': 'hidden', 'min-width': '1200px'})
    $('body, html, #app').addClass('swiper-page')
  },
  beforeRouteEnter (to, from, next) {
    // console.log('beforeRouteEnter')
    $('body, html, #app').addClass('swiper-page')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // console.log('beforeRouteLeave')
    $('body, html, #app').removeClass('swiper-page')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.swiper-slide {
  /*top: -65px;*/
  /*height: 100%;*/
}
.slide-first {
  top: 65px;
}
</style>

<style>
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  outline: none;
}
.swiper-pagination-bullet-active {
  background-color: #fb393f;
}
</style>
