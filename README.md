# grunt-css-encode

> convert file-uris to data-uris in css-files

This plugin is a fork of https://www.npmjs.com/package/grunt-css-datauri, have added extra code to skip files if /* noembed */ is added after the url('...').

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-encode --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-encode');
```

## The "css_encode" task

### Overview
In your project's Gruntfile, add a section named `css_encode` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_encode: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.exclude
Type: `Array`
Default value: `[]`

Exclude files by providing an array of glob-patterns

### Usage Examples

#### Basic Example
Convert file-uris to data-uris in css-files

```js
grunt.initConfig({
  css_encode: {
    build: {
      options: {},
      src: 'src/styles.css',
      dest: 'build/styles.css'
    }
  }
});
```

#### Exclude files
You can exclude files by specifying a glob-pattern

```js
grunt.initConfig({
  css_encode: {
    build: {
      options: {
        exclude: ['*.gif']
      },
      src: 'src/styles.css',
      dest: 'build/styles.css'
    }
  }
});
```

