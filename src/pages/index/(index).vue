<template>
  <section class="formulario-container">
    <h1 class="title">Carteira Quasar App</h1>
    <q-form class="q-pa-md q-gutter-md">
      <q-input outlined placeholder="Valor" v-model="valor" type="number" />
      <q-input outlined placeholder="Descrição" v-model="descricao" />

      <q-select
        outlined
        placeholder="Selecione o tipo"
        :options="opcoesTipo"
        v-model="tipoSelecionado"
        emit-value
        map-options
        option-label="label"
        option-value="value"
      />
      <q-btn color="primary" type="primary">Adicionar </q-btn>
    </q-form>
  </section>
  <div></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const valor = ref<number | null>(null);
const descricao = ref<string>("");
const tipoSelecionado = ref<string>("receita");

const opcoesTipo = ref([
  { label: "Receita", value: "receita" },
  { label: "Despesa", value: "despesa" },
]);
</script>

<style scoped>
.formulario-container {
  margin: 0 auto;
  max-width: 600px;
}

.title {
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}
</style>
