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
    title:String,
    dataXRED: Array,
    dataYRED: Array,
    pieColor: String
  },
  data () {
    return {
      msg: 'successful for bar chart'
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
      // 基于准备好的dom，初始化echarts实例
      // const curr = getCurrentInstance();
      let myChart =  this.echarts.init(document.getElementById(this.id))
      // 绘制图表
      myChart.setOption({
        backgroundColor: this.pieColor,
        title: { text: this.title },
        tooltip: {},
        xAxis: {
          data: this.dataXRED
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
          type: 'line',
          data: this.dataYRED
        }]
      })
    }
  }
}
</script>

