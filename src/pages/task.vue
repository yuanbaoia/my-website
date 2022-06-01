<template>
  <div id="task-page">
    <h3 class="title">Task List</h3>
    <div class="operate-box">
      <span class="btn-add" @click="add">ADD A TASK</span>
    </div>
    <div class="task-list" @dragover="dragover($event)">
      <ul>
        <transition-group class="transition-wrapper" name="sort">
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="{'task-item': true, 'success': item.status}"
            :draggable="true"
            @dragstart="dragstart(item)"
            @dragenter="dragenter(item,$event)"
            @dragend="dragend(item,$event)"
            @dragover="dragover($event)"
          >
            <span class="item-title">{{ item.title }}</span>
            <span class="item-priority">{{ item.priority }}</span>
            <span class="item-time">{{ item.time }} hours</span>
            <span class="item-status">
              <input type="checkbox" name="" v-model="item.status">
            </span>
            <span class="item-delete" @click="handleDelete(index)">delete</span>
          </li>
        </transition-group>
      </ul>
    </div>
    <Modal ref="modal" @success="handleSuccess" />
  </div>
</template>

<script>
import Modal from '../components/modal.vue'
export default {
  name: 'TaskPage',
  components: { Modal },
  data(){
    return {
      oldData: null,
      newData: null,
      list: [
        { title: 'task title description1', priority: 'middle', time: 12, status: true },
        { title: 'task title description2', priority: 'high', time: 8, status: false },
        { title: 'task title description3', priority: 'middle', time: 12, status: true },
      ]
    }
  },
  methods: {
    handleDelete(index){
      this.$delete(this.list, index)
    },
    add(){
      this.$refs.modal.show()
    },
    handleSuccess({ title, level, time }){
      this.list.push({
        title,
        time,
        priority: level,
        status: false
      })
    },
    dragstart(value) {
      this.oldData = value
    },
 
    dragenter(value, e) {
      this.newData = value
      e.preventDefault()
    },
 
    dragend() {
      if (this.oldData !== this.newData) {
        let oldIndex = this.list.indexOf(this.oldData)
        let newIndex = this.list.indexOf(this.newData)
        let newItems = [...this.list]
        // 删除老的节点
        newItems.splice(oldIndex, 1)
        // 在列表中目标位置增加新的节点
        newItems.splice(newIndex, 0, this.oldData)
        this.list = [...newItems]
      }
    },
 
    dragover(e) {
      e.preventDefault()
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
@media (max-width: 768px) {
  #task-page{
    padding: 0;
    h3{
      font-size: 20px;
    }
    .operate-box{
      padding: 0px;
      .btn-add{
        font-size: 14px;
      }
    }
    .task-list{
      padding: 10px;
      background-color: #fff;
      li{
        flex-wrap: wrap;
        border-bottom: 1px solid #ccc;
        .item-title{
          width: 100%;
          flex: auto;
          margin-bottom: 8px;
          display: inline-block;
        }
      }
    }
  }
}
</style>