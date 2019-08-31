## What is in the Starting project

* Preprocessor for SCSS
* Autoprefixer
* Simple [template engine](https://www.npmjs.com/package/gulp-file-include) for HTML
* [Browser Sync](https://www.browsersync.io) (Livereload)
* Sprite generator
* Resource minifiers
* Compression graphics

## What you need to do

Install [NodeJS](https://nodejs.org/en/)  
Install plugin for [Editorconfig](http://editorconfig.org) editor 

## Project start

Clone a project  
Open this folder in the console and install dependencies

```bash
npm install
npm install -g gulp-cli (if not installed)
```

## Available commands

`gulp` - run a project for development, proxy server and file watcher  
`gulp build` - build project for production  
`gulp sprite` - sprite generator  

## Project structure

```
start-frontend-project/
├── /build/                # The build result. (never edited).
├── /node_modules/         # Node modules. (never edited).
├── /src/                  # Source files.
│   ├── /_include/         # HTML markup that is inserted into other files.
│   ├── /fonts/            # Fonts.
│   ├── /images/           # Source images.
│   │   └── /sprite/       # Images of sprites.
│   ├── /scripts/          # js scripts.
│   ├── /sass/             # See below for the folder structure.
└── .editorconfig          # Configuration for Editor.
└── .gitignore             # Specifies intentionally untracked files to ignore
└── gulpfile.js            # Configuration for Gulp.
└── package.json           # NPM packages.
└── projectConfig.json     # Project configuration and dependencies.
```

## Structure of the sass folder

```
sass/
├── /block/                # Styles for repeating blocks.
├── /elements/             # Styles for items and elements.
├── /pages/                # Styles for each page in the project.
└── _base.scss             # Base styles (Box sizing).
└── _mixins.scss           # Mixins.
└── _sprite.scss           # Sprites. (Never edited).
└── _typography.scss       # Project typography.
└── _variables.scss        # Variables.
└── main.scss              # Compiled file.
```

### projectConfig.json

In this file, you can add `JS` and` CSS` files to the project installed via NPM and not only.
ATTENTION! This is JSON. This is a strict syntax; the last element in any context should not have a comma at the end of the line.

## Useful links

[Links](https://github.com/redwon/developer-links)
