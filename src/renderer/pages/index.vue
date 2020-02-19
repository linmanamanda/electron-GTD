<template>
  <div class="index">
    <Navigation/>
    <div class="content">
      <Box/>
      <div class="content-main">
        <Todo class="todo"/>
        <Todo-Detail/>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from '../components/Navigation';
import Box from '../components/Box';
import Todo from '../components/Todo';
import TodoDetail from '../components/TodoDetail';
export default {
  name: 'index-page',
  components: {
    Navigation,
    Box,
    Todo,
    TodoDetail,
  },
};
</script> 
<style scoped>
.index {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex: 1;
}

.content-main {
  display: flex;
  flex-wrap: nowrap;
  flex: 1;
}

.todo {
  flex: 1;
}
</style>