<template>
  <div id="library-page">
    <h2>All Courses<img src="../assets/j.png" /></h2>
    <ul class="top1">
      <li>DECO2017 Advanced Web Design</li>
      <li>DECO2014 User Experience Design Studio</li>
      <li>EDGU1003 Diet and Nutrition for Health and Sport</li>
    </ul>
    <h3>Recommended reading</h3>
    <ul class="top2">
      <li>HTML and CSS: Design and Build Websites</li>
      <li>JavaScript: Master the World's Most-Used Programming Language</li>
      <li>Learning Node.js Development Learn the fundamentals of Node.js, and deploy and test Node.js applications on the web</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'LibraryPage',
}
</script>

<style lang="less" scoped>
#library-page{
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
    li{
      font-size: 26px;
      line-height: 50px;
    }
  }
  .top2{
    li{
      width: 70%;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 20px;
    }
  }
}
</style>