<template>
  <div class="common-layout">
    <el-container>
      <el-header><h1>BUZHOU-地铁客流监测分析系统</h1></el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><IconMenu /></el-icon>
                <span>历史客流</span>
              </template>
              <el-menu-item index="/history_time/month">单月客流</el-menu-item>
              <el-menu-item index="/history_time/week">单周客流</el-menu-item>
              <el-menu-item index="/history_time/day"> 单日客流</el-menu-item>
            </el-sub-menu>

            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>近日客流</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><document /></el-icon>
              <span>实时客流</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>用户模块</span>
            </el-menu-item>
          </el-menu></el-aside
        >
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue';
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
