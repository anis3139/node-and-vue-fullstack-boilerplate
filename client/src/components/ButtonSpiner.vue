<template>
  <div class="grid place-content-center grid-flow-col gap-2">
    <slot class="font-bold"></slot>
    <span class="w-5 h-5">
      <Loader></Loader>
    </span>
  </div>
</template>
<script setup>
import Loader from "@/components/Loader.vue";
</script>
