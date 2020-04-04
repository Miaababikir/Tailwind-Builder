<template>
    <div>
        <div class="py-10" v-if="code">
            <div class="relative rounded overflow-hidden">
                <pre><code
                        class="px-12 py-8 rounded-md overflow-x-scroll overflow-hidden">{{ code }}</code></pre>
                <div class="absolute right-0 top-0">
                    <button class="px-3 py-2 text-gray-600 hover:text-gray-400 focus:outline-none"
                            v-clipboard:copy="code">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                    </button>
                </div>
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
        data() {
            return {
                code: null
            }
        },
        mounted() {
            this.generate();
        },
        watch: {
            data: {
                handler() {
                    this.generate();
                },
                deep: true,
            },
            code() {
                document.querySelectorAll('pre code').forEach((block) => {
                    block.textContent = this.code;
                });
            }
        },
        methods: {
            highlightCode() {
                this.$nextTick(() => {
                    document.querySelectorAll('pre code').forEach((block) => {
                        hljs.highlightBlock(block);
                    });
                });
            },
            generate() {
                let code = '';
                this.data.forEach(section => {
                    code += ''
                        + '<div class="border-t border-gray-400 mb-4 py-8 mt-4 md:flex">\n'
                        + '    <div class="md:w-1/4">\n'
                        + `        <p class="text-lg text-gray-700 w-full focus:outline-none">${section.title}</p>\n`
                        + '    </div>\n'
                        + '    <div class="flex flex-wrap items-center mt-4 md:w-3/4">\n';

                    section.fields.forEach(field => {
                        code += '        <div class="w-full md:px-3 md:w-1/2">\n'
                            + `            <label class="block tracking-wide text-gray-700 mb-2">${field.label}</label>\n`;
                        if (field.type === 'input') {
                            code += '            <input class="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3" type="text">\n';
                        } else if (field.type === 'select') {
                            code += '            <select class="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3">\n'
                                + '                <option>Lorem ipsum</option>\n'
                                + '            </select>\n';
                        } else if (field.type === 'textarea') {
                            code += '            <textarea class="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight" type="text"></textarea>\n';
                        }

                        code += '        </div>\n';

                    });
                    code += '    </div>\n</div>\n';
                });

                this.code = code;

                this.highlightCode();
            },
            onCopy() {
                console.log('Copied!');
            },
        }
    }
</script>
