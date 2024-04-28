<script setup>
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
import GoogleIcon from 'vue-material-design-icons/Google.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="pt-2 mt-5 text-center">
        <div>
            <h6 class="mb-3 font-medium text-gray-500 text-14 dark:text-gray-100">{{
                $t('login.sign-in-with') }}</h6>
        </div>

        <div class="flex justify-center gap-3">
            <Link href="" class="w-8 h-8 leading-8 rounded-full bg-violet-500 flex items-center justify-center">
            <FacebookIcon size="18" class="text-white" />
            </Link>
            <Link href="" class="w-8 h-8 leading-8 rounded-full bg-sky-500 flex items-center justify-center">
            <TwitterIcon size="18" class="text-white" />
            </Link>
            <Link href="" class="w-8 h-8 leading-8 rounded-full bg-red-400 flex items-center justify-center">
            <GoogleIcon size="18" class="text-white" />
            </Link>
        </div>
    </div>
</template>