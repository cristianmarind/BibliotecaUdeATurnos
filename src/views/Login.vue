<template>
  <section class="loginPage d-flex justify-content-center">
    <div class="containerLogin d-flex flex-column align-items-center">
      <div class="logoDiv">
        <img class="w-100 h-auto" src="@/assets/universidad/logo_verde.png" alt srcset />
      </div>
      <span class="mb-2 custom-text-green font-weight-bold font-size-large">Iniciar sesión</span>
     <div class="custom-input w-100">
        <input
          id="username"
          v-model="user.usuario"
          type="email"
          class="mb-2"
          placeholder="Usuario"
        >
      </div>
      <div class="custom-input w-100">
        <input
          id="password"
          v-model="user.clave"
          type="password"
          placeholder="Contraseña"
        >
      </div>
      <button 
        @click="login"
        class="custom-btn custom-btn-success w-100 mt-2"
      >
        Ingresar
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      user: {
        usuario: '',
        clave: ''
      }
    }
  },
  methods: {
    login(){
      this.$store.getters.providerServices.login({"usuario": "cristian.marind", "clave": "racoso02"})
      this.$router.push({
        path: '/libraries'
      })
    }
  }
};
</script>

<style>
.containerLogin {
  max-width: 90%;
  min-width: 280px;
}
.logoDiv{
  max-width: 10em;
}
</style>