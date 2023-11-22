<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\skilles;
use App\Models\skilles_personas;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $personas = new PersonasSeeder;
        $empresas = new EmpresasSeeder;
        $skilles = new SkillesSeeder;
        $SkillesPersonas = new SkillesPersonasSeeder;
        $empleos = new EmpleosSeeder;
        $postulaciones = new PostulacionesSeeder;

        $personas-> run();
        $empresas-> run();
        $skilles-> run();
        $SkillesPersonas-> run();
        $empleos-> run();
        $postulaciones-> run();
    }
}
