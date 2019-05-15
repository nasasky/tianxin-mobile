<template>
  <div class="container">
    <van-card v-for="course in courses" :key="course.id" :thumb="course.publisherHeader">
      <div class="title" slot="title">
        <div class="pic">
          <img :src=" course.user_avatar">
        </div>

        <div></div>
        标题: {{course.title}}

         <div class="desc" slot="desc">
        时间： {{course.create_time}}
        <br>
        发布人： {{course.user_name}}
        <br>
      </div>
      </div>
     
    </van-card>

    <van-sku v-model="isShowCourse" :sku="course" :goods="courseTitle" close-on-click-overlay></van-sku>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courses: [],
      course: {},
      isShowCourse: false
    };
  },
  computed: {
    courseTitle() {
      return {
        title: this.course.courseName,
        picture: this.course.publisherHeader
      };
    }
  },
  mounted() {
    this.$http
      .getCourse({ status: "open" })
      .then(res => {
        console.log("获取课程列表返回", res);
        this.courses = res.data;
      })
      .catch(err => {
        this.$toast.fail("获取课程列表失败", err);
      });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0;
}
.pic {
  float: left;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-right: 10px;
}
.pic img {
  float: left;
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
</style>
