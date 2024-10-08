<script>
// @ts-nocheck

  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
  import "../app.css";
</script>
<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</svelte:head>
<main class="p-8 min-h-screen">
  
  <Navbar rounded color="form">
    <NavBrand href="/">
      <img src="./images/1.jpg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Yuri</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="About">About</NavLi>
      <NavLi href="Portfolio">Portfolio</NavLi>
      <NavLi href="Contact">Contact</NavLi>
    </NavUl>
  </Navbar>
    <slot></slot>
</main>