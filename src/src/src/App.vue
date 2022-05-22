<template>
  <div id="app">
    <div class="nav-box">
      <ul>
        <li :class="{ active: $route.path === '/home'}">
          <router-link to='home'>Home</router-link>
        </li>
        <li :class="{ active: $route.path === '/dashboard'}">
          <router-link to='dashboard'>Dashboard</router-link>
        </li>
        <li :class="{ active: $route.path === '/team'}">
          <router-link to='team'>Team</router-link>
        </li>
        <li :class="{ active: $route.path === '/message'}">
          <router-link to='message'>Message</router-link>
        </li>
        <li :class="{ active: $route.path === '/course'}">
          <router-link to='course'>Course</router-link>
        </li>
        <li :class="{ active: $route.path === '/history'}">
          <router-link to='history'>History</router-link>
        </li>
        <li :class="{ active: $route.path === '/library'}">
          <router-link to='library'>Library</router-link>
        </li>
        <li :class="{ active: $route.path === '/quiz'}">
          <router-link to='quiz'>Quiz</router-link>
        </li>
        <li :class="{ active: $route.path === '/task'}">
          <router-link to='task'>Task List</router-link>
        </li>
      </ul>
    </div>
    <div class="page-box">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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
.nav-box{
  width: 200px;
  padding-top: 60px;
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
