<template>
  <Nuxt />
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'h-full'
      },
      htmlAttrs: {
        class: 'h-full bg-gray-100'
      }
    }
  }
}
</script>
