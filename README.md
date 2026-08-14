# 🪞 Inversion Matrix v10

**OpenRouter Multi-Model Adversarial Research & Refusal Forensics Workbench**

A zero-dependency, local-first React PWA designed for red-teaming frontier AI models, mapping safety filter boundaries, analyzing speculative sampling divergence (SSD), and stress-testing latent refusal mechanisms.

---

## ⚡ Core Architecture & Capabilities

### 1. Vector Compilation Engine
Compiles raw research intents into structural attack vectors tailored to specific model families and tokenizers:
- **The Stack**: Multi-layer hybrid vector embedding intent inside dense technical context to bypass early attention gating.
- **Trojan-Speak**: Masks payloads inside simulated tool-outputs, forensic logs, and system diagnostic blocks (exploiting agentic models' elevated trust in execution outputs).
- **GPT Schema Inversion**: Constrains generations into rigid JSON schemas (`instruction` / `response`), shifting model attention from safety guardrails to syntax validation.
- **Fable Cascade**: Multi-layered hypothetical reasoning frameworks designed for heavily aligned models.
- **Synthetic Multi-Turn History**: Injects simulated prior conversational turns to prime the model's context window.

### 2. Multi-Scheme Obfuscation Pipeline
- **Homoglyph Substitution**: Replaces ASCII characters with Cyrillic / Unicode lookalikes (`а`, `с`, `е`, `і`, `р`, `ѕ`, `х`, `у`) to evade regex and static token matchers without degrading semantic readability.
- **ROT13 & LeetSpeak**: Algorithmic symbol substitution to test sub-word tokenization boundaries.
- **Safe Base64**: URL-safe base64 encoding/decoding for raw payload delivery.

### 3. Refusal Forensics & Decoder (`runDecipher`)
Diagnoses exact model failure points and refusal mechanisms:
- **Stage-1 Stateless Filter**: Keyword intercepts, regex pattern matching, and attention dilution hard gating.
- **Stage-2 Constitutional Classifier**: Multi-tiered semantic filtering and refusal classifiers.
- **Speculative Sampling Divergence (SSD Intercept)**: Draft-verifier token distribution divergence during speculative decoding.
- **API Prefix Override**: Validation layers detecting injected assistant pre-fills.
- **Automated Remediation Engine**: Recommends immediate vector adjustments based on observed refusal mode (e.g., forcing Temperature 0, adjusting Jaccard target, or embedding intent 400–600 tokens deep).

### 4. Live-Fire OpenRouter Test Harness
- Direct API integration with OpenRouter to benchmark vectors against any model (Claude 3.5/3.7, GPT-4o, Gemini 2.5/3.5, Qwen 2.5, DeepSeek R1).
- Single-tap escalation: feed live refusals directly into the Decoder tab for real-time remediation analysis.

### 5. Audit Ledger & Statistical Matrix
- Local-first telemetry tracking compliance vs refusal rates per model, method, and obfuscation tier.
- Persistent session storage in `localStorage`.

---

## 🛠️ Stack & Design
- **Frontend**: Zero-dependency React 18 (via UMD), Babel Standalone, Tailwind CSS
- **Platform**: Offline-first Progressive Web App (PWA) with Service Worker caching (`sw.js`) and Web App Manifest (`manifest.json`)
- **API**: OpenRouter Chat Completions API

---

## 🚀 Quick Start

### Local Preview
Serve with any static file server:
```bash
# Clone the repository
git clone https://github.com/richsteve17/inversion-matrix.git
cd inversion-matrix

# Serve locally
python3 -m http.server 8080
```
Open `http://localhost:8080` in your browser.

### Using Live-Fire Mode
1. Tap the 🔑 icon in the header.
2. Enter your [OpenRouter API Key](https://openrouter.ai/keys) (stored locally in browser `localStorage`).
3. Select your target model, craft your vector, and execute.
