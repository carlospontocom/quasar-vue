<template>
  <section class="formulario-container">
    <div class="header-saldo">
      <div>
        <span class="badge-top">Saldo total </span>
        <h4 class="valor">{{ moedaBR.format(saldo) }}</h4>
        <span class="footer-saldo">Carteira digital e financeira!</span>
      </div>

      <div class="btn-fakes">
        <div class="btn-fake-top">Renda</div>
        <div class="btn-fake-top">Gastos</div>
        <q-btn
          class="btn-fake-top"
          style="color: white; background-color: #007bff; border-radius: 5px"
        >
          <q-icon name="add" />Adicionar transação
        </q-btn>
      </div>
    </div>

    <div class="resumo">
      <div class="box-despesa" icon="money_off">
        <q-icon
          name="trending_up"
          size="2rem"
          style="background: green; border-radius: 5px; padding: 1rem"
        />
        <p class="number-box">
          {{ moedaBR.format(totalDespesa) }}
        </p>
      </div>

      <div class="box-receita" icon="attach_money">
        <q-icon
          name="trending_down"
          size="2rem"
          style="background: pink; border-radius: 5px; padding: 1rem"
        />
        <p class="number-box">{{ moedaBR.format(totalReceita) }}</p>
      </div>

      <div class="box-saldo" icon="account_balance">
        <q-icon
          name="account_balance"
          size="2rem"
          style="background: blue; border-radius: 5px; padding: 1rem"
        />
        <p class="number-box">
          {{ moedaBR.format(saldo) }}
        </p>
      </div>
    </div>

    <q-form class="formulario">
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

    <section>
      <div class="text-h6">Transações</div>
    </section>

    <div class="cards">
      <div v-for="transacao in transacoes" :key="transacao.id" class="card">
        <div class="flex items-center">
          <q-icon
            :name="
              transacao.tipo === 'receita' ? 'trending_up' : 'trending_down'
            "
            :color="transacao.tipo === 'receita' ? 'positive' : 'negative'"
            :class="transacao.tipo === 'receita' ? 'bg-green-4' : 'bg-red-4'"
            size="2rem"
            class="q-pa-xs rounded-borders"
          />
          <div class="flex column q-ml-sm">
            <div class="text-h6">{{ transacao.descricao }}</div>
            <span>07/09/2026</span>
          </div>
          <p class="badge">{{ transacao.tipo }}</p>
        </div>
        <h5 class="price">{{ moedaBR.format(transacao.valor) }}</h5>
        <div class="actions">
          <q-icon name="delete" @click="" class="icone-transation" />
          <q-icon name="edit" @click="" class="icone-transation" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../../css/carteira.scss";

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

const moedaBR = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
</script>
