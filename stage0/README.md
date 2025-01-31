# HNG12 Stage 0 API

This is a simple API for HNG12 Stage 0 that returns JSON with the email, current UTC datetime, and the GitHub repository link.

## 🚀 Live API URL

[https://hng-stage0-umoru.vercel.app/](https://hng-stage0-umoru.vercel.app/)

## 📌 API Endpoint

`GET /`

### 🔹 Response Format (200 OK)

```json
{
  "email": "my-email@example.com",
  "current_datetime": "2025-01-31T15:47:45.727Z",
  "github_url": "https://github.com/davidumoru/hng/tree/main/stage0"
}
```

## 🛠️ Setup Locally

1. Clone the repository  

   ```bash
   git clone https://github.com/davidumoru/hng.git
   cd hng
   cd stage0
   ```

2. Install dependencies  

   ```bash
   npm install
   ```

3. Run the server  

   ```bash
   npm start
   ```

4. Visit `http://localhost:3000/`

## 💼 Hire Node.js Developers

[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
