<template>
  <div id="quiz-page">
    <h2>EDGU1003Quiz 3</h2>
    <div class="main">
      <h3>Q3 due to 13:30 16.4.2022</h3>
      <span class="btn">start</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'QuizPage',
}
</script>

<style lang="less" scoped>
#quiz-page{
  padding: 36px;
  h2{
    font-size: 32px;
    margin-bottom: 20px;
  }
  .main{
    width: 60%;
    margin: 100px 0 0 30px;
    padding: 20px;
    text-align: center;
    background: linear-gradient(#FFF, #E4C0D6, #FFF);
    h3{
      margin-bottom: 60px;
      font-size: 26px;
      text-align: left;
    }
    .btn{
      display: inline-block;
      background-color: red;
      padding: 6px 16px;
      font-weight: 600;
    }
  }
}
</style>