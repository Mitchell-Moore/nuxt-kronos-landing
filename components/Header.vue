<template>
  <header
    class="flex items-center justify-between py-7 mx-auto bg-white px-5 w-full absolute top-0 left-0"
  >
    <NuxtLink to="#">
      <div class="font-bold text-2xl text-black">Kronos</div>
    </NuxtLink>
    <ul class="hidden lg:flex flex-row justify-between space-x-14">
      <li
        class="group"
        :class="{ 'text-slate-500': activeLink !== link }"
        v-for="link in links"
        :key="link"
        @click="() => (activeLink = link)"
      >
        <NuxtLink
          to="#"
          class="font-medium group-hover:text-slate-900 transition-all duration-300"
          >{{ link }}</NuxtLink
        >
      </li>
    </ul>
    <div>
      <a href="#" class="text-slate-500 hover:text-slate-900 font-semibold"
        >Login</a
      >
      <a
        class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8"
        href="#"
      >
        <span>Get Started &nbsp;</span>
        <span aria-hidden="true" class="text-white sm:inline">→</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: ['Home', 'Team', 'About', 'Pricing', 'Contact'],
      activeLink: 'Home',
    };
  },
};
</script>

<style></style>
