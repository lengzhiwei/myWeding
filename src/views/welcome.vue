<template>
  <div class="welcome">
      <div class="top">
        <img src="../assets/img/cloud.png" alt="cloud" class="cloud">
        <img src="../assets/img/cloud.png" alt="cloud" class="cloud">
      </div>
    <div class="bottom">
      <div class="content">
        <img src="../assets/img/heart.png" alt="heart" class="heart">
      </div>
      <div class="clickBtn">
        <span>点我</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  components: {},
};
</script>
<style type="text/less" scoped lang="less">
.welcome{
  height: 100%;
    .top{
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      height: 50%;
      width: 100%;
      background:#FFB6C1 ;
      position: relative;
      .cloud{
        width: 120px;
        position: absolute;
      }
      .cloud:first-child{
        animation: cloudMove 10s infinite linear ;
      }
      .cloud:last-child{
        animation: cloudMove 10s 5s infinite linear ;
      }
    }
  .bottom{
    font-family: yiqi;
    font-size: 40px;
    height: 50%;
    text-align: center;
    .content{
      margin-top: 40%;
      /*background: red;*/
      height:100px;
      width:100%;
      box-sizing: border-box;
      padding-top: 30px;

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
@keyframes heartbeat {
  0%{
    width: 30px;
    height: 30px;
  }
  50%{
    width: 40px;
    height: 40px;
  }
  100%{
    width: 30px;
    height: 30px;
  }
}
  @keyframes cloudMove {
    0%{
      left: -10%;
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
