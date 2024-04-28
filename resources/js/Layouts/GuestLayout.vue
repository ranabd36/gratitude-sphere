<script setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

const currentYear = new Date().getFullYear();
const page = usePage();
const appName = computed(() => page.props.appName);

</script>

<template>
    <div class="container-fluid">
        <div class="h-screen md:overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-12 ">
                <div class="relative overflow-y-scroll z-50 col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                    <div class="w-full p-10 bg-white xl:p-12 dark:bg-zinc-800">
                        <div class="flex h-[90vh] flex-col">
                            <div class="mx-auto mb-6">
                                <Link href="/">
                                <img src="/assets/images/logo.png" alt="" class="inline h-24">
                                </Link>
                            </div>

                            <div v-if="page.props.status" class="mb-4 font-medium text-sm text-green-600 text-center">
                                {{ page.props.status }}
                            </div>
                            <slot />

                            <div class="text-center py-10">
                                <p class="relative text-gray-500 dark:text-gray-100">©
                                    {{ currentYear }} {{ appName }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9">
                    <div class="h-screen bg-cover relative p-5 bg-[url('/assets/images/guest-layout-bg.jpg')]">
                        <div class="absolute inset-0 bg-violet-500/90"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>