<script setup lang="ts">
import { useForwardProps } from "@ark-ui/vue";
import { Field, type FieldRootProps } from "@ark-ui/vue/field";

type Props = {
  size?: "l" | "m" | "s";
  label?: string;
  help?: string;
  error?: string;
  placeholder?: string;
};

const props = withDefaults(defineProps<Props>(), {
  size: "m",
});

const forwarded = useForwardProps(props);
</script>

<template>
  <Field.Root class="field" v-bind="forwarded">
    <Field.Label class="label" v-if="props.label">{{ props.label }}</Field.Label>
    <Field.Input class="input" :data-size="props.size" :placeholder="props.placeholder" />
    <Field.HelperText v-if="props.help">{{ props.help }}</Field.HelperText>
    <Field.ErrorText v-if="props.error">{{ props.error }}</Field.ErrorText>
  </Field.Root>
</template>

<style scoped>
[data-scope="field"] {
  padding-block: var(--padding);
  padding-inline: calc(var(--padding) + 4px);

  &[data-part="input"] {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    border-radius: var(--border-radius);
  }
}
</style>
