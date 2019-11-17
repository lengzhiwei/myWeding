<template>
  <div class="home">
    <div class="contrals">
      <img src="../assets/img/music.png" alt="contralsBtn" class="contralsBtn"/>
    </div>
    <audio id="music" loop  ref="audio">
      <source src="../assets/music/tianhou.mp3" type="audio/ogg" />
    </audio>
    <div>
      <router-view></router-view>
    </div>
    <div class="nav">
      <router-link :to="{ name: 'showPhoto' }">相册</router-link>
    </div>
  </div>
</template>

<script>
import audio1 from '../assets/music/tianhou.mp3';

export default {
  name: 'welcome',
  components: {},
  data() {
    return {
      audio_url: audio1,
    };
  },
  mounted() {
    setTimeout(() => {
      // this.playMusic();
    }, 1000);
  },
  methods: {
    playMusic() {
      // this.$refs.audio.play();
    },
  },
};
</script>
<style type="text/less" scoped lang="less">
.home {
  height: 100%;
  background: red;
  overflow-y: scroll;
  .contrals {
    position: fixed;
    top: 5%;
    right: 5%;
    .contralsBtn {
      width: 2rem;
      height: 2rem;
      animation: musicCircle 3s linear infinite;
    }
  }

  .bottomNav {
    height: 4rem;
    background: red;
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}
@keyframes musicCircle {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
