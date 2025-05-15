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

W pliku `.env` mamy możliwość ustawienia portu komunikacyjnego z przeglądarką (raczej mało przydatne, może zostać domyślny) oraz profilu przeglądarki. W nowszych wersjach Chrome należy utworzyć specjalny profil do korzystania z protokołu CDP, dlatego powinniśmy podać ścieżkę do folderu np. w Dokumentach - gdzie zostanie utworzony nowy profil np.:

```
CHROME_PROFILE="C:\Users\YourUsername\Documents\ChromeCDPProfile"
```

Do nowego profilu można się normalnie zalogować do konta Google i innych kont, będzie on przechowywać dane tak jak zwykłe profile do tej pory.
