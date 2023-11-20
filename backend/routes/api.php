<?php

use App\Http\Controllers\EmpresasController;
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