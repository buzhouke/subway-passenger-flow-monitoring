<template>
  <div class="chart" :id="id" >
  </div>
</template>

<script>
export default {
  name: "LineChartB"
  ,
  props: {
    id: String,
    title:String,
    legend:Array,
    dataX: Array,
    series: Array,
    lineColor: String
  }
  ,
  data() {
    return {
      msg: 'successful for bar chart'
    }
  },

  watch: {
    dataY: function (newQuestion, oldQuestion) {
      this.drawLine()
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      // const curr = getCurrentInstance();
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
            title: {
              text: this.title
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: this.legend
                  // ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: this.dataX
            },
            yAxis: {
              type: 'value'
            },
            series: this.series
            // [
            //   {
            //     name: 'Email',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [120, 132, 101, 134, 90, 230, 210]
            //   },
            //   {
            //     name: 'Union Ads',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [220, 182, 191, 234, 290, 330, 310]
            //   },
            //   {
            //     name: 'Video Ads',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [150, 232, 201, 154, 190, 330, 410]
            //   },
            //   {
            //     name: 'Direct',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [320, 332, 301, 334, 390, 330, 320]
            //   },
            //   {
            //     name: 'Search Engine',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [820, 932, 901, 934, 1290, 1330, 1320]
            //   }
            // ]
      }
      )
    }
  }
}
</script>

<style scoped>

</style>