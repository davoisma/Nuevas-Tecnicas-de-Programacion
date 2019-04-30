<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    <body>
        <div id="main" class="container">
            <div class="row">
            </div>
            <label for="nombre">Nombre</label>
			<input type="text" id="nombre" placeholder="Nombre" required>
			<label for="nombre">Apellido</label>
			<input type="text" id="apellido" placeholder="Apellido" required>
			<label for="correo">Correo</label>
			<input type="text" id="apellido" placeholder="Apellido" required>
        </div>

        <script src="{{'js/app.js'}}"></script>
    </body>
</html>
