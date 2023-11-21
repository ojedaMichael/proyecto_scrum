<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $personas= new PersonasSeeder;
        $personas-> run();
        $postulaciones= new PostulacionesSeeder;
        $postulaciones-> run();
        $empleos= new EmpleosSeeder;
        $empleos-> run();
    }
}
