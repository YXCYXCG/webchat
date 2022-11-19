<template>
    <div class="content">
        <div class="card">
            <div class="card-body">
                <div class="nickname">{{ user.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            requested: true
        }
    },
}
</script>

<style scoped>
.content {
    height: 50vh;
}
.card {
    height: 50vh;
}
.nickname {
    margin-bottom: 10px;
    font-size: large;
    font-weight: bold;
}
</style>


