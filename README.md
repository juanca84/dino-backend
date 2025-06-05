

# 🦕 Dino Backend

## ⚙️ Requisitos

- **Node.js 20.x**  
  Verifica tu versión con:
  ```sh
  node -v
  ```
- **PostgreSQL** (o el motor de base de datos que uses)

---

## 🚀 Levantar el proyecto

1. **Instala dependencias**
   ```sh
   npm install
   ```

2. **Copia el archivo de ejemplo `.env.sample` y renómbralo a `.env`:**
   ```sh
   cp .env.sample .env
   ```

   Luego edita el archivo `.env` con los valores de tu base de datos:

   ```env
   # Dirección del host de la base de datos (por ejemplo: localhost o IP del servidor)
   DB_HOST=localhost

   # Puerto de la base de datos (por defecto para PostgreSQL: 5432)
   DB_PORT=5432

   # Usuario de la base de datos
   DB_USERNAME=tu_usuario

   # Contraseña de la base de datos
   DB_PASSWORD=tu_contraseña

   # Nombre de la base de datos
   DB_DATABASE=tu_base
   ```

   > **Nota:** No subas tu archivo `.env` al repositorio. Usa siempre `.env.sample` como plantilla para compartir la configuración necesaria.

3. **Inicia el servidor en modo desarrollo:**
   ```sh
   npm run dev
   ```

4. **Inicia el servidor en modo producción (después de compilar):**
   ```sh
   npm run build
   npm start
   ```

---

## 🛠️ Migraciones con TypeORM

### Generar una nueva migración

```sh
npx typeorm-ts-node-commonjs migration:generate src/migration/NombreDeLaMigracion -d src/data-source.ts
```
> Cambia `NombreDeLaMigracion` por un nombre descriptivo, por ejemplo: `InitDinosaur`.

### Ejecutar las migraciones pendientes

```sh
npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts
```

### Revertir la última migración (opcional)

```sh
npx typeorm-ts-node-commonjs migration:revert -d src/data-source.ts
```

---

## 📁 Estructura recomendada

```
dino-backend/
├── src/
│   ├── entity/
│   │   └── Dinosaur.ts
│   ├── migration/
│   │   └── ... (archivos de migración)
│   ├── data-source.ts
│   └── index.ts
├── .env
├── package.json
├── tsconfig.json
└── ...
```

---