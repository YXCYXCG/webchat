<template>
    <ContainerBase>
        <div class="row">
            <div class="col-4">
                <userInfo/>
                <FriendList :friend="friend" @chat_with="chat_with"/>
            </div>
            <div class="col-8">
                <ChatContent :user="user" :chat_record="chat_record"/>
                <WriteBase/>
            </div>
        </div>
    </ContainerBase>
</template>

<script>
import ContainerBase from '../components/ContainerBase.vue'
import ChatContent from '../components/ChatContent.vue'
import WriteBase from '../components/WriteBase.vue'
import UserInfo from '../components/UserInfo.vue'
import FriendList from '../components/FriendList.vue'
import { reactive } from 'vue'

export default {
    setup() {
        const friend = reactive({
            user: [
                {
                    id: 1,
                    name: "夕阳的刻痕",
                    pose: "夕阳，夕阳！",
                    photo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.ex7IED2b2rO_8YdslDUD_gAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    record: [
                        {
                            id: 1,
                            flag: true,
                            time: "09:15",
                            content: "定义和用法 push () 方法可向数组的末尾添加一个或多个元素，并返回新的长度",
                        },
                        {
                            id: 2,
                            flag: false,
                            time: "09:16",
                            content: "新元素将添加在数组的末尾",
                        },
                        {
                            id: 3,
                            flag: false,
                            time: "09:17",
                            content: "此方法改变数组的长度",
                        },
                        {
                            id: 4,
                            flag: false,
                            time: "09:18",
                            content: "在数组起始位置添加元素请使用 unshift () 方法",
                        },
                        {
                            id: 5,
                            flag: true,
                            time: "09:19",
                            content: " 浏览器支持 所有主要浏览器都支持push ()",
                        },
                        {
                            id: 6,
                            flag: true,
                            time: "09:20",
                            content: "array.push(item1, item2, ..., itemX)",
                        },
                        {
                            id: 7,
                            flag: true,
                            time: "09:21",
                            content: "假如通过了前面的定义的用法，有时候也会出现提示push is not a function,这是什么原因呢",
                        }
                    ]
                },
                {
                    id: 2,
                    name: "小车轮",
                    pose: "咕噜咕噜",
                    record: [
                        {
                            id: 1,
                            flag: true,
                            content: "111",
                            time: "09:15",
                        },
                        {
                            id: 2,
                            flag: false,
                            content: "ok",
                            time: "09:16",
                        }
                    ],
                    photo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.yx5mTcLfCKgzZZfLvmIrrgAAAA?pid=ImgDet&rs=1"
                },
                {
                    id: 3,
                    name: "四月",
                    pose: "你是人间四月天",
                    record: [
                        {
                            id: 1,
                            flag: true,
                            content: "111",
                            time: "09:15",
                        },
                        {
                            id: 2,
                            flag: false,
                            content: "ok",
                            time: "09:16",
                        }
                    ],
                    photo: "https://ts1.cn.mm.bing.net/th/id/R-C.2419c9b504d3059bc3dc6aeb62484dea?rik=9HHEGJeF8bGH%2fg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f201912%2f31%2f1577777752307332.jpg&ehk=rGt1tqaHeWmGNwkOLz%2bDNFFOeWgXDBGEgAQQaVu%2fSNc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                },
                {
                    id: 4,
                    name: "白天不懂夜的黑",
                    pose: "满地都是六便士，我却抬头看见了月亮。",
                    time: "09:15",
                    record: [
                        {
                            id: 1,
                            flag: true,
                            content: "111",
                            time: "09:15",
                        },
                        {
                            id: 2,
                            flag: false,
                            content: "ok",
                            time: "09:16",
                        }
                    ],
                    photo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.cQDeMXE7vt5e5lj9iG6KDgAAAA?pid=ImgDet&rs=1"
                },
                {
                    id: 5,
                    name: "猪八戒",
                    pose: "好春光不如梦一场",
                    record: [
                        {
                            id: 1,
                            flag: true,
                            content: "111",
                            time: "09:15",
                        },
                        {
                            id: 2,
                            flag: false,
                            content: "ok",
                            time: "09:16",
                        }
                    ],
                    photo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.BeexxwzihAmBQE-4r0dPmAAAAA?pid=ImgDet&rs=1"
                },
                {
                    id: 6,
                    name: "leetcode",
                    pose: "一起刷题吧！",
                    record: [
                        {
                            id: 1,
                            flag: true,
                            content: "111",
                            time: "09:15",
                        },
                        {
                            id: 2,
                            flag: false,
                            content: "ok",
                            time: "09:16",
                        }
                    ],
                    photo: "https://p.qqan.com/up/2020-12/16081094031493116.jpg"
                },
                {
                    id: 7,
                    name: "步步",
                    pose: "realZYfamily",
                    record: [
                        {
                            id: 1,
                            flag: true,
                            content: "111",
                            time: "09:15",
                        },
                        {
                            id: 2,
                            flag: false,
                            content: "ok",
                            time: "09:16",
                        }
                    ],
                    photo: "https://ts1.cn.mm.bing.net/th/id/R-C.d57eec38eacc1d15983140054ee13f6d?rik=jp1RNJj37y2XTQ&riu=http%3a%2f%2fimg2.woyaogexing.com%2f2017%2f07%2f10%2f119e8efabe0125d7!400x400_big.jpg&ehk=%2fI3KHriZIBoFPyvuxQcBvlOaGWIj%2bezK5EgXahbPRw4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                },
            ]
        });
        const user = reactive({});
        const chat_with = user_id => {
            let user1 = friend.user[user_id - 1];
            user.name = user1.name;
            user.id = user1.id;
            user.pose = user1.pose;
            user.photo = user1.photo;
            user.record = [];
            for (let i = 0; i < user1.record.length; i ++ ) {
                user.record.push({
                    id: user1.record[i].id,
                    flag: user1.record[i].flag,
                    content: user1.record[i].content,
                    time: user1.record[i].time
                });
            }
        };
        return {
            friend,
            user,
            chat_with
        }
    },
    components: {
        ContainerBase,
        ChatContent,
        WriteBase,
        UserInfo,
        FriendList
    }
}
</script>

<style scoped>
</style>


