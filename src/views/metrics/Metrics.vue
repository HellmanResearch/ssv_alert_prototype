<template>
  <div style="height: 100%; width: 70%; margin: auto">
    <!--    <div style="display: flex; justify-content: right">-->
    <!--      <el-button  icon="el-icon-plus" @click="$router.push({name: 'subscribe-add'})">Subscribe</el-button>-->
    <!--    </div>-->
    <div style="display: flex; justify-content: space-between; padding: 30px">
      <div>
        <span style="font-size: 45px">Metrics</span>
      </div>
      <div>
        <el-button icon="el-icon-plus" @click="$router.push({name: 'subscribe-add'})">Subscribe</el-button>
      </div>
    </div>
    <ul style="height: 60%; margin-top: 50px; overflow:auto" v-infinite-scroll="load">
      <li style="height: 80px; list-style-type: none; display: flex; justify-content: space-between" v-for="item in metrics"
          className="infinite-list-item">
        <div>
          <span style="font-size: 30px; margin: 0px 30px">{{ item.name }}</span>
        </div>
        <div>
          <el-button @click="$router.push({name: 'metric-history'})">History</el-button>
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
      metrics: [
        {
          "name": "Account balance",
        },
        {
          "name": "Operator performance",
        },
        {
          "name": "Operator status",
        },
        {
          "name": "Operator fee",
        },
        {
          "name": "XXXXXXXXXX",
        },
        {
          "name": "XXXXXXXXXX",
        },
        {
          "name": "XXXXXXXXXX",
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
