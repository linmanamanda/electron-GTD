<template>
  <div class="navigation">
    <div class="navigation-status">
      <Icon type="ios-contact-outline" size="46" color="#b3b3b3"/>
      <div>linman</div>
    </div>
    <div class="navigation-operation">
      <Icon type="ios-stats-outline" size="26" color="#b3b3b3"/>
      <Icon type="ios-settings-outline" size="26" color="#b3b3b3"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
};
</script>
<style scoped>
.navigation {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  box-shadow: 0 2px 3px -1px #e5e5e5; 
}

.navigation-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation-status > p {
  color: #525252;
}
</style>