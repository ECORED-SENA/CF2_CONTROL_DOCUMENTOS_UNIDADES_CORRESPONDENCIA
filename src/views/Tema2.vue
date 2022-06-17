<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos generales de la gestión documental

    p En el siguiente video se pueden precisar los fundamentos de la gestión documental:

     figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    #archivo.titulo-segundo.color-acento-contenido(data-aos="fade-left")
        h2 2.1. Etapas de la gestión documental

    p.mb-4 Las etapas que se detallan a continuación deben hacerse de manera adecuada para que la entidad pueda gestionar la información de manera eficiente y conformar el patrimonio documental. Las entidades públicas abanderan estas etapas, puesto que reconocen el valor de seguir cada una de estas fases:

    .row.justify-content-center
      .col-12.col-lg-10.col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span.text-small <em>Etapas de la gestión documental</em>
    
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5.mb-0 
          table
            tr
              th.h4.bg_color5 Creación
              td Es importante definir las medidas de identificación y seguridad de los documentos que se producen en la entidad, debido a esto, la etapa de creación establece directrices para al papel, membrete, plantilla, tipo de letra, sellos en seco y todo aquello que permita la identificación de la producción del documento en cuanto a formato y características.
            tr
              th.h4 Mantenimiento
              td.bg_color_white El uso de técnicas para la conservación de la documentación digital y análoga. La fase de mantenimiento verifica el funcionamiento de los sistemas de gestión documental empleados por la entidad y en los cuales se apoya para la administración de la documentación. El mantenimiento propicia seguridad en cada etapa y proceso de la gestión documental procurando el control y la evaluación de quienes intervienen y manipulan la información. 
            tr
              th.h4.bg_color5 Difusión
              td Fase de la gestión documental que estructura las pautas para el acceso y publicación de la información así como los requerimientos de consulta. Las entidades públicas, según la Ley 1712 de 2014 Ley de Transparencia y Acceso a la Información Pública, indica que los sujetos obligados darán a conocer la información pública mediante los canales que ha dispuesto la entidad para tal fin.
            tr
              th.h4 Administración
              td.bg_color_white Consiste en el manejo de la distribución de los documentos en el ciclo de vida, esta fase se inicia desde la unidad de correspondencia que tiene a su cargo la responsabilidad de administrar la documentación que entra y sale de la entidad para la gestión de la información.

    Separador

    #archivo.titulo-segundo.color-acento-contenido(data-aos="fade-left")
        h2 2.2.	Requerimientos de la gestión documental

    p.mb-4 La categorización de la gestión documental es influenciada por lo siguientes requerimientos:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img01.svg', alt='Texto que describa la imagen')

      .tarjeta.bg_color_tarinfo-t2.p-3(x="41.5%" y="9.4%" numero="+")
        p <b>Normativos:</b> todos los procesos que intervienen en el manejo de la información deben contar con la normalización vigente que regule la administración del documento. La normativa a tener en cuenta es acuerdos, decretos, resoluciones y leyes que amparen la legislación archivística. 
      
      .tarjeta.p-3.bg_color_tarinfo-t2(x="41.5%" y="29.4%" numero="+")
        p <b>Económicos:</b> refiere a la entidad que garantice todos los lineamientos, acciones y cumplimientos de objetivos que se esbozan en el programa de gestión documental, de lo contrario, se está faltando a lo que infiere el manual en cuanto a la gestión del documento; asimismo, se recomienda que quien elabore o diseñe el programa de gestión documental tenga en cuenta los recursos que invierte la entidad para que no se establezcan procesos y planes que no se van a efectuar del todo por falta del recurso económico necesario.

      .tarjeta.bg_color_tarinfo-t2.p-3(x="41.5%" y="48.8%" numero="+")
        p <b>Administrativos:</b> refiere a la administración del talento humano, el perfil del colaborador, la asignación de los tiempos para cada actividad, búsqueda de funcionarios tecnológicos como son los ingenieros de sistemas que aportan enormemente a la gestión de los documentos electrónicos. En el programa de gestión documental se determina puntualmente que funcionario esta a cargo de cada actividad, su perfil y la secuencia del proceso que sigue.

      .tarjeta.bg_color_tarinfo-t2.p-3(x="41.5%" y="69%" numero="+")
        p <b>Tecnológicos:</b> se entiende por la capacidad de almacenamiento de la información digital y su seguridad. El objetivo debe cumplir con la inserción del e-gobierno en las entidades públicas cuya finalidad es el acercamiento al ciudadano mediante la prestación del servicio de manera digital, es muy importante pensar en el acceso a la plataforma, la consulta y la publicación de los documentos y el requerimiento para ello. 

      .tarjeta.bg_color_tarinfo-t2.p-3(x="41.5%" y="91.2%" numero="+")
        p <b>Gestión del cambio:</b> refiere a la actualización constante de las instituciones, el trabajo de cada colaborador y su capacitación, se debe buscar que la gestión documental funcione en su totalidad sensibilizando a todas las partes del proceso, cada empresa debe estar abierta a las sugerencias y al cambio en caso de ser necesario, no se pueden aferrar a viejas políticas sin justificación alguna.

    Separador

    #archivo.titulo-segundo.color-acento-contenido(data-aos="fade-left")
        h2 2.3 Procesos de la gestión documental
    
    p.mb-4 Los procesos de la gestión documental se fundamentan en lo expuesto por la Presidencia de la República en el Decreto 2609 (2012), que determina que la gestión de documentos responde a interrogantes sobre ¿qué hacer? y ¿cómo hacer? en el trámite de los documentos de todo tipo. A continuación, se describen los procesos que debe abordar la entidad en su sistema de gestión documental, en cada uno de los elementos se presentan los subprocesos que se llevan a cabo en cada fase:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img02.svg', alt='Texto que describa la imagen')

      .tarjeta.bg_color_tarinfo2-t2.p-3(x="59.1%" y="4.2%" numero="+")
        .h4.mb-2 Planeación
        ul.lista-ul--color.mb-2
          li 
            i.fas.fa-book-open
            p.m-0 Formato.
          li 
            i.fas.fa-book-open
            p.m-0 Metadatos.
          li
            i.fas.fa-book-open
            p.m-0 Instrumentos archivísticos.
      .tarjeta.p-3.bg_color_tarinfo2-t2(x="90.2%" y="27.1%" numero="+")
        .h4.mb-2 Producción 
        ul.lista-ul--color.mb-2
          li 
            i.fas.fa-book-open
            p.m-0 Versión de documentos.
          li 
            i.fas.fa-book-open
            p.m-0 Elaboración de documentos.
      .tarjeta.bg_color_tarinfo2-t2.p-3(x="96.9%" y="50.2%" numero="+")
        .h4.mb-2 Gestión y trámite
        ul.lista-ul--color.mb-2
          li 
            i.fas.fa-book-open
            p.m-0 Reparto de correspondencia.
          li 
            i.fas.fa-book-open
            p.m-0 Flujos de procesos.
          li
            i.fas.fa-book-open
            p.m-0 Alerta de respuestas a comunicaciones.
      .tarjeta.bg_color_tarinfo2-t2.p-3(x="90.2%" y="73.7%" numero="+")
        .h4.mb-2 Organización
        ul.lista-ul--color.mb-2
          li 
            i.fas.fa-book-open
            p.m-0 TRD.
          li 
            i.fas.fa-book-open
            p.m-0 Clasificación.
          li
            i.fas.fa-book-open
            p.m-0 Ordenación.
          li
            i.fas.fa-book-open
            p.m-0 Descripción.
      .tarjeta.bg_color_tarinfo2-t2.p-3(x="3.3%" y="50.2%" numero="+")
        .h4.mb-2 Transferencia
        ul.lista-ul--color.mb-2
          li 
            i.fas.fa-book-open
            p.m-0 Migración de información física.
          li 
            i.fas.fa-book-open
            p.m-0 Migración de metadatos.
      .tarjeta.bg_color_tarinfo2-t2.p-3(x="2.1%" y="27.1%" numero="+")
        .h4.mb-2 Disposición
        ul.lista-ul--color.mb-2
          li 
            i.fas.fa-book-open
            p.m-0 Conservación.
          li 
            i.fas.fa-book-open
            p.m-0 Selección.
          li
            i.fas.fa-book-open
            p.m-0 Microfilmación.
          li
            i.fas.fa-book-open
            p.m-0 Eliminación.
      .tarjeta.bg_color_tarinfo2-t2.p-3(x="10.1%" y="73.7%" numero="+")
        .h4.mb-2 Preservación
        ul.lista-ul--color.mb-2
          li 
            i.fas.fa-book-open
            p.m-0 Copias de seguridad.
          li 
            i.fas.fa-book-open
            p.m-0 Plan de conservación.
      .tarjeta.bg_color_tarinfo2-t2.p-3(x="58%" y="96%" numero="+")
        .h4.mb-2 Valoración
        ul.lista-ul--color.mb-2
          li 
            i.fas.fa-book-open
            p.m-0 Primaria.
          li 
            i.fas.fa-book-open
            p.m-0 Secundaria.

    .row.justify-content-center
      .col-12.col-lg-10.col-md-10
        .img_ban-enlace
          .row.justify-content-center
            .col-12.col-lg-8.col-md-8.width_llamado-action
              p.ms-5.mt-4 Para hacer la revisión de cada proceso, usted como aprendiz debe revisar el artículo 9º Procesos de la gestión documental del Decreto 2609 de 2012 de la Presidencia de la República en 2012 que se encuentra en el siguiente enlace:
              a.anexo(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.ms-4 <b>Enlace web.</b> Función publica 
    
    Separador

    #archivo.titulo-segundo.color-acento-contenido(data-aos="fade-left")
        h2 2.4 Programa de Gestión Documental – PGD

    p.mb-4 El PGD es el instrumento archivístico en el que se desglosan en tiempo específico los lineamientos y acciones de la gestión documental; así, una entidad sin una base para el manejo de la documentación está destinada a existir con las siguientes dificultades.

    .row.justify-content-center
      .col-12.col-xxl-10.col-lg-10.col-sm-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3
          span.text-small <em>Dificultades en la ausencia del PGD</em>
        table.vertical_top
          thead
            tr.bg_color_fondo_tr                
              th
                h4.text-center.mb-0 <b>Factores de corrupción</b>
              th
                h4.text-center.mb-0 <b>Destrucción injustificada de documentos</b>
          tbody
              tr
                td.p-3 Costos en la resolución de los documentos.
                td.p-3 Dificultades en el acceso documental.
              tr
                td.p-2.ps-3 Pérdida de demandas judiciales.
                td.p-2.ps-3 Lentitud en la difusión de la información.
              tr
                td.p-2.ps-3 Disminución de productividad.
                td.p-2.ps-3 Rotulación inadecuada de archivos.   

    .row.justify-content-center.align-items-center.img_banner-t2-4.my-5
      .col-12.col-xxl-8.col-lg-8.col-md-8(data-aos="fade-down-right") 
        p.ms-5 <b>Para la unidad de correspondencia es importante fortalecer las siguientes acciones:</b>
        ul.lista-ul--color.mb-2.ms-5
          li 
            i.fas.fa-book-open
            p.m-0 Recibir y crear documentos.
          li 
            i.fas.fa-book-open
            p.m-0 Radicar, registrar en planillas y seguir el trámite de las comunicaciones.
          li
            i.fas.fa-book-open
            p.m-0 Clasificar, ordenar y describir la información que se genera en el área de correspondencia.
      .col-12.col-xxl-4.col-lg-4.col-md-4(data-aos="fade-down-left").mb-5 
        figure
          img.pe-4.pt-4(src='@/assets/curso/tema2/img05.png')

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-xxl-5.col-lg-5.col-md-5(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/tema2/img06.svg')
      .col-12.col-xxl-7.col-lg-7.col-md-7
        p En las áreas de correspondencias siempre hay mucho por hacer pero si lo que se hace no lleva un control, si se reciben documentos sin ninguna planeación y, peor aún, sin ningún control, todo lo que se haga desde la unidad de correspondencia es un sinsentido puesto que no se alcanzarán los objetivos que ha dispuesto la entidad en su programa de gestión documental. 
        p Por ello, es tan importante controlar las acciones del área de correspondencia a través de los formatos, registros e indicadores que suministren un balance acerca del éxito o fracaso en los procedimientos del área y determinar la cercanía frente a lo propuesto por la gestión documental.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-xxl-8.col-lg-8.col-md-8
        p <b>Algunos de los controles que pueden realizar a la unidad de correspondencia son los siguientes:</b>
        ul.lista-ul--color.mb-2
          li 
            i.fas.fa-book-open
            p.m-0 Establecer políticas en la entidad para la radicación de los documentos en ambiente presencial y virtual.
          li 
            i.fas.fa-book-open
            p.m-0 Diseñar los formatos, planillas y formularios requeridos para llevar control de los documentos que se radican mediante un registro en un programa de computador como Excel o algún software especializado.
          li
            i.fas.fa-book-open
            p.m-0 Respetar las directrices dispuestas en el programa de gestión documental para el reparto de documentos al interior de la entidad.
          li 
            i.fas.fa-book-open
            p.m-0 Generar técnicas de comunicación asertiva para los funcionarios y usuarios de las entidades.
          li
            i.fas.fa-book-open
            p.m-0 Establecer parámetros claros para apoyar la gestión de las comunicaciones en todos los niveles de la empresa.        
      .col-12.col-xxl-4.col-lg-4.col-md-4(data-aos="fade-up")
        figure
          img(src='@/assets/curso/tema2/img07.png')
    
    .row.justify-content-center.align-items-center.mb-4
        .col-12.col-xxl-5.col-lg-5.col-md-5(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/img08.png')
        .col-12.col-xxl-7.col-lg-7.col-md-7
          p El programa de gestión documental se utiliza en las empresas para que todos los funcionarios hablen el mismo idioma documental, siguiendo los planes y programas en el tiempo que se describe en el instrumento para cooperar con las buenas prácticas archivísticas desde que se recibe el documento en la entidad hasta que se gestiona buscando la eficiencia en todos los procesos realizados en las unidades administrativas 
          p No obstante, el manual por sí solo no hace maravillas en la entidad, para ello, debe existir el compromiso de los actores involucrados en la producción de documentos, quienes implementaran los planes, programas, procesos y procedimientos que allí se describen, es fundamental que todos los partícipes de los procesos estén atentos a sugerir mejoras constantes en tiempo real para evitar repetir errores. La actualización de estos manuales se debe hacer constantemente y debe existir un protocolo para hacerlo.
    
    Separador

    #archivo.titulo-segundo.color-acento-contenido(data-aos="fade-left")
        h2 2.5 Gestión y trámite documental 
    
    p En la unidad de correspondencia recaen las labores de gestión y trámite de los documentos tramitados por la empresa, estas labores son las siguientes.

    .row.align-items-center.mb-4
      .col-12.col-xxl-3.col-lg-3.col-md-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img09.png')
      .col-12.col-xxl-3.col-lg-3.col-md-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img10.png')
      .col-12.col-xxl-3.col-lg-3.col-md-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img11.png')
      .col-12.col-xxl-3.col-lg-3.col-md-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img12.png')
    
    p Cada una de estas funciones debe estar clara en los procesos de gestión documental y debe tener un responsable que afirme cuándo se hizo bien y valide que se está cumpliendo y evitando así contratiempos.

    p.mb-5 <b>Con relación a los aspectos del proceso de gestión y trámite de documentos los pasos más importantes son los siguientes:</b>

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.col-md-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span.text-small <em>Aspectos de gestión y trámite</em>
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-6
            .tarjeta-avatar-b.mb-5.bg_color-hov-tar2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
              .tarjeta.tarjeta--boton.bg_color6
                .p-4
                  p Registro de documentos
          .col-lg-6
            .tarjeta-avatar-b.mb-5.bg_color-hov-tar2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
              .tarjeta.tarjeta--boton.bg_color6
                .p-4
                  p Distribución
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-6
            .tarjeta-avatar-b.mb-5.bg_color-hov-tar2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
              .tarjeta.tarjeta--boton.bg_color6
                .p-4
                  p Acceso y consulta
          .col-lg-6
            .tarjeta-avatar-b.mb-5.bg_color-hov-tar2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
              .tarjeta.tarjeta--boton.bg_color6
                .p-4
                  p Control y seguimiento

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.col-md-8
        p A continuación, se describe cada uno de estos pasos y su importancia en el proceso:
        TabsA.color-acento-contenido.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Registro de documentos")
            h4 Registro de documentos
            p.mx-4 Vincular el documento a un trámite en la entidad, por ende, todo documento se radica en la ventanilla única y se registran los datos de la comunicación en la versión del formato de registro vigente.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Distribución")
            h4 Distribución
            p Se reparten los documentos a las áreas competentes de dar solución al trámite.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Acceso y consulta")
            h4 Acceso y consulta
            p Todas las unidades administrativas sin excepción alguna, tienen conocimiento de las Tablas de Control y Acceso TCA, por lo tanto, deben facilitar la información basados en los permisos de acceso.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Control y seguimiento")
            h4 Control y seguimiento
            p Se crean alertas anticipadas sobre el tiempo de respuesta de la comunicación en trámite. 
      .col-12.col-lg-4.col-md-4
        figure
          img(src='@/assets/curso/tema2/img17.svg')(data-aos="zoom-in")

    Separador

    #archivo.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
        h2 2.6 Trazabilidad de la información

    .row.justify-content-center.align-items-center
      .col-12.col-xl-5.col-lg-5.col-md-5
        p La trazabilidad se define desde el seguimiento a una comunicación y es la forma de ubicarla y saber todo lo que pasó con ella en cada proceso dentro del trabajo de gestión documental. Esta información se tiene en cuenta desde cuando el documento ingresa a la entidad y va hasta su disposición final sea cual sea. En este proceso interactúan varios elementos y se pueden ver en el siguiente gráfico:
      .col-12.col-xl-7.col-lg-7.col-md-7
        SlyderF.mb-5(columnas="col-md-6.col-lg-6 col-xl-6")
          .tarjeta.p-4.bg_color7.height_Slyder-t2
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/img18.svg' alt='AvatarTop')
            h4.text-center Recepción 
            p.text-center Verificación y control de los documentos que llegan a la entidad para dar trámite. Servicio que actualmente se brinda a través de diferentes medios: correo electrónico, correo tradicional, fax, correo certificado y otros canales.

          .tarjeta.p-4.bg_color7.height_Slyder-t2
            .row.justify-content-center.mb-3.bg_color7
              .col-6
                img(src='@/assets/curso/tema2/img19.svg' alt='AvatarTop')
            h4.text-center Trámite
            p.text-center Preparación de la comunicación, la cual es elaborada por las dependencias para conformar las series documentales, en donde se analiza la competencia, tiempos de respuesta y se prepara la comunicación.

          .tarjeta.p-4.bg_color7.height_Slyder-t2
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/img20.svg' alt='AvatarTop')
            h4.text-center Producción
            p.text-center Se crea el documento, se estipula la forma de envío (internet o impreso), se tienen en cuenta parámetros como la coherencia del mensaje y el tipo documental que se elige para producir la información.

          .tarjeta.p-4.bg_color7.height_Slyder-t2
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/img21.svg' alt='AvatarTop')
            h4.text-center Distribución
            p.text-center Inicia con los documentos del exterior al interior de la entidad, en los que el funcionario de la unidad de correspondencia deberá hacer uso de herramientas de control para la recepción y envío.

          .tarjeta.p-4.bg_color7.height_Slyder-t2
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/img22.svg' alt='AvatarTop')
            h4.text-center Organización 
            p.text-center La sumatoria de los procedimientos: clasificación + ordenación + descripción.

          .tarjeta.p-4.bg_color7.height_Slyder-t2
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop')
            h4.text-center Consulta 
            p.text-center No es una tarea propia de la unidad de correspondencia, aunque se cita en la trazabilidad de información, en vista que los usuarios se acercan a la ventanilla única solicitando información de su radicado; a ello le denominamos consulta dentro del área de correspondencia.

          .tarjeta.p-4.bg_color7.height_Slyder-t2
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/img24.svg' alt='AvatarTop')
            h4.text-center Conservación
            p.text-center Almacenar la documentación según lo estipula la norma en espacios y unidades de conservación apropiadas para el ambiente digital y análogo de la información.


      



    
          






      



    
       
        

</template>

<script>
export default {
  name: 'Tema2',
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
