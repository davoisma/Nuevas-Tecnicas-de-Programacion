new Vue({
	el: '#app',
	data(){
		return {
			usuarios: [],
			cantidadResultados: 5
			//el maximo de resultados que devuelve este API es de 12 por pagina
		}
	},
	methods: {
		leerAPI(){
			axios.get('https://reqres.in/api/users', {
				params: {
					'per_page': this.cantidadResultados
				}
			}).then(response => {
				this.usuarios = response.data.data
			}).catch(e => {
				console.log(e)
			})
		}
	},
	created(){
		this.leerAPI()
	}
})
