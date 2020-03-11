<template>
  <section class="custom-bg-green text-light w-100vw h-100vh overflow-auto py-3">
    <h6 class="text-center font-weight-bold font-size-x-large mb-3" v-text="library.name" />
    <div class="mx-3">
      <SerachFilter @applyFilter="applyFilter" />
    </div>
    <template v-if="library !== undefined">
      <div v-if="library.id == 1">
        <CarlosGaviria :pcs="pcs" />
      </div>
      <div v-else-if="library.id == 2">
        <Artes />
      </div>
    </template>
  </section>
</template>

<script>
import SerachFilter from "@/components/generals/SerachFilter.vue";
import CarlosGaviria from '@/components/libraries/CarlosGaviria.vue'
import Artes from '@/components/libraries/Artes.vue'

export default {
  data() {
    return {
      libraryIndex: this.$route.params.libraryIndex,
      library: undefined,
      pcs: []
    };
  },
  components: {
    CarlosGaviria, Artes, SerachFilter
  },
  created() {
    this.library = this.$store.getters.libraries[this.libraryIndex]
  },
  methods: {
    applyFilter(filter){
      this.$store.getters.providerServices.postModel(`/ListarEquiposDisponiblesPorHora.php?horaConsulta=${filter.hour1}`).then(res => {
        this.pcs = res.data
      }).catch(err => {
        console.log(err);
      })
    }
  }
};
</script>

<style>
</style>