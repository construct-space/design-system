<script setup lang="ts">
import { onMounted, watch, shallowRef, type Component } from 'vue'
import { useTheme } from './composables/useTheme'
import { usePages } from './composables/usePages'
import Sidebar from './components/Sidebar.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

import OverviewPage from './pages/OverviewPage.vue'
import ColorsPage from './pages/ColorsPage.vue'
import TypographyPage from './pages/TypographyPage.vue'
import ThemesPage from './pages/ThemesPage.vue'
import LogoPage from './pages/LogoPage.vue'
import ButtonsPage from './pages/ButtonsPage.vue'
import InputsPage from './pages/InputsPage.vue'
import CardsPage from './pages/CardsPage.vue'
import ControlsPage from './pages/ControlsPage.vue'
import OverlaysPage from './pages/OverlaysPage.vue'
import FeedbackPage from './pages/FeedbackPage.vue'
import ToastPage from './pages/ToastPage.vue'
import NavigationPage from './pages/NavigationPage.vue'
import DataPage from './pages/DataPage.vue'
import SdkPage from './pages/SdkPage.vue'
import SpacePage from './pages/SpacePage.vue'
import SidebarPage from './pages/SidebarPage.vue'
import ToolbarPage from './pages/ToolbarPage.vue'
import SettingsPage from './pages/SettingsPage.vue'
import DashboardPage from './pages/DashboardPage.vue'

const { currentTheme, setTheme, applyTheme } = useTheme()
const { pages, currentPage } = usePages()

const sidebarOpen = shallowRef(false)

const pageComponents: Record<string, Component> = {
  overview: OverviewPage,
  colors: ColorsPage,
  typography: TypographyPage,
  themes: ThemesPage,
  logo: LogoPage,
  buttons: ButtonsPage,
  inputs: InputsPage,
  cards: CardsPage,
  controls: ControlsPage,
  overlays: OverlaysPage,
  feedback: FeedbackPage,
  toast: ToastPage,
  navigation: NavigationPage,
  data: DataPage,
  sdk: SdkPage,
  space: SpacePage,
  sidebar: SidebarPage,
  toolbar: ToolbarPage,
  settings: SettingsPage,
  dashboard: DashboardPage,
}

watch(currentPage, () => { sidebarOpen.value = false })

onMounted(() => applyTheme(currentTheme.value))
</script>

<template>
  <div class="flex min-h-screen" :style="{ background: 'var(--c-bg)', color: 'var(--c-fg)' }">
    <button
      class="fixed top-4 left-4 z-50 p-2 rounded-lg border lg:hidden"
      :style="{ background: 'var(--c-surface)', borderColor: 'var(--c-border)', color: 'var(--c-fg)' }"
      @click="sidebarOpen = !sidebarOpen"
    >
      <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>
    </button>

    <div v-if="sidebarOpen" class="fixed inset-0 bg-black/50 z-30 lg:hidden" @click="sidebarOpen = false"></div>

    <Sidebar
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
      class="z-40 transition-transform duration-200"
    />

    <main class="flex-1 px-5 py-14 lg:ml-56 lg:px-10 lg:py-8 max-w-4xl">
      <ThemeSwitcher />
      <component :is="pageComponents[currentPage]" />
    </main>
  </div>
</template>
