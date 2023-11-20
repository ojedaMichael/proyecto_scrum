<?php

namespace Database\Seeders;

use App\Models\empleos;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmpleosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        empleos::factory(5)->create();
    }
}
