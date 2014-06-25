# grunt-file-generator

> Grunt task for file generation

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-file-generator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-file-generator');
```

## The "file_generator" task

### Overview
In your project's Gruntfile, add a section named `file_generator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  generator: {
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

#### options.wrapper
Type: `Function`
Return value: `String`

A function takes join result of `options.template` function and return string

#### options.template
Type: `Function`
Return value: `String`

A function takes a filename argument and return a string

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So, in output file will be written string with source file paths.

```js
grunt.initConfig({
  file_generator: {
    options: {},
    files: {
      'dest/some.txt': ['src/noname.css', 'src/noname.js']
    },
  },
});
```

#### Custom Options
In this example, custom options overrides wrapper and template functions. So, in output file will be written string `/* 4242 */`

```js
grunt.initConfig({
  file_generator: {
    options: {
      wrapper: function (text) {
        return '/* ' + text + ' */'
      },
      template: function (filepath) {
        return '42'
      }
    },
    files: {
      'dest/some.txt': ['src/noname.css', 'src/noname.js']
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
