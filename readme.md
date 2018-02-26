# css-purify-webpack-loader
css-purify-webpack-loader is a webpack loader that take css an purify it, it is usefull in some senarios.

## Usage
```bash
npm i --D css-purify-webpack-loader
```

```javascript
rules=[
        {
          ...
          use: [
            ...
            {
              loader: 'css-purify',
              options: {
                includes: [
                  './pages/*.js',
                  './components/**/*.js',
                  './containers/**/*.js'
                ],
              },
            }
            ...
          ],
        }
    ]
```

css-purify-webpack-loader uses [purify-css](https://github.com/purifycss/purifycss),

# Options:

### includes:
Specify the files to include in the purify process and must obey the [glob](https://github.com/isaacs/node-glob) file pattern,
this option is necessary.
### purifyCssOptions:
If you want to pass options to the purify-css then use this, the default is :
`{
      minify: true,
      info: true,
 }`
 ### when:
 Is a boolean that specify when to run the purification, the default is `process.env.NODE_ENV === 'production'`
