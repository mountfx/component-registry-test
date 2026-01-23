export function linear(t: number) {
  return t;
}

export function easeInQuad(t: number) {
  return t * t;
}

export function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

export function easeInOutQuad(t: number) {
  return t < 0.5
    ? 2 * t * t
    : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function easeInCubic(t: number) {
  return t * t * t;
}

export function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function easeInOutCubic(t: number) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function easeInQuart(t: number) {
  return t * t * t * t;
}

export function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export function easeInOutQuart(t: number) {
  return t < 0.5
    ? 8 * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

export function easeInQuint(t: number) {
  return t * t * t * t * t;
}

export function easeOutQuint(t: number) {
  return 1 - Math.pow(1 - t, 5);
}

export function easeInOutQuint(t: number) {
  return t < 0.5
    ? 16 * t * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

export function easeInSine(t: number) {
  return 1 - Math.cos((t * Math.PI) / 2);
}

export function easeOutSine(t: number) {
  return Math.sin((t * Math.PI) / 2);
}

export function easeInOutSine(t: number) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

export function easeInExpo(t: number) {
  return t === 0 ? 0 : Math.pow(2, 10 * t - 10);
}

export function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function easeInOutExpo(t: number) {
  if (t === 0) return 0;
  if (t === 1) return 1;
  return t < 0.5
    ? Math.pow(2, 20 * t - 10) / 2
    : (2 - Math.pow(2, -20 * t + 10)) / 2;
}

export function easeInCirc(t: number) {
  return 1 - Math.sqrt(1 - t * t);
}

export function easeOutCirc(t: number) {
  return Math.sqrt(1 - Math.pow(t - 1, 2));
}

export function easeInOutCirc(t: number) {
  return t < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
}

export const tf = {
  "linear": linear,

  "ease-in-quad": easeInQuad,
  "ease-out-quad": easeOutQuad,
  "ease-in-out-quad": easeInOutQuad,

  "ease-in-cubic": easeInCubic,
  "ease-out-cubic": easeOutCubic,
  "ease-in-out-cubic": easeInOutCubic,

  "ease-in-quart": easeInQuart,
  "ease-out-quart": easeOutQuart,
  "ease-in-out-quart": easeInOutQuart,

  "ease-in-quint": easeInQuint,
  "ease-out-quint": easeOutQuint,
  "ease-in-out-quint": easeInOutQuint,

  "ease-in-sine": easeInSine,
  "ease-out-sine": easeOutSine,
  "ease-in-out-sine": easeInOutSine,

  "ease-in-expo": easeInExpo,
  "ease-out-expo": easeOutExpo,
  "ease-in-out-expo": easeInOutExpo,

  "ease-in-circ": easeInCirc,
  "ease-out-circ": easeOutCirc,
  "ease-in-out-circ": easeInOutCirc,
};
