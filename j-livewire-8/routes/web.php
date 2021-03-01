<?php

use Illuminate\Support\Facades\Route;
//invocamos al controllador
use App\Http\Controllers\PageController;

//le indicamos que mire a la vista index
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('curso{course:slug}', [PageController::class, 'course'])->name('course');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
