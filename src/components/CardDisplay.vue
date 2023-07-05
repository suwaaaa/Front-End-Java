<template>
    <el-row class="card-display-content">
        <el-col
        v-for="(o, index) in 3"
        :key="o"
        :span="6"
        :offset="index > 0 ? 2 : 0"
        >
            <el-card :body-style="{ padding: '1px' }">
                <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
                />
                <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <el-button text class="button">Operating</el-button>
                </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import { ref } from 'vue'
export default({
    setup() {
        const currentDate = ref(new Date())
        // 返回响应式引用，这样模板中就可以访问它们了
        return {
            currentDate
        }
    },
})
</script>