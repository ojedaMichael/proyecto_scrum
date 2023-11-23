<?php

namespace App\Http\Controllers;

use App\Models\personas;
use App\Models\skilles;
use App\Models\skilles_personas;
use Illuminate\Http\Request;

class SkillesPersonasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $skillespersonas = skilles_personas::all();
        foreach ($skillespersonas as $skillespersona) {
            $personas = $skillespersona->id_personas = personas::where('id', $skillespersona->id_personas)->get();
            $skill = $skillespersona->id_skill = skilles::where('id', $skillespersona->id_skill)->get("nombre");  
            $skillespersona->id_skill = $skill[0]["nombre"];
        }
        return $skillespersonas;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $skillespersonas = new skilles_personas();
        $skillespersonas->id_personas = $request->id_personas;
        $skillespersonas->id_skill = $request->id_skill;
        $skillespersonas->save();
        return "Guardado correcto";
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return skilles_personas::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(skilles_personas $skilles_personas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $skillespersonas = skilles_personas::find($id);
        $skillespersonas->id_personas = $request->id_personas;
        $skillespersonas->id_skill = $request->id_skill;
        $skillespersonas->save();
        return "Actualizado correcto";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $skillespersonas = skilles_personas::find($id);
        $skillespersonas->delete();
        return "eliminado correcto";
    }
}
