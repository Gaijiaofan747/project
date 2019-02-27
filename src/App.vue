<template>
  <div id="app">
    <Header></Header>
    <main>
      <Home></Home>
    </main>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from 'components/layout/Header'
import TabBar from 'components/layout/TabBar'
import Home from 'pages/Home'
export default {
  name:'app',
  components: {
    Header,TabBar,Home
  }
}
</script>


<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  display flex
  flex-direction column
  height 100%
  main 
    flex 1
    width 100%
    height 100%
    font-size 0.46rem
    background #f4f4f8
    overflow hidden
</style>
