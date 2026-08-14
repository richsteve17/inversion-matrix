# 🪞 Inversion Matrix v10

**Adversarial AI Prompt Research & Encoding Workbench**

A zero-dependency React PWA built to test safety filters, prompt drift, token boundary effects, and adversarial jailbreak patterns across LLMs.

---

## ⚡ Capabilities
- **Multi-Scheme Prompt Transformation**:
  - ROT13 Cipher
  - LeetSpeak Encoding
  - Homoglyph Substitution (Cyrillic / Unicode lookalikes)
  - Safe Base64 encoding/decoding
- **Cross-Model Testing Panel**: Rapid prompt generation and diffing for adversarial safety research.
- **Offline PWA**: Instant browser loading via Service Worker.

---

## 🚀 Usage
Open `index.html` in any modern web browser or serve with:
```bash
python3 -m http.server 8080
```
