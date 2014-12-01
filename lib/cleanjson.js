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

// Exports
module.exports.clean = clean;
