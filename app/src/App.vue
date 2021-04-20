<template>
  <div class="app">
      <router-view>
        <Home />
      </router-view>
  </div>
</template>

<script>
import Home from './Home';

export default {
  components: {
    Home
  }
}
</script>

<style>
body { 
  margin: 0; 
  padding: 0; 
}


button {
  border-radius: 5px;
  background: none;
  min-width: 60px;
  outline: none;
  color: aliceblue;
  background-color: #797b85;
  margin: 3px;
}

 


.app {
  font-family: 'Helvetica', 'Arial Narrow', Arial, sans-serif;
  line-height: 22px;
  letter-spacing: 0.2em;
  word-spacing: 0.1em;
  text-align: center;
  background-color: #404649;
}
</style>