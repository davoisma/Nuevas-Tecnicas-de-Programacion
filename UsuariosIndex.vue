<div>
	<div class="form-group">
		<router-link :to="{name: 'createUsuario'}" class="btn btn-success">USUARIO NUEVO</router-link>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">Usuario</div>
		<div class="panel-body">
			<table class="table table-bordered table-striped">
			<thead>
				<tr>
				  <th>Nombre</th>
				  <th>Apellido</th>
				  <th>Email</th>
				  <th>Peso</th>
				  <th>Estatura</th>
				  <th width="100"> </th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="usuario, index in usuarios">
                    <td>{{ usuario.nombre }}</td>
                    <td>{{ usuario.apellido }}</td>
                    <td>{{ usuario.email }}</td>
                    <td>{{ usuario.peso }}</td>
					<td>{{ usuario.estatura }}</td>
                    <td>
                        <router-link :to="{name: 'editusuario', params: {id: usuario.id}}" class="btn btn-xs btn-default">
                            Edit
                        </router-link>
                        <a href="#" class="btn btn-xs btn-danger" v-on:click="deleteEntry(usuario.id, index)">
                            Delete
                        </a>
                    </td>
                </tr>
			</tbody>
			</table>
		</div>
	</div>
</div>

<script>
    export default {
        data: function () {
            return {
                usuarios: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/usuarios')
                .then(function (resp) {
                    app.usuarios = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("No se puede cargar usuarios");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Desea Eliminar?")) {
                    var app = this;
                    axios.delete('/api/v1/usuarios/' + id)
                        .then(function (resp) {
                            app.usuarios.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("No se pudo eliminar ");
                        });
                }
            }
        }
    }
</script>