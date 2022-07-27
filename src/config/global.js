export default {
  global: {
    componenteFormativo: 'Protocolo de las comunicaciones y gestión documental',
    descripcionCurso:
      'La unidad de correspondencia es parte de la gestión documental en la que se constituyen las etapas, los requerimientos y procesos que fecundan la gestión de la información eficaz; por ello, la participación del programa de gestión documental decide el que hacer de las actividades, los responsables y el tiempo en el contexto documental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/portada/banner-interno.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Controles y procedimientos en la gestión documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Aspectos de la organización documental',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación documental',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Utilidad de los principios archivísticos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ordenación documental',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Descripción documental',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos generales de la gestión documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Etapas de la gestión documental',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Requerimientos de la gestión documental',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Procesos de la gestión documental',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Programa de gestión documental',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Gestión y trámite documental',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Trazabilidad de la información',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Archivo General de la Nación - Colombia. (2006). Principio de procedencia.',
      link:
        'https://glosario.archivogeneral.gov.co/vocab/index.php?tema=218&/principio-de-procedencia',
    },
    {
      referencia:
        'Archivo General de la Nación - Colombia. (2006). Acuerdo 027 de 2006 - Actualizar el Reglamento General de Archivos, en su Artículo 67 y en lo correspondiente al uso del Glosario.',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Acuerdo_027_2006.pdf',
    },
    {
      referencia:
        'Archivo General de la Nación - Colombia. (2001). Acuerdo 060 de 2001 - Pautas para la administración de las comunicaciones oficiales en las entidades públicas y las privadas que cumplen funciones públicas.',
      link: 'https://normativa.archivogeneral.gov.co/acuerdo-060-de-2001/',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2000). Ley 594 de 2000. Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones.',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/ley-594-14-julio-2000.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2014). Ley 1712 de 2014. Por medio de la cual se crea la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882',
    },
    {
      referencia:
        'MailxMail (2010). Archivística. Manejo y organización de archivos (Manual del archivero).',
      link:
        'http://www.mailxmail.com/curso-archivistica-manejo-organizacion-archivos-manual-archivero/organizacion-documentos-descripcion-seleccion-documental#:~:text=ORGANIZACI%C3%93N%20DE%20DOCUMENTOS.%20Es%20un%20proceso%20t%C3%A9cnico%20archiv%C3%ADstico,a%20identificar%20las%20respectivas%20series%20y%20sub-series%20documentales.',
    },
    {
      referencia:
        'Presidencia de la Republica de Colombia. (2012). Decreto 2609 de 2012. Por el cual se reglamenta el Título V de la Ley 594 de 2000, parcialmente los artículos 58 y 59 de la Ley 1437 de 2011 y se dictan otras disposiciones en materia de Gestión Documental para todas las Entidades del Estado.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=50958',
    },
    {
      referencia:
        'Secretaría Distrital de Planeación de Bogotá. (2019). Principio de orden original.',
      link:
        'https://www.sdp.gov.co/transparencia/informacion-interes/glosario/principio-de-orden-original',
    },
  ],
  glosario: [
    {
      termino: 'Cuadro de Clasificación Documental (CCD)',
      significado:
        'instrumento archivístico que se expresa en el listado de todas las series y susbseries documentales con su correspondiente codificación, conformado a lo largo de historia institucional del Archivo General de la Nación.',
    },
    {
      termino: 'Diplomática documental',
      significado:
        'encargada de estudiar las características del documento en cuanto a su elaboración, con el objeto de evidenciar la evolución de los tipos documentales y determinar su valor como fuente para la memoria institucional.',
    },
    {
      termino: 'Fondo acumulado',
      significado:
        'documentos reunidos por una entidad en el transcurso de su vida institucional sin un criterio archivístico determinado de organización y de conservación.',
    },
    {
      termino: 'Metadatos para la gestión de documentos',
      significado:
        'información estructurada o semiestructurada que permite la creación, gestión y uso de los documentos a lo largo del tiempo y entre diferentes dominios.',
    },
    {
      termino: 'Normograma',
      significado:
        'contiene las normas de carácter constitucional, legal, reglamentario y de autorregulación, que son de interés para la entidad y que permiten identificar las competencias, responsabilidades y funciones de cada una de las dependencias.',
    },
    {
      termino: 'Procesos',
      significado:
        'corresponden al cauce a través del cual los órganos cumplen las funciones.',
    },
    {
      termino: 'Procedimientos',
      significado:
        'forman los procesos. Conjunto de operaciones realizadas de manera secuencial, sistemática y ordenada, dirigida a producir una acción administrativa. Los procedimientos son los responsables de la producción documental.',
    },
    {
      termino: 'Programa de Gestión Documental (PGD)',
      significado:
        'plan elaborado por cada sujeto obligado para facilitar la identificación, gestión, clasificación, organización, conservación y disposición de la información pública, desde su creación hasta su disposición final.',
    },
    {
      termino: 'Protocolo de servicio',
      significado:
        'guía o manual que contiene orientaciones básicas fundamentales para facilitar la gestión del servidor público frente a los ciudadanos, con el fin de lograr un mejor manejo y una mayor efectividad en el uso de un canal específico',
    },
    {
      termino: 'Sistema de Gestión de Bases de Datos (SGBD)',
      significado:
        'software que permite crear, editar y controlar el acceso de la base de datos.',
    },
    {
      termino: 'Tratamiento de datos o de información',
      significado:
        'cualquier operación o conjunto de operaciones sobre datos personales, como recolección, almacenamiento, uso, circulación.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capturar, crear y mantener información en secuencia del mensaje o uso de registros.',
    },
  ],
  complementario: [
    {
      tema: 'Procesos de la Gestión Documental',
      referencia:
        'Archivo General de la Nación - AGN. (2020). Siete pasos para la formulación del Programa de gestión documental-PGD.',
      tipo: 'Infografía',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Infografias/7_PGD.pdf',
    },
    {
      tema: 'Programa de Gestión Documental',
      referencia:
        'Archivo General de la Nación - AGN. (2020). Interoperabilidad de comunicaciones oficiales.',
      tipo: 'Infografía',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Infografias/6_InteroperabilidadDeComunicaciones.pdf',
    },
    {
      tema: 'Trazabilidad de la Información',
      referencia:
        'Sierra. N. (2020). Cómo articular la gestión documental con otros sistemas de gestión.',
      tipo: 'Pódcast',
      link:
        'https://www.nosonpapeles.com/podcast/nikos-sierra-como-articular-la-gestion-documental-con-otros-sistemas-de-gestion/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabiola Sierra Sarmiento',
        cargo: 'Experto temático',
        centro: 'CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Roja',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
