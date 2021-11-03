<template>
<div>
  <p class="intro">Choose a trivia question to answer!</p>
  <p class="questions">
    <router-link v-for="question in questions" :key="question.id" :to="'/product/' + product.id">
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
      return underscore.shuffle(this.$root.$data.questions);
    }
  }
}
</script>

<style scoped>
.intro {
  font-style: italic;
}

.questions {
  display: flex;
  flex-wrap: wrap;
}

.questions img {
  border: 1px solid #333;
  height: 50px;
  width: 40px;
  margin-left: 10px;
  object-fit: cover;
}
</style>
