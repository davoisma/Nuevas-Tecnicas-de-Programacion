<?php

namespace App\Http\Controllers;

use App\Posts;
use Illuminate\Http\Request;

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class EnfermedadController extends Controller
{

  function verEnfermedades(){

    $client = new Client();

      $resultado = $client->get('https://jsonplaceholder.typicode.com/posts');
      $contenido = $resultado->getBody();


      return view('listado',['lista'=> json_decode($contenido)]);

  }

    function ingresarEnfermedad(Request $request){
      $title = $request->input('title');
      $content = $request->input('content');


      $client = new Client();
  
      $resultado = $client->post('https://jsonplaceholder.typicode.com/posts',
        [
          'form_params' => [
            'title'=>$title,
            'body'=>$content,
          ]
        ]
      
      );

      if($resultado->getStatusCode()=="201")
        return redirect()->route('listado');  
    }

    function borrarEnfermedad($id){
      $client = new Client();
      $resultado = $client->delete('https://jsonplaceholder.typicode.com/posts/'.$id);
      return redirect()->route('listado');
    }

}