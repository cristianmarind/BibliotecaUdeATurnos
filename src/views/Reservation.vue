<template>
  <div class="w-100vw h-100vh custom-bg-green text-light">
    <div class="text-center font-weight-bold pt-3">
      <span v-text="library.name" />
    </div>
    <div class="mt-2 px-3">
      <span class="">Resultados de busqueda</span>
    </div>
    <div v-if="library" class="px-2">
      <div class="computers">
        <div v-for="(item, index) in computers" :key="index" class="input-group">
          <div class="input-group-prepend rounded-0">
            <div class="input-group-text rounded-0">
              <input v-model="pcSelected" :value="item.nombrePc" :id="item.nombrePc" type="radio">
            </div>
          </div>
          <label class="form-control rounded-0" :for="item.nombrePc" v-text="item.nombrePc"/>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <button class="custom-btn">Reservar</button>
      </div>
      <div class="mt-4">
        <div class="text-center">
          <span>Mapa de la sala</span>
        </div>
        <div>
          <img
            class="w-100 h-auto"
            src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
          />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      libraryIndex: this.$route.params.libraryIndex,
      library: undefined,
      computers: [],
      pcSelected: ""
    }
  },
  created() {
    this.computers = this.$store.getters.reservation.pcs
    this.library = this.$store.getters.libraries[this.libraryIndex]
  }
};
</script>

<style scoped>
.computers{
  max-height: 30vh;
  overflow-y: auto;
}
</style>