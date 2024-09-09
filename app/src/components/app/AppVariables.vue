<script lang="ts">
import Image from 'primevue/image';
export default {
  name: 'AppVariables'
}
</script>

<template>
<div class="container mx-auto my-[100px]">
    <div class="relative flex  ">
        <div id="about-text" class="relative z-10  mx-[40px] pt-[10%] ml-[10%] max-w-[700px] left-0">
            <h2 class="font-[Oswald_Sans] text-4xl font-extralight">
                ДІЛЯНКА В МАКАРІВСЬКОМУ РАЙОНІ —
            </h2>
            <p class="font-[Oswald_Sans] text-3xl font-extralight">
                місце, де ваші мрії стають реальністю.
            </p>
            <div class="my-[20px]">
                <img src="https://themes.getmotopress.com/aquentro/wp-content/uploads/sites/20/2018/07/divider_line_big.svg" alt="Divider" />
            </div>
            <p class="font-[Oswald_Sans] font-extralight text-lg my-[30px]">
                Обирайте серед земельних ділянок для ОСГ, забудови, садівництва та
                комерції. Це більше, ніж покупка землі — це інвестиція у ваше
                майбутнє.
            </p>
            <p class="font-[Oswald_Sans] font-extralight text-lg">
                Уявіть будинок вашої мрії, прибутковий бізнес чи власний зелений сад.
                Макарівський район пропонує ідеальні умови: мальовнича природа, зручна
                інфраструктура та активна громада. Знайдіть свою ідеальну ділянку і
                створіть життя, про яке завжди мріяли!
            </p>
        </div>
        <div id="about-img" class="absolute right-[15%] top-0 bottom-0 w-[50%] self-center h-[600px] z-0 overflow-hidden">
            <img class="w-full h-full object-cover opacity-70" src="https://images.joseartgallery.com/40495/conversions/landscape-photography-wheat-stacks-more-photo-thumb900.jpg" alt="Background Image" />
        </div>
    </div>
</div>
</template>
