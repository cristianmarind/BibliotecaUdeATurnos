<template>
  <div class="container-fluid">
    <div class="row">
      <span class="col-12 font-weight-bold" v-text="filter.label" />
    </div>
    <form class="row">
      <div v-for="(item, index) in filter.options" :key="index" class="col-6 d-flex align-items-center mb-2">
        <div class="d-flex align-items-center">
          <input v-model="services" :id="`service-${index}`" class="mr-3" type="checkbox" :value="item.id">
          <label class="m-0" :for="`service-${index}`" v-text="item.label" />
        </div>
      </div>
      <div class="col-6 ">
        <button class="custom-btn custom-bg-light-gray custom-text-green border">Buscar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["library"],
  data(){
    return {
      filter: this.$store.getters.filters.services,
      services: []
    }
  },
  created(){
  }
};
</script>

<style>
</style>