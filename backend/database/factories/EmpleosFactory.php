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
        $num = rand(1,10);
        return [
            'cargo'=>fake()->jobTitle(),
            'detallesEmpleo'=>fake()->text(),
            'requisitos'=>fake()->text(),
            'ubicacion'=>fake()->address(),
            'modalidad'=>fake()->text(),
            'salario' => fake()->randomFloat(2, 30000, 100000),
            'idEmpresa'=>$num,
        ];
    }
}
