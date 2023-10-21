# ellaparsons.design

![Website](https://img.shields.io/website?down_color=red&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fellaparsons.design)

## Screenshot

![](./assets/images/example.gif)

## Project setup

- Clone the respoitory from https://github.com/jackdomleo7/ellaparsons.design
- `cd ellaparsons.design`
- `npm i`
- Create a new `.env` file in the root of the project with the following variables (this file is ignored from git):
  - `GOOGLE_ANALYTICS_ID`
  - `PRISMIC_ACCESS_TOKEN`
  - `FORMSPREE_ENDPOINT`

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# Deploy the website to gh-pages branch
$ npm run deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
