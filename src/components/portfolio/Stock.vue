<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <h3 class="panel-heading">
        {{stock.name}}
        <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
      </h3>    
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" v-bind:class="{danger: insufficientQuantity}">
      </div>
      <div class="pull-right">
        <button class="btn btn-success" v-on:click="sellStock" v-bind:disabled="insufficientQuantity || quantity <= 0">{{insufficientQuantity ? 'Not enough' : 'Sell'}}</button> <!--ในdisabled || !Number.isInteger(quantity)-->
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      quantity: 0
    }
  },
  props: ['stock'],
  methods: {
    ...mapActions({
      placeSellerOrder: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.placeSellerOrder(order)
      this.quantity = 0
    }
  },
  computed: {
    insufficientQuantity () {
      return this.quantity > this.stock.quantity
    }
  }
}
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>
