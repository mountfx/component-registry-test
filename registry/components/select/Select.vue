<script setup lang="ts">
import { ref } from "vue";
import { Field } from "@ark-ui/vue/field";
import { Presence } from '@ark-ui/vue/presence';
import { Select, createListCollection } from '@ark-ui/vue/select';
import Icon from "@/components/icon/Icon.vue";

const props = withDefaults(defineProps<{
  label?: string;
  help?: string;
  error?: string;
  placeholder?: string;
  multiple?: boolean;
  size?: "m";
  items: { label: string, value: string, disabled?: boolean }[];
}>(), {
  size: "m",
});

const collection = createListCollection({ items: props.items });
</script>

<template>
  <Field.Root class="field">
    <Field.Label class="label" v-if="props.label">{{ props.label }}</Field.Label>
    <Select.Root :multiple="multiple" :data-size="props.size" :collection="collection">
      <Select.Context v-slot="context">
        <Select.Control>
          <Select.Trigger class="input" :data-size="props.size" tabindex="0" :data-empty="context.empty">
            <Select.ValueText :placeholder="props.placeholder" />
            <Select.Indicator v-if="context.empty" asChild>
              <Icon icon="drop_down"></Icon>
            </Select.Indicator>
            <Select.ClearTrigger v-else asChild>
              <Icon icon="close"></Icon>
            </Select.ClearTrigger>
          </Select.Trigger>
        </Select.Control>
        <Presence :present="context.open" lazyMount unmountOnExit>
          <Teleport to="body">
            <Select.Positioner>
              <Select.Content class="item-list" :data-size="props.size">
                  <Select.Item class="item" v-for="item in collection.items" :key="item.value" :item="item">
                    <Select.ItemText>{{ item.label }}</Select.ItemText>
                    <Select.ItemIndicator>
                      <Icon icon="checkmark"></Icon>
                    </Select.ItemIndicator>
                  </Select.Item>
              </Select.Content>
            </Select.Positioner>
          </Teleport>
        </Presence>
        <Select.HiddenSelect />
      </Select.Context>
    </Select.Root>
    <Field.HelperText v-if="props.help">{{ props.help }}</Field.HelperText>
    <Field.ErrorText v-if="props.error">{{ props.error }}</Field.ErrorText>
  </Field.Root>
</template>

<style scoped>
[data-scope="select"] {
  &[data-placeholder-shown] {
    color: var(--color-main-3);
  }

  &[data-part="content"] {
    width: var(--reference-width);
  }

  &[data-part="item-indicator"][data-state="checked"] {
    display: flex;
  }

  &[data-part="trigger"] {
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: var(--padding);
    border-radius: var(--border-radius);

    &[data-empty="true"] {
      --icon-color: var(--color-main-2);
    }
  }

  &[data-part="item-text"] {
    padding-inline: 4px;
  }

  &[data-part="value-text"] {
    padding-inline: 4px;
    display: inline;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
