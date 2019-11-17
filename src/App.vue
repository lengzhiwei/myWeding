<template>
  <div id="app">
    <welCome @closeWelcome="close" v-if="showWelcome"></welCome>
    <div class="home">
      <div class="contrals" v-if="!showWelcome" @click="contralMusic">
        <img src="./assets/img/music.png" alt="contralsBtn" class="contralsBtn"/>
      </div>
      <audio id="music" loop  ref="audio" autoplay v-if="!showPhoto">
        <source src="./assets/music/tianhou.mp3" type="audio/ogg" />
      </audio>
      <!--<div>-->
        <!--<router-view></router-view>-->
      <!--</div>-->
      <router-view></router-view>
      <div class="bottomNav"  v-if="!showWelcome">
        <router-link :to="{ }">相册</router-link>
      </div>
    </div>

  </div>
</template>
<script>
import audio1 from './assets/music/tianhou.mp3';
import welCome from './views/welcome'
export default {
  name: 'app',
  components:{
    welCome
  },
  data(){
    return{
      showPhoto:false,
      isPlay:true,
      showWelcome:true,
      audio_url: audio1,
    }
  },
  mounted() {
    setTimeout(() => {
      this.playMusic();
    }, 2000);
  },
  methods: {
    contralMusic(){
      if (this.isPlay){
        this.$refs.audio.pause();
      } else {
        this.playMusic()
      }
    },
    playMusic() {
      this.$refs.audio.play();
    },
    close() {
      setTimeout(()=>{
        this.showWelcome = false
      },1500)
    },
  },
};
</script>
<style lang="less">
  html{
    font-size: 16px;
  }
  html,body{
    height: 100%;
    width: 100%;
  }
  @import "assets/baseStyle";
#app {
  height: 100%;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .home{
    height: 100%;
    background: rebeccapurple;
    .contrals {
      position: fixed;
      top: 5%;
      right: 5%;
      z-index: 990;
      .contralsBtn {
        width: 2rem;
        height: 2rem;
        animation: musicCircle 3s linear infinite;
      }
    }
  }

  .bottomNav {
    height: 4rem;
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
