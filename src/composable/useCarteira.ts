export function useCarteira() {
  function adicionarTransacao() {
    alert("Transação adicionada com sucesso!");
  }
  return {
    adicionarTransacao,
  };
}
