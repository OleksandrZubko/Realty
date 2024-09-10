<script setup lang="ts">
import Carousel from 'primevue/carousel'

const products = [
  {
    name: 'ПІДБІР ДІЛЯНКИ',
    description:
      'Ми знаємо, як важливо знайти саме ту ділянку, яка відповідатиме вашим потребам. Наша команда допоможе вам визначитися з вибором, враховуючи всі ваші побажання — чи то місце для будівництва будинку, ведення бізнесу, садівництва чи сільського господарства.',
    inventoryStatus: 'INSTOCK',
    image: 'bamboo-watch.jpg'
  },
  {
    name: 'ВИЇЗД НА ДІЛЯНКУ',
    description:
      'Ми цінуємо ваш час і прагнемо допомогти вам зробити правильний вибір. Тому організуємо виїзд на ділянку, щоб ви могли особисто оцінити місце, побачити всі переваги та уявити свої майбутні можливості. Спільна поїздка — це ще один крок до вашої мрії!',
    inventoryStatus: 'LOWSTOCK',
    image: 'blue-band.jpg'
  },
  {
    name: 'УГОДА КУПІВЛІ',
    description:
      'Ми подбаємо про те, щоб процес купівлі-продажу був для вас максимально простим і зрозумілим. Від консультації до підготовки необхідних документів — наші фахівці супроводжуватимуть вас на кожному етапі, забезпечуючи швидке та безпечне оформлення угоди. Довірте нам турботи про юридичні деталі, щоб ви могли зосередитись на своїх планах!',
    inventoryStatus: 'OUTOFSTOCK',
    image: 'blue-t-shirt.jpg'
  },
  {
    name: 'СУПУТНІ ПРОЦЕСИ',
    description:
      'Ми допоможемо вам не лише з придбанням ділянки, але й із її подальшим використанням. Потрібно змінити цільове призначення землі або оформити інші необхідні документи? Наші фахівці супроводять вас у всіх супутніх процесах, забезпечуючи швидке і легке вирішення всіх бюрократичних питань. Ви можете покластися на наш досвід та професіоналізм!',
    inventoryStatus: 'INSTOCK',
    image: 'bracelet.jpg'
  },
  { name: 'Product 5', description: 65, inventoryStatus: 'LOWSTOCK', image: 'brown-purse.jpg' },
  { name: 'Product 6', description: 70, inventoryStatus: 'INSTOCK', image: 'chakra-bracelet.jpg' }
]
</script>

<template>
  <div class="bg-[url('/images/pluses.jpg')] h-full bg-center bg-cover bg-no-repeat">
    <div class="container">
      <div class="card py-24">
        <Carousel :value="products" :numVisible="4" :numScroll="4">
          <template #item="slotProps">
            <div
              class="border rounded-lg p-4 my-2 mx-5 hover:shadow-lg hover:shadow-black/10 transition-shadow duration-200"
            >
              <div>
                <h4 class="text-black text-xl mb-2">
                  {{ slotProps.data.name }}
                </h4>
                <img
                  src="https://themes.getmotopress.com/aquentro/wp-content/uploads/sites/20/2018/07/divider_line_big.svg"
                  alt="Image"
                  class="mb-5"
                />
                <h6 class="text-sm text-black mb-3">
                  {{ slotProps.data.description }}
                </h6>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
