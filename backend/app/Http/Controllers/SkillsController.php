<?php

namespace App\Http\Controllers;

use App\Models\Skills;
use Illuminate\Http\Request;

class SkillsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Skills::all();
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
        $skills = new Skills();
        $skills->nombre = $request->nombre;
        $skills->save();
        return "Skills Guardado correctamente";
    }

    /**
     * Display the specified resource.
     */
    public function show(Skills $skills)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Skills $skills)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $skills = Skills::find($id);
        $skills->nombre = $request->nombre;
        $skills->save();
        return "Skills actualizado correctamente";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete($id)
    {
        $skills = Skills::find($id);
        $skills->delete();
        return "Skills se eliminó correctamente";
    }
}
