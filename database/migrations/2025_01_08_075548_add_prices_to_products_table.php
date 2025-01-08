<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPricesToProductsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->json('prices')->nullable(); // Tambahkan kolom JSON
        });
    }

    /**
     * Reverse the migrations.
     */
   public function down(): void
{
    Schema::table('products', function (Blueprint $table) {
        if (Schema::hasColumn('products', 'prices')) {
            $table->dropColumn('prices');
        }
    });
}

}
