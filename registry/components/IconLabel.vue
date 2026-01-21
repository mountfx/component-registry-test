<script setup lang="ts">
import Icon from "@/components/Icon.vue";
const props = defineProps<{ iconPrefix?: string }>();
</script>

<template>
  <Icon v-if="props.iconPrefix" :icon="props.iconPrefix" />
  <span class="text"><slot /></span>
  <Icon v-if="props.iconPostfix" :icon="props.iconPostfix" />
</template>

<style scoped>
span.text {
  padding-inline: 4px;
}
</style>
