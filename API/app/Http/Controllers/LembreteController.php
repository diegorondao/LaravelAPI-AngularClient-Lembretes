<?php

namespace API\Http\Controllers;

use Illuminate\Http\Request;
use API\Http\Requests;
use Illuminate\Routing\Route;
use API\Lembrete;

class LembreteController extends Controller
{	
	public function __construct()
	{
		$this->middleware('cors');
		//$this->beforeFilter('@find', ['only' => ['show','update', 'destroy']]);				
		//$this->beforeFilter('@find', ['only' => ['show','update', 'destroy']]);	
	}

	public function find(Route $route)
	{
		$this->lembrete = Lembrete::find($route->getParameter('lembretes'));
		
	}
	public function index()
	{
		$lembretes = Lembrete::all();
		return response()-> json($lembretes->toArray());
	}
    public function store(Request $request)
    {
       	Lembrete::create($request->all());
    	return response()->json(["mensagem"=>"Dados armazenados com sucesso !!"]);    	
    }
	public function show($id)
	{
		return response()->json($this->lembrete);

	}
	public function update(Request $request, $id)
	{
		
		$this->lembrete->fill($request->all());
		$this->lembrete->save();
		
		return response()->json(["mensagem"=>"Dados atualizados"]);

	}	

	public function destroy($id)
	{
		$this->lembrete->delete();
		return response()->json(["mensagem"=>"Lembrete deletado"]);
	}


}
