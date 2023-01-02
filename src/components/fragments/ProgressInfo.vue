<template>
  <c-flex direction="row" align="center" gap="1"
    ><c-box height="3" width="3" :backgroundColor="color"></c-box
    ><c-text fontSize="8">{{ text }}</c-text></c-flex
  >
</template>

<script lang="js">
import { CFlex,CBox, CText } from '@chakra-ui/vue'
export default {
  name: "ProgressInfo",
  components: {
    CFlex, CBox, CText
  },
  props: {
    color: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>
