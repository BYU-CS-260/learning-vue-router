<template>
<div>
  <div class="info">
    <p>Congratulations, you have ordered {{random}} cases of {{product.name}}!</p>

    <p>This product is sourced from {{product.country}} at {{product.price}} per item,
      for a total of ${{amount}}. Your credit card has been billed and you will receive
      delivery within 3-30 weeks. Please contact us if it doesn't arrive within 1 year.</p>
  </div>
  <div class="image">
    <img :src="'/images/products/'+product.image">
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      random: 0,
      amount: 0,
      product: {},
    }
  },
  created() {
    this.product = this.$root.$data.products.find(product => product.id === parseInt(this.$route.params.id));
    this.random =
      Math.floor(Math.random() * 90) + 10;
    this.amount = this.random * parseFloat(this.product.price.replace(/\$|,/g, ''));
    this.amount = this.amount.toFixed(2);
  },
}
</script>

<style scoped>
.intro {
  font-style: italic;
}

.products {
  display: flex;
  flex-wrap: wrap;
}

.products img {
  border: 1px solid #333;
  height: 50px;
  width: 40px;
  margin-left: 10px;
  object-fit: cover;
}
</style>
