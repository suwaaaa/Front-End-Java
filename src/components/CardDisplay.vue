<template>
    <div class="selector-wrapper">
        <el-scrollbar class="selector-scrollbar" max-height="400px">
            <el-row class="card-display-content">
                <el-col
                    v-for="(displayCard, index) in displayCardList"
                    :key="index"
                    :span="6"
                    :offset="index > 0 ? 0 : 0"
                    >
                    <el-card :body-style="{ padding: '1px' }">
                                <img
                                    :src="require(`@/${displayCard.imagePath}`)"
                                    class="image"
                                />
                                <div style="padding: 14px">
                                    <span>&lt;{{displayCard.name}}> </span>
                                    <span>&lt;Popular: {{ displayCard.popularity }}></span>
                                    <div class="bottom">
                                        <time class="time">
                                            {{ displayCard.productionDate }}
                                             -- {{ displayCard.area }}:{{ displayCard.nation }}
                                        </time>
                                        <el-button text class="button" aria-readonly="true">
                                            {{displayCard.price}} Yuan / {{ displayCard.remaining }} left
                                        </el-button>
                                    </div>
                                </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-scrollbar>
    </div>
</template>

<script>
import { ref } from 'vue'
export default({

    props: {
        displayCardList:{
            type: Array,
            required: true
        }
    },
    setup() {
        const currentDate = ref(new Date())
        return {
            currentDate
        }
    },
    
})
</script>