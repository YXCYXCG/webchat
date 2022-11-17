<template>
    <ContainerBase>
      <div class="home">home</div>
    </ContainerBase>
</template>

<script>
import ContainerBase from '@/components/ContainerBase.vue'

export default {
  name: 'HomeView',
  components: {
    ContainerBase
  }
}
</script>

<style scoped>
.home {
  height: 56vh;
}
</style>
