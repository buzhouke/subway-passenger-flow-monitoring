<template>
 <div class="block">
        <span>请选择月份</span>
        <el-date-picker
          v-model="monthA"
          type="month"
          placeholder="Pick a month"
          :default-value="new Date(2019, 1, 1)"
        />
      </div>
  <BarChartA :id="barId" :dataXRED="dataX" :dataYRED="dataY" pieColor="white" />
  <PieChartA
    :id="pierId"
    :pieDataList="pieDataList"
  ></PieChartA>
</template>
<script>
import BarChartA from "../charts/BarChartA.vue";
import PieChartA from '../charts/PieChartA.vue';
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  components: {
    // VChart,
    BarChartA,
    PieChartA
    // 注意添加component^_^
  },
  
  setup () {
    const monthA = ref('')
  

    return { monthA };
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
