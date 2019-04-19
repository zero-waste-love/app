# Introduction

Web application for [Zero Waste Love](https://zero-waste-love.herokuapp.com/).

## Local Environment Setup

- Install [git](https://git-scm.com/downloads), if you haven't already.
  - Run `git --version`, if nothing returns than you don't have `git` installed.
- Install [Node.js](https://nodejs.org/en/), if you haven't already.
  - Run `node -v` or `npm -v`, if nothing returns than you don't have `node` installed.

## Project Quickstart

- Clone this repository locally `git clone https://github.com/zero-waste-love/app.git`
- Run `cd app`
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
