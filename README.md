<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# 🛍️ Maria B. Homepage Clone

A fully responsive clone of the **Maria B.** fashion brand homepage, built with modern frontend technologies. This project showcases a pixel‑perfect implementation of the UI, including a navbar, hero slider, category grids, trending products carousel, and footer – all styled with Tailwind CSS.

## ✨ Features

- 🎨 **Pixel‑perfect UI** – Faithfully replicates the Maria B. website design.
- 📱 **Fully responsive** – Works seamlessly on mobile, tablet, and desktop.
- 🧩 **Component‑based architecture** – Reusable and maintainable React components.
- ⚡ **Smooth animations** – Framer Motion for entrance effects and hover interactions.
- 🎠 **Interactive product sliders** – Swiper.js for touch‑enabled horizontal scrolling.
- 🖼️ **Dynamic categories** – Tabbed product display with real data structure.
- ♿ **Accessibility** – Semantic HTML and ARIA labels for better usability.

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **TypeScript** | Type safety & better DX |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility‑first styling |
| **Swiper** | Touch slider component |
| **Framer Motion** | Animation library |
| **React Icons** | Icon set |

## 🎯 Key Learnings
- Building a complex homepage from scratch with component composition.
- Implementing responsive designs using Tailwind CSS breakpoints.
- Managing state and props with TypeScript interfaces.
- Integrating third‑party libraries like Swiper and Framer Motion.
- Structuring a scalable React project.
>>>>>>> 25b2f436c2de6f28f4a91f91e9e1a0aeaa5bedbd
