<template>
  <div class="chart" :id="id">
  </div>
</template>

<script>
export default {
  name: 'PieChartA',
  props: {
    id: String,
    title:String,
    pieDataList: Array,
    pieColor: String,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },

  watch: {
    dataYRED: function (newQuestion, oldQuestion) {
      this.drawLine();
    },
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart;
      // 基于准备好的dom，初始化echarts实例
      // const curr = getCurrentInstance();
      if (myChart != null && myChart !== "" && myChart !== undefined) {
        myChart.dispose();
      }
      myChart  =  this.echarts.init(document.getElementById(this.id));
      // 绘制图表
      myChart.setOption({
        legend: {
          top: 'bottom',
        },
        title: { text: this.title },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 6,
            },
            data: this.pieDataList
          },
        ],
      });
    },
  },
};
</script>
