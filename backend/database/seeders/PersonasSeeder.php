<?php

namespace Database\Seeders;

use App\Models\personas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PersonasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        personas::factory(10)->create();
        DB::table('users')->insert([
            'name' => 'Jean',
            'email' => 'admin2@admin',
            'password' => Hash::make('admin'),
        ]);
    }
}
