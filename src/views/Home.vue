<template>
<div>
  <p class="intro">Choose one of our many fine products available for sale.</p>
  <p class="products">
    <router-link v-for="product in products" :key="product.id" :to="'/product/' + product.id">
      <img src="/images/question-marks.png">
    </router-link>
  </p>
</div>
</template>

<script>
import underscore from 'underscore';
export default {
  name: 'Home',
  computed: {
    products() {
      return underscore.shuffle(this.$root.$data.products);
    }
  }
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
