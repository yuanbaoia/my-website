<template>
  <div class="modal-mask" v-if="visible">
    <div class="modal-box">
      <div class="modal-header">
        <h2>ADD A TASK</h2>
        <span @click="close">X</span>
      </div>
      <div class="modal-body">
        <div class="form-item">
          <label>Title:</label>
          <input v-model="title" type="text" placeholder="Please input title" />
        </div>
        <div class="form-item">
          <label>Level:</label>
          <select v-model="level" placeholder="Please select level">
            <option value="low">Low</option>
            <option value="middle">Middle</option>
            <option value="high">High</option>
          </select>
        </div>
        <div class="form-item">
          <label>Time:</label>
          <input v-model="time" type="number" placeholder="Please input time" />
        </div>
      </div>
      <div class="modal-footer">
        <button @click="close">Cancel</button>
        <button class="primary" @click="hanleOk">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'ModalBox',
  data(){
    return {
      visible: false,
      title: '',
      level: 'middle',
      time: 1
    }
  },
  methods: {
    show(){
      this.visible = true
    },
    close(){
      this.visible = false
    },
    hanleOk(){
      const { title, level, time } = this
      if (title && level && time){
        this.$emit('success', {title, level, time})
        this.visible = false
      } else {
        window.alert('not validate')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.modal-mask{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: #00000073;
  .modal-box{
    box-sizing: border-box;
    color: #000000d9;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    pointer-events: none;
    position: relative;
    top: 100px;
    width: 500px;
    max-width: calc(100vw - 32px);
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
    z-index: 10000;
    pointer-events: auto;
    .modal-header{
      padding: 0 20px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      h2{
        font-size: 16px;
      }
      span{
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    .modal-body{
      padding: 20px 50px 20px 20px;
      border-bottom: 1px solid #ccc;
      .form-item{
        display: flex;
        line-height: 30px;
        height: 30px;
        margin-bottom: 12px;
        label{
          width: 80px;
          text-align: right;
          padding-right: 20px;
        }
        input,select{
          flex: 1;
        }
      }
    }
    .modal-footer{
      line-height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 10px 20px;
      button{
        width: 80px;
        padding: 3px 10px;
        cursor: pointer;
      }
      .primary{
        margin-left: 10px;
      }
    }
  }
}
@media (max-width: 768px) {
  .modal-body{
    padding: 20px !important;
    .form-item label{
      padding-right: 10px !important;
      width: 40px !important;
    }
  }
}
</style>