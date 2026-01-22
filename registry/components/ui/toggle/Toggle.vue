<script setup lang="ts">
import { Toggle } from "@ark-ui/vue/toggle";
import { ref } from "vue";

const pressed = ref(false);
</script>

<template>
  <Toggle.Root asChild v-model:pressed="pressed">
    <slot v-if="pressed" name="on" />
    <slot v-else name="off" />
  </Toggle.Root>
</template>
