<template>
  <div class="box">
    <div class="box-content">
      <div class="box-default">
        <div class="box-item">
          <div class="box-item-name">
            <Icon class="box-item-icon" type="ios-sunny-outline" color="#13b120" size="24"/>
            <div>今日</div>
          </div>
          <div class="box-item-detail">
            <span>1.7h</span>
            <span>4</span>
          </div>
        </div>
        <div class="box-item">
          <div class="box-item-name">
            <Icon class="box-item-icon" type="ios-partly-sunny-outline" color="#ff7982" size="24"/>
            <div>明日</div>
          </div>
          <div class="box-item-detail">
            <span>1.7h</span>
            <span>4</span>
          </div>
        </div>
        <div class="box-item">
          <div class="box-item-name">
            <Icon class="box-item-icon" type="ios-snow-outline" color="#dbe7ff" size="24"/>
            <div>本周</div>
          </div>
          <div class="box-item-detail">
            <span>1.7h</span>
            <span>4</span>
          </div>
        </div>
      </div>
      <div class="box-customer">
        <div class="box-item">
          <div class="box-item-name">
            <div class="box-item-color"/>
            <span>今日</span>
          </div>
          <div class="box-item-detail">
            <span>1.7h</span>
            <span>4</span>
          </div>
        </div>
        <div class="box-item">
          <div class="box-item-name">
            <div class="box-item-color"/>
            <span>FE</span>
          </div>
          <div class="box-item-detail">
            <span>1.7h</span>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
    <div class="box-add">
      <Icon class="box-item-icon" type="md-add" size="22"/>
      <div>添加清单</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Box',
};
</script>
<style scoped>
.box {
  width: 320px;
  display: flex;
  flex-direction: column;
}

.box-content {
  padding: 0 10px;
}

.box-default::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  transform: scaleX(0.9);
  background-color: #f4f4f4;
}

.box-customer {
  flex: 1;
}

.box-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 16px;
  border-radius: 8px;
  background-color: #fff;
  font-size: 14px;
  color: #3b3b3b;
}

.box-item.active {
  background-color: #f5f5f5;
}

.box-item-name {
  flex: 1;
  display: flex;
  align-items: center;
}

.box-item-color {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 4px;
  transform: scale(0.4);
  background-color: tomato;
}
.box-item-icon {
  margin-right: 4px;
}

.box-item-detail {
  color: #aeaeae;
  font-size: 12px;
}

.box-item-detail > span:first-child {
  margin-right: 24px;
}

.box-add {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  color: tomato;
  font-size: 14px;
}

.box-add::before {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e5e5e5;
}
</style>