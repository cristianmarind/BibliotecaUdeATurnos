<template>
  <div id="app">
    <router-view/>
    <b-modal id="bv-modal-message" hide-footer>
      <template v-slot:modal-title>
        <span class="text-light-gray">
          <strong class="custom-text-green">BiblioApp</strong>
        </span>
      </template>
      <div class="d-block text-center">
        <span v-text="alert.message" />
      </div>
      <button 
        @click="$bvModal.hide('bv-modal-message')"
        class="custom-btn w-100 mt-2 text-light" 
        :class="classBtnMessage"
      >
        Cerrar
      </button>
    </b-modal>
  </div>
</template>

<script>
import { EventBus } from '@/eventBus.js';

export default {
  data(){
    return {
      alert: {
        messageType: 'correct',
        message: ''
      }
    }
  },
  created(){
    EventBus.$on('openMessage', (message, messageType) => {
      this.alert.message = message
      this.alert.messageType = messageType
      this.$bvModal.show("bv-modal-message");
    });
  },
  computed: {
    classBtnMessage(){
      return {
        'custom-bg-green': this.alert.messageType == 'correct',
        'bg-danger': this.alert.messageType == 'error'
      }
    }
  },
}
</script>

<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/custom-style.scss";
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/src/index.scss';

</style>
