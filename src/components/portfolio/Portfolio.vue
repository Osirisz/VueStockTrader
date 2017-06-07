<template>
  <div>
    <Stock v-for="stock in stocks" v-bind:key="stock.id" v-bind:stock="stock"></Stock>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Stock from './Stock'
export default {
  components: {
    Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>
