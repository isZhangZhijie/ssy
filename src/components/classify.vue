<template>
  <div class="classify">

    <div class="classify-position-list" :class="navFixed ? 'scrolling' :''">
      <div class="container">
        <nav class="scrollspy-nav">
          <ul class="clearfix">
            <li v-for="(item, index) in classifyList" :key="index" :data-id="index" :class="[navIndex == index ? 'active' : '']" @click="goClassify(index)"><a href="javascript:;">{{ item }}</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="container">
      <div class="category" v-for="(item, index) in classifyList" :key="item" :id="index">
        <div class="title">
          <h2>{{ item }}</h2>
          <span>386569 位服务者为您提供服务</span>
        </div>
        <ul class="classify-list clearfix">
          <li v-for="item in new Array(12)" :key="item" class="classify-item">
            <router-link to="/memberList">
              <img src="@/assets/imgs/60@3x.png" alt="">
              <p>看电影</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classify',
  data () {
    return {
      navFixed: false, // 是否固定在顶部
      navHeight: undefined, // 顶部导航高度
      classifyList: ['休闲娱乐', '游戏服务', '运动健康', '丽人时尚', '居家生活', '教育培训', '咨询服务', '技术服务', '旅游服务', '汽车服务', '租赁服务', '共享账号'],
      topList: [],
      scrollTop: undefined, // 页面滚动距离
      navIndex: 0 // 当前分类
    }
  },
  mounted () {
    // console.log($('.classify-position-list'))
    window.addEventListener('scroll', this.handleScroll)
    for (let i = 0; i < this.classifyList.length; i++) {
      this.topList.push($('#' + i).offset().top)
    }
    this.navHeight = document.querySelector('.the-header').offsetHeight
    this.getScrollTop()
    // if()
    // console.log(this.scrollTop)
    // console.log(this.topList)
  },
  methods: {
    handleScroll () {
      this.getScrollTop()
      // console.log(this.scrollTop)
      var offsetTop = document.querySelector('.classify-position-list').offsetTop + document.querySelector('.the-header').offsetHeight
      // console.log(offsetTop, $('.classify-position-list').offset().top - this.scrollTop)
      // console.log(scrollTop, offsetTop)
      if (this.scrollTop > offsetTop) {
        this.navFixed = true
      } else {
        this.navFixed = false
      }
      for (let i = 0; i < this.topList.length - 1; i++) {
        if (this.scrollTop >= this.topList[i] - this.navHeight - 30 && this.scrollTop < this.topList[i + 1] - this.navHeight - 30) {
          this.navIndex = i
        }
      }
    },
    // 获取页面滚动距离
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    goClassify (index) {
      $('html, body').animate({scrollTop: this.topList[index] - this.navHeight - 30}, 500)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classify {
  position: relative;
  padding-top: 110px;
  background: #f0f0f0;
  overflow: hidden;
}
.category {
  padding: 0 20px;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 15px;
}
.title {
  border-bottom: 1px solid #e2e2e2;
  overflow: hidden;
  margin-bottom: 20px;
}
.title h2 {
  float: left;
  line-height: 60px;
  font-size: 22px;
  font-weight: 400;
  padding-left: 10px;
  margin-right: 20px;
  color: #fd4296;
}
.title span {
  float: left;
  line-height: 60px;
  font-size: 14px;
}
.classify-item {
  float: left;
  margin-bottom: 40px;
  width: 116px;
  text-align: center;
}
.classify-item img {
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto 10px;
}
.classify-item p {
  color: #666;
  font-size: 14px;
  /*max-width: 100px;*/
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.classify-position-list {
  position: absolute;
  padding-top: 10px;
  margin-bottom: 20px;
  top: 0;
  width: 100%;
  /*height: 80px;*/
  background: rgba(0,0,0,.4);
  color: #363636;
  background: #fff;
  box-shadow: 0 0 16px rgba(0,0,0,.2);
  z-index: 10;
  /*animation: showClassify .3s;*/
}
.classify-position-list nav {
  position: relative;
}
.classify-position-list.scrolling {
  position: fixed;
  top: 0;
  animation: showClassify .3s;
  z-index: 100;
}
@keyframes showClassify {
  0% {
    top: -80px;
  }
  100% {
    top: 0;
  }
}

.classify-position-list .title {
  position: absolute;
  font-size: 24px;
  top: -36px;
}
.classify-position-list li {
  float: left;
  width: 100px;
  margin: 0 10px 6px;
}
.classify-position-list li a {
  display: block;
  padding: 5px 8px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid transparent;
  transition: all .1s linear;
}
.classify-position-list li a:hover {
  border-color: #fd4296;
  color: #fd4296;
}
.classify-position-list li.active a {
  border-color: #fd4296;
  color: #fd4296;
}
</style>
