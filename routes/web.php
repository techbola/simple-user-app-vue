<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', function () {
    return view('users');
});
