<template>
    <QQContainer>
      <UserInfo></UserInfo>
    </QQContainer>
</template>

<script>
import QQContainer from '@/components/QQContainer.vue'
import UserInfo from '@/components/UserInfo.vue'

export default {
  name: 'HomeView',
  components: {
    QQContainer,
    UserInfo
  }
}
</script>

<style>
</style>
