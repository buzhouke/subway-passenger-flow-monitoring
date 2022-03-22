<template>
 <p>Has published books:</p>
<span>{{ publishedBooksMessage }}</span>
 <v-chart class="chart" :option="option" />

</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

// const option = {
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [120, 200, 150, 80, 70, 110, 130],
//       type: 'bar'
//     }
//   ]
// };



export default {
  name: "BarChartA",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "light"
  },
  setup () {
    const option = ref({
      legend: {},
    tooltip: {},
    title: {
    text: '客流总量统计',
    subtext: 'Living Expenses in Shenzhen'
  },
    
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: {type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    // 声明一个 Y 轴，数值轴。
    yAxis: {
      type:'value'
    },
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'}
  
    ]
    });

    return { option };
  },
   data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
};


</script>