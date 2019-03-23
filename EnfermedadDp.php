<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Disease;


class EnfermedadDp extends Controller
{

    public function mostrarvista(){
       return view('Enfermedadgui');
    }

    public function index(){
      return Disease::all();
    }

    public function show($id){
      return Disease::find($id);
    }

    public function store (Request $request){
        return Disease::create($request->all());
    }

    public function update(Request $request, $id){
        $local=Disease::findOrFail($id);
        $local->update($request->all());
        return $local;
    }

    public function delete($id){
      $local=Disease::findOrFail($id);
      $local->delete();
      return 204;
    }

}
