<template>
 <div class="hello">
        <van-row class="m-header">
            <van-col span="24" style="text-align: center;">
                <van-icon  @click="prev()" name="arrow-left" class="m-header-icon" />
　　　　　　　　　<div class="title">忘记密码</div>
　　　　　　  </van-col>
        </van-row>
    </div>
 
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    prev () {
      this.$router.go(-1)
    }
  }

}
</script>

<style>
    .m-header {
        height: 40px;
        line-height: 40px;
        background: #07c160;
        color: #fff;
    }
    
    .m-header-icon {
        position: absolute;
        top: 10px;
        left: 6px;
        font-size: 18px;
    }
  .m-header text{
    text-align: center;
   
  }
  .title{
    width:100%;
     font-size: 15px;
  }
</style>