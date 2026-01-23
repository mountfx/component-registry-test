<script setup lang="ts">
import Icon from "@/components/ui/icon/Icon.vue";

type Props = {
  size?: "l" | "m" | "s";
  variant?: "solid" | "subtle" | "surface" | "outline" | "plain";
  align?: "center" | "space-between" | "spread";
  iconPrefix?: string;
  iconPostfix?: string;
};
const props = withDefaults(defineProps<Props>(), {
  size: "m",
  variant: "subtle",
});
const slots = defineSlots();
</script>

<template>
  <button
    tabindex="0"
    :disabled="props.disabled"
    :data-size="props.size"
    :data-variant="props.variant"
    :data-align="props.align">
    <span :style="{ display: props.align === 'spread' ? 'contents' : 'inline-flex' }">
      <Icon v-if="props.iconPrefix" :icon="props.iconPrefix" />
      <span class="text" v-if="slots.default">
        <slot />
      </span>
    </span>
    <Icon v-if="props.iconPostfix" :icon="props.iconPostfix" />
  </button>
</template>

<style scoped>
button {
  color: var(--color-fg-idle);
  background-color: var(--color-bg-idle);
  padding: var(--padding);
  border-radius: var(--border-radius);

  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border: none;
  outline: none;
  font-size: var(--text-base);
  line-height: var(--text-base-lh);
  cursor: pointer;

  & span.text {
    padding-inline: 4px;
  }

  &[data-align="space-between"] {
    justify-content: space-between;
  }

  &[data-size="l"], [data-size="l"] & {
    --border-radius: 28px;
    --padding: 16px;
  }
  
  &[data-size="m"], [data-size="m"] & {
    --border-radius: 24px;
    --padding: 12px;
  }
  
  &[data-size="s"], [data-size="s"] & {
    --border-radius: 20px;
    --padding: 8px;
  }

  &[data-variant="accent"] {
    --color: var(--color-accent-1);
    --background-color: var(--color-accent-12);
    --icon-color: var(--color);

    color: var(--color);
    background-color: var(--background-color);

    &:hover {
      --background-color: var(--color-accent-9);
    }

    &:focus-visible {
      --background-color: var(--color-accent-9);
      box-shadow: 0 0 0 4px var(--color-accent-3);
    }

    &:active {
      --background-color: var(--color-accent-8);
    }

    &:disabled {
      --color: var(--color-main-3);
      --background-color: var(--color-accent-6);
    }
  }

  &[data-variant="solid"] {
    --color: var(--color-main-1);
    --background-color: var(--color-main-12);
    --icon-color: var(--color);

    color: var(--color);
    background-color: var(--background-color);

    &:hover {
      --background-color: var(--color-main-9);
    }

    &:focus-visible {
      --background-color: var(--color-main-9);
      box-shadow: 0 0 0 4px var(--color-main-3);
    }

    &:active {
      --background-color: var(--color-main-8);
    }

    &:disabled {
      --color: var(--color-main-3);
      --background-color: var(--color-main-6);
    }
  }

  &[data-variant="subtle"] {
    --color: var(--color-main-12);
    --background-color: var(--color-main-4);
    --icon-color: var(--color);

    color: var(--color);
    background-color: var(--background-color);

    &:hover {
      --background-color: var(--color-main-5);
    }

    &:focus-visible {
      --background-color: var(--color-main-5);
      box-shadow: 0 0 0 4px var(--color-main-3);
    }

    &:active {
      --background-color: var(--color-main-6);
    }

    &:disabled {
      --color: var(--color-main-6);
      --background-color: var(--color-main-3);
    }
  }

  &[data-variant="surface"] {
    --color: var(--color-main);
    --background-color: var(--color-main-5);
    --icon-color: var(--color);

    color: var(--color);
    background-color: var(--background-color);

    &:hover {
      --background-color: var(--color-main-4);
    }

    &:focus-visible {
      --background-color: var(--color-main-4);
    }

    &:active {
      --background-color: var(--color-main-3);
    }

    &:disabled {
      --color: var(--color-main-3);
      --background-color: var(--color-main-6);
    }
  }

  &[data-variant="outline"] {
    --color: var(--color-main-2);
    --border-color: var(--color-main-4);
    --icon-color: var(--color);

    color: var(--color);
    box-shadow: inset 0 0 0 1px var(--border-color);

    &:hover {
      --color: var(--color-main-1);
      --border-color: var(--color-main-3);
    }

    &:focus-visible {
      --color: var(--color-main-1);
      --border-color: var(--color-main-3);
    }

    &:active {
      --color: var(--color-main-1);
      --border-color: var(--color-main-1);
    }
  }

  &[data-variant="plain"] {
    --color: var(--color-main-12);
    --background-color: transparent;
    --icon-color: var(--color);

    color: var(--color);
    background-color: var(--background-color);

    &:hover {
      --background-color: var(--color-main-3);
    }

    &:focus-visible {
      --background-color: var(--color-main-3);
    }

    &:active {
      --background-color: var(--color-main-4);
    }

    &:disabled {
      --color: var(--color-main-3);
      --background-color: var(--color-main-2);
    }
  }

  &[data-variant="transparent"] {
    --color: var(--color-main-7);
    --icon-color: var(--color);

    color: var(--color);

    &:hover {
      --color: var(--color-main-9);
    }

    &:focus-visible {
      background-color: var(--color-main-3);
      --color: var(--color-main-12);
    }

    &:active {
      --color: var(--color-main-12);
    }
  }
}
</style>
