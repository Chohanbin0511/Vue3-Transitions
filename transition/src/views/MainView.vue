<template>
	<FullPopUpLayout>
		<template #mainPanel>
			<div class="button-list">
				<button
					v-for="button in btnList"
					:key="button.id"
					@click="button.onClick"
					class="btn"
				>
					{{ button.label }}
				</button>
			</div>
		</template>
	</FullPopUpLayout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FullPopUpLayout from '@/layouts/FullPopUpLayout.vue';

const router = useRouter();

const goClickPage = name => {
	router.push({
		name: name,
	});
};

const btnList = ref([
	{
		id: 1,
		label: 'GSAP List',
		onClick: () => goClickPage('TransitionsView'),
	},
	{
		id: 2,
		label: 'Scroll Page',
		onClick: () => goClickPage('ScrollPageView'),
	},
	{ id: 3, label: 'Button 3', onClick: () => console.log('Button 3 clicked!') },
]);
</script>

<style scoped>
.button-list {
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	background-color: #eee;
	height: 100px;
	margin: 20px;
}
.btn {
	background-color: white;
	margin: 20px;
	width: 150px;
	height: 50px;
	font-size: 18px;
	font-weight: 600;
}
</style>
