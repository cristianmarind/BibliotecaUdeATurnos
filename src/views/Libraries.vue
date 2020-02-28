<template>
  <section class="librariesPage custom-bg-green d-flex flex-column justify-content-around">
      <button v-for="(item, index) in libraries" @click="$router.push({path: `/library/${index}`})" :key="index" class="libraryContainer">
          <div class="w-100">
              <img class="w-100 h-auto shadow" :src="item.image" alt="" srcset="">
          </div>
          <div class="text-center">
              <span class="text-light" v-text="item.name"/>
          </div>
      </button>
  </section>
</template>

<script>
export default {
    data(){
        return {
            libraries: this.$store.getters.libraries
        }
    },
    methods: {
    }
}
</script>

<style>
.librariesPage{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.libraryContainer{
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
}
.libraryContainer:focus{
    transform: scale(1.1);
}
</style>