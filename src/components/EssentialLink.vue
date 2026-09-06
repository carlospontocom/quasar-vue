<template>
  <!-- Se a prop 'to' existir, usa router-link interno do Quasar -->
  <q-item v-if="to" clickable :to="to">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label v-if="caption" caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>

  <!-- Se for link externo ('link'), abre em nova aba -->
  <q-item v-else clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label v-if="caption" caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  label: string;
  caption?: string;
  link?: string;
  to?: string;
  icon?: string;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: "",
  link: "#",
  to: "",
  icon: "",
});
</script>
