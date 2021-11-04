<template>
<div>
  <div class="info">
    <h3>{{ question.category }} for {{ question.value }}</h3>
    <div class="card">
      <p class="q-text">{{ question.question.toUpperCase() }} </p>
    </div>
 
    <div class="guess" v-show="!answered">
      <form v-on:submit.prevent="setAnswer">
        <label for='answerBox'>
          <h3>Submit your answer:</h3>
        </label><br>
        <textarea v-model="userAnswer" name='answerBox'>Show up</textarea>
        <br>
        <button type="submit" v-on:click="updateMoney">Submit</button>
      </form>
    </div>

    <div class="results" v-show="answered">
      <p>You answered: {{userAnswer}} </p>
      <p id="actual">Correct answer: {{ question.answer }}</p>

      <div v-if="userAnswer.toLowerCase() === question.answer.toLowerCase()">
        <h3>Way to go!</h3>
      </div>

      <div v-else>
        <h4>Better luck next time!</h4>
        <button type="submit" v-on:click="addToStudyBank(question)">Add to Study Bank</button>
      </div>

    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      question: {},
      userAnswer: '',
      answered: false,
      money: 0,
    }
  },
  created() {
    this.question = this.$root.$data.questions.find(question => question.id === parseInt(this.$route.params.id));
  },
  computed: {

  },
  methods: {
    setAnswer() {
      console.log("In setAnswer()");
      this.answered = true;
    },
    addToStudyBank(question) {
      this.$root.$data.studyBank.push(question);
      console.log(question);
    },
    updateMoney() {
      let thisMoney = parseInt(this.question.value.substring(1));
      console.log("This money: " + thisMoney);
      if (this.userAnswer.toLowerCase() === this.question.answer.toLowerCase()) {
        this.$root.$data.money += thisMoney;
      } else {
        this.$root.$data.money -= thisMoney;
      }
    }
  }
}
</script>

<style scoped>
.intro {
  font-style: italic;
}

.info {
  text-align: center;
}

.results {
  margin: 60px 0 60px 0;
}

form {
  display: block;
}

h3 {
  color: rgb(5, 5, 149);
  font-size: 25px;
}

h4 {
  color: red;
  font-size: 25px;
}

#actual {
  color: green;
}

.card {
  padding: 30px;
  background-color: rgb(5,5,149);
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
