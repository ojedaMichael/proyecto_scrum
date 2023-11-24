<?php

namespace Database\Seeders;

use App\Models\empresas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmpresasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        empresas::factory(10)->create();
    }
}
