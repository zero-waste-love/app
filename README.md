# Introduction

Web application for [Zero Waste Love](https://zero-waste-love.herokuapp.com/).

## Project Setup

- Install [Node.js](https://nodejs.org/en/) if you haven't already
- Clone this repository locally `git clone https://github.com/zero-waste-love/app.git`
- `cd` to its directory
- Run `npm i` or `npm ci`

## Development Commands

Command | Description
--- | ---
`npm install` | Install dependencies.
`npm ci` | Install dependencies (without altering package-lock.json).
`npm run dev` | Build and serve locally.
`npm run build` | Build `dist` files.

## Content Management

Content creation is focused in the `./data/` directory.

### Hierarchy

```
category
--| subCategory
----| collection
------| pin
```

### Directory Description

Directory | Description
--- | ---
`category` | Broad zero waste spaces (_Bathroom_, _Kitchen_, etc).
`subCategory` | General subject areas (_Body_, _Dental_, etc).
`collection` | Specific subject areas (_Floss_, _Toothpaste_, etc).
`pin` | Products/links of a specific subject.
