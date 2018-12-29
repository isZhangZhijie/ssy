<template>
  <div class="the-header">
    <div class="nav container">
      <div class="logo">
        <h1 title="随时约">随时约</h1>
        <router-link to="/"><img src="@/assets/imgs/logo.png" alt=""></router-link>
        <!-- <span>随时随地，约你想约</span> -->
      </div>
      <ul class="route-list">
        <router-link tag="li" active-class="active" class="route-item" to="/" exact><a><span>首页</span></a></router-link>
        <!-- <router-link tag="li" active-class="active" class="route-item" to="/hall"><a><span>服务大厅</span></a></router-link> -->
        <!-- <router-link tag="li" active-class="active" class="route-item" to="/classify"><a><span>服务分类</span></a></router-link> -->
        <router-link tag="li" active-class="active" class="route-item" to="/recruit"><a><span>达人招募</span></a></router-link>
        <router-link tag="li" active-class="active" class="route-item" to="/security"><a><span>服务保障</span></a></router-link>
        <router-link tag="li" active-class="active" class="route-item" to="/about"><a><span>关于我们</span></a></router-link>
      </ul>
      <!-- <p class="login">登录/注册</p>
      <p class="location">
        <router-link to="/city"><i class="icon-location"></i><span>广州市</span></router-link>
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'theHeader',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  position: absolute;
  text-indent: -9999em;
}
.login {
  position: relative;
  top: 15px;
  float: right;
  width: 106px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  color: #fb393f;
  border: 1px solid #fb393f;
  border-radius: 4px;
  cursor: pointer;
  transition: all .04s linear;
}
.login:hover {
  background-color: #fb393f;
  color: #fff;
}
.location {
  float: right;
  margin-right: 20px;
  height: 100%;
  line-height: 64px;
  font-size: 16px;
  color: #090909;
}
.icon-location {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  background: no-repeat center/contain;
  vertical-align: text-bottom;
  background-image: url(../../assets/imgs/location.png);
}
.the-header {
  position: relative;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  z-index: 100;
}
.nav {
  overflow: hidden;
  height: 64px;
  color: #fff;
}
.logo {
  position: relative;
  margin-right: 10px;
  float: left;
  height: 100%;
  color: #71777c;
}
.logo a {
  display: block;
}
.logo img {
  position: relative;
  display: block;
  top: 12px;
  margin: auto;
}
.route-list {
  float: left;
  height: 100%;
}
.route-item {
  float: left;
  height: 100%;
}
.route-item a {
  display: block;
  padding: 0 16px;
  height: 100%;
  line-height: 62px;
  color: #71777c;
}
.route-item a:hover {
  color: #fb393f;
}
.route-item.active a {
  color: #fb393f;
  border-bottom: 2px solid #fb393f;
}
</style>
