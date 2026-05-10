# Hund Hälsa Kunskap

Webbplats om hundträning, byggd med [Hugo](https://gohugo.io/) och temat [Bootstrap-BP](https://github.com/spech66/bootstrap-bp-hugo-theme).

**Live**: https://hhk00510.github.io/

## Lokal utveckling

```bash
# Starta lokal server
hugo server --source /Users/daniel/hhk

# Bygg siten
hugo --source /Users/daniel/hhk
```

Siten öppnas på http://localhost:1313/

## Deployment

Siten deployas automatiskt via GitHub Actions vid push till `main`-branchen.

**Flöde**: Push till `main` → GitHub Actions bygger med Hugo → Deployas till GitHub Pages

Workflowen finns i `.github/workflows/hugo.yml`.

### Manuell deploy

Du kan också trigga en deploy manuellt via GitHub:
1. Gå till https://github.com/hhk00510/hhk00510.github.io/actions
2. Välj "Deploy Hugo site to Pages"
3. Klicka "Run workflow"

## Admin-gränssnitt (Sveltia CMS)

Siten har ett webbaserat admin-gränssnitt för att hantera innehåll utan att behöva redigera filer direkt.

### Logga in

1. Gå till https://hhk00510.github.io/admin/
2. Logga in med en GitHub Personal Access Token (PAT) för kontot `hhk00510`
3. PAT:en behöver scopet **`repo`**

### Skapa en ny PAT

1. Gå till https://github.com/settings/tokens/new
2. Ge den ett namn (t.ex. "Sveltia CMS")
3. Välj scopet **repo**
4. Klicka "Generate token" och kopiera tokenen

### Hantera innehåll

I admin-gränssnittet kan du:

- **Blogg**: Skapa, redigera och ta bort blogginlägg. Varje inlägg har titel, datum, taggar, kategorier och innehåll.
- **Sidor**: Redigera innehållet på de fasta sidorna:
  - Om oss
  - Kurser
  - Priser
  - Schema
  - Kontakt

### Ladda upp bilder

Bilder som laddas upp via admin-gränssnittet sparas i `static/img/uploads/` och blir tillgängliga på `/img/uploads/` på siten.

## Projektstruktur

```
hhk/
├── hugo.toml              # Huvudkonfiguration
├── assets/
│   ├── css/custom.css     # Egna CSS-anpassningar
│   └── sass/main-skyblue.scss  # Sky blue färgtema
├── content/
│   ├── _index.md          # Startsida
│   ├── about.md           # Om oss
│   ├── kurser.md          # Kurser
│   ├── priser.md          # Priser
│   ├── schema.md          # Schema
│   ├── kontakt.md         # Kontakt
│   └── post/              # Blogginlägg
├── i18n/sv.toml           # Svenska översättningar
├── layouts/index.html     # Startsida med toppbild
├── static/
│   ├── admin/             # Sveltia CMS
│   └── img/               # Bilder
└── themes/bootstrap-bp/   # Tema
```

## Grafisk profil

- **Bakgrund**: Vit (#FFFFFF)
- **Temafärg**: Sky blue (#90E0F9)
- **Toppbild**: toppbild02.jpg på startsidan
