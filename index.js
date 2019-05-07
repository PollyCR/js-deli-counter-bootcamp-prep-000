var katzDeliLine = [];

function currentLine() {
  var line = []
  if (x.length===0) {
  return('The line is currently empty.')
} else {
  for(var i = 0; i < x; i++) 
  line += (i + 1) + '.' + x[i] + ','
  line = line.slice(0, lineLength-2)
}
}