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
    name: 'ContainerBase'
}
</script>

<style scoped>
.container {
    margin-top: 7%;
    width: 55%;
}
</style>