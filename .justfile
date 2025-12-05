# Variables
proyecto := "Mi Primer Proyecto"

# Comando por defecto
default:
    @just --list

# Modo desarrollo (Agregamos --env-file=.env)
dev:
    @echo "🚀 Iniciando {{proyecto}}..."
    npx tsx watch --env-file=.env index.ts

# Formatear código (JS/TS)
fix:
    npx prettier --write .

# Limpiar
limpiar:
    rm -rf node_modules
    @echo "🗑️  Carpeta node_modules eliminada"

# Reinstalar
reinstalar: limpiar
    npm install

build:
    @echo "🏗️  Compilando proyecto..."
    # 1. Borramos la carpeta dist vieja por si acaso
    rm -rf dist
    # 2. Ejecutamos el compilador de TypeScript
    npx tsc
    @echo "✅ Build completado en la carpeta /dist"

# Ejecutar en producción (usa Node puro, no tsx)
start: build
    @echo "🚀 Arrancando servidor de producción..."
    node --env-file=.env index.js