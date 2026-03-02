// ============================================
// OLD TESTAMENT ATLAS — I18N (English / Spanish)
// ============================================

export let lang = 'en';

export const ui = {
  en: {
    splashTitle: "Old Testament Atlas",
    splashVerse: '"Your word is a lamp to my feet and a light to my path." — Psalm 119:105',
    loading: "Loading the ancient world...",
    appTitle: "Old Testament Atlas",
    appSubtitle: "Interactive Bible Geography",
    allBooks: "All Books",
    catLaw: "Law",
    catHistory: "History",
    catWisdom: "Wisdom",
    catMajorProphets: "Major Prophets",
    catMinorProphets: "Minor Prophets",
    scriptures: "Scriptures",
    about: "About",
    previous: "\u2190 Previous",
    next: "Next \u2192",
    scriptureFilter: "Scripture Filter",
    searchChapters: "Search chapters...",
    aboutTitle: "About This Atlas",
    bookCategories: "Book Categories",
    features: "Features",
    feature1: "Interactive map of all 39 Old Testament books",
    feature2: "Click any city to see biblical events",
    feature3: "Filter by book or category",
    feature4: "Scripture references with direct quotes",
    feature5: "Bilingual support (English/Spanish)",
    close: "Close",
    noEvents: "No events found",
    allJourneys: "All"
  },
  es: {
    splashTitle: "Atlas del Antiguo Testamento",
    splashVerse: '"L\u00e1mpara es a mis pies tu palabra, y lumbrera a mi camino." — Salmo 119:105',
    loading: "Cargando el mundo antiguo...",
    appTitle: "Atlas del Antiguo Testamento",
    appSubtitle: "Geograf\u00eda B\u00edblica Interactiva",
    allBooks: "Todos los Libros",
    catLaw: "Ley",
    catHistory: "Historia",
    catWisdom: "Sabidur\u00eda",
    catMajorProphets: "Profetas Mayores",
    catMinorProphets: "Profetas Menores",
    scriptures: "Escrituras",
    about: "Acerca de",
    previous: "\u2190 Anterior",
    next: "Siguiente \u2192",
    scriptureFilter: "Filtro de Escrituras",
    searchChapters: "Buscar cap\u00edtulos...",
    aboutTitle: "Acerca de este Atlas",
    bookCategories: "Categor\u00edas de Libros",
    features: "Caracter\u00edsticas",
    feature1: "Mapa interactivo de los 39 libros del Antiguo Testamento",
    feature2: "Haz clic en cualquier ciudad para ver eventos b\u00edblicos",
    feature3: "Filtra por libro o categor\u00eda",
    feature4: "Referencias b\u00edblicas con citas directas",
    feature5: "Soporte biling\u00fce (Ingl\u00e9s/Espa\u00f1ol)",
    close: "Cerrar",
    noEvents: "No se encontraron eventos",
    allJourneys: "Todos"
  }
};

