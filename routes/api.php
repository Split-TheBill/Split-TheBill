<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route default untuk API
Route::middleware('api')->group(function () {
    Route::get('/products', [App\Http\Controllers\ProductController::class, 'index']);
});
