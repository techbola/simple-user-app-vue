<template>
	<div class="container main_container">
		<div class="users">
			<h1>Users</h1>
			<form v-on:submit="addUser">
				<input type="text" v-model="newUser.name" placeholder="Enter Name">
				<br><br>
				<input type="email" v-model="newUser.email" placeholder="Enter Email">
				<br><br>
				<input type="submit" value="Submit">
			</form>
			<hr> 
			<ul>
				<li v-for="user in users">
					<input type="checkbox" class="toggle" v-model="user.contacted">
					<span :class="{contacted: user.contacted}">
						{{ user.name }}: {{ user.email }} <button v-on:click="deleteUser(user)" class="btn btn-sm btn-danger">x</button>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'users',
		data() {
			return {
				newUser: {},
				users: [
					// {
					// 	name: 'Bola',
					// 	email: 'bola@gmail.com',
					// 	contacted: false
					// },
					// {
					// 	name: 'Steve',
					// 	email: 'steve@gmail.com',
					// 	contacted: false
					// },
					// {
					// 	name: 'John',
					// 	email: 'john@gmail.com',
					// 	contacted: false
					// }
				]
			}
		},
		methods: {
			addUser: function(e){
				this.users.push({
					name: this.newUser.name,
					email: this.newUser.email,
					contacted: false 
				})
				e.preventDefault();
			},
			deleteUser: function(user){
				this.users.splice(this.users.indexOf(user), 1); 
			}
		},
		created: function(){
			 this.$http.get('https://jsonplaceholder.typicode.com/users')
			 .then(function(response){
			 	this.users = response.data;
			 });
		}
	}	
</script>

<style scoped>
	.main_container{
		padding-top:20px;
	}
	.contacted{
		text-decoration: line-through;
	}
</style>