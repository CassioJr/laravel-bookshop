<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">📚MyBookShop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                     <i class="fas fa-bars"></i>
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto py-4 py-lg-0 px-lg-5 mb-2">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#" v-if="authenticated">Meus pedidos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Carrinho</a>
                    </li>
                    <li class="nav-item dropdown" v-if="hasAuthority('ROLE_ADMIN') && authenticated">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Admin
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/book/register">Registrar Livro</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Listar registro de livros</a></li>
                        </ul>
                    </li>
                    <li class="nav-item" v-if="!authenticated">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                    <li class="nav-item" v-if="authenticated">
                        <a class="nav-link" type="button" v-on:click="logout()">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" src="./navbar.component.ts"></script>
