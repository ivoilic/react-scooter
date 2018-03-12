<img align="right" width="200" src="https://raw.githubusercontent.com/ivoilic/react-scooter/master/react-scooter.png"/>

# React-Scooter
[![npm Version](https://img.shields.io/npm/v/react-scooter.svg?style=flat)](https://www.npmjs.org/package/react-scooter)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/ivoilic/react-scooter/blob/master/LICENSE)
[![Dependency Status](https://img.shields.io/david/ivoilic/react-scooter.svg?style=flat)](https://david-dm.org/ivoilic/react-scooter)

React components for the Scooter CSS framework

- Docs: https://ivoilic.github.io/react-scooter/
- Scooter Repo: https://github.com/dropbox/scooter/
- Scooter Docs: https://dropbox.github.io/scooter/
- NPM: https://www.npmjs.com/package/react-scooter

## Installation

```bash
npm install react-scooter
```

## Usage

```jsx
import React from 'react'
import { Button } from 'react-scooter'

const App => () =>
  <div>
  	<Button primary>Primary Button</Button>
	<Button secondary>Secondary Button</Button>
	<Button tertiary>Tertiary Button</Button>
  </div>

export default App
```

## License

This repository is the work of Ivo Ilić and is being released under the MIT License.

Scooter is the work of Dropbox and was released under the Apache 2.0 License.

React is the work of Facebook and was released under the MIT License.

This repository contains neither Scooter or React which must be installed seperately.

Thank you to kulakowka on github for his react-bulma repo that inspired and guided me.
