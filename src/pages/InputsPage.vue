<script setup lang="ts">
import { ref } from 'vue'
import { CInput, CTextarea, CCheckbox, CFormField } from '@construct-space/ui'
import SdkUsage from '../components/SdkUsage.vue'

const name = ref('')
const password = ref('')
const search = ref('')
const bio = ref('')
const agreed = ref(true)

const sdkComponents = [
  { name: 'CInput', import: 'CInput', source: 'ui', usage: `<CInput v-model="name" placeholder="Name" icon="i-lucide-user" />\n<CInput type="password" size="sm" variant="soft" />` },
  { name: 'CTextarea', import: 'CTextarea', source: 'ui', usage: `<CTextarea v-model="bio" placeholder="Write..." rows="4" autoresize />` },
  { name: 'CCheckbox', import: 'CCheckbox', source: 'ui', usage: `<CCheckbox v-model="agreed" label="I agree to terms" />` },
  { name: 'CFormField', import: 'CFormField', source: 'ui', usage: `<CFormField label="Email" name="email" error="Required">\n  <CInput v-model="email" />\n</CFormField>` },
]
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">@construct-space/ui</p>
      <h1 class="text-3xl font-bold">Inputs</h1>
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Text Inputs</p>
    <div class="space-y-3 mb-8 max-w-md">
      <CInput v-model="name" placeholder="Default" />
      <CInput v-model="password" type="password" placeholder="Password" />
      <CInput v-model="search" placeholder="Search..." icon="i-lucide-search" />
      <CInput model-value="Error state" placeholder="Error" />
      <CInput placeholder="Disabled" disabled />
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Textarea</p>
    <div class="max-w-md mb-8">
      <CTextarea v-model="bio" placeholder="Write something..." :rows="3" autoresize />
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Controls</p>
    <div class="space-y-3 mb-8">
      <CCheckbox v-model="agreed" label="Checkbox enabled" />
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Form Pattern</p>
    <div class="max-w-md p-6 rounded-lg border space-y-4" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
      <CFormField label="Name">
        <CInput v-model="name" placeholder="Your name" />
      </CFormField>
      <CFormField label="Email" help="We'll never share your email.">
        <CInput placeholder="you@example.com" type="email" />
      </CFormField>
      <div class="flex gap-3 pt-2">
        <CButton label="Submit" variant="solid" />
        <CButton label="Cancel" variant="ghost" />
      </div>
    </div>

    <SdkUsage :components="sdkComponents" />
  </div>
</template>
