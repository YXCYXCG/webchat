<template>
    <div class="content">
        <div class="card card1">
            <div class="card-body">
                <div class="nickname">{{ user.name }}</div>
                <div class="chat_field">
                    <div class="sentence" v-for="record in user.record" :key="record.id">
                        <div class="card">
                            <div class="card-body">
                                <div v-if="record.flag" class="left">
                                    <div class="row">
                                        <div class="col-2">
                                            <img class="img-field" :src="user.photo" alt="">
                                        </div>
                                        <div class="col-10">
                                            {{ record.content }}
                                            <div class="time1">{{ record.time }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="!record.flag" class="right">
                                    <div class="row">
                                        <div class="col-10">
                                            <div class="time2">{{ record.time }}</div>
                                            {{ record.content }}
                                        </div>
                                        <div class="col-2">
                                            <img class="img-field" src="@/assets/images/photo.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            requested: true
        },
    },
}
</script>

<style scoped>
.content {
    height: 50vh;
}
.card1 {
    height: 50vh;
}
.nickname {
    margin-bottom: 10px;
    font-size: large;
    font-weight: bold;
}
.left {
    float: left;
}
.right {
    float: right;
}
.chat_field {
    height: 310px;
    overflow: auto;
}
.img-field {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.time1 {
    margin-right: 8px;
}
.time2 {
    margin-left: 8px;
}
.sentence {
    margin-bottom: 8px;
}
</style>


