<template>
    <div>
        <div class="py-10" v-if="code">
            <div>
                <pre><code class="px-12 py-8 rounded-md overflow-hidden">{{ code }}</code></pre>
            </div>
        </div>
    </div>
</template>

<script>

    import hljs from 'highlight.js/lib/highlight';

    hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));
    import 'highlight.js/styles/atom-one-dark.css';

    export default {
        props: ['data'],
    }
</script>

<style scoped>

</style>