<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> QaV </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Navegação </q-item-label>

        <!-- Links Principais/Externos -->
        <EssentialLink
          v-for="link in linksList"
          :key="link.label"
          v-bind="link"
        />

        <q-separator />

        <!-- Submenu Usuários -->
        <q-expansion-item
          icon="people"
          label="Usuários"
          caption="Gerenciamento de contas"
        >
          <!-- Apontando para o caminho exato /CadastroUsuario -->
          <q-item clickable v-ripple to="/CadastroUsuario" class="q-pl-lg">
            <q-item-section avatar>
              <q-icon name="person_add" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Cadastrar Usuário</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/GerenciarUsuario" class="q-pl-lg">
            <q-item-section avatar>
              <q-icon name="manage_accounts" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Gerenciar Usuários</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <!-- O conteúdo da rota interna vai abrir aqui ao lado direito -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EssentialLink, {
  type EssentialLinkProps,
} from "@/components/EssentialLink.vue";

const linksList: EssentialLinkProps[] = [
  {
    label: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
