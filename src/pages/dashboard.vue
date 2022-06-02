<template>
  <div id="dashboard-page">
    <h3 class="title">Dashboard</h3>
    <div class="today">
      <h3 class="today-title">Today</h3>
      <ul class="list-group">
        <li class="list-group-item">EDGU1003-RE-9am TUT 07</li>
        <li class="list-group-item">IBUS1001-RE-11am TUT 02</li>
      </ul>
      <h3 class="today-title" style="margin-top: 60px;">Today lesson summary</h3>
      <ul class="list-group">
        <li class="list-group-item">EDGU1003- W7-Summary</li>
        <li class="list-group-item">IBUS1001-W7-Summary</li>
      </ul>
    </div>
    <div class="calender" style="text-align: center;">
      <v-calendar locale="en-US" />
    </div>
    <!--  -->
  </div>
</template>

<script>
// import VCalendar from 'v-calendar';
export default {
  name: 'DashboardPage',
}
</script>

<style lang="less" scoped>
#dashboard-page{
  position: relative;
}
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
.today-title{
  font-size: 20px;
  margin-bottom: 30px;
}
.list-group-item{
  width: 40%;
  background-color: #ED4CAE;
  border-radius: 20px;
  color: #fff;
  padding: 10px 30px;
  margin-bottom: 20px;
}
.calender{
  position: absolute;
  top: 130px;
  right: 40px;
}
@media (max-width: 768px) {
  .title{
    font-size: 20px;
  }
  .list-group-item{
    width: 80%;
  }
  .calender{
    position: relative;
    top: 0px;
    right: 0px;
  }
}
</style>