<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\personas>
 */
class PersonasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre'=>fake()->firstName(),
            'apellido'=>fake()->lastName(),
            'email'=>fake()->email(),

            'dni'=>fake()->randomNumber(8),

            'telefono'=>fake()->phoneNumber(),
            'password'=>fake()->password(),
        ];
    }
}
