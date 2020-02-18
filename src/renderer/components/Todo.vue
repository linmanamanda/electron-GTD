<template>
  <div class="todo">
    <div class="todo-status">
      <div class="todo-status-item">
        <div>0</div>
        <div>预计时间(h)</div>
      </div>
      <div class="todo-status-item">
        <div>0</div>
        <div>待完成任务</div>
      </div>
      <div class="todo-status-item">
        <div>0</div>
        <div>已用时间(h)</div>
      </div>
      <div class="todo-status-item">
        <div>0</div>
        <div>已完成任务</div>
      </div>
    </div>
    <div class="todo-add">
      <input placeholder="在今日清单中添加一个任务，按回车健保存"/>
    </div>
    <div class="todo-list">
      <div class="todo-item">
        <Icon type="ios-radio-button-off" size="20"/>
        <Icon type="ios-clock-outline" size="20"/>
        <input placeholder="在今日清单中添加一个任务，按回车健保存"/>
      </div>
      <div class="todo-item">
        <Icon type="ios-radio-button-off" size="20"/>
        <Icon type="ios-clock-outline" size="20"/>
        <input placeholder="在今日清单中添加一个任务，按回车健保存"/>
      </div>
      <div class="todo-item">
        <Icon type="ios-radio-button-off" size="20"/>
        <Icon type="ios-clock-outline" size="20"/>
        <input placeholder="在今日清单中添加一个任务，按回车健保存"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Todo',
};
</script>
<style scoped>
.todo {
  background-color: #f3f4f6;
  padding: 18px 24px;
}

.todo-status {
  display: flex;
  justify-content: space-around;
  padding: 18px 0 14px 0;
  border-radius: 8px;
  background-color: #fff;
}

.todo-status-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.todo-status-item > div:first-child {
  font-size: 34px;
  color: tomato;
}

.todo-status-item > div:last-child {
  font-size: 14px;
  color: #aeaeae;
}

.todo-add {
  height: 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 18px;
  margin-top: 24px;
  border-radius: 8px;
  background-color: #fff;
}

.todo-add > input {
  border: none;
  flex: 1;
}

.todo-list {
  margin-top: 30px;
}

.todo-item {
  height: 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 18px;
  margin-top: 6px;
  border-radius: 8px;
  background-color: #fff;
}

.todo-item > input {
  border: none;
}


</style>