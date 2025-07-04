import path from "node:path";
const a = path.basename('/foo/bar/baz/asdf/quux.html');
const a2 = path.dirname('/foo/bar/baz/asdf/quux.html');
console.log(a)
console.log(a2)