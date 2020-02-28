<template>
  <div class="w-100vw h-100vh custom-bg-green text-light">
    <div class="text-center font-weight-bold pt-3">
      <span v-text="library.name" />
    </div>
    <div class="mt-2 px-3">
      <span class="">Resultados de busqueda</span>
    </div>
    <div class="px-2">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input type="radio">
          </div>
        </div>
        <label class="form-control" v-text="'ss'"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      libraryIndex: this.$route.params.libraryIndex,
      library: undefined
    }
  },
  created() {
    this.library = this.$store.getters.libraries[this.libraryIndex]
  }
};
</script>

<style>
</style>