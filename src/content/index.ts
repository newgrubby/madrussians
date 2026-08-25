export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];

type Expedition = {
  slug: string;
  code: string;
  destination: string;
  title: string;
  season: string;
  duration: string;
  group: string;
  image: string;
};

type Content = {
  locale: Locale;
  otherLocale: Locale;
  seo: { title: string; description: string; ogLocale: string };
  navigation: { label: string; href: string }[];
  menu: { open: string; close: string; aria: string };
  hero: { eyebrow: string; lines: [string, string]; description: string; cta: string; sectionsAria: string; scroll: string };
  principles: [string, string, string][];
  expeditions: Expedition[];
  expeditionSection: { eyebrow: string; title: [string, string]; description: string; open: string };
  story: { eyebrow: string; lines: [string, string, string]; note: string };
  format: { eyebrow: string; title: [string, string]; items: [string, string, string][]; imageAlt: string; stageLabel: string };
  fieldLog: { eyebrow: string; title: [string, string]; items: { code:string; place: string; study: string; season:string; image: string }[] };
  about: { eyebrow: string; metric: string; metricLabel: string; title: [string, string]; paragraphs: [string, string]; imageAlt: string };
  editorial: { eyebrow: string; title: [string, string]; items: [string, string, string][] };
  contact: {
    eyebrow: string; title: [string, string]; supporting: string;
    fields: { name: [string, string]; contact: [string, string]; destination: [string, string]; dates: [string, string] };
    destinations: string[]; destinationsAria: string; submit: string; note: string; imageAlt: string;
  };
  footer: { descriptor: string; disclaimer: string; direction: string };
};

const expeditionImages = [
  "/images/madrussians/kamchatka-01.jpeg",
  "/images/madrussians/kurils-01.jpeg",
  "/images/madrussians/baikal-01.jpeg",
  "/images/madrussians/home-04.jpeg",
  "/images/madrussians/dagestan-01.jpeg",
  "/images/madrussians/home-03.jpeg",
  "/images/madrussians/kamchatka-03.jpeg",
  "/images/madrussians/kyrgyzstan-01.jpeg",
] as const;
const destinationCodes=["KAM","KUR","BAI","ALT","DAG","KOL","CAU","TSH"] as const;

