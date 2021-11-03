<template>
<div>
  <p class="intro">Choose a trivia question to answer!</p>
  <p class="questions">
    <router-link v-for="question in questions" :key="question.id" :to="'/question/' + question.id">
      <img src="/images/question_card.png">
    </router-link>
  </p>
</div>
</template>

<script>
import underscore from 'underscore';
export default {
  name: 'Home',
  computed: {
    questions() {
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
  height: 70px;
  width: 110px;
  margin-left: 10px;
  object-fit: cover;
}
</style>
