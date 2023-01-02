<template>
  <c-stack spacing="1">
    <c-heading
      as="h2"
      size="xl"
      fontSize="24px"
      fontFamily="Roboto"
      color="#008C81"
      m="auto"
    >
      {{ data.username }}
    </c-heading>
    <c-heading
      as="h3"
      fontWeight="500"
      size="sm"
      color="gray.400"
      fontFamily="Roboto"
      m="auto"
    >
      {{ data.gender }}
    </c-heading>
    <c-heading
      as="h3"
      fontWeight="500"
      size="sm"
      color="gray.400"
      fontFamily="Roboto"
      m="auto"
    >
      {{ data.age }} Tahun
    </c-heading>
  </c-stack>
</template>

<script lang="js">
  import { CStack, CHeading } from "@chakra-ui/vue"
  export default {
    name: "TopSection",
    components: {
      CStack,
      CHeading,
    },
    props: {
      data: {
        type: Object
      }
    },
  }
</script>
