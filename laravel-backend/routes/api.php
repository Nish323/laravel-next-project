<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/test', function () {
    return response()->json(['message' => 'API SUCCESS (Laravel 11)']);
});

Route::get('/posts', [PostController::class, 'index']);
