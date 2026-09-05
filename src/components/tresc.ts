/*
 * Tresc serwisu w dwoch jezykach — patrz komentarz w blizniaczym EzScout.
 * Angielski jest domyslny (trasa `/`), polski pod `/pl`.
 */

export type Jezyk = 'en' | 'pl';

export type Plan = {
  nazwa: string;
  cena: string;
  opis: string;
  punkty: string[];
  wyrozniony?: boolean;
};

export type Tresc = {
  sciezka: string;
  skipLink: string;
  nav: { plany: string; kalkulator: string; efekty: string; faq: string; cta: string };
  menu: { otworz: string; zamknij: string; etykieta: string; etykietaMobil: string };
  jezyk: { etykieta: string; drugi: string; drugiHref: string; drugiLang: string };
  hero: { nadtytul: string; tytul1: string; tytul2: string; opis: string; cta1: string; cta2: string };
  plany: { tytul: string; opis: string; wyrozniony: string; wybieram: string; wybieramSr: string; lista: Plan[] };
  kalkulator: {
    tytul: string; opis: string; dystans: string; cel: string; godziny: string; minuty: string;
    naZywo: string; tempo: string; predkosc: string; celWynik: string; miedzyczasy: string;
    kilometr: string; czas: string; podpis: string; pusto: string;
    dystanse: { nazwa: string; km: number }[];
  };
  jak: { tytul: string; kroki: { tytul: string; opis: string }[] };
  efekty: { tytul: string; opis: string; przed: string; po: string; historie: { imie: string; cel: string; przed: string; po: string; tekst: string }[] };
  liczby: { etykieta: string; wartosc: string; opis: string }[];
  faq: { tytul: string; pytania: { pytanie: string; odpowiedz: string }[] };
  kontakt: { tytul: string; opis: string; cta: string; nota: string };
  stopka: { opis: string; serwis: string; kontakt: string; odpowiedz: string; miasto: string; prawa: string; autor: string };
};

