# universal-react-apollo-starter

## Introduction

This web stack is meant to provide web development teams with a rock solid foundation
to build upon and help them achieve success with their projects.

## Stack components

- Universal React with Node
- ES6/7 via Babel
- React Router
- React Intl
- Styled Components
- Ramda
- Moment
- Webpack
- Jest + Enzyme
- ESLint + Airbnb styleguide
- Stylelint
- Zurb Foundation XY Grid

## Scripts

- Run in development mode: `yarn start`
- Build for test: `yarn run build:test`
- Build for production: `yarn run build:prod`
- Lint JS code: `yarn run lint:js`
- Lint CSS code: `yarn run lint:css`
- Run unit tests: `yarn test`
- Run unit tests in watch mode: `yarn run test:watch`
- Generate tests code coverage report: `yarn run test:coverage`
- Serve the test/prod bundle locally using Express: `yarn run serve`
- Serve the test/prod bundle locally using PM2: `yarn run pm2`

## Project structure & conventions

### Components folder

The `src/components` folder is where most of the development will occur.
It contains 3 different folders:

- `infrastructure`: components that are related to the infrastructure
  of the application (ex: header, footer, menu, ...)
- `pages`: pages of the application (ex: home, about, ...)
- `toolbox`: reusable components (ex: Calendar, Popup, ...)

### Colocation

Place related assets in the same folder. Ex, in `src/components/pages/Home`:

- `index.jsx`, so it can be easily imported (`import HomePage from 'pages/Home'`)
- `messages.js`, for local translations
- `logo.png`, for a local image
- `Home.test.js`, for a local test

### Aliases

To make development easier, several folders have aliases, such as `toolbox` and `utils`.
This means that it's not required to provide the relative path to those folders. Ex:

- `import { Calendar } from 'toolbox'`
- `import { shallowRender } from 'utils/testUtils'`

### Git pre-commit hook

To ensure that the codebase stays high quality, a pre-commit hook will run before
every commit to perform 4 quality checks on the changeset:

1.  ESLint: ensures that JS code matches the Airbnb style guide
2.  Stylelint: ensures that CSS code matches recommended conventions
3.  Prettier: formats the code to make it easy to read and maintain
4.  Unit tests: ensures that tests are passing

## Copyright

Web stack developed by Urge2code. © All Rights Reserved.
