---
title: "Kontakt"
type: "page"
---

Kontakta oss gärna! Fyll i formuläret nedan så återkommer vi så snart vi kan.

<form action="https://formsubmit.co/kristin@hundhalsakunskap.se" method="POST" class="mb-4">
  <input type="hidden" name="_subject" value="Nytt meddelande från HHK-webbplatsen">
  <input type="hidden" name="_captcha" value="true">
  <input type="hidden" name="_template" value="table">
  <input type="text" name="_honey" style="display:none">

  <div class="mb-3">
    <label for="name" class="form-label">Namn</label>
    <input type="text" class="form-control" id="name" name="name" required>
  </div>

  <div class="mb-3">
    <label for="email" class="form-label">E-postadress</label>
    <input type="email" class="form-control" id="email" name="email" required>
  </div>

  <div class="mb-3">
    <label for="subject" class="form-label">Ämne</label>
    <input type="text" class="form-control" id="subject" name="subject" required>
  </div>

  <div class="mb-3">
    <label for="message" class="form-label">Meddelande</label>
    <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
  </div>

  <div class="mb-3">
    <label class="form-label">Hur hörde du talas om Hund Hälsa Kunskap?</label>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name="source" value="Instagram" id="source-instagram">
      <label class="form-check-label" for="source-instagram">Instagram</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name="source" value="Flygblad/affisch" id="source-flygblad">
      <label class="form-check-label" for="source-flygblad">Flygblad/affisch</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name="source" value="Rekommendation från en vän" id="source-rekommendation">
      <label class="form-check-label" for="source-rekommendation">Rekommendation från en vän</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name="source" value="Sökresultat" id="source-sok">
      <label class="form-check-label" for="source-sok">Sökresultat</label>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Skicka</button>
</form>
