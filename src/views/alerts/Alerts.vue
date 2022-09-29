<template>
  <div style="height: 100%; width: 70%; margin: auto">
    <div style="display: flex; justify-content: space-between; padding: 30px">
      <div>
        <span style="font-size: 45px">Triggered Alerts</span>
      </div>
      <div>
        <el-button>Confirm All</el-button>
      </div>
    </div>
    <ul style="height: 60%; overflow:auto" v-infinite-scroll="load">
      <li style="height: 80px; list-style-type: none; display: flex; justify-content: space-between"
          v-for="item in alerts"
          className="infinite-list-item">
          <div style="width: 60%">
            <span style="font-size: 30px;">{{ item.subscription_name }}</span>
          </div>
          <div  style="width: 20%">
            <span style="">2022-02-32 03:55</span>
          </div>
          <div  style="width: 20%">
            <el-button v-if="item.subscription_name != 'XXXXXXXXXXX'">Confirm</el-button>
            <el-button v-else :disabled="true">Confirmed</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      alerts: [
        {
          "subscription_name": "Account Hellman insufficient balance",
          "metrics_name": "Account balance",
          "trigger_time": "2022-09-14 03:55",
        },
        {
          "subscription_name": "Account BBB insufficient balance",
          "metrics_name": "Account balance",
          "trigger_time": "2022-09-14 03:55",
        },
        {
          "subscription_name": "A node performance < 90%",
          "metrics_name": "Operator performance",
          "trigger_time": "2022-09-14 03:55",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
          "trigger_time": "2022-09-14 03:55",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
          "trigger_time": "2022-09-14 03:55",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
          "trigger_time": "2022-09-14 03:55",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
          "trigger_time": "2022-09-14 03:55",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
          "trigger_time": "2022-09-14 03:55",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
          "trigger_time": "2022-09-14 03:55",
        }
      ]
    }
  },
  methods: {
    load() {
      this.count += 2
    }
  }
}
</script>
