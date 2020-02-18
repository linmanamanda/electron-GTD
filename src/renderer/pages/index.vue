<template>
  <div class="index">
    <Navigation/>
    <div>
      <Box/>
      <List/>
    </div>
  </div>
</template>
<script>
import Navigation from '../components/Navigation';
import Box from '../components/Box';
import List from '../components/List';
export default {
  name: 'index-page',
  components: {
    Navigation,
    Box,
    List,
  },
};
</script> 
<style scoped>

</style>