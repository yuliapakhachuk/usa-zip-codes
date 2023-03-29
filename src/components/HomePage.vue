<script setup>
    import { ref, watch } from "vue";

    const text = ref("");
    const myhref = ref("/info/")
    
    function onInput(e) {
        text.value = e.target.value;
    }

    watch(text, () => { 
        myhref.value = "/info/" + text.value;
    })

</script>

<template>
    <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            :value="text"
            @input="onInput"
            placeholder="Enter zip-code"
            required
        />
        <router-link v-bind:to="`${myhref}`" 
            class="btn btn-primary">   
            RENDER
        </router-link>
    </div>
</template>

