<template>
    <ContainerBase>
        <div class="row">
            <div class="col-4">
                <userInfo/>
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
import userInfo from '../components/UserInfo.vue'

export default {
    components: {
    ContainerBase,
    ChatContent,
    WriteBase,
    userInfo
}
}
</script>

<style scoped>
</style>


