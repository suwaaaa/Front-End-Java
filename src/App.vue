<template>
  <div class="common-layout">
    <el-container class="main-container">

      <el-header class="header-wrapper">
        <div class="logo-container">
            <img src="./assets/logo.jpg" alt="Logo" class="logo" />
          </div>
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
                    <div class="selector-menu-wrapper">
                      <SelectorMenu v-if="selectionOptionsList.length"
                      @updatePrice="handleUpdatePrice"
                      @updateRemaining="handleUpdateRemaining"
                      :options="selectionOptionsList" />
                    </div>
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
import { ref, computed, onMounted, onUnmounted, reactive  } from 'vue' //watchEffect
import SideBarMenu from './components/SideBarMenu.vue'
import SelectorMenu from './components/SelectorMenu.vue'
import CardDisplay from './components/CardDisplay.vue';
import HeaderImage from './components/HeaderImage.vue'
import axios from 'axios';
import eventBus from '../src/eventBus';

export default {
  name: 'App',
  components: {
    SideBarMenu, SelectorMenu, CardDisplay, HeaderImage
  },
  data(){
    return {
      selectedValue: '',
    };
  },
  setup() {
    const productsList = ref([]);
    const filterProps = reactive({ area: null, nation: null, popularity: null });
    
    axios.get("http://localhost:8888/products").then((response) => {
      productsList.value = response.data;
    });

    const formDataArraysList = computed(() => {
      if (!productsList.value.length) {
        return []; 
      }
      const resultList = ['area', 'nation', 'popularity'].map(prop => {
        return [...new Set(productsList.value.map(product => product[prop]))];
      });
      return resultList;
    });


    const displayCardList = computed(() => {
      let displayCardResultArr = productsList.value;
      ['area', 'nation', 'popularity'].forEach(prop => {
        if (filterProps[prop]) {
          displayCardResultArr = displayCardResultArr.filter(product => product[prop] === filterProps[prop]);
        }
      });

      displayCardResultArr = displayCardResultArr.filter(product => filterPrice.value[0] <= product.price && product.price <= filterPrice.value[1]);
      displayCardResultArr = displayCardResultArr.filter(product => filterRemaining.value[0] <= product.remaining && product.remaining <= filterRemaining.value[1]);

      return displayCardResultArr.map(product => (
        {
          name: product.name,
          productionDate: product.productionDate,
          imagePath: product.imagePath,
          area: product.area,
          nation: product.nation,
          popularity: product.popularity,
          price: product.price,
          remaining: product.remaining
        }
      ))
    });
    const selectionOptionsList = computed(() => {
      const selectionOptionsArr = ['price', 'remaining'].map(prop => {
        const arr = productsList.value.map(product => product[prop]);
        arr.sort((a, b) => a - b);
        return arr;
      });
      return selectionOptionsArr;
    });


    onMounted(() => {
      ['area', 'nation', 'popularity'].forEach(prop => {
        eventBus.on(`send${capitalizeFirstLetter(prop)}`, (value) => {
          Object.keys(filterProps).forEach(k => filterProps[k] = k === prop ? value : null);
        });
      });
    });
    onUnmounted(() => {
      ['area', 'nation', 'popularity'].forEach(prop => {
        eventBus.off(`send${capitalizeFirstLetter(prop)}`);
      });
    });
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }


    let filterPrice = ref([0, Infinity]); // 初始值，范围是无限大
    const handleUpdatePrice = (newPriceRange) => {
      filterPrice.value = newPriceRange;
    };
    let filterRemaining = ref([0, Infinity]); // 初始值，范围是无限大
    const handleUpdateRemaining = (newRemainingRange) => {
      filterRemaining.value = newRemainingRange;
    };


    return{
      productsList,
      formDataArraysList,
      displayCardList,
      selectionOptionsList,
      handleUpdatePrice,
      handleUpdateRemaining
    }
  },
  mounted() {
    this.formDataArraysList.value;
    this.selectionOptionsList.value;
  }
}
</script>
