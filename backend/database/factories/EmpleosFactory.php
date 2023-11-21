<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\empleos>
 */
class EmpleosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       
        return [
            'cargo'=>fake()->text(),
            'detallesEmpleo'=>fake()->text(),
            'requisitos'=>fake()->text(),
            'ubicacion'=>fake()->ubicacion(8),
            'modalidad'=>fake()->text(),
            'idEmpresa'=>fake()->randomNumber(),
        ];
    }
}
