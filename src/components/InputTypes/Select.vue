<template>
    <div>
        <label class="block uppercase tracking-wide text-gray-700 font-bold mb-2">
            <input class="text-lg text-gray-700 focus:outline-none" v-model="data.label"/>
        </label>
        <select class="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3">
            <option>Lorem ipsum</option>
            <option>Set mit</option>
        </select>

    </div>
</template>

<script>
    export default {
        props: ['data']
    }
</script>
