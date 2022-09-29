<template>
  <div style="padding: 0px 100px; display: flex; align-items: center; justify-content: space-between; height: 60px">
    <div>
      <img
          style="height: 44px; display: inline-block; vertical-align: middle; box-sizing: border-box; vertical-align: middle;"
          src="../../../assets/logo_hellman.png"
      />
      <span style="margin-left: 8px; letter-spacing:2px; font-weight: 420; color: #FFFFFF; font-size: 30px; height: 100%; display: inline-block; box-sizing: border-box; vertical-align: middle;">&nbsp;HellmanAlert </span>
    </div>
    <el-menu mode="horizontal" :default-active="$route.name">
      <el-menu-item index="dashboard" route="dashboard" @click="$router.push('dashboard')">Dashboard</el-menu-item>
      <el-menu-item index="metrics" route="metrics" @click="$router.push('metrics')">Metrics</el-menu-item>
      <el-menu-item index="subscribe" route="subscribe" @click="$router.push('subscribe')">Subscribe</el-menu-item>
      <el-menu-item index="alerts" @click="$router.push('alerts')">Alerts</el-menu-item>
    </el-menu>
    <el-button type="text">Node</el-button>
    <el-button>Login</el-button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
