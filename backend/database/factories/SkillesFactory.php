<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\skilles>
 */
class SkillesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $skill = ['Habilidades comunicativas','creatividad','Resolucion de problemas'];
        return [
            'nombre'=>$skill[rand(0,2)]
        ];
    }
}
