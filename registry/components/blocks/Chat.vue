<script setup lang="ts">
import { ref } from "vue";
import { Field } from '@ark-ui/vue/field';

import Button from "@/components/ui/button/Button.vue";
import Toggle from "@/components/ui/toggle/Toggle.vue";

const text = ref("");

const props = defineProps<{
  onSubmit(text: string): void;
}>();

function handleSubmit(e: KeyboardEvent) {
  e.preventDefault();
  props.onSubmit(text.value);
  text.value = "";
}
</script>

<template>
  <div class="box">
    <Field.Root>
      <Field.Textarea @keydown.enter.exact="handleSubmit" v-model="text" ref="textarea" autoresize />
    </Field.Root>
    <div class="actions">
      <div class="lhs">
        <Toggle>
          <template #off>
            <Button variant="transparent" size="s" iconPrefix="web">Search</Button>
          </template>
          <template #on>
            <Button variant="subtle" size="s" iconPrefix="web">Search</Button>
          </template>
        </Toggle>
        <Button variant="transparent" size="s" iconPrefix="attach-file">Attach</Button>
      </div>
      <Button @click="handleSubmit" variant="accent" size="s" iconPrefix="send"></Button>
    </div>
  </div>
</template>

<style scoped>
.box {
  border-radius: 32px;
  padding: 12px;
  box-shadow: inset 0 0 0 1px var(--color-main-4);

  &:hover {
    box-shadow: inset 0 0 0 1px var(--color-main-3);
  }

  &:has(*:focus) {
    box-shadow: inset 0 0 0 1px var(--color-main-3), 0 0 0 4px var(--color-main-6);
  }
}

.actions {
  display: flex;
  justify-content: space-between;
}

[data-scope="field"] {
  &[data-part="textarea"] {
  width: 100%;
    border: none;
    outline: none;
    border-radius: var(--border-radius);
    background-color: transparent;
    padding: 12px;
  }
}
</style>
