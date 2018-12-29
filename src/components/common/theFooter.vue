<template>
  <div class="the-footer">
    <div class="container">
      <ul>
        <li>
          <h2><img src="@/assets/imgs/logo_fff.png" alt=""></h2>
          <p>中国最优秀的个人共享平台</p>
          <p>随时随地 约你想要</p>
          <p>联络邮箱：yuedaoapp@vip.qq.com</p>
        </li>
        <li>
          <h2>关于随时约</h2>
          <p><router-link to="/about">关于我们</router-link></p>
          <p><router-link to="/about">联系我们</router-link></p>
        </li>
        <li>
          <h2>安全保障</h2>
          <p><router-link to="/security">服务保障</router-link></p>
        </li>
        <li class="download-item">
          <h2>Android下载</h2>
          <p><img src="@/assets/imgs/download_android.png" alt=""></p>
        </li>
        <li class="download-item">
          <h2>IOS下载</h2>
          <p><img src="@/assets/imgs/download_ios.png" alt=""></p>
        </li>
      </ul>
      <p class="copyright">©2015-2018 随时约 <a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备17153702号</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'theFooter',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.the-footer {
  position: relative;
  padding-top: 46px;
  background-color: #2d2d2d;
  height: 300px;
  color: #eee;
}
.the-footer li {
  float: left;
  width: calc(1200px / 5);
}
.the-footer h2 {
  margin-bottom: 20px;
  font-size: 18px;
}
.the-footer ul p {
  margin-bottom: 14px;
  font-size: 14px;
}
.the-footer ul a:hover {
  color: #fff;
}
.download-item img {
  width: 120px;
}

.copyright {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 50px;
}
</style>
