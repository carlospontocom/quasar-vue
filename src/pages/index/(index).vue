<template>
  <section class="formulario-container">
    <h1 class="title">Carteira Quasar App</h1>

    <div class="resumo">
      <div class="box-despesa" icon="money_off">
        <span class="span-box">Despesa</span>
        <q-icon name="money_off" size="2rem" />
        RS {{ totalDespesa }}
      </div>

      <div class="box-receita" icon="attach_money">
        <span class="span-box">Receita</span>
        <q-icon name="attach_money" size="2rem" />
        RS {{ totalReceita }}
      </div>

      <div class="box-saldo" icon="account_balance">
        <span class="span-box">Saldo</span>
        <q-icon name="account_balance" size="2rem" />
        RS {{ saldo }}
      </div>
    </div>

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

    <q-card-section>
      <div class="text-h6">Transações</div>
    </q-card-section>
    <q-separator />

    <div class="cards">
      <q-card
        v-for="transacao in transacoes"
        :key="transacao.id"
        class="my-card"
      >
        <q-card-section>
          <div class="text-h6">{{ transacao.descricao }}</div>
          <div class="text-subtitle2">{{ transacao.valor }}</div>
          <div class="text-subtitle2">{{ transacao.tipo }}</div>
        </q-card-section>
      </q-card>
    </div>
  </section>
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

const transacoes = ref([
  { id: 1, valor: 1000, descricao: "Salário", tipo: "receita" },
  { id: 2, valor: 200, descricao: "Aluguel", tipo: "despesa" },
]);

const totalReceita = ref(0);
const totalDespesa = ref(0);
const saldo = ref(0);

totalReceita.value = transacoes.value
  .filter((t) => t.tipo === "receita")
  .reduce((acc, t) => acc + t.valor, 0);

totalDespesa.value = transacoes.value
  .filter((t) => t.tipo === "despesa")
  .reduce((acc, t) => acc + t.valor, 0);

saldo.value = totalReceita.value - totalDespesa.value;
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

.resumo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.box-despesa {
  background-color: #f44336;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.box-receita {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.box-saldo {
  background-color: #2196f3;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.span-box {
  font-size: 13px;
  display: block;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 1.5rem;
}
</style>
