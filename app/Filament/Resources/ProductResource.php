<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Grid;


class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

public static function form(Form $form): Form
{
    return $form
        ->schema([
            Card::make([
                TextInput::make('name')
                    ->label('Nama Produk')
                    ->required(),
                FileUpload::make('image')
                    ->label('Gambar Produk')
                    ->image()
                    ->directory('products')
                    ->required(),
                TextInput::make('price')
                    ->label('Harga Produk (Umum)')
                    ->numeric()
                    ->required(),
                TextInput::make('price_per_month')
                    ->label('Harga Langganan (Per Bulan)')
                    ->numeric()
                    ->required(),
            ]),
        ]);
}

public static function table(Table $table): Table
{
    return $table
        ->columns([
            TextColumn::make('name')
                ->label('Nama Produk')
                ->searchable()
                ->sortable(),
            ImageColumn::make('image')
                ->label('Gambar')
                ->circular(),
            TextColumn::make('price')
                ->label('Harga Umum')
                ->money('idr', true),
            TextColumn::make('price_per_month')
                ->label('Harga Per Bulan')
                ->money('idr', true), // Format sebagai mata uang
        ]);
}
    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }

}
