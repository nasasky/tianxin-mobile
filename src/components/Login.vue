<template>
<div class="login-container">
  

    <van-cell-group style="top:20px;">
      <van-field v-model="username" placeholder="请输入账号" label-align="left" label="账号" clearable required></van-field>
      <van-field v-model="password" placeholder="请输入密码" label-align="left" label="密码" clearable required type="password"></van-field>
     
    </van-cell-group>
    <div class="wang">
  <router-link to="/about">忘记密码？</router-link>
    </div>
   
    
    <van-row class="box">
     
      <van-button type="primary" size="small" class="login-btn" @click="handleLogin">
       登录
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
      repassword: '',
      isLogin: true
    }
  },
  methods: {
  
    showLoginTip() {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: false,
        loadingType: 'spinner',
        message: '登录中......'
      })
    },

    login() {
      this.$http.login({
        username: this.username,
        password: this.password
      }).then(response => {
        console.log('登录成功返回', response)
        console.log('返回code',response.code)
        if(response.code == 1) {

            this.$router.push({
                path: '/Contant'
            })
          // this.$store.dispatch('setUser', )
        }
      }).catch(err => {
        console.error('登录发生错误', err)
      })
    },
    handleLogin() {
      if(!this.username || !this.password) {
        this.$toast.fail('用户名或是密码不能为空')
        return
      }

      
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box{
  margin-top: 30px;
}
.van-button--small {
    padding: 0 8px;
    height: 40px;
    top: 30px;
    width: 90%;
    min-width: 60px;
    font-size: 15px;
    line-height: 38px;
}
.wang{
  margin-top: 30px;
  width: 90%;
  text-align: right;
  margin-left: 10%;
  font-size: 14px;
}
</style>
