<template>
	<div>
		<colorPicker v-model='color' @change='changcolor'></colorPicker>
		<!-- <button @change="changcolor">更多颜色1</button> -->
		<slot></slot>
	</div>
	
</template>

<script>
export default {
	name:'colorEdit',
	data() {
		return {
			color: '#000000'		}
	},
	methods: {
		changcolor(val) {
			console.log(val);
		}
	},
}
</script>

<style>
</style>
