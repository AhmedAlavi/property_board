<template>
  <section class="card relative h-[520px] w-full overflow-hidden">
    <!-- background “map” image; swap center city via URL if you like -->
    <img
      class="absolute inset-0 h-full w-full object-cover opacity-90"
      src="https://tile.openstreetmap.org/10/189/409.png"
      alt="map"
    />

    <!-- light overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"
    ></div>

    <!-- selected property spotlight -->
    <div
      v-if="selected"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div class="rounded-2xl bg-white/95 shadow-xl backdrop-blur p-3 w-56">
        <img
          :src="selected.image"
          class="h-28 w-full object-cover rounded-lg"
        />
        <div class="mt-2">
          <div class="font-semibold">
            ${{ Intl.NumberFormat().format(selected.price) }}
          </div>
          <div class="text-sm text-gray-600 line-clamp-1">
            {{ selected.title }}
          </div>
        </div>
      </div>
    </div>

    <!-- dotted selection loop (pure decoration) -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-indigo-400 rounded-full w-80 h-80"
    ></div>

    <!-- fake price chips -->
    <div class="absolute text-[12px] font-medium grid gap-3">
      <div
        class="absolute left-[20%] top-[25%] px-2 py-1 rounded bg-white shadow"
      >
        AED 780k
      </div>
      <div
        class="absolute right-[18%] top-[30%] px-2 py-1 rounded bg-white shadow"
      >
        AED 1.2M
      </div>
      <div
        class="absolute left-[30%] bottom-[22%] px-2 py-1 rounded bg-white shadow"
      >
        AED 990k
      </div>
      <div
        class="absolute right-[26%] bottom-[18%] px-2 py-1 rounded bg-white shadow"
      >
        AED 730k
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Property } from "@mpb/shared";
defineProps<{ selected: Property | null }>();
</script>
