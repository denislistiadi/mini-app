<template>
  <c-box
    backgroundColor="#FFFFFF"
    borderRadius="64px 10px 64px 0"
    mt="1"
    minHeight="633"
  >
    <img :src="data[3].image" />
    <c-box p="5">
      <c-text mb="4" fontSize="20" fontWeight="700">
        {{ data[3].title }}
      </c-text>
      <c-text
        mb="4"
        fontSize="24"
        textAlign="center"
        color="#008C81"
        fontWeight="700"
      >
        {{ data[3].status.value }}
      </c-text>
      <c-text mb="4" fontSize="12" textAlign="center">
        Status Gizi {{ data[3].status.label }}
      </c-text>
      <c-stack spacing="3">
        <c-text fontSize="12">{{ description[0] }}</c-text>
        <c-stack spacing="0">
          <c-text fontSize="12">{{ boldOne[0] }}</c-text>
          <c-text fontSize="12" fontWeight="700">{{ boldOne[1] }}</c-text></c-stack
        >
        <c-text fontSize="12"
          >{{ boldTwo[0] }}
          <c-text as="span" fontWeight="700">{{ boldTwo[1] }}</c-text></c-text
        >
      </c-stack>
    </c-box>
  </c-box>
</template>

<script lang="js">
import { CBox, CText, CStack } from '@chakra-ui/vue'
export default {
  name: "SlideFour",
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
        desc: this.data[3].description
      }
    },
    computed: {
      description: function() {
        return this.desc.split("|")
      },
      boldOne: function() {
        return this.description[1].split("~")
      },
      boldTwo: function() {
        return this.description[2].split("~")
      }
    },

}
</script>
