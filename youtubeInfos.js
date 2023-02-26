const infos = [
  [
    {
      thumbImg:
        'https://i.ytimg.com/vi/KPpdVkZhSqs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU-LTEuOVuNBBpaNtBWASI4gPmUA',
      titulo:
        'Palabras comunes para describir objetos en inglés | sustantivos, adjetivos y verbos de cada día',
      link: 'https://www.youtube.com/watch?v=KPpdVkZhSqs',
      rawViewsTime: ['77 mil visualizações', 'há 2 semanas'],
      views: 77000,
      timePosted: 14,
      viewsPerDay: 5500,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/D4TNIllSMmc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeLaDOinCG2iUuxDyvdlrgBWR2hw',
      titulo:
        'Aprende los adverbios de intensidad más usados en inglés | vocabulario básico a avanzado',
      link: 'https://www.youtube.com/watch?v=D4TNIllSMmc',
      rawViewsTime: ['112 mil visualizações', 'há 2 semanas'],
      views: 112000,
      timePosted: 14,
      viewsPerDay: 8000,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/dIBmMe019S0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCz1_60W6OIxr9l3bywh2x1L2MMUA',
      titulo:
        '30 palabras en inglés que cambian de significado al cambiar el acento o word stress',
      link: 'https://www.youtube.com/watch?v=dIBmMe019S0',
      rawViewsTime: ['113 mil visualizações', 'há 4 semanas'],
      views: 113000,
      timePosted: 28,
      viewsPerDay: 4035.714285714286,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/x63bsGhSOHE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNthDbEBzRETAIQgcAdpTjQTYHuw',
      titulo: '7 consejos para mejorar tu pronunciación en inglés',
      link: 'https://www.youtube.com/watch?v=x63bsGhSOHE',
      rawViewsTime: ['55 mil visualizações', 'há 1 mês'],
      views: 55000,
      timePosted: 30,
      viewsPerDay: 1833.3333333333333,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/UkgcW1W3jHk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDKRYZSeGWS6p58edjN_3PcaUJHQ',
      titulo: '50 expresiones y frases avanzadas en inglés',
      link: 'https://www.youtube.com/watch?v=UkgcW1W3jHk',
      rawViewsTime: ['179 mil visualizações', 'há 2 meses'],
      views: 179000,
      timePosted: 60,
      viewsPerDay: 2983.3333333333335,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/MRLwrriuWKA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyu83zsh-2NMKu1R-B0bSCinTLdg',
      titulo:
        'Mi vida real en inglés para ayudarte a mejorar tu vocabulario y comprensión auditiva',
      link: 'https://www.youtube.com/watch?v=MRLwrriuWKA',
      rawViewsTime: ['129 mil visualizações', 'há 3 meses'],
      views: 129000,
      timePosted: 90,
      viewsPerDay: 1433.3333333333333,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/CDI53BlxJss/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4QcgAt0j_E5Sx7P_R1gApBEpHMQ',
      titulo: 'Inglés de la vida real para principiantes con elisa valkyria',
      link: 'https://www.youtube.com/watch?v=CDI53BlxJss',
      rawViewsTime: ['138 mil visualizações', 'há 3 meses'],
      views: 138000,
      timePosted: 90,
      viewsPerDay: 1533.3333333333333,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/PxhRNrJHYXk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8ozCWASvv4QM9LLHoJQdrT7iqjQ',
      titulo: '20 de las preposiciones más usadas en inglés | nivel básico a1',
      link: 'https://www.youtube.com/watch?v=PxhRNrJHYXk',
      rawViewsTime: ['436 mil visualizações', 'há 4 meses'],
      views: 436000,
      timePosted: 120,
      viewsPerDay: 3633.3333333333335,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/PDMzAIwAg4o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJ1zQyzlSoe1AiN0hbk9sAB_GAdw',
      titulo:
        'Vocabulario simple para hablar del dinero, la economía, y las finanzas en inglés',
      link: 'https://www.youtube.com/watch?v=PDMzAIwAg4o',
      rawViewsTime: ['78 mil visualizações', 'há 4 meses'],
      views: 78000,
      timePosted: 120,
      viewsPerDay: 650,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/X_qRMMJZc_w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAihFr5n-lV499pDkH4De6dDyWsPw',
      titulo: 'Cómo hablar del futuro en inglés | las 4 formas principales',
      link: 'https://www.youtube.com/watch?v=X_qRMMJZc_w',
      rawViewsTime: ['129 mil visualizações', 'há 5 meses'],
      views: 129000,
      timePosted: 150,
      viewsPerDay: 860,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/LtXCzT8CtCU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwMcLrrz-yUuAxPMh1fJw3RiWQdA',
      titulo:
        '¿Conoces los 200 verbos más comunes en inglés? práctica para mejorar listening en inglés',
      link: 'https://www.youtube.com/watch?v=LtXCzT8CtCU',
      rawViewsTime: ['120 mil visualizações', 'há 5 meses'],
      views: 120000,
      timePosted: 150,
      viewsPerDay: 800,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/PnbT4LJKsV0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgwQnHDFubPx-R0XjuvV8d33Gntg',
      titulo:
        'Todos los usos de la palabra right en inglés | inglés con elisa valkyria',
      link: 'https://www.youtube.com/watch?v=PnbT4LJKsV0',
      rawViewsTime: ['91 mil visualizações', 'há 6 meses'],
      views: 91000,
      timePosted: 180,
      viewsPerDay: 505.55555555555554,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/Kp5cq4GoK7s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsA0qgjAu9u-LE5q5PBd2I8eFpdg',
      titulo:
        'La palabra left en inglés con todos sus significados | 25 frases con left en inglés lento y fácil',
      link: 'https://www.youtube.com/watch?v=Kp5cq4GoK7s',
      rawViewsTime: ['181 mil visualizações', 'há 6 meses'],
      views: 181000,
      timePosted: 180,
      viewsPerDay: 1005.5555555555555,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/7aZOOEJ7JfU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLRtGb4uUV4dwaSdpAfdkcj3NA-A',
      titulo:
        'Los 50 verbos irregulares más comunes en inglés en presente, pasado simple y participio pasado',
      link: 'https://www.youtube.com/watch?v=7aZOOEJ7JfU',
      rawViewsTime: ['221 mil visualizações', 'há 7 meses'],
      views: 221000,
      timePosted: 210,
      viewsPerDay: 1052.3809523809523,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/xEqV1LkaYko/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPcRw7H2wp8TM14qsWctymTH17nA',
      titulo:
        '500 frases comunes y muy usadas en inglés con pronunciación lenta | clase de inglés americano',
      link: 'https://www.youtube.com/watch?v=xEqV1LkaYko&t=158s',
      rawViewsTime: ['1,1 mi de visualizações', 'há 7 meses'],
      views: 1100000,
      timePosted: 210,
      viewsPerDay: 5238.0952380952385,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/mkWh_PFhAG0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpfoRLoM9azOKtuoubpaqECKf2Vg',
      titulo: 'Frases con el verbo to be en todos sus tiempos verbales',
      link: 'https://www.youtube.com/watch?v=mkWh_PFhAG0',
      rawViewsTime: ['754 mil visualizações', 'há 7 meses'],
      views: 754000,
      timePosted: 210,
      viewsPerDay: 3590.4761904761904,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/bTChcj3STLI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIE8oRTAP&rs=AOn4CLBif-6_tbNEwxwRKu7dbvXby0WpqQ',
      titulo:
        'Inglés de uso diario con pronunciación lenta | 40 frases para todos los días',
      link: 'https://www.youtube.com/watch?v=bTChcj3STLI',
      rawViewsTime: ['141 mil visualizações', 'há 8 meses'],
      views: 141000,
      timePosted: 240,
      viewsPerDay: 587.5,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/AaL0BIQiPDI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAh860YPbUD9d2hqp77ki-IEGBzQ',
      titulo:
        '50 afirmaciones positivas para aprender ingles | frases positivas en inglés con traducción',
      link: 'https://www.youtube.com/watch?v=AaL0BIQiPDI',
      rawViewsTime: ['196 mil visualizações', 'há 8 meses'],
      views: 196000,
      timePosted: 240,
      viewsPerDay: 816.6666666666666,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/yWZxVEuP8uM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr-V-hbZFn8bvKV1x-igXl4-zxDA',
      titulo:
        'Todos los miembros de familia en inglés con pronunciación y ejemplos | inglés lento y fácil',
      link: 'https://www.youtube.com/watch?v=yWZxVEuP8uM',
      rawViewsTime: ['172 mil visualizações', 'há 8 meses'],
      views: 172000,
      timePosted: 240,
      viewsPerDay: 716.6666666666666,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/9lKferjFNu0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgtWaNc9FhP_Atzs0elqeWfrrQEQ',
      titulo: 'Aprende inglés en youtube | ¿quién es más atractivo?',
      link: 'https://www.youtube.com/watch?v=9lKferjFNu0',
      rawViewsTime: ['78 mil visualizações', 'há 10 meses'],
      views: 78000,
      timePosted: 300,
      viewsPerDay: 260,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/yC-JwKfioZo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1tf34JWM9fOdvMXELuLq_Fp2BIA',
      titulo: 'Frases de tiempo en inglés | inglés lento y fácil',
      link: 'https://www.youtube.com/watch?v=yC-JwKfioZo',
      rawViewsTime: ['780 mil visualizações', 'há 10 meses'],
      views: 780000,
      timePosted: 300,
      viewsPerDay: 2600,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/Te3NN5ShKyA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRSdLYMLeCW4zF7XUS7kDG5M6wUg',
      titulo:
        'Cómo describir personas en inglés | 50 frases con vocabulario de personalidad en inglés',
      link: 'https://www.youtube.com/watch?v=Te3NN5ShKyA',
      rawViewsTime: ['276 mil visualizações', 'há 11 meses'],
      views: 276000,
      timePosted: 330,
      viewsPerDay: 836.3636363636364,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/VQVbUeOCEjY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFVziSr8sYoef3W4PrykW_cFgaFA',
      titulo:
        'Cómo decir cualquiera, ninguno y tampoco en inglés | yo tampoco, a mi tampoco en inglés',
      link: 'https://www.youtube.com/watch?v=VQVbUeOCEjY',
      rawViewsTime: ['439 mil visualizações', 'há 11 meses'],
      views: 439000,
      timePosted: 330,
      viewsPerDay: 1330.3030303030303,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/7SDo9JsaGio/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAc8jHiVlLfzI8MBfVsVWaxDlgMVQ',
      titulo:
        'El presente perfecto en inglés | aprende inglés con elisa valkyria',
      link: 'https://www.youtube.com/watch?v=7SDo9JsaGio',
      rawViewsTime: ['226 mil visualizações', 'há 1 ano'],
      views: 226000,
      timePosted: 365,
      viewsPerDay: 619.1780821917808,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/sbT85uZ18zc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHZjB0YgzfanRbhMRPzTIuGYWRhA',
      titulo:
        'In on at of to from | 50 frases con preposiciones comunes en inglés',
      link: 'https://www.youtube.com/watch?v=sbT85uZ18zc',
      rawViewsTime: ['298 mil visualizações', 'há 1 ano'],
      views: 298000,
      timePosted: 365,
      viewsPerDay: 816.4383561643835,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/gDkj2Rd5SKk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8C3ikE5AMpKeMhyo64jS6RjMUcw',
      titulo:
        '50 expresiones que usamos todos los días en inglés | aprende inglés con elisa valkyria',
      link: 'https://www.youtube.com/watch?v=gDkj2Rd5SKk',
      rawViewsTime: ['444 mil visualizações', 'há 1 ano'],
      views: 444000,
      timePosted: 365,
      viewsPerDay: 1216.4383561643835,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/1SCi3mAU6aE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmew96F2fLqLuLWBbM5K2yN3ID0g',
      titulo:
        'Las reglas del ing en inglés | cómo usar el ing gerundio en inglés | clase de inglés fácil',
      link: 'https://www.youtube.com/watch?v=1SCi3mAU6aE',
      rawViewsTime: ['241 mil visualizações', 'há 1 ano'],
      views: 241000,
      timePosted: 365,
      viewsPerDay: 660.2739726027397,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/Ll-aBq1nhRE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4vJWJyQPO4EGpFjoV8OI7GAwJRQ',
      titulo:
        'Los verbos más comunes en el tiempo presente, pasado y futuro en inglés | inglés para principiantes',
      link: 'https://www.youtube.com/watch?v=Ll-aBq1nhRE',
      rawViewsTime: ['928 mil visualizações', 'há 1 ano'],
      views: 928000,
      timePosted: 365,
      viewsPerDay: 2542.4657534246576,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/8Y0hhtUSi9U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZ8XQtPtktT-EtMeNCeLD_4NZQg',
      titulo:
        'Vocabulario y frases útiles con palabras compuestas en inglés | pronunciación lenta y clara',
      link: 'https://www.youtube.com/watch?v=8Y0hhtUSi9U',
      rawViewsTime: ['406 mil visualizações', 'há 1 ano'],
      views: 406000,
      timePosted: 365,
      viewsPerDay: 1112.3287671232877,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/LVBkwgl_YZs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQo7lQHqNuSSZS4Np6eN0UZT5sfg',
      titulo:
        'Cuándo usar good y cuándo usar well en inglés | la diferencia entre good y well con ejemplos',
      link: 'https://www.youtube.com/watch?v=LVBkwgl_YZs',
      rawViewsTime: ['210 mil visualizações', 'há 1 ano'],
      views: 210000,
      timePosted: 365,
      viewsPerDay: 575.3424657534247,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/5M0NgGAsDFQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsvtiC85rOSPNrXxzRet3iYOy9Pg',
      titulo:
        'Verbos modales en inglés con ejemplos | clase de inglés con elisa valkyria',
      link: 'https://www.youtube.com/watch?v=5M0NgGAsDFQ',
      rawViewsTime: ['994 mil visualizações', 'há 1 ano'],
      views: 994000,
      timePosted: 365,
      viewsPerDay: 2723.2876712328766,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/IUkUf0vpOhw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaps-lEuEvOZrMsXA_fYJvXRbduA',
      titulo:
        '100 frases básicas y esenciales en inglés para principiantes | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=IUkUf0vpOhw',
      rawViewsTime: ['928 mil visualizações', 'há 1 ano'],
      views: 928000,
      timePosted: 365,
      viewsPerDay: 2542.4657534246576,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/FpIII_DegXY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8WrhaiFeNk_ULLCzlukpgJvep6Q',
      titulo:
        '35 frases útiles en presente y pasado usando phrasal verbs | inglés lento y fácil de uso diario',
      link: 'https://www.youtube.com/watch?v=FpIII_DegXY',
      rawViewsTime: ['579 mil visualizações', 'há 1 ano'],
      views: 579000,
      timePosted: 365,
      viewsPerDay: 1586.3013698630136,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/jFKROniMniI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCuuE3YAZ5-bQ5ranP-CMPJXkv1A',
      titulo:
        '25 frases útiles usando someone, somebody, anyone, anybody en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=jFKROniMniI',
      rawViewsTime: ['219 mil visualizações', 'há 1 ano'],
      views: 219000,
      timePosted: 365,
      viewsPerDay: 600,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/7qfcVfpnKvI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDS--48LusWAb2P3cCROTpQYNvHNQ',
      titulo: 'Frases en el tiempo pasado en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=7qfcVfpnKvI',
      rawViewsTime: ['1,2 mi de visualizações', 'há 1 ano'],
      views: 1200000,
      timePosted: 365,
      viewsPerDay: 3287.671232876712,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/ssFmZI-Lg-I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF2CRuTUMOLkEBPGcBQWj2qIxPww',
      titulo:
        'Lista de trabajos que pagan bien sin título en los estados unidos | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=ssFmZI-Lg-I',
      rawViewsTime: ['99 mil visualizações', 'há 1 ano'],
      views: 99000,
      timePosted: 365,
      viewsPerDay: 271.2328767123288,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/AQI0s6i6o1k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALnI9LRw1ZQuhqiflQO6atzhCgLA',
      titulo:
        'Cómo comparar cosas en inglés | los comparativos y superlativos en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=AQI0s6i6o1k',
      rawViewsTime: ['388 mil visualizações', 'há 1 ano'],
      views: 388000,
      timePosted: 365,
      viewsPerDay: 1063.013698630137,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/VLG8kL4O8Rk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYEevdvGeVF1QQw-GZk6sDdiVCUg',
      titulo:
        '50 frases negativas en inglés | como decirle a alguien que no haga algo en inglés',
      link: 'https://www.youtube.com/watch?v=VLG8kL4O8Rk',
      rawViewsTime: ['750 mil visualizações', 'há 1 ano'],
      views: 750000,
      timePosted: 365,
      viewsPerDay: 2054.794520547945,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/SSnBxpqV19U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzd63aPXj5ZCn0O32wxJIXo9mIhQ',
      titulo:
        'Preposiciones comunes en inglés con muchos ejemplos | inglés con elisa valkyria',
      link: 'https://www.youtube.com/watch?v=SSnBxpqV19U',
      rawViewsTime: ['383 mil visualizações', 'há 1 ano'],
      views: 383000,
      timePosted: 365,
      viewsPerDay: 1049.3150684931506,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/ExnZ0d9OxIQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0ez7DNQAxYHVphuDDAaYVzV2QDA',
      titulo:
        'Aprende las 500 palabras más usadas en inglés | pronunciación lenta',
      link: 'https://www.youtube.com/watch?v=ExnZ0d9OxIQ',
      rawViewsTime: ['2,1 mi de visualizações', 'há 1 ano'],
      views: 2100000,
      timePosted: 365,
      viewsPerDay: 5753.424657534247,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/DxqH_Z6sbus/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEosjO-6rW-woFuf_ogYxRLmp7Ig',
      titulo:
        'Have been y has been en inglés | aprende inglés con elisa valkyria',
      link: 'https://www.youtube.com/watch?v=DxqH_Z6sbus',
      rawViewsTime: ['407 mil visualizações', 'há 1 ano'],
      views: 407000,
      timePosted: 365,
      viewsPerDay: 1115.0684931506848,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/cEFDPK-aJpY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuntYQWYtfgjK6WonZPMtfYH5bQw',
      titulo:
        'Las herramientas en inglés | frases útiles en inglés para la casa o el trabajo | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=cEFDPK-aJpY',
      rawViewsTime: ['295 mil visualizações', 'há 1 ano'],
      views: 295000,
      timePosted: 365,
      viewsPerDay: 808.2191780821918,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/2fOOAAVyNVU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuiGCIm9Bn5hR0g2gDen72Xep6lg',
      titulo: 'Dichos muy comunes en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=2fOOAAVyNVU',
      rawViewsTime: ['187 mil visualizações', 'há 1 ano'],
      views: 187000,
      timePosted: 365,
      viewsPerDay: 512.3287671232877,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/7GaIqx6aRiQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5BRUdipTLybCn8BLzhXyuip-CgA',
      titulo: 'Las 10 mayores diferencias entre el inglés y el español',
      link: 'https://www.youtube.com/watch?v=7GaIqx6aRiQ',
      rawViewsTime: ['203 mil visualizações', 'há 1 ano'],
      views: 203000,
      timePosted: 365,
      viewsPerDay: 556.1643835616438,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/VUchcq1leiQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXKmCsS9E4GuB-PnUtgbn7_Bn7Og',
      titulo: 'Aprende 20 frases de uso diario en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=VUchcq1leiQ',
      rawViewsTime: ['166 mil visualizações', 'há 1 ano'],
      views: 166000,
      timePosted: 365,
      viewsPerDay: 454.7945205479452,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/Xv7srRFoNDc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm-xpblU1kvg4fE_6Xb6FGHSJpjQ',
      titulo:
        '50 frases comunes en inglés que usamos en el trabajo | pronunciación lenta y clara | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=Xv7srRFoNDc',
      rawViewsTime: ['864 mil visualizações', 'há 1 ano'],
      views: 864000,
      timePosted: 365,
      viewsPerDay: 2367.123287671233,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/tiZIQPzvZ3Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCv36i5vb1PyviZi6BE_ULwEajiA',
      titulo:
        '70 frases útiles en inglés con palabras opuestas | antónimos en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=tiZIQPzvZ3Q',
      rawViewsTime: ['725 mil visualizações', 'há 1 ano'],
      views: 725000,
      timePosted: 365,
      viewsPerDay: 1986.3013698630136,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/aHPY-Ts2CVY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvUuFPC3B1Y4gT8U3nBBI2CyPkzQ',
      titulo:
        'Real life english | inglés en la vida real con traducción | episode 1',
      link: 'https://www.youtube.com/watch?v=aHPY-Ts2CVY',
      rawViewsTime: ['233 mil visualizações', 'há 1 ano'],
      views: 233000,
      timePosted: 365,
      viewsPerDay: 638.3561643835617,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/gYlMgB0z3s4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPQ_yM7uc0tGVNNFUkBXy2E17ulw',
      titulo:
        'Los sustantivos abstractos más usados en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=gYlMgB0z3s4',
      rawViewsTime: ['707 mil visualizações', 'há 2 anos'],
      views: 707000,
      timePosted: 730,
      viewsPerDay: 968.4931506849315,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/13wdSY0uuPA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuZyMZDUaB2L3W-WLpWxk1vzTm5Q',
      titulo: 'Over en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=13wdSY0uuPA',
      rawViewsTime: ['594 mil visualizações', 'há 2 anos'],
      views: 594000,
      timePosted: 730,
      viewsPerDay: 813.6986301369863,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/lA_vdMg8Q-w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZxUlKP8vWO5spQctJ2PwLHtpItw',
      titulo:
        'Todo lo que tienes que saber sobre la palabra let en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=lA_vdMg8Q-w',
      rawViewsTime: ['380 mil visualizações', 'há 2 anos'],
      views: 380000,
      timePosted: 730,
      viewsPerDay: 520.5479452054794,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/fgWhT048ow0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcfN2moTgXQyN6zi6qWFvxRRVTMA',
      titulo:
        'La diferencia entre do y make en inglés | aprende con frases comunes | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=fgWhT048ow0',
      rawViewsTime: ['630 mil visualizações', 'há 2 anos'],
      views: 630000,
      timePosted: 730,
      viewsPerDay: 863.013698630137,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/0K-lxwWFgk8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbcAPjvIkVolewCXvivQ0xoZH2vQ',
      titulo: 'Como usar do, does, y did en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=0K-lxwWFgk8',
      rawViewsTime: ['403 mil visualizações', 'há 2 anos'],
      views: 403000,
      timePosted: 730,
      viewsPerDay: 552.054794520548,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/_GOAjihVZ8Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYn9_QILy7hVHcLfaUhiOYQGosOg',
      titulo: '35 frases comunes con by en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=_GOAjihVZ8Q',
      rawViewsTime: ['332 mil visualizações', 'há 2 anos'],
      views: 332000,
      timePosted: 730,
      viewsPerDay: 454.7945205479452,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/OCCYxl_aKzY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAp7BiDTGhpkRjw0YUV5QelbpbceQ',
      titulo: 'Frases simples en inglés | partes de la cara | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=OCCYxl_aKzY',
      rawViewsTime: ['301 mil visualizações', 'há 2 anos'],
      views: 301000,
      timePosted: 730,
      viewsPerDay: 412.32876712328766,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/TdImXzopKHE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm_cTbz7vY42i6kBcCvuMf0iUFLA',
      titulo:
        'Cómo usar just y only en inglés; aprendiendo con frases! | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=TdImXzopKHE',
      rawViewsTime: ['316 mil visualizações', 'há 2 anos'],
      views: 316000,
      timePosted: 730,
      viewsPerDay: 432.8767123287671,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/kPuMnfkEWa0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIsDj2YCgEuii61p9SkUuaMJNZ0Q',
      titulo:
        '50 frases comunes con las palabras say y tell en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=kPuMnfkEWa0',
      rawViewsTime: ['501 mil visualizações', 'há 2 anos'],
      views: 501000,
      timePosted: 730,
      viewsPerDay: 686.3013698630137,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/a7q9gY006YE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHP9ZPoKjNlH2T9tumkEt5X9dqDw',
      titulo:
        'Despite, in spite of, even though, although en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=a7q9gY006YE',
      rawViewsTime: ['96 mil visualizações', 'há 2 anos'],
      views: 96000,
      timePosted: 730,
      viewsPerDay: 131.5068493150685,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/iBEALp62Iuw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKjbAURZ2176UxHRaGIqJkzkwvsg',
      titulo: 'Yet, still, already en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=iBEALp62Iuw',
      rawViewsTime: ['165 mil visualizações', 'há 2 anos'],
      views: 165000,
      timePosted: 730,
      viewsPerDay: 226.02739726027397,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/QAzpWEY8XsY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7qi8w3jRbARYHX_2S3ScuH0WUMw',
      titulo: '50 frases comunes en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=QAzpWEY8XsY',
      rawViewsTime: ['579 mil visualizações', 'há 2 anos'],
      views: 579000,
      timePosted: 730,
      viewsPerDay: 793.1506849315068,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/Da__syPZlKY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANRaGuZ7nOfZrilRU2HjiqsGZohw',
      titulo: '20 phrasal verbs comunes con up en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=Da__syPZlKY',
      rawViewsTime: ['309 mil visualizações', 'há 2 anos'],
      views: 309000,
      timePosted: 730,
      viewsPerDay: 423.28767123287673,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/-3RN2S_LKW4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsnGruL5GWUd2fMIYX6E1Kv9Q5Dw',
      titulo:
        'Como usar out en inglés | aprende 20 phrasal verbs comunes con out en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=-3RN2S_LKW4',
      rawViewsTime: ['374 mil visualizações', 'há 2 anos'],
      views: 374000,
      timePosted: 730,
      viewsPerDay: 512.3287671232877,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/9t7WMWyABRs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNqy3-7KWJlCMdOQTtHPNKdKUHpg',
      titulo:
        '50 frases muy usadas en inglés | palabras comunes de cada día en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=9t7WMWyABRs',
      rawViewsTime: ['407 mil visualizações', 'há 2 anos'],
      views: 407000,
      timePosted: 730,
      viewsPerDay: 557.5342465753424,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/YhqpYL5H_hI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrAwWAneavOXh5I6b9wAD7jSvbMg',
      titulo: 'Porque es difícil aprender inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=YhqpYL5H_hI',
      rawViewsTime: ['91 mil visualizações', 'há 2 anos'],
      views: 91000,
      timePosted: 730,
      viewsPerDay: 124.65753424657534,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/Gtsb6BY3AL0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrTMJSPKJo8m7MMGM5MjnmIeAIqQ',
      titulo:
        'Palabras difíciles de pronunciar en inglés | video para mejorar tu acento en inglés| elisa valkyria',
      link: 'https://www.youtube.com/watch?v=Gtsb6BY3AL0',
      rawViewsTime: ['253 mil visualizações', 'há 2 anos'],
      views: 253000,
      timePosted: 730,
      viewsPerDay: 346.5753424657534,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/8fW2bM0r3dU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFlfF_DSxjDOPudRNz2yT5GU7S5g',
      titulo:
        'Te enseño inglés mientras hablo con mi sobrina | aprende inglés divertido de la vida real',
      link: 'https://www.youtube.com/watch?v=8fW2bM0r3dU',
      rawViewsTime: ['261 mil visualizações', 'há 2 anos'],
      views: 261000,
      timePosted: 730,
      viewsPerDay: 357.5342465753425,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/Z6xXaT-7u6o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7prnIwfz5kGl0wFOgdT6pcBRG7A',
      titulo:
        'Los 100 verbos regulares más usados en inglés | cúando se usa ed en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=Z6xXaT-7u6o',
      rawViewsTime: ['914 mil visualizações', 'há 2 anos'],
      views: 914000,
      timePosted: 730,
      viewsPerDay: 1252.054794520548,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/_4_P88f5LUA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNE6Nfat6mwhTtuE8Qa-M1DN2LtA',
      titulo:
        'Tough though thought through thorough en inglés | como pronunciar palabras difíciles en inglés',
      link: 'https://www.youtube.com/watch?v=_4_P88f5LUA',
      rawViewsTime: ['215 mil visualizações', 'há 2 anos'],
      views: 215000,
      timePosted: 730,
      viewsPerDay: 294.52054794520546,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/Oh5EwIhv_bk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0wTIbzt8QMoJGXDhdE25DK9KjGg',
      titulo:
        'Pronunciaciones de la letra s en inglés | consejos para mejorar tu acento en inglés',
      link: 'https://www.youtube.com/watch?v=Oh5EwIhv_bk',
      rawViewsTime: ['452 mil visualizações', 'há 2 anos'],
      views: 452000,
      timePosted: 730,
      viewsPerDay: 619.1780821917808,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/di0-1HsBd0k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxqwLlyJx_fNohWW1sMZxk7mtJUA',
      titulo:
        '30 pares de palabras comunes en inglés | mejora tu vocabulario en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=di0-1HsBd0k',
      rawViewsTime: ['967 mil visualizações', 'há 2 anos'],
      views: 967000,
      timePosted: 730,
      viewsPerDay: 1324.6575342465753,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/SgqXq_14cSE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRLtkwT3zHEE_Q9b3ecgWyzzTSTw',
      titulo:
        '40 ejemplos con la palabra so en inglés | frases útiles en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=SgqXq_14cSE',
      rawViewsTime: ['592 mil visualizações', 'há 2 anos'],
      views: 592000,
      timePosted: 730,
      viewsPerDay: 810.9589041095891,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/NppxjsOa_bo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOugkVcolrEw6LBvcfZIPw56XV5Q',
      titulo:
        'Verbos frasales en inglés para hablar de relaciones | aprende inglés con elisa valkyria',
      link: 'https://www.youtube.com/watch?v=NppxjsOa_bo',
      rawViewsTime: ['233 mil visualizações', 'há 2 anos'],
      views: 233000,
      timePosted: 730,
      viewsPerDay: 319.17808219178085,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/FjjSbI9WQtk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1i6_IFXgDuAZAOc7LA1y_onMubg',
      titulo: '100 frases simples y comunes en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=FjjSbI9WQtk',
      rawViewsTime: ['3,7 mi de visualizações', 'há 2 anos'],
      views: 3700000,
      timePosted: 730,
      viewsPerDay: 5068.493150684932,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/i1pfdnyRCBE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBevrbHsq3IPzAx2UHHe72tHPal1w',
      titulo:
        'Palabras de transición en inglés para dar énfasis | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=i1pfdnyRCBE',
      rawViewsTime: ['365 mil visualizações', 'há 2 anos'],
      views: 365000,
      timePosted: 730,
      viewsPerDay: 500,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/hDgL3_4Zh1g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCR2OFaTrhfI69ZuapS6BIDPhZi_A',
      titulo:
        'Slang que usamos todos los días en estados unidos| elisa valkyria',
      link: 'https://www.youtube.com/watch?v=hDgL3_4Zh1g',
      rawViewsTime: ['481 mil visualizações', 'há 3 anos'],
      views: 481000,
      timePosted: 1095,
      viewsPerDay: 439.26940639269407,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/zbXYofQPmuc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwnv52snTk--sY5tnOqg2kKsKhvg',
      titulo:
        'Preguntas comunes con what, when, where, why, who, y how en inglés | elisa valkyrie',
      link: 'https://www.youtube.com/watch?v=zbXYofQPmuc',
      rawViewsTime: ['1,1 mi de visualizações', 'há 3 anos'],
      views: 1100000,
      timePosted: 1095,
      viewsPerDay: 1004.566210045662,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/U3K3hPEHd08/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3zk4dadH8kIzKys3n_6PvDBG0EA',
      titulo: 'Consejos para aprender inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=U3K3hPEHd08',
      rawViewsTime: ['354 mil visualizações', 'há 3 anos'],
      views: 354000,
      timePosted: 1095,
      viewsPerDay: 323.28767123287673,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/ERr4NX2GIdc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUpfZ_lfn1LvAiLy55s0wTHxzPPg',
      titulo: 'Verbos irregulares en inglés que puedes aprender rápido y fácil',
      link: 'https://www.youtube.com/watch?v=ERr4NX2GIdc',
      rawViewsTime: ['408 mil visualizações', 'há 3 anos'],
      views: 408000,
      timePosted: 1095,
      viewsPerDay: 372.6027397260274,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/CNPU6BhBHiI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvYr7MdYd7oWVWafLzLpDf-ytq_Q',
      titulo:
        '10 de los verbos compuestos (phrasal verbs) más comunes en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=CNPU6BhBHiI',
      rawViewsTime: ['485 mil visualizações', 'há 3 anos'],
      views: 485000,
      timePosted: 1095,
      viewsPerDay: 442.92237442922374,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/9FwW25u3qAY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxEe9Dz-UcEuGtsfnF4wjqUqAtpw',
      titulo:
        'La palabra fit en inglés | vocabulario y frases comunes para mejorar tu inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=9FwW25u3qAY',
      rawViewsTime: ['273 mil visualizações', 'há 3 anos'],
      views: 273000,
      timePosted: 1095,
      viewsPerDay: 249.31506849315068,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/T9mGJ2gYcWA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKPTkT1gdkVK-Mq_XKHnhSG48VGg',
      titulo:
        'Expresiones comunes en inglés que usamos todos los días | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=T9mGJ2gYcWA',
      rawViewsTime: ['1,5 mi de visualizações', 'há 3 anos'],
      views: 1500000,
      timePosted: 1095,
      viewsPerDay: 1369.86301369863,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/1tPzN5-KAFE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAv9R_W8tSMhvKaUJP1b2SMgideXQ',
      titulo:
        '25 de los verbos frasales más comunes en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=1tPzN5-KAFE',
      rawViewsTime: ['518 mil visualizações', 'há 3 anos'],
      views: 518000,
      timePosted: 1095,
      viewsPerDay: 473.0593607305936,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/xjZNwsDNI7Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZMaG6ohAkJ1ucBdQyGmKWvEedlQ',
      titulo:
        'Mejora tu vocabulario en inglés | las profesiones en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=xjZNwsDNI7Y',
      rawViewsTime: ['117 mil visualizações', 'há 3 anos'],
      views: 117000,
      timePosted: 1095,
      viewsPerDay: 106.84931506849315,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/fVlZHtGp1J8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_2taki6YJrLmXxES02xX7-h9mrg',
      titulo:
        'Mejora tu vocabulario en inglés; deja de decir very! | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=fVlZHtGp1J8',
      rawViewsTime: ['442 mil visualizações', 'há 3 anos'],
      views: 442000,
      timePosted: 1095,
      viewsPerDay: 403.65296803652967,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/Rxd1n11ekfA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDppn-TcfOs0gpUElq1cnaX0pmWEw',
      titulo:
        '35 frases comunes con get en inglés | clase de inglés | elisa valkyria |',
      link: 'https://www.youtube.com/watch?v=Rxd1n11ekfA',
      rawViewsTime: ['493 mil visualizações', 'há 3 anos'],
      views: 493000,
      timePosted: 1095,
      viewsPerDay: 450.2283105022831,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/QPXfqg8bx70/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3OoMKFRr41681ADq02cTr6ywwFA',
      titulo:
        'Aprende las 100 palabras más comunes en inglés con ejemplos | inglés lento y fácil | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=QPXfqg8bx70',
      rawViewsTime: ['2,2 mi de visualizações', 'há 3 anos'],
      views: 2200000,
      timePosted: 1095,
      viewsPerDay: 2009.132420091324,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/TXFTvafspyA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaZreOIexgjVpdnmxk-mBOC_vOBQ',
      titulo:
        '32 frases comunes y útiles con make en inglés | clase de inglés gratis | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=TXFTvafspyA',
      rawViewsTime: ['655 mil visualizações', 'há 3 anos'],
      views: 655000,
      timePosted: 1095,
      viewsPerDay: 598.1735159817351,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/NsATFHvM5IM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArk7evE7-YKneKENxr4huBY_cH9A',
      titulo:
        'No digas yes en inglés | mejora tu vocabulario en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=NsATFHvM5IM',
      rawViewsTime: ['627 mil visualizações', 'há 3 anos'],
      views: 627000,
      timePosted: 1095,
      viewsPerDay: 572.6027397260274,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/hXc_5SDyabA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwl0OyiY8ThD7c7rtUfn3eHIa5yQ',
      titulo:
        'Palabras bonitas en inglés | mejora tu vocabulario en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=hXc_5SDyabA',
      rawViewsTime: ['536 mil visualizações', 'há 3 anos'],
      views: 536000,
      timePosted: 1095,
      viewsPerDay: 489.49771689497715,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/cbSK7sb45gs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATBx42EOiB-JQRq7LsoLCPhDSTDA',
      titulo:
        'Deja de llamar a tus profesores teacher | mejora tu inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=cbSK7sb45gs',
      rawViewsTime: ['441 mil visualizações', 'há 3 anos'],
      views: 441000,
      timePosted: 1095,
      viewsPerDay: 402.73972602739724,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/SHhgqnEn6dw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTK-53tgzRLKeqfDKJch4uPRA0Og',
      titulo:
        'No digas "give me" o "i want" en inglés | cómo pedir servicios o favores en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=SHhgqnEn6dw',
      rawViewsTime: ['898 mil visualizações', 'há 3 anos'],
      views: 898000,
      timePosted: 1095,
      viewsPerDay: 820.0913242009133,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/qKJX1Zs_ssM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJiX994ogfY8oGV4M5jvf5Tkkz2Q',
      titulo:
        'Look, watch, y see en inglés ¿cual usar? | mirar y ver en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=qKJX1Zs_ssM',
      rawViewsTime: ['319 mil visualizações', 'há 3 anos'],
      views: 319000,
      timePosted: 1095,
      viewsPerDay: 291.324200913242,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/tp0S0Eqcecc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_rFtNXV0moSnIdnZmUnOYw8HskA',
      titulo:
        'Test divertido para aprender inglés! | mejora tu vocabulario en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=tp0S0Eqcecc',
      rawViewsTime: ['198 mil visualizações', 'há 3 anos'],
      views: 198000,
      timePosted: 1095,
      viewsPerDay: 180.82191780821918,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/DTVE-TCQuqc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvpnEmULQRDa-IBVr5Z86ZtBzNPQ',
      titulo:
        'Preguntas comunes en inglés que tienes que saber | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=DTVE-TCQuqc',
      rawViewsTime: ['719 mil visualizações', 'há 3 anos'],
      views: 719000,
      timePosted: 1095,
      viewsPerDay: 656.62100456621,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/9HK4OFwgcEI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVrSLtDPYJJIr0PyWGvKxmhWv3qA',
      titulo:
        '22 frases comunes y útiles en inglés con la palabra way | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=9HK4OFwgcEI',
      rawViewsTime: ['378 mil visualizações', 'há 3 anos'],
      views: 378000,
      timePosted: 1095,
      viewsPerDay: 345.2054794520548,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/fVVKE8mEo5U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCznpw_jSKt5fRnpS25n0Ge6eyHgA',
      titulo:
        'No lo digas mal! palabras con letras mudas | pronunciación en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=fVVKE8mEo5U',
      rawViewsTime: ['325 mil visualizações', 'há 3 anos'],
      views: 325000,
      timePosted: 1095,
      viewsPerDay: 296.80365296803654,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/cTg6ajijPgA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4NoovvcojFC2n3aJCtjgdKJapeg',
      titulo: 'Modismos comunes en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=cTg6ajijPgA',
      rawViewsTime: ['200 mil visualizações', 'há 3 anos'],
      views: 200000,
      timePosted: 1095,
      viewsPerDay: 182.64840182648402,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/mwUWt8B6SMA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyEOH18B8fmRwulEaFF6o0MV9MJQ',
      titulo:
        'Todo sobre los pronombres en inglés | inglés americano para iniciantes | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=mwUWt8B6SMA',
      rawViewsTime: ['263 mil visualizações', 'há 3 anos'],
      views: 263000,
      timePosted: 1095,
      viewsPerDay: 240.1826484018265,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/dIXlaFPGu_Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmEVpgCXx-hUnag1_G5uPdn_7cRg',
      titulo: '10 palabras difíciles de pronunciar en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=dIXlaFPGu_Y',
      rawViewsTime: ['257 mil visualizações', 'há 3 anos'],
      views: 257000,
      timePosted: 1095,
      viewsPerDay: 234.70319634703196,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/IR6uPBTqwx0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwteJN71aiuy4UJc9uwfqgKEFmvw',
      titulo:
        'Frases comunes en inglés | cómo expresar lo que sientes en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=IR6uPBTqwx0',
      rawViewsTime: ['629 mil visualizações', 'há 3 anos'],
      views: 629000,
      timePosted: 1095,
      viewsPerDay: 574.4292237442922,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/46IC9BTz4OU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4hNrTjhyWrZ4YKhvm2zjXlVAkrA',
      titulo:
        'Conversación casual en inglés | get en inglés | dinero en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=46IC9BTz4OU',
      rawViewsTime: ['597 mil visualizações', 'há 3 anos'],
      views: 597000,
      timePosted: 1095,
      viewsPerDay: 545.2054794520548,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/rRfKg2ZgHh0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9zTaQ6MVTXN-B8SJ_Bq4C7AxreQ',
      titulo:
        'Qué en inglés | como responder cuando no entiendes lo que te dicen en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=rRfKg2ZgHh0',
      rawViewsTime: ['807 mil visualizações', 'há 3 anos'],
      views: 807000,
      timePosted: 1095,
      viewsPerDay: 736.986301369863,
    },
    {
      thumbImg: '',
      titulo:
        '5 errores muy comunes en inglés | tips para mejorar tu inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=uysVpG6hlyo',
      rawViewsTime: ['589 mil visualizações', 'há 3 anos'],
      views: 589000,
      timePosted: 1095,
      viewsPerDay: 537.8995433789954,
    },
    {
      thumbImg: '',
      titulo:
        'Deja de decir very good! | mejora tu vocabulario en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=4uY9AMIp9PM',
      rawViewsTime: ['1,7 mi de visualizações', 'há 3 anos'],
      views: 1700000,
      timePosted: 1095,
      viewsPerDay: 1552.5114155251142,
    },
    {
      thumbImg: '',
      titulo:
        '10 plurales irregulares en inglés que confunden | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=3vVH5AG5lBg',
      rawViewsTime: ['265 mil visualizações', 'há 3 anos'],
      views: 265000,
      timePosted: 1095,
      viewsPerDay: 242.00913242009133,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/_8XQiR0wnpU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD87_Gv_kq-C0ol2_SZ0U1UHD4hTQ',
      titulo:
        'El verbo escuchar en inglés - curso de inglés online gratis | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=_8XQiR0wnpU',
      rawViewsTime: ['215 mil visualizações', 'há 3 anos'],
      views: 215000,
      timePosted: 1095,
      viewsPerDay: 196.34703196347033,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/t85fcvDOk-8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBy01CB87te8waUO0DPq3-ETv2mkw',
      titulo:
        '15 eslóganes populares en inglés ¿los puedes reconocer? | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=t85fcvDOk-8',
      rawViewsTime: ['179 mil visualizações', 'há 3 anos'],
      views: 179000,
      timePosted: 1095,
      viewsPerDay: 163.4703196347032,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/uYcVvRq_lRA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmbn7qu_5JlVpTqMZsLw5Ow8Zfvw',
      titulo: 'Aprende inglés con música | lady gaga | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=uYcVvRq_lRA',
      rawViewsTime: ['78 mil visualizações', 'há 3 anos'],
      views: 78000,
      timePosted: 1095,
      viewsPerDay: 71.23287671232876,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/TgUYtdbaXws/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbBMU1DEmqASqvgdo3Zvidej5vqQ',
      titulo: 'Aprende inglés fácil con este escándalo! | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=TgUYtdbaXws',
      rawViewsTime: ['135 mil visualizações', 'há 3 anos'],
      views: 135000,
      timePosted: 1095,
      viewsPerDay: 123.28767123287672,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/duSVTqZoNM8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyWzHyXR_SAww8xPtyeXmp9SwR8Q',
      titulo:
        '¿Cómo es el sistema educativo en estados unidos? | estudiar en estados unidos | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=duSVTqZoNM8',
      rawViewsTime: ['187 mil visualizações', 'há 3 anos'],
      views: 187000,
      timePosted: 1095,
      viewsPerDay: 170.77625570776254,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/mSh8WPvUa7A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhdZT_lxR7mbrRG3B1AHc2vlFgSA',
      titulo:
        'Inglés de la vida real | mejora tu vocabulario en inglés | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=mSh8WPvUa7A',
      rawViewsTime: ['130 mil visualizações', 'há 4 anos'],
      views: 130000,
      timePosted: 1460,
      viewsPerDay: 89.04109589041096,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/-6KGD-uuXqQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAr_ZW9RPcpC2bFbaPe6PPgHwjqfg',
      titulo: 'Inglés en la vida real | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=-6KGD-uuXqQ',
      rawViewsTime: ['279 mil visualizações', 'há 4 anos'],
      views: 279000,
      timePosted: 1460,
      viewsPerDay: 191.0958904109589,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/PpfAo0JOcmI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR871HWFZyvatBIEWAGscFKfS2nw',
      titulo: '18 palabras dificiles de pronunciar en inglés',
      link: 'https://www.youtube.com/watch?v=PpfAo0JOcmI',
      rawViewsTime: ['748 mil visualizações', 'há 4 anos'],
      views: 748000,
      timePosted: 1460,
      viewsPerDay: 512.3287671232877,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/-PmjqvdXCiU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkN8mWuFKuxaSK8wax8x-8HWEtqw',
      titulo:
        'Palabras que suenan igual en inglés pero tienen diferente significado (homófonos en inglés)',
      link: 'https://www.youtube.com/watch?v=-PmjqvdXCiU',
      rawViewsTime: ['449 mil visualizações', 'há 4 anos'],
      views: 449000,
      timePosted: 1460,
      viewsPerDay: 307.5342465753425,
    },
    {
      thumbImg:
        'https://i.ytimg.com/vi/L1au1JxMSaA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9wmdvmtHBNf83kjv4RcgMLoLhPA',
      titulo:
        'How to build your own lightboard / light board diy fast and easy | elisa valkyria',
      link: 'https://www.youtube.com/watch?v=L1au1JxMSaA',
      rawViewsTime: ['410 mil visualizações', 'há 4 anos'],
      views: 410000,
      timePosted: 1460,
      viewsPerDay: 280.82191780821915,
    },
  ],
]

const infoSorted = infos
  .reduce((acc, cur) => (cur?.[0] ? [...acc, ...cur] : [...acc, cur]), [])
  .sort((a, b) => b.viewsPerDay - a.viewsPerDay)
  .map(({ titulo, viewsPerDay, link }) => ({ titulo, viewsPerDay, link }))

console.log(infoSorted)
