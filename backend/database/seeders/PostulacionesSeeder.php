<?php

namespace Database\Seeders;

use App\Models\postulaciones;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostulacionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        postulaciones::factory(30)->create();
    }
}
