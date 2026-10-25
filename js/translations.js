/**
 * XIDIROVA NARGIZAXON O'RINOVNA PORTALI - KO'P TILLILIK LUG'ATI (I18N)
 * Tillar: O'zbekcha (uz - default), Ruscha (ru), Inglizcha (en)
 */

const TRANSLATIONS = {
  uz: {
    // Nav
    nav_home: "Asosiy",
    nav_research: "Ilmiy faoliyat",
    nav_pillars: "Tadqiqot yo‘nalishlari",
    nav_dissertations: "Dissertatsiyalar (DSc & PhD)",
    nav_monographs: "Monografiyalar",
    nav_projects: "Ilmiy loyihalar",
    nav_articles: "Maqolalar kutubxonasi",
    nav_documents: "Hujjatlar & Manbalar",
    nav_certificates: "Diplom va sertifikatlar",
    nav_biography: "Tarjimai hol & Tillar",
    nav_contact: "Kafedra & Qabul",
    nav_cv_btn: "Obyektivka",

    // Hero
    hero_uni: "Toshkent Gumanitar Fanlar Universiteti (TGFU)",
    hero_fname: "Xidirova",
    hero_lname: "Nargizaxon",
    hero_mname: "O‘rinovna",
    hero_degree: "Tarix fanlari doktori (DSc)",
    hero_role: "Sharqshunos & Manbashunos olima",
    hero_bio: "O‘zbekiston tarixi, tasavvuf falsafasi (Xojagon-Naqshbandiya tariqati), Temuriylar davlatchilik madaniyati hamda Markaziy Osiyo xonliklarida oila, nikoh va ayollarning ijtimoiy-huquqiy maqomini tadqiq etuvchi yetakchi olima.",
    hero_btn_articles: "Ilmiy maqolalar (PDF)",
    hero_btn_dissertation: "Doktorlik dissertatsiyasi",
    hero_btn_contact: "Kafedra & Qabul",
    science_ticker_badge: "Tarix & Manbashunoslik",
    science_ticker_title: "Tasavvuf Falsafasi & Temuriylar Davri Arxivlari",
    stat_pubs: "Ilmiy nashrlar",
    stat_diss: "Dissertatsiya (PhD & DSc)",
    stat_projects: "Davlat & Xalqaro loyihalar",
    stat_exp: "Yillik ilmiy staj",

    // Portrait card
    badge_dsc: "DSc Olima",
    badge_dsc_sub: "07.00.01 – O‘zbekiston tarixi",
    badge_dept: "TGFU Kafedrasi",
    badge_dept_sub: "Aniq va gumanitar fanlar",
    upload_title: "Ustoz suratini joylash / almashtirish",
    upload_sub: "Faylni bosing yoki bu yerga sudrab tashlang (JPG, PNG)",
    btn_reset_photo: "Asliga qaytarish",

    // About / Bio
    about_tag: "Tarjimai hol",
    about_title: "Sharqshunoslik va Tarix Ilmiga Bag‘ishlangan Umr",
    about_desc: "Xidirova Nargizaxon O‘rinovna — 28 yildan ortiq vaqt mobaynida O‘zbekiston Respublikasi Fanlar akademiyasi Tarix instituti va yetakchi oliygohlarda samarali faoliyat yuritib, Markaziy Osiyo xalqlari ma’naviy-huquqiy merosini o‘rganishga ulkan hissa qo‘shib kelmoqda.",
    btn_view_full_cv: "To‘liq Obyektivkani (CV) ko‘rish va chop etish",

    // Research Pillars
    pillars_tag: "Tadqiqot Yo‘nalishlari",
    pillars_title: "Ilmiy Izlanishlar va Fundamental Maktab",
    pillars_desc: "Olimaning ilmiy faoliyati manbashunoslik, matnshunoslik, tasavvuf falsafasi, diplomatiya tarixi va arxiv hujjatlari sintezi ustiga qurilgan.",

    // Dissertations
    diss_tag: "Ilmiy Dissertatsiyalar",
    diss_title: "Doktorlik va Nomzodlik Tadqiqotlari",
    diss_desc: "DSc va PhD ilmiy darajalarini beruvchi Ilmiy kengashlarda muvaffaqiyatli himoya qilingan fundamental ilmiy ishlar avtoreferatlari bilan to‘liq tanishishingiz mumkin.",
    btn_read_autoreferat: "Avtoreferatni mutolaa qilish (PDF)",

    // Monographs
    monographs_tag: "Asarlar",
    monographs_title: "Chop Etilgan Monografiyalar",
    monographs_desc: "Tarixchilar, sharqshunoslar, talabalar va keng ilmiy jamoatchilik uchun mo‘ljallangan fundamental kitoblar.",

    // Articles Library
    articles_tag: "Ilmiy Nashrlar",
    articles_title: "Maqolalar Kutubxonasi va PDF Mutolaasi",
    articles_desc: "Brill (Niderlandiya), Oriente Moderno, Scopus, Respublika OAK (VAK) jurnallari hamda xalqaro anjumanlarda chop etilgan 100 dan ortiq ilmiy maqolalarning elektron nusxalari.",
    search_placeholder: "Maqola nomi, kalit so‘z yoki yil bo‘yicha qidiring...",
    filter_all: "Hammasi",
    filter_intl: "Xalqaro (Brill / Scopus)",
    filter_vak: "OAK (VAK) Jurnallari",
    filter_conf: "Anjumanlar & To‘plamlar",
    btn_read_pdf: "Mutolaa",
    btn_download_pdf: "Yuklab olish",

    // Projects
    projects_tag: "Ilmiy Grantlar",
    projects_title: "Davlat va Xalqaro Ilmiy Loyihalar",
    projects_desc: "O‘zbekistondagi Islom sivilizatsiyasi markazi, Fanlar akademiyasi Tarix instituti va xorijiy ilmiy markazlar bilan amalga oshirilgan fundamental tadqiqotlar.",

    // Certificates
    certs_tag: "Malaka & Huquqiy Maqom",
    certs_title: "Diplomlar, Sertifikatlar va Malaka Oshirish",
    certs_desc: "Tarix fanlari doktori va nomzodligi davlat diplomlari, Islom huquqi xalqaro sertifikati hamda xorijiy universitetlar malaka sertifikatlari galereyasi.",

    // Timeline
    timeline_tag: "Faoliyat Yo‘li",
    timeline_title: "Mehnat Faoliyati va Xizmat Pog‘onalari",

    // Department & Contact
    dept_tag: "Kafedra & Qabul",
    dept_title: "Akademik Faoliyat va Muloqot Ma’lumotlari",
    dept_desc: "Toshkent Gumanitar Fanlar Universiteti, «Aniq va gumanitar fanlar» kafedrasi hamda ilmiy tadqiqotchilar uchun rasmiy qabul tartibi.",
    card_dept_title: "Kafedra Rekvizitlari",
    label_institution: "Oliy Ta’lim Muassasasi",
    label_emails: "Rasmiy Elektron Pochtalar",
    label_address: "Joylashuv va Manzil",
    dept_note: "Rasmiy xat va hujjatlar TGFU devonxonasi orqali qabul qilinadi.",
    card_hours_title: "Ilmiy Konsultatsiya va Dars Jadvali",
    label_hours: "Talabalar uchun qabul vaqtlari",
    val_hours_days: "Seshanba va Payshanba kunlari",
    val_hours_time: "Soat 14:00 dan 17:00 gacha",
    label_researchers: "Doktorant va Mustaqil Izlanuvchilar",
    val_specialty: "07.00.01 – O‘zbekiston tarixi ixtisosligi",
    val_researchers_desc: "Dissertatsiya mavzulari, arxiv va qo‘lyozma manbalar tahlili bo‘yicha ilmiy maslahatlar oldindan kelishilgan reja asosida o‘tkaziladi.",
    label_courses: "O‘qitiladigan Fanlar",
    val_courses: "O‘zbekiston tarixi, Manbashunoslik, Sharq sivilizatsiyasi",
    hours_note: "TGFU dars jadvali va xonalar taqsimoti universitet axborot tizimida belgilanadi.",

    // Footer
    footer_rights: "Barcha huquqlar himoyalangan.",
    footer_top_btn: "Yuqoriga",
    footer_print_btn: "Sahifani chop etish"
  },

  ru: {
    // Nav
    nav_home: "Главная",
    nav_research: "Научная деятельность",
    nav_pillars: "Направления исследований",
    nav_dissertations: "Диссертации (DSc и PhD)",
    nav_monographs: "Монографии",
    nav_projects: "Научные проекты",
    nav_articles: "Библиотека статей",
    nav_documents: "Документы и первоисточники",
    nav_certificates: "Дипломы и сертификаты",
    nav_biography: "Биография и языки",
    nav_contact: "Кафедра и прием",
    nav_cv_btn: "Резюме / CV",

    // Hero
    hero_uni: "Ташкентский университет гуманитарных наук (TGFU)",
    hero_fname: "Хидирова",
    hero_lname: "Наргизахон",
    hero_mname: "Уриновна",
    hero_degree: "Доктор исторических наук (DSc)",
    hero_role: "Ученый-востоковед и источниковед",
    hero_bio: "Ведущий ученый, исследующий историю Узбекистана, суфийскую философию (тарикат Ходжагон-Накшбандия), культуру государственности эпохи Темуридов, а также семейно-брачные отношения и социально-правовой статус женщин в ханствах Средней Азии.",
    hero_btn_articles: "Научные статьи (PDF)",
    hero_btn_dissertation: "Докторская диссертация",
    hero_btn_contact: "Кафедра и прием",
    science_ticker_badge: "История и источниковедение",
    science_ticker_title: "Философия суфизма и архивы эпохи Тимуридов",
    stat_pubs: "Научные публикации",
    stat_diss: "Диссертации (PhD и DSc)",
    stat_projects: "Гос. и межд. проекты",
    stat_exp: "Лет научного стажа",

    // Portrait card
    badge_dsc: "Ученый DSc",
    badge_dsc_sub: "07.00.01 – История Узбекистана",
    badge_dept: "Кафедра TGFU",
    badge_dept_sub: "Точные и гуманитарные науки",
    upload_title: "Загрузить / изменить фото ученого",
    upload_sub: "Нажмите или перетащите фото сюда (JPG, PNG)",
    btn_reset_photo: "Вернуть исходное",

    // About / Bio
    about_tag: "Биография",
    about_title: "Жизнь, посвященная востоковедению и истории",
    about_desc: "Хидирова Наргизахон Уриновна на протяжении более 28 лет плодотворно работает в Институте истории Академии наук Республики Узбекистан и ведущих университетах, внося весомый вклад в исследование духовно-правового наследия народов Средней Азии.",
    btn_view_full_cv: "Посмотреть полное резюме (CV) и распечатать",

    // Research Pillars
    pillars_tag: "Направления исследований",
    pillars_title: "Фундаментальная научная школа",
    pillars_desc: "Научная деятельность ученого основана на синтезе источниковедения, текстологии, суфийской философии, истории дипломатии и архивных документов.",

    // Dissertations
    diss_tag: "Научные диссертации",
    diss_title: "Докторские и кандидатские исследования",
    diss_desc: "Вы можете ознакомиться с полными авторефератами фундаментальных научных работ, успешно защищенных в Ученых советах DSc и PhD.",
    btn_read_autoreferat: "Читать автореферат (PDF)",

    // Monographs
    monographs_tag: "Труды",
    monographs_title: "Опубликованные монографии",
    monographs_desc: "Фундаментальные книги для историков, востоковедов, студентов и широкой научной общественности.",

    // Articles Library
    articles_tag: "Научные публикации",
    articles_title: "Библиотека статей и чтение PDF",
    articles_desc: "Электронные копии более 100 научных статей, опубликованных в Brill (Нидерланды), Oriente Moderno, Scopus, журналах ВАК и материалах международных конференций.",
    search_placeholder: "Поиск по названию статьи, ключевому слову или году...",
    filter_all: "Все",
    filter_intl: "Международные (Brill / Scopus)",
    filter_vak: "Журналы ВАК",
    filter_conf: "Конференции и сборники",
    btn_read_pdf: "Читать",
    btn_download_pdf: "Скачать",

    // Projects
    projects_tag: "Научные гранты",
    projects_title: "Государственные и международные проекты",
    projects_desc: "Фундаментальные исследования, реализованные совместно с Центром исламской цивилизации в Узбекистане, Институтом истории АН РУз и зарубежными центрами.",

    // Certificates
    certs_tag: "Квалификация и статус",
    certs_title: "Дипломы, сертификаты и повышение квалификации",
    certs_desc: "Галерея государственных дипломов доктора и кандидата исторических наук, международного сертификата по исламскому праву и сертификатов зарубежных вузов.",

    // Timeline
    timeline_tag: "Трудовой путь",
    timeline_title: "Этапы научно-педагогической деятельности",

    // Department & Contact
    dept_tag: "Кафедра и прием",
    dept_title: "Академическая деятельность и контакты",
    dept_desc: "Ташкентский университет гуманитарных наук, кафедра «Точные и гуманитарные науки» и порядок приема для исследователей.",
    card_dept_title: "Реквизиты кафедры",
    label_institution: "Высшее учебное заведение",
    label_emails: "Официальная электронная почта",
    label_address: "Адрес и местоположение",
    dept_note: "Официальные письма и документы принимаются через канцелярию TGFU.",
    card_hours_title: "Научные консультации и расписание",
    label_hours: "Приемные часы для студентов",
    val_hours_days: "Вторник и четверг",
    val_hours_time: "С 14:00 до 17:00",
    label_researchers: "Докторанты и соискатели",
    val_specialty: "Специальность 07.00.01 – История Узбекистана",
    val_researchers_desc: "Консультации по темам диссертаций, архивным и рукописным источникам проводятся по предварительно согласованному графику.",
    label_courses: "Преподаваемые дисциплины",
    val_courses: "История Узбекистана, Источниковедение, Восточные цивилизации",
    hours_note: "Расписание занятий и распределение аудиторий TGFU определяются в университетской информационной системе.",

    // Footer
    footer_rights: "Все права защищены.",
    footer_top_btn: "Наверх",
    footer_print_btn: "Распечатать страницу"
  },

  en: {
    // Nav
    nav_home: "Home",
    nav_research: "Research",
    nav_pillars: "Research Pillars",
    nav_dissertations: "Dissertations (DSc & PhD)",
    nav_monographs: "Monographs",
    nav_projects: "Research Projects",
    nav_articles: "Publications Library",
    nav_documents: "Documents & Sources",
    nav_certificates: "Diplomas & Certificates",
    nav_biography: "Biography & Languages",
    nav_contact: "Department & Office Hours",
    nav_cv_btn: "Curriculum Vitae",

    // Hero
    hero_uni: "Tashkent University of Humanities (TGFU)",
    hero_fname: "Khidirova",
    hero_lname: "Nargizakhon",
    hero_mname: "Urinovna",
    hero_degree: "Doctor of Historical Sciences (DSc)",
    hero_role: "Orientalist & Manuscript Source Scholar",
    hero_bio: "Leading historian researching the history of Uzbekistan, Sufi philosophy (Khwajagan-Naqshbandiyya order), Timurid diplomacy and statehood culture, as well as family-marriage relations and socio-legal status of women in Central Asian khanates.",
    hero_btn_articles: "Publications (PDF)",
    hero_btn_dissertation: "Doctoral Dissertation",
    hero_btn_contact: "Department & Hours",
    science_ticker_badge: "History & Source Studies",
    science_ticker_title: "Sufi Philosophy & Timurid Era Archives",
    stat_pubs: "Publications",
    stat_diss: "Dissertations (PhD & DSc)",
    stat_projects: "State & Intl Projects",
    stat_exp: "Years of Academic Exp",

    // Portrait card
    badge_dsc: "DSc Scholar",
    badge_dsc_sub: "07.00.01 – History of Uzbekistan",
    badge_dept: "TGFU Faculty",
    badge_dept_sub: "Exact and Humanities",
    upload_title: "Upload / Replace Scholar Photo",
    upload_sub: "Click or drag and drop an image here (JPG, PNG)",
    btn_reset_photo: "Reset Photo",

    // About / Bio
    about_tag: "Biography",
    about_title: "A Lifetime Dedicated to Oriental Studies & History",
    about_desc: "Dr. Nargizakhon Khidirova has been working fruitfully for over 28 years at the Institute of History of the Academy of Sciences of Uzbekistan and leading universities, making profound contributions to studying the spiritual and legal heritage of Central Asia.",
    btn_view_full_cv: "View Full CV & Print",

    // Research Pillars
    pillars_tag: "Research Pillars",
    pillars_title: "Fundamental Academic Research",
    pillars_desc: "The scholar's work synthesizes primary source criticism, manuscript philology, Sufi philosophy, diplomatic history, and archival legal records.",

    // Dissertations
    diss_tag: "Academic Dissertations",
    diss_title: "Doctoral & Candidate Theses",
    diss_desc: "Explore the full author abstracts of fundamental theses defended at state DSc and PhD Scientific Councils.",
    btn_read_autoreferat: "Read Author Abstract (PDF)",

    // Monographs
    monographs_tag: "Books",
    monographs_title: "Published Monographs",
    monographs_desc: "Foundational books for historians, orientalists, researchers, and students.",

    // Articles Library
    articles_tag: "Publications",
    articles_title: "Articles Library & PDF Reader",
    articles_desc: "Digital collection of over 100 scholarly articles published by Brill (Netherlands), Oriente Moderno, Scopus, state journals, and international proceedings.",
    search_placeholder: "Search by article title, topic or year...",
    filter_all: "All",
    filter_intl: "International (Brill / Scopus)",
    filter_vak: "Peer-reviewed Journals",
    filter_conf: "Conferences & Proceedings",
    btn_read_pdf: "Read PDF",
    btn_download_pdf: "Download",

    // Projects
    projects_tag: "Research Grants",
    projects_title: "State & International Projects",
    projects_desc: "Major research projects implemented with the Center of Islamic Civilization in Uzbekistan, Academy of Sciences, and international scholarly bodies.",

    // Certificates
    certs_tag: "Credentials",
    certs_title: "Diplomas, Certificates & Fellowships",
    certs_desc: "Gallery of official state DSc and PhD diplomas, Certificate in Islamic Law, and international professional certifications.",

    // Timeline
    timeline_tag: "Career Milestones",
    timeline_title: "Academic & Professional Journey",

    // Department & Contact
    dept_tag: "Department & Contact",
    dept_title: "Academic Affiliation & Office Hours",
    dept_desc: "Tashkent University of Humanities, Department of Exact and Humanities, and academic consultation hours.",
    card_dept_title: "Department Coordinates",
    label_institution: "Higher Educational Institution",
    label_emails: "Official Email Addresses",
    label_address: "Location & Address",
    dept_note: "Official mail and requests are processed through the TGFU office.",
    card_hours_title: "Consultation & Teaching Schedule",
    label_hours: "Student Office Hours",
    val_hours_days: "Tuesdays & Thursdays",
    val_hours_time: "2:00 PM to 5:00 PM",
    label_researchers: "Doctoral Students & Independent Researchers",
    val_specialty: "Major 07.00.01 – History of Uzbekistan",
    val_researchers_desc: "Dissertation guidance and archival manuscript analysis consultations take place by scheduled appointment.",
    label_courses: "Courses Taught",
    val_courses: "History of Uzbekistan, Source Studies, Oriental Civilizations",
    hours_note: "TGFU class schedules and room assignments are regulated by the university academic management system.",

    // Footer
    footer_rights: "All rights reserved.",
    footer_top_btn: "Back to Top",
    footer_print_btn: "Print Page"
  }
};
