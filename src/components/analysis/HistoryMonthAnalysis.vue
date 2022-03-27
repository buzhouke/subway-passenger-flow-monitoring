<template>
  <LineChartA
      :id="lineId"
      :title="titleA"
      :dataX="stationCountList"
      :dataY="stationInList"
      lineColor="white"
  />
  <LineChartB
  :id="lineIdB"
  :title="titleB"
  :legend="legendB"
  :dataX = "dataXB"
  :series="seriesB"
 />

  <div class="block">
    <span>请选择月份:</span>
    <el-date-picker
        v-model="monthA"
        type="month"
        placeholder="Pick a month"
        :default-value="new Date(2019, 1, 1)"
    />
  </div>
  <BarChartA :id="barId" :dataX="stationCountList"
             :dataY="stationInList" pieColor="white"/>
  <!-- <PieChartA
    :id="pierId"
    :pieDataList="pieDataList"
  /> -->

  <el-row>
    <el-col :span="10">
      <PieChartA :id="pierId" :title="titleC" :pieDataList="pieDataList"
      />
    </el-col>
    <el-col :span="2">
      <!-- <PieChartA :id="pierId" :pieDataList="pieDataList" -->
    </el-col>
    <el-col :span="12">
      <h4>Top 3 线路</h4>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="Date" width="180"/>
        <el-table-column prop="name" label="Name" width="180"/>
        <el-table-column prop="address" label="Address"/>
      </el-table>

      <h4>Top 3 线路</h4>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="Date" width="180"/>
        <el-table-column prop="name" label="Name" width="180"/>
        <el-table-column prop="address" label="Address"/>
      </el-table>
    </el-col>

  </el-row>
</template>
<script>
import BarChartA from "../charts/BarChartA.vue";
import PieChartA from '../charts/PieChartA.vue';
import LineChartA from '../charts/LineChartA.vue';
import {ref, defineComponent} from "vue";
import LineChartB from "../charts/LineChartB.vue";
import axios from "axios";


export default defineComponent({
  name: "HelloWorld",
  components: {
    LineChartB,
    // VChart,
    BarChartA,
    PieChartA,
    LineChartA
    // 注意添加component^_^
  },

  setup() {
    const monthA = ref('');

    return {monthA};
  },
  methods: {
    // 使用方法来修改值，模拟axios请求
    changeDataRedX() {
      this.dataRedY = [15, 15, 36, 10, 15, 20]
    },
    getData() {
      var api = "http://localhost:8084/history/station/45/20200708";
      //2.使用axios 进行get请求
      axios.get(api).then((res) => {
        //请求成功的回调函数
        console.log(res)
        const data = res.data
        console.log(data)
        this.stationCountList = data.data.stationCountList
        this.stationInList = data.data.stationInList
        console.log(this.stationCountList)
      }).catch((err) => {
        //请求失败的回调函数
        console.log(err)
      })
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      lineId: 'testForLine',
      lineIdB:'testForLineB',
      pierId: 'colorRed',
      titleA: '总客流统计',
      titleB: '各线路客流统计',
      legendB: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      dataXB: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      seriesB:[
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ],
      titleC: '每月线路客流统计',
      barId: 'testForBarId',
      dataX: [],
      dataY: [],
      stationInList: [],
      stationCountList: [],
      pieDataList: [
        {value: 40, name: 'rose 1'},
        {value: 38, name: 'rose 2'},
        {value: 32, name: 'rose 3'},
        {value: 30, name: 'rose 4'},
        {value: 28, name: 'rose 5'},
        {value: 26, name: 'rose 6'},
        {value: 22, name: 'rose 7'},
        {value: 18, name: 'rose 8'}
      ],
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },

      ]

    }
  },
  mounted() {
    this.getData()
  }
});

</script>
/*
<style scoped>
/* .chart {
  height: 400px;
} */
</style>
*/
