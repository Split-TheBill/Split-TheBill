<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        Product::create([
            'name' => 'Product 1',
            'description' => 'This is a description for Product 1.',
            'price' => 10.00,
        ]);

        Product::create([
            'name' => 'Product 2',
            'description' => 'This is a description for Product 2.',
            'price' => 20.00,
        ]);
    }
}   
