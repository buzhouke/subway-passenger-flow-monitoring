<template>
  <div class="chart" :id="id" >
  <!-- :style="{width: '300px', height: '300px'}" -->
  </div>
</template>

<script>
export default {
  name: 'BarChartA',
  props: {
    id: String,
    dataX: Array,
    dataY: Array,
    pieColor: String
  },
  data () {
    return {
      msg: 'successful for bar chart'
    }
  },
  
  watch: {
    dataY: function (newQuestion, oldQuestion) {
      this.drawLine()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart;
      // 基于准备好的dom，初始化echarts实例
      // const curr = getCurrentInstance();
      if (myChart != null && myChart !== "" && myChart !== undefined) {
        myChart.dispose();
      }
      myChart  =   this.echarts.init(document.getElementById(this.id))
      // 绘制图表
      myChart.setOption({
        backgroundColor: this.pieColor,
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: this.dataX
        },
         toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.dataY
        }]
      })
    }
  }
}
</script>

