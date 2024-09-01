import{e as w}from"./index-DIP_7Pq0.js";import"https://cdnjs.cloudflare.com/ajax/libs/simple-peer/9.11.1/simplepeer.min.js";var{DISALLOWED:d}=w,o=class{constructor(e,i){this.writer=e,this.fileEntry=i}async write(e){if(typeof e=="object"){if(e.type==="write"){if(Number.isInteger(e.position)&&e.position>=0&&(this.writer.seek(e.position),this.writer.position!==e.position&&(await new Promise((i,r)=>{this.writer.onwriteend=i,this.writer.onerror=r,this.writer.truncate(e.position)}),this.writer.seek(e.position))),!("data"in e))throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. write requires a data argument","SyntaxError");e=e.data}else if(e.type==="seek")if(Number.isInteger(e.position)&&e.position>=0){if(this.writer.seek(e.position),this.writer.position!==e.position)throw new DOMException("seeking position failed","InvalidStateError");return}else throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. seek requires a position argument","SyntaxError");else if(e.type==="truncate")return new Promise(i=>{if(Number.isInteger(e.size)&&e.size>=0)this.writer.onwriteend=r=>i(),this.writer.truncate(e.size);else throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. truncate requires a size argument","SyntaxError")})}await new Promise((i,r)=>{this.writer.onwriteend=i,this.writer.onerror=r,this.writer.write(new Blob([e]))})}close(){return new Promise(this.fileEntry.file.bind(this.fileEntry))}},l=class{constructor(e,i=!0){this.file=e,this.kind="file",this.writable=i,this.readable=!0}get name(){return this.file.name}isSameEntry(e){return this.file.toURL()===e.file.toURL()}getFile(){return new Promise(this.file.file.bind(this.file))}createWritable(e){if(!this.writable)throw new DOMException(...d);return new Promise((i,r)=>this.file.createWriter(t=>{e.keepExistingData===!1?(t.onwriteend=s=>i(new o(t,this.file)),t.truncate(0)):i(new o(t,this.file))},r))}},f=class a{constructor(i,r=!0){this.dir=i,this.writable=r,this.readable=!0,this.kind="directory",this.name=i.name}isSameEntry(i){return this.dir.fullPath===i.dir.fullPath}async*entries(){const i=this.dir.createReader(),r=await new Promise(i.readEntries.bind(i));for(const t of r)yield[t.name,t.isFile?new l(t,this.writable):new a(t,this.writable)]}getDirectoryHandle(i,r){return new Promise((t,s)=>{this.dir.getDirectory(i,r,n=>{t(new a(n))},s)})}getFileHandle(i,r){return new Promise((t,s)=>this.dir.getFile(i,r,n=>t(new l(n)),s))}async removeEntry(i,r){const t=await this.getDirectoryHandle(i,{create:!1}).catch(s=>s.name==="TypeMismatchError"?this.getFileHandle(i,{create:!1}):s);if(t instanceof Error)throw t;return new Promise((s,n)=>{t instanceof a?r.recursive?t.dir.removeRecursively(()=>s(),n):t.dir.remove(()=>s(),n):t.file&&t.file.remove(()=>s(),n)})}},h=(e={})=>new Promise((i,r)=>window.webkitRequestFileSystem(e._persistent,0,t=>i(new f(t.root)),r));export{l as FileHandle,f as FolderHandle,h as default};
