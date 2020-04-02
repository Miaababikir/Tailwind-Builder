<template>
    <div>
        <div class="bg-white">
            <div class="px-12 py-10">
                <div class="flex justify-between justify-center mb-4">
                    <h2 class="text-gray-700 font-bold text-xl">Setup your form</h2>
                    <button class="px-3 py-2 bg-gray-800 text-white rounded" @click="addSection">+ Section</button>
                </div>
                <div class="flex border-t border-gray-400 mb-4 -mx-12 px-12 py-8" v-for="section in sections">
                    <div class="w-1/4">
                        <input class="text-lg text-gray-700 focus:outline-none" v-model="section.title"/>
                    </div>
                    <div class="flex flex-wrap items-center w-3/4">
                        <div class="w-1/2 px-3" v-for="field in section.fields">
                            <component :is="field.type | component" :data="field"></component>
                        </div>
                        <div class="px-3 mt-5">
                            <select class="bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded focus:outline-none"
                                    @change="addField(section)" v-model="inputType">
                                <option value="0">Add Field</option>
                                <option value="input">Input</option>
                                <option value="textarea">Texarea</option>
                                <option value="select">Select</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <button class="px-3 py-2 bg-gray-800 text-white rounded inline-flex items-center">
                        <svg class="fill-current h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path class="heroicon-ui"
                                  d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"/>
                        </svg>
                        <span class="ml-2">Code</span>
                    </button>
                </div>
            </div>

            <div class="px-12 py-10 hidden">
                <div>
                    <pre><code class="px-12 py-8 rounded-md overflow-hidden">{{ testCode }}</code></pre>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import hljs from 'highlight.js/lib/highlight';

    hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));
    import 'highlight.js/styles/atom-one-dark.css';

    import TextField from "./InputTypes/Input";
    import Textarea from "./InputTypes/Textarea";
    import Select from "./InputTypes/Select";

    export default {
        components: {
            'v-input': TextField,
            'v-textarea': Textarea,
            'v-select': Select,
        },
        data() {
            return {
                sections: [],
                inputType: 0,
                testCode: `<div class="text-2xl"></div>`,
            }
        },
        mounted() {
            this.sections.push({
                title: 'Section title',
                fields: [
                    {
                        label: 'Field label',
                        type: 'input'
                    }
                ]
            });

            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        },
        filters: {
            component(name) {
                return `v-${name}`;
            }
        },
        methods: {
            addSection() {
                this.sections.push({
                    title: 'Section title',
                    fields: [
                        {
                            label: 'Field label',
                            type: 'input'
                        }
                    ]
                })
            },
            addField(section) {
                section.fields.push({
                    label: 'Field label',
                    type: this.inputType
                });
                this.inputType = 0;
            },
            generateCode() {},
        }
    }
</script>