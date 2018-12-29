<template>
  <div class="about">
    <div class="top-img"></div>
    <div class="container">
      <ul class="msg-list">
        <li>
          <img src="@/assets/imgs/BG_us2.png" alt="">
          <div class="text-box">
            <p>随时约APP隶属于约到文化发展（广州）有限公司，是一款人人都可以买卖个性化服务的平台型产品，在国家倡导“万众创业，共享经济”的时代背景下，是目前国内最大的个人服务交易撮合平台，享有移动互联网“共享经济第一黑马“之美誉，被业界称为“人的淘宝”。随时约创始团队来自腾讯、新浪等知名互联网公司，在智能匹配算法、大数据等领域积累有多年经验。</p>
          </div>
        </li>
        <li>
          <img src="@/assets/imgs/BG_us3.png" alt="">
          <div class="text-box">
            <p>“随时约”是一个时间售卖与技能交易的平台，致力于帮助更多有时间或有技能的人迅速变现！ 如果你有需求：这里有超400万的技能达人，你可以任意购买Ta的时间或技能，快速约到Ta！ 如果你有时间或技能：这里有超3000万的用户每日数万个需求排队找你，帮你实现当老板梦想！</p>
            <p>“约到”响应国家号召，倡导后台实名前台自愿的原则，每一个用户都必须通过实名认证的手机号码进行注册，通过身份认证、技能认证、微博认证（实名认证）、支付宝绑定认证（实名认证），微信支付绑定认证（实名认证）等5项措施确保用户的身份真实，而为用户之间提供更强的信用支持。</p>
          </div>
        </li>
        <li>
          <img src="@/assets/imgs/BG_us4.png" alt="">
          <div class="text-box">
            <p>1.专业技能多：健身、占卜、美容、摄像、模特、帮订票、跑腿代办、家教、翻译、网球、舞蹈、书法、推拿、口语、法律、咨询、编程、户外等上百种。</p>
            <p>2.特色服务多：练唱歌、看电影、逛商场、享美食、带跑步、玩游戏、代办等各种想不到。</p>
            <p>3.时间变现：有技能接单挣钱，没技能分享时间也能挣钱。</p>
            <p>4.按附近查找：采用科学算法，通过手机LBS和雷达扫描定位，快速找到附近服务者。</p>
            <p>5.安全有保障：鼓励交易双方认证、赠送保险、平台担保交易，多重保障更可靠。</p>
            <p>6.聊天能挣钱：全国范围接听客户咨询电话或视频，不出家门轻松赚到钱。</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="contact-us">
      <div class="container">
        <h1>联系我们</h1>
        <p><span>客服热线：</span>400-875-1002</p>
        <p><span>商务合作电话：</span>18888666610</p>
        <p><span>联络邮箱：</span>yuedaoapp@vip.qq.com</p>
        <p style="margin-bottom: 30px;"><span>公司地址：</span>广州市白云区云城街齐富路自编90号金富大厦701房</p>
        <baidu-map
          id="allmap"
          class="map"
          ak="KCzp8claYra8uYAvahElV9oKUT6j7Gx1"
          :center="center" :zoom="zoom" @ready="handler"
          scroll-wheel-zoom
        >
          <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
          <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
          <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
          <bm-marker :position="center" @click="infoWindowToggle">
            <bm-info-window :show="show" :width="300" @close="infoWindowClose">
              <h2 style="font-size: 16px;font-weight: bold;color: #fb393f;margin-bottom: 6px;">随时约</h2>
              公司地址：广州市白云区金富大厦
            </bm-info-window>
          </bm-marker>
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmScale from 'vue-baidu-map/components/controls/Scale.vue'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation.vue'
import BmOverviewMap from 'vue-baidu-map/components/controls/OverviewMap.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'
export default {
  name: 'about',
  components: {
    BaiduMap,
    BmScale, // 比例尺控件
    BmNavigation, // 缩放控件
    BmOverviewMap, // 缩略图控件
    BmMarker, // 定位点
    BmInfoWindow // 定位弹框
  },
  metaInfo: {
    title: '关于我们',
    meta: [
      {
        name: 'keywords',
        content: '随时约，公司简介，产品介绍，产品特色，联系方式'
      },
      {
        name: 'description',
        content: '“随时约”服务平台。国内优秀个人服务交易平台，共享经济领导者'
      }
    ]
  },
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      show: true
    }
  },
  methods: {
    handler ({BMap, map}) {
      // console.log(BMap, map)23.2003482819,113.2778873257
      this.center.lng = 113.2779
      this.center.lat = 23.2006
      this.zoom = 18
    },
    infoWindowClose () {
      this.show = false
    },
    infoWindowToggle () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.top-img {
  position: relative;
  height: 400px;
  margin-bottom: 68px;
  background: url(../assets/imgs/BG_us1.png) no-repeat center;
}
.msg-list li {
  margin-bottom: 68px;
  height: 600px;
  background-color: #fff;
}
.msg-list .text-box {
  padding: 30px;
  width: 400px;
}
.msg-list .text-box p {
  margin-bottom: 20px;
  text-indent: 2em;
  line-height: 1.6;
}
.msg-list li img {
  width: 800px;
  height: 600px;
}
.msg-list li:nth-of-type(n) img {
  float: left;
}
.msg-list li:nth-of-type(2n) img {
  float: right;
}
.msg-list li:nth-of-type(n) .text-box {
  float: right;
}
.msg-list li:nth-of-type(2n) .text-box {
  float: left;
}

.contact-us {
  background-color: #fff;
  padding: 48px 0;
}
h1 {
  font-size: 32px;
  font-weight: bold;
  color: #363636;
  text-align: center;
  margin-bottom: 40px;
}
.contact-us p {
  margin-bottom: 10px;
  font-size: 18px;
  color: #363636;
}
.contact-us p span {
  font-weight: bold;
}
.map {
  padding: 8px;
  width: 100%;
  height: 630px;
  border: 1px solid #ddd;
}
</style>
