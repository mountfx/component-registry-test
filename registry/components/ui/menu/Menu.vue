<script setup lang="ts">
import { Presence } from "@ark-ui/vue/presence";
import { Menu } from "@ark-ui/vue/menu";

import Button from "@/components/ui/button/Button.vue";
import Icon from "@/components/ui/icon/Icon.vue";

interface Item {
  label: string;
  value: string;
  icon?: string;
  items?: Item[];
};

interface Props {
  items: Item[];
  size?: "l" | "m" | "s";
  variant?: "solid" | "subtle" | "surface" | "outline" | "plain";
  align?: "center" | "space-between";
  iconPrefix?: string;
  iconPostfix?: string;
  text?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Menu.Root>
    <Menu.Context v-slot="context">
      <Menu.Trigger asChild>
        <Button v-if="props.text" v-bind="props">
          {{ props.text }}
        </Button>
        <Button v-else v-bind="props" />
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content class="item-list" :data-size="props.size">
          <template v-for="item in props.items" :key="item.value">
            <Menu.Root v-if="item.items">
              <Menu.TriggerItem class="item">
                <Icon v-if="item.icon" :icon="item.icon" />
                <span class="item-text">{{ item.label }}</span>
                <Icon class="icon-drop-right" icon="drop-right" />
              </Menu.TriggerItem>
              <Presence :present="context.open" lazyMount unmountOnExit>
                <Teleport to="body">
                  <Menu.Positioner>
                    <Menu.Content class="item-list" :data-size="props.size">
                      <Menu.Item
                        class="item"
                        v-for="item in item.items"
                        :key="item.label"
                        :value="item.value">
                        <Icon v-if="item.icon" :icon="item.icon" />
                        <span class="item-text">{{ item.label }}</span>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Teleport>
              </Presence>
            </Menu.Root>
            <Menu.Item class="item" v-else :value="item.value">
              <Icon v-if="item.icon" :icon="item.icon" />
              <span class="item-text">{{ item.label }}</span>
            </Menu.Item>
          </template>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Context>
  </Menu.Root>
</template>

<style scoped>
[data-scope="menu"][data-part="content"] {
  &[data-size="s"], [data-size="s"] & {
    min-width: 128px;
  }

  &[data-size="m"], [data-size="m"] & {
    min-width: 192px;
  }

  &[data-size="l"], [data-size="l"] & {
    min-width: 256px;
  }
}

[data-scope="menu"][data-part="trigger"][data-state="open"] {
  background-color: var(--color-main-4);    
}

.icon-drop-right {
  --icon-color: var(--color-main-6);
}

.item-text {
  width: 100%;
  padding-inline: 4px;
}
</style>
