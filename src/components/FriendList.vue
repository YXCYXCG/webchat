<template>
    <div></div>
</template>

<script>
import { reactive } from 'vue'

export default {
    setup() {
        const user1 = reactive({
            name: "夕阳的刻痕",
            pose: "每一个传说，都会随时间褪色",
            time: "09:15",
            photo: "@/assets/images/xiyang.png"
        });
        const user2 = reactive({
            name: "夕阳的刻痕1",
            pose: "每一个传说，都会随时间褪色",
            time: "09:15",
            photo: "@/assets/images/xiyang.png"
        });
        const user3 = reactive({
            name: "夕阳的刻痕2",
            pose: "每一个传说，都会随时间褪色",
            time: "09:15",
            photo: "@/assets/images/xiyang.png"
        });
        const user4 = reactive({
            name: "夕阳的刻痕3",
            pose: "每一个传说，都会随时间褪色",
            time: "09:15",
            photo: "@/assets/images/xiyang.png"
        });
        return {
            user1,
            user2,
            user3,
            user4
        }
    }
}
</script>

<style>
</style>