const EN: Tresc = {
  sciezka: '/',
  skipLink: 'Skip to main content',
  nav: { plany: 'Plans', kalkulator: 'Calculator', efekty: 'Results', faq: 'FAQ', cta: 'Start training' },
  menu: { otworz: 'Menu', zamknij: 'Close', etykieta: 'Main', etykietaMobil: 'Main (mobile)' },
  jezyk: { etykieta: 'Language', drugi: 'PL', drugiHref: '/pl/', drugiLang: 'pl' },
  hero: {
    nadtytul: 'Running coaching',
    tytul1: 'A plan counted back from race day,',
    tytul2: 'not bolted onto it',
    opis:
      'You get a calendar with a pace for every session and a heart-rate range, and every week we ' +
      'correct it against what you actually ran. No off-the-shelf template from the internet.',
    cta1: 'See the plans',
    cta2: 'Work out your pace',
  },
  plany: {
    tytul: 'Plans', opis: 'One goal, one date, one price. No subscription and no open-ended extension.',
    wyrozniony: 'Most popular', wybieram: 'Choose', wybieramSr: 'the {n} plan',
    lista: [
      { nazwa: 'Start', cena: '£32', opis: 'Your first 5 km without gasping. Eight weeks for someone starting out.',
        punkty: ['8 weeks', '3 sessions a week', 'Heart-rate zones', 'Plan as PDF and calendar'] },
      { nazwa: 'Distance', cena: '£85', opis: 'A half marathon on a fixed date. The plan is counted back from race day.',
        punkty: ['12 weeks', 'Weekly correction from your data', 'Supporting strength work', 'Direct contact with the coach', 'Race-day pacing strategy'], wyrozniony: true },
      { nazwa: 'Marathon', cena: '£150', opis: 'Full preparation for 42 km, fuelling on the course included.',
        punkty: ['18 weeks', 'Race-day fuelling strategy', 'Two control tests', 'A call every two weeks', 'Post-race recovery plan'] },
    ],
  },
  kalkulator: {
    tytul: 'Pace calculator',
    opis: 'Pick a distance and a target time — you get pace per kilometre, speed and the splits worth writing on a wristband.',
    dystans: 'Distance', cel: 'Target time', godziny: 'Hours', minuty: 'Minutes',
    naZywo: 'The result updates as you type — there is no button to press.',
    tempo: 'Pace', predkosc: 'Speed', celWynik: 'Target', miedzyczasy: 'Splits',
    kilometr: 'Kilometre', czas: 'Time',
    podpis: 'Splits for {d} at {t} per kilometre',
    pusto: 'Enter a target time greater than zero to see pace and splits.',
    dystanse: [{ nazwa: '5 km', km: 5 }, { nazwa: '10 km', km: 10 },
               { nazwa: 'Half marathon', km: 21.0975 }, { nazwa: 'Marathon', km: 42.195 }],
  },
  jak: {
    tytul: 'How it works',
    kroki: [
      { tytul: 'A conversation', opis: 'Twenty minutes about how much you run now, how much time you have in a week and when the goal is. Without that, a plan is guesswork.' },
      { tytul: 'The plan', opis: 'You get a calendar with sessions, a pace for each and a heart-rate range. All of it counted back from race day, not appended to it.' },
      { tytul: 'Correction', opis: 'Each week you send the data from your watch. If the pace is not landing, or a session falls through, next week takes that into account.' },
    ],
  },
  efekty: {
    tytul: 'Results', opis: 'Three people, three different goals. The times are from the chip, not the watch.',
    przed: 'Before', po: 'After',
    historie: [
      { imie: 'Marta, 34', cel: 'First half marathon', przed: '—', po: '2:04:11',
        tekst: 'I started with a run-walk. What helped most was that the plan changed every week instead of staying the same through a bout of flu.' },
      { imie: 'Bartek, 41', cel: 'Marathon under 4 hours', przed: '4:18:02', po: '3:51:37',
        tekst: 'I ran a lot, but always at the same speed. Splitting the week into easy and hard sessions made more difference than adding mileage.' },
      { imie: 'Ola, 27', cel: '10 km without injury', przed: '58:40', po: '49:12',
        tekst: 'I started three times and finished three times with knee pain. This time strength work was in the plan from day one and it did not come back.' },
    ],
  },
  liczby: [
    { etykieta: 'Plans written', wartosc: '210+', opis: 'Since 2023.' },
    { etykieta: 'Races finished', wartosc: '94%', opis: 'Of athletes finish the race they trained for.' },
    { etykieta: 'Average gain', wartosc: '−7 min', opis: 'On the half marathon after 12 weeks.' },
    { etykieta: 'Reply time', wartosc: '24 h', opis: 'Maximum, on working days.' },
  ],
  faq: {
    tytul: 'Frequently asked questions',
    pytania: [
      { pytanie: 'Do I need a heart-rate watch?', odpowiedz: 'No. Without one we run the training by pace and perceived effort — the zones take longer to tune, but the plan works the same.' },
      { pytanie: 'What if I miss a week?', odpowiedz: 'Write to me and the next week gets rewritten. The plan is not a checklist; it is a proposal that has to fit your calendar.' },
      { pytanie: 'Does the plan include a diet?', odpowiedz: 'In the Marathon package — a fuelling strategy for the race itself and for long runs. We do not write full meal plans; that is a dietitian&rsquo;s job.' },
      { pytanie: 'How does contact with the coach work?', odpowiedz: 'Messages on working days, answered within 24 hours. The Marathon package adds a call every two weeks.' },
      { pytanie: 'Can I stop partway through?', odpowiedz: 'Yes. We refund the proportional share for the unused weeks, no questions asked.' },
    ],
  },
  kontakt: {
    tytul: 'Start with a conversation',
    opis: 'Twenty minutes about your goal and your calendar. No commitment — if the plan does not make sense in your timeframe, I will say so plainly.',
    cta: 'Write to the coach',
    nota: 'This is a demonstration site — a portfolio project, not a working service.',
  },
  stopka: {
    opis: 'Running plans written for one goal and one calendar. No off-the-shelf templates.',
    serwis: 'Site', kontakt: 'Contact', odpowiedz: 'Answered within one working day',
    miasto: 'Rzeszów, Poland — consultations online',
    prawa: 'EzPace. Portfolio project — demonstration site.', autor: 'Built by',
  },
};

