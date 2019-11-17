<template>
  <div class="welcome">
      <div :class="{'openTopAnimation':topClass}" class="top">
        <div class="words">
          结发为夫妻，恩爱两不疑。
        </div>
        <img src="../assets/img/plane.png" alt="plane" class="plane">
        <img src="../assets/img/cloud.png" alt="cloud" class="cloud">
        <img src="../assets/img/cloud.png" alt="cloud" class="cloud cloudLast">
      </div>
    <div :class="{'openBottomAnimation':bottomClass}" class="bottom">
      <div class="content">
        <img src="../assets/img/heart.png" alt="heart" class="heart">
      </div>
      <div class="clickBtn">
        <span @click="goHome">点我</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  components: {},
  data() {
    return {
      bottomClass: false,
      topClass: false,
    };
  },
  methods: {
    goHome() {
      this.bottomClass = true
      this.topClass = true
      this.$emit('closeWelcome',true)
      // setTimeout(()=>{
      //   this.$router.push({ path: '/index' });
      // },1500)
    },
  },
};
</script>
<style type="text/less" scoped lang="less">
.welcome{
  height: 100%;
  z-index: 999;
  .openTopAnimation{
    animation: openTopDoor 2s 0.3s 1 linear ;
  }
    .top{
      transform: translate3d(0,0,0);
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      height: 50%;
      width: 100%;
      background:#FFB6C1 ;
      position: relative;
      .words{
        position: absolute;
        margin:  0 auto;
        bottom: 50%;
        font-size: 1.8rem;
        color: #ffffff;
        font-family: "Microsoft JhengHei UI";
        line-height: 4rem;
        transform: translateX(-40%);
        left: 50%;
      }
      .plane{
        position: absolute;
        top: 53%;
        width: 3rem;
        animation: planeFly 5s infinite linear ;
      }
      .cloud{
        width: 8rem;
        position: absolute;
      }
      .cloud{
        animation: cloudMove 10s infinite ease-in-out ;
      }
      .cloudLast:last-child{
        left: -40%;
        animation: cloudMove 10s 5s infinite linear ;
      }
    }
  .openBottomAnimation{
    animation: openBottomDoor 2s 0.3s 1 linear ;
  }
  .bottom{
    background: rgba(0,0,0,0.05);
    position: relative;
    font-family: yiqi;
    font-size: 2.8rem;
    height: 50%;
    padding-top: 30%;
    box-sizing: border-box;
    text-align: center;
    .content{
      /*margin-top: 40%;*/
      /*background: red;*/
      height:3rem;
      width:100%;
      box-sizing: border-box;
      /*padding-top: 2rem;*/
      .heart{
        animation: heartbeat 1s linear infinite;
      }
    }

    span{
      position: relative;
      top: 50%; /*偏移*/
      transform: translateY(-50%);
    }
  }
}
@keyframes planeFly {
  0%{
    left: 3%;
  }
  100%{
    left: 100%;
  }
}
@keyframes openTopDoor {
  0%{
    bottom: 0%;
  }
  100%{
    bottom: 100%;
  }
}
@keyframes openBottomDoor {
  0%{
    top: 0%;
  }
  100%{
    top: 100%;
  }
}
@keyframes heartbeat {
  0%{
    width: 2rem;
    height: 2rem;
  }
  50%{
    width: 2.7rem;
    height: 2.7rem;
  }
  100%{
    width: 2rem;
    height: 2rem;
  }
}
  @keyframes cloudMove {
    0%{
      left: -20%;
      bottom: 5%;
    }
    30%{
      bottom: 12%;
    }
    60%{
      bottom: 3%;
    }
    100%{
      left: 100%;
      bottom: 9%;
    }
  }
</style>
