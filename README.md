# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Update Logs:

-07/05/2024

--Added project, some redesign in projects section

-12/04/2024

--Cursor updates, project updates

--Major revisions, added transactions, adjusted hero section mobile view

--Adjusted cursor a little

-11/04/2024

--Updated functionality of Contact Form

--Major mouse logic overhaul

--Some design changes

-10/04/2024

--Updated custom domain, migrated this site.

--Added some content (links ref and skill)

-09/04/2024

--Added Pharmascanner Project content

--Added resume download option on mobile navbar, currently fixing mobile navbar

-08/04/2024

--Footer section started

-07/04/2024

--Fixed cursor lag

--Somewhat fixed preloader layout on mobile

-06/04/2024

--Minor upgrades

-05/04/2024

--Created projects section

--Updated some animations

--Upgraded mouse cursor

--Created contacts section

-04/04/2024

--Upgrades to skillcard animations

-03/04/2024

--Slight changes to mobile and desktop layout of skills component

-02/04/2024

--Overall project Updated

