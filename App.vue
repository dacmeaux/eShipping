<template>
    <div>Vue App</div>
</template>

<script>
export default {
    data() {
        return {
            title: 'eShipping Vehicle Tracker'
        }
    },
    methods: {
        onGetLocation(data) {
            console.log(data)
        }
    }
}
</script>

<style scoped>

</style>