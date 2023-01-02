<template>
  <c-grid
    backgroundColor="#FFFFFF"
    borderRadius="64px 10px 64px 0"
    mt="1"
    minHeight="633"
    m="auto"
  >
    <img :src="data[6].image" />
    <c-flex direction='column' p="5" spacing="4" height="100%">
      <c-text textAlign="center" fontSize="20" mb="4" fontWeight="700">
        {{ data[6].title }}
      </c-text>
      <c-stack spacing="3">
        <c-text fontSize="16" textAlign="center" >{{ desc }}</c-text>
      </c-stack>
    </c-flex>
  </c-grid>
</template>

<script lang="js">
import { CGrid, CFlex, CText, CStack } from '@chakra-ui/vue'
  export default {
    name: "SlideSeven",
    components: {
      CGrid, 
      CFlex,
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
        desc: this.data[6].description.replaceAll("|", "")
      }
    }
  }

</script>
