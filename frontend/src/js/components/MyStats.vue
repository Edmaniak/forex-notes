<template>

</template>
<script>
	import axios from 'axios'

	export default {
		data: () => ({
			username: 'adam.ouhrabka@gmail.com',
			password: 'Adik3714'
		}),
		created() {
			axios.get(`https://www.myfxbook.com/api/login.json?email=${this.username}&password=${this.password}`, {
			})
				.then((res) => console.log(res))
				.catch(err => console.log(err))
		}
	}
</script>
<style>

</style>