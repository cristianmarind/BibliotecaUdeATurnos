<template>
  <div class="container-fluid bg-light text-dark rounded border">
    <form @submit.prevent="applyFilter" class="row">
      <div class="col-6 custom-input mt-2">
        <label for="dia">Día</label>
        <select v-model="filter.day" id="dia" required>
          <option :value="formOptions.currentDate.getDate()">Hoy</option>
          <option :value="formOptions.nextDate.getDate()">
            Mañana
          </option>
        </select>
      </div>
      <div class="col-6 custom-input mt-2">
        <label for="horas">Número de horas</label>
        <select v-model="filter.nroHours" id="horas" required>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="col-6 custom-input mt-2">
        <label for="hora1">Hora 1</label>
        <select v-model="filter.hour1" id="hora1" required>
          <option v-for="(item, index) in formOptions.hours" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div v-if="filter.nroHours == 2" class="col-6 custom-input mt-2">
        <label for="hora2">Hora 2</label>
        <select v-model="filter.hour2" id="hora2" required>
          <option v-for="(item, index) in formOptions.hours" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="col-12 my-2">
        <button class="custom-btn custom-bg-green text-light border">Buscar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["library"],
  data(){
    return {
      services: [],
      formOptions: {
        currentDate: new Date(Date.now()),
        nextDate: new Date(Date.now() + 24*60*60*1000),
        hours: []
      },
      filter: {
        day: new Date(Date.now()).getDate(),
        nroHours: 1,
        hour1: new Date(Date.now()).getHours(),
        hour2: new Date(Date.now() + 60*60*1000).getHours()
      }
    }
  },
  created(){
    for (let index = this.formOptions.currentDate.getHours(); index <= 20; index++) {
      this.formOptions.hours.push(index)
    }
    this.applyFilter()
  },
  methods: {
    applyFilter(){
      this.$emit('applyFilter', this.filter)
    }
  }
};
</script>

<style>
</style>