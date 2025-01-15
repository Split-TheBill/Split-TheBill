<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\LoginController;




// Route default untuk API
Route::middleware('api')->group(function () {
    Route::get('/products', [App\Http\Controllers\ProductController::class, 'index']);
    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});
