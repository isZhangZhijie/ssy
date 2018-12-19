<template>
  <!-- swiper -->
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide class="slide-first">
      <div class="inner-slide">
        <div class="figure-left">
          <img src="@/assets/imgs/pic_left.png" alt="">
        </div>
        <div class="figure-center">
          <img src="@/assets/imgs/logo_all.png" alt="" class="text">
          <img src="@/assets/imgs/people1.png" alt="" class="figure1">
          <a href="javascript:;" class="download-btn" @click="goDownload">
            <img src="@/assets/imgs/download_btn.png" alt="">
          </a>
        </div>
        <div class="figure-right">
          <img src="@/assets/imgs/pic_right.png" alt="">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner-slide">
        <div class="text">
          <img src="@/assets/imgs/index_bg1.png" alt="">
        </div>
        <div class="figure">
          <img src="@/assets/imgs/people2.png" alt="">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner-slide">
        <div class="text">
          <img src="@/assets/imgs/index_bg2.png" alt="">
        </div>
        <div class="figure">
          <img src="@/assets/imgs/people3.png" alt="">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner-slide">
        <div class="text">
          <img src="@/assets/imgs/index_bg3.png" alt="">
        </div>
        <div class="figure">
          <img src="@/assets/imgs/people4.png" alt="">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="inner-slide">
        <div class="text">
          <img src="@/assets/imgs/index_bg4.png" alt="">
        </div>
        <div class="figure">
          <img src="@/assets/imgs/people5.png" alt="">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-last">
      <div class="inner-slide">
        <div class="text">
          <ul class="download-list">
            <li>
              <img src="@/assets/imgs/android.png" alt="">
              推荐扫码下载
            </li>
            <li>
              <a href="javascript:;">
                <img src="@/assets/imgs/android.png" alt="">
                Android版下载
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="@/assets/imgs/ios.png" alt="">
                Iphone版下载
              </a>
            </li>
          </ul>
        </div>
        <div class="figure">
          <img src="@/assets/imgs/phone.png" alt="">
        </div>
      </div>
      <canvas id="canvas"></canvas>
      <div class="footer">
        <router-link to="/" exact><img src="@/assets/imgs/logo.png" alt=""></router-link>
        <p>©2016 随时约 京ICP备 15011114号-1</p>
      </div>
    </swiper-slide>
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
      // 首页轮播图配置
      swiperOption: {
        direction: 'vertical',
        width: window.innerWidth,
        height: window.innerHeight,
        mousewheel: true,
        simulateTouch: false,
        keyboard: true,
        slideActiveClass: 'index-slide-active',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideNextTransitionStart: function () {
            $('.the-header').hide()
          },
          slidePrevTransitionStart: function () {
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
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    goDownload () {
      this.swiper.slideTo(5, 800, false)
      setTimeout(function () {
        $('.slide-last').removeClass('index-slide-active').addClass('index-slide-active')
      }, 800)
      $('.the-header').hide()
    }
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
.swiper-pagination {
  right: 50px;
}
.swiper-slide {
  overflow: hidden;
}
.slide-first {
  padding-top: 65px;
}
.inner-slide {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 100%;
}
.slide-first .inner-slide {
  width: 100%;
}
.inner-slide > div {
  position: absolute;
  top: 0;
  width: 600px;
  height: 100%;
}
.figure-left {
  left: 0;
}
.figure-left img {
  position: absolute;
  left: 0;
  height: calc(100% - 65px);
}
.figure-center {
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
}
.figure-right {
  right: 0;
}
.figure-right img {
  position: absolute;
  right: 0;
  height: calc(100% - 65px);
}
.slide-first .text {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  margin: auto;
  height: 20%;
  transform: translateY(-20px);
  opacity: 0;
  transition: all .8s linear;
}
.index-slide-active.slide-first .text {
  transform: translateY(0);
  opacity: 1;
}
.slide-first .download-btn {
  position: absolute;
  top: 30%;
  width: 100%;
  height: 9%;
}
.slide-first .download-btn img {
  display: block;
  height: 100%;
  margin: auto;
}
.slide-first .figure1 {
  position: absolute;
  bottom: 65px;
  left: 50%;
  transform: translate(-50%, 20px);
  /*transform: translateY(20px);*/
  height: 60%;
  transition: all .8s linear;
}
.index-slide-active.slide-first .figure1 {
  transform: translate(-50%, 0);
}
.inner-slide .text {
  left: 0;
}
.inner-slide .text>img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
}
.inner-slide .figure {
  right: 0;
}
.inner-slide .figure img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 30px);
  height: 90%;
  transition: all 1s linear;
}
.index-slide-active .inner-slide .figure img {
  transform: translate(-50%, 0);
}
.slide-last .inner-slide .figure img {
  top: 50%;
  left: 50%;
  height: 80%;
  transform: translate(-47%, -50%);
  transition: all 1s linear;
}
.index-slide-active.slide-last .inner-slide .figure img {
  transform: translate(-50%, -50%);
}
.slide-last .inner-slide {
  height: calc(100% - 120px);
}
.slide-last .download-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -50%);
  width: 160px;
  text-align: center;
  font-size: 18px;
  color: #363636;
  transition: all 1s linear;
}
.index-slide-active.slide-last .download-list {
  transform: translate(-50%, -50%);
}
.slide-last .download-list li+li {
  margin-top: 54px;
}
.slide-last .download-list img {
  margin-bottom: 12px;
  display: block;
  width: 100%;
}
.slide-last .footer {
  position: absolute;
  padding-top: 20px;
  bottom: 0;
  width: 100%;
  height: 120px;
  background-color: #fff;
  text-align: center;
}
.slide-last .footer p {
  margin-top: 16px;
  font-size: 12px;
  color: #666;
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
