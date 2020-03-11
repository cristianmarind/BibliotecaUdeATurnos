<template>
  <section class="loginPage d-flex justify-content-center mt-3">
    <form @submit.prevent="login" class="containerLogin mt-5 d-flex flex-column align-items-center">
      <div class="logoDiv">
        <img class="w-100 h-auto" src="@/assets/universidad/logo_verde.png" alt srcset />
      </div>
      <span class="mb-2 custom-text-green font-weight-bold font-size-large">Iniciar sesión</span>
      <div class="custom-input w-100">
        <input
          id="username"
          v-model="user.username"
          type="text"
          class="mb-2"
          required
          placeholder="Usuario"
        />
      </div>
      <div class="custom-input w-100">
        <input 
          id="password" 
          v-model="user.password" 
          type="password" 
          placeholder="Contraseña" 
          required
        />
      </div>
      <button class="custom-btn custom-btn-success w-100 mt-2">Ingresar</button>
    </form>
  </section>
</template>

<script>
import { EventBus } from "@/eventBus.js";

export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store.getters.providerServices
        .login({ usuario: this.user.username, clave: this.user.password })
        .then(() => {
          this.$router.push({
            path: '/libraries'
          })
        })
        .catch(err => {
          EventBus.$emit(
            "openMessage",
            err.msg,
            "error"
          );
        });
    }
  }
};
</script>

<style>
.loginPage {
  width: 100vw;
  height: 100vh;
}
.containerLogin {
  max-width: 90%;
  min-width: 280px;
}
.logoDiv {
  max-width: 10em;
}
</style>