<template>
  <c-box
    backgroundColor="#FFFFFF"
    borderRadius="64px 10px 64px 0"
    mt="1"
    minHeight="633"
  >
    <img :src="data[7].image" />
    <c-box p="5" spacing="4">
      <c-text fontSize="20" mb="4" fontWeight="700">
        {{ data[7].title }}
      </c-text>
      <c-stack spacing="3">
        <c-text fontSize="12"
          >{{ dataOne[0] }}{{ data[7].programName }} {{ dataOne[2] }}
        </c-text>
        <c-text fontSize="14" fontWeight="700" textAlign="center">{{
          description[1].replaceAll("%~", "").replaceAll("~%", "")
        }}</c-text>
        <c-flex justify="center">
          <img
            width="88px"
            :src="data[7].journalImage"
            :alt="data[7].programName"
          />
        </c-flex>
        <c-text fontSize="12">{{ description[2] }}</c-text>
        <c-text fontSize="12">{{ description[3] }}</c-text>
      </c-stack>
      <c-flex justify="center">
        <a :href="data[7].linkCta">
          <c-button
            my="5"
            fontSize="14"
            fontStyle="underline"
            backgroundColor="#008C81"
            textTransform="uppercase"
            color="white"
            py="2"
            borderRadius="99px"
            ><c-text as="u">{{data[7].cta}}</c-text>
          </c-button></a
        ></c-flex
      >
    </c-box>
  </c-box>
</template>

<script lang="js">
import { CBox, CButton, CText, CStack, CFlex } from '@chakra-ui/vue'
export default {
  name: "SlideEight",
  components: {
    CBox, CButton,
    CText,
    CStack, CFlex
  },
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      desc: this.data[7].description
    }
  },
  computed: {
    description: function() {
      return this.desc.split("|")
    },
    dataOne: function() {
      return this.description[0].split("~")
    }
  }
}
</script>
