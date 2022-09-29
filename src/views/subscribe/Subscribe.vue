<template>
  <div style="height: 100%; width: 70%; margin: auto">
    <div style="display: flex; justify-content: space-between; padding: 30px">
      <div>
        <span style="font-size: 45px">Subscribed</span>
      </div>
      <div>
        <el-button icon="el-icon-plus" @click="$router.push({name: 'subscribe-add'})">Add</el-button>
      </div>
    </div>
    <ul style="height: 60%; margin-top: 50px; overflow:auto" v-infinite-scroll="load">
      <li style="height: 80px; list-style-type: none; display: flex; justify-content: space-between" v-for="item in subscriptions"
          className="infinite-list-item">
        <div>
          <span style="font-size: 30px; margin: 0px 30px">{{ item.subscription_name }}</span>
        </div>
        <div>
          <el-button @click="$router.push({name: 'subscribe-update'})">Update</el-button>
          <el-button>Remove</el-button>
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
      subscriptions: [
        {
          "subscription_name": "Account Hellman insufficient balance",
          "metrics_name": "Account balance",
        },
        {
          "subscription_name": "Account BBB insufficient balance",
          "metrics_name": "Account balance",
        },
        {
          "subscription_name": "A node performance < 90%",
          "metrics_name": "Operator performance",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
        },
        {
          "subscription_name": "XXXXXXXXXXX",
          "metrics_name": "XXXXXXXXXXX",
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
