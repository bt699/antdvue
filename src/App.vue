<template>
  <div id="app">
	<ConfigProvider :style="{fontSize:fontSize+'px'+' !important',fontSizeBase:fontSize+'px'}">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<!-- <colorPicker v-molde='color' @change="headleChangeColor" >更多颜色</colorPicker> -->
	<tableEdit ></tableEdit>
	<colorEdit ></colorEdit><p>更多</p>
	</ConfigProvider>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import tableEdit from './components/tableEdit.vue'
import colorEdit from './components/colorEdit.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
	tableEdit,
	colorEdit
	
	
  },
  data() {
  	return {
  		color: '#ff0000',
		fontSize:25
  	}
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
