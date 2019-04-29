@extends('layouts.app')
@section('content')
<head>
<script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
</head>
<div class="container">
   <div class="row ">
       <div class="col-md-8-col-md-offset-2">
           <div class="panel panel-default">
               <div class="panel-heading"></div>
               <div class="panel-body">
                  @if(session('status'))
                     <div class="alert alert-success">
                        {{session('status')}}
                     </div>
                  @endif

                  <form action="" id="formulario">
                     <div class="form-group">
                     <example-component></example-component>
                     </div>
                  </form>
  
               </div>
           </div>
       </div>
   </div>
</div>



