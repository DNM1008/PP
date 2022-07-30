<script>
  import logo from "./assets/porsche-logo.png";
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faCartShopping,
    faUser,
    faSearch,
    
  } from "@fortawesome/free-solid-svg-icons";
  import{
    faFacebook,
    faInstagram,
    faYoutube,
    faTwitter,
faTwitterSquare,
  } from '@fortawesome/free-brands-svg-icons';

  import taycan from "./assets/Taycan.webp";
</script>

<div id="header" class="bg-slate-400">
  <div class="container mx-auto px-4 py-3 flex grid grid-cols-6">
    <div class="flex justify-center items-center">
      <a href="#/">
        <img src={logo} alt="" class="h-[40px]" />
      </a>
    </div>

    <div id="search-bar" class="col-span-4 bg-white rounded-lg flex p-1">
      <input
        type="text"
        name="search"
        placeholder="Search"
        class="w-full border-none"
      />

      <button
        type="submit"
        class="bg-slate-400 w-[60px] flex justify-center items-center rounded-lg hover:bg-slate-600 transition duration-300"
      >
        <Fa icon={faSearch} color="white" />
      </button>
    </div>

    <div class="flex justify-evenly items-center">
      <div class="relative">
        <a href="#/cart">
          <Fa icon={faCartShopping} size="2x" color="white" />
        </a>

        <div
          class="absolute right-0 w-[400px] border border-black bg-white hidden"
        >
          <div class="flex items-center gap-x-3 p-2">
            <img src={taycan} class="w-[80px]" alt="" />

            <a href="#/" class="grow">Taycan</a>

            <span>VND 5,000,000,000</span>
          </div>
          <div class="flex items-center gap-x-3 p-2">
            <img src={taycan} class="w-[80px]" alt="" />

            <a href="#/" class="grow">Taycan</a>

            <span>VND 5,000,000,000</span>
          </div>
        </div>
      </div>
      <a href="#/login">
        <Fa icon={faUser} size="2x" color="white" />
      </a>
    </div>
  </div>
</div>

<slot />

<div id="footer" class="bg-slate-400">
  <div class="container mx-auto px-4 py-3 flex grid xl:grid-cols-4 grid-cols-2">
    <div class="text-white">
      <div class="uppercase font-bold mb-3">Customer Service</div>

      <a
        href="https://www.porsche.com/australia/dialogue/contactandinformation/"
        >Contacts</a
      >
    </div>
    <div class="text-white">
      <div class="uppercase font-bold mb-3">About us</div>
      <div>
        <a href="https://www.porsche.com/australia/aboutporsche/overview/"
          >At a Glance</a
        >
      </div>
      <div>
        <a href="https://www.porsche.com/australia/aboutporsche/jobs/"
          >Jobs & Career</a
        >
      </div>
      <div>
        <a
          href="https://www.porsche.com/australia/aboutporsche/christophorusmagazine/"
          >Christophorus - The Porsche Magazine</a
        >
      </div>
    </div>
    <div class="text-white">
      <div class="uppercase font-bold mb-3">Online Services</div>
      <div>
        <a
          href="https://www.porsche.com/australia/accessoriesandservice/porschefinancialservices/"
          >Financial Services</a
        >
      </div>
      <div>
        <a
          href="https://www.porsche.com/australia/dialogue/newsletter/subscribe/"
          >Newsletter Sign up</a
        >
      </div>
    </div>
    <div class="text-white">
      <div class="uppercase font-bold mb-3">Social</div>
      <div class="flex gap-3">
        <a href="https://www.facebook.com/porsche/"><Fa icon={faFacebook} size="2x" color="white" /></a>
        <a href="https://www.instagram.com/porsche/"><Fa icon={faInstagram} size="2x" color="white" /></a>
        <a href="https://www.youtube.com/porsche/"><Fa icon={faYoutube} size="2x" color="white" /></a>
        <a href="https://www.twitter.com/porsche/"><Fa icon={faTwitterSquare} size="2x" color="white" /></a>
      </div>

      
    </div>
    <div class="col-span-2 xl:col-span-4 text-white mt-5">
      © 2022 Dr. Ing. h.c. F. Porsche AG. 
    </div>
  </div>
 
</div>
