<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { icon, type Icon } from "@/assets/icons.ts";

interface Props {
  icon: Icon; 
};

const props = defineProps(["icon"]);
</script>

<template>
  <span data-scope="icon" v-html="icon[props.icon]"></span>
</template>
