<script setup lang="ts">
import { Checkbox } from '@ark-ui/vue/checkbox';

import Icon from "@/components/icon/Icon.vue";

const props = withDefaults(defineProps<{
  size?: "s" | "m" | "l",
}>(), {
  size: "m",
});
</script>

<template>
  <Checkbox.Root class="interactive-label" :data-size="props.size">
    <Checkbox.Control>
      <Checkbox.Indicator>
        <Icon icon="checkmark" />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.HiddenInput tabindex="0" />
  </Checkbox.Root>
</template>

<style scoped>

[data-scope="checkbox"] {
  --background-color: var(--color-main-5);

  &[data-part="root"] {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    width: fit-content;
  }

  &[data-size="s"] {
    --size: 20px;
  }

  &[data-size="m"] {
    --size: 24px;
  }

  &[data-size="l"] {
    --size: 28px;
  }

  &:hover {
    --background-color: var(--color-main-3);    
  }

  &[data-part="indicator"] {
    &[data-state="checked"] {
      display: flex;
    }
  }

  &[data-part="label"] {
    display: inline;
  }

  &[data-part="control"] {
    width: var(--size);
    height: var(--size);

    position: relative;
    background-color: var(--background-color);
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    --icon-color: var(--color-main-7);

    &[data-focus], &[data-focus-visible] {
      background-color: var(--color-main-7);
      box-shadow: inset 0 0 0 1px var(--color-main-3), 0 0 0 4px var(--color-main-6);

      &[data-state="checked"] {
        box-shadow: 0 0 0 4px var(--color-main-5);
      }
    }

    &[data-state="checked"] {
      background-color: var(--color-main);
    }
  }
}
</style>
