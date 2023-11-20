<?php

use App\Http\Controllers\EmpresasController;
use App\Http\Controllers\PersonasController;
use App\Http\Controllers\PostulacionesController;
use Database\Seeders\EmpresasSeeder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(EmpresasController::class)->group(function () {
    Route::get('/empresas', 'index');
    Route::get('/empresas/{id}', 'show');
    Route::post('/empresas', 'store');
    Route::put('/empresas/{id}', 'update');
    Route::delete('/empresas/{id}', 'destroy');
});
Route::controller(PersonasController::class)->group(function () {
    Route::get('/personas', 'index');
    Route::get('/personas/{id}', 'show');
    Route::post('/personas', 'store');
    Route::put('/personas/{id}', 'update');
    Route::delete('/personas/{id}', 'destroy');
});

Route::controller(PostulacionesController::class)->group(function () {
    Route::get('/postulaciones', 'index');
    Route::get('/postulaciones/{id}', 'show');
    Route::post('/postulaciones', 'store');
    Route::put('/postulaciones/{id}', 'update');
    Route::delete('/postulaciones/{id}', 'destroy');
});