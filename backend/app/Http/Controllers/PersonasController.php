<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\personas;
use Illuminate\Http\Request;


class PersonasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return personas::all();
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
        $personas = new personas();
        $personas->nombre = $request->nombre;
        $personas->apellido = $request->apellido;
        $personas->email = $request->email;
        $personas->dni = $request->dni;
        $personas->telefono = $request->telefono;
        $personas->password = $request->password;
        $personas->save();
        return "Guardado correcto";
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return personas::find($id);
    }

    public function showname(Request $request)
    {
        return personas::where('email', $request->email)->get();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(personas $personas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $personas = personas::find($id);
        $personas->nombre = $request->nombre;
        $personas->apellido = $request->apellido;
        $personas->email = $request->email;
        $personas->dni = $request->dni;
        $personas->telefono = $request->telefono;
        $personas->password = $request->password;
        $personas->save();
        return "Actualizado correcto";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $personas = personas::find($id);
        $personas->delete();
        return "eliminado correcto";
    }
}
