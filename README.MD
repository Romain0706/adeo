# 🐾 ADEO CLI

A simple Node.js command-line interface following hexagonal architecture. It allows you to:

- 🔍 Filter animals by name pattern.
- 🔢 Count people and animals, appending totals to names.

---

## 📦 Installation (Without Docker)

### 1. Prerequisites

- Node.js (LTS recommended)
- npm

### 2. Install dependencies

```bash
npm install
```

### 3. Run commands

🔍 Filter animals by pattern
```bash
node app.js --filter=ry
````

🔢 Count people and animals
```bash
node app.js --count
```

🔍🔢 Or combine both commands to filter and then count
```bash
node app.js --filter=ry --count
```

### 4. Run tests
```bash
npm test
```

## 🐳 Using Docker

### 1. Build the image

```bash
docker-compose build
```

### 2. Run commands

🔍 Filter by pattern
```bash
docker-compose run --rm app --filter=ry
```

🔢 Count mode
```bash
docker-compose run --rm app --count
```

🔍🔢 Filter and count
```bash
docker-compose run --rm app --filter=ry --count
```

### 3. Run tests

```bash
docker-compose run --rm test
```

## ✅ Testing

All tests run via Jest
