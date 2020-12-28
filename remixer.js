const csv = `
code,github
css,-w3
html,-w3
js,-w3
javascript,-w3
`

const pairStrs = csv.split('\n')
const pairs = new Map()
for (const pairStr of pairStrs) {
  pairLs = pairStr.split(',')
  if (pairLs.length < 2) {
    continue;
  }

  pairs.set(pairLs[0], pairLs[1])
}

function remix(query) {
  let spl = query.split(' ')
  let resLs = []
  for (sp of spl) {
    if (pairs.has(sp)) {
      let q = pairs.get(sp);
      if (spl.includes(q)) continue;
      resLs.push(q)
    }
  }
  const uniq = [...new Set(resLs)];
  if (uniq.length == 0) {
    if (spl.includes('reddit')) return '';
    return ' reddit';
  }
  return ' ' + uniq.join(' ')
}
