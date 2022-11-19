<template>
    <div class="friend-list">
        <div v-for="user in friend.user" :key="user.id">
            <div class="card-body" @click="chat_with(user.id)">
                <div class="row">
                    <div class="col-3">
                        <img class="img-field" :src="user.photo" alt="">
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

export default {
    name: 'FriendList',
    props: {
        friend: {
            type: Object,
            requested: true
        }
    },
    setup(props, context) {
        const chat_with = (user_id) => {
            context.emit("chat_with", user_id);
        }
        return {
            chat_with
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 140px;
}
.note {
    font-size: smaller;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 140px;
}

</style>

