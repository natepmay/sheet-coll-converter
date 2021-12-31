var delim = ",";

function tab(){
  delim = "\t";
}

function comma(){
  delim = ",";
}

function read(filepath) {
  var file = new File(filepath, 'read', 'TEXT');
  if (!file.isopen) {
    error('Could not open file: ' + filepath + '\n');
    return;
  }
  var eof = file.eof;
  var lines = [];
  while(file.position < eof) {
    lines.push(file.readline(9999));
  }
  var cells = [];
  for(i = 0; i < lines.length; i++){
    cells[i] = lines[i].split(delim);
  }
  for(i = 0; i < lines.length; i++){
    for(j = 0; j < cells[i].length; j++) {
      if (!isNaN(cells[i][j])) {
        cells[i][j] = Number(cells[i][j]);
      }
      var outArray = [i];
      outArray = outArray.concat(cells[i]);
      outlet(0, outArray);
    }
  }
}
