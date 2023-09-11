<script lang="ts">
	
  import ProfileCard from "./components/ProfileCard.svelte";
  import Card from "./components/StatCard.svelte";

	import loadData, {Data, Timeframe} from "./lib/data_loader";

	import { get_current_stat, get_previous_stat, get_img_bg_color, get_icon } from "./lib/utils";

	let all_data: Array<Data> = loadData();

	let chosen_timeframe: Timeframe = Timeframe.WEEKLY;

</script>

<!-- Container -->
<div class="max-w-screen-xl min-h-screen mx-auto flex justify-center items-center font-rubik p-8">
	<!-- Content -->
	<div class="grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-rows-2 md:gap-4">
		<ProfileCard bind:chosen_timeframe={chosen_timeframe} />
		{#each all_data as curr}
			<Card 
				title={curr.title} 
				curr={get_current_stat(curr, chosen_timeframe)} 
				prev={get_previous_stat(curr, chosen_timeframe)} 
				icon={get_icon(curr.title)} 
				img_bg_color={get_img_bg_color(curr.title)} 
			/>
		{/each}
	</div>
</div>