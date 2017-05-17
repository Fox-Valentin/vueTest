<template>
	<div class="hello">
		hello2 <br>
    <button @click="addTen5">add 15</button>&nbsp;<button @click="reduceTen5">reduce 15</button>
	</div>
</template>

<script>
export default {
  name: 'Hello2',
  props: {
  },
  data () {
    return {
      text: 'text',
      price: 15
    }
  },
  methods: {
    addTen5 () {
      this.$store.commit('increment', this.price)
    },
    reduceTen5 () {
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
