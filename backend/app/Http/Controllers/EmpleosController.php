<?php

namespace App\Http\Controllers;

use App\Models\empleos;
use Illuminate\Http\Request;

class EmpleosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return empleos::all();
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
        $empleos = new empleos();
        $empleos->cargo = $request->cargo;
        $empleos->detallesEmpleo = $request->detallesEmpleo;
        $empleos->requisitos = $request->requisitos;
        $empleos->ubicacion = $request->ubicacion;
        $empleos->modalidad = $request->modalidad;
        $empleos->salario = $request->salario;
        $empleos->idEmpresa = $request->idEmpresa;
        $empleos->save();
        return "Empleo guardada exitosamente";
    }

    /**
     * Display the specified resource.
     */
    public function show(empleos $empleos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(empleos $empleos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $empleos =  empleos::find($id);
        $empleos->cargo = $request->cargo;
        $empleos->detallesEmpleo = $request->detallesEmpleo;
        $empleos->requisitos = $request->requisitos;
        $empleos->ubicacion = $request->ubicacion;
        $empleos->modalidad = $request->modalidad;
        $empleos->salario = $request->salario;
        $empleos->idEmpresa = $request->idEmpresa;
        $empleos->save();
        return "Empleo Actualizado exitosamente";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $empleos = empleos::find($id);
        $empleos->delete();
        return "Asistencia eliminada exitosamente"; 
    }
}
