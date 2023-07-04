<template>
  <el-row  class="banner">
    <el-col :span="24">
      <div class="grid-content ep-bg-purple-dark" />
      <div class="image-container">
        <img src="./assets/background.jpg" alt="Banner" />
      </div>
    </el-col>
  </el-row>


  <el-row>
    <el-col :span="24">
      <div class="grid-content ep-bg-purple" />
      <el-row>
        <el-col :span="12">
          <div class="grid-content ep-bg-purple" />
          <SideBarMenu class="sidebar" />
        </el-col>
        <el-col :span="12">
          <div class="grid-content ep-bg-purple-light" />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import SideBarMenu from './components/SideBarMenu.vue'


export default {
  name: 'App',
  activeIndex : ref('1'),
  components: {
    // HelloWorld
    SideBarMenu
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
