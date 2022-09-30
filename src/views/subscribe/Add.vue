<template>
  <div style="height: 100%; width: 70%; margin: auto">
    <el-button icon="el-icon-back" @click="$router.back()">Back</el-button>
    <img style="width: 100%; margin-top: 60px" src="./assets/add_subscription.png"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    load() {
      this.count += 2
    }
  }
}
</script>
