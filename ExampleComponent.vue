

<template>
    <div class="container">       
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header"> Mapa </div>
                    <div class="card-body">
                        <label>Lugares:</label>
                        <select>
                        <option value="parque">Parque</option>
                        <option value="gym">Gym</option>
                        </select>
                        <button id="pedirvan" onclick="posicion()">Mostrar</button>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.4478552766154!2d-78.4931134708024!3d-0.2099341588945179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTInMzUuOCJTIDc4wrAyOSczMy4yIlc!5e0!3m2!1ses-419!2sec!4v1556518979973!5m2!1ses-419!2sec" width="800" height="650" frameborder="1" style="border:0" allowfullscreen></iframe>          
                    </div>
                </div>
            </div>
        
    </div>
</template>
 


<script>

    function posicion (){
        function localizacion(posicion){
        var latitud=posicion.coords.latitud;
        var longitud=posicion.coords.longitud;

        console.log(latitud+" "+longitud);
    }
        function error(){
        output.innerHTML="<p>No se pudo obtener su ubicacion</p>"
    }
        navigator.geolocation.getCurrentPosition(localizacion)

        console.log(localizacion);
    }
    
    


    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }

</script>
