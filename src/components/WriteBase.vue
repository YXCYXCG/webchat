<template>
    <div class="write">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <img class="img-fluid image1" src="@/assets/images/express.png" alt="">
                    </div>
                    <div class="col-8">
                        <button @click="send_msg" type="button" class="btn btn-success">
                            发送
                        </button>
                    </div>
                </div>
                <div class="input-group message_edit">
                    <textarea v-model="content" class="form-control" aria-label="With textarea"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(props, context) {
        let content = ref('');
        const send_msg = () => {
            context.emit('send_msg', content.value);
            content.value = "";
        }
        return {
            send_msg,
            content
        }
    }
}
</script>

<style scoped>
.write {
    height: 26vh;
}
.message_edit {
    height: 16vh;
}
button {
    margin-bottom: 8px;
    float: right;
}
.image1 {
    width: 30px;
    height: 30px;
}
</style>