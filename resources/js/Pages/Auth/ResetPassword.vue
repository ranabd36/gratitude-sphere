<script setup>
import { computed, ref, defineAsyncComponent } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PasswordInput from '@/Components/PasswordInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm, usePage } from '@inertiajs/vue3';

const EyeIcon = defineAsyncComponent(() => import('vue-material-design-icons/Eye.vue'));
const LockIcon = defineAsyncComponent(() => import('vue-material-design-icons/Lock.vue'));

const passwordFieldType = ref("password");
const confirmPasswordFieldType = ref("password");
const switchPasswordVisibility = () => passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
const switchConfirmPasswordVisibility = () => confirmPasswordFieldType.value = confirmPasswordFieldType.value === "password" ? "text" : "password";

const page = usePage();
const appName = computed(() => page.props.appName);


const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>

        <Head :title="$t('reset-password.title')" />

        <div class="my-auto">
            <div class="text-center">
                <h4 class="font-medium text-gray-700 dark:text-gray-100">{{ $t('reset-password.title') }}</h4>
                <p class="mt-2 mb-4 text-gray-500 dark:text-gray-100/60">{{ $t('reset-password.sub-heading', {appName: appName}) }}</p>
            </div>
            <form class="pt-2 mt-4" @submit.prevent="submit">
                <div class="mb-4">
                    <InputLabel for="email" :value="$t('login.form.email.label')" />
                    <TextInput type="email" class="w-full" id="email" :placeholder="$t('login.form.email.placeholder')"
                        v-model="form.email" required />
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

                <div class="flex items-center justify-end mt-6 mb-5">
                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        {{ $t('reset-password.title') }}
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </GuestLayout>
</template>