<script setup>
import { onMounted, ref, defineAsyncComponent } from 'vue';

const EyeIcon = defineAsyncComponent(() => import('vue-material-design-icons/Eye.vue'));
const LockIcon = defineAsyncComponent(() => import('vue-material-design-icons/Lock.vue'));

const visibility = ref(false);
const switchVisibility = () => visibility.value = visibility.value ? false : true;

const input = ref(null);

defineProps({
    placeholder: {
        type: String,
    },
});
const model = defineModel({
    type: String,
    required: true,
});

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <div class="flex items-center">
        <input :type="[visibility ? 'text' : 'password']" :placeholder="placeholder"
            class="flex-1 py-1.5 border-gray-50 rounded-s placeholder:text-13 bg-gray-50/30 dark:bg-zinc-700/50 dark:border-zinc-600 dark:text-gray-100 dark:placeholder:text-zinc-100/60 focus:ring-1 focus:ring-violet-500/20 focus:border-violet-100"
            v-model="model" ref="input" />
        <span @click="switchVisibility"
            class="px-2.5 py-2 border rounded-e border-gray-50 bg-gray-50 hover:bg-gray-100 ltr:rounded-l-none rtl:rounded-r-none ltr:border-l-0 rtl:border-r-0 dark:bg-zinc-700 dark:hover:bg-zinc-800 dark:border-zinc-600 dark:text-gray-100"
            id="password-addon">
            <LockIcon size="18" v-if="visibility" />
            <EyeIcon size="18" v-else />
        </span>
    </div>
</template>