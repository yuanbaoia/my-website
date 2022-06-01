<template>
  <div class="mini-main">
    <span class="btn-close" @click="handleClose">X</span>
    <div class="name">{{ title }}</div>
    <audio-player
      ref="audioPlayer"
      :audio-list="audioList.map((elm) => elm.url)"
      :before-play="handleBeforePlay"
    />
  </div>
</template>

<script>
import AudioPlayer from '@liripeng/vue-audio-player'

export default {
  name: 'MiniPage',
  components: { AudioPlayer },
  data(){
    return {
      title: '',
      audioList: [
        {
          name: "I Wanna Know What Love Is",
          url: "https://www.ytmp3.cn/down/77265.mp3",
        },
        {
          name: "Fade",
          url: "https://www.ytmp3.cn/down/76923.mp3",
        },
      ],
    }
  },
  mounted(){
    this.title = this.audioList[0].name;
    // this.$refs.audioPlayer.play();
  },
  methods: {
    handleBeforePlay(next) {
      this.title = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name;

      next(); // Start play
    },
    handleClose(){
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
.mini-main{
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
  height: 160px;
  padding: 0 20px;
  background-color: bisque;
  border-radius: 4px;
  .btn-close{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
  .name{
    text-align: center;
    margin-top: 30px;
  }
}
</style>
