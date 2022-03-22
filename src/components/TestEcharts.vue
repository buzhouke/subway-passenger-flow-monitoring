<template>
  <v-chart class="chart" :option="option" />

  <BarChartA :id="barId" :dataXRED="dataX" :dataYRED="dataY" pieColor="white" />
  <PieChartA
    :id="pierId"
    :pieDataList="pieDataList"
  ></PieChartA>
</template>

<script>
import BarChartA from "./charts/BarChartA.vue";
import PieChartA from './charts/PieChartA.vue';
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);
export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
    BarChartA,
    PieChartA
    // 注意添加component^_^
  },
  provide: {
    [THEME_KEY]: "light"
  },
  setup () {
    const option = ref({
      legend: {},
      tooltip: {},
    dataset: {
        // 提供一份数据。
        source: [
            ['product', '2015',  '2017'],
            ['Matcha Latte', 43.3, 93.7],
            ['Milk Tea', 83.1, 55.1],
            ['Cheese Cocoa', 86.4, 82.5],
            ['Walnut Brownie', 72.4, 39.1]
        ]
    },
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: {type: 'category'},
    // 声明一个 Y 轴，数值轴。
    yAxis: {},
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [
        {type: 'bar'},
        {type: 'bar'}
    ]
    });

    return { option };
  },
  methods: {
  // 使用方法来修改值，模拟axios请求
    changeDataRedX () {
      this.dataRedY = [15, 15, 36, 10, 15, 20]
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pierId: 'colorRed',
      barId:'testForBarId',
      dataX: ['衬衫', '羊毛', '雪纺', '裤子', '高跟', '袜子'],
      dataY: [5, 20, 36, 10, 10, 20],
      pieDataList:[ 
        { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' },]
    }
  }


});
method:{

}
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
