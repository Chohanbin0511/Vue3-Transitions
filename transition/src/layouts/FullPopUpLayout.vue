<template>
	<!-- <RouterView></RouterView> -->
	<div class="full-popup-header">
		<span> header </span>
		<slot name="headerPanel"></slot>
	</div>

	<div class="full-popup-main">
		<slot name="mainPanel"></slot>
	</div>
	<!-- <div class="full-popup-bottom">
		<span> bottom </span>
		<slot name="bottomPanel"></slot>
	</div> -->
</template>

<script setup></script>

<style scoped>
.full-popup-header {
	background-color: #333;
	color: #fff;
	font-size: 1.5rem;
	padding: 1rem;
}

.full-popup-main {
	background-color: #fff;
	/* height: v-bind('mainHeightPx'); */
	height: 100%;
}

.full-popup-bottom {
	background-color: #333;
	color: #fff;
	font-size: 1rem;
	padding: 1rem;
	text-align: center;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
}
</style>
