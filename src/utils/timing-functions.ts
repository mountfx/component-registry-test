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

export const c1 = 1.70158;
export const c2 = c1 * 1.525;

export function easeInBack(t: number) {
  return (c1 + 1) * t * t * t - c1 * t * t;
}

export function easeOutBack(t: number) {
  return 1 + (c1 + 1) * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

export function easeInOutBack(t: number) {
  return t < 0.5
    ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
    : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
}

export function bounceOut(t: number) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (t < 1 / d1) {
    return n1 * t * t;
  } else if (t < 2 / d1) {
    t -= 1.5 / d1;
    return n1 * t * t + 0.75;
  } else if (t < 2.5 / d1) {
    t -= 2.25 / d1;
    return n1 * t * t + 0.9375;
  } else {
    t -= 2.625 / d1;
    return n1 * t * t + 0.984375;
  }
}

export function easeOutBounce(t: number) {
  return bounceOut(t);
}

export function easeInBounce(t: number) {
  return 1 - bounceOut(1 - t);
}

export function easeInOutBounce(t: number) {
  return t < 0.5
    ? (1 - bounceOut(1 - 2 * t)) / 2
    : (1 + bounceOut(2 * t - 1)) / 2;
}
