<template>
  <c-box backgroundColor="#FFFFFF" borderRadius="64px 10px 64px 0" mt="1" minHeight="633">
    <img :src="data[1].image" />
    <c-box p="5" spacing="4" gap="4">
      <c-text mb="4" fontWeight="700">
        {{ data[0].title }}
      </c-text>

      <c-grid template-columns="repeat(1, 1fr)" gap="5">
        <c-grid template-columns="repeat(2, 1fr)" gap="3">
          <ProgressRound
            color="yellow"
            :value="data[1].percentage[0].value"
            :label="data[1].percentage[0].label"
          />
          <ProgressRound
            color="green"
            :value="data[1].percentage[1].value"
            :label="data[1].percentage[1].label"
          />
        </c-grid>

        <c-grid template-columns="repeat(2, 1fr)" gap="3">
          <ProgressRound
            color="orange"
            :value="data[1].percentage[2].value"
            :label="data[1].percentage[2].label"
          />
          <ProgressRound
            color="orange"
            :value="data[1].percentage[3].value"
            :label="data[1].percentage[3].label"
          />
        </c-grid>

        <c-grid template-columns="repeat(2, 1fr)" gap="3">
          <ProgressRound
            color="orange"
            :value="data[1].percentage[4].value"
            :label="data[1].percentage[4].label"
          />
          <ProgressRound
            color="green"
            :value="data[1].percentage[5].value"
            :label="data[1].percentage[5].label"
          /> </c-grid
      ></c-grid>

      <c-flex my="4" gap="4" fontWeight="400">
        <ProgressInfo color="green" text="Mendekati Optimal" />
        <ProgressInfo color="yellow" text="Kurang Optimal" />
        <ProgressInfo color="orange" text="Sangat Tidak Optimal" />
      </c-flex>
    </c-box>
  </c-box>
</template>

<script lang="js">
import { CBox, CFlex, CText, CGrid } from '@chakra-ui/vue'
import ProgressRound from './fragments/ProgressRound.vue'
import ProgressInfo from './fragments/ProgressInfo.vue'
export default {
  name: "SlideTwo",
  components: {
    CBox,
    CFlex,
    CText,
    CGrid,
    ProgressRound,
    ProgressInfo
},
  props: {
    data: {
      type: Array
    },
  }
}
</script>
