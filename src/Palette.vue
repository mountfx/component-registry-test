<script setup lang="ts">
import * as tf from "./utils/timing-functions";

function *palette(
  color: string,
  options: {
    points: number,
    interpolate: (t: number) => t,
  },
) {
  const len = options.points - 1;
  for (let i = len; i >= 0; i--) {
    yield `color-mix(in oklab, ${color} ${options.interpolate(i / len) * 100}%, transparent)`;
  }
}

const options = {
  points: 12,
  interpolate: tf.easeInOutSine,
};

const konvertoLab = {
  main: palette("#0A1E12", options),
  accent: palette("#7931E8", options),
};

const rvs = {
  main: palette("#284A51", options),
  accent: palette("#FCCE4D", options),
};

const athesia = {
  main: palette("#666666", options),
  accent: palette("#F19601", options),
};

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
</script>

<template>
  <section>
    <h3>Konverto Lab</h3>
    <div class="palette">
      <!-- <div class="range"> -->
        <!-- <div class="color" v-for="color in colors.reverse()" :style="{ backgroundColor: color }"></div> -->
      <!-- </div> -->
      <div class="range">
        <div class="color" v-for="color in konvertoLab.main" :style="{ backgroundColor: color }"></div>
      </div>
      <div class="range">
        <div class="color" v-for="color in konvertoLab.accent" :style="{ backgroundColor: color }"></div>
      </div>
    </div>
  </section>
  <h1>Custom palettes</h1>
  <section>
    <h3>Raiffeisen Genossenschaften</h3>
    <div class="palette">
      <div class="range">
        <div class="color" v-for="color in rvs.main" :style="{ backgroundColor: color }"></div>
      </div>
      <div class="range">
        <div class="color" v-for="color in rvs.accent" :style="{ backgroundColor: color }"></div>
      </div>
    </div>
  </section>
  <section>
    <h3>Athesia</h3>
    <div class="palette">
      <div class="range">
        <div class="color" v-for="color in athesia.main" :style="{ backgroundColor: color }"></div>
      </div>
      <div class="range">
        <div class="color" v-for="color in athesia.accent" :style="{ backgroundColor: color }"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 24px;  
}

.palette {
  border-radius: 24px;
  overflow: clip;
}

.range {
  display: flex;
}

.color {
  width: 128px;
  aspect-ratio: 1 / 1;
}
</style>
