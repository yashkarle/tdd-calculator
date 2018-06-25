<template>
  <div class="calculator">
    <div class="display">{{ display }}</div>
    <div class="keyboard">
      <div class="panel-a">
        <div class="top-buttons">
          <button class="btn"><span>C</span></button>
          <button class="btn"><span>X</span></button>
          <button class="btn"><span>.</span></button>
        </div>
        <div class="numbers">
          <button class="btn"><span>9</span></button>
          <button class="btn"><span>8</span></button>
          <button class="btn"><span>7</span></button>
          <button class="btn"><span>6</span></button>
          <button class="btn"><span>5</span></button>
          <button class="btn"><span>4</span></button>
          <button class="btn"><span>3</span></button>
          <button class="btn"><span>2</span></button>
          <button class="btn"><span>1</span></button>
          <button class="btn"><span>0</span></button>
        </div>
      </div>
      <div class="panel-b">
          <button class="btn"><span>/</span></button>
          <button class="btn"><span>*</span></button>
          <button class="btn"><span>+</span></button>
          <button class="btn"><span>-</span></button>
          <button class="btn"><span>=</span></button>
      </div>
    </div>
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

.calculator .keyboard .btn {
  margin: 0;
  padding: 0;
  height: 4.6rem;
  line-height: 4rem;
  text-align: center;
  font-family: inherit;
  font-size: 1.25em;
  border: none;
  background: transparent;
  outline: none;
}

.calculator .keyboard .btn span {
  display: block;
  margin: .3rem;
  color: #fff;
  background: #333;
  border-radius: 3px;
  transition: background-color .4s;
}

.calculator .keyboard .panel-a {
  width: 75%;
}

.calculator .keyboard .panel-a .top-buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  align-content: flex-end;
}

.calculator .keyboard .panel-a .top-buttons .btn {
  width: 33.3%;
}

.calculator .keyboard .panel-a .numbers {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: flex-end;
  align-content: flex-end;
}

.calculator .keyboard .panel-a .numbers .btn {
  width: 33.3%;
}

.calculator .keyboard .panel-a .numbers .btn:nth-child(10) {
  width: 100%;
}

.calculator .keyboard .panel-b {
  display: flex;
  flex-direction: column;
  width: 25%;
}

.calculator .keyboard .panel-b .btn {
  width: 100%;
}
</style>
