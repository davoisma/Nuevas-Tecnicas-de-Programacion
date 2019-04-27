<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
      $user = Auth::user();
        return view('home',['nombre'=>$user->name]);
    }
    public function getuserdetails()
    {
      return view('userdetails');
    }
    public function saveuserdetails(Request $request)
    {
        $user = Auth::user();
        $user->age= $request->age;
        $user->weight= $request->weight;
        $user->height= $request->height;
        $user->save();

        return view('home',['nombre'=>$user->name]);
    }
}
