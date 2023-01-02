<template>
  <c-box
    backgroundColor="#FFFFFF"
    borderRadius="64px 10px 64px 0"
    mt="1"
    minHeight="633"
  >
    <img :src="data[2].image" />
    <c-box p="5">
      <c-text mb="4" fontSize="14" fontWeight="400">
        Hello {{ data[2].clientName }}
      </c-text>
      <c-text mb="4" fontSize="14" fontWeight="550">
        {{ data[2].description }}
      </c-text>

      <c-grid template-columns="repeat(2, 1fr)" mb="2" gap="2" width="100%">
        <CardGizi
          color="#008C81"
          :percentage="data[2].status[0].value"
          :valueBot="data[2].status[0].label"
        />
        <CardGizi
          color="#E6A603"
          :valueTop="data[2].status[1].label1"
          :percentage="data[2].status[1].value"
          :valueBot="data[2].status[1].label"
        />
        <CardGizi
          color="#F47458"
          :percentage="data[2].status[2].value"
          :valueBot="data[2].status[2].label"
        />
        <CardGizi
          color="#4A72A1"
          :percentage="data[2].status[3].value"
          :valueBot="data[2].status[3].label"
        />
      </c-grid>
      <CardGizi
        color="#63A797"
        :percentage="data[2].status[4].value"
        :valueBot="data[2].status[4].label"
      />
    </c-box>
  </c-box>
</template>

<script lang="js">
import { CBox, CGrid, CText } from '@chakra-ui/vue'
import CardGizi from './fragments/CardGizi.vue';
export default {
  name: "SlideThree",
  components: {
    CBox,
    CGrid,
    CText,
    CardGizi
},
  props: {
    data: {
      type: Array
    }
  },
}
</script>
