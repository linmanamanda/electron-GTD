<template>
  <div class="tick">
    <div class="tick-count">
      <span>06</span>
      <span>:</span>
      <span>45</span>
    </div>
    <div class="tick-count">
      <Icon type="ios-pause" color="#fff" size="68"/>
      <Icon type="ios-play" color="#fff" size="68"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tick',
};
</script>
<style scoped>
.tick {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: tomato;
  text-align: center;
}

.tick-count {
  display: flex;
  align-items: center;
  font-size: 88px;
  color: #fff;
}
</style>