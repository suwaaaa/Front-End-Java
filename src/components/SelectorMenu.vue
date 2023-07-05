<template>
    <el-row>
        <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-select v-model="value" clearable placeholder="Select" @change="update">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-select>
        </el-col>
        <el-col :span="2"><div class="grid-content ep-bg-purple-light" /></el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-select v-model="value" clearable placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-select>
        </el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
    </el-row>
</template>

<script>
import { ref } from 'vue'
// import { defineComponent } from '@vue/composition-api'

export default({
    setup() {
        const value = ref('')
        const options = ref([
        {
            value: 'Option1',
            label: 'Option1',
        },
        {
            value: 'Option2',
            label: 'Option2',
        },
        {
            value: 'Option3',
            label: 'Option3',
        },
        {
            value: 'Option4',
            label: 'Option4',
        },
        {
            value: 'Option5',
            label: 'Option5',
        },
        ])

        return {
            value,
            options,
        }
    },
    methods: {
        update() {
            this.$emit('updateValue', this.value);
        },
    },
})
</script>