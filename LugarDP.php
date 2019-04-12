<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Contacto;

class LugarDP extends Controller
{
    public function index ()
    {
       return DB::table('Lugar')::all();
    }


    public function ingresar (Request $request){  
        $lugar=DB::table('Lugar')->insert(array(
            'ID'=>$request->input('ID'),
            'Nombre'=>$request->input('Nombre'),
            'Ubicacion'=>$request->input('Ubicacion')
        ));
        return ("ingreso");
    }

    public function buscar (Request $request){
        $ubicacion=$request->input('Ubicacion');
        $proyecto=DB::table('Lugar')->where('Ubicacion','=',$ubicacion)->get();
        return view('vista',['datos'=>$proyecto]);  
    }
    


}