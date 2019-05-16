<template>
<div class="ban"> 
<van-row>
  <van-col span="24">
    <div class="admin">
      <div class="touxiang">
         <van-icon  name="manager" />
          <h6>Admin</h6>
      </div>
    </div>
  </van-col>
  
</van-row>


<van-row gutter="20" style="margin-top:20px;">
  <router-link :to="{name:'publish',params:{id:'1'}}">
  <van-col span="6">
    <van-icon  name="shop-o" />
     <h6>新增寺庙</h6>
  </van-col>
  </router-link>

  <router-link :to="{name:'sengren',params:{}}">
  <van-col span="6">
      <van-icon name="user-o"/>
      <h6>新增僧人</h6>
  </van-col>
  </router-link>
 
 <router-link :to="{name:'fabunews',params:{}}">
  <van-col span="6">
      <van-icon name="edit"/>
      <h6>发布资讯</h6>
  </van-col>
  </router-link>

  <router-link :to="{name:'fabushangpin',params:{}}">
   <van-col span="6">
       <van-icon name="balance-pay"/>
       <h6>发布商品</h6>
   </van-col>
  </router-link>
   
</van-row>


<van-row gutter="20" style="margin-top:20px;">
  <router-link :to="{name:'course',params:{}}">
 <van-col span="6">
    <van-icon  name="hotel-o" />
    <h6>寺庙列表</h6>
  </van-col>
  </router-link>
 
 <router-link :to="{name:'renlie',params:{}}">
 <van-col span="6">
      <van-icon name="user-circle-o"/>
      <h6>僧人列表</h6>
  </van-col>
 </router-link>
 
 <router-link :to="{name:'newslie',params:{}}">
<van-col span="6">
      <van-icon name="notes-o"/>
      <h6>资讯列表</h6>
  </van-col>
 </router-link>
  
  <router-link :to="{name:'shanglie',params:{}}">
 <van-col span="6">
       <van-icon name="bag-o"/>
       <h6>商品列表</h6>
   </van-col>
  </router-link>
  
</van-row>



</div>


</template>

<script>

</script>
<style lang="scss" scoped>
.van-icon-shop-o{
 color:#0092FF;
 font-size: 35px;
}

.van-icon-user-o{
 color:#FB7600;
 font-size: 35px;
}

.van-icon-edit{
 color:#4BCF3A;
 font-size: 35px;
}
.van-icon-balance-pay{
 color:#0082FE;
 font-size: 35px;
}

.van-icon-user-circle-o{
 color:#0082FE;
 font-size: 35px;
}

.van-icon-notes-o{
 color:#0082FE;
 font-size: 35px;
}

.van-icon-bag-o{
 color:#FB5F00;
 font-size: 35px;
}

.van-icon-hotel-o{
 color:#4BCF3A;
 font-size: 35px;
}

.van-icon-manager{
 color:white;
 font-size: 50px;
}
.touxiang h6{
  font-size: 22px;
  color: white;
  margin-top: 10px;
}

.admin{
 position: relative;
  width: 100%;
  height: 180px;
  background: #0082FE;
}

.touxiang{
position: absolute;
margin: auto;
width: 100px;
height: 100px;
left: 0;
right: 0;
top: 40px;
text-align: center;
}
.ban{
  margin-top: 0px;
}
.van-col--6 {
   
    text-align: center;
}
.van-col--6 h6{
  color: black;
}
</style>
