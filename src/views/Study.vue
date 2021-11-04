<template>
<div>
    <div class="card">
        <h1>Study Bank</h1>
        <div class="list" v-for="question in studyBank" :key="question.id">
            <p> {{question.question}} </p>
        </div>
        
    </div>

</div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        studyBank: Array,
    },
    methods: {
        removeQuestion(question) {
            this.$root.$data.studyBank.splice(question, 1);
        },
    }
}
</script>

<style scoped>

</style>