const ru: Content = {
  locale: "ru", otherLocale: "en",
  seo: { title: "RAVENORTH — экспедиции по России и миру | EO Labs Concept", description: "Концепт expedition-бренда для маленьких групп и маршрутов за пределами привычной карты.", ogLocale: "ru_RU" },
  navigation: [
    { label: "ЭКСПЕДИЦИИ", href: "#expeditions" }, { label: "ФОРМАТ", href: "#format" },
    { label: "ЖУРНАЛ", href: "#archive" }, { label: "О КОНЦЕПТЕ", href: "#about" },
  ],
  menu: { open: "МЕНЮ", close: "ЗАКРЫТЬ", aria: "Основная навигация" },
  hero: { eyebrow: "EXPEDITIONS / RUSSIA & BEYOND", lines: ["НЕ ТУРЫ.", "ЭКСПЕДИЦИИ."], description: "Маленькие группы. Большие расстояния. Места, где заканчивается привычный маршрут.", cta: "ИССЛЕДОВАТЬ МАРШРУТЫ", sectionsAria: "Разделы", scroll: "ЛИСТАЙТЕ" },
  principles: [
    ["01", "МАЛЫЕ ГРУППЫ", "Формат, в котором можно двигаться свободно и не терять маршрут в толпе."],
    ["02", "ЗА ПРЕДЕЛАМИ МАРШРУТА", "Дорога становится частью путешествия, а не паузой между точками."],
    ["03", "ОТ ЛЬДА ДО ВУЛКАНОВ", "Восемь направлений: север, горы, океан и дальние дороги."],
  ],
  expeditions: [
    ["kamchatka", "КАМЧАТКА", "КРАЙ ВУЛКАНОВ И СОЛЁНЫХ ВОЛН", "ИЮНЬ — ИЮЛЬ", "7 ДНЕЙ", "МАЛАЯ ГРУППА"],
    ["north-kurils", "СЕВЕРНЫЕ КУРИЛЫ", "РОМАНТИКА ДАЛЁКИХ БЕРЕГОВ", "ИЮЛЬ — АВГУСТ", "9 ДНЕЙ", "МАЛАЯ ГРУППА"],
    ["baikal", "БАЙКАЛ", "ЛЁД, ТИШИНА И ЗИМНИЙ ОЛЬХОН", "ФЕВРАЛЬ", "5 ДНЕЙ", "МАЛАЯ ГРУППА"],
    ["altai", "АЛТАЙ", "ВЫСОКОГОРЬЕ И ДАЛЬНИЕ ДОРОГИ", "АВГУСТ", "8 ДНЕЙ", "МАЛАЯ ГРУППА"],
    ["dagestan", "ДАГЕСТАН", "КАНЬОНЫ И ДОРОГИ ВЫСОКО НАД ДОЛИНАМИ", "ОКТЯБРЬ", "7 ДНЕЙ", "МАЛАЯ ГРУППА"],
    ["kola", "КОЛЬСКИЙ ПОЛУОСТРОВ", "ТУНДРА И БАРЕНЦЕВО МОРЕ", "СЕНТЯБРЬ", "6 ДНЕЙ", "МАЛАЯ ГРУППА"],
    ["caucasus", "КАВКАЗ И ЭЛЬБРУС", "ВЫШЕ ЛЕСА, БЛИЖЕ К ЛЕДНИКАМ", "ИЮЛЬ", "7 ДНЕЙ", "МАЛАЯ ГРУППА"],
    ["tian-shan", "ТЯНЬ-ШАНЬ", "НЕБЕСНЫЕ ГОРЫ И ВЫСОКОГОРНЫЕ ОЗЁРА", "СЕНТЯБРЬ", "6 ДНЕЙ", "МАЛАЯ ГРУППА"],
  ].map((x, i) => ({ slug:x[0], code:destinationCodes[i], destination:x[1], title:x[2], season:x[3], duration:x[4], group:x[5], image:expeditionImages[i] })) as Expedition[],
  expeditionSection: { eyebrow: "01 / SELECTED ROUTES", title: ["ЭКСПЕДИЦИИ", "РОССИЯ И МИР"], description: "Восемь направлений между льдом, океаном, пустыней и высокогорьем.", open: "К ФОРМЕ" },
  story: { eyebrow: "FIELD NOTES / DESTINATION STUDIES", lines: ["ТУДА,", "ГДЕ КОНЧАЮТСЯ", "ДОРОГИ."], note: "КАМЧАТКА / ВУЛКАНЫ" },
  format: { eyebrow: "02 / ФОРМАТ", title: ["НЕ КАК", "ОБЫЧНЫЙ ТУР."], imageAlt: "Экспедиционный формат", stageLabel: "RAVENORTH FORMAT", items: [
    ["01", "МИНИ-ГРУППЫ", "Небольшой состав для свободного движения."], ["02", "ДЖИП-ФОРМАТ", "Маршрут продолжается там, где заканчивается асфальт."], ["03", "БАЗОВЫЙ КОМФОРТ", "Место для тихого возвращения после ветра и бездорожья."], ["04", "СПЕЦТРАНСПОРТ", "Внедорожники, лодки и заброски в удалённые точки."], ["05", "ПОЛЕВОЙ РИТМ", "Достаточно времени, чтобы место осталось в памяти."],
  ] },
  fieldLog: { eyebrow: "03 / FIELD NOTES / DESTINATION STUDIES", title: ["ПОЛЕВОЙ", "ЖУРНАЛ"], items: [
    {code:"KAM",place:"КАМЧАТКА",study:"ВУЛКАНЫ",season:"ИЮНЬ — ИЮЛЬ",image:"/images/madrussians/kamchatka-03.jpeg"}, {code:"BAI",place:"БАЙКАЛ",study:"ЛЁД",season:"ФЕВРАЛЬ",image:"/images/madrussians/baikal-03.jpeg"}, {code:"CHR",place:"ЧАРСКИЕ ПЕСКИ",study:"ПУСТЫНЯ",season:"АВГУСТ",image:"/images/madrussians/chara-01.jpeg"}, {code:"KUR",place:"КУРИЛЫ",study:"ТИХИЙ ОКЕАН",season:"ИЮЛЬ — АВГУСТ",image:"/images/madrussians/kurils-02.jpeg"}, {code:"ALT",place:"АЛТАЙ",study:"ВЫСОКОГОРЬЕ",season:"АВГУСТ",image:"/images/madrussians/kyrgyzstan-03.jpeg"},
  ] },
  about: { eyebrow: "04 / О КОНЦЕПТЕ", metric: "08", metricLabel: "НАПРАВЛЕНИЙ\nFROM ICE TO VOLCANOES", title: ["ИДТИ", "ДАЛЬШЕ."], paragraphs: ["RAVENORTH задуман как expedition club для небольших групп и маршрутов, где дорога сама становится частью путешествия.", "Север, горы, океан и пространства, до которых нельзя добраться обычным туристическим автобусом. Это вымышленный бренд-концепт EO Labs."], imageAlt: "Отдалённое побережье" },
  editorial: { eyebrow: "05 / EDITORIAL NOTE", title: ["ПОЧЕМУ", "ТАК ДАЛЕКО?"], items: [["01 / SCALE", "МАСШТАБ", "Пространство меняет ощущение расстояния."], ["02 / SILENCE", "ТИШИНА", "Чем дальше от маршрута, тем меньше лишнего."], ["03 / MEMORY", "ПАМЯТЬ", "Лучшие места редко находятся рядом с парковкой."]] },
  contact: { eyebrow: "BEYOND THE MAP / YOUR DIRECTION", title: ["КУДА", "ДАЛЬШЕ?"], supporting: "Выберите направление — остальное начинается за пределами карты.", fields: { name:["ИМЯ","Как вас зовут"], contact:["КАК СВЯЗАТЬСЯ","Telegram, телефон или email"], destination:["КУДА ХОТИТЕ ПОЕХАТЬ","Выберите направление"], dates:["УДОБНЫЕ ДАТЫ","Когда вам удобно"] }, destinations:["Камчатка","Северные Курилы","Байкал","Алтай","Дагестан","Кольский полуостров","Кавказ и Эльбрус","Тянь-Шань","Не определился — помогите выбрать"], destinationsAria: "Направления RAVENORTH", submit: "ОСТАВИТЬ ЗАЯВКУ →", note: "Концепт: отправка формы отключена.", imageAlt: "Побережье за пределами карты" },
  footer: { descriptor: "ЭКСПЕДИЦИИ / РОССИЯ И МИР", disclaimer: "RAVENORTH — концепт вымышленного expedition-бренда, созданный EO Labs. Не является сайтом реальной туристической компании.", direction: "Concept & Direction — EO Labs" },
};

