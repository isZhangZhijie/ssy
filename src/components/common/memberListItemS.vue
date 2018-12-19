<template>
  <div class="member-list-item-s">
    <div class="avatar">
      <router-link to="/member"><img src="@/assets/imgs/56.png" alt=""></router-link>
    </div>
    <div class="person-msg">
      <h3>
        <router-link to="/member">我是谁</router-link>
        <i class="sex sex1"></i>
      </h3>
      <p>看电影</p>
      <p>报价：150元/次</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'memberListItemS',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.member-list-item-s {
  height: 56px;
}
.avatar {
  width: 56px;
  height: 56px;
  overflow: hidden;
  float: left;
  margin-right: 16px;
  border-radius: 50%;
}
.avatar img {
  display: block;
  width: 56px;
  height: 56px;
  transition: all .2s linear;
}
.avatar:hover img {
  transform: scale(1.1);
}
.person-msg {
  font-size: 12px;
}
.person-msg .sex {
  /*margin-top: 3px;*/
}
.person-msg h3 {
  font-size: 14px;
  font-weight: bold;
  color: #363636;
}
.person-msg h3:hover {
  color: #fb393f;
}
.person-msg p {
  margin-top: 3px;
}
</style>
