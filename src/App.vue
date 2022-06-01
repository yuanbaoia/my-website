<template>
  <div id="app">
    <div class="mobile-nav">
      <span class="logo">Home</span>
      <button type="button" class="navbar-toggle collapsed" @click="showNav(true)">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div :class="{ 'nav-box': true, 'active': toggle }">
      <span class="icon-close" @click="showNav(false)">X</span>
      <ul>
        <li :class="{ active: $route.path === '/home'}">
          <a @click="changeRoute('/home')">Home</a>
        </li>
        <li :class="{ active: $route.path === '/dashboard'}">
          <a @click="changeRoute('/dashboard')">Dashboard</a>
        </li>
        <li :class="{ active: $route.path === '/team'}">
          <a @click="changeRoute('/team')">Team</a>
        </li>
        <li :class="{ active: $route.path === '/message'}">
          <a @click="changeRoute('/message')">Message</a>
        </li>
        <li :class="{ active: $route.path === '/course'}">
          <a @click="changeRoute('/course')">Course</a>
        </li>
        <li :class="{ active: $route.path === '/history'}">
          <a @click="changeRoute('/history')">History</a>
        </li>
        <li :class="{ active: $route.path === '/library'}">
          <a @click="changeRoute('/library')">Library</a>
        </li>
        <li :class="{ active: $route.path === '/quiz'}">
          <a @click="changeRoute('/quiz')">Timer</a>
        </li>
        <li :class="{ active: $route.path === '/task'}">
          <a @click="changeRoute('/task')">Task List</a>
        </li>
      </ul>
    </div>
    <div class="page-box">
      <router-view />
    </div>
    <Mini v-show="miniVisible" @close="miniVisible = false" />
    <div v-show="!miniVisible" class="mini-btn" @click="showMini"></div>
  </div>
</template>

<script>
import Mini from './components/mini.vue'

export default {
  name: 'App',
  components: { Mini },
  data(){
    return {
      miniVisible: false,
      toggle: false
    }
  },
  methods: {
    showNav(bool){
      this.toggle = bool
    },
    showMini(){
      this.miniVisible = true
    },
    changeRoute(path){
      if (path !== this.$route.path) {
        this.$router.push(path)
        if(document.documentElement.clientWidth < 768){
          this.toggle = false
        }
      }
    }
  }
}
</script>

<style lang="less">
@import './reset.less';
#app{
  display: flex;
  justify-content: space-between;
  // min-height: 100vh;
  padding: 30px 50px;
  background-color: #AB397E;
}
.mini-btn{
  position: fixed;
  top: 30px;
  right: 0px;
  height: 30px;
  width: 30px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  background-color: #ff9f1c;
  cursor: pointer;
}
@media (max-width: 768px) {
  #app {
    display: block;
    padding: 10px;
    background: linear-gradient(rgb(174,67,132), rgb(229,229,229));
  }
  .mobile-nav {
    display: flex;
    justify-content: space-between;
    .logo{
      display: inline-block;
      height: 40px;
      line-height: 40px;
      width: 100px;
      text-align: center;
      background-color: #C4C1C1;
    }
    .navbar-toggle{
      line-height: 40px;
      padding: 8px 8px 4px;
      span{
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 1px;
        margin-bottom: 4px;
        background-color: #ff9f1c;
      }
    }
  }
  .nav-box{
    padding-top: 20px !important;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    height: 100vh;
    z-index: 1000;
    background: linear-gradient(rgb(229,229,229), rgb(174,67,132), rgb(229,229,229));;
    &.active{
      display: block;
    }
    .icon-close{
      display: block !important;
      text-align: right;
      padding: 20px;
    }
  }
  .page-box{
    height: auto !important;
    padding: 10px !important;
    min-height: calc(100vh - 60px);
    box-sizing: border-box;
    background-color: transparent !important;
  }
}
@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}
.nav-box{
  width: 200px;
  padding-top: 60px;
  .icon-close{
    display: none;
  }
  li{
    line-height: 48px;
    padding-left: 30px;
    a{
      color: #fff;
      display: block;
    }
    &.active{
      background-color: #fff;
      border-top-left-radius: 24px;
      border-bottom-left-radius: 24px;
      a{
        color: #AB397E;
      }
    }
  }
}
.page-box{
  flex: 1;
  padding: 30px;
  height: calc(100vh - 120px);
  background-color: #fff;
  border-radius: 30px;
}
</style>
