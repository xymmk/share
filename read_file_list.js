const fs = require('fs');
const path = require('path');

let read_dir = process.argv[2]

let dirs = []

let read_files = []

dirs.push(read_dir)

for(let dir of dirs){
  let files = fs.readdirSync(dir)
  for(let file of files){
    let fp = path.join(dir, file)
    try{
      if(fs.lstatSync(fp).isDirectory()){
        dirs.push(fp)
      }else{
        read_files.push(dir+file)
      }
    }catch(e){
      continue;
    }
  }
}

let text = ""
read_files.forEach(tmp=>{
  text = tmp + "\n" + text
})
fs.writeFileSync( "filelist" , text )
