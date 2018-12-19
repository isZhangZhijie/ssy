<template>
  <div class="member">
    <div class="container">
      <div class="detail-content">
        <div class="detail_info">
          <div class="person_info">
            <div class="detail_gradient">
              <img src="@/assets/imgs/56.png" alt="">
            </div>
            <p class="uname">
              <span>我是谁</span>
              <i class="sex sex2"></i>
            </p>
            <p title="广东省,广州市,海珠区" class="person_area"><span>所在位置</span>广东省,广州市,海珠区</p>
            <p>
              <span>认证信息</span>
              <i class="icon-cert icon-cert-idcard" title="身份认证"></i>
              <i class="icon-cert icon-cert-phone" title="手机认证"></i>
              <i class="icon-cert icon-cert-skills" title="技能认证"></i>
            </p>
            <p><span>活跃度</span>高</p>
            <p><span>浏览量</span>1</p>
            <p class="star">收藏102</p>
          </div>
          <div class="detail_skill">
            <h1>香薰spa 服务 让生活在都市的你非常减压</h1>
            <p class="task">任务分类：居家生活／男士SPA</p>
            <div class="detail_consult">
              <div class="detail_service">
                <p><span><em>50.</em>00</span>元/小时</p><p><i class="icon-service icon-service-xianxia"></i>线下服务</p>
              </div>
              <div class="detail_service">
                <p><span><em>2.</em>00</span>元/小时</p><p><i class="icon-service icon-service-dianhua"></i>电话咨询</p>
              </div>
              <div class="detail_service">
                <p><span><em>20.</em>00</span>元/小时</p><p><i class="icon-service icon-service-yuancheng"></i>远程服务</p>
              </div>
              <div class="detail_service">
                <p><span><em>10.</em>00</span>元/小时</p><p><i class="icon-service icon-service-shipin"></i>视频服务</p>
              </div>
            </div>
            <p class="level_info"><span>服务时间：</span></p>
            <p class="level_info"><span>服务方式：</span>线下服务</p>
            <a href="javascript:;" rel="nofollow" class="detail_btn">立即约Ta</a>
          </div>
        </div>

        <div class="detail_other">
          <h2>TA的技能</h2>
          <div class="detail_skills">
            <a href="" class="detail_category">
              <div>
                <img src="@/assets/imgs/60@3x.png" alt="足疗" width="60" height="60">
              </div>
              <div class="detail_word">
                <p>
                  <a href="javascript:;">足疗</a>
                  <!-- <span>中级1</span> -->
                </p>
                <p>综合评分：5.0</p>
                <p>线下服务：<i>300.00</i><em>元/小时</em></p>
              </div>
            </a>
          </div>
        </div>

        <div class="detail_other">
          <h2>服务详情</h2>
          <div class="service_msg">
            <ul class="service_msg_list">
              <li>
                <span class="service_msg_title"><i class="icon-service icon-service-shanchang"></i>专业擅长</span>
                <p>调试路由器</p>
              </li>
              <li>
                <span class="service_msg_title"><i class="icon-service icon-service-jieshao"></i>服务介绍</span>
                <p>电脑装系统，调试路由器</p>
              </li>
              <li>
                <span class="service_msg_title"><i class="icon-service icon-service-pic"></i>技能相册</span>
                <p>电脑装系统，调试路由器</p>
              </li>
              <li>
                <span class="service_msg_title"><i class="icon-service icon-service-movie"></i>技能视频</span>
                <p>电脑装系统，调试路由器</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="detail-right">
        <div class="detail_other">
          <h2>TA的技能</h2>
          <ul class="person-list clearfix">
            <li v-for="item in new Array(10)" :key="item" class="person-item">
              <memberListItemS></memberListItemS>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import memberListItemS from '@/components/common/memberListItemS'
