<template>
<div id="app">
  <div class="header">
    <h1>Mystery Product Store</h1>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    &copy; Mystery Product Store. The mystery is the product. The quantity. The amount.
    The delivery date. It's <i>all</i> a mystery.
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
  font-family: 'Mystery Quest', cursive;
}

.content {
  min-height: 500px;
}

.footer {
  padding: 30px;
  background-color: #eee;
}
</style>
