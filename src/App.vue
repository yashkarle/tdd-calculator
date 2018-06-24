<template>
  <div class="calculator">
    <div class="display">{{ display }}</div>
    <div class="keyboard"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      display: 0
    };
  }
};
</script>

<style scoped>
.calculator {
  width: 30rem;
  max-width: 100%;
  margin: 3rem auto;
  padding: .3rem;
}

.calculator .display {
  height: 4rem;
  line-height: 4rem;
  margin: 0 .3rem;
  padding: 0 0;
  text-align: right;
  font-size: 1.5em;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.calculator .keyboard {
  display: flex;
  flex-wrap: wrap;
}
</style>
