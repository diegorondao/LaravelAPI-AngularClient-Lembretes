<?php

namespace API;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lembrete extends Model
{
   	use SoftDeletes;

   	protected $table = 'lembretes';
   	protected $fillable = ['name','description'];
   	
   	protected $dates = ['deleted_at'];
}
	