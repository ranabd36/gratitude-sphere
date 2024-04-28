<script setup>
import { computed } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import SocialLogin from '@/Components/SocialLogin.vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import PasswordInput from '@/Components/PasswordInput.vue';

const page = usePage();
const appName = computed(() => page.props.appName);

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>

        <Head :title="$t('register.title')" />

        <div class="my-auto">
            <div class="text-center">
                <h4 class="font-medium text-gray-700 dark:text-gray-100">{{ $t('register.heading') }}
                </h4>
                <p class="mt-2 mb-4 text-gray-500 dark:text-gray-100/60">{{ $t('register.sub-heading',
                    { appName: appName }) }}</p>
            </div>

            <form class="pt-2 mt-4" @submit.prevent="submit">
                <div class="mb-4">
                    <InputLabel for="name" :value="$t('register.form.name.label')" />
                    <TextInput type="text" class="w-full" id="name" :placeholder="$t('register.form.name.placeholder')"
                        v-model="form.name" required autofocus autocomplete="name" />
                    <InputError class="mt-1.5" :message="form.errors.name" />
                </div>

                <div class="mb-4">
                    <InputLabel for="email" :value="$t('login.form.email.label')" />
                    <TextInput type="email" class="w-full" id="email" :placeholder="$t('login.form.email.placeholder')"
                        v-model="form.email" required autocomplete="email" />
                    <InputError class="mt-1.5" :message="form.errors.email" />
                </div>

                <div class="mb-4">
                    <InputLabel for="password" :value="$t('login.form.password.label')" />
                    <PasswordInput v-model="form.password" :placeholder="$t('login.form.password.placeholder')" />
                    <InputError class="mt-1.5" :message="form.errors.password" />
                </div>

                <div class="mb-4">
                    <InputLabel for="confirm-password" :value="$t('register.form.password-confirmation.label')" />
                    <PasswordInput v-model="form.password_confirmation" :placeholder="$t('register.form.password-confirmation.placeholder')" />
                    <InputError class="mt-1.5" :message="form.errors.password_confirmation" />
                </div>
                <div class="mb-6 row">
                    <div class="col">
                        <div>
                            <InputLabel>{{ $t('register.form.terms-aggre-label', { appName: appName }) }}
                                <Link class="text-violet-500" href="/">{{ $t('register.form.terms-use-link') }}</Link>
                            </InputLabel>
                        </div>
                    </div>

                </div>
                <div class="mb-4">
                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">{{
                        $t('register.title') }}
                    </PrimaryButton>
                </div>
            </form>

            <SocialLogin />

            <div class="mt-12 text-center">
                <p class="text-gray-500 dark:text-gray-100">{{
                    $t('register.already-have-an-account') }}
                    <Link :href="route('login')" class="font-semibold text-violet-500">
                    {{ $t('login.title') }}
                    </Link>
                </p>
            </div>
        </div>
    </GuestLayout>
</template>