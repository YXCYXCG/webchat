<template>
    <ContainerBase>
        <div class="row">
            <div class="col-4">
                <userInfo/>
                <FriendList/>
            </div>
            <div class="col-8">
                <ChatContent/>
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

export default {
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


