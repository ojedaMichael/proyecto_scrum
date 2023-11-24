<?php

namespace Database\Seeders;

use App\Models\skilles_personas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillesPersonasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        skilles_personas::factory(10)->create();
    }
}
