<template>
  <div class="px-2">
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
          <div class="d-flex">
            <div
              @click="startReservation(rooms.piso3)"
              class="text-dark position-relative"
            >
              <span class="position-absolute px-2 bg-light rounded">{{ rooms.piso3.length }} pcs</span>
              <img
                class="w-100 h-auto"
                src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
              />
            </div>
            <div
              @click="startReservation(rooms.salaPatrimonial)"
              class="text-dark position-relative"
            >
              <span class="position-absolute px-2 bg-light rounded">{{ rooms.salaPatrimonial.length }} pcs</span>
              <img
                class="w-100 h-auto"
                src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
              />
            </div>
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
          <div class="d-flex">
            <div
              @click="startReservation(rooms.piso2Oriental)"
              class="text-dark position-relative"
            >
              <span class="position-absolute px-2 bg-light rounded">{{ rooms.piso2Oriental.length }} pcs</span>
              <img
                class="w-100 h-auto"
                src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
              />
            </div>
            <div
              @click="startReservation(rooms.piso2Central)"
              class="text-dark position-relative"
            >
              <span class="position-absolute px-2 bg-light rounded">{{ rooms.piso2Central.length }} pcs</span>
              <img
                class="w-100 h-auto"
                src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
              />
            </div>
            <div
              @click="startReservation(rooms.piso2Occidental)"
              class="text-dark position-relative"
            >
              <span class="position-absolute px-2 bg-light rounded">{{ rooms.piso2Occidental.length }} pcs</span>
              <img
                class="w-100 h-auto"
                src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
              />
            </div>
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
          <div class="d-flex">
            <div
              @click="startReservation(rooms.plantaBaja)"
              class="text-dark position-relative"
            >
              <span class="position-absolute px-2 bg-light rounded">{{ rooms.plantaBaja.length }} pcs</span>
              <img
                class="w-100 h-auto"
                src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
              />
            </div>
            <div
              @click="startReservation(rooms.plantaBajaAudiovisuales)"
              class="text-dark position-relative"
            >
              <span class="position-absolute px-2 bg-light rounded">{{ rooms.plantaBajaAudiovisuales.length }} pcs</span>
              <img
                class="w-100 h-auto"
                src="@/assets/universidad/bibliotecas/CarlosGaviria/pisos/salas.png"
              />
            </div>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/eventBus.js";

export default {
  props: ["pcs"],
  data() {
    return {
      rooms: {
        piso3: [],
        salaPatrimonial: [],
        piso2Oriental: [],
        piso2Occidental: [],
        piso2Central: [],
        plantaBaja: [],
        plantaBajaAudiovisuales: []
      }
    };
  },
  watch: {
    pcs() {
      this.rooms.piso3 = [],
      this.rooms.salaPatrimonial = []
      this.rooms.piso2Oriental = []
      this.rooms.piso2Occidental = []
      this.rooms.piso2Central = []
      this.rooms.plantaBaja = []
      this.rooms.plantaBajaAudiovisuales = []
      for (const pc of this.pcs) {
        switch (pc.nombreSala) {
          case "Piso 3 - Sector Central":
            this.rooms.piso3.push(pc)
            break;
          case "Sala patrimonial":
            this.rooms.salaPatrimonial.push(pc)
            break;
          case "Piso 2 - Costado Oriental":
            this.rooms.piso2Oriental.push(pc)
            break;
          case "Piso 2 - Costado Occidental":
            this.rooms.piso2Occidental.push(pc)
            break;
          case "Piso 2 - Sector Central ":
            this.rooms.piso2Central.push(pc)
            break;
          case "Planta Baja":
            this.rooms.plantaBaja.push(pc)
            break;
          case "Planta Baja - Audiovisuales":
            this.rooms.plantaBajaAudiovisuales.push(pc)
            break;
        }
      }
    }
  },
  methods: {
    startReservation(pcs){
      if (pcs.length == 0) {
        EventBus.$emit(
          "openMessage",
          "Debe de seleccionar una sala con pcs disponibles.",
          "error"
        );
      }
      this.$store.commit("setReservation", {
        pcs: pcs
      })
      this.$router.push({path: `/reservation/${this.$route.params.libraryIndex}`})
    }
  }
};
</script>

<style>
.labelPiso {
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