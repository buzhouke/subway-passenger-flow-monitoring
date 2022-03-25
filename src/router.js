import { createRouter, createWebHistory } from 'vue-router'
import TestEcharts from './components/TestEcharts.vue'
import Test from './components/views/Test.vue'
import BigScreen from './components/views/BigScreen.vue'
import history_month from './components/analysis/HistoryMonthAnalysis.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
   {
      path: '/real_time',
      component: Test,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: 'month', component: TestEcharts },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'week', component: BigScreen },

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'day', component: TestEcharts },

       
      ],
      path:'/history_time',
      component:Test,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: 'month', component: history_month },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'week', component: BigScreen },

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'day', component: TestEcharts },

       
      ],
    }
  ],
})