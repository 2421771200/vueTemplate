<template>
  <div class="box">
    <div class="a">
      <div class="b">123</div>
      <van-button type="primary">主要按钮</van-button>
      <el-button>默认按钮</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shang-hai',
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