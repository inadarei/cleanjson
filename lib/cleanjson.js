var jsonData  = "";

// console mode only:
if (!module.parent)  { var stdin = process.openStdin(); }  	

var clean = function(jsonInput, callback) {

  var err;

  try {
    var doc = JSON.parse(jsonInput);
  } catch (ex) {
    // @TODO: more helpful details about why JSON did not parse
    err = new Error();
    callback(err, ''); 
    return;
  }

  doc = JSON.stringify(doc, null, '  ');

  var re  = /\s*?,\s*?\n(\s*)\s\s/img 
  var out = doc.replace(re, "\n\$1, ");

  callback(err, out);
}


if (!module.parent) { // in console mode only
  stdin.on('data', function(chunk) {
    jsonData += chunk;
  });

  stdin.on('end', function() {  

    clean(jsonData, function(err, cleanJSON) {
      if (err) {
        process.stdout.write ("ERROR: Malformed JSON Document provided as input. Exiting.\n");
        process.exit(1);
      }

      process.stdout.write(cleanJSON);
      process.stdout.write("\n");  
      process.exit(0);
    });

  });
}


// Exports

module.exports.clean = clean;

module.exports.init = function() {	   
  if (!module.parent) {
    stdin.setEncoding("utf8");
    stdin.resume();      
  }
}

