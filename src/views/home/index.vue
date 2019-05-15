<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active">
      <van-tabbar-item to="/home/substitute" icon="shop">首页</van-tabbar-item>
      <van-tabbar-item to="/home/publish" icon="edit">僧人</van-tabbar-item>
      <van-tabbar-item to="/home/course" icon="records">资讯</van-tabbar-item>
      <van-tabbar-item to="/home/mine" icon="bag-o">商品</van-tabbar-item>
    </van-tabbar>

  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  components: {
    Tabbar, TabbarItem
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style>
.van-tabbar-item--active {
    color: #07c160!important;
}
</style>
