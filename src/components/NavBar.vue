<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <router-link class="navbar-brand" :to="{name: 'home'}">Webchat</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link :class="route_name == 'chat' ? 'nav-link active' : 'nav-link'" 
                :to="{name: 'chat'}">聊天</router-link>
              </li>
              <li class="nav-item">
                <router-link :class="route_name == 'friend' ? 'nav-link active' : 'nav-link'"
                :to="{name: 'friend'}">好友</router-link>
              </li>
              <li class="nav-item">
                <router-link :class="route_name == 'post' ? 'nav-link active' : 'nav-link'" 
                :to="{name: 'post'}">动态</router-link>
              </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link :class="route_name == 'login' ? 'nav-link active' : 'nav-link'" 
                  :to="{name: 'login'}">登录</router-link>
                </li>
                <li class="nav-item">
                  <router-link :class="route_name == 'register' ? 'nav-link active' : 'nav-link'" 
                  :to="{name: 'register'}">注册</router-link>
                </li>
              </ul>
          </div>
        </div>
      </nav>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    name: 'NavBar',
    setup() {
        const route = useRoute();
        let route_name = computed(() => route.name);
        return {
            route_name
        }
    }
}
</script>

<style scoped>
button {
    margin-right: 15px;
}
</style>