<script setup lang="ts">
import Image from 'primevue/image';
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center">
      <div>
        <p class="font-[Oswald_Sans] text-4xl font-extralight">ОБЕРІТЬ СВОЮ ІДЕАЛЬНУ ДІЛЯНКУ:</p>
        <p class="font-[Oswald_Sans] text-4xl font-extralight">ОСГ, будівництво, садівництво чи бізнес</p>
      </div>
      <div class="my-[40px]">
        <Image src="https://themes.getmotopress.com/aquentro/wp-content/uploads/sites/20/2018/07/divider_line_big.svg"
          alt="Image" />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 row-span-2">
        <Image
          src="https://png.pngtree.com/png-vector/20240406/ourlarge/pngtree-a-scenic-view-of-lush-mountain-fields-and-blue-sky-png-image_12100046.png"
          alt="Image" />
      </div>
      <div>
        <Image src="./src/images/one.jpg" alt="Image" />
      </div>
      <div>
        <Image src="./src/images/one.jpg" alt="Image" />
      </div>
      <div>
        <Image src="./src/images/one.jpg" alt="Image" />
      </div>
      <div>
        <Image src="./src/images/one.jpg" alt="Image" />
      </div>
      <div>
        <Image src="./src/images/one.jpg" alt="Image" />
      </div>
    </div>
  </div>




</template>
