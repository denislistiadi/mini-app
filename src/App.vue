<template>
  <main>
    <Header />
    <TopSection :data="data" />
    <VueSlickCarousel :dots="true" :infinite="false" ref="carousel">
      <SlideOne :data="slide" />
      <SlideTwo :data="slide" />
      <SlideThree :data="slide" />
      <SlideFour :data="slide" />
      <SlideFive :data="slide" />
      <SlideSix :data="slide" />
      <SlideSeven :data="slide" />
      <SlideEight :data="slide" />
    </VueSlickCarousel>
    <c-flex>
      <c-button @click="showNext" my="10" backgroundColor="#F4CC46" borderRadius="8" py="2" mx="auto" px="16"
        >Selanjutnya</c-button
      ></c-flex
    >
  </main>
</template>

<script lang="js">

  import VueSlickCarousel from 'vue-slick-carousel' 
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import { CButton, CFlex } from '@chakra-ui/vue'
  import data from "./json/data.json"
  
  import Header from "./components/fragments/HeaderCom.vue"
  import TopSection from './components/fragments/TopSection.vue'
  import SlideOne from "./components/SlideOne.vue"
  import SlideTwo from "./components/SlideTwo.vue"
  import SlideThree from "./components/SlideThree.vue"
  import SlideFour from "./components/SlideFour.vue"
  import SlideFive from "./components/SlideFive.vue"
  import SlideSix from "./components/SlideSix.vue"
  import SlideSeven from "./components/SlideSeven.vue"
  import SlideEight from "./components/SlideEight.vue"

  export default {
    name: 'App',
    components: {
      CButton, CFlex,
      VueSlickCarousel,
      Header,
      TopSection,
      SlideOne,
      SlideTwo,
      SlideThree,
      SlideFour,
      SlideFive,
      SlideSix,
      SlideSeven,
      SlideEight
    },
    data() {
      return {
        data: data.result,
        slide: data.result.conditional,
      }
    },
    methods: {
      showNext() {
        this.$refs.carousel.next()
      },
    },
  }
</script>
