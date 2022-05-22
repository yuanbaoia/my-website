<template>
  <div id="task-page">
    <h3 class="title">Task List</h3>
    <div class="operate-box">
      <span class="btn-add">ADD A TASK</span>
    </div>
    <div class="task-list">
      <ul>
        <li v-for="(item, index) in list" :key="index" :class="{'task-item': true, 'success': item.status}" >
          <span class="item-title">{{ item.title }}</span>
          <span class="item-priority">{{ item.priority }}</span>
          <span class="item-time">{{ item.time }} hours</span>
          <span class="item-status">
            <input type="checkbox" name="" v-model="item.status">
          </span>
          <span class="item-delete" @click="handleDelete(index)">delete</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TaskPage',
  data(){
    return {
      list: [
        { title: 'task title description', priority: 'middle', time: 12, status: true },
        { title: 'task title description', priority: 'high', time: 8, status: false },
        { title: 'task title description', priority: 'middle', time: 12, status: true },
      ]
    }
  },
  methods: {
    handleDelete(index){
      this.$delete(this.list, index)
    }
  }
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
.operate-box{
  padding: 0 40px;
  .btn-add{
    background-color: #5e72e4;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
  }
}
.task-list{
  margin-top: 40px;
  padding: 0 40px;
  .task-item{
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    &.success{
      .item-title{
        opacity: .6;
        &::before{
          content: "";
          position: absolute;
          top: 50%;
          left: -0.5rem;
          display: block;
          width: 100%;
          height: 1px;
          background: #fff;
          animation: strikeitem-data-v-424bcae2 .3s ease-out 0s forwards;
        }
      }
      .item-time,
      .item-priority,
      .item-delete,
      .item-status{
        opacity: .6;
      }
    }
    .item-title{
      color: #7a797e;
      font-size: 16px;
      flex: 6;
      position: relative;
    }
    .item-time{
      flex: 2;
      color: #7a797e;
      font-size: 16px;
    }
    .item-priority{
      flex: 2;
      color: #32325d;
      font-size: 18px;
    }
    .item-status{
      flex: 1;
    }
    .item-delete{
      flex: 1;
      color: #2dce89;
    }
  }
}
</style>