const PL: Tresc = {
  sciezka: '/pl/',
  skipLink: 'Przejdź do treści głównej',
  nav: { plany: 'Plany', kalkulator: 'Kalkulator', efekty: 'Efekty', faq: 'FAQ', cta: 'Zacznij trenować' },
  menu: { otworz: 'Menu', zamknij: 'Zamknij', etykieta: 'Główna', etykietaMobil: 'Główna (telefon)' },
  jezyk: { etykieta: 'Wersja językowa', drugi: 'EN', drugiHref: '/', drugiLang: 'en' },
  hero: {
    nadtytul: 'Trening biegowy',
    tytul1: 'Plan cofnięty od daty startu,',
    tytul2: 'nie doklejony do niej',
    opis:
      'Dostajesz kalendarz z tempem dla każdej jednostki i zakresem tętna, a co tydzień poprawiamy ' +
      'go na podstawie tego, co faktycznie przebiegłeś. Bez gotowych szablonów z internetu.',
    cta1: 'Zobacz plany',
    cta2: 'Policz swoje tempo',
  },
  plany: {
    tytul: 'Plany', opis: 'Jeden cel, jeden termin, jedna cena. Bez abonamentu i bez przedłużania w nieskończoność.',
    wyrozniony: 'Najczęściej wybierany', wybieram: 'Wybieram', wybieramSr: 'plan {n}',
    lista: [
      { nazwa: 'Start', cena: '149 zł', opis: 'Pierwsze 5 km bez zadyszki. Plan na osiem tygodni dla osoby, która zaczyna.',
        punkty: ['8 tygodni', '3 jednostki w tygodniu', 'Strefy tętna', 'Plan w PDF i kalendarzu'] },
      { nazwa: 'Dystans', cena: '390 zł', opis: 'Półmaraton w konkretnym terminie. Plan cofnięty od daty startu.',
        punkty: ['12 tygodni', 'Cotygodniowa korekta po Twoich danych', 'Trening siłowy uzupełniający', 'Kontakt z trenerem', 'Plan taktyczny na dzień startu'], wyrozniony: true },
      { nazwa: 'Maraton', cena: '690 zł', opis: 'Pełne przygotowanie do 42 km wraz z żywieniem na trasie.',
        punkty: ['18 tygodni', 'Strategia żywieniowa na start', 'Dwa testy kontrolne', 'Rozmowa co dwa tygodnie', 'Plan regeneracji po starcie'] },
    ],
  },
  kalkulator: {
    tytul: 'Kalkulator tempa',
    opis: 'Wybierz dystans i cel czasowy — dostaniesz tempo na kilometr, prędkość i międzyczasy, które warto zapisać na opasce.',
    dystans: 'Dystans', cel: 'Cel czasowy', godziny: 'Godziny', minuty: 'Minuty',
    naZywo: 'Wynik przelicza się na bieżąco — nie ma przycisku do klikania.',
    tempo: 'Tempo', predkosc: 'Prędkość', celWynik: 'Cel', miedzyczasy: 'Międzyczasy',
    kilometr: 'Kilometr', czas: 'Czas',
    podpis: 'Międzyczasy dla dystansu {d} przy tempie {t} na kilometr',
    pusto: 'Podaj cel czasowy większy od zera, żeby zobaczyć tempo i międzyczasy.',
    dystanse: [{ nazwa: '5 km', km: 5 }, { nazwa: '10 km', km: 10 },
               { nazwa: 'Półmaraton', km: 21.0975 }, { nazwa: 'Maraton', km: 42.195 }],
  },
  jak: {
    tytul: 'Jak to działa',
    kroki: [
      { tytul: 'Rozmowa', opis: 'Dwadzieścia minut o tym, ile biegasz teraz, ile masz czasu w tygodniu i na kiedy jest cel. Bez tego plan jest zgadywaniem.' },
      { tytul: 'Plan', opis: 'Dostajesz kalendarz z jednostkami, tempem dla każdej z nich i zakresem tętna. Wszystko cofnięte od daty startu, nie doklejone do niej.' },
      { tytul: 'Korekta', opis: 'Co tydzień przesyłasz dane z zegarka. Jeśli tempo nie wychodzi albo wypada Ci trening — plan na kolejny tydzień to uwzględnia.' },
    ],
  },
  efekty: {
    tytul: 'Efekty', opis: 'Trzy osoby, trzy różne cele. Czasy są z chipa, nie z zegarka.',
    przed: 'Przed', po: 'Po',
    historie: [
      { imie: 'Marta, 34 lata', cel: 'Pierwszy półmaraton', przed: '—', po: '2:04:11',
        tekst: 'Zaczynałam od truchtu przeplatanego marszem. Najbardziej pomogło to, że plan zmieniał się co tydzień, zamiast zostać taki sam mimo grypy.' },
      { imie: 'Bartek, 41 lat', cel: 'Maraton poniżej 4 godzin', przed: '4:18:02', po: '3:51:37',
        tekst: 'Biegałem dużo, ale zawsze tak samo szybko. Rozbicie tygodnia na wolne i mocne jednostki zrobiło różnicę większą niż zwiększenie kilometrażu.' },
      { imie: 'Ola, 27 lat', cel: '10 km bez kontuzji', przed: '58:40', po: '49:12',
        tekst: 'Trzy razy zaczynałam i trzy razy kończyłam z bólem kolana. Tym razem w planie od początku były ćwiczenia siłowe i nie wróciło.' },
    ],
  },
  liczby: [
    { etykieta: 'Planów', wartosc: '210+', opis: 'Napisanych od 2023 roku.' },
    { etykieta: 'Ukończonych startów', wartosc: '94%', opis: 'Podopiecznych kończy zaplanowany bieg.' },
    { etykieta: 'Średnia poprawa', wartosc: '−7 min', opis: 'Na półmaratonie po 12 tygodniach.' },
    { etykieta: 'Kontakt', wartosc: '24 h', opis: 'Maksymalny czas odpowiedzi w dni robocze.' },
  ],
  faq: {
    tytul: 'Najczęstsze pytania',
    pytania: [
      { pytanie: 'Czy muszę mieć zegarek z pomiarem tętna?', odpowiedz: 'Nie musisz. Bez niego prowadzimy trening po tempie i odczuwanym wysiłku — wolniej dostrajamy strefy, ale plan działa tak samo.' },
      { pytanie: 'Co jeśli opuszczę tydzień treningów?', odpowiedz: 'Napisz, a kolejny tydzień dostaniesz przepisany. Plan nie jest listą do odhaczenia; jest propozycją, która ma się dopasować do Twojego kalendarza.' },
      { pytanie: 'Czy plan obejmuje dietę?', odpowiedz: 'W pakiecie Maraton — strategię żywieniową na sam start i długie wybiegania. Pełnego jadłospisu nie układamy; to praca dla dietetyka.' },
      { pytanie: 'Jak wygląda kontakt z trenerem?', odpowiedz: 'Wiadomości w dni robocze, odpowiedź do 24 godzin. W pakiecie Maraton dodatkowo rozmowa co dwa tygodnie.' },
      { pytanie: 'Czy mogę zrezygnować w trakcie?', odpowiedz: 'Tak. Zwracamy proporcjonalną część kwoty za niewykorzystane tygodnie, bez pytań o powód.' },
    ],
  },
  kontakt: {
    tytul: 'Zacznij od rozmowy',
    opis: 'Dwadzieścia minut o Twoim celu i kalendarzu. Bez zobowiązania — jeśli plan nie ma sensu w Twoim terminie, powiem to wprost.',
    cta: 'Napisz do trenera',
    nota: 'To serwis demonstracyjny — projekt portfolio, nie działająca usługa.',
  },
  stopka: {
    opis: 'Plany biegowe pisane pod jeden cel i jeden kalendarz. Bez gotowych szablonów z internetu.',
    serwis: 'Serwis', kontakt: 'Kontakt', odpowiedz: 'Odpowiedź w jeden dzień roboczy',
    miasto: 'Rzeszów, Polska — konsultacje online',
    prawa: 'EzPace. Projekt portfolio — serwis demonstracyjny.', autor: 'Autor:',
  },
};

export const TRESC: Record<Jezyk, Tresc> = { en: EN, pl: PL };
