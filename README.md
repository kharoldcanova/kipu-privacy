# Kipu — Política de privacidad

Sitio estático y bilingüe con la política de privacidad oficial de **Kipu**, la
aplicación de finanzas personales que funciona sin conexión y guarda los datos
en el dispositivo del usuario.

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
│   └── images/            # marca oficial de Kipu y favicon
├── privacy-policy/
│   ├── es/index.html
│   └── en/index.html
├── README.md
├── .gitignore
└── .nojekyll
```

## Ejecutar en local

No requiere compilación ni dependencias. Abrí el repositorio en un servidor
estático para que las rutas relativas y el cambio de idioma funcionen:

```bash
cd ~/Work/personal/kipu-privacy
python3 -m http.server 8000
# luego abrir http://localhost:8000/
```

## Cómo actualizar las políticas

1. Editá **ambas** versiones (`privacy-policy/es/index.html` y
   `privacy-policy/en/index.html`). Mantené los identificadores de sección
   (`s01` … `s16`) iguales en ambos idiomas para que el selector de idioma
   conserve la sección al cambiar.
2. Mantené sincronizadas las fechas, los datos de contacto y las afirmaciones.
3. Completá los marcadores `<span class="pending">[...]</span>` con los datos
   del responsable antes de publicar.
4. Actualizá la fecha de «última actualización» en ambas versiones y en el pie
   de página.
5. No agregues secciones para afirmar que existe una función que Kipu no
   implementa. Toda afirmación debe tener respaldo en la auditoría de
   privacidad.

## Publicar cambios

1. Revisá el diff con `git status` y `git diff`.
2. Creá un commit descriptivo.
3. Ejecutá `git push`.
4. GitHub Pages publica automáticamente desde `main` / raíz.

No se incluye analítica, cookies ni formularios en el sitio.

## Licencia

El código del sitio se publica bajo los términos que elijas para este
repositorio. La marca, el nombre y los assets gráficos de Kipu pertenecen a
su titular.
