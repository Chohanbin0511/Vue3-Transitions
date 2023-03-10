<template>
	<FullPopUpLayout>
		<!-- <template #headerPanel> </template> -->
		<template #mainPanel>
			<Transition appear @before-enter="headerBeforeEnter" @enter="headerEnter">
				<h1>{{ headerTitle }}</h1>
			</Transition>
			<button class="addBtn" @click="addItem">Add Item</button>
			<TransitionGroup
				appear
				@before-enter="listBeforeEnter"
				@enter="onEnter"
				@after-enter="afterEnter"
				@leave="onLeave"
			>
				<div class="main-box" v-for="item in items" :key="item">
					<div class="main-box-title">title {{ item.id }}</div>
					<div class="main-box-content">content {{ item.text }}</div>
					<button class="addBtn" @click="removeItem(item)">Remove</button>
				</div>
			</TransitionGroup>
		</template>
		<!-- <template #bottomPanel></template> -->
	</FullPopUpLayout>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';
import FullPopUpLayout from '@/layouts/FullPopUpLayout.vue';

// 해더 영역
const headerTitle = ref('Gsap & Transition Sample');

const headerBeforeEnter = el => {
	el.style.opacity = '0';
	el.style.transform = 'translateY(-40px)';
};
const headerEnter = el => {
	gsap.to(el, {
		// 반복
		repeat: -1,
		// 몇초
		duration: 2,
		y: 0,
		opacity: 1,
	});
};

const items = ref([
	{ id: 1, text: 'Item 1' },
	{ id: 2, text: 'Item 2' },
	{ id: 3, text: 'Item 3' },
	{ id: 4, text: 'Item 4' },
]);

const addItem = () => {
	items.value.push({
		id: items.value.length + 1,
		text: 'Item ' + (items.value.length + 1),
	});
};

const removeItem = item => {
	const i = items.value.indexOf(item);
	if (i > -1) {
		items.value.splice(i, 1);
	}
};

const listBeforeEnter = el => {
	el.style.opacity = '0';
	el.style.transform = 'translateX(-40px)';
};

const onEnter = () => {
	gsap.to('.main-box', {
		repeat: -1,
		duration: 2,
		stagger: 0.2,
		opacity: 1,
		x: 0,
	});
};
const afterEnter = () => {
	console.log('after enter');
};

const onLeave = (el, done) => {
	gsap.to(el, {
		opacity: 0,
		height: 0,
		delay: el.dataset.index * 0.15,
		onComplete: done,
	});
};
</script>

<style scoped>
.addBtn {
	margin: 20px;
	width: 150px;
	height: 50px;
	font-size: 18px;
	font-weight: 600;
	background-color: white;
}
.main-box {
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	background-color: #eee;
	height: 160px;
	margin: 20px;
}
.main-box-title {
	font-size: 24px;
	font-weight: 600;
	margin: 10px;
}
.main-box-content {
	font-size: 18px;
	margin: 10px;
}
</style>
