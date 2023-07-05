<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row  class="banner">
          <el-col :span="24">
            <div class="grid-content ep-bg-purple-dark" />
            <div class="image-container banner">
              <img src="./assets/background.jpg" alt="Banner" />
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="grid-content ep-bg-purple" />
          <SideBarMenu class="sidebar" />
        </el-aside>
        <el-main>
          <div class="common-layout">
            <el-container>
              <el-header>
                <SelectorMenu @updateValue="handleUpdate" />
              </el-header>
              <el-main>
                <CardDisplay/>
              </el-main>
            </el-container>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import { ref } from 'vue' 
import SideBarMenu from './components/SideBarMenu.vue'
import SelectorMenu from './components/SelectorMenu.vue'
import CardDisplay from './components/CardDisplay.vue';

export default {
  name: 'App',
  components: {
    SideBarMenu, SelectorMenu, CardDisplay
  },
  data(){
    return {
      selectedValue: '',
    };
  },
  methods: {
    handleUpdate(value) {
      this.selectedValue = value;
    },
  },
}
</script>

<style>

</style>
