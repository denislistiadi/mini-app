<template>
  <header>
    <img
      :src="require('../../assets/logo_dietela.png')"
      alt="logo"
      class="img-logo"
    />
    <c-divider border-color="gray.400" mb="3" />
  </header>
</template>

<script>
  import { CDivider } from "@chakra-ui/vue"

  export default {
    name: "HeaderCom",
    components: {
      CDivider,
    },
  }
</script>
