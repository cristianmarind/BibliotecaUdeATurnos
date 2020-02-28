<template>
  <div>
    <SerachFilter />
    <div class="px-1">
      <div class="mt-3 mb-3">
        <span>Seleccione el piso del equipo que desea reservar.</span>
      </div>
      <div class="mt-3 bg-transparent border-bottom-dotted" no-body>
        <div class="position-relative" v-b-toggle.accordion-1>
          <img
            class="w-100 h-auto"
            src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/piso3.png"
          />
          <div class="labelPiso">PISO 3</div>
        </div>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <div
            @click="$router.push({path: `/reservation/${$route.params.libraryIndex}`})"
            class="text-dark"
          >
            <img
              class="w-100 h-auto"
              src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
            />
          </div>
        </b-collapse>
      </div>

      <div class="bg-transparent border-bottom-dotted" no-body>
        <div class="position-relative" v-b-toggle.accordion-2>
          <img
            class="w-100 h-auto"
            src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/piso2.png"
          />
          <div class="labelPiso">PISO 2</div>
        </div>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <div @click="$router.push({path: '/reservation'})" class="text-dark">
            <img
              class="w-100 h-auto"
              src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
            />
          </div>
        </b-collapse>
      </div>

      <div class="bg-transparent" no-body>
        <div class="position-relative" v-b-toggle.accordion-3>
          <img
            class="w-100 h-auto"
            src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/piso1.png"
          />
          <div class="labelPiso">PISO 1</div>
        </div>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <div @click="$router.push({path: '/reservation'})" class="text-dark">
            <img
              class="w-100 h-auto"
              src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
            />
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import SerachFilter from "@/components/generals/SerachFilter.vue";

export default {
  components: {
    SerachFilter
  }
};
</script>

<style>
.labelPiso{
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  border-radius: 2px;
  color: green;
  padding: 2px 4px;
  font-size: smaller;
}
</style>