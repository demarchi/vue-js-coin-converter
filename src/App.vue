<template>
  <div id="app">
    <h1>Coin Converter in Vue.js</h1>
    <div class="row">
      <CoinConverter coinA="GBP" coinB="BRL" />
      <CoinConverter coinA="BRL" coinB="GBP" />
    </div>
    <div class="row">
      <CoinConverter coinA="USD" coinB="BRL" />
      <CoinConverter coinA="BRL" coinB="USD" />
    </div>
    <div class="row">
      <CoinConverter coinA="EUR" coinB="BRL" />
      <CoinConverter coinA="BRL" coinB="EUR" />
    </div>
  </div>
</template>

<script>
import CoinConverter from './components/CoinConverter.vue'

export default {
  name: 'app',
  components: {
    CoinConverter
  }
}
</script>

<style>
body{
  background-color: aliceblue;
}
#app {
  max-width: 900px;
  margin: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
}
</style>