export const bookTranslations = {
  en: {
    1:{name:"Genesis",shortName:"Gen"},2:{name:"Exodus",shortName:"Exod"},3:{name:"Leviticus",shortName:"Lev"},
    4:{name:"Numbers",shortName:"Num"},5:{name:"Deuteronomy",shortName:"Deut"},6:{name:"Joshua",shortName:"Josh"},
    7:{name:"Judges",shortName:"Judg"},8:{name:"Ruth",shortName:"Ruth"},9:{name:"1 Samuel",shortName:"1 Sam"},
    10:{name:"2 Samuel",shortName:"2 Sam"},11:{name:"1 Kings",shortName:"1 Kgs"},12:{name:"2 Kings",shortName:"2 Kgs"},
    13:{name:"1 Chronicles",shortName:"1 Chr"},14:{name:"2 Chronicles",shortName:"2 Chr"},15:{name:"Ezra",shortName:"Ezra"},
    16:{name:"Nehemiah",shortName:"Neh"},17:{name:"Esther",shortName:"Esth"},18:{name:"Job",shortName:"Job"},
    19:{name:"Psalms",shortName:"Ps"},20:{name:"Proverbs",shortName:"Prov"},21:{name:"Ecclesiastes",shortName:"Eccl"},
    22:{name:"Song of Solomon",shortName:"Song"},23:{name:"Isaiah",shortName:"Isa"},24:{name:"Jeremiah",shortName:"Jer"},
    25:{name:"Lamentations",shortName:"Lam"},26:{name:"Ezekiel",shortName:"Ezek"},27:{name:"Daniel",shortName:"Dan"},
    28:{name:"Hosea",shortName:"Hos"},29:{name:"Joel",shortName:"Joel"},30:{name:"Amos",shortName:"Amos"},
    31:{name:"Obadiah",shortName:"Obad"},32:{name:"Jonah",shortName:"Jonah"},33:{name:"Micah",shortName:"Mic"},
    34:{name:"Nahum",shortName:"Nah"},35:{name:"Habakkuk",shortName:"Hab"},36:{name:"Zephaniah",shortName:"Zeph"},
    37:{name:"Haggai",shortName:"Hag"},38:{name:"Zechariah",shortName:"Zech"},39:{name:"Malachi",shortName:"Mal"}
  },
  es: {
    1:{name:"G\u00e9nesis",shortName:"G\u00e9n"},2:{name:"\u00c9xodo",shortName:"\u00c9x"},3:{name:"Lev\u00edtico",shortName:"Lev"},
    4:{name:"N\u00fameros",shortName:"N\u00fam"},5:{name:"Deuteronomio",shortName:"Deut"},6:{name:"Josu\u00e9",shortName:"Jos"},
    7:{name:"Jueces",shortName:"Jue"},8:{name:"Rut",shortName:"Rut"},9:{name:"1 Samuel",shortName:"1 Sam"},
    10:{name:"2 Samuel",shortName:"2 Sam"},11:{name:"1 Reyes",shortName:"1 Re"},12:{name:"2 Reyes",shortName:"2 Re"},
    13:{name:"1 Cr\u00f3nicas",shortName:"1 Cr"},14:{name:"2 Cr\u00f3nicas",shortName:"2 Cr"},15:{name:"Esdras",shortName:"Esd"},
    16:{name:"Nehem\u00edas",shortName:"Neh"},17:{name:"Ester",shortName:"Est"},18:{name:"Job",shortName:"Job"},
    19:{name:"Salmos",shortName:"Sal"},20:{name:"Proverbios",shortName:"Prov"},21:{name:"Eclesiast\u00e9s",shortName:"Ecl"},
    22:{name:"Cantar de los Cantares",shortName:"Cant"},23:{name:"Isa\u00edas",shortName:"Is"},24:{name:"Jerem\u00edas",shortName:"Jer"},
    25:{name:"Lamentaciones",shortName:"Lam"},26:{name:"Ezequiel",shortName:"Ez"},27:{name:"Daniel",shortName:"Dan"},
    28:{name:"Oseas",shortName:"Os"},29:{name:"Joel",shortName:"Joel"},30:{name:"Am\u00f3s",shortName:"Am"},
    31:{name:"Abd\u00edas",shortName:"Abd"},32:{name:"Jon\u00e1s",shortName:"Jon"},33:{name:"Miqueas",shortName:"Miq"},
    34:{name:"Nah\u00fam",shortName:"Nah"},35:{name:"Habacuc",shortName:"Hab"},36:{name:"Sofon\u00edas",shortName:"Sof"},
    37:{name:"Hageo",shortName:"Hag"},38:{name:"Zacar\u00edas",shortName:"Zac"},39:{name:"Malaqu\u00edas",shortName:"Mal"}
  }
};

const bookNameMapToEs = {
  'Genesis':'G\u00e9nesis','Exodus':'\u00c9xodo','Leviticus':'Lev\u00edtico','Numbers':'N\u00fameros',
  'Deuteronomy':'Deuteronomio','Joshua':'Josu\u00e9','Judges':'Jueces','Ruth':'Rut',
  '1 Samuel':'1 Samuel','2 Samuel':'2 Samuel','1 Kings':'1 Reyes','2 Kings':'2 Reyes',
  '1 Chronicles':'1 Cr\u00f3nicas','2 Chronicles':'2 Cr\u00f3nicas','Ezra':'Esdras','Nehemiah':'Nehem\u00edas',
  'Esther':'Ester','Job':'Job','Psalms':'Salmos','Psalm':'Salmo','Proverbs':'Proverbios',
  'Ecclesiastes':'Eclesiast\u00e9s','Song of Solomon':'Cantar de los Cantares',
  'Isaiah':'Isa\u00edas','Jeremiah':'Jerem\u00edas','Lamentations':'Lamentaciones',
  'Ezekiel':'Ezequiel','Daniel':'Daniel','Hosea':'Oseas','Joel':'Joel','Amos':'Am\u00f3s',
  'Obadiah':'Abd\u00edas','Jonah':'Jon\u00e1s','Micah':'Miqueas','Nahum':'Nah\u00fam',
  'Habakkuk':'Habacuc','Zephaniah':'Sofon\u00edas','Haggai':'Hageo',
  'Zechariah':'Zacar\u00edas','Malachi':'Malaqu\u00edas'
};

export function t(key) {
  return ui[lang]?.[key] || ui.en[key] || key;
}

export function setLang(newLang) {
  lang = newLang;
}

export function displayVerse(verse) {
  if (lang !== 'es') return verse;
  let result = verse;
  for (const [en, es] of Object.entries(bookNameMapToEs)) {
    if (result.startsWith(en)) {
      result = result.replace(en, es);
      break;
    }
  }
  return result;
}

export function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-heading]').forEach(el => {
    const key = el.getAttribute('data-i18n-heading');
    const val = t(key);
    if (val) el.setAttribute('heading', val);
  });
  document.querySelectorAll('[data-i18n-description]').forEach(el => {
    const key = el.getAttribute('data-i18n-description');
    const val = t(key);
    if (val) el.setAttribute('description', val);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.setAttribute('placeholder', val);
  });
}
