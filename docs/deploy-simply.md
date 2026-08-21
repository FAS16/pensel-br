# Deploy til Simply.com via GitHub Actions

Workflowen `.github/workflows/deploy.yml` bygger siden og uploader `dist/` til dit webhotel via FTPS hver gang der pushes til `main` (kan også køres manuelt under fanen Actions).

## 1. Find FTP-oplysninger hos Simply.com
Logind på Simply.com → dit webhotel → **FTP-konti**. Du får:
- Server (fx `ftp.ditdomæne.dk` eller `sXX.simply.com`)
- Brugernavn
- Adgangskode
- Sti til webroden (typisk `/public_html/` eller `/www/`)

## 2. Opret GitHub Secrets
GitHub-repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Navn | Værdi |
|---|---|
| `FTP_SERVER` | fx `ftp.malerbrdr.dk` |
| `FTP_USERNAME` | dit FTP-brugernavn |
| `FTP_PASSWORD` | din FTP-adgangskode |
| `FTP_SERVER_DIR` | fx `/public_html/` (husk skråstreg i begge ender) |

## 3. Push
Push til `main` → Actions kører build + upload. Følg loggen under **Actions**.

## Noter
- `public/.htaccess` sikrer at React Router-URL'er (fx `/ydelser`) virker efter refresh, samt caching og gzip.
- Bruger FTPS (port 21 med kryptering). Understøtter din konto kun almindelig FTP, ændr `protocol: ftps` til `protocol: ftp`.
- Første deploy tager længst tid; derefter uploades kun ændrede filer.
- Vil du rydde webroden helt ved hver deploy, sæt `dangerous-clean-slate: true` (sletter alt i mappen først).
