<script lang="ts">
	import ProfilePic from "../assets/images/image-jeremy.png";
  import { Timeframe } from "../lib/data_loader";

	export let chosen_timeframe: Timeframe;

	let curr_active: HTMLElement;

	function handleClick(e: Event, timeframe: Timeframe) {
		if (curr_active) {
			curr_active.classList.remove('text-pale-blue');
		}
		const button = e.target as HTMLElement;
		button.classList.add('text-pale-blue');
		curr_active = button;
		chosen_timeframe = timeframe;
	}

</script>

<div class="w-[300px] md:row-span-2">
	<!-- Profile -->
	<div class="relative z-[1] md:h-[60%] bg-blue mx-auto flex md:flex-col justify-center items-center md:items-start gap-6 p-6 rounded-2xl">
		<!-- Image -->
		<div class="rounded-full border-2 border-white">
			<img src={ProfilePic} alt="profile-pic" class="w-[50px] h-[50px]">
		</div>
		<!-- Content -->
		<div>
			<p class="text-sm text-pale-blue">Report for</p>
			<h1 class="font-light text-xl text-white">Jeremy Robson</h1>
		</div>
	</div>
	<!-- Filter -->
	<div class="relative -top-3 md:h-[40%] md:top-0 bg-dark-blue pt-6 py-4 px-8 flex md:flex-col justify-between md:justify-evenly md:items-start rounded-b-2xl text-desaturated-blue">
		<button class="hover:text-pale-blue transition-colors" on:click={(e) => handleClick(e, Timeframe.DAILY)}>Daily</button>
		<button class="hover:text-pale-blue transition-colors text-pale-blue" on:click={(e) => handleClick(e, Timeframe.WEEKLY)} bind:this={curr_active}>Weekly</button>
		<button class="hover:text-pale-blue transition-colors" on:click={(e) => handleClick(e, Timeframe.MONTHLY)}>Monthly</button>
	</div>
</div>