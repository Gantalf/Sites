<?php

namespace App\Http\Livewire;

use Livewire\Component;

//invocamos a nuestra clase de cursos
use App\Models\Course;

class Courselist extends Component
{
    public function render()
    {
        return view('livewire.courselist', [
            'courses' => Course::latest()->with('user')->take(9)->get()
        ]);
    }
}
