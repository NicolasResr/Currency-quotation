# 💰 CURRENCY-QUOTATION 
Aplicação web que exibe a cotação de 50 criptomoedas em tempo real utilizando a API da CoinGecko. Desenvolvido com React e estilização customizada em CSS com tema escuro e responsivo.

---

## 🔍 Funcionalidades

✅ **Carrega 50 criptomoedas com dados atualizados em tempo real**  
✅ **Permite ordenação por:**
- Nome da moeda
- Preço
- Variação em 24 horas
- Volume em 24 horas  
✅ **Layout responsivo com tema escuro**  
✅ **Ícones visuais de ordenação** (↑ ↓ ↕)  

---

## 📡 API Utilizada

- **Base URL:** `https://api.coingecko.com/api/v3`
- **Endpoint:**

```bash
/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1
```

- 📄 [Documentação oficial da API CoinGecko](https://www.coingecko.com/en/api/documentation)

---

## 📂 Estrutura de Arquivos

```
src/
├── components/
│   └── CryptoList.jsx
│   └── index.css
├── services/
│   └── Api.js

```

---

## 🧑‍💻 Autor

Desenvolvido por [NicolasResr](https://github.com/NicolasResr)
