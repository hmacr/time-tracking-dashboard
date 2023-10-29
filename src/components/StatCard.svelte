<script lang="ts">

	<!-- import IconEllipsis from "../assets/images/icon-ellipsis.svg";

	export let title: string;
	export let curr: string;
	export let prev: string;
	export let icon: string;
	export let img_bg_color: string;

</script>

<div class="w-[300px]">
	<!-- Image -->
	<div class="relative w-full h-[60px] {img_bg_color} flex justify-end rounded-t-2xl overflow-hidden">
		<img src={icon} alt="icon-{title}" class="-mt-2 mr-3 h-[70px]">
	</div>
	<!-- Content -->
	<div class="relative -top-5 w-full md:h-[80%] flex flex-col gap-2 bg-dark-blue rounded-2xl text-white p-6 hover:bg-desaturated-blue hover:cursor-pointer transition-colors">
		<!-- Heading -->
		<div class="flex justify-between items-baseline">
			<h4 class="font-medium capitalize text-lg">{title}</h4>
			<img src={IconEllipsis} alt="ellipsis" class="w-4">
		</div>
		<!-- Stats -->
		<div class="flex md:flex-col justify-between items-center md:items-start md:gap-2 md:mt-2">
			<p class="font-thin text-xl md:text-3xl tracking-wide">{curr}</p>
			<p class="font-light text-sm text-pale-blue">{prev}</p>
		</div>
	</div>
</div>
