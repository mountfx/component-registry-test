<template>
  <button><slot name="text" /></button>
</template>

<style scoped>
button {
  background-color: tomato;
  border-radius: 24px;
  padding: 24px 32px;
  outline: none;
  border: unset;
  font-size: 16px;
  color: white;
}
button:focus {
  background-color: blue;
}
button:active {
  background-color: crimson;
}
</style>
