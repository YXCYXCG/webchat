<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <slot></slot>
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
    margin-top: 8%;
    width: 50%;
}
</style>