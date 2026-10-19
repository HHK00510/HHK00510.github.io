# DMARC Record Instructions (LP-6TDCQT)

## Finding
Lockpick finding `LP-6TDCQT`: The current DMARC record enforces `p=reject` but does not publish an aggregate report destination (`rua`), meaning delivery failure reports and spoofing attempts cannot be monitored.

## Current DNS Record
- **Host / Name**: `_dmarc.hundhalsakunskap.se`
- **Type**: `TXT`
- **Current Value**: `"v=DMARC1; p=reject"`

## Action for Domain Owner (DNS Registrar / DNS Host)
Log into your DNS provider (e.g. Loopia, Cloudflare, Inwx, or where hundhalsakunskap.se DNS is hosted) and update the `_dmarc` TXT record:

- **Host / Name**: `_dmarc` (or `_dmarc.hundhalsakunskap.se`)
- **Type**: `TXT`
- **TTL**: `3600` (or automatic/default)
- **New Value**:
  ```text
  v=DMARC1; p=reject; sp=reject; pct=100; rua=mailto:<report-address>
  ```

> Replace `<report-address>` with your intended destination email address:
> - Either a dedicated mailbox you monitor (e.g. `dmarc@hundhalsakunskap.se`), or
> - A free DMARC analysis service report address (such as Cloudflare DMARC Management, Postmark DMARC, or Valimail).
>
> If using an external domain address (e.g. a reporting service), that service will provide a verification TXT record to authorize receiving reports for `hundhalsakunskap.se`.
