<template>
  <div class="common-layout">
    <el-container class="main-container">

      <el-header class="header-wrapper">
        <el-row class="banner">
          <el-col :span="24">
            <HeaderImage/>
          </el-col>
        </el-row>
      </el-header>
      
      <el-container class="sub-container">
            <el-aside width="200px">
              <div class="grid-content ep-bg-purple" />
              <SideBarMenu class="sidebar" :formDataArraysList = "formDataArraysList" />
            </el-aside>

            <el-main>
              <div class="common-layout">
                <el-container>
                  <el-header>
                    <SelectorMenu @updateValue="handleUpdate" />
                  </el-header>

                  <el-main>
                    <CardDisplay :displayCardList="displayCardList"/>
                  </el-main>
                </el-container>
              </div>
            </el-main>
      </el-container>
      
    </el-container>
  </div>
</template>

<script>
import { ref, watchEffect, computed  } from 'vue' 
import SideBarMenu from './components/SideBarMenu.vue'
import SelectorMenu from './components/SelectorMenu.vue'
import CardDisplay from './components/CardDisplay.vue';
import HeaderImage from './components/HeaderImage.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    SideBarMenu, SelectorMenu, CardDisplay, HeaderImage
  },
  data(){
    return {
      selectedValue: '',
      // productsList: []
    };
  },
  setup() {
    const productsList = ref([]);
    axios.get("http://localhost:8888/products").then((response) => {
      productsList.value = response.data;
      productsList.value.forEach(product => {
        console.log(product);
      });
    });
    const formDataArraysList = computed(() => {
      if (!productsList.value.length) {
        return []; 
      }
      const resultList = new Array();
      const areaArray = [...new Set(productsList.value.map(product => product.area))];
      resultList.push(areaArray);
      const nationArray = [...new Set(productsList.value.map(product => product.nation))];
      resultList.push(nationArray);
      const popularityArray = [...new Set(productsList.value.map(product => product.popularity))];
      resultList.push(popularityArray);

      
      console.log(resultList)
      return resultList;
    });
    watchEffect(() => {
      formDataArraysList.value; // 触发 computed 属性以监听变化
    });
    const displayCardList = computed(() => {
      const displayCardResultArr = productsList.value.map(product => (
        {
          name: product.name,
          productionDate: product.productionDate,
          imagePath: product.imagePath,
          price: product.price
        }
      ))
      console.log(displayCardResultArr);
    return displayCardResultArr;
    });
    return{
      productsList,
      formDataArraysList,
      displayCardList
    }
  },
  methods: {
    handleUpdate(value) {
      this.selectedValue = value;
    },
  },
  mounted() {
    this.formDataArraysList.value;
  }
}
</script>
