<div>
  <h1 style="text-align: center; font-weight: bold; font-size: 20px;">Accomplishment</h1>
</div>

<script>
    import { Gallery } from 'flowbite-svelte';

    const images = [
      { alt: 'Team ', src: './images/2.jpg' },
      { alt: 'Presentation ', src: './images/3.jpg' },
      { alt: 'web dev', src: './images/4.jpg' },
      { alt: 'research writing', src: './images/5.jpg' }
    ];
</script>

<Gallery class="gap-2 grid-cols-2" items={images} />
