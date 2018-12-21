<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import theHeader from '@/components/common/theHeader'
import theFooter from '@/components/common/theFooter'
export default {
  name: 'App',
  components: {
    theHeader,
    theFooter
  }
}
</script>

<style>
body, div, h1, h2, h3, h4, h5, h6, hr, p, a, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  /*line-height: 1;*/
  background: #f5f5f5;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
  font-weight: 100;
}
ul, ol, li {
  list-style: none;
}
em, i {
  font-style: normal;
}
img {
  border: none;
}
input, img {
  /*vertical-align: middle;*/
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover, a:focus {
  text-decoration: none;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: -apple-system,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.swiper-page {
  height: 100%;
  position: relative;
  overflow-y: hidden;
  min-width: 1200px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
.sex {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: no-repeat center/contain;
  vertical-align: middle;
}
.sex1 {
  /* 男 */
  background-image: url(./assets/imgs/sex1.png);
}
.sex2 {
  /* 女 */
  background-image: url(./assets/imgs/sex2.png);
}
.icon-cert {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: no-repeat center/contain;
  vertical-align: middle;
}
.icon-cert-idcard {
  background-image: url(./assets/imgs/certification_idcard.png);
}
.icon-cert-phone {
  background-image: url(./assets/imgs/certification_phone.png);
}
.icon-cert-skills {
  background-image: url(./assets/imgs/certification_skills.png);
}
.dots3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
