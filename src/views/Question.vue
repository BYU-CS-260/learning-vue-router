<template>
<div>
  <div class="info">
    <p>Question: {{ question.question }} </p>
    <p>Answer: {{ question.answer}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      question: {},
    }
  },
  created() {
    this.question = this.$root.$data.questions.find(question => question.id === parseInt(this.$route.params.id));
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
</style>
