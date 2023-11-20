<?php

namespace App\Http\Controllers;

use App\Models\postulaciones;
use Illuminate\Http\Request;

class PostulacionesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return postulaciones::all();
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
        $postulaciones = new Postulaciones();
        $postulaciones->id_persona = $request->id_persona;
        $postulaciones->id_empleo= $request->id_empleo;
       
        $postulaciones->save();
        return "Guardado correcto";
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return postulaciones::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request,$id)
    {
        
        $postulaciones =postulaciones::find($id);
        $postulaciones->id_persona = $request->id_persona;
        $postulaciones->id_empleo= $request->id_empleo;
       
        $postulaciones->save();
        return "Guardado correcto";
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, postulaciones $postulaciones)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $postulaciones= postulaciones::find($id);
        $postulaciones->delete();
        return "elimano correcto";
    }
}
