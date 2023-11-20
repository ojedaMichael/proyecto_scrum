<?php

namespace App\Http\Controllers;

use App\Models\empresas;
use Illuminate\Http\Request;

class EmpresasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return empresas::all();
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
        $empresas = new empresas();
        $empresas->nombre = $request->nombre;
        $empresas->rubro = $request->rubro;
        $empresas->email = $request->email;
        $empresas->rif = $request->rif;
        $empresas->telefono = $request->telefono;
        $empresas->save();
        return "Guardado correcto";
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return empresas::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(empresas $empresas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $empresas = empresas::find($id);
        $empresas->nombre = $request->nombre;
        $empresas->rubro = $request->rubro;
        $empresas->email = $request->email;
        $empresas->rif = $request->rif;
        $empresas->telefono = $request->telefono;
        $empresas->save();
        return "Actualizado correcto";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $empresas = empresas::find($id);
        $empresas->delete();
        return "Eliminado correctamente";
    }
}
