<template>
  <div class="todo-detail">
    <div class="title">日程</div>
    <div class="setting">
      <div>
        <Icon type="ios-clock-outline"/>  
        <span>番茄数/已花费时间(h)</span>
      </div>
      <div>0/0</div>
    </div>
    <div class="setting">
      <div>
        <Icon type="ios-calendar-outline"/>
        <span>到期日</span>
      </div>
      <div>2月17日 周一</div>
    </div>   
    <div class="setting">
      <div>
        <Icon type="ios-list-box-outline"/>
        <span>清单</span>
      </div>
      <div>it works!</div>
    </div>   
    <div class="setting">
      <div>
        <Icon type="ios-alert-outline"/> 
        <span>提醒</span>
      </div>
      <div>无</div>
    </div> 
    <div class="setting">
      <div>
        <Icon type="ios-refresh"/>
        <span>重复</span>
      </div>
      <div>无</div>
    </div> 
    <div class="add">
      <div>
        <Icon type="ios-add"/>
        <span>添加子任务...</span>
      </div>
    </div>
    <div class="remark">
      添加备注
    </div>
  </div>  
</template>
<script>
export default {
  name: 'TodoDetail',
};
</script>
<style lang="sass" scoped>
.todo-detail 
  width: 300px
  display: flex
  flex-direction: column
  background-color: #f3f4f6
  padding: 12px 18px 12px 0
  color: #aeaeae
  .title, .setting, .add 
    height: 44px
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 12px
    background-color: #fff
    font-size: 16px
  .title 
    border-bottom: 1px solid #e5e5e5
    border-top-left-radius: 8px
    border-top-right-radius: 8px
    color: #b5b5b5
    font-weight: bold
  .remark
    flex: 1
    background-color: #fff

</style>