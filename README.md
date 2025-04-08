## 🔍 Funcionalidades

- ✅ **Carrega 50 criptomoedas** com dados atualizados em tempo real
- ✅ **Permite ordenação por:**
  - 🔤 Nome da moeda
  - 💵 Preço
  - 📈 Variação em 24 horas
  - 📊 Volume em 24 horas
- ✅ **Layout responsivo com tema escuro**
- ✅ **Ícones visuais para ordenação** (↑ ↓ ↕)

---

## 📡 API Utilizada

- **Base URL:** [`https://api.coingecko.com/api/v3`](https://api.coingecko.com/api/v3)
- **Endpoint utilizado:**
  ```bash
  /coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1
  ```
- **Documentação oficial da API:**  
  🔗 [https://www.coingecko.com/en/api/documentation](https://www.coingecko.com/en/api/documentation)

---

## 🖼️ Preview

> _Adicione aqui uma imagem ilustrativa do app rodando (screenshot)._

---

## 📂 Estrutura de Arquivos

```plaintext
src/
├── components/
│   └── CryptoList.jsx
├── services/
│   └── Api.js
├── styles/
│   └── CryptoList.css
```

---

## 🧑‍💻 Autor

Desenvolvido por [NicolasResr](https://github.com/NicolasResr)

---

## 📄 Licença

Este projeto está licenciado sob os termos da **MIT License**.
