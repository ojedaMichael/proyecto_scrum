<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('empleos', function (Blueprint $table) {
            $table->id();
            $table->string('cargo');
            $table->string('detallesEmpleo');
            $table->string('requisitos');
            $table->string('ubicacion');
            $table->string('modalidad');
            $table->float('salario');
            $table->unsignedBigInteger('idEmpresa');
            $table->foreign('idEmpresa')->references('id')->on('empresas')->onDelete('cascade')->onUpdate('cascade');  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empleos');
    }
};
