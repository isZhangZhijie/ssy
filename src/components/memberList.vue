<template>
  <div class="member-list">
    <div class="container">
      <div class="sel-box content">
        <ul class="sel-list clearfix" v-for="(item, index) in selList" :key="index">
          <div class="sel-title">{{ selTitle[index] }}：</div>
          <li v-for="(val, key) in item" :class="['sel-item', key == selected[index] ? 'active' : '']" :key="key">
            <a href="javascript:;" @click="select(index, key)">{{ val }}</a>
          </li>
        </ul>
      </div>
      <ul class="member-box">
        <li class="member-list-item content" v-for="item in new Array(16)" :key="item">
          <div class="detail-box clearfix">
            <router-link to="/member" class="avatar"><img src="@/assets/imgs/56.png" alt=""></router-link>
            <div class="detail-text">
              <p class="name"><router-link to="/member" class="avatar">我是谁</router-link><i class="sex sex1"></i></p>
              <p class="address">
                <span title="广东省广州市荔湾区中山七路81号" class="dots3">广东省广州市荔湾区中山七路81号</span><i title="身份认证" class="icon-cert icon-cert-idcard"></i><i title="手机认证" class="icon-cert icon-cert-phone"></i><i title="技能认证" class="icon-cert icon-cert-skills"></i>
              </p>
              <p>技能名称：<span class="color">网球</span></p>
              <p>综合评分：<span class="arial">5.0</span></p>
              <p>线下服务：<span class="color arial">50.00</span>元/小时</p>
            </div>
          </div>
          <p class="desc dots3"><span>服务介绍：</span>本人7岁开始练球，有20多年打球经验，七八年的网球教学经验。可以分别教授小朋友或大人联系网球，根据学员不同需求制定相应训练计划。从零基础到3.0水平均可提供教学指导。另外，也可以接受陪打任务。</p>
          <router-link to="/member" class="link">立即约TA</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'memberList',
  data () {
    return {
      selTitle: ['品类', '服务', '年龄', '性别'],
      selList: [
        ['学唱歌', '情感咨询', '吃美食', '看电影', '逛商场', '陪聊', '代喝酒', '交友', '玩桌游', '喝咖啡', '喝茶', '看演出', '看比赛', '喝咖啡', '喝茶', '看演出', '看比赛'],
        ['不限', '线下服务', '电话咨询', '视频咨询', '线上服务'],
        ['不限', '25以下', '25-35', '35以上'],
        ['不限', '男', '女']
      ],
      selected: [0, 0, 0, 0]
    }
  },
  methods: {
    select: function (index, key) {
      // 直接this.selected设置数组值页面不会更新，要用下面方法
      this.$set(this.selected, index, key)
      // console.log(this.selected)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.member-list {
  padding-top: 20px;
}
.content {
  padding: 16px;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 15px;
}
.sel-box {
  font-size: 14px;
}
.sel-list + ul {
  margin-top: 14px;
}
.sel-list:first-of-type .sel-title {
  margin-bottom: 2px;
}
.sel-title {
  float: left;
  padding: 4px 8px;
}
.sel-item {
  float: left;
  margin: 0 8px;
}
.sel-item a {
  display: block;
  padding: 4px 8px;
  border-radius: 5px;
}
.sel-item.active a {
  color: #fff;
  background-color: #fd4296;
}
.sel-item:not(.active) a:hover {
  color: #fd4296;
}
.member-list-item {
  position: relative;
  float: left;
  width: 590px;
  margin-right: 20px;
}
.member-list-item .link {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 96px;
  height: 28px;
  border-radius: 20px;
  line-height: 28px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  background-color: #fd4296;
}
.member-list-item:nth-of-type(2n) {
  margin-right: 0;
}
.member-list-item .desc {
  margin-top: 20px;
  color: #7e7e7e;
  font-size: 14px;
}
.member-list-item .desc span {
  color: #363636;
}
.avatar img {
  float: left;
  width: 145px;
  height: 145px;
  margin-right: 16px;
}
.detail-text {
  float: left;
}
.detail-text > p {
  line-height: 29px;
  font-size: 14px;
  color: #666;
}
.detail-text i {
  margin-left: 8px;
}
.detail-text .name {
  font-size: 18px;
  color: #363636;
}
.detail-text .address span {
  display: inline-block;
  max-width: 200px;
  vertical-align: top;
}
.detail-text .arial {
  font-family: arial;
}
.detail-text .color {
  color: #fd4296;
}
</style>
