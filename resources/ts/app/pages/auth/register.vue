<template>
    <section class="page-section">
        <h1 class="text-center mt-4">Registre-se agora</h1>
        <form action="" method="POST" class="container col-md-4 col-md-offset-4">
            <div class="form-group mb-2">
                <label for="userName" class="form-label">Nome</label>
                <input type="text" id="userName" name="userName" class="form-control">
            </div>
            <div class="form-group mb-2">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-control">
            </div>
            <div class="form-group mb-2">
                <label for="password" class="form-label">Senha</label>
                <input type="password" id="password" name="password" class="form-control">
            </div>
            <div class="form-group mb-2">
                <label for="confirmPassword" class="form-label">Confirmar Senha</label>
                <input type="password" id="confirmPassword" name="confirmPassword" class="form-control">
            </div>
            <div class="d-grid gap-2">
                <button class="mt-2 mb-2 btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts" src="./register.component"></script>