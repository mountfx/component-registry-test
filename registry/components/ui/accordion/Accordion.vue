<script setup lang="ts">
import { ref } from 'vue';

import { AnimatePresence, motion } from "motion-v";

import { useForwardProps } from "@ark-ui/vue";
import { Accordion } from '@ark-ui/vue/accordion';

import Icon from "@/components/ui/icon/Icon.vue";

interface Props {
  items: { title: string; description: string };  
}

const props = defineProps<Props>();

const forwarded = useForwardProps(props);
</script>

<template>
  <Accordion.Root>
      <Accordion.Item v-for="item in props.items" :key="item.title" :value="item.title">
        <Accordion.ItemContext v-slot="context">
          <Accordion.ItemTrigger tabindex="0">
            <span>
              <slot name="header" :item="item" />
            </span>
            <Accordion.ItemIndicator asChild>
              <Icon :icon="context.expanded ? 'drop-up' : 'drop-down'" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <AnimatePresence>
            <motion.div
              style="overflow: hidden;"
              layout
              v-if="context.expanded"
              :transition="{ type: 'spring', stiffness: 400, damping: 40 }"
              :initial="{ height: '0px' }"
              :animate="{ height: 'auto' }"
              :exit="{ height: '0px' }">
              <Accordion.ItemContent>
                <slot name="content" :item="item" />
              </Accordion.ItemContent>
            </motion.div>
          </AnimatePresence>
        </Accordion.ItemContext>
      </Accordion.Item>
  </Accordion.Root>
</template>

<style scoped>
[data-scope="accordion"] {
  &[data-part="item"] {
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom: 1px solid var(--color-main-5);

    &[data-focus] {
      outline: none;
    
      &::before, &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: var(--color-main-3);
      }

      &::before {
        top: -1px;
      }

      &::after {
        bottom: -1px;
      }

      & [data-part="item-indicator"] {
        --icon-color: var(--color-main);
      }
    }

    &:first-of-type {
      border-top: 1px solid var(--color-main-5);
    }
  }

  
  &[data-part="item-trigger"] {
    outline: none;
    background-color: transparent;
    border: none;
    padding: 12px 0px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover {
      & [data-part="item-indicator"] {
        --icon-color: var(--color-main);
      }
    }
  }

  &[data-part="item-content"] {
    padding-block: 12px;
  }

  &[data-part="item-indicator"] {
    --icon-color: var(--color-main-3);
  }
}
</style>
