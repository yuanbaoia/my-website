<template>
  <div id="history-page">
    <h2>Browsing history</h2>
    <h3>Link List</h3>
    <ul>
      <li>www.sadhaisduhasi.com 13:56 14.4.2022</li>
      <li>www.edguacgtion.com 11:57 14.4.2022</li>
      <li>www.saudga.com  13.4.2022</li>
      <li>www.sydenyschool.com 12.4.2022</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HistoryPage',
}
</script>

<style lang="less" scoped>
#history-page{
  padding: 36px;
  h2{
    font-size: 32px;
    margin-bottom: 20px;
  }
  h3{
    font-size: 20px;
    margin-bottom: 20px;
  }
  li{
    font-size: 16px;
    line-height: 30px;
  }
}
@media (max-width: 768px) {
  #history-page{
    padding: 10px;
    h2{
      font-size: 24px;
      margin-bottom: 20px;
    }
    h3{
      font-size: 20px;
      margin-bottom: 20px;
    }
    li{
      font-size: 14px;
      line-height: 30px;
    }
  }
}
</style>