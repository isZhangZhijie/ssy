<template>
  <!-- swiper -->
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide class="slide-first">
      <div class="seo-content" style="position: absolute;top: -800px;">
        <p>技能共享·闲时服务</p>
        <p>随时随地 约你想要</p>
        <p>下载随时约</p>
        <p>随时来约时尚丽人</p>
        <p>吃饭聊天、司仪主持、美容美妆、美发美甲、摄影模特、按摩SPA</p>
        <p>俊男靓女，越玩越美丽</p>
        <p>随时来越 生活服务</p>
        <p>中医养生、汽车美容、家装设计、木工电工、管道疏通、跑腿代办、搬家……</p>
        <p>生活好帮手，理尽大小事</p>
        <p>随时来越 教育技术</p>
        <p>会销讲师、家教辅导、书法绘画、口语培训、程序编写、平面设计、电脑维修……</p>
        <p>学技术来约，找人兼职来约</p>
        <p>随时来约 各种租赁</p>
        <p>合租房、短租房、租车位、租工位、钟点房、租场地……</p>
        <p>无忧找房、找车、找场地</p>
        <p></p>
        <p></p>
      </div>
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
            <!-- <li>
              <img src="@/assets/imgs/download_android.png" alt="">
              推荐扫码下载
            </li> -->
            <li>
              <a href="javascript:;">
                <img src="@/assets/imgs/download_android.png" alt="">
                Android版下载
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="@/assets/imgs/download_ios.png" alt="">
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
        <p>©2015-2018 随时约 <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备17153702号</a></p>
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
  metaInfo: {
    title: '随时约【随时随地 约你想要】',
    meta: [
      {
        name: 'keywords',
        content: '随时约，随时约app，租人，租房，共享，共享技能'
      },
      {
        name: 'description',
        content: '“随时约”是一个时间售卖与技能交易的平台，致力于帮助更多有时间或有技能的人迅速变现！ 如果你有需求：这里有超400万的技能达人，你可以任意购买Ta的时间或技能，快速约到Ta！ 如果你有时间或技能：这里有超3000万的用户每日数万个需求排队找你，帮你实现当老板梦想！<br/>“随时约”响应国家号召，倡导后台实名前台自愿的原则，每一个用户都必须通过实名认证的手机号码进行注册，通过身份认证、技能认证'
      }
    ]
  },
  data () {
    return {
      // 首页轮播图配置
      swiperOption: {
        direction: 'vertical',
        // width: window.innerWidth,
        // height: window.innerHeight,
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
    // $('body, html, #app').addClass('swiper-page')
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
    // $('body, html, #app').addClass('swiper-page')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // console.log('beforeRouteLeave')
    // $('body, html, #app').removeClass('swiper-page')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: auto;
  height: auto;
}
.swiper-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #f5f5f5;
}
.swiper-container .swiper-pagination {
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
.swiper-container .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  outline: none;
}
.swiper-container .swiper-pagination-bullet-active {
  background-color: #fb393f;
}
</style>
