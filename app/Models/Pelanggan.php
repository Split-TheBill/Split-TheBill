<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Pelanggan extends Model
{
    use HasFactory;

    protected $table = 'pelanggans'; // Nama tabel sesuai
    protected $fillable = ['name', 'email', 'password']; // Pastikan kolom yang dapat diisi
}
