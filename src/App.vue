<template>
<div id="app">
  <div class="header">
    <h1>Jeopardy</h1>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <p>Vue Jeopardy by Maura Pierce & Olivia Harrison</p>
    <a href="https://github.com/livharrison/cp3" target="_blank">Github Repository</a>
  </div>
</div>
</template>

<style>
html {}

body {
  margin: 50px 100px;
  font-family: 'Bellota Text', cursive;
}

#app {}

h1 {
  font-family: 'Bebas Neue', sans-serif;
  text-align: center;
  font-size: 60px;
  color: rgb(5,5,149);
}

.content {
  min-height: 500px;
}

.footer {
  padding: 20px;
  background-color: #eee;
  text-align: center;
}
</style>
