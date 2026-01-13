<template>
  <button><slot name="text" /></button>
</template>

<style scoped>
button {
  background-color: tomato;
  border-radius: 24px;
  padding: 12px;
  outline: none;
}
button:focus {
  background-color: blue;
}
button:active {
  background-color: red;
}
</style>
