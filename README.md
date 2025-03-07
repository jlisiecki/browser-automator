# Autmatyzator Przeglądarki

## Instalacja:

```
git clone https://github.com/jlisiecki/browser-automator.git
cd browser-automator
npm i
```

## Uruchomienie w w formie dev:

```
npm run dev
```

## Build i uruchomienie w formie produkcyjnej:

```
npm run build
npm run start
```

## Plik .env

W pliku `.env` mamy możliwość ustawienia portu komunikacyjnego z przeglądarką (raczej mało przydatne, może zostać domyślny) oraz profilu przeglądarki - aby ustalić nazwę prodilu należy w Chrome wejść pod adres:

`chrome://version/`

Nazwa profilu to ostatni folder ścieżki `Ścieżka profilu:` - zazwyczaj `Default` lub `Profile 1`, `Profile 2` itd.
