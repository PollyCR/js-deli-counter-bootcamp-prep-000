var katzDeliLine = [];

function currentLine(x) {
  var line = []
  if (x.length===0) {
  return('The line is currently empty.')
} else {
  for(var i = 0; i < x; i++) 
  line += (i + 1) + '.' + x[i] + ','
  line = line.slice(0, line.length-1)
  return('The line is currently:' + line)
}
}

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.')
}