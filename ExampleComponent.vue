<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Lugar</div>

                    <div class="card-body">
                        <form method="post" >
                        
                        <label>Nombre</label>
                        <input id="Nombre" name="nombre" type="text"/><br> 
                        
                        <label>ID</label>
                        <input id="id" name="id" type="text"/><br>
                        
                        <label>Ubicacion</label>
                        <input id="Ubicacion" name="Ubicacion" type="text"/><br>

                        <input type="submit" id="boton" value="Guardar"/>

                </article>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
