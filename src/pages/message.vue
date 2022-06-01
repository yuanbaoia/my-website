<template>
  <div id="message-page">
    <h2 class="flex">
      <img class="first" src="../assets/message.png" />
      <span>All Courses<img src="../assets/j.png" /></span>
      <span>Unread<img src="../assets/j.png" /></span>
    </h2>
    <ul class="list-group">
      <li class="list-group-item">
        <p class="title">Monday</p>
        <p>Studio time this week....</p>
        <p class="btn">OPEN</p>
      </li>
      <li class="list-group-item">
        <p class="title">Mar 1 2022</p>
        <p>Completion upload error...</p>
        <p class="btn">OPEN</p>
      </li>
      <li class="list-group-item">
        <p class="title">Feb 25 2022</p>
        <p>Welcome to the....</p>
        <p class="btn">OPEN</p>
      </li>
      <li class="list-group-item">
        <p class="title">Feb 21 2022</p>
        <p>Consent Matters - Mandatory Module...</p>
        <p class="btn">OPEN</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'MessagePage',
}
</script>

<style lang="less" scoped>
#message-page{
  padding: 20px;
  h2{
    font-size: 32px;
    margin-bottom: 20px;
    .first{
      width: 160px;
      padding-right: 20px;
    }
    span{
      padding-top: 10px;
      padding-right: 60px;
      img{
        width: 30px;
        padding-left: 10px;
      }
    }
  }
  .list-group{
    margin-top: 60px;
    .list-group-item{
      width: 60%;
      color: #333;
      position: relative;
      display: block;
      padding: 10px 15px;
      margin-bottom: -2px;
      background-color: #fff;
      border: 2px solid #333;
      .title{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .btn{
        text-align: right;
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
}
@media (max-width: 768px) {
  #message-page{
    padding: 10px;
    h2{
      font-size: 14px;
      margin-bottom: 20px;
      .first{
        width: 60px;
        height: auto;
        padding-right: 20px;
      }
      span{
        display: flex;
        padding-top: 10px;
        padding-right: 20px;
        img{
          width: 20px;
          height: 18px;
          padding-left: 8px;
        }
      }
    }
    .list-group{
      margin-top: 60px;
      .list-group-item{
        width: calc(100vw - 60px);
        box-sizing: border-box;
        .title{
          font-size: 14px;
        }
        .btn{
          font-size: 20px;
        }
      }
    }
  }
}
</style>