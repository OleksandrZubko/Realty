<script setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';

const products = ref([
    { name: 'ПІДБІР ДІЛЯНКИ', description: "Ми знаємо, як важливо знайти саме ту ділянку, яка відповідатиме вашим потребам. Наша команда допоможе вам визначитися з вибором, враховуючи всі ваші побажання — чи то місце для будівництва будинку, ведення бізнесу, садівництва чи сільського господарства.", inventoryStatus: 'INSTOCK', image: 'bamboo-watch.jpg' },
    { name: 'ВИЇЗД НА ДІЛЯНКУ', description: "Ми цінуємо ваш час і прагнемо допомогти вам зробити правильний вибір. Тому організуємо виїзд на ділянку, щоб ви могли особисто оцінити місце, побачити всі переваги та уявити свої майбутні можливості. Спільна поїздка — це ще один крок до вашої мрії!", inventoryStatus: 'LOWSTOCK', image: 'blue-band.jpg' },
    { name: 'УГОДА КУПІВЛІ', description: "Ми подбаємо про те, щоб процес купівлі-продажу був для вас максимально простим і зрозумілим. Від консультації до підготовки необхідних документів — наші фахівці супроводжуватимуть вас на кожному етапі, забезпечуючи швидке та безпечне оформлення угоди. Довірте нам турботи про юридичні деталі, щоб ви могли зосередитись на своїх планах!", inventoryStatus: 'OUTOFSTOCK', image: 'blue-t-shirt.jpg' },
    { name: 'СУПУТНІ ПРОЦЕСИ', description: "Ми допоможемо вам не лише з придбанням ділянки, але й із її подальшим використанням. Потрібно змінити цільове призначення землі або оформити інші необхідні документи? Наші фахівці супроводять вас у всіх супутніх процесах, забезпечуючи швидке і легке вирішення всіх бюрократичних питань. Ви можете покластися на наш досвід та професіоналізм!", inventoryStatus: 'INSTOCK', image: 'bracelet.jpg' },
    { name: 'Product 5', description: 65, inventoryStatus: 'LOWSTOCK', image: 'brown-purse.jpg' },
    { name: 'Product 6', description: 70, inventoryStatus: 'INSTOCK', image: 'chakra-bracelet.jpg' },
]);

</script>


<template>
    <div class="bg-[url('./src/images/pluses.jpg')] h-[100%] bg-center bg-cover bg-no-repeat">
        <div class="container mx-auto my-[250px]">
            <div class="card py-[100px]">
                <Carousel :value="products" :numVisible="4" :numScroll="4" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="border rounded-lg p-4 my-2 mx-[20px] shadow-md] hover:border-t-4 hover:shadow-lg">
                            <div>
                                <h4 class="text-black text-3xl font-[Oswald_Sans_Serif] mb-2 font-extralight">{{
                                    slotProps.data.name }}</h4>
                                <img src="https://themes.getmotopress.com/aquentro/wp-content/uploads/sites/20/2018/07/divider_line_big.svg" alt="Image" class="mt-[25px] mb-[35px]"/>
                                <h6 class="font-[Oswald_Sans] font-extralight text-lg text-black mb-3">{{ slotProps.data.description }}</h6>
                                
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>