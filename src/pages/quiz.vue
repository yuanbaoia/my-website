<template>
  <div id="quiz-page">
    <h2>Timer</h2>
    <div class="main">
      <h3>{{ minute | numberFilter }} : {{ second | numberFilter }}</h3>
      <div>
        <span class="btn" v-if="status === 1 || status === 3">
          <img src="../assets/start.png" @click="start(2)"/>
        </span>
        <span class="btn" v-if="status === 2">
          <img src="../assets/pending.png" @click="stop"/>
        </span>
        <span class="btn" v-if="status !== 1">
          <img src="../assets/reset.png" @click="reset"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'QuizPage',
  data(){
    return {
      status: 1,
      minute: 0,
      second: 0,
      timer: null
    }
  },
  filters: {
    numberFilter(num){
      if(num < 10){
        return '0' + num
      }
      return num
    }
  },
  destoryed(){
    if(this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  },
  methods: {
    start(){
      this.status = 2;
      this.timer = setInterval(() => {
        if (this.second === 0 && this.minute === 0) {
          this.second = 1
        } else if(this.second < 59){
          this.second += 1
        } else {
          this.second = 0;
          this.minute += 1;
        }
      }, 1000)
    },
    stop(){
      this.status = 3
      clearInterval(this.timer)
    },
    reset(){
      this.status = 1
      this.minute = 0
      this.second = 0
      if(this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    }
  }
}
</script>

<style lang="less" scoped>
#quiz-page{
  padding: 36px;
  h2{
    font-size: 60px;
    margin-bottom: 20px;
  }
  .main{
    width: 100%;
    margin-top: 100px;
    padding: 20px;
    text-align: center;
    h3{
      margin-bottom: 60px;
      font-size: 60px;
      text-align: center;
    }
    .btn{
      padding: 20px;
      img{
        width: 80px;
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 768px) {
  #quiz-page{
    padding: 10px;
    h2{
      font-size: 40px;
      text-align: center;
    }
    .main{
      width: calc(100vw - 60px);
      margin: 140px 0 30px 0;
      box-sizing: border-box;
      h3{
        margin-bottom: 40px;
        font-size: 50px;
        text-align: center;
      }
      .btn{
        padding: 20px;
        img{
          width: 60px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>