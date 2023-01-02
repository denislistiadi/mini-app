<template>
  <c-flex align="center" direction="column" justify="center" gap="2"
    ><c-circular-progress :value="value" :color="color" size="80">
      <c-circular-progress-label fontSize="16px"
        >{{ value }}%</c-circular-progress-label
      >
    </c-circular-progress>
    <c-text textAlign="center" fontSize="12" fontWeight="600">{{
      label
    }}</c-text>
  </c-flex>
</template>

<script lang="js">
import { CFlex, CCircularProgress, CCircularProgressLabel, CText } from '@chakra-ui/vue'

export default {
  name: "ProgressRound",
  components: {
    CFlex, CCircularProgress, CText, CCircularProgressLabel
  },
  props: {
    value: {
      type: Number
    },
    label: {
      type: String
    },
    color: {
      type: String
    }
  }
}
</script>
