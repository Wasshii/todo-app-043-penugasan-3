This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
frontend
├─ app
│  ├─ (auth)
│  │  ├─ login
│  │  │  ├─ components
│  │  │  │  └─ LoginForm.tsx
│  │  │  └─ page.tsx
│  │  └─ register
│  │     ├─ components
│  │     │  └─ RegisterForm.tsx
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ cards
│  │  │  └─ basic-card.tsx
│  │  ├─ TodoForm.tsx
│  │  ├─ TodoItem.tsx
│  │  ├─ TodoList.tsx
│  │  └─ ui
│  │     ├─ badge.tsx
│  │     ├─ button.tsx
│  │     ├─ container.tsx
│  │     ├─ input.tsx
│  │     └─ textarea.tsx
│  ├─ error.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ loading.tsx
│  ├─ page.tsx
│  └─ task
│     └─ [id]
│        ├─ components
│        │  ├─ TaskDetailCard.tsx
│        │  └─ TaskNotFound.tsx
│        └─ page.tsx
├─ eslint.config.mjs
├─ lib
│  ├─ todos.ts
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ fonts
│  │  └─ satoshi
│  │     ├─ Satoshi-Bold.woff2
│  │     ├─ Satoshi-Medium.woff2
│  │     ├─ Satoshi-Regular.woff2
│  │     ├─ Satoshi-Variable.ttf
│  │     └─ Satoshi-Variable.woff2
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ cmlabs-theme.css
├─ tsconfig.json
└─ types
   └─ todo.ts

```
```
frontend
├─ app
│  ├─ (auth)
│  │  ├─ login
│  │  │  ├─ components
│  │  │  │  └─ LoginForm.tsx
│  │  │  └─ page.tsx
│  │  └─ register
│  │     ├─ components
│  │     │  └─ RegisterForm.tsx
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ cards
│  │  │  └─ basic-card.tsx
│  │  ├─ TodoForm.tsx
│  │  ├─ TodoItem.tsx
│  │  ├─ TodoList.tsx
│  │  └─ ui
│  │     ├─ badge.tsx
│  │     ├─ button.tsx
│  │     ├─ container.tsx
│  │     ├─ input.tsx
│  │     └─ textarea.tsx
│  ├─ error.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ loading.tsx
│  ├─ page.tsx
│  └─ task
│     └─ [id]
│        ├─ components
│        │  ├─ TaskDetailCard.tsx
│        │  └─ TaskNotFound.tsx
│        └─ page.tsx
├─ eslint.config.mjs
├─ lib
│  ├─ todos.ts
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ fonts
│  │  └─ satoshi
│  │     ├─ Satoshi-Bold.woff2
│  │     ├─ Satoshi-Medium.woff2
│  │     ├─ Satoshi-Regular.woff2
│  │     ├─ Satoshi-Variable.ttf
│  │     └─ Satoshi-Variable.woff2
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ cmlabs-theme.css
├─ tsconfig.json
└─ types
   └─ todo.ts

```
```
frontend
├─ app
│  ├─ (auth)
│  │  ├─ login
│  │  │  ├─ components
│  │  │  │  └─ LoginForm.tsx
│  │  │  └─ page.tsx
│  │  └─ register
│  │     ├─ components
│  │     │  └─ RegisterForm.tsx
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ cards
│  │  │  └─ basic-card.tsx
│  │  ├─ TodoForm.tsx
│  │  ├─ TodoItem.tsx
│  │  ├─ TodoList.tsx
│  │  └─ ui
│  │     ├─ badge.tsx
│  │     ├─ button.tsx
│  │     ├─ container.tsx
│  │     ├─ input.tsx
│  │     └─ textarea.tsx
│  ├─ error.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ loading.tsx
│  ├─ page.tsx
│  └─ task
│     └─ [id]
│        ├─ components
│        │  ├─ TaskDetailCard.tsx
│        │  └─ TaskNotFound.tsx
│        └─ page.tsx
├─ eslint.config.mjs
├─ lib
│  ├─ todos.ts
│  └─ utils.ts
├─ next.config.tsp
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ fonts
│  │  └─ satoshi
│  │     ├─ Satoshi-Bold.woff2
│  │     ├─ Satoshi-Medium.woff2
│  │     ├─ Satoshi-Regular.woff2
│  │     ├─ Satoshi-Variable.ttf
│  │     └─ Satoshi-Variable.woff2
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ cmlabs-theme.css
├─ tsconfig.json
└─ types
   └─ todo.ts

```