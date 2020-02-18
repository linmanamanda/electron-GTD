<template>
  <div class="index">
    <Navigation/>
    <div class="content">
      <Box/>
      <Todo class="content-main"/>
    </div>
  </div>
</template>
<script>
import Navigation from '../components/Navigation';
import Box from '../components/Box';
import Todo from '../components/Todo';
export default {
  name: 'index-page',
  components: {
    Navigation,
    Box,
    Todo,
  },
};
</script> 
<style scoped>
.content {
  display: flex;
}

.content-main {
  flex: 1;
}
</style>