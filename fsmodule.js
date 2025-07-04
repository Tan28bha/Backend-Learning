import fs from 'node:fs';

// fs.readFile('file.txt','utf-8',(err,data)=> {
//     console.log(err,data)
// })
// const a = fs.readFileSync('file.txt')
//     console.log(a.toString())


// fs.writeFile('file2.txt',"This is a data",()=>{
//     console.log("Written to a file")
// })

const b = fs.writeFileSync('file2.txt',"This is a data2")
console.log(b)

console.log("Finsihed reading file")