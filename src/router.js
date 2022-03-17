import { createRouter, createWebHistory } from 'vue-router'
import TestEcharts from './components/TestEcharts.vue'
import Test from './components/views/Test.vue'
import BigScreen from './components/views/BigScreen.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
   {
      path: '/realtime',
      component: Test,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: 'a', component: TestEcharts },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'b', component: BigScreen },

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'posts', component: TestEcharts },
      ],
    }
  ],
})