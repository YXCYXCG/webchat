<template>
    <QQContainer>
        <form>
            <div class="mb-3">
              <label for="username" class="form-label">用户名</label>
              <input type="text" class="form-control" id="username">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密码</label>
              <input type="password" class="form-control" id="password">
            </div>
            <div class="error-message">{{ error_message }}</div>
            <button type="submit" class="btn btn-primary">登录</button>
            <router-link :to="{name: 'register'}" class="nav-link">没有账号? 点击注册！</router-link>
          </form>
    </QQContainer>
</template>

<script>
import QQContainer from '@/components/QQContainer.vue';
import { ref } from 'vue';

export default {
    name: 'LoginView',
    components: {
        QQContainer
    },

    setup() {
        let error_message = ref('');

        return {
            error_message
        }
    }
}
</script>

<style scoped>
.nav-link {
    float: right;
    color: gray;
    margin-top: 6px;
}
</style>