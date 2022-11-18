<template>
    <div class="friend-list">
        <div v-for="user in friend.user" :key="user.id">
            <div class="card-body" @click="console.log(user)">
                <div class="row">
                    <div class="col-3">
                        <img class="img-field" src="@/assets/images/xiyang.png" alt="">
                    </div>
                    <div class="col-9">
                        <div class="note1">{{ user.name }}</div>
                        <div class="note">{{ user.pose }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    name: 'FriendList',
    setup() {
        const friend = reactive({
            user: [
                {
                    id: 1,
                    name: "夕阳的刻痕",
                    pose: "夕阳，夕阳！",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 2,
                    name: "小车轮",
                    pose: "咕噜咕噜",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 3,
                    name: "四月",
                    pose: "你是人间四月天",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 4,
                    name: "白天不懂夜的黑",
                    pose: "...",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 5,
                    name: "猪八戒",
                    pose: "好春光不如梦一场",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 6,
                    name: "leetcode",
                    pose: "一起刷题吧！",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 7,
                    name: "夕阳的刻痕",
                    pose: "夕阳，夕阳！",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 8,
                    name: "小车轮",
                    pose: "咕噜咕噜",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 9,
                    name: "四月",
                    pose: "你是人间四月天",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 10,
                    name: "白天不懂夜的黑",
                    pose: "...",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 11,
                    name: "猪八戒",
                    pose: "好春光不如梦一场",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                },
                {
                    id: 12,
                    name: "leetcode",
                    pose: "一起刷题吧！",
                    time: "09:15",
                    photo: "@/assets/images/xiyang.png"
                }
            ]
        });
        return {
            friend
        }
    }
}
</script>

<style scoped>
.img-field {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.friend-list {
    height: 410px;
    overflow: auto;
}
.note1 {
    font-size: small;
    font-weight: bold;
}
.note {
    font-size: smaller;
}
</style>

