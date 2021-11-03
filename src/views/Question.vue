<template>
<div>
  <div class="info">
    <div class="card">
      <p class="q-text">{{ question.question.toUpperCase() }} </p>
    </div>
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

.info {
  text-align: center;
}

.card {
  padding: 30px;
  background-color: blue;
  width: 60%;
  margin: auto;
}

.q-text {
  font-family: 'Korinna', serif;
  color: white;
  text-align: center;
  font-size: 40px; 
}

.products {
  display: flex;
  flex-wrap: wrap;
}
</style>
