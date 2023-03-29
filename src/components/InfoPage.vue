<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router'
    const route = useRoute()
    
    let region = ref(null);
    let errorMsg = ref(null);
    
    onMounted( async() => {
        try {
            const code = parseInt(route.params.code)
            const response = await fetch(
            `https://app.zipcodebase.com/api/v1/search?apikey=8e133fd0-c905-11ed-ab11-e7c81d1912fb&codes=${code}&country=us`
            );
            region.value = await response.json().then((data) => data.results[code][0]);
        } catch (error) {
            errorMsg.value = error
        }
    })    

</script>

<template>
    <div v-if="region" class="card w-75">
        <div   class="card-body">
            <h5 class="card-title">
                ZIP-code information
            </h5>
            <p class="card-text">
                <b>State:</b> {{ region["state"] }}
            </p>
            <p class="card-text">
                <b>City:</b> {{ region["city"] }}
            </p>
            <a href="/" class="btn btn-primary">
                Return to Home Page
            </a>
        </div>
    </div>
    <div v-else>
        Oops! No information. It seems that zip-code is invalid 
        <router-link to="/" class="btn btn-primary">   
            Try again
        </router-link>
    </div>
</template>


