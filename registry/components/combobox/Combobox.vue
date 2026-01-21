<script setup lang="ts">
import { Presence } from "@ark-ui/vue/presence";
import { Combobox, useListCollection } from '@ark-ui/vue/combobox';
import { useFilter } from '@ark-ui/vue/locale';

import Button from "@/components/button/Button.vue";
import Icon from "@/components/icon/Icon.vue";

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
      <Combobox.Control class="input">
        <Combobox.Input placeholder="Select a framework" />
        <Combobox.ClearTrigger :class="{ empty: context.hasSelectedItems }" v-if="context.hasSelectedItems" asChild>
          <Button variant="transparent" :size="props.size" iconPrefix="close" />
        </Combobox.ClearTrigger>
        <Combobox.Trigger v-else asChild>
          <Button variant="transparent" :size="props.size" iconPrefix="drop_down" />
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
[data-scope="combobox"] {
  &[data-part="control"] {
    border-radius: var(--border-radius);
    display: inline-flex;
    justify-content: space-between;

    .empty {
      --icon-color: var(--color-main);
    }
  }

  &[data-part="input"] {
    background-color: transparent;
    width: 100%;
    border: none;
    outline: none;
    padding-block: var(--padding);
    padding-inline: calc(var(--padding) + 4px);
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
