<template>
    <div class="font-roboto min-h-screen bg-gray-300" id="app">
        <header class="bg-pattern">
            <div class="container mx-auto px-4">
                <div class="py-32 text-gray-200 text-center">
                    <h1 class="font-bold text-5xl">☄️</h1>
                    <h1 class="font-bold text-5xl">Tailwind Builder</h1>
                    <p class="mb-1 text-gray-400">Build a beautiful and elegant tailwind forms.</p>
                    <p class="mb-6 text-gray-500">Helps you to scaffold your forms structure without the need to repeat yourself</p>
                    <a href="https://github.com/Miaababikir/Tailwind-Builder" class="px-4 py-2 bg-gray-300 text-gray-900 rounded inline-flex">
                        <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">>
                            <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
                        </svg>
                        <span class="ml-2">Github</span>
                    </a>
                </div>
            </div>
        </header>
        <main class="md:min-h-screen">
            <div class="py-24">
                <div class="container px-4 mx-auto">
                    <div>
                        <h2 class="text-gray-700 text-3xl font-bold mb-4">Form Builder</h2>
                        <builder/>
                    </div>
                </div>
            </div>
        </main>
        <footer class="bg-white">
            <div class="px-8 py-6 text-gray-800 text-center">
                <p>Built with <span class="text-red-600">❤️</span> @<a class="text-blue-600" href="https://twitter.com/miaababikir">Miaababikir</a> and @<a  class="text-blue-600" href="https://twitter.com/khatabwedaa">Khatab wedaa</a></p>
            </div>
        </footer>
    </div>
</template>

<script>
    import Builder from "./components/Builder";

    export default {
        name: 'App',
        components: {Builder}
    }
</script>

<style lang="scss" src="./scss/app.scss"></style>
