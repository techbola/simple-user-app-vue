<template>
	<div class="container main_container">
		<div class="test">
			<input type="text" class="form-control" v-model="title">
			<h1>{{ title }}</h1>
			<p>{{ user.firstName }}</p>
			<p v-if="showName" v-text="user.firstName"></p>
			<p v-else="showName" v-text="user.lastName"></p>
			<ul>
				<li v-for="item in items">{{ item.title }}</li>
			</ul>
			<button v-on:click="greet('Hello World')">Say Greeting</button>
			<br><br>
			<input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
			<hr>
			<input type="text" v-model="user.firstName">
			<input type="text" v-model="user.lastName">
			<h3>{{ fullName }}</h3>
			<h4>{{ msg }}</h4>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'test',
		// component properties - props
		props: {
			msg: {
				type: String,
				default: 'Foobar'
			}
		},
		data() {
			return {
				title: 'Hello World',
				user: {
					firstName: 'John',
					lastName: 'Doe'
				},
				showName: false,
				items: [
					{ title: 'item one' },
					{ title: 'item two' },
					{ title: 'item three ' }
				]
			}
		},
		methods: {
			greet: function(greeting) {
				alert(greeting);
			},
			pressKey: function() {
				console.log('pressed')			
			},
			enterHit: function() {
				console.log('You hit enter');
			}
		},
		// Computed Properties - instant update to the view 
		computed: {
			fullName: function(){
				return this.user.firstName + ' ' + this.user.lastName;
			}
		}
	}	
</script>

<style scoped>
	.main_container{
		padding-top:20px;
	}
</style>