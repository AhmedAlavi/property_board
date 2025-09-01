<template>
  <main class="min-h-screen">
    <div class="mx-auto max-w-3xl p-4">
      <div class="mb-4 flex items-center justify-between">
        <h1 class="text-2xl font-semibold text-white">Add Property</h1>
        <RouterLink to="/" class="text-sm text-neutral-300 underline"
          >Back</RouterLink
        >
      </div>

      <form
        @submit.prevent="onSubmit"
        class="grid gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-5"
      >
        <Field label="Title" name="title" type="text" />
        <Field label="Price (AED)" name="price" type="number" step="0.01" />
        <Field label="Location" name="location" type="text" />
        <Field label="Description" name="description" type="textarea" />
        <Field label="Image URL" name="image" type="text" />
        <img
          v-if="values.image"
          :src="values.image"
          class="h-48 w-full rounded-xl border border-neutral-800 object-cover"
        />
        <button
          class="rounded-xl bg-white px-4 py-2 font-medium text-black hover:bg-neutral-200"
        >
          Save
        </button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { api } from "../api";
import Field from "../components/Field.vue";

const schema = z.object({
  title: z.string().min(2),
  price: z.coerce.number().positive(),
  location: z.string().min(2),
  description: z.string().min(5),
  image: z.string().url(),
});
const { handleSubmit, values } = useForm({
  validationSchema: toTypedSchema(schema),
});

const onSubmit = handleSubmit(async (vals) => {
  await api.post("/properties", vals);
  window.location.href = "/";
});
</script>
