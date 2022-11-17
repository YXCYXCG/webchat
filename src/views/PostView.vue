<template>
    <ContainerBase>
        <div class="row">
            <div class="col-3">
                <UserInfo/>
                <WriteBase/>
            </div>
            <div class="col-9">
                <PostContent/>
            </div>
        </div>
    </ContainerBase>
</template>

<script>
import ContainerBase from '../components/ContainerBase.vue'
import UserInfo from '../components/UserInfo.vue'
import WriteBase from '../components/WriteBase.vue'
import PostContent from '../components/PostContent.vue'

export default {
    components: {
        ContainerBase,
        UserInfo,
        WriteBase,
        PostContent,
    }
}
</script>

<style>
</style>


