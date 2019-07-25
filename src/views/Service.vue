<template>
  <div>
    <h1>Login</h1>
    <form>
      <input type="text" name="cpf" />
      <input type="password" name="password" />
      <button>Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  created(){
    // Confiança do usuário maior que o que o serviço requer
    if(6 < 5) {
      this.$router.push('reauth')
    }
  }
};
</script>

<style>
</style>
