## Installation

```
$ npm install -g cleanjson
```

## CLI Usage

1. Publish your "dirty" JSON at some URL using services such as http://hastebin.com, http://gist.github.com or http://cl.ly
1. Acquire a URL that points to "raw" JSON, such as: http://goo.gl/7IiVZ 
1. Run a command such as:
    
    ```
    $ curl -Ls http://goo.gl/7IiVZ | cleanjson
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

will produce following output:

```javascript
{
  "a": 13123
, "b": "13123"
, "ccc": 112
}
```
