<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <GuestLayout>

        <Head :title="$t('forgot-password.title')" />

        <div class="my-auto">
            <div class="text-center">
                <h4 class="font-medium text-gray-700 dark:text-gray-100">{{ $t('forgot-password.heading') }}
                </h4>
                <p class="mt-2 mb-4 text-gray-500 dark:text-gray-100/60">{{ $t('forgot-password.sub-heading') }}</p>
            </div>

            <form class="pt-2 mt-4" @submit.prevent="submit">
                <div class="mb-4">
                    <InputLabel for="email" :value="$t('login.form.email.label')" />
                    <TextInput type="email" class="w-full" id="email" :placeholder="$t('login.form.email.placeholder')"
                        v-model="form.email" required autofocus autocomplete="email" />
                    <InputError class="mt-1.5" :message="form.errors.email" />
                </div>

                <div class="flex items-center justify-end mt-6 mb-5">
                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        {{ $t('forgot-password.form.submit-button-text') }}
                    </PrimaryButton>
                </div>
            </form>

            <div class="mt-12 text-center">
                <p class="text-gray-500 dark:text-gray-100">{{
                    $t('forgot-password.remember-it') }}
                    <Link :href="route('login')" class="font-semibold text-violet-500">
                    {{ $t('login.title') }}
                    </Link>
                </p>
            </div>
        </div>
    </GuestLayout>
</template>