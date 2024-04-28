<script setup>
import { computed, ref, defineAsyncComponent } from 'vue';
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
import GoogleIcon from 'vue-material-design-icons/Google.vue';

const EyeIcon = defineAsyncComponent(() => import('vue-material-design-icons/Eye.vue'));
const LockIcon = defineAsyncComponent(() => import('vue-material-design-icons/Lock.vue'));


const passwordFieldType = ref("password");
const switchPasswordVisibility = () => passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";

const page = usePage();
const appName = computed(() => page.props.appName);

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>

        <Head title="Log in" />

        <div class="my-auto">
            <div class="text-center">
                <h4 class="font-medium text-gray-700 dark:text-gray-100">{{ $t('login.title') }}
                </h4>
                <p class="mt-2 mb-4 text-gray-500 dark:text-gray-100/60">{{ $t('login.sub-title',
                    { appName: appName }) }}</p>
            </div>

            <form class="pt-2" @submit.prevent="submit">
                <div class="mb-4">
                    <InputLabel for="email" :value="$t('login.form.email.label')" />
                    <TextInput type="email" class="w-full" id="email" :placeholder="$t('login.form.email.placeholder')"
                        v-model="form.email" required autofocus autocomplete="email" />
                    <InputError class="mt-1.5" :message="form.errors.email" />
                </div>
                <div class="mb-3">
                    <div class="flex">
                        <div class="flex-grow-1">
                            <InputLabel for="password" :value="$t('login.form.password.label')" />
                        </div>
                        <div class="ltr:ml-auto rtl:mr-auto">
                            <Link v-if="canResetPassword" :href="route('password.request')"
                                class="text-gray-500 dark:text-gray-100">{{
                                    $t('login.form.forgot-password') }}
                            </Link>
                        </div>
                    </div>

                    <div class="flex">
                        <TextInput class="flex-1 rounded-e-none" :type="passwordFieldType"
                            v-model="form.password"
                            :placeholder="$t('login.form.password.placeholder')" aria-label="Password"
                            aria-describedby="password-addon" />
                        <button @click="switchPasswordVisibility"
                            class="px-2.5 border rounded-e border-gray-50 bg-gray-50 hover:bg-gray-100 ltr:rounded-l-none rtl:rounded-r-none ltr:border-l-0 rtl:border-r-0 dark:bg-zinc-700 dark:hover:bg-zinc-800 dark:border-zinc-600 dark:text-gray-100"
                            type="button" id="password-addon">
                            <EyeIcon size="18" v-if="passwordFieldType === 'password'" />
                            <LockIcon size="18" v-if="passwordFieldType !== 'password'" />
                        </button>
                        <InputError class="mt-1.5" :message="form.errors.password" />
                    </div>
                </div>
                <div class="mb-6 row">
                    <div class="col">
                        <div>
                            <Checkbox v-model="form.remember" class="w-4 h-4 mt-1" id="remember-me" />
                            <InputLabel class="cursor-pointer" for="remember-me"
                                :value="$t('login.form.remember-me')" />
                        </div>
                    </div>

                </div>
                <div class="mb-3">
                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">{{
                        $t('login.form.submit-button-text') }}
                    </PrimaryButton>
                </div>
            </form>

            <div class="pt-2 mt-5 text-center">
                <div>
                    <h6 class="mb-3 font-medium text-gray-500 text-14 dark:text-gray-100">{{
                        $t('login.sign-in-with') }}</h6>
                </div>

                <div class="flex justify-center gap-3">
                    <a href="" class="w-8 h-8 leading-8 rounded-full bg-violet-500 flex items-center justify-center">
                        <FacebookIcon size="18" class="text-white" />
                    </a>
                    <a href="" class="w-8 h-8 leading-8 rounded-full bg-sky-500 flex items-center justify-center">
                        <TwitterIcon size="18" class="text-white" />
                    </a>
                    <a href="" class="w-8 h-8 leading-8 rounded-full bg-red-400 flex items-center justify-center">
                        <GoogleIcon size="18" class="text-white" />
                    </a>
                </div>
            </div>

            <div class="mt-12 text-center">
                <p class="text-gray-500 dark:text-gray-100">{{
                    $t('login.dont-have-an-account') }}
                    <Link :href="route('register')" class="font-semibold text-violet-500">
                    {{ $t('login.sign-up') }}
                    </Link>
                </p>
            </div>
        </div>
    </GuestLayout>
</template>