<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En el siguiente gráfico se presenta la información ordenada a manera de síntesis de los contenidos trabajados en el presente componente formativo.
    .row.justify-content-center
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
        a.anexo.mb-4(:href="obtenerLink('/downloads/síntesis.pdf')" target="_blank")
          .anexo__icono
            img.text-center(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.ms-4 Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
