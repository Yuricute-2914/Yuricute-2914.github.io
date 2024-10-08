<script>

  import { Timeline, TimelineItem } from "flowbite-svelte";

</script>
<div class="flex justify-center">
    <Timeline order="vertical">
      <!-- svelte-ignore missing-declaration -->
      <TimelineItem title="Email">
        <svelte:fragment slot="icon">
          <span class="flex justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
            
          </span>
        </svelte:fragment>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">ibascoyurimaverick@gmail.com</p>
      </TimelineItem>
      <!-- svelte-ignore missing-declaration -->
      <TimelineItem title="Number">
        <svelte:fragment slot="icon">
          <span class="flex justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
            
          </span>
        </svelte:fragment>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">0931-855-6714</p>
      </TimelineItem>
      <!-- svelte-ignore missing-declaration -->
      <TimelineItem title="Address">
        <svelte:fragment slot="icon">
          <span class="flex justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
            
          </span>
        </svelte:fragment>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">#15 12st East Tapinac Olongapo City Zambales.</p>
      </TimelineItem>
    </Timeline>
  </div>
  