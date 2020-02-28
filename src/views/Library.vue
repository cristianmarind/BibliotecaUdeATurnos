<template>
  <section class="custom-bg-green text-light w-100vw h-100vh pt-3">
    <template v-if="library !== undefined">
      <h6 class="text-center" v-text="library.name" />
      <div v-if="library.id == 1">
        <CarlosGaviria />
      </div>
      <div v-else-if="library.id == 2">
        <Artes />
      </div>
    </template>
  </section>
</template>

<script>
import CarlosGaviria from '@/components/libraries/CarlosGaviria.vue'
import Artes from '@/components/libraries/Artes.vue'

export default {
  data() {
    return {
      libraryIndex: this.$route.params.libraryIndex,
      library: undefined
    };
  },
  components: {
    CarlosGaviria, Artes
  },
  created() {
    this.library = this.$store.getters.libraries[this.libraryIndex]
  }
};
</script>

<style>
</style>