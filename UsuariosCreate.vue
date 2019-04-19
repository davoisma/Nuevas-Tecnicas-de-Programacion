<div class="form-group">
    <router-link to="/" class="btn btn-default">Back</router-link>
</div>

<div class="panel panel-default">
    <div class="panel-heading">Usuario Nuevo</div>
    <div class="panel-body">
        <form v-on:submit="saveForm()">
            <div class="row">
                <div class="col-xs-12 form-group">
                    <label class="control-label">NOMBRE</label>
                    <input type="text" v-model="Usuario.nombre" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    <label class="control-label">APELLIDO</label>
                    <input type="text" v-model="Usuario.apellido" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    <label class="control-label">EMAIL</label>
                    <input type="text" v-model="Usuario.email" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    <label class="control-label">PESO</label>
                    <input type="text" v-model="Usuario.peso" class="form-control">
                </div>
            </div>
			<div class="row">
                <div class="col-xs-12 form-group">
                    <label class="control-label">ESTATURA</label>
                    <input type="text" v-model="Usuario.estatura" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    <button class="btn btn-success">Create</button>
                </div>
            </div>
        </form>
    </div>
</div>
<script>
    export default {
        data: function () {
            return {
                Usuario: {
                    nombre: '',
                    apellido: '',
                    email: '',
                    peso: '',
					estatura: '',
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newUsuario = app.Usuario;
                axios.post('/api/v1/usuarios', newUsuario)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Error crear el nuevo usuario");
                    });
            }
        }
    }
</script>