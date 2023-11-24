<?php

namespace App\Http\Controllers;

use App\Models\skilles;
use Illuminate\Http\Request;

class SkillesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return skilles::all();
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
        $skilles = new skilles();
        $skilles->nombre = $request->nombre;
        $skilles->save();
        return "Guardado correcto";
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return skilles::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(skilles $skilles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $skilles = skilles::find($id);
        $skilles->nombre = $request->nombre;
        $skilles->save();
        return "Actualizado correcto";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $skilles= skilles::find($id);
        $skilles->delete();
        return "eliminado correcto";
    }
}
