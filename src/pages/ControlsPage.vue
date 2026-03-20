<script setup lang="ts">
import { ref } from 'vue'

const switchOn = ref(true)
const switchOff = ref(false)
const switchXs = ref(true)
const switchSm = ref(false)
const switchMd = ref(true)

const selectedValue = ref('option2')

const sliderValue = ref(42)
const sliderSm = ref(25)
const sliderLg = ref(75)

const accordionOpen = ref<number | null>(0)

function toggleAccordion(index: number) {
  accordionOpen.value = accordionOpen.value === index ? null : index
}
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Components</p>
      <h1 class="text-3xl font-bold">Controls</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">Switch, Select, Slider, and Accordion.</p>
    </div>

    <!-- Switch -->
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Switch</p>
    <div class="space-y-4 mb-8">
      <!-- Sizes -->
      <div class="flex items-center gap-6">
        <!-- XS -->
        <label class="flex items-center gap-2 text-sm cursor-pointer">
          <button
            class="relative w-7 h-4 rounded-full transition-colors duration-200 focus:outline-none"
            :style="{ background: switchXs ? 'var(--c-accent)' : 'var(--c-border)' }"
            @click="switchXs = !switchXs"
          >
            <span
              class="absolute top-0.5 left-0.5 size-3 rounded-full bg-white transition-transform duration-200"
              :style="{ transform: switchXs ? 'translateX(12px)' : 'translateX(0)' }"
            />
          </button>
          <span :style="{ color: 'var(--c-muted)' }">XS</span>
        </label>

        <!-- SM -->
        <label class="flex items-center gap-2 text-sm cursor-pointer">
          <button
            class="relative w-8 h-[18px] rounded-full transition-colors duration-200 focus:outline-none"
            :style="{ background: switchSm ? 'var(--c-accent)' : 'var(--c-border)' }"
            @click="switchSm = !switchSm"
          >
            <span
              class="absolute top-[3px] left-[3px] size-3.5 rounded-full bg-white transition-transform duration-200"
              :style="{ transform: switchSm ? 'translateX(14px)' : 'translateX(0)' }"
            />
          </button>
          <span :style="{ color: 'var(--c-muted)' }">SM</span>
        </label>

        <!-- MD -->
        <label class="flex items-center gap-2 text-sm cursor-pointer">
          <button
            class="relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none"
            :style="{ background: switchMd ? 'var(--c-accent)' : 'var(--c-border)' }"
            @click="switchMd = !switchMd"
          >
            <span
              class="absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform duration-200"
              :style="{ transform: switchMd ? 'translateX(20px)' : 'translateX(0)' }"
            />
          </button>
          <span :style="{ color: 'var(--c-muted)' }">MD</span>
        </label>
      </div>

      <!-- Labeled switches -->
      <div class="space-y-3 max-w-sm">
        <div class="flex items-center justify-between">
          <span class="text-sm">Notifications</span>
          <button
            class="relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none"
            :style="{ background: switchOn ? 'var(--c-accent)' : 'var(--c-border)' }"
            @click="switchOn = !switchOn"
          >
            <span
              class="absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform duration-200"
              :style="{ transform: switchOn ? 'translateX(20px)' : 'translateX(0)' }"
            />
          </button>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm">Dark mode</span>
          <button
            class="relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none"
            :style="{ background: switchOff ? 'var(--c-accent)' : 'var(--c-border)' }"
            @click="switchOff = !switchOff"
          >
            <span
              class="absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform duration-200"
              :style="{ transform: switchOff ? 'translateX(20px)' : 'translateX(0)' }"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Select -->
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Select</p>
    <div class="space-y-3 mb-8 max-w-sm">
      <div class="relative">
        <select
          v-model="selectedValue"
          class="w-full appearance-none px-3 py-2 pr-8 rounded-md text-sm border outline-none cursor-pointer"
          :style="{ background: 'var(--c-input)', color: 'var(--c-fg)', borderColor: 'var(--c-border)' }"
        >
          <option value="option1">Framework</option>
          <option value="option2">Vue.js</option>
          <option value="option3">React</option>
          <option value="option4">Svelte</option>
        </select>
        <svg class="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" :style="{ color: 'var(--c-muted)' }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <div class="relative">
        <select
          disabled
          class="w-full appearance-none px-3 py-2 pr-8 rounded-md text-sm border outline-none opacity-40 cursor-not-allowed"
          :style="{ background: 'var(--c-input)', color: 'var(--c-fg)', borderColor: 'var(--c-border)' }"
        >
          <option>Disabled</option>
        </select>
        <svg class="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" :style="{ color: 'var(--c-muted)' }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>

    <!-- Slider -->
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Slider</p>
    <div class="space-y-4 mb-8 max-w-sm">
      <!-- Small -->
      <div>
        <input
          v-model="sliderSm"
          type="range"
          min="0"
          max="100"
          class="w-full h-1 rounded-full appearance-none cursor-pointer"
          :style="{ accentColor: 'var(--c-accent)', background: 'var(--c-border)' }"
        >
        <p class="text-xs mt-1" :style="{ color: 'var(--c-muted)' }">Small</p>
      </div>

      <!-- Default -->
      <div>
        <input
          v-model="sliderValue"
          type="range"
          min="0"
          max="100"
          class="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          :style="{ accentColor: 'var(--c-accent)', background: 'var(--c-border)' }"
        >
        <p class="text-xs mt-1" :style="{ color: 'var(--c-muted)' }">Default</p>
      </div>

      <!-- Large -->
      <div>
        <input
          v-model="sliderLg"
          type="range"
          min="0"
          max="100"
          class="w-full h-2 rounded-full appearance-none cursor-pointer"
          :style="{ accentColor: 'var(--c-accent)', background: 'var(--c-border)' }"
        >
        <p class="text-xs mt-1" :style="{ color: 'var(--c-muted)' }">Large</p>
      </div>

      <!-- Labeled with value -->
      <div class="pt-2">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm">Volume</span>
          <span class="text-sm font-medium" :style="{ color: 'var(--c-accent)' }">{{ sliderValue }}</span>
        </div>
        <input
          v-model="sliderValue"
          type="range"
          min="0"
          max="100"
          class="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          :style="{ accentColor: 'var(--c-accent)', background: 'var(--c-border)' }"
        >
      </div>
    </div>

    <!-- Accordion -->
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Accordion</p>
    <div class="max-w-md rounded-lg border overflow-hidden" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
      <!-- Item 1 -->
      <div :style="{ borderColor: 'var(--c-border)' }" class="border-b">
        <button
          class="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-left focus:outline-none"
          @click="toggleAccordion(0)"
        >
          <span>What is this design system?</span>
          <svg
            class="transition-transform duration-200"
            :class="{ 'rotate-180': accordionOpen === 0 }"
            :style="{ color: 'var(--c-muted)' }"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <div v-show="accordionOpen === 0" class="px-4 pb-3">
          <p class="text-sm" :style="{ color: 'var(--c-muted)' }">A collection of reusable components and tokens built for consistent, themeable interfaces.</p>
        </div>
      </div>

      <!-- Item 2 -->
      <div :style="{ borderColor: 'var(--c-border)' }" class="border-b">
        <button
          class="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-left focus:outline-none"
          @click="toggleAccordion(1)"
        >
          <span>How do themes work?</span>
          <svg
            class="transition-transform duration-200"
            :class="{ 'rotate-180': accordionOpen === 1 }"
            :style="{ color: 'var(--c-muted)' }"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <div v-show="accordionOpen === 1" class="px-4 pb-3">
          <p class="text-sm" :style="{ color: 'var(--c-muted)' }">Themes are powered by CSS custom properties. Swap the variables and the entire UI updates instantly.</p>
        </div>
      </div>

      <!-- Item 3 -->
      <div>
        <button
          class="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-left focus:outline-none"
          @click="toggleAccordion(2)"
        >
          <span>Can I customize components?</span>
          <svg
            class="transition-transform duration-200"
            :class="{ 'rotate-180': accordionOpen === 2 }"
            :style="{ color: 'var(--c-muted)' }"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <div v-show="accordionOpen === 2" class="px-4 pb-3">
          <p class="text-sm" :style="{ color: 'var(--c-muted)' }">Yes. Every component accepts standard props and can be styled through CSS variables or utility classes.</p>
        </div>
      </div>
    </div>
  </div>
</template>
