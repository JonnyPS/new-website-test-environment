# A simple automated workflow for producing websites.

## This currently includes the following features.

- Uses gulp to:
  - Compile SASS and dumps CSS into it's own folder
  - Reload browsers on save using BrowserSync
- Uses Bootstrap for a responsive framework

## Setting up the environment

Clone this project to your local environment.
Open terminal and run **gulp watch** to get started.

## Missing dependencies

You may have to install the following to ensure that it works correctly.

### Install
Run **npm install**

Run **npm install gulp-sass --save-dev**

Run **npm install browser-sync --save-dev**

### Gulp Watch

Run **gulp watch** in the terminal when developing. This runs browserSync, and watches for any changes to the sass.
The browser will refresh to render the new view upon any saved change.
