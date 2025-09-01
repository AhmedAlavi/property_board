<template>
  <main class="min-h-screen">
    <div class="mx-auto max-w-7xl p-4">
      <!-- Header -->
      <div
        class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
      >
        <div class="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="47"
            viewBox="0 0 29 47"
            fill="none"
          >
            <path
              d="M17.0801 24.53L20.5401 26.53V46.03H17.0801V24.53Z"
              fill="white"
            />
            <path
              d="M28.57 0.400024V19.59L25.11 17.6V0.400024H28.57Z"
              fill="white"
            />
            <path
              d="M28.5501 23.53H28.5701V46.03H25.1101V25.47L17.0901 20.59H17.0801V0.400024H20.5401V18.64L28.5601 23.52L28.5501 23.53Z"
              fill="white"
            />
            <path
              d="M11.7701 24.53L8.31006 26.53V46.03H11.7701V24.53Z"
              fill="white"
            />
            <path
              d="M0.280029 0.400024V19.59L3.75003 17.6V0.400024H0.280029Z"
              fill="white"
            />
            <path
              d="M0.300028 23.53H0.280029V46.03H3.75003V25.47L11.76 20.59H11.77V0.400024H8.31003V18.64L0.29003 23.52L0.300028 23.53Z"
              fill="white"
            />
          </svg>
          <div class="text-lg font-semibold text-white">Property Board</div>
        </div>

        <!-- Search (mobile full width) -->
        <div class="w-full md:w-[420px]">
          <input
            v-model="query"
            placeholder="Search location or title…"
            class="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-neutral-700"
          />
        </div>

        <RouterLink
          to="/add"
          class="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 text-center"
        >
          Add Property
        </RouterLink>
      </div>

      <!-- Filters -->
      <div class="mt-6 flex flex-wrap gap-2">
        <button
          class="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm"
        >
          Free cancellation
        </button>
        <button
          class="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm"
        >
          Price
        </button>
        <button
          class="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm"
        >
          Instant book
        </button>
      </div>

      <!-- Content: list + map placeholder -->
      <div class="mt-6 grid gap-6 lg:grid-cols-3">
        <PropertyCard v-for="p in filtered" :key="p.id" :item="p" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { api } from "../api";
import type { Property } from "@mpb/shared";
import PropertyCard from "../components/PropertyCard.vue";

const list = ref<Property[]>([]);
const loading = ref(true);
const query = ref("");

onMounted(async () => {
  const { data } = await api.get<Property[]>("/properties");
  list.value = data;
  loading.value = false;
});

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return list.value;
  return list.value.filter((p) =>
    `${p.title} ${p.location}`.toLowerCase().includes(q)
  );
});
</script>
