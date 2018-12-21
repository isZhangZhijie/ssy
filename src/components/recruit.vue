<template>
  <div class="recruit">
    <div class="recruit-banner1">
      <div class="container">
        <h2>申请成为随时约 "技能达人</h2>
        <p style="font-size: 38px;margin-bottom: 36px;">让你附近的用户排队找你 "赚钱</p>
        <p>无论你只会陪聊天、陪逛街、陪健身、看电影等生活日常技能，</p>
        <p>还是能下厨、搞清洁、写文章、搞开发，拥有一技之长，</p>
        <p>快来随时约发挥你的各种技能</p>
        <p style="margin-bottom: 56px;">用你的闲置时间来赚钱！</p>
        <a href="javascript:;" @click="goDownload" class="apply-btn">我要申请</a>
        <ul class="merit">
          <li>
            <span><i></i>身份认证</span>
            <p>微信、手机、身份证等</p>
            <p>多种渠道身份认证</p>
            <p>保障您的权益</p>
          </li>
          <li>
            <span><i></i>平台担保</span>
            <p>通过平台官方APP进行支付</p>
            <p>技术加密，流程安全</p>
            <p>服务双方有保障</p>
          </li>
          <li>
            <span><i></i>信誉加盟</span>
            <p>全球招募了40+W合伙人</p>
            <p>100+地区代理推广</p>
            <p>值得你的信赖</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="recruit-banner2">
      <div class="container">
        <h2>在随时约，已拥有<span>100+</span>种服务类别</h2>
        <p>休闲娱乐、运动健康、丽人时尚、居家生活、教育培训、咨询服务、技术服务、租赁服务等10大类 别上百种服务品类可以发布。</p>
        <p>占卜、模特、美甲、美发、美容、摄影、家教、户外、家电维修、手机维修、电脑维修、翻译、棋牌、跑腿代办、家装设计、网球、瑜伽、舞蹈、健身、游泳、羽毛球、宠物、导游、猎头、口语、法律、咨询、心理、设计 、编程等上百种服务总有您擅长。</p>
        <p>期待你的加入，成为随时约“技能达人”，不断丰富我们的服务</p>
      </div>
    </div>
    <!-- <div class="recruit-banner3">
      <div class="container">
        <h2>TA们都在随时约 - 发布技能<span>赚钱</span></h2>
        <ul class="member-list clearfix">
          <li v-for="(item, index) in new Array(4)" :key="index">
            <div class="avatar">
              <img src="@/assets/imgs/180.png" alt="">
            </div>
            <h3>瘦身达人</h3>
            <p>已完成1212笔任务</p>
            <p><i class="star"  v-for="(i, k) in new Array(5)" :key="k"></i></p>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="recruit-banner4">
      <div class="container">
        <span>你还在等什么</span>
        <p>想成为技能达人</p>
        <h2><span>扫描</span>随时约下载</h2>
        <img src="@/assets/imgs/download_android2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recruit',
  data () {
    return {}
  },
  methods: {
    goDownload () {
      // $(document).animate().scrollTop($(document).height() - $(window).height())
      $('html, body').finish().animate({'scrollTop': $(document).height() - $(window).height()}, 400)
    }
  }
}
</script>

<style scoped>
.recruit-banner1 {
  height: 700px;
  font-size: 14px;
  color: #fff;
  background-color: #000;
}
.recruit-banner1 .container {
  position: relative;
  padding-top: 100px;
  height: 100%;
  background: url(../assets/imgs/BG_daren1.png) no-repeat center/cover;
}
.recruit-banner1 h2 {
  margin-bottom: 16px;
  font-size: 28px;
  font-family: source han serif sc;
}
.recruit-banner1 h2 ~ p {
  line-height: 1.8;
}
.apply-btn {
  display: block;
  width: 140px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 8px;
  font-size: 20px;
  background: linear-gradient(#961a20, #510004);
}
.merit {
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
}
.merit li {
  float: left;
  padding-left: 120px;
  width: 400px;
}
.merit li i {
  display: inline-block;
  margin-right: 10px;
  width: 42px;
  height: 42px;
  background: no-repeat center/contain;
  vertical-align: -12px;
}
.merit li:nth-of-type(1) i {
  background-image: url(../assets/imgs/icon1.png);
}
.merit li:nth-of-type(2) i {
  background-image: url(../assets/imgs/icon2.png);
}
.merit li:nth-of-type(3) i {
  background-image: url(../assets/imgs/icon3.png);
}
.merit li span {
  display: block;
  margin-bottom: 16px;
  font-size: 24px;
  color: #ffd89e;
}
.recruit-banner2 {
  height: 568px;
  /*background-color: #fff;*/
}
.recruit-banner2 .container {
  padding: 110px 20px 0 570px;
  height: 100%;
  background: url(../assets/imgs/BG_daren2.png) no-repeat center/contain;
}
.recruit-banner2 h2 {
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-bottom: 50px;
}
.recruit-banner2 h2 span {
  color: #fb393f;
  font-family: arial;
}
.recruit-banner2 p {
  font-size: 14px;
  color: #2b2c2d;
  line-height: 1.6;
  margin-bottom: 20px;
}
.recruit-banner3 {
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
}
.recruit-banner3 h2 {
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: bold;
  color: #000;
}
.recruit-banner3 h2 span {
  color: #fb393f;
}
.member-list li {
  float: left;
  width: 201px;
  margin-right: 132px;
}
.member-list li:last-of-type {
  margin-right: 0;
}
.member-list li .avatar {
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 18px;
}
.member-list li .avatar img {
  display: block;
  width: 100%;
}
.member-list h3 {
  margin-bottom: 4px;
  font-size: 28px;
  font-weight: bold;
  color: #000;
}
.member-list p {
  font-size: 16px;
  color: #707070;
  margin-bottom: 20px;
}
.star {
  display: inline-block;
  margin: 0 4px;
  width: 29px;
  height: 29px;
  background: no-repeat center/contain;
  background-image: url(../assets/imgs/star.png);
}
.recruit-banner4 {
  background-color: #fff;
}
.recruit-banner4 .container {
  padding-top: 60px;
  height: 568px;
  text-align: center;
  background: #fff url(../assets/imgs/BG_daren3.png) no-repeat center/contain;
}
.recruit-banner4 .container > span {
  display: block;
  margin-bottom: 14px;
  font-size: 16px;
  color: #9c9c9c;
}
.recruit-banner4 p {
  font-size: 22px;
  color: #707070;
  margin-bottom: 28px;
}
.recruit-banner4 h2 {
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: bold;
  color: #000;
}
.recruit-banner4 h2 span {
  color: #fb393f;
}
.recruit-banner4 img {
  width: 180px;
  /*display: block;*/
}
</style>
