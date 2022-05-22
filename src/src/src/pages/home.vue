<template>
  <div id="home-page">
    <h3 class="title">Current News</h3>
    <div class="news-box flex">
      <div class="news-item">
        <img src="../assets/new_one.jpeg" alt="">
        <h2 class="news-title">Ten shot dead in suspected race attack at US store</h2>
      </div>
      <div class="news-item">
        <img src="../assets/new_two.jpeg" alt="">
        <h2 class="news-title">Where have Ukraine's millions of refugees gone?</h2>
      </div>
      <div class="news-item">
        <img src="../assets/new_one.jpeg" alt="">
        <h2 class="news-title">Ten shot dead in suspected race attack at US store</h2>
      </div>
    </div>
    <div class="tips-box flex">
      <div class="tips-item">
        <h3 class="bars">Uncomming Lessons</h3>
        <ul class="list-group">
          <li class="list-group-item">DECE2017 ---FRI:Apr15 11:00AM</li>
          <li class="list-group-item">DECE2014 ---FRI:Apr22 4:00pM</li>
        </ul>
      </div>
      <div class="tips-item">
        <h3 class="bars">Unfinished Tasks</h3>
        <ul class="list-group">
          <li class="list-group-item">DECE2017 ---A2 Apr 15 at 23：59</li>
          <li class="list-group-item">DECE2014 ---A2 Apr 22 at 23：59</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
}
</script>

<style lang="less" scoped>
.title{
  color: #272525;
  font-size: 40px;
  text-align: center;
  font-style: italic;
  margin-bottom: 50px;
  position: relative;
  &::before{
    content: "";
    background: #ff9f1c;
    position: absolute;
    width: 110px;
    height: 2px;
    left: 50%;
    margin-left: -55px;
    bottom: -25%;
  }
}
.news-box{
  justify-content: space-between;
  margin-bottom: 60px;
  .news-title{
    font-size: 16px;
    color: #222;
  }
  .news-item{
    flex: 1;
    padding: 0 10px;
    box-sizing: border-box;
    img{
      width: 100%;
    }
  }
}
.tips-box{
  justify-content: space-between;
  .tips-item{
    flex: 1;
    padding-right: 30px;
    box-sizing: border-box;
    h3{
      margin-bottom: 1em;
      color: #ff9f1c;
      font-weight: 600;
      font-size: 30px;
      letter-spacing: 2px;
    }
    .list-group-item{
      color: #333;
      position: relative;
      display: block;
      padding: 10px 15px;
      margin-bottom: -1px;
      background-color: #fff;
      border: 1px solid #ddd;
    }
  }
}
</style>