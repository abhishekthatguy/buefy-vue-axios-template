/* eslint-disable */
<template>
    <footer id="footer" class="footer has-background-primary-light">
        <div class="content has-text-centered">
            <p class="has-text-primary is-size-7">
                <i class="fas fa-copyright"></i> <b>{{year}}, policyadvisor</b>
            </p>
        </div>
    </footer>
</template>
<script>
export default {
    
    name: 'CustomFooter',
    props: {
        year: String
    }
}
</script>