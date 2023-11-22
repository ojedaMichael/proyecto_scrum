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
        Schema::create('skilles_personas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_personas');
            $table->foreign('id_personas')->references('id')->on('personas')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('id_skill');
            $table->foreign('id_skill')->references('id')->on('skilles')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skilles_personas');
    }
};
