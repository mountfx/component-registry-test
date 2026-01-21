<script setup lang="ts">
import { generateColors } from "../scripts/utils/generate-colors";
/*
import { Poline,positionFunctions } from "poline";

const poline = new Poline({
  anchorColors: [
    [179, 0.08, 0.95],
    [144, 0.50, 0.08],
  ],
  numPoints: 11,
  positionFunctionX: positionFunctions['sinusoidalPosition'],
  positionFunctionY: positionFunctions['smoothStepPosition'],
  positionFunctionZ: positionFunctions['quarticPosition'],
  invertedLightness: true, 
});
*/
const athesiaColors = generateColors({
  appearance: "light",
  accent: "#F19601",
  gray: "#777777",
  background: "#FFFFFF",
});

const raiffeisenColors = generateColors({
  appearance: "light",
  accent: "#FBB900",
  gray: "#284A51",
  background: "#FFFFFF",
});

const colors = [
  "var(--color-cinder-1)",
  "var(--color-cinder-2)",
  "var(--color-cinder-3)",
  "var(--color-cinder-4)",
  "var(--color-cinder-5)",
  "var(--color-cinder-6)",
  "var(--color-cinder-7)",
  "var(--color-cinder-8)",
  "var(--color-cinder-9)",
  "var(--color-cinder-10)",
  "var(--color-cinder-11)",
  "var(--color-cinder-12)",
];
console.log(athesiaColors);
</script>

<template>
  <!-- <div class="palette"> -->
    <!-- <div class="color" v-for="color in poline.cssColors('hsl')" :style="{ backgroundColor: color }"></div> -->
  <!-- </div> -->
  <div class="palette">
    <div class="color" v-for="color in colors" :style="{ backgroundColor: color }"></div>
  </div>
  <!-- <h1>Custom palettes</h1> -->
  <!-- <h3>Athesia</h3> -->
  <!-- <div class="palette"> -->
    <!-- <div class="color" v-for="color in athesiaColors.accentScaleWideGamut" :style="{ backgroundColor: color }"></div> -->
  <!-- </div> -->
  <!-- <h3>Raiffeisen</h3> -->
  <!-- <div class="palette"> -->
    <!-- <div class="color" v-for="color in raiffeisenColors.accentScaleWideGamut" :style="{ backgroundColor: color }"></div> -->
  <!-- </div> -->
  <!-- <div class="palette"> -->
    <!-- <div class="color" v-for="color in raiffeisenColors.grayScaleWideGamut" :style="{ backgroundColor: color }"></div> -->
  <!-- </div> -->
</template>

<style scoped>
.palette {
  display: flex;
  border-radius: 80px;
  overflow: clip;
}
.color {
  width: 128px;
  aspect-ratio: 1 / 1;
}
</style>
