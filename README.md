# API de Catálogo de Productos

Esta es una API RESTful desarrollada con NestJS que proporciona funcionalidades para la gestión de productos y autenticación de usuarios.

## Tecnologías Utilizadas

- NestJS
- SQLite [[memory:3365118]]
- TypeORM
- JWT para autenticación
- Swagger para documentación
- Jest para pruebas

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Allmighty95/Prueba-Tecnica-Motai.git
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar la aplicación:
```bash
npm run start:dev
```

La aplicación estará disponible en `http://localhost:3000`

## Endpoints

### Autenticación

#### Registro de Usuario
- **POST** `/auth/register`
- Body:
```json
{
    "email": "usuario@ejemplo.com",
    "password": "password123"
}
```

#### Inicio de Sesión
- **POST** `/auth/login`
- Body:
```json
{
    "email": "usuario@ejemplo.com",
    "password": "password123"
}
```
- Respuesta: Token JWT

### Productos

> Nota: Todos los endpoints de productos requieren autenticación mediante token JWT.

#### Crear Producto
- **POST** `/products`
- Headers:
  - Authorization: Bearer {token}
- Body:
```json
{
    "name": "Laptop Gaming",
    "description": "Laptop gaming de última generación",
    "price": 1299.99
}
```

#### Obtener Todos los Productos
- **GET** `/products`
- Headers:
  - Authorization: Bearer {token}

#### Obtener Producto por ID
- **GET** `/products/{id}`
- Headers:
  - Authorization: Bearer {token}

#### Actualizar Producto
- **PATCH** `/products/{id}`
- Headers:
  - Authorization: Bearer {token}
- Body:
```json
{
    "price": 1199.99
}
```

#### Eliminar Producto
- **DELETE** `/products/{id}`
- Headers:
  - Authorization: Bearer {token}

## Pruebas con Postman

1. Importar la colección de Postman proporcionada
2. Configurar el ambiente "Local" con las variables:
   - `jwt_token`
   - `product_id`
3. Ejecutar el endpoint de registro
4. Iniciar sesión para obtener el token JWT (se guardará automáticamente)
5. Usar los endpoints de productos

## Pruebas con Thunder Client

1. Abrir Thunder Client en VS Code
2. Importar la colección desde `thunder-tests/thunderclient.json`
3. Importar el ambiente desde `thunder-tests/thunderEnvironment.json`
4. Seguir el mismo flujo que en Postman

## Estructura del Proyecto

```
product-catalog/
├── src/
│   ├── auth/           # Módulo de autenticación
│   ├── products/       # Módulo de productos
│   ├── config/         # Configuraciones
│   ├── app.module.ts
│   └── main.ts
├── test/              # Pruebas
├── thunder-tests/     # Configuración de Thunder Client
└── README.md
```

## Scripts Disponibles

- `npm run start:dev`: Inicia la aplicación en modo desarrollo
- `npm run build`: Compila la aplicación
- `npm run start:prod`: Inicia la aplicación en modo producción
- `npm run test`: Ejecuta las pruebas
- `npm run test:e2e`: Ejecuta las pruebas end-to-end

## Características

- ✅ Autenticación JWT
- ✅ CRUD completo de productos
- ✅ Validación de datos
- ✅ Documentación con Swagger
- ✅ Pruebas unitarias e integración
- ✅ Base de datos SQLite
- ✅ Manejo de errores
- ✅ Protección de rutas

## Documentación API

La documentación completa de la API está disponible en:
- Swagger UI: `http://localhost:3000/api`
- OpenAPI JSON: `http://localhost:3000/api-json`

