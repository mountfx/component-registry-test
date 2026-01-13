<script setup lang="ts">
import { Popover } from '@ark-ui/vue/popover'
import Button from "../button/Button.Vue"
</script>

<template>
  <Popover.Root>
    <Popover.Trigger asChild>
      <Button>
        <template #text>
          <slot name="button" />
        </template>
        <Popover.Indicator>{{ '>' }}</Popover.Indicator>
      </Button>
    </Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Title>
          <slot name="title"/>
        </Popover.Title>
        <Popover.Description>
          <slot name="description"/>
        </Popover.Description>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
</template>

<style scoped>
[data-scope='popover'][data-part='content'] {
  background: white;
  padding: 32px;
  border-radius: 16px;
  position: relative;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  min-width: 240px;
  max-width: var(--available-width);
  box-sizing: border-box;
}
[data-scope='popover'][data-part='content'][data-state='open'] {
  animation: fadeIn 0.25s ease-out;
}

[data-scope='popover'][data-part='content'][data-state='closed'] {
  animation: fadeOut 0.2s ease-in;
}

[data-scope='popover'][data-part='title'] {
  font-weight: bold;
  text-transform: uppercase;
}

[data-scope='popover'][data-part='close-trigger'] {
  position: absolute;
  right: 4px;
  top: 4px;
}

[data-scope='popover'][data-part='close-trigger'] {
  position: absolute;
  right: 4px;
  top: 4px;
}

[data-scope='popover'][data-part='anchor'] {
  display: inline;
  margin-left: 200px;
}

[data-scope='popover'][data-part='indicator'][data-state='open'] {
  rotate: 90deg;
}


[data-scope='popover'][data-part='trigger'][data-state='open'] {
  background-color: #333;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
