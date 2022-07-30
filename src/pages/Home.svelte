<script>
  import slide911 from "../assets/slider/911.webp";
  import slideCayenne from "../assets/slider/Cayenne.webp";
  import slideParamera from "../assets/slider/Paramera.webp";
  import slideTaycan from "../assets/slider/Taycan.webp";
  import model718 from "../assets/718.webp";
  import model911 from "../assets/911.webp";
  import modelTaycan from "../assets/Taycan.webp";
  import modelParamera from "../assets/Paramera.webp";
  import modelMacan from "../assets/Macan.webp";
  import modelCayenne from "../assets/Cayenne.webp";
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faArrowUpRightFromSquare,
    faChevronRight,
    faChevronLeft,
  } from "@fortawesome/free-solid-svg-icons";

  let slideIndex = 0;
  let slideright = true;

  const increaseIndex = () => {
    slideIndex = slideIndex >= 3 ? 0 : slideIndex + 1;
  };

  const decreaseIndex = () => {
    slideIndex = slideIndex <= 0 ? 3 : slideIndex - 1;
  };
</script>

<div class="mb-10 relative overflow-hidden">
  <button class="absolute h-full top-0 left-5 z-[999]" on:click={decreaseIndex}>
    <Fa icon={faChevronLeft} color="white" size="3x" />
  </button>

  <div
    class="flex w-full duration-[1500ms] transition-transform relative"
    style={`transform: translateX(calc(-${slideIndex} * 100%));`}
  >
    <img src={slide911} class="w-full h-full min-w-full" alt="" />

    <img src={slideCayenne} class="w-full h-full min-w-full" alt="" />

    <img src={slideParamera} class="w-full h-full min-w-full" alt="" />

    <img src={slideTaycan} class="w-full h-full min-w-full" alt="" />

   
  </div>

  <button
    class="absolute h-full top-0 right-5 z-[999]"
    on:click={increaseIndex}
  >
    <Fa icon={faChevronRight} color="white" size="3x" /></button
  >
</div>
<div class="container mx-auto px-3 mb-10">
  <h1 class="text-4xl font-bold ">Models</h1>
</div>
<div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
  <div class="relative">
    <img src={model718} alt="" class="w-full h-full" />
    <div class="absolute left-3 bottom-3 flex gap-3">
      <a
        href="#/listing"
        class="bg-white p-2 block hover:bg-red-700 hover:text-white transition duration-300 hover:ease-linear"
        ><Fa class="inline-block mr-2" icon={faArrowUpRightFromSquare} />Build
        your own
      </a>
      <a
        href="#/listing"
        class="border text-white p-2 block hover:border-red-700 hover:text-red-700 transition duration-300 hover:ease-linear"
        ><Fa class="inline-block ml-2" icon={faChevronRight} /> All Model</a
      >
    </div>
    <div class="absolute top-3 left-3 bg-white p-2">
      <h2 class="text-3xl  font-bold">718</h2>
    </div>
  </div>
  <div class="relative">
    <img src={model911} alt="" class="w-full h-full" />
    <div class="absolute left-3 bottom-3 flex gap-3">
      <a
        href="#/listing"
        class="bg-white p-2 block hover:bg-red-700 hover:text-white transition duration-300 hover:ease-linear"
        ><Fa class="inline-block mr-2" icon={faArrowUpRightFromSquare} />Build
        your own
      </a>
      <a
        href="#/listing"
        class="border text-white p-2 block hover:border-red-700 hover:text-red-700 transition duration-300 hover:ease-linear"
        ><Fa class="inline-block ml-2" icon={faChevronRight} /> All Model</a
      >
    </div>
    <div class="absolute top-3 left-3 bg-white p-2">
      <h2 class="text-3xl  font-bold">911</h2>
    </div>
  </div>
  <div class="relative">
    <img src={modelCayenne} alt="" class="w-full h-full" />
    <div class="absolute left-3 bottom-3 flex gap-3">
      <a
        href="#/listing"
        class="bg-white p-2 block hover:bg-red-700 hover:text-white transition duration-300 hover:ease-linear"
        ><Fa class="inline-block mr-2" icon={faArrowUpRightFromSquare} />Build
        your own
      </a>
      <a
        href="#/listing"
        class="border text-white p-2 block hover:border-red-700 hover:text-red-700 transition duration-300 hover:ease-linear"
        ><Fa class="inline-block ml-2" icon={faChevronRight} /> All Model</a
      >
    </div>
    <div class="absolute top-3 left-3 bg-white p-2">
      <h2 class="text-3xl  font-bold">Cayenne</h2>
    </div>
  </div>
  <div class="relative">
    <img src={modelParamera} alt="" class="w-full h-full" />
    <div class="absolute left-3 bottom-3 flex gap-3">
      <a
        href="#/listing"
        class="bg-white p-2 block hover:bg-red-700 hover:text-white transition duration-300 hover:ease-linear"
        ><Fa class="inline-block mr-2" icon={faArrowUpRightFromSquare} />Build
        your own
      </a>
      <a
        href="#/listing"
        class="border text-white p-2 block hover:border-red-700 hover:text-red-700 transition duration-300 hover:ease-linear"
        ><Fa class="inline-block ml-2" icon={faChevronRight} /> All Model</a
      >
    </div>
    <div class="absolute top-3 left-3 bg-white p-2">
      <h2 class="text-3xl  font-bold">Paramera</h2>
    </div>
  </div>
  <div class="relative">
    <img src={modelMacan} alt="" class="w-full h-full" />
    <div class="absolute left-3 bottom-3 flex gap-3">
      <a
        href="#/listing"
        class="bg-white p-2 block hover:bg-red-700 hover:text-white transition duration-300 hover:ease-linear"
        ><Fa class="inline-block mr-2" icon={faArrowUpRightFromSquare} />Build
        your own
      </a>
      <a
        href="#/listing"
        class="border text-white p-2 block hover:border-red-700 hover:text-red-700 transition duration-300 hover:ease-linear"
        ><Fa class="inline-block ml-2" icon={faChevronRight} /> All Model</a
      >
    </div>
    <div class="absolute top-3 left-3 bg-white p-2">
      <h2 class="text-3xl  font-bold">Macan</h2>
    </div>
  </div>
  <div class="relative">
    <img src={modelTaycan} alt="" class="w-full h-full" />
    <div class="absolute left-3 bottom-3 flex gap-3">
      <a
        href="#/listing"
        class="bg-white p-2 block hover:bg-red-700 hover:text-white transition duration-300 hover:ease-linear"
        ><Fa class="inline-block mr-2" icon={faArrowUpRightFromSquare} />Build
        your own
      </a>
      <a
        href="#/listing"
        class="border text-white p-2 block hover:border-red-700 hover:text-red-700 transition duration-300 hover:ease-linear"
        ><Fa class="inline-block ml-2" icon={faChevronRight} /> All Model</a
      >
    </div>
    <div class="absolute top-3 left-3 bg-white p-2">
      <h2 class="text-3xl  font-bold">Taycan</h2>
    </div>
  </div>
</div>
