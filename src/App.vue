<template>
  <div id="app">
	<ConfigProvider :style="{fontSize:fontSize+'px'+' !important',fontSizeBase:fontSize+'px'}">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<!-- <colorPicker v-molde='color' @change="headleChangeColor" >更多颜色</colorPicker> -->
	<tableEdit ></tableEdit>
	<colorEdit ></colorEdit><p>更多</p>
	</ConfigProvider>
	 <a-menu style="font-size: 25px;" v-model="current" mode="horizontal">
	      <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
	      <a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>
	      <a-sub-menu>
	        <span slot="title" class="submenu-title-wrapper"
	          ><a-icon type="setting" />Navigation Three - Submenu</span
	        >
	        <a-menu-item-group title="Item 1">
	          <a-menu-item  key="setting:1">
	            Option 1
	          </a-menu-item>
	          <a-menu-item key="setting:2">
	            Option 2
	          </a-menu-item>
	        </a-menu-item-group>
	        <a-menu-item-group title="Item 2">
	          <a-menu-item key="setting:3">
	            Option 3
	          </a-menu-item>
	          <a-menu-item key="setting:4">
	            Option 4
	          </a-menu-item>
	        </a-menu-item-group>
	      </a-sub-menu>
	      <a-menu-item key="alipay">
	        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
	          >Navigation Four - Link</a
	        >
	      </a-menu-item>
	    </a-menu>
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
		fontSize:25,
		current: ['mail'],
  	}
  },
}
</script>


<style lang="less">
@fontfam:'迷你简彩蝶';
@import "./common/font/font.less";
#app {
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: @fontfam;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
::v-deep .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title{
	font-size: 24px;
}
</style>
