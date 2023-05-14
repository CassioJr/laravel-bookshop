<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Support\Facades\DB;

trait AssignUserToRoleTrait
{

    protected function assignRole(User $user): void
    {
        DB::table('model_has_roles')->insert(["user_id" => $user->id, "role_id" => 2]);
    }

}
