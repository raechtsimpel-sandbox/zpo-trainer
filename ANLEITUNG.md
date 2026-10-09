# Rächt Simpel: So pflegst du die Webseite

## Neue Folge veröffentlichen

1. Auf github.com dein Repository öffnen und in den Ordner `_folgen` wechseln.
2. **Add file → Create new file** wählen.
3. Als Dateinamen das Thema in Kleinbuchstaben mit Bindestrichen eingeben, am Schluss `.md`.
   Beispiel: `kuendigung-waehrend-krankheit.md`. Keine Umlaute, keine Leerzeichen.
   Der Dateiname wird zur Adresse: `rächtsimpel.ch/folgen/kuendigung-waehrend-krankheit/`
4. Den Inhalt von `vorlagen/folge-vorlage.md` hineinkopieren und ausfüllen.
5. **Commit changes** klicken. Nach ein bis zwei Minuten ist alles online.

Automatisch aktualisiert werden dabei: die neuesten Folgen auf der Startseite, die Übersicht
unter `/folgen/`, die «Weiteren Folgen» auf jeder Folgenseite und die Sitemap für Google.

## Folge ohne Text

Wenn du unterhalb der zweiten `---`-Zeile nichts schreibst, entsteht keine eigene Seite.
Die Karte der Folge führt dann direkt zu Spotify. Sobald du später Text ergänzt,
bekommt die Folge automatisch ihre eigene Seite.

## Schreibregeln für den Text

- `## Überschrift` ergibt einen Zwischentitel
- Leerzeile = neuer Absatz
- `- Punkt` ergibt eine Aufzählung
- `[Linktext](https://adresse)` ergibt einen Link
- `**fett**` ergibt fett

Enthält eine Angabe im oberen Block einen Doppelpunkt, setze sie in Anführungszeichen,
also `titel: "ZPO: Zuständigkeit"`.

## Was wo liegt

| Datei / Ordner | Zweck |
|---|---|
| `_folgen/` | Eine Datei pro Folge. Hier arbeitest du normalerweise. |
| `vorlagen/folge-vorlage.md` | Kopiervorlage für neue Folgen |
| `index.html` | Startseite |
| `folgen.html` | Übersicht aller Folgen |
| `datenschutz.html` | Impressum und Datenschutzerklärung |
| `_layouts/folge.html` | Aufbau einer Folgenseite (einmal ändern, gilt für alle) |
| `_includes/` | Kopf, Fuss und Folgenkarte, von allen Seiten gemeinsam genutzt |
| `erlass-guesser.html` | Spielseite (Erlass-Guesser und Delikt-Sprint) |
| `assets/folgen.css` | Gestaltung der Folgenseiten |
| `assets/spiele.css` | Gestaltung der Spielseite |
| `_config.yml`, `sitemap.xml`, `robots.txt` | Technik, in der Regel nicht anfassen |

## Wenn etwas nicht erscheint

Unter dem Reiter **Actions** im Repository siehst du, ob der letzte Aufbau der Seite
geklappt hat. Ein rotes Kreuz bedeutet meist einen Tippfehler im oberen Block einer Folgendatei
(fehlendes Anführungszeichen, fehlender Doppelpunkt).
