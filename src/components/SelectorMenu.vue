<template>
    <el-row>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
            Price
            <div class="slider-demo-block">
                <el-slider v-if="priceLimits.max !== null && 0 <= priceLimits.max"
                v-model="priceRange" 
                range 
                show-stops 
                :max="priceLimits.max"
                @change="emitPrice"/>
            </div>
        </el-col>
        <el-col :span="2">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
            Remaining
            <div class="slider-demo-block">
                <el-slider v-if="remainingLimits.max !== null && 0 <= remainingLimits.max"
                v-model="remainingRange" 
                range 
                show-stops 
                :max="remainingLimits.max"
                @change="emitRemaining"/>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
    </el-row>
</template>

<script>
import { watchEffect, ref, reactive } from 'vue'

export default ({
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    setup(props, { emit }) {
        const priceRange = ref([]);
        const remainingRange = ref([]);
        const priceLimits = reactive({ min: 0, max: 0 });
        const remainingLimits = reactive({ min: 0, max: 0 });


        watchEffect(() => {
            if (props.options.length > 0) {
                priceLimits.min = Math.min(...props.options[0]);
                priceLimits.max = Math.max(...props.options[0]);
                remainingLimits.min = Math.min(...props.options[1]);
                remainingLimits.max = Math.max(...props.options[1]);

                priceRange.value = [priceLimits.min, priceLimits.max];
                remainingRange.value = [remainingLimits.min, remainingLimits.max];
            }
        });

        const emitPrice = (newPriceRange) => {
            emit('updatePrice', newPriceRange);
        };

        const emitRemaining = (newRemainingRange) => {
            emit('updateRemaining', newRemainingRange);
        };

        return {
            priceRange,
            priceLimits,
            remainingRange,
            remainingLimits,
            emitPrice,
            emitRemaining
        }
    },
})
</script>
<style scoped>
.slider-demo-block {
    display: flex;
    align-items: center;
}

.slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
}
</style>