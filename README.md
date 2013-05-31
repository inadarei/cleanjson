## Installation

```
$ npm install -g cleanjson
```

## CLI Usage

1. Publish your "dirty" JSON at some URL using services such as http://hastebin.com, http://gist.github.com or http://cl.ly
1. Acquire a URL that points to "raw" JSON, such as: http://hastebin.com/raw/keyataxuji 
1. Run a command such as:
    
    ```
    $ curl -s http://hastebin.com/raw/keyataxuji | cleanjson
    ```
1. Enjoy


### Using as a Module

```javascript
var cj = require('cleanjson');

var input = '{"a": 13123, "b": "13123", "ccc": 112}';

cj.clean(input, function(err, cleanJSON) {
  
  console.log(cleanJSON);
  process.exit(0);  
  
});
```
