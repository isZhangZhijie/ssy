<template>
  <div class="hall">
    <div class="container">
      <div class="clearfix">
        <div class="hot">
          <div class="category">
            <div class="title">
              <h2>附件服务</h2>
            </div>
            <ul class="person-list clearfix">
              <li v-for="item in new Array(12)" :key="item" class="person-item">
                <memberListItemS></memberListItemS>
              </li>
            </ul>
          </div>
        </div>
        <div class="news">
          <div class="category">
            <div class="title">
              <h2>头条信息</h2>
            </div>
            <div class="news-box">
              <ul class="news-list">
                <li class="news-item" v-for="item in new Array(12)" :key="item">来约单5020054位服务者让你的娱乐生活多姿多彩</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="category" v-for="item in new Array(4)" :key="item">
        <div class="title">
          <h2>休闲娱乐</h2>
          <span>吃喝玩乐人多才尽兴，对尬聊说不，来约单5020054位服务者让你的娱乐生活多姿多彩。</span>
        </div>
        <p class="others">
          <a href="" v-for="item in new Array(16)" :key="item">看电影</a>
        </p>
        <ul class="person-list clearfix">
          <li v-for="item in new Array(10)" :key="item" class="person-item">
            <memberListItemS></memberListItemS>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import memberListItemS from '@/components/common/memberListItemS'
export default {
  name: 'hall',
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
.hall {
  padding-top: 20px;
  background: #f0f0f0;
  overflow: hidden;
}
.hot {
  width: 825px;
  height: 405px;
  margin-bottom: 20px;
  float: left;
}
.news {
  width: 360px;
  height: 405px;
  margin-bottom: 20px;
  float: right;
}
.news-box {
  height: 324px;
  overflow: hidden;
}
.news-box .news-item {
  font-size: 14px;
  color: #101010;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 35px;
}
.news-box .news-item:before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #ff0000;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 12px;
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
  color: #fb393f;
}
.title span {
  float: left;
  line-height: 60px;
  font-size: 14px;
}
.others {
  overflow: hidden;
  margin-bottom: 10px;
}
.others a {
  float: left;
  width: 84px;
  margin: 0 5px 10px;
  line-height: 28px;
  text-align: center;
  font-size: 14px;
  color: #666;
  border: 1px solid #e2e2e2;
  border-radius: 14px;
  transition: all .1s linear;
}
.others a:hover {
  color: #fb393f;
  border: 1px solid #fb393f;
}
.person-item {
  float: left;
  width: 220px;
  margin-bottom: 25px;
  margin-right: 12px;
}
.hot .person-item {
  width: 249px;
}

</style>
