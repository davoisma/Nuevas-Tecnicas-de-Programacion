import VueFormGenerator from "vue-form-generator";
var urlUsers = 'https://jsonplaceholder.typicode.com/users';
export default {
	    components: {
	        "vue-form-generator": VueFormGenerator.component
	    }
}
new Vue({
	el: '#main',
	/*created: function() {
		this.getUsers();*/
	},
	data: {
		//lists:[]
		schema: {
	        fields: [
	        {
	            type: "input",
	            inputType: "text",
	            label: "Name",
	            model: "name",
	            placeholder: "",
	            featured: true,
	            required: true
	        },
	        {
	            type: "input",
	            inputType: "text",
	            label: "Apellido",
	            model: "apellido",
	            placeholder: "",
	            featured: true,
	            required: true
	        },
	        {
	        	type: "input",
	            inputType: "text",
	            label: "Correo",
	            model: "correo",
	            placeholder: "",
	            featured: true,
	            required: true
	        }
	        ]
	    }

	},
	/*methods: {
		getUsers: function() {
			axios.get(urlUsers).then(response => {
				this.lists = response.data
			});
		} 
	}*/


});