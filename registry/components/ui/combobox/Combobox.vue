<script setup lang="ts">
import { Presence } from "@ark-ui/vue/presence";
import { Combobox, useListCollection } from '@ark-ui/vue/combobox';
import { useFilter } from '@ark-ui/vue/locale';

import Button from "@/components/ui/button/Button.vue";
import Icon from "@/components/ui/icon/Icon.vue";

const filters = useFilter({ sensitivity: 'base' });

const { collection, filter } = useListCollection({
  initialItems: ['React', 'Solid', 'Vue', 'Svelte'],
  filter: filters.value.contains,
});

const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
  filter(details.inputValue)
};

const props = withDefaults(defineProps<{
  size: "s" | "m" | "l",
  label?: string,
}>(), {
  size: "m",
});
</script>

<template>
  <Combobox.Root
    class="field"
    inputBehavior="autohighlight"
    :data-size="props.size"
    :collection="collection"
    @input-value-change="handleInputChange">
    <Combobox.Context v-slot="context">
      <Combobox.Label class="label" v-if="props.label">{{ props.label }}</Combobox.Label>
      <Combobox.Control class="input" :class="{ empty: !context.hasSelectedItems }">
        <Combobox.Input placeholder="Select a framework" />
        <Combobox.ClearTrigger v-if="context.hasSelectedItems" asChild>
          <Icon icon="close"></Icon>
          <!-- <Button variant="transparent" :size="props.size" iconPrefix="close" /> -->
        </Combobox.ClearTrigger>
        <Combobox.Trigger v-else asChild>
          <Icon icon="drop-down"></Icon>
          <!-- <Button variant="transparent" :size="props.size" iconPrefix="drop-down" /> -->
        </Combobox.Trigger>
      </Combobox.Control>
      <Presence :present="context.open" lazyMount unmountOnExit>
        <Teleport to="body">
          <Combobox.Positioner>
            <Combobox.Content class="item-list" :data-size="props.size">
              <Combobox.Item class="item" v-for="item in collection.items" :key="item" :item="item">
                <Combobox.ItemText>{{ item }}</Combobox.ItemText>
                <Combobox.ItemIndicator><Icon icon="checkmark"></Icon></Combobox.ItemIndicator>
              </Combobox.Item>
            </Combobox.Content>
          </Combobox.Positioner>
        </Teleport>
      </Presence>
    </Combobox.Context>
  </Combobox.Root>
</template>

<style scoped>
[data-scope="presence"] {
  &[data-part="root"] {
    display: contents;
  }
}
[data-scope="combobox"] {
  &[data-part="control"] {
    border-radius: var(--border-radius);
    display: inline-flex;
    justify-content: space-between;
    padding: var(--padding);
    --icon-color: var(--color-main-12);

    &.empty {
      --icon-color: var(--color-main-6);
    }
  }

  &[data-part="trigger"], &[data-part="clear-trigger"] {
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      left: calc(var(--padding) * -1);
      top: calc(var(--padding) * -1);
      right: calc(var(--padding) * -1);
      bottom: calc(var(--padding) * -1);
    }
  }

  &[data-part="input"] {
    background-color: transparent;
    width: 100%;
    border: none;
    outline: none;
    padding-inline: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &[data-part="item-text"] {
    padding-inline: 4px;
  }

  &[data-part="item-indicator"][data-state="checked"] {
    display: flex;
  }

  &[data-part="content"][data-empty] {
    display: none;
  }
}
</style>
