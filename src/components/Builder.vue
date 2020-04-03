<template>
    <div>
        <div class="bg-white rounded-md">
            <div class="py-6 px-6 md:px-12">
                <div class="flex flex-col justify-between items-center md:flex-row">
                    <h2 class="text-gray-700 font-bold text-xl">Setup your form</h2>
                    <button class="mt-4 px-3 py-2 bg-gray-800 text-white rounded" @click="addSection">+ Section</button>
                </div>
                <div class="border-t border-gray-400 mb-4 py-8 mt-4 md:flex" v-for="section in sections">
                    <div class="md:w-1/4">
                        <input class="text-lg text-gray-700 w-full focus:outline-none" v-model="section.title"/>
                    </div>
                    <div class="flex flex-wrap items-center mt-4 md:w-3/4">
                        <div class="w-full md:px-3 md:w-1/2" v-for="field in section.fields">
                            <component :is="field.type | component" :data="field"></component>
                        </div>
                        <div class="w-full mt-4 md:px-3 md:w-1/2">
                            <select class="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded focus:outline-none"
                                    @change="addField(section)" v-model="inputType">
                                <option value="0">Add Field</option>
                                <option value="input">Input</option>
                                <option value="textarea">Texarea</option>
                                <option value="select">Select</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <button @click="generateCode()"
                            class="px-3 py-2 bg-gray-800 text-white rounded inline-flex items-center">
                        <svg class="fill-current h-5" viewBox="0 0 24 24">
                            <path d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"/>
                        </svg>
                        <span class="ml-2">Code</span>
                    </button>
                </div>
                <code-snippet :data="sections" />
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
    import CodeSnippet from "./CodeSnippet";

    export default {
        components: {
            'v-input': TextField,
            'v-textarea': Textarea,
            'v-select': Select,
            CodeSnippet
        },
        data() {
            return {
                sections: [],
                inputType: 0,
                generatedCode: null,
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
            generateCode() {
                let code = '';
                this.sections.forEach(section => {
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
                    code += '    </div>\n</div>';

                    this.generatedCode = code;
                    // this.$nextTick(() => {
                    //     document.querySelectorAll('pre code').forEach((block) => {
                    //         hljs.highlightBlock(block);
                    //     });
                    // });

                })
            },
        }
    }
</script>