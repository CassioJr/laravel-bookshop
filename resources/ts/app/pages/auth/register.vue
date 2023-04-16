<template>
    <section class="page-section">
        <h1 class="text-center mt-4">Registre-se agora</h1>
        <form action="" method="POST" class="container shadow-lg p-3 mb-5 bg-light rounded col-md-4 col-md-offset-4"
              novalidate v-on:submit.prevent="submit">
            <div class="form-group mb-2">
                <label for="userName" class="form-label">Nome</label>
                <input type="text" id="userName" name="userName" class="form-control" data-cy="userName"
                       :class="{
                      'is-valid': !$v.user.name.$invalid,
                      'is-invalid': $v.user.name.$invalid,
                    }"
                       v-model="$v.user.name.$model">
            </div>
            <div class="form-group mb-2">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-control" :class="{
                      'is-valid': !$v.user.email.$invalid,
                    'is-invalid': $v.user.email.$invalid,
                    }"
                       v-model="$v.user.email.$model">
            </div>
            <div class="form-group mb-2">
                <label for="password" class="form-label">Senha</label>
                <input type="password" id="password" name="password" class="form-control"
                       :class="{
                      'is-valid': !$v.user.password.$invalid,
                       'is-invalid': $v.user.password.$invalid,
                    }"
                       v-model="$v.user.password.$model">
            </div>
            <div class="form-group mb-2">
                <label for="confirmPassword" class="form-label">Confirmar Senha</label>
                <input type="password" id="confirmPassword" name="confirmPassword" class="form-control"
                       :class="{
                      'is-valid': !$v.user.confirmPassword.$invalid,
                      'is-invalid': $v.user.confirmPassword.$invalid,
                    }"
                       v-model="$v.user.confirmPassword.$model">
            </div>
            <div class="d-grid gap-2">
                <button class="mt-2 mb-2 btn btn-success" type="submit" :disabled="$v.user.$invalid || isSaving">
                    Registrar
                </button>
                <a class="mt-2 mb-2 text-center" href="/login">Já possui uma conta? Realize seu login.</a>
            </div>
        </form>
    </section>
</template>

<script lang="ts" src="./register.component.ts"></script>
