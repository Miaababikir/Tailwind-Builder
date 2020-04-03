<template>
    <div>
        <div class="border-t border-gray-400 mb-4 py-8 mt-4 md:flex">
            <div class="md:w-1/4">
                <p class="text-lg text-gray-700 w-full focus:outline-none">Section title</p>
            </div>
            <div class="flex flex-wrap items-center mt-4 md:w-3/4">
                <div class="w-full md:px-3 md:w-1/2">
                    <label class="block tracking-wide text-gray-700 mb-2">Field label</label>
                    <input class="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3"
                           type="text">
                </div>
                <div class="w-full md:px-3 md:w-1/2">
                    <label class="block tracking-wide text-gray-700 mb-2">Field label</label>
                    <select class="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3">
                        <option>Lorem ipsum</option>
                        <option>Set mit</option>
                    </select>
                </div>
                <div class="w-full md:px-3 md:w-1/2">
                    <label class="block tracking-wide text-gray-700 mb-2">Field label</label>
                    <textarea class="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight" type="text"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
