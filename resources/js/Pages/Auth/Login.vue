<script setup>
import { computed } from 'vue';
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import SocialLogin from '@/Components/SocialLogin.vue';
import PasswordInput from '@/Components/PasswordInput.vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';

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

        <Head :title="$t('login.title')" />

        <div class="my-auto">
            <div class="text-center">
                <h4 class="font-medium text-gray-700 dark:text-gray-100">{{ $t('login.heading') }}
                </h4>
                <p class="mt-2 mb-4 text-gray-500 dark:text-gray-100/60">{{ $t('login.sub-heading',
                    { appName: appName }) }}</p>
            </div>

            <form class="pt-2" @submit.prevent="submit">
                <div class="mb-4">
                    <InputLabel for="email" :value="$t('login.form.email.label')" />
                    <TextInput type="email" class="w-full" id="email" :placeholder="$t('login.form.email.placeholder')"
                        v-model="form.email" required autofocus autocomplete="email" />
                    <InputError class="mt-1.5" :message="form.errors.email" />
                </div>
                <div class="mb-4">
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

                    <PasswordInput v-model="form.password" :placeholder="$t('login.form.password.placeholder')" />
                    <InputError class="mt-1.5" :message="form.errors.password" />
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
                <div class="mb-4">
                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">{{
                        $t('login.title') }}
                    </PrimaryButton>
                </div>
            </form>

            <SocialLogin />

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