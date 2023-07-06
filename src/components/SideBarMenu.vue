<template>
  <el-row class="tac">
    <el-col :span="12">
      <!-- <h5 class="mb-2">.</h5> -->
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
      <div class="selector-wrapper">
          <el-scrollbar class="selector-scrollbar" max-height="400px">

            <el-sub-menu index="1">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>Location</span>
          </template>

          <el-menu-item-group title="Area">
            <el-menu-item :index="`1-${areaIndex}`" 
                          v-for="(area, areaIndex) in formDataArraysList[0]" 
                          :key="areaIndex">
              {{area}}
            </el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="Nation">
            <el-menu-item :index="`1-${nestedIndex + nationIndex}`" 
                          v-for="(nation, nationIndex) in formDataArraysList[1]" 
                          :key="nationIndex">
              {{nation}}
            </el-menu-item>
          </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <el-icon><IconMenu /></el-icon>
                <span>Popularity</span>
              </template>

              <el-menu-item-group>
                <el-menu-item :index="`1-${nestedIndex + formDataArraysList[1].length + popularityIndex}`" 
                              v-for="(popularity, popularityIndex) in formDataArraysList[2]" 
                              :key="popularityIndex">
                  {{popularity}}
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>

          </el-scrollbar>
      </div>



        <!-- <el-menu-item index="3" disabled>
          <el-icon><Document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item> -->
      </el-menu>
    </el-col>
  </el-row>
</template>
  
<script>
import {
  Location,
  Menu as IconMenu,
  // Document,
  // Setting,
} from '@element-plus/icons-vue';

export default {
  name: 'SideBarMenu',
  components: {
    Location,
    IconMenu,
    // Document,
    // Setting,
  },
  props: {
    formDataArraysList: {
      type: Array,
      required: true
    }
  },
  computed: {
    nestedIndex() {
      return this.formDataArraysList[0].length;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>