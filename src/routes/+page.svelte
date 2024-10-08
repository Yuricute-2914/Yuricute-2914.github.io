<script>
  import 'svelte/internal/disclose-version';
  import { Card, Button } from 'flowbite-svelte';
  </script>


<div class="relative flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-10">
    <!-- Text Section -->
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-4 md:gap-6 lg:gap-10">
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-black">Yuri cute</span> Maverck Ibasco
        <br />BSCS 
        <span class="poppins text-black">Student</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-black">favorite tech</span> Python
      </p>
    </div>
  
    <!-- Profile Image Section -->
    <div class="profile-circle bg-white">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="./images/1.jpg"
        alt="Profile Picture"
        class="rounded-full w-72 h-72 object-cover"
      />
      <div class="overlay"></div>
    </div>
  </div>

