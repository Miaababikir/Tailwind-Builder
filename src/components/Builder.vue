<template>
    <div>
        <div class="bg-white rounded-md">
            <div class="py-6 px-6 md:px-12">
                <div class="flex flex-col justify-between items-center md:flex-row">
                    <h2 class="text-gray-700 font-bold text-xl">Setup your form</h2>
                    <div class="flex">
                        <button class="mt-4 px-3 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none" @click="setup">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                        </button>
                        <button class="mt-4 px-3 py-2 bg-gray-800 text-white rounded ml-2" @click="addSection">+ Section</button>
                    </div>
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
                    <code-snippet :data="sections" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

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
            }
        },
        mounted() {
            this.setup();
        },
        filters: {
            component(name) {
                return `v-${name}`;
            }
        },
        methods: {
            setup() {
                this.sections = [];
                this.sections.push({
                    title: 'Section title',
                    fields: []
                });
            },
            addSection() {
                this.sections.push({
                    title: 'Section title',
                    fields: []
                })
            },
            addField(section) {
                section.fields.push({
                    label: 'Field label',
                    type: this.inputType
                });
                this.inputType = 0;
            },
        }
    }
</script>