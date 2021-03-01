<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\{User, Note};

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'email' => 'l@admin.com',
            'password' => bcrypt('123456')
        ]);

        Note::factory(30)->create();
    }
}
