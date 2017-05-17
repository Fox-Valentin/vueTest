<template>
  <div class="hello">
    <h1>hello</h1>
    <button @click="addTen">add 10</button>&nbsp;<button @click="reduceTen">reduce 10</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '123',
      name: 'zk',
      price: 10
    }
  },
  methods: {
    addTen () {
      this.$store.dispatch('increase', this.price)
    },
    reduceTen () {
      this.$store.commit('decrement', this.price)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>
