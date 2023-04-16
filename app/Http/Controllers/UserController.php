<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller
{


    /**
     * Store a newly created resource in storage.
     *
     * @param UserRequest $request
     */
    public function store(UserRequest $request)
    {
        User::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return UserResource
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }
}
