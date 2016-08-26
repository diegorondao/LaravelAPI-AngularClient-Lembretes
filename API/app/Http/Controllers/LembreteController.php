<?php

namespace API\Http\Controllers;

use Illuminate\Http\Request;

use API\Http\Requests;
use API\Lembrete;

class LembreteController extends Controller
{	
	public function __construct()
	{
		$this->middleware('cors');					
	}

    public function store(Request $request)
    {
       	Lembrete::create($request->all());
    	return response()->json(["mensaje"=>"Dados armazenados com sucesso !!"]);

    	
    }
}
