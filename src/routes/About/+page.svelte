<script>
  import { Card, Button, Toggle } from 'flowbite-svelte';
  let hCard = false;
</script>

<div class="flex flex-col items-center space-y-4">
  <Card img="./images/1.jpg" href="/" horizontal size="md" reverse={hCard}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Yuri Maverick Ibasco</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Hi, I'm Yuri, a third-year BS Computer Science student. I'm passionate about learning, especially through documentaries on history, different cultures, and exploring new places. I find jogging to be a great way to clear my mind and relieve stress. When I’m not studying, I love spending time with friends—we enjoy hitting the gym or playing online games together. It's all about balance for me!.</p>
  </Card>
  <Toggle bind:checked={hCard} class="italic dark:text-gray-500">Reverse</Toggle>
</div>