const en: Content = {
  ...ru,
  locale:"en", otherLocale:"ru",
  seo:{title:"RAVENORTH — Expeditions in Russia & Beyond | EO Labs Concept",description:"A fictional expedition brand concept for small groups and journeys beyond the familiar map.",ogLocale:"en_US"},
  navigation:[{label:"EXPEDITIONS",href:"#expeditions"},{label:"FORMAT",href:"#format"},{label:"FIELD LOG",href:"#archive"},{label:"ABOUT",href:"#about"}],
  menu:{open:"MENU",close:"CLOSE",aria:"Primary navigation"},
  hero:{eyebrow:"EXPEDITIONS / RUSSIA & BEYOND",lines:["NOT TOURS.","EXPEDITIONS."],description:"Small groups. Long distances. Places beyond the usual route.",cta:"EXPLORE EXPEDITIONS",sectionsAria:"Sections",scroll:"SCROLL"},
  principles:[["01","SMALL GROUPS","A compact crew means freedom to move, change pace and leave the crowded route behind."],["02","BEYOND THE LAST ROAD","The way there is part of the journey, not dead time between destinations."],["03","ICE TO VOLCANOES","Eight directions across northern coasts, high mountains and distant roads."]],
  expeditions: [
    ["kamchatka","KAMCHATKA","VOLCANOES AND THE PACIFIC EDGE","JUNE — JULY","7 DAYS","SMALL GROUP"], ["north-kurils","NORTH KURILS","THE ROMANCE OF DISTANT SHORES","JULY — AUGUST","9 DAYS","SMALL GROUP"], ["baikal","LAKE BAIKAL","ICE, SILENCE AND WINTER OLKHON","FEBRUARY","5 DAYS","SMALL GROUP"], ["altai","ALTAI","HIGH COUNTRY AND DISTANT ROADS","AUGUST","8 DAYS","SMALL GROUP"], ["dagestan","DAGESTAN","CANYONS ABOVE THE VALLEYS","OCTOBER","7 DAYS","SMALL GROUP"], ["kola","KOLA PENINSULA","TUNDRA TO THE BARENTS SEA","SEPTEMBER","6 DAYS","SMALL GROUP"], ["caucasus","CAUCASUS & ELBRUS","ABOVE THE FOREST, TOWARD THE GLACIERS","JULY","7 DAYS","SMALL GROUP"], ["tian-shan","TIAN SHAN","CELESTIAL MOUNTAINS AND ALPINE LAKES","SEPTEMBER","6 DAYS","SMALL GROUP"],
  ].map((x,i)=>({slug:x[0],code:destinationCodes[i],destination:x[1],title:x[2],season:x[3],duration:x[4],group:x[5],image:expeditionImages[i]})) as Expedition[],
  expeditionSection:{eyebrow:"01 / SELECTED ROUTES",title:["EXPEDITIONS","RUSSIA & BEYOND"],description:"Eight directions spanning ice, ocean, desert and high country.",open:"TO ENQUIRY"},
  story:{eyebrow:"FIELD NOTES / DESTINATION STUDIES",lines:["BEYOND","THE LAST","ROAD."],note:"KAMCHATKA / VOLCANOES"},
  format:{eyebrow:"02 / THE FORMAT",title:["NOT YOUR","USUAL TOUR."],imageAlt:"Expedition format",stageLabel:"RAVENORTH FORMAT",items:[["01","SMALL GROUPS","A compact crew keeps the route flexible."],["02","OFF-ROAD","The journey continues beyond the asphalt."],["03","BASE COMFORT","A quiet return after wind, ocean and rough roads."],["04","SPECIAL TRANSPORT","4x4s, boats and remote transfers reach further."],["05","FIELD RHYTHM","Enough time for a place to become a memory."]]},
  fieldLog:{eyebrow:"03 / FIELD NOTES / DESTINATION STUDIES",title:["FIELD","LOG"],items:[{code:"KAM",place:"KAMCHATKA",study:"VOLCANOES",season:"JUNE — JULY",image:"/images/madrussians/kamchatka-03.jpeg"},{code:"BAI",place:"LAKE BAIKAL",study:"ICE",season:"FEBRUARY",image:"/images/madrussians/baikal-03.jpeg"},{code:"CHR",place:"CHARA SANDS",study:"DESERT",season:"AUGUST",image:"/images/madrussians/chara-01.jpeg"},{code:"KUR",place:"KURILS",study:"PACIFIC OCEAN",season:"JULY — AUGUST",image:"/images/madrussians/kurils-02.jpeg"},{code:"ALT",place:"ALTAI",study:"HIGH COUNTRY",season:"AUGUST",image:"/images/madrussians/kyrgyzstan-03.jpeg"}]},
  about:{eyebrow:"04 / ABOUT THE CONCEPT",metric:"08",metricLabel:"DESTINATIONS\nFROM ICE TO VOLCANOES",title:["GO","FURTHER."],paragraphs:["RAVENORTH imagines an expedition club built for small groups and routes where the road itself becomes part of the journey.","North, mountains, ocean and places no tour bus can reach. RAVENORTH is a fictional brand concept created by EO Labs."],imageAlt:"A remote coastline"},
  editorial:{eyebrow:"05 / EDITORIAL NOTE",title:["WHY","SO FAR?"],items:[["01 / SCALE","SCALE","Open space rewrites your sense of distance."],["02 / SILENCE","SILENCE","The further from the route, the less noise remains."],["03 / MEMORY","MEMORY","The best places rarely sit beside a car park."]]},
  contact:{eyebrow:"BEYOND THE MAP / YOUR DIRECTION",title:["WHERE","NEXT?"],supporting:"Choose a direction. The rest begins beyond the map.",fields:{name:["NAME","Your name"],contact:["CONTACT","Telegram, phone or email"],destination:["WHERE DO YOU WANT TO GO?","Choose a destination"],dates:["PREFERRED DATES","When works for you?"]},destinations:["Kamchatka","North Kurils","Lake Baikal","Altai","Dagestan","Kola Peninsula","Caucasus & Elbrus","Tian Shan","Not sure — help me choose"],destinationsAria:"RAVENORTH destinations",submit:"SEND ENQUIRY →",note:"Concept interface — form submission is disabled.",imageAlt:"A coast beyond the map"},
  footer:{descriptor:"EXPEDITIONS / RUSSIA & BEYOND",disclaimer:"RAVENORTH is a fictional expedition brand concept created by EO Labs. It is not the website of an operating travel company.",direction:"Concept & Direction — EO Labs"},
};

export const content: Record<Locale, Content> = {ru,en};
export function isLocale(value:string): value is Locale { return locales.includes(value as Locale); }
