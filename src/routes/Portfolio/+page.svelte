<div>
    <h1 style="text-align: center; font-weight: bold;">Accomplishment</h1>
</div>

<script>
    import { Gallery } from 'flowbite-svelte';

    const images = [
      { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
      { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
      { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
      { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' }
    ];
</script>

<Gallery class="gap-2 grid-cols-2" items={images} />
