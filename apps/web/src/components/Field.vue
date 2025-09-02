<template>
  <div>
    <label class="mb-1 block text-sm font-medium text-white">{{ label }}</label>

    <input
      v-if="type !== 'textarea'"
      v-bind="$attrs"
      :name="name"
      :type="type"
      v-model="value"
      class="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-700"
    />

    <textarea
      v-else
      v-bind="$attrs"
      :name="name"
      v-model="value"
      rows="4"
      class="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-700"
    />

    <p class="mt-1 text-sm text-red-400" v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps<{
  label: string;
  name: string;
  type?: "text" | "number" | "textarea";
  step?: string;
}>();

const { value, errorMessage } = useField<string | number>(props.name);
</script>
