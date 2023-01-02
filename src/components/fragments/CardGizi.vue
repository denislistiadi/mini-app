<template>
  <c-flex
    :backgroundColor="color"
    height="81"
    borderRadius="8"
    justify="center"
    align="center"
    color="white"
    p="2"
    direction="column"
    gap="1"
  >
    <c-text fontSize="10px">{{ valueTop }}</c-text>
    <c-text
      v-if="valueBot == 'berat badan per bulan'"
      fontSize="18px"
      fontWeight="700"
      >{{ percentage }} Kg</c-text
    >
    <c-text v-else fontSize="18px" fontWeight="700">{{ percentage }}%</c-text>
    <c-text fontSize="10px">{{ valueBot }}</c-text>
  </c-flex>
</template>

<script lang="js">
import { CFlex, CText } from '@chakra-ui/vue';
export default {
  name: "CardGizi",
  components: {
    CFlex, CText
  },
  props: {
    valueTop: {
      type: String
    },
    percentage: {
      type: String
    },
    valueBot: {
      type: String
    },
    color: {
      type: String
    }
  }
}
</script>
