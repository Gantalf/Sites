<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

//Aca hacemos referencia a la entidad, a la clase que representa a mi tabla en el sistema
use App\Models\{User, Category, Course, Post}; //podemos escribir asi para ahorrar lineas

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {   
        //aca si respetamos la jerarquia
        User::factory(5)->create();
        Category::factory(3)->create();
        Course::factory(10)->create();
        Post::factory(90)->create();

    }
}
