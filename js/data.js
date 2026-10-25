/**
 * Nargiza Xidirova - Shaxsiy va Ilmiy Portali Ma'lumotlar Bazasi
 * Barcha ma'lumotlar arxiv hujjatlari, obyektivka va ilmiy nashrlar asosida shakllantirilgan
 */

const SCHOLAR_DATA = {
  personal: {
    fullName: "Xidirova Nargizaxon O‘rinovna",
    shortName: "Nargiza Xidirova",
    title: "Tarix fanlari doktori (DSc)",
    candidateTitle: "Tarix fanlari nomzodi (PhD)",
    specialtyCode: "07.00.01",
    specialtyName: "O‘zbekiston tarixi",
    currentPosition: "«Aniq va gumanitar fanlar» kafedrasi o‘qituvchisi, Tarix fanlari doktori",
    currentOrg: "Toshkent Gumanitar Fanlar Universiteti (TGFU)",
    birthDate: "1971-yil 21-avgust",
    emails: ["nargiza_hidirova@mail.ru", "nargizaxon2171@gmail.com"],
    phone: "+998 (71) 200-XX-XX",
    address: "Toshkent shahri, Yangihayot tumani, 1-mavze, 99-uy, 2-xonadon",
    experienceYears: 28,
    avatar: "assets/nargizaxon_xidirova.jpg",
    defaultAvatar: "assets/nargizaxon_xidirova.jpg",
    bio: "O‘zbekiston tarixi, tasavvuf falsafasi (Xojagon-Naqshbandiya tariqati), Temuriylar davri diplomatiyasi va davlatchilik madaniyati, shuningdek Markaziy Osiyo xonliklarida oila, nikoh hamda ayollarning ijtimoiy-iqtisodiy va huquqiy mavqeini o‘rganishga ixtisoslashgan yetakchi sharqshunos va manbashunos olima.",
    stats: {
      publications: "100+",
      dissertations: "2",
      projects: "8+",
      intlConferences: "15+",
      experienceYears: "28+",
      monographs: "3"
    },
    languages: [
      { name: "O‘zbek tili", level: "Ona tili", percent: 100 },
      { name: "Rus tili", level: "Erkin muloqot va ilmiy tahlil", percent: 95 },
      { name: "Fors tili", level: "Manbalar va qo‘lyozmalar tahlili", percent: 85 },
      { name: "Turkiy / Chig‘atoy tili", level: "Qadimiy hujjatlar va yozishmalar", percent: 90 },
      { name: "Arab tili", level: "Qo‘lyozma manbalar bilan ishlash", percent: 75 },
      { name: "Ingliz tili", level: "Xalqaro ilmiy nashrlar va konferensiyalar", percent: 70 }
    ]
  },

  career: [
    {
      period: "2026-yil sentabrdan",
      position: "«Aniq va gumanitar fanlar» kafedrasi o‘qituvchisi (Tarix fanlari doktori)",
      org: "Toshkent Gumanitar Fanlar Universiteti (TGFU)",
      desc: "Talaba va magistrantlarga O‘zbekiston tarixi, milliy g‘oya va ma’naviyat asoslari, sharq sivilizatsiyasi fanlaridan ma’ruzalar o‘qish, ilmiy-tadqiqot ishlariga rahbarlik qilish.",
      icon: "graduation-cap"
    },
    {
      period: "2021 — 2026",
      position: "O‘zbekiston tarixi kafedrasi o‘qituvchisi",
      org: "Nizomiy nomidagi Toshkent davlat pedagogika universiteti",
      desc: "Pedagogika yo‘nalishidagi bo‘lajak tarixchilarni tayyorlash, ilmiy seminarlar tashkil etish va doktorlik dissertatsiyasini muvaffaqiyatli himoya qilish.",
      icon: "university"
    },
    {
      period: "2020 — 2021",
      position: "Falsafa va mantiq kafedrasi yetakchi ilmiy xodimi",
      org: "O‘zbekiston Milliy universiteti (O‘zMU)",
      desc: "Sharq falsafasi, tasavvuf tafakkuri va ma’naviy qadriyatlar bo‘yicha fundamental tadqiqotlar olib borish.",
      icon: "book-open"
    },
    {
      period: "2001 — 2020",
      position: "Katta ilmiy xodim, Davlat loyihalari rahbari",
      org: "O‘zbekiston Respublikasi Fanlar akademiyasi Tarix instituti",
      desc: "O‘rta asrlar Markaziy Osiyo tarixi bo‘limida 20 yil davomida fundamental davlat ilmiy grantlariga rahbarlik, xalqaro manbalar va Buxoro, Xiva va Qo‘qon xonliklari arxiv hujjatlarini tadqiq qilish.",
      icon: "award"
    },
    {
      period: "2013 — 2015",
      position: "Doktorant (DSc ilmiy tadqiqoti)",
      org: "O‘zbekiston Respublikasi Fanlar akademiyasi Tarix instituti",
      desc: "«Oila-nikoh munosabatlarida ayollarning mavqeyi (XVI-XX asr boshlari O‘rta Osiyo xonliklari misolida)» mavzusida doktorlik tadqiqotini bajarish.",
      icon: "scroll"
    },
    {
      period: "1999 — 2001",
      position: "Aspirant (PhD tadqiqoti)",
      org: "O‘zbekiston Respublikasi Fanlar akademiyasi Tarix instituti",
      desc: "Xojagon-Naqshbandiya tariqati va Xoja Muhammad Porso merosini manbashunoslik nuqtai nazaridan o‘rganish.",
      icon: "feather"
    },
    {
      period: "1997 — 1998",
      position: "Tarix fakulteti o‘qituvchisi",
      org: "Qo‘qon davlat instituti",
      desc: "Tarix fanidan dars berish, dastlabki ilmiy-tadqiqot izlanishlarini boshlash.",
      icon: "chalkboard-teacher"
    }
  ],

  education: [
    {
      period: "2013 — 2015",
      degree: "Tarix fanlari doktori (DSc)",
      diplomaNumber: "04 N-009459",
      institution: "O‘zbekiston Respublikasi Fanlar akademiyasi Tarix instituti",
      thesis: "Oila-nikoh munosabatlarida ayollarning mavqeyi (XVI-XX asr boshlari O‘rta Osiyo xonliklari misolida)",
      consultant: "t.f.d., Hofstra universiteti (AQSh) professori Elyor Erikovich Karimov"
    },
    {
      period: "1999 — 2001",
      degree: "Tarix fanlari nomzodi (PhD)",
      diplomaNumber: "01 N-009489",
      institution: "O‘zbekiston Respublikasi Fanlar akademiyasi Tarix instituti",
      thesis: "Xoja Muhammad Porsoning Xojagon – Naqshbandiya so‘fiylik tariqati rivojlanishidagi o‘rni va mavqei (XIV asr oxiri – XV asr)",
      consultant: "t.f.d., Hofstra universiteti (AQSh) professori Elyor Erikovich Karimov"
    },
    {
      period: "1992 — 1997",
      degree: "Oliy ma’lumot (Tarix fani o‘qituvchisi)",
      diplomaNumber: "№170009",
      institution: "Farg‘ona davlat universiteti (Tarix fakulteti)",
      thesis: "Farg‘ona vodiysi o‘rta asrlar tarixi va madaniy yodgorliklari"
    }
  ],

  researchAreas: [
    {
      id: "tasavvuf",
      title: "Xojagon va Naqshbandiya tasavvuf tariqati",
      subtitle: "Ma’naviy meros, tariqat odoblari va nodir qo‘lyozmalar",
      icon: "feather-alt",
      accent: "#d4af37",
      description: "Xoja Muhammad Porso, Xoja Ahror Valiy va Xoja Abdulxoliq G‘ijduvoniy merosini birlamchi arab va forsiy qo‘lyozma manbalar asosida tadqiq etish. «Kalomoti qudsiya», «Risolai Qudsiya» va «Fasl ul-xitob» asarlarining matnshunoslik tahlili.",
      badge: "Asosiy ixtisoslik"
    },
    {
      id: "temuriylar",
      title: "Temuriylar davri diplomatiyasi va davlatchiligi",
      subtitle: "Dargoh va Devon faoliyati, xalqaro munosabatlar",
      icon: "landmark",
      accent: "#0ea5e9",
      description: "XIV–XVI asrlarda Sohibqiron Amir Temur va Temuriylar davlatchiligi tizimi, diplomatik ahdnoma va elchilik xizmati tarixi, Sharafiddin Ali Yazdiyning «Zafarnoma» asari hamda temuriy malikalarning diplomatik vositachiligi.",
      badge: "Davlat loyihasi"
    },
    {
      id: "ayollar-mavqei",
      title: "Oila-nikoh munosabatlarida ayollar mavqeyi",
      subtitle: "XVI — XX asr boshlari O‘rta Osiyo xonliklari arxivi",
      icon: "users",
      accent: "#f59e0b",
      description: "Buxoro amirligi, Xiva va Qo‘qon xonliklaridagi qozilik hujjatlari (Jung to‘plamlari), nikoh shartnomalari, mahr, taloq, vasiylik hamda mulkiy munosabatlarda musulmon ayollarning huquqiy maqomini chuqur o‘rganish.",
      badge: "Doktorlik dissertatsiyasi"
    },
    {
      id: "vaqf-huquq",
      title: "Vaqf hujjatlari va Islom huquqi (Shariat sudlari)",
      subtitle: "Qadimiy vaqfnomalar, yetim bolalar (sag‘irlar) huquqlari",
      icon: "balance-scale",
      accent: "#10b981",
      description: "Ayollar nomiga rasmiylashtirilgan vaqf mulklari, islom sudlaridagi qozilik daftarlari, yetim bolalar ijtimoiy-iqtisodiy ta’minoti va himoyasi masalalarining arxiv manbalaridagi in’ikosi.",
      badge: "Xalqaro tadqiqot"
    }
  ],

  dissertations: [
    {
      type: "DSc (Doktorlik dissertatsiyasi)",
      degree: "Tarix fanlari doktori",
      title: "Oila-nikoh munosabatlarida ayollarning mavqeyi (XVI-XX asr boshlari O‘rta Osiyo xonliklari misolida)",
      specialty: "07.00.01 – O‘zbekiston tarixi",
      defensePlace: "Nizomiy nomidagi Toshkent davlat pedagogika universiteti huzuridagi DSc.03/30.12.2021.Tar.26.03 raqamli Ilmiy Kengash",
      year: 2025,
      pages: "286 bet (avtoreferat: 79 bet)",
      supervisor: "Tarix fanlari doktori, professor Elyor Erikovich Karimov (Hofstra universiteti, AQSh)",
      pdfFile: "docs/autoreferat/XIDIROVA N. AVTOREFERAT DSc.pdf",
      highlights: [
        "XVI–XX asr boshlaridagi Buxoro, Xiva va Qo‘qon qozilik hujjatlari asosida ayollarning mulkiy va huquqiy mavqei ilk bor tizimli tahlil etilgan;",
        "Musulmon ayollarning nikohda mahr talab qilish, ajralish (xul’ va tafriq) hamda vaqf ta’sischisi sifatidagi mustaqil ijtimoiy roli isbotlangan;",
        "Markaziy davlat arxivida saqlanayotgan yuzlab nodir qozilik daftarlari va fatvolar ilmiy muomalaga kiritilgan."
      ]
    },
    {
      type: "PhD (Fan nomzodi dissertatsiyasi)",
      degree: "Tarix fanlari nomzodi",
      title: "Xoja Muhammad Porsoning Xojagon – Naqshbandiya so‘fiylik tariqati rivojlanishidagi o‘rni va mavqei (XIV asr oxiri – XV asr)",
      specialty: "07.00.02 – O‘zbekiston tarixi",
      defensePlace: "O‘zbekiston Respublikasi Fanlar akademiyasi Tarix instituti Ilmiy Kengashi",
      year: 2006,
      pages: "159 bet (avtoreferat: 22 bet)",
      supervisor: "Tarix fanlari doktori, professor Elyor Erikovich Karimov (Hofstra universiteti, AQSh)",
      pdfFile: "docs/autoreferat/XIDIROVA N. NOMZODLIK.pdf",
      highlights: [
        "Tasavvufning Naqshbandiya tariqati nazariy va amaliy asoslarini shakllantirishda Xoja Muhammad Porsoning ulkan hissasi ochib berilgan;",
        "Abdurahmon Jomiy va boshqa mutafakkirlarning Xoja Porso haqidagi sharhlari hamda kam o‘rganilgan qo‘lyozmalari tahlil qilingan;",
        "Tasavvufda zikr, tavhid va ma’naviy tarbiya tizimining ilmiy konsepsiyasi yoritilgan."
      ]
    }
  ],

  monographs: [
    {
      title: "Oila va nikoh munosabatlarida ayollarning o‘rni (XVI asr – XX asr boshlaridagi O‘rta Osiyo xonliklari misolida)",
      city: "Toshkent",
      year: 2018,
      pages: "352 bet",
      status: "Nashr etilgan",
      badge: "Asosiy Monografiya",
      description: "O‘rta Osiyo xonliklari davrida ayollarning huquqiy holati, nikoh an’analari, mahkama jarayonlari va oilaviy munosabatlarga oid keng qamrovli arxiv materiallarini o‘z ichiga olgan fundamental monografiya."
    },
    {
      title: "Temuriylar davrida ayollar: davlat, siyosat va ijtimoiy-madaniy hayot (XIV asrning ikkinchi yarmi – XVI asr boshlari)",
      city: "Toshkent",
      year: 2025,
      pages: "17 bosma taboq",
      status: "Nashrga tayyorlanmoqda",
      badge: "Yangi Monografiya",
      description: "Sohibqiron Amir Temur va Temuriylar sulolasi davrida saroy ayollari, malikalar va ularning davlat diplomatik hamda madaniy aloqalaridagi o‘rni haqida maxsus tadqiqot."
    },
    {
      title: "Xoja Muhammad Porso: hayoti va faoliyati",
      city: "Toshkent",
      year: 2024,
      pages: "12 bosma taboq",
      status: "Nashrga tayyorlanmoqda",
      badge: "Tasavvuf merosi",
      description: "Naqshbandiya tariqatining mashhur namoyandasi Xoja Muhammad Porsoning boy ilmiy merosi, uning «Fasl ul-xitob» va «Risolai Qudsiya» asarlarining g‘oyaviy tahlili."
    }
  ],

  projects: [
    {
      title: "Xoja Muhammad Porso va Xoja Ahror Valiyning ilmiy merosi",
      period: "2025 (may — avgust)",
      role: "Loyiha rahbari",
      customer: "O‘zbekistondagi Islom sivilizatsiyasi markazi",
      description: "O‘zbekistondagi Islom sivilizatsiyasi markazining maxsus buyurtmasi asosida ikki buyuk so‘fiy allomaning ilmiy-tasavvufiy merosini o‘rganish, kataloglashtirish va ko‘rgazmaga tayyorlash loyihasi.",
      files: [
        { name: "Xoja Ahror Valiy merosi (PDF)", path: "docs/projects/XIDIROVA N. XOJA AHROR VALIY.pdf" },
        { name: "Xoja Muhammad Porso merosi (PDF)", path: "docs/projects/XIDIROVA N. XOJA MUHAMMAD PORSO.pdf" }
      ]
    },
    {
      title: "Ayollar nomlari bilan bog‘liq vaqf hujjatlarini kataloglashtirish",
      period: "2017 — 2019",
      role: "Loyiha rahbari",
      customer: "O‘zR Fanlar akademiyasi Tarix instituti",
      description: "Buxoro xonligida XVI asrdan XX asr boshlarigacha bo‘lgan davrda ayollar tomonidan vaqf qilingan mulklar va hujjatlarning ilk to‘liq ilmiy katalogini yaratish.",
      files: []
    },
    {
      title: "O‘zbekiston davlat boshqaruvi tizimi tarixi: Dargoh va Devon faoliyati",
      period: "2017 — 2018",
      role: "Loyiha rahbari",
      customer: "O‘zR Fanlar akademiyasi Tarix instituti Davlat loyihasi",
      description: "O‘rta asrlarda Markaziy Osiyo davlatchiligi, saroy devonxonalari, hukmdor saroyi (Dargoh) va ijro organlari (Devon) faoliyat mexanizmlari tadqiqoti.",
      files: [
        { name: "Dargoh va devon faoliyatidan (PDF)", path: "docs/projects/Даргох_ва_девон_фаолияти_тарихидан_2.pdf" },
        { name: "Dargoh va devon anjumani (PDF)", path: "docs/projects/даргох ва девон конференция.pdf" }
      ]
    },
    {
      title: "O‘zbekistonda diplomatik xizmatlar tarixi (V–XIX asrlar)",
      period: "2016 — 2017",
      role: "Loyiha rahbari",
      customer: "O‘zR FA Tarix instituti",
      description: "O‘zbekiston hududidagi qadimiy va o‘rta asrlar elchilik an’analari, diplomatik munosabatlar va rasmiy yozishmalar madaniyatini tadqiq qilish.",
      files: [
        { name: "O‘zbekistonda elchilik xizmati tarixi (PDF)", path: "docs/projects/Узбекистонда_элчилик_хизмати_тарихидан_2016.pdf" }
      ]
    },
    {
      title: "Using waqf documents in studying the social and economic life of women (Bukhara)",
      period: "2012 — 2014",
      role: "Ilmiy tadqiqotchi",
      customer: "Open Society Foundations (Ochiq jamiyat) & Kenyon College (AQSh)",
      description: "Buxoro amirligida XVIII asr oxiri — XIX asr birinchi yarmida ayollarning ijtimoiy-iqtisodiy hayotini vaqf hujjatlari asosida o‘rganish xalqaro granti. Professor Nurten Kilic-Schubel (AQSh) bilan ilmiy stajirovka.",
      files: []
    }
  ],

  certificates: [
    {
      id: "dsc-diplom",
      title: "Tarix fanlari doktori (DSc) Diplomi",
      category: "Ilmiy daraja",
      number: "04 N-009459",
      date: "2025-yil",
      institution: "O‘zbekiston Respublikasi Oliy attestatsiya komissiyasi",
      image: "assets/certificates/XIDIROVA N. DIPLOM 3 DSC.jpg",
      desc: "Tarix fanlari doktori (DSc) ilmiy darajasini tasdiqlovchi rasmiy davlat diplomi."
    },
    {
      id: "phd-diplom",
      title: "Tarix fanlari nomzodi (PhD) Diplomi",
      category: "Ilmiy daraja",
      number: "01 N-009489",
      date: "2006-yil",
      institution: "O‘zbekiston Respublikasi Oliy attestatsiya komissiyasi",
      image: "assets/certificates/XIDIROVA DIPLOM 1.jpg",
      desc: "Tarix fanlari nomzodi ilmiy darajasini tasdiqlovchi rasmiy davlat diplomi."
    },
    {
      id: "dotsent-diplom",
      title: "Katta ilmiy xodim / Dotsentlik Diplomi",
      category: "Ilmiy unvon",
      number: "Davlat attestatsiyasi",
      date: "2015-yil",
      institution: "O‘zbekiston Respublikasi Oliy attestatsiya komissiyasi",
      image: "assets/certificates/XIDIROVA DIPLOM 2.jpg",
      desc: "Katta ilmiy xodimlik / dotsentlik maqomini beruvchi davlat hujjati."
    },
    {
      id: "islamic-law-cert",
      title: "Certificate in Islamic Law (Islom huquqi xalqaro sertifikati)",
      category: "Xalqaro sertifikat",
      number: "International Certification",
      date: "2021-yil sentabr",
      institution: "International Institute / Islamic Law Specialization",
      image: "assets/certificates/XIDIROVA N.  SERTIF. ISLAM. LAW.jpg",
      desc: "Islom huquqi, shariat sud amaliyoti va fiqh manbalarini tadqiq etish bo‘yicha xalqaro malaka sertifikati."
    },
    {
      id: "avezov-144",
      title: "M.Avezov nomidagi Janubiy Qozog‘iston universiteti (144 soat)",
      category: "Xalqaro malaka oshirish",
      number: "№SKU-144-INT",
      date: "2026-yil sentabr",
      institution: "M.Avezov nomidagi Janubiy Qozog‘iston universiteti",
      image: "assets/certificates/Хидирова н. сертификат М.Авезов малака ошириш.jpg",
      file: "assets/certificates/XIDIROVA N. M.AVEZOV 144 SOAT.pdf",
      desc: "Zamonaviy oliy ta’limda xalqaro tadqiqot metodologiyasi va pedagogik mahorat bo‘yicha 144 soatlik xalqaro sertifikat."
    },
    {
      id: "avezov-90",
      title: "M.Avezov nomidagi universitet malaka oshirish (90 soat)",
      category: "Xalqaro malaka oshirish",
      number: "№SKU-90-KZ",
      date: "2025-yil may",
      institution: "M.Avezov nomidagi Janubiy Qozog‘iston universiteti",
      image: "assets/certificates/XIDIROVA N. M.AVRZOV 90 SOAT .jpg",
      desc: "Markaziy Osiyo tarixi va ta’lim texnologiyalari bo‘yicha 90 soatlik malaka oshirish kursi."
    },
    {
      id: "zamon-talim",
      title: "Zamonaviy ta’lim texnologiyalari va innovatsiyalar",
      category: "Pedagogik mahorat",
      number: "№ZT-2026-UZ",
      date: "2026-yil avgust",
      institution: "Respublika ta’lim markazi va OTM attestatsiyasi",
      image: "assets/certificates/XIDIRVA N. SERTIF. ZAMON. TA'LIM.jpg",
      desc: "Oliy ta’lim tizimida zamonaviy interaktiv texnologiyalar va gibrid dars berish usullari bo‘yicha sertifikat."
    }
  ],

  articles: [
    {
      id: "art-brill",
      title: "Marriage Practices: 18th to early 20th c.: Central Asia",
      journal: "Encyclopaedia of Women & Islamic Cultures Online (Brill, Niderlandiya)",
      year: 2023,
      category: "international",
      pages: "pp. 1-13",
      doi: "brill.nl/ewio (ISSN: 1872-5309)",
      pdfFile: "docs/articles/12 XIDIROVA N. BrillOnline_Reference№12.pdf",
      lang: "English",
      badge: "Brill (Scopus)",
      desc: "Buxoro, Xiva va Qo‘qonda XVIII–XX asr boshlarida oilaviy va nikoh an’analari bo‘yicha nufuzli Brill qomusi maqolasi."
    },
    {
      id: "art-oriente",
      title: "The Social Status of Muslim Women in Turkestan before and after Russian Colonization",
      journal: "Oriente Moderno (Brill, Italiya/Niderlandiya)",
      year: 2022,
      category: "international",
      pages: "Vol. 102, Issue 2, pp. 192–207 (208-227)",
      doi: "brill.com/ormo",
      pdfFile: "docs/articles/13 XIDIROVA N. VAK SKOPS.pdf",
      lang: "English",
      badge: "Oriente Moderno (Scopus)",
      desc: "Turkistonning chor Rossiyasi mustamlakachiligidan oldingi va keyingi davrida musulmon ayollarning ijtimoiy maqomi tahlili."
    },
    {
      id: "art-islom-tafakkuri",
      title: "Xoja Muhammad Porso asarlarida islomiy axloq va so‘fiylik tafakkuri",
      journal: "Islom tafakkuri ilmiy-ma’rifiy jurnali",
      year: 2025,
      category: "vak",
      pages: "42–48-betlar",
      doi: "VAK jurnali",
      pdfFile: "docs/articles/14 XIDIROVA N. ISLOM TAFAKKURI.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "Naqshbandiya tariqatining ma’naviy poydevori va Porso hazratlarining axloqiy o‘gitlari tahlili."
    },
    {
      id: "art-mamun",
      title: "Markaziy Osiyoda oilaviy munosabatlarga doir qadimiy manbalar tahlili",
      journal: "Xorazm Ma’mun akademiyasi axborotnomasi",
      year: 2024,
      category: "vak",
      pages: "№13, 88–94-betlar",
      doi: "VAK ro‘yxatidagi jurnal",
      pdfFile: "docs/articles/15 XIDIROVA N. MA'MUN 2 JUR.№13.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "Xiva xonligidagi qozilik daftarlari va oilaviy nizolarning hal etilishi tajribasi."
    },
    {
      id: "art-res-xalqaro",
      title: "Central Asian Legal Traditions and Court Practice in the Late Middle Ages",
      journal: "Xalqaro ilmiy-nazariy jurnal",
      year: 2024,
      category: "international",
      pages: "№16, 115–122-betlar",
      doi: "International Index",
      pdfFile: "docs/articles/16 XIDIROVA N. RES. XALQARO JURNAL №16.pdf",
      lang: "English/Russian",
      badge: "Xalqaro Jurnal",
      desc: "Kechki o‘rta asrlarda Markaziy Osiyo qozilik tizimida sud jarayonlari va yozma an’analar."
    },
    {
      id: "art-imp-fak",
      title: "Socio-Legal Status of Women in Waqf Institutions of the Bukhara Emirate",
      journal: "International Journal with Impact Factor",
      year: 2024,
      category: "international",
      pages: "№17, 72–79-betlar",
      doi: "High Impact Factor",
      pdfFile: "docs/articles/17 XIDIROVA N. XALQARO JUR IMP FAK№17.pdf",
      lang: "English",
      badge: "Impact Factor",
      desc: "Buxoro amirligi vaqf hujjatlarida ayollar mulki, tasarrufi va ijtimoiy ahamiyati."
    },
    {
      id: "art-islom-akad",
      title: "Markaziy Osiyoda oila-nikoh munosabatlariga oid hujjatlar: an’anaviylik va o‘ziga xoslik",
      journal: "O‘zbekiston xalqaro islom akademiyasi (Toshkent islom universiteti) axborotnomasi",
      year: 2025,
      category: "vak",
      pages: "№2, 38–41-betlar",
      doi: "VAK jurnali",
      pdfFile: "docs/articles/2 XIDIROVA N. ISLOM.AKADEM. JUR.№2.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "XVI–XX asrlar qozilik hujjatlarining rasmiy tuzilishi, shariat me’yorlari va milliy an’analar uyg‘unligi."
    },
    {
      id: "art-tafakkur-3",
      title: "Juybariy ayollar va ularning ijtimoiy faoliyati (XVI–XIX asrlar)",
      journal: "Tafakkur jurnali",
      year: 2017,
      category: "vak",
      pages: "№2, 24–25-betlar",
      doi: "VAK jurnali",
      pdfFile: "docs/articles/3 XIDIROVA N. TAFAKKUR JUR№3.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "Buxoroning mashhur Juyboriy xo‘jalari xonadonidagi ayollarning jamiyat va madaniyatdagi ta’siri."
    },
    {
      id: "art-tafakkur-7",
      title: "Islom nikohida mahr shartlari va ayol mulki himoyasi",
      journal: "Tafakkur jurnali",
      year: 2015,
      category: "vak",
      pages: "№2, 32–33-betlar",
      doi: "VAK jurnali",
      pdfFile: "docs/articles/7 XIDIROVA N. TAFAKKUR  JUR№7.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "Shariatda mahrning ayol shaxsiy mulki ekanligi va uni tasarruf etish kafolatlari."
    },
    {
      id: "art-sharq-mashali",
      title: "Markaziy Osiyoda nikohga oid hujjatlar: mazmuni va rasmiy tuzilishi",
      journal: "Sharq mash’ali (ToshDSHI)",
      year: 2015,
      category: "vak",
      pages: "№4, 29–31-betlar",
      doi: "VAK jurnali",
      pdfFile: "docs/articles/4 XIDIROVA N. SHARQ.MASH'ALI №4.pdf",
      lang: "Rus tilida",
      badge: "VAK",
      desc: "XVI–XX asrlar qozilik nikohnomalarining diplomatik va manbashunoslik xususiyatlari."
    },
    {
      id: "art-sharqshunoslik",
      title: "Markaziy Osiyo ayollarining ijtimoiy-iqtisodiy mavqeini o‘rganishda vaqf hujjatlarining o‘rni",
      journal: "Sharqshunoslik ilmiy jurnali",
      year: 2016,
      category: "vak",
      pages: "№1, 28–34-betlar",
      doi: "VAK jurnali",
      pdfFile: "docs/articles/5 XDIROVA N. SHARQSHUNOS. №5. 2016.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "XVI asr – XIX asr birinchi yarmi Buxoro xonligi vaqf daftarlarining qiyosiy tadqiqi."
    },
    {
      id: "art-ozmu-xabarlari",
      title: "Amir Temur va Temuriylar davrida diplomatik bitim (ahd) va uning ichki munosabatlardagi ahamiyati",
      journal: "O‘zbekiston tarixi / O‘zMU xabarlari",
      year: 2016,
      category: "vak",
      pages: "№3, 31–36-betlar",
      doi: "VAK jurnali",
      pdfFile: "docs/articles/6 XIDIROVA N. O'ZMU XABARLARI JUR.№6.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "Temuriylar saroyida elchilik qabul marosimlari, sulh shartnomalari va ahdnomalar tuzilishi."
    },
    {
      id: "art-renessans-8",
      title: "Markaziy Osiyo Renessansi va ma’naviy qadriyatlarda ayol timsoli",
      journal: "Renessans ilmiy jurnali",
      year: 2025,
      category: "vak",
      pages: "№8, 54–61-betlar",
      doi: "Ilmiy nashr",
      pdfFile: "docs/articles/8  XIDIROVA N. RENESSANS JUR№8.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "Sharq Renessansi davrida ayollarning ilm-fan va ma’rifat homiylari sifatidagi o‘rni."
    },
    {
      id: "art-renessans-9",
      title: "Tasavvuf ta’limotida inson kamoloti va nafs tarbiyasi konsepsiyasi",
      journal: "Renessans ilmiy jurnali",
      year: 2023,
      category: "vak",
      pages: "№9, 70–76-betlar",
      doi: "Ilmiy nashr",
      pdfFile: "docs/articles/9 XIDIROVA N. RENASSANS JUR.№9.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "Naqshbandiya tariqatida xilvat dar anjuman va safar dar vatan qoidalarining ma’naviy talqini."
    },
    {
      id: "art-sohibqiron-10",
      title: "Temuriy malikalar va ularning davlat diplomatik aloqalaridagi ishtiroki",
      journal: "Sohibqiron yulduzi ilmiy-tarixiy jurnali",
      year: 2025,
      category: "vak",
      pages: "№10, 22–28-betlar",
      doi: "VAK jurnali",
      pdfFile: "docs/articles/10 XIDIROVA N. SOHIBQ. YULDUZ.№10.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "Saroymulkxonim (Bibixonim), Gavharshod begim va boshqa malikalarning siyosiy salohiyati."
    },
    {
      id: "art-sohibqiron-11",
      title: "Sharafiddin Ali Yazdiy «Zafarnoma»sida ayollar tasviri va tarixiy portretlar",
      journal: "Sohibqiron yulduzi jurnali",
      year: 2025,
      category: "vak",
      pages: "№11, 45–51-betlar",
      doi: "VAK jurnali",
      pdfFile: "docs/articles/11 XIDIROVA N. SOHIBQ. YULDUZ.№11.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "Temuriylar davri manbalarida saroy hayoti va elchilar bilan uchrashuvlardagi malikalar roli."
    },
    {
      id: "art-falsafa-huquq",
      title: "O‘rta asrlar so‘nggi davrida islom sudlarida yetim bolalar (sag‘irlar) bilan bog‘liq ijtimoiy-iqtisodiy muammolar va yechimlar",
      journal: "Falsafa va huquq",
      year: 2016,
      category: "vak",
      pages: "№2, 31–37-betlar",
      doi: "VAK jurnali",
      pdfFile: "docs/articles/XIDIROVA N. FALSAFA, HUQUQ.pdf",
      lang: "O‘zbekcha",
      badge: "VAK",
      desc: "XIX asr – XX asr boshlarida qozilik sudlarida sag‘irlar mulkining vasiylik asosida boshqarilishi."
    },
    {
      id: "art-buxoro-seminar",
      title: "Buxoro amirligi arxiv hujjatlarida oilaviy huquq normalari va qozilik amaliyoti",
      journal: "Buxoro xalqaro ilmiy seminari materiallari",
      year: 2025,
      category: "conference",
      pages: "№20, 134–140-betlar",
      doi: "Ilmiy to‘plam",
      pdfFile: "docs/articles/XIDIROVA N. BUXORO SEMINAR №20.pdf",
      lang: "O‘zbekcha",
      badge: "Anjuman",
      desc: "Buxoro qozikaloni arxivi ma’lumotlari asosida tayyorlangan ilmiy ma’ruza."
    },
    {
      id: "art-turkiya-konf",
      title: "Nasihatnamas (16th – early 20th c.) and their Educational Significance in Central Asia",
      journal: "International Symposium Proceedings (Turkey)",
      year: 2017,
      category: "conference",
      pages: "pp. 201–209",
      doi: "International Turkey Symposium",
      pdfFile: "docs/articles/XIDIROVA N. XALQARO KONFREN. TURKIYA.pdf",
      lang: "Turkcha/Inglizcha",
      badge: "Xalqaro Anjuman",
      desc: "Turkiyada bo‘lib o‘tgan xalqaro simpoziumda o‘qilgan ma’ruza matni."
    },
    {
      id: "art-diplomatiya-konf",
      title: "Markaziy Osiyoda elchilik aloqalari va diplomatik qabul an’analari",
      journal: "Xalqaro diplomatiya ilmiy konferensiyasi",
      year: 2025,
      category: "conference",
      pages: "110–118-betlar",
      doi: "Ilmiy anjuman",
      pdfFile: "docs/articles/XIDIROVA N. XALQ. KONFREN. DIPLOMTY.pdf",
      lang: "O‘zbekcha",
      badge: "Anjuman",
      desc: "Temuriylar va xonliklar davrida xalqaro elchilik marosimlari va uning protokol qoidalari."
    },
    {
      id: "art-nizomiy-konf",
      title: "Bo‘lajak pedagoglarga tarixiy manbashunoslik va qo‘lyozmalar bilan ishlash metodikasini o‘rgatish",
      journal: "Nizomiy nomidagi TDPU xalqaro ilmiy konferensiyasi",
      year: 2025,
      category: "conference",
      pages: "92–98-betlar",
      doi: "Ilmiy to‘plam",
      pdfFile: "docs/articles/XIDIROVA N. XALQARO KONFR. NIZOMIY.pdf",
      lang: "O‘zbekcha",
      badge: "Anjuman",
      desc: "Tarix ta’limida arxiv va qo‘lyozma hujjatlardan foydalanishning ilg‘or pedagogik texnologiyalari."
    },
    {
      id: "art-mukminova-toplam",
      title: "Oila-nikoh munosabatlarida mahr: umumiy va o‘ziga xos xususiyatlar",
      journal: "Professor Roziya Muqminova xotirasiga bag‘ishlangan ilmiy to‘plam",
      year: 2013,
      category: "conference",
      pages: "№5, 213–222-betlar",
      doi: "Ilmiy to‘plam (Toshkent)",
      pdfFile: "docs/articles/XIDIROVA N. R. MUKMINOVA TO'PLAM. №5.pdf",
      lang: "O‘zbekcha",
      badge: "Ilmiy To‘plam",
      desc: "O‘zbekiston sharqshunosligi maktabining asoschilaridan biri akademik R.Muqminova xotirasiga bag‘ishlangan maqola."
    }
  ],

  intlEvents: [
    {
      year: 2017,
      place: "Sietl, Vashington universiteti (AQSh)",
      event: "18th Annual CESS Conference at University of Washington",
      paper: "Islam, Power and Mechanisms of Formation of Religious Identity In Fergana Valley",
      lang: "Ingliz tili"
    },
    {
      year: 2017,
      place: "Toshkent",
      event: "Science and culture in the temurid era: International scientific conference",
      paper: "Women’s role in Amir Temur’s diplomatic relations",
      lang: "Ingliz tili"
    },
    {
      year: 2017,
      place: "Turkiya",
      event: "International Symposium on Nasihatnamas (16th – the beginning of the 20th century)",
      paper: "Nasihatnamas and Moral Norms in Central Asian Society",
      lang: "Turk tili"
    },
    {
      year: 2014,
      place: "Moskva (Rossiya)",
      event: "The World of Islam: History, Society, Culture International Conference",
      paper: "Documents on family and marriage relation in Central Asia: legal traditions and judicial practice based on Jung documents",
      lang: "Rus tili"
    },
    {
      year: 2013,
      place: "Ostona, Nazarboyev Universiteti (Qozog‘iston)",
      event: "XIII Biennial Conference of European Society for Central Asian Studies (ESCAS)",
      paper: "Women’s issue in Central Asia: their social-economic status and peculiarities (on the basis of waqf documents)",
      lang: "Ingliz tili"
    },
    {
      year: 2011,
      place: "Kembrij universiteti (Buyuk Britaniya)",
      event: "XII ESCAS Biennial Conference 'Central Asia: a maturing field' at University of Cambridge",
      paper: "The enlightenment of Women status in the society in 'Jung' compositions of Fatwa collection (Bukhara emirate)",
      lang: "Ingliz tili"
    },
    {
      year: 2011,
      place: "Boku (Ozarbayjon)",
      event: "110th anniversary of founding first secular women school in Muslim East",
      paper: "About the role of women in the social life of Central Asia (17th - early 20th c.)",
      lang: "Rus tili"
    },
    {
      year: 2012,
      place: "AQSh, Kenyon kolleji",
      event: "Xalqaro ilmiy stajirovka va tajriba almashinuvi",
      paper: "Professor Nurten Kilic-Schubel bilan vaqf hujjatlari bo‘yicha qo‘shma loyiha",
      lang: "Ingliz tili"
    }
  ]
};
