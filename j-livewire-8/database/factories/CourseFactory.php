<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

class CourseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Course::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // aca no es necesario respetar el orden que colocamos en la migracion.
            'name' => $this->faker->sentence,
            'slug' => $this->faker->slug,
            'image' => $this->faker->imageUrl(1280, 720), //le indicamos el tamanio de la imagen
            'description' => $this->faker->text(800),

            'user_id' => rand(1, 5),
            'category_id' => rand(1, 3)
        ];
    }
}
