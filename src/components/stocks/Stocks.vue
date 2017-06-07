<template>
  <div>
  <Stock v-for="stock in stocks" v-bind:key="stock.id" v-bind:stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from './Stock'
export default {
  components: {
    Stock
  },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>
