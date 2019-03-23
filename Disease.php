<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Disease extends Model
{
    //
    public $timestamps=false;
    protected $table='Enfermedad';
    protected $fillable=['Nombre','Tipo','Problemas'];


}
