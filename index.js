module.exports.shorten = (name) => {
  const splitted = name.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g).map(s => s.trim());

  if(splitted.length == 1) return splitted[0] + '.';
  if (splitted.length == 2) return splitted.join(' ') + '.';
  if (splitted.length > 2) {
    return splitted.slice(0, 2).concat(...[splitted[2].charAt(0)]).join(' ') + '.';
  }
}
