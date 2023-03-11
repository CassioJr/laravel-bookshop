<template>
    <section class="page-section">
        <h1 class="text-center mt-4">Login</h1>
        <form action="" method="POST" class="container shadow-lg p-3 mb-5 bg-light rounded col-md-4 col-md-offset-4">
            <div class="form-floating mb-2">
                <input type="email" id="email" name="email" class="form-control" placeholder="name@example.com">
                <label for="email">Email</label>
            </div>
            <div class="form-floating">
                <input type="password" id="pasword" name="password" class="form-control" placeholder="Password">
                <label for="pássword">Senha</label>
            </div>
            <div class="d-grid gap-2">
                <button class="mt-2 mb-2 btn btn-primary" type="submit">Login</button>
            </div>
            <a class="d-flex justify-content-center mt-2 mb-2" href="/register">Não possui uma conta? cadastra-se</a>
            <a class="d-flex justify-content-center" href="/forgot-password">Esqueci minha senha</a>
        </form>
    </section>
</template>