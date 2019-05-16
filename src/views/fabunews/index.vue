<template>
 <div class="hello">
        <van-row class="m-header">
            <van-col span="24">
                <van-icon name="arrow-left" class="m-header-icon"  @click="prevx()" />
　　　　　　　　　　<div class="head">发布资讯</div>
　　　　　　  </van-col>
        </van-row>
      

      <van-cell-group>
      <van-field v-model="username" placeholder="请输入资讯标题" label-align="left" label="标题：" clearable required></van-field>
      
      <van-field class="tess" v-model="message"  type="textarea" placeholder="请输入详细内容"  rows="1" autosize style="height:200px;" />
    </van-cell-group>





    <van-row class="box">
    
      <van-button type="primary" size="small" class="login-btn" @click="handleLogin">
        {{isLogin ? '提交' : ''}}
      </van-button>
    </van-row>
    

  </div>
  
</template>
<script>
export default {
  data() {
    return {
     username: '',
      password: '',
      juti:'',
      message:'',
      
      isLogin: true
    }
  },


  methods: {
    
     prevx () {
      this.$router.go(-1)
    },
    
    showLoginTip() {
      const toast = this.$toast.loading({
        duration: 500,
        forbidClick: false,
        loadingType: 'spinner',
        message: '登录中......'
      })
    },
    login() {
      this.$http.login({
        username: this.username,
        password: this.password,
        juti:this.juti
      }).then(response => {
        console.log('登录成功返回', response)
        console.log('返回code',response.code)
        if(response.code == 1) {

            this.$router.push({
                path: '/substitute'
            })
          // this.$store.dispatch('setUser', )
        }
        if(response.code == 0){
           console.log('登录失败', response)
            this.$toast.fail(response.info)
          return
        }
      })
    },
    handleLogin() {
      if(!this.username) {
        this.$toast.fail('寺庙名称不能为空')
        return
      }
      if(!this.password){
        this.$toast.fail('负责人不能为空')
         return
      }

      if(this.isLogin) {
        this.showLoginTip()
        this.login()
      }
    },


  }
}
</script>
<style scoped>
    .m-header {
        height: 40px;
        line-height: 40px;
        background: #0082FE;
        color: #fff;
    }
    
    .m-header-icon {
        position: absolute;
        top: 11px;
        left: 6px;
        font-size: 18px;
    }
    .head{
      text-align: center;
       font-size: 14px;
    }
    textarea{
      height: 200px !important;
    }
</style>
<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    width: 100px;
    margin: 100px 0 30px;
  }
  .box {
    margin-top: 30px;
  }
  .login-btn {
    margin-left: 20px;
  }
}
.van-cell-group {
    background-color: #fff;
    width: 100%;
}
.login-container .box[data-v-37dfd6fc] {
    margin-top: 30px;
    width: 90%;
}
.login-container .login-btn[data-v-37dfd6fc] {
     margin-left: 0px;
    width: 100%;
}
.van-button--primary {
    color: #fff;
    background-color: #0082FE;
    border: 1px solid #0082FE;
    width: 90%;
    margin-left: 5%;
    margin-top: 20px;

}
.van-button--primary[data-v-08841328] {
    color: #fff;
    background-color: #0082FE;
    border: 1px solid #0082FE;
    width: 90%;
    margin-left: 5%;
    margin-top: 20px;
}
</style>
