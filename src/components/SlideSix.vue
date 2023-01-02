<template>
  <c-box
    backgroundColor="#FFFFFF"
    borderRadius="64px 10px 64px 0"
    mt="1"
    minHeight="633"
  >
    <img :src="data[5].image" />
    <c-box p="5" spacing="4">
      <c-text mb="4" fontWeight="700">
        {{ data[5].title }}
      </c-text>
      <c-stack spacing="3">
        <c-text v-for="item in desc" :key="item">{{ item }}</c-text>
      </c-stack>
    </c-box>
  </c-box>
</template>

<script lang="js">
import { CBox, CText, CStack } from '@chakra-ui/vue'
  export default {
    name: "SlideSix",
    components: {
      CBox,
      CText,
      CStack
    },
    props: {
      data: {
        type: Array
      }
    },
    data() {
      return {
        desc: this.data[5].description.split("|")
      }
    }
  }

</script>
