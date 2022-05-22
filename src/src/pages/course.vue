<template>
  <div id="course-page">
    <h2>All Courses<img src="../assets/j.png" /></h2>
    <ul class="top1">
      <li>EDGU1003 Diet and Nutrition for Health and Sport</li>
      <li>DECO2014 User Experience Design Studio</li>
      <li>DECO2017 Advanced Web Design</li>
    </ul>
    <div class="main flex">
      <div class="left">
        <h2>Today courses zoon link</h2>
        <div>
          <h4>EDGU1003</h4>
          <p>https://uni-sydney.zoom.us/j/81405574298?uname=Jason+Jiang#success</p>
        </div>
        <div>
          <h4>DECO2017</h4>
          <p>https://uni-sydney.zoom.us/j/81405574298?uname=Jason+Jiang#success</p>
        </div>
      </div>
      <div class="right">
        <h2>Course Materials</h2>
        <ul>
          <li>EDGU1003</li>
          <li>DECO2017</li>
          <li>DECO2014</li>
        </ul>
        <span class="btn">Download</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CoursePage',
}
</script>

<style lang="less" scoped>
#course-page{
  padding: 36px;
  h2{
    font-size: 32px;
    margin-bottom: 20px;
    img{
      width: 30px;
      padding-left: 10px;
    }
  }
  h3{
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 60px;
  }
  .top1{
    width: 50%;
    padding: 20px;
    background: linear-gradient(#FFF, #E4C0D6, #FFF);
    li{
      font-size: 16px;
      line-height: 40px;
    }
  }
  .main{
    margin-top: 100px;
    .left{
      h2{
        font-size: 20px;
      }
      h4{
        font-size: 18px;
        margin-bottom: 10px;
      }
      p{
        width: 80%;
        font-size: 14px;
      }
    }
    .right{
      h2{
        font-size: 20px;
      }
      li{
        line-height: 40px;
        font-size: 14px;
      }
      .btn{
        display: inline-block;
        margin-top: 40px;
        padding: 0 70px;
        height: 50px;
        line-height: 50px;
        background-color: #E82A2A;
        text-align: center;
        font-size: 16px;
      }
    }
  }
}
</style>