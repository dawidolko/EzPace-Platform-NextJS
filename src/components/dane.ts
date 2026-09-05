/*
 * Tresc serwisu w jednym miejscu — patrz komentarz w EzScout.
 */

export type Plan = {
  nazwa: string;
  cena: string;
  opis: string;
  punkty: string[];
  wyrozniony?: boolean;
};

export const PLANY: Plan[] = [
  {
    nazwa: 'Start',
    cena: '149 zł',
    opis: 'Pierwsze 5 km bez zadyszki. Plan na osiem tygodni dla osoby, która zaczyna.',
    punkty: ['8 tygodni', '3 jednostki w tygodniu', 'Strefy tętna', 'Plan w PDF i kalendarzu'],
  },
  {
    nazwa: 'Dystans',
    cena: '390 zł',
    opis: 'Półmaraton w konkretnym terminie. Plan cofnięty od daty startu.',
    punkty: [
      '12 tygodni',
      'Cotygodniowa korekta po Twoich danych',
      'Trening siłowy uzupełniający',
      'Kontakt z trenerem',
      'Plan taktyczny na dzień startu',
    ],
    wyrozniony: true,
  },
  {
    nazwa: 'Maraton',
    cena: '690 zł',
    opis: 'Pełne przygotowanie do 42 km wraz z żywieniem na trasie.',
    punkty: [
      '18 tygodni',
      'Strategia żywieniowa na start',
      'Dwa testy kontrolne',
      'Rozmowa co dwa tygodnie',
      'Plan regeneracji po starcie',
    ],
  },
];

export const KROKI = [
  {
    tytul: 'Rozmowa',
    opis:
      'Dwadzieścia minut o tym, ile biegasz teraz, ile masz czasu w tygodniu ' +
      'i na kiedy jest cel. Bez tego plan jest zgadywaniem.',
  },
  {
    tytul: 'Plan',
    opis:
      'Dostajesz kalendarz z jednostkami, tempem dla każdej z nich i zakresem ' +
      'tętna. Wszystko cofnięte od daty startu, nie doklejone do niej.',
  },
  {
    tytul: 'Korekta',
    opis:
      'Co tydzień przesyłasz dane z zegarka. Jeśli tempo nie wychodzi albo ' +
      'wypada Ci trening — plan na kolejny tydzień to uwzględnia.',
  },
];

export const LICZBY = [
  { etykieta: 'Planów', wartosc: '210+', opis: 'Napisanych od 2023 roku.' },
  { etykieta: 'Ukończonych startów', wartosc: '94%', opis: 'Podopiecznych kończy zaplanowany bieg.' },
  { etykieta: 'Średnia poprawa', wartosc: '−7 min', opis: 'Na półmaratonie po 12 tygodniach.' },
  { etykieta: 'Kontakt', wartosc: '24 h', opis: 'Maksymalny czas odpowiedzi w dni robocze.' },
];

export const HISTORIE = [
  {
    imie: 'Marta, 34 lata',
    cel: 'Pierwszy półmaraton',
    przed: '—',
    po: '2:04:11',
    tekst:
      'Zaczynałam od truchtu przeplatanego marszem. Najbardziej pomogło to, ' +
      'że plan zmieniał się co tydzień, zamiast zostać taki sam mimo grypy.',
  },
  {
    imie: 'Bartek, 41 lat',
    cel: 'Maraton poniżej 4 godzin',
    przed: '4:18:02',
    po: '3:51:37',
    tekst:
      'Biegałem dużo, ale zawsze tak samo szybko. Rozbicie tygodnia na wolne ' +
      'i mocne jednostki zrobiło różnicę większą niż zwiększenie kilometrażu.',
  },
  {
    imie: 'Ola, 27 lat',
    cel: '10 km bez kontuzji',
    przed: '58:40',
    po: '49:12',
    tekst:
      'Trzy razy zaczynałam i trzy razy kończyłam z bólem kolana. Tym razem ' +
      'w planie od początku były ćwiczenia siłowe i nie wróciło.',
  },
];

export const PYTANIA = [
  {
    pytanie: 'Czy muszę mieć zegarek z pomiarem tętna?',
    odpowiedz:
      'Nie musisz. Bez niego prowadzimy trening po tempie i odczuwanym wysiłku — ' +
      'wolniej dostrajamy strefy, ale plan działa tak samo.',
  },
  {
    pytanie: 'Co jeśli opuszczę tydzień treningów?',
    odpowiedz:
      'Napisz, a kolejny tydzień dostaniesz przepisany. Plan nie jest listą do ' +
      'odhaczenia; jest propozycją, która ma się dopasować do Twojego kalendarza.',
  },
  {
    pytanie: 'Czy plan obejmuje dietę?',
    odpowiedz:
      'W pakiecie Maraton — strategię żywieniową na sam start i długie wybiegania. ' +
      'Pełnego jadłospisu nie układamy; to praca dla dietetyka.',
  },
  {
    pytanie: 'Jak wygląda kontakt z trenerem?',
    odpowiedz:
      'Wiadomości w dni robocze, odpowiedź do 24 godzin. W pakiecie Maraton ' +
      'dodatkowo rozmowa co dwa tygodnie.',
  },
  {
    pytanie: 'Czy mogę zrezygnować w trakcie?',
    odpowiedz:
      'Tak. Zwracamy proporcjonalną część kwoty za niewykorzystane tygodnie, ' +
      'bez pytań o powód.',
  },
];
