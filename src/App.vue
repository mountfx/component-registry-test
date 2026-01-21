<script setup>
import Button from "@/components/button/Button.vue";
import Input from "@/components/input/Input.vue";
import Accordion from "@/components/accordion/Accordion.vue";
import Select from "@/components/select/Select.vue";
import Icon from "@/components/icon/Icon.vue";
import Menu from "@/components/menu/Menu.vue";
import Combobox from "@/components/combobox/Combobox.vue";
import Checkbox from "@/components/checkbox/Checkbox.vue";

import Chat from "@/blocks/Chat.vue";
import NavDrawer from "@/blocks/NavDrawer.vue";

import Layout from "@/components/Layout.vue";
import Palette from "./Palette.vue";

const selectItems = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Quik', value: 'quik', disabled: true },
  { label: 'Zx', value: 'zx' },
];

const accordionItems = [
  { title: "Product Information", description: "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability. Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts." },
  { title: "Shipping Details", description: "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days. All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal." },
  { title: "Return Policy", description: "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition. OurWe stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition. OurWe stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition. OurWe stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition. OurWe stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition. Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item." },
];

const menuItems = [
  {
    label: "Solid",
    value: "solid",
    icon: "attach_file",
    items: [
      { label: "Hello", value: "hello" },
      { label: "World", value: "world" },
    ],
  },
  {
    label: "Vue",
    value: "vue",
    icon: "attach_file",
  },
  {
    label: "React",
    value: "react",
    icon: "attach_file",
  },
  {
    label: "Zx",
    value: "zx",
    icon: "attach_file",
  }
];
</script>

<template>
  <Layout>
    <template #sidebar>
      <NavDrawer />
    </template>
    <template #main>
      <div class="ds">
        <div class="ds-header">
          <div>
            <h1>Konverto Lab Design System</h1>
            <h4>Component Registry</h4>
          </div>
          <Menu :items="menuItems" size="m" iconPrefix="drop_down" />
        </div>
        <div class="ds-button">
          <Button iconPrefix="attach_file" size="s" disabled>Hello</Button>
          <Button iconPrefix="attach_file" size="m">Hello</Button>
          <Button iconPrefix="attach_file" size="l">Hello</Button>
        </div>
        <div class="ds-button">
          <Button style="width: fit-content;" iconPrefix="attach_file" variant="surface" size="s"></Button>
          <Button style="width: fit-content;" iconPrefix="attach_file" variant="surface" size="m"></Button>
          <Button style="width: fit-content;" iconPrefix="attach_file" variant="surface" size="l"></Button>
        </div>
        <div class="ds-button">
          <Button iconPrefix="attach_file" variant="solid" size="s">Hello</Button>
          <Button iconPrefix="attach_file" variant="solid" size="m">Hello</Button>
          <Button iconPrefix="attach_file" variant="solid" size="l">Hello</Button>
        </div>
        <Accordion collapsible :items="accordionItems" :defaultValue="['Banana']">
          <template #header="{ item }">
            <h3>{{ item.title }}</h3>
          </template>
          <template #content="{ item }">
            <p>{{ item.description }}</p>
          </template>
        </Accordion>
        <Chat :onSubmit="(text) => console.log(text)" />
        <Button style="width: auto;" iconPrefix="chat" iconPostfix="drop_down" align="space-between">Hello</Button>
        <div class="ds-checkbox">
          <Checkbox size="s" />
        </div>
        <div class="ds-select">
          <Select size="s" label="Select (single)" placeholder="Select single framework" :items="selectItems" />
          <Select label="Select (multiple)" placeholder="Select multiple frameworks" multiple :items="selectItems" />
          <Select invalid error="Unexpected error" size="l" label="Select (single)" placeholder="Select single framework" :items="selectItems" />
        </div>
        <div class="ds-input">
          <Input invalid style="width: 100%" label="Input" size="s" placeholder="I am a placeholder" error="Unexpected error" />
          <Input style="width: 100%" label="Input" size="m" placeholder="I am a placeholder" error="hello" />
          <Input style="width: 100%" label="Input" size="l" placeholder="I am a placeholder" error="hello" />
        </div>
        <div class="ds-combobox">
          <Combobox label="Combobox" size="s" />
          <Combobox label="Combobox" size="m" />
          <Combobox label="Combobox" size="l"/>
        </div>
        <Palette />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
h4 {
  color: var(--color-main-3);  
}

.ds {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 80px 24px;
  gap: 48px;
  container-type: inline-size;
}

.ds-header {
  display: flex;
  justify-content: space-between;
}

.ds-button, .ds-input, .ds-select, .ds-combobox, .ds-checkbox {
  display: flex;
  gap: 24px;

  @container (width < 560px) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
    min-width: 0;
  }
}
</style>
