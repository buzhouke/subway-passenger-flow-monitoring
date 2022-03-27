<template>
  <div class="chart" :id="id" >
  </div>
</template>

<script>
export default {
  name: 'LineChartA',
  props: {
    id: String,
    title:String,
    dataX: Array,
    dataY: Array,
    lineColor: String
  },
  data () {
    return {
      msg: 'successful for line chart'
    }
  },
  
  watch: {
    dataYRED: function (newQuestion, oldQuestion) {
      this.drawLine()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {

    drawLine () {
      let myChart;
      // 基于准备好的dom，初始化echarts实例
      // const curr = getCurrentInstance();
      if (myChart != null && myChart !== "" && myChart !== undefined) {
        myChart.dispose();
      }
      myChart  =  this.echarts.init(document.getElementById(this.id))
      // 绘制图表
      myChart.setOption({
        backgroundColor: this.lineColor,
        title: { text: this.title },
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
          name: '单条线',
          type: 'line',
          data: this.dataY
        }]
      })
    }
  }
}
</script>

