### Purpose
Compilation warnings are only useful if developers read them,
and if there are too many warnings nobody reads any of them.

Using this plugin enforces that warnings are fixed regularly,
by making the webpack build fail if there are warnings.

### Installation
```shell
$ yarn add webpack-error-on-warnings-plugin
```

### Usage

```typescript
// webpack.config.babel.ts

import ErrorOnWarningsPlugin from 'webpack-error-on-warnings-plugin';

export default {
  // ...
  plugins: [
    new ErrorOnWarningsPlugin(),
  ],
};
```
### Recommendations

Don't use it for typical watching development builds,
since many warnings don't prevent valid experimentation
(e.g. autoformatter warnings).
Instead, run the check regularly but outside very tight development cycles - e.g. in CI.
This way only a small number of warnings will be visible during development,
maximising the chance that they will be useful.
