<template>
    <nav>
        <router-link to="/">Home</router-link> 
        <!-- router-link to="path that is used in VIEWS vue files" -->
        <router-link to="/contact-us">Contact</router-link>
        <!-- router-link is translated as <a></a> tags -->
        <router-link to="/reservations">Reservations</router-link>
        <a href="https://google.ca" target="_blank">Google</a>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
/* .router-link-active {

}*/
a{
    /* class seen in webpage inspector */
    margin-right: 10px;
}
</style>