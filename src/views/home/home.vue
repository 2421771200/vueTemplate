<template>
  <div class="box">
    <div class="a">
      <div class="b">123</div>
      <van-button type="primary">主要按钮</van-button>
    </div>
  </div>
</template>
<script>
import { Button } from 'vant';
export default {
  name: 'shang-hai',
  components: {
    vanButton: Button
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.a {
  .b {
    color: red;
  }
}
</style>