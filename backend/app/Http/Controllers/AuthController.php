<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if (!Auth::attempt($request->only('email', 'password'))) {

            throw ValidationException::withMessages([
                'email' => ['Credenciales no válidas'],
            ]);
        }
        $user = Auth::user();
        return response()->json(['message' => 'Inicio de sesión exitoso', 'user' => $user]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users|max:255',
            'password' => 'required|string|min:6',
        ]);

        $user = \App\Models\User::create([
            'email' => "hola@hola",
            'password' => bcrypt("hola"),
        ]);

        return "ingreso";
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Sesión cerrada correctamente']);
    }

    public function user(Request $request)
    {
        return $request->user();
    }
}
