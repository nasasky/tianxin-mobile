<template>
<div class="ban"> 
  <van-row class="m-header">
            <van-col span="24">
                <van-icon name="arrow-left" class="m-header-icon"  @click="prevv()" />
　　　　　　　　　
　　　　　　  </van-col>
</van-row>

<van-row>
  <van-col span="24">
    <div class="admin">
      <div class="touxiang">
         <van-icon  name="wechat" />
          <h6>允许授权绑定该账号</h6>
      </div>
    </div>
  </van-col>
  
</van-row>
<van-row>
  <van-col span="24">
    <router-link :to="{name:'substitute',params:{}}">
<van-button type="info">立即绑定</van-button>
    </router-link>
   
  </van-col>
</van-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  computed: {


  },
  mounted() {
  
   
  },
  methods: {
      prevv () {
      this.$router.go(-1)
    },

  }
};
</script>

<style lang="scss" scoped>
.m-header {
        height: 40px;
        line-height: 40px;
       
        color: #fff;
    }
    
    .m-header-icon {
        position: absolute;
        top: 11px;
        left: 6px;
        font-size: 18px;
        color: #0082FE
    }
    .head{
      text-align: center;
       font-size: 14px;
    }
.container {
  padding: 0;
}


</style>


<style>

.van-button--normal {
    padding: 0 15px;
    font-size: 14px;
    width: 90%;
    margin-left: 5%;
}
.van-button {
    height: 40px;
    line-height: 40px;
}
.touxiang h6{
  font-size: 16px;
  color: black;
  margin-top: 10px;
}

.admin{
 position: relative;
  width: 100%;
  height: 180px;
 
}

.touxiang{
position: absolute;
margin: auto;

height: 100px;
left: 0;
right: 0;
top: 40px;
text-align: center;
}
.ban{
  margin-top: 0px;
}
.van-icon-wechat{
 color:#0082FE;
 font-size: 50px;
}
.van-button__text{
  letter-spacing: 5px;
}
</style>

