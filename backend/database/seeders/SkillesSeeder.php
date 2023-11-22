<?php

namespace Database\Seeders;

use App\Models\skilles;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        skilles::factory(10)->create();
    }
}
