# Kipu — Política de privacidad

Sitio estático y bilingüe con la política de privacidad oficial de **Kipu**, la
aplicación de finanzas personales y de negocio que funciona sin conexión y guarda
los datos en el dispositivo del usuario.

Publicado con GitHub Pages desde la rama `main`.

## URLs previstas

- Página de inicio: `https://kharoldcanova.github.io/kipu-privacy/`
- Español: `https://kharoldcanova.github.io/kipu-privacy/privacy-policy/es/`
- English: `https://kharoldcanova.github.io/kipu-privacy/privacy-policy/en/`

## Estructura

```text
kipu-privacy/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── fonts/             # Plus Jakarta Sans (SIL OFL 1.1, ver OFL.txt)
│   └── images/            # marca oficial de Kipu, favicon e imagen para compartir
├── privacy-policy/
│   ├── es/index.html
│   └── en/index.html
├── README.md
├── .gitignore
└── .nojekyll
```

## Ejecutar en local

No requiere compilación ni dependencias. Abre el repositorio en un servidor
estático para que las rutas relativas y el cambio de idioma funcionen:

```bash
cd ~/Work/personal/kipu-privacy
python3 -m http.server 8000
# luego abrir http://localhost:8000/
```

## Cómo actualizar las políticas

1. Edita **ambas** versiones (`privacy-policy/es/index.html` y
   `privacy-policy/en/index.html`). Mantén los identificadores de sección
   (`s01` … `s18`) iguales en ambos idiomas para que el selector de idioma
   conserve la sección al cambiar.
2. Mantén sincronizadas las fechas, los datos de contacto y las afirmaciones.
3. Completa los marcadores `<span class="pending">[...]</span>` con los datos
   del responsable antes de publicar.
4. Actualiza la fecha de «última actualización» en ambas versiones y en el pie
   de página.
5. No agregues secciones para afirmar que existe una función que Kipu no
   implementa. Toda afirmación debe tener respaldo en el código de la app
   (manifiesto fusionado de release, dependencias y funciones).
6. Usa español latinoamericano neutro con «tú», sin voseo.

## Identidad visual

Los colores, radios y la tipografía copian los de la app (`lib/app/theme/` en el
repositorio de Kipu). Los recursos de marca derivan de
`assets/icon/khipu_master.svg` de la app; no se redibujan:

- `assets/images/khipu-mark.svg`: marca (cuadrado de tinta, igual que
  `KipuMark` y el splash). También es el favicon SVG.
- `assets/images/khipu-master.svg`: icono del launcher a lienzo completo.
- `favicon-32.png` y `apple-touch-icon.png` (180 px): exportados con
  `rsvg-convert` desde esos SVG.
- `og-image.png` (1200 × 630): marca y título en Plus Jakarta Sans, generado con
  ImageMagick.

Si cambia el icono de la app, vuelve a copiar el SVG maestro y regenera los PNG.

## Publicar cambios

1. Revisa el diff con `git status` y `git diff`.
2. Crea un commit descriptivo.
3. Ejecuta `git push`.
4. GitHub Pages publica automáticamente desde `main` / raíz.

No se incluye analítica, cookies ni formularios en el sitio.

## Licencia

El código del sitio se publica bajo los términos que elijas para este
repositorio. La marca, el nombre y los assets gráficos de Kipu pertenecen a
su titular.
