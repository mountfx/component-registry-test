<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import Accordion from "@/components/ui/accordion/Accordion.vue";
import Select from "@/components/ui/select/Select.vue";
import Icon from "@/components/ui/icon/Icon.vue";
import Menu from "@/components/ui/menu/Menu.vue";
import Combobox from "@/components/ui/combobox/Combobox.vue";
import Checkbox from "@/components/ui/checkbox/Checkbox.vue";

import Chat from "@/components/blocks/chat/Chat.vue";
import NavDrawer from "@/components/blocks/NavDrawer.vue";
import Theme from "@/components/blocks/theme/Theme.vue";

import Layout from "@/components/Layout.vue";
import Palette from "./Palette.vue";

import { useTheme } from "@/components/lib/use-theme.ts";

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
    icon: "attach-file",
    items: [
      { label: "Hello", value: "hello" },
      { label: "World", value: "world" },
    ],
  },
  {
    label: "Vue",
    value: "vue",
    icon: "attach-file",
  },
  {
    label: "React",
    value: "react",
    icon: "attach-file",
  },
  {
    label: "Zx",
    value: "zx",
    icon: "attach-file",
  }
];

useTheme({
  main: "#0A1E12",
  accent: "#7931E8",
  ambient: "#F2F4F4",
}, {
  interpolate: "ease-in-out-sine",
});

const themes = [
  {
    value: "konverto-lab",
    label: "Konverto Lab",
    colors: {
      main: "#0A1E12",
      accent: "#7931E8",
      ambient: "#F2F4F4",
    },
    interpolation: "ease-in-out-sine",
  },
  {
    value: "konverto-lab-dark",
    label: "Konverto Lab (Dark)",
    colors: {
      main:"#F2F4F4",
      accent: "#7931E8",
      ambient: "#0A1E12",
    },
    interpolation: "ease-in-out-sine",
  },
  {
    value: "rvs",
    label: "Raiffeisen",
    colors: {
      main: "#284A51",
      accent: "#FCCE4D",
      ambient: "#FFFFFF",
    },
    interpolation: "ease-in-out-sine",
  },
  {
    value: "rvs-dark",
    label: "Raiffeisen (Dark)",
    colors: {
      main: "#FFFFFF",
      accent: "#FCCE4D",
      ambient: "#284A51",
    },
    interpolation: "ease-in-out-sine",
  },
  {
    value: "athesia",
    label: "Athesia",
    colors: {
      main: "#333333",
      accent: "#F19601",
      ambient: "#F5F5F5",
    },
    interpolation: "ease-in-out-sine",
  },
  {
    value: "athesia-dark",
    label: "Athesia (Dark)",
    colors: {
      main: "#F5F5F5",
      accent: "#F19601",
      ambient: "#333333",
    },
    interpolation: "ease-in-sine",
  },
];

function setTheme(value: string[]) {
  const theme = themes.find((theme) => theme.value === value[0]);
  useTheme(theme.colors, { interpolate: theme.interpolation });
}
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
            <p>Component Registry</p>
          </div>
          <Menu :items="menuItems" size="m" iconPrefix="drop-down" />
        </div>
        <Select style="max-width: 320px;" :onChange="setTheme" label="Theme" placeholder="Select a theme" :items="themes" />
        <!-- <Theme /> -->
        <div class="ds-button">
          <Button iconPrefix="attach-file" size="s" disabled>Hello</Button>
          <Button iconPrefix="attach-file" size="m">Hello</Button>
          <Button iconPrefix="attach-file" size="l">Hello</Button>
        </div>
        <div class="ds-button">
          <Button style="width: fit-content;" iconPrefix="attach-file" size="s"></Button>
          <Button style="width: fit-content;" iconPrefix="attach-file" size="m"></Button>
          <Button style="width: fit-content;" iconPrefix="attach-file" size="l"></Button>
        </div>
        <div class="ds-button">
          <Button iconPrefix="attach-file" variant="solid" size="s">Hello</Button>
          <Button iconPrefix="attach-file" variant="solid" size="m">Hello</Button>
          <Button iconPrefix="attach-file" variant="solid" size="l">Hello</Button>
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
        <Button style="width: auto;" iconPrefix="chat" iconPostfix="drop-down" align="space-between">Hello</Button>
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
