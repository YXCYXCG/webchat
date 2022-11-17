<template>
    <ContainerBase>
        <ChatContent/>
        <WriteBase/>
    </ContainerBase>
</template>

<script>
import ContainerBase from '../components/ContainerBase.vue'
import ChatContent from '../components/ChatContent.vue'
import WriteBase from '../components/WriteBase.vue'

export default {
    components: {
        ContainerBase,
        ChatContent,
        WriteBase
    }
}
</script>

<style>
</style>