export default {
  name: 'member',
  components: {
    memberListItemS
  },
  data () {
    return {
    }
  },
  mounted: function () {
    // this.axios.get('http://192.168.0.115/api/v1/coin/1', {
    //   params: {} // 参数
    // }).then((data) => {
    //   console.log(data)
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-list {
  padding-top: 20px;
}
.person-item {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #efefef;
}
.service_msg {
  font-size: 12px;
}
.service_msg_list > li {
  margin-bottom: 5px;
  border-bottom: 1px solid #efefef;
  padding-bottom: 10px;
}
.service_msg_list > li:last-of-type {
  border-bottom: none;
}
.service_msg_list > li > p {
  color: #363636;
  padding-left: 30px;
}
.service_msg_title {
  display: block;
  color: #666;
  line-height: 36px;
}
.icon-service {
  margin-right: 10px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: no-repeat center/contain;
  vertical-align: text-top;
}
.icon-service-xianxia {
  background-image: url(../assets/imgs/personalhome_xianxia.png);
}
.icon-service-dianhua {
  background-image: url(../assets/imgs/personalhome_dianhua.png);
}
.icon-service-yuancheng {
  background-image: url(../assets/imgs/personalhome_yuancheng.png);
}
.icon-service-shipin {
  background-image: url(../assets/imgs/personalhome_shipin.png);
}
.icon-service-shanchang {
  background-image: url(../assets/imgs/personalhome_shanchang.png);
}
.icon-service-jieshao {
  background-image: url(../assets/imgs/personalhome_jieshao.png);
}
.icon-service-pic {
  background-image: url(../assets/imgs/personalhome_pic.png);
}
.icon-service-movie {
  background-image: url(../assets/imgs/personalhome_movie.png);
}
.member {
  padding-top: 20px;
  background: #f0f0f0;
  overflow: hidden;
}
.detail-right {
  float: right;
  width: 260px;
}
.detail-content {
  float: left;
  width: 920px;
}
.detail_info{
  margin-bottom: 20px;
  background:#fff;
  overflow: hidden;
  /*border:1px solid #efefef;*/
  border-radius:15px;
  position: relative;
}
.person_info{
  width:240px;
  float:left;
  border-right:1px solid #efefef;
}
.person_info p.uname{
    margin:46px 0 13px;
    font-size:17px;
    padding-left:30px;
    /*text-align: center;*/
}
.person_info p.uname span {
  max-width:155px;
  display:inline-block;
  text-align: center;
  padding-right:6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.person_info p.uname em {
  vertical-align: middle;
  background-position: 0px 4px;
  margin-top:3px;
}
.person_info h6{
    text-align: center;
}
.person_info p{
    font-size:13px;
    line-height:28px;
    overflow:hidden;
}
.person_info p span{
    padding:0 17px 0 14px;
    min-width:60px;
    color:#7e7e7e;
    display:block;
    float:left;
}
.icon-cert {
  margin-right: 8px;
}
.person_info p.star{
    line-height:40px;
    font-size:12px;
    color:#7e7e7e;
    text-align:center;
    border-top:1px solid #efefef;
    position: relative;
    margin-top:18px;
    cursor:pointer;
}
.person_info p.star:before{
    content:'';
    display:block;
    width:19px;
    height:18px;
    background:url('http://cdn.iyuedan.com/www/images/shouye/detail_star.png') no-repeat;
    background-size:19px 18px;
    position: absolute;
    top:12px;
    left:74px;
}
.detail_gradient{
  position: relative;
  height:80px;
  background: #fd4296;
}
.detail_gradient img {
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  border-radius:50%;
  margin: auto;
  width: 80px;
  height: 80px;
}
.detail_skill{
    width:680px;
    float:right;
    padding:20px 20px 0 20px;
    position: relative;
}
.detail_skill h1{
    font-size:22px;
    color:#333;
}
.detail_skill p.task{
    color:#a8a8a8;
    padding:13px 0 18px  0;
    font-size: 12px;
}
.detail_consult{
    /*width:650px;*/
    background:#fff7eb;
    overflow: hidden;
    margin-bottom:18px;
}
.detail_service{
    float:left;
    width: 160px;
}
.detail_service p{
    line-height:30px;
    font-size:13px;
    color:#727170;
    padding:0 20px;
    margin-right:23px;
}
.detail_service p span{
    color:#fd4296;
    font-weight:bolder;
}
.detail_service p span em{
    font-size:17px;
}
.detail_skill p.level_info{
    line-height:36px;
    color:#999999;
    font-size:14px;
}
.detail_skill p.level_info span {
  color:#666;
}
.detail_skill p.share{
   position: absolute;
   top:315px;
   left:210px;
   color:red;
   font-weight:bolder;
}
.detail_btn{
    width:120px;
    line-height:37px;
    display:block;
    text-align:center;
    color:#fff;
    background: #fd4296;
    background-size: 120px 37px;
    border-radius:25px;
    margin-top:24px;
    font-size:16px;
}

.detail_other{
  border:1px solid #efefef;
  background:#fff;
  padding:16px 16px 0px;
  margin-bottom: 20px;
  border-radius:15px;
}
.detail_other h2{
  font-size: 22px;
  font-weight: 400;
  padding-left: 10px;
  margin-right: 20px;
  color: #fd4296;
}
.detail_skills{
  padding: 12px 0;
  overflow: hidden;
}
.detail_category{
  float: left;
  cursor:pointer;
  min-width:230px;
  overflow: hidden;
}
.detail_word{
    float:left;
    width:160px;
}
.detail_word p{
    font-size:12px;
    line-height:23px;
}
.detail_word span{
    color:#ffab32;
    font-size:12px;
    padding:0 3px;
}
.detail_category span:before{
    content:'';
    display:inline-block;
    width:14px;
    height:14px;
    background:url('http://cdn.iyuedan.com/www/images/shouye/icon2.png') no-repeat;
    background-position:-16px -100px;
    padding-left:5px;
    vertical-align: middle;;
}
.detail_category img{
    float:left;
    padding:3px 10px 0 0;
    width:60px;
}
.detail_category p i{
    font-style: normal;
    color:#fd4296;
}
</style>
