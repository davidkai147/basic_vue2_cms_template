<template>
  <div v-show="isActive" v-if="$slots.default">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data () {
    return {
      isActive: this.selected
    }
  }
}
</script>

<style scoped>

</style>
