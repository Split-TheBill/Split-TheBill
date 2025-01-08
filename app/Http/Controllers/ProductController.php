<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
{
    // Pastikan kolom prices ada di dalam query
    $products = Product::select('id', 'name', 'price', 'price_per_month', 'image', 'description', 'created_at', 'updated_at')->get();

    return response()->json($products);
}
}



