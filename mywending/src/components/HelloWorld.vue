<template>
  <div class="hello">
    <video src="movie.ogg" controls="controls">
    您的浏览器不支持 video 标签。
    </video>
    <router-link :to='{path:"/welcome"}'> asdasds </router-link> 
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  name: 'HelloWorld',
  components:{
	XButton
  },
  props: {
    msg: String
  }
}
</script>

