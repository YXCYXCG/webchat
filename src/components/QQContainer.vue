<template>
    <div class="home">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QQContainer'
}
</script>

<style scoped>
.container {
    width: 23%;
    height: 50%;
    margin-top: 8%;
    margin-left: 20%;
}
</style>