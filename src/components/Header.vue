<script setup>
    const props = defineProps({
        ip: String,
        agent: String
    })
</script>

<template>
    <header>
        <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">ZiP.co</a>
            <span class="navbar-text">Hello! Welcome to zip-code finder</span>
            
        </div>
        <p class="navbar-text container-fluid"> 
            <b>User IP:</b> 
            <small>{{ ` ${ip || "Loading..."}` }}</small> 
        </p>
        <p class="navbar-text container-fluid"> 
            <b>User Agent Data:</b> 
            <small>{{ ` ${agent}` }}</small> 
        </p>
    </nav>
    </header>
</template>

<style scoped >
    header {
        margin-bottom: 20px;
    }
    p {
        margin: 0;
    }
</style>
