import { tf } from "@/components/lib/timing-functions";

const points = 12;

let style: HTMLStyleElement | undefined = undefined;

export function useTheme(colors: {
  main: string;
  accent: string;
  ambient: string;
}, options: {
  interpolate: keyof typeof tf,
}) {

  function *palette(a: string, b: string) {
    const len = points - 1;
    for (let i = 0; i < points; i++) {
      const t = 1 - (i / len);
      yield `color-mix(in oklab, ${a} ${tf[options.interpolate](t) * 100}%, ${b})`;
    }
  }

  const main = [...palette(colors.ambient, colors.main)];
  const mainAlpha = [...palette("transparent", colors.main)];

  const accent = [...palette(colors.ambient, colors.accent)];

  const ambientAlpha = [...palette("transparent", colors.ambient)];

  /* ---- Theme set as inline styles on the body ---- */
  /*
  {
    for (let i = 0; i < main.length; ++i) {
      document.body.style.setProperty(`--color-main-${i + 1}`, main[i]);
    }

    for (let i = 0; i < mainAlpha.length; ++i) {
      document.body.style.setProperty(`--color-main-alpha-${i + 1}`, mainAlpha[i]);
    }

    for (let i = 0; i < accent.length; ++i) {
      document.body.style.setProperty(`--color-accent-${i + 1}`, accent[i]);
    }
  }
  */

  /* ---- Theme set through style sheet ---- */

  if (!style) {
    style = document.createElement("style");
    document.head.append(style);
  }

  style.textContent = `
:root {
  ${main.map((color, i) => `--color-main-${i + 1}: ${color};`).join("\n  ")}

  ${mainAlpha.map((color, i) => `--color-main-alpha-${i + 1}: ${color};`).join("\n  ")}

  ${accent.map((color, i) => `--color-accent-${i + 1}: ${color};`).join("\n  ")}

  /*
  @media (prefers-color-scheme: dark) {
    ${main.reverse().map((color, i) => `--color-main-${i + 1}: ${color};`).join("\n  ")}

    ${ambientAlpha.map((color, i) => `--color-main-alpha-${i + 1}: ${color};`).join("\n  ")}
  }
  */
}
  `;
}
