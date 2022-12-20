<template>
  <div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
      v-if="!isLoaded"
    >
      <span class="w-10 h-10">
        <Loader></Loader>
      </span>
    </div>
    <router-view @loaded="loaded"></router-view>
  </div>
</template>

<script setup>
import Loader from "@/components/Loader.vue";
import { onMounted, ref } from "vue";
const isLoaded = ref(false);

function loaded() {
  isLoaded.value = true;
}

onMounted(() => {
  loaded();
});
</script>
