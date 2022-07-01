<template>
  <div class="box">
    <div class="a">
      <div class="b">123</div>
      <van-button type="primary">主要按钮</van-button>
      <el-button>默认按钮</el-button>
      <van-button plain
                  type="primary">朴素按钮</van-button>
      <div class="ceshi">测试</div>
    </div>
  </div>
</template>
<script>
import '@/assets/css/index.less'
export default {
  name: 'shang-hai',
  data () {
    return {}
  },
  created () { },
  mounted () {
    let a = this.$lodash.chunk(['a', 'b', 'c', 'd'], 2);
    let b = this.$lodash.compact([0, 1, false, 2, '', 3]);
    console.log(a)
    console.log(b)
  },
}
</script>
<style lang="less" scoped>
.b {
  color: @c;
}
</style>