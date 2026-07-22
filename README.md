# Design Patterns TS

Colección de patrones de diseño (creacionales, estructurales y de comportamiento) implementados en TypeScript, con TDD.

## Requisitos

- Node.js 18+
- pnpm

## Instalación

```bash
pnpm install
```

## Scripts

| Comando            | Descripción                                  |
|---------------------|-----------------------------------------------|
| `pnpm dev`          | Ejecuta `src/index.ts` con recarga automática |
| `pnpm start`        | Ejecuta el proyecto una vez                   |
| `pnpm test`         | Corre los tests con Vitest                    |
| `pnpm test:watch`   | Corre los tests en modo watch                 |
| `pnpm build`        | Compila la librería (ESM + CJS + tipos)       |
| `pnpm lint`         | Verifica tipos sin emitir archivos            |

## Estructura

```
src/
├── creational/     # Singleton, Factory, Builder, Prototype...
├── structural/     # Adapter, Decorator, Facade...
├── behavioral/     # Strategy, Observer, Command...
└── index.ts        # Barrel de exports públicos
tests/              # Un archivo de test por patrón
```

## Convención

Cada patrón nuevo debe:
1. Tener su test en `tests/<patron>.test.ts` (escrito primero, TDD).
2. Vivir en la carpeta correspondiente a su categoría (`creational`, `structural`, `behavioral`).
3. Exportarse desde `src/index.ts`.
4. Incluir un comentario JSDoc explicando el problema que resuelve y un caso de uso típico.
