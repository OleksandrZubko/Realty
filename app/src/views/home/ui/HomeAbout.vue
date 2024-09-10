<script setup lang="ts">
import Image from 'primevue/image'
</script>

<template>
  <div class="container">
    <div class="flex flex-row items-center justify-center my-[100px]">
      <div class="w-[50%] mx-[40px]">
        <h2 class="text-4xl uppercase">Ділянка в Макарівському районі —</h2>
        <p class="text-3xl">місце, де ваші мрії стають реальністю.</p>
        <div class="my-[20px]">
          <img src="/icons/divider.svg" alt="Divider" />
        </div>
        <p class="text-lg my-[30px]">
          Обирайте серед земельних ділянок для ОСГ, забудови, садівництва та комерції. Це більше,
          ніж покупка землі — це інвестиція у ваше майбутнє.
        </p>
        <p class="text-lg">
          Уявіть будинок вашої мрії, прибутковий бізнес чи власний зелений сад. Макарівський район
          пропонує ідеальні умови: мальовнича природа, зручна інфраструктура та активна громада.
          Знайдіть свою ідеальну ділянку і створіть життя, про яке завжди мріяли!
        </p>
      </div>
      <div>
        <Image
          src="https://images.joseartgallery.com/40495/conversions/landscape-photography-wheat-stacks-more-photo-thumb900.jpg"
          alt="Image"
          preview
        />
      </div>
    </div>
  </div>
</template>
