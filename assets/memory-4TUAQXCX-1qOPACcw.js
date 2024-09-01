import{d as y,e as _}from"./index-DIP_7Pq0.js";import"https://cdnjs.cloudflare.com/ajax/libs/simple-peer/9.11.1/simplepeer.min.js";var{File:o,Blob:p,DOMException:r}=y,{INVALID:z,GONE:n,MISMATCH:w,MOD_ERR:c,SYNTAX:f,SECURITY:E,DISALLOWED:b}=_,m=class{constructor(e,i){this.fileHandle=e,this.file=i,this.size=i.size,this.position=0}write(e){let i=this.file;if(typeof e=="object"){if(e.type==="write"){if(Number.isInteger(e.position)&&e.position>=0&&(this.position=e.position,this.size<e.position&&(this.file=new o([this.file,new ArrayBuffer(e.position-this.size)],this.file.name,this.file))),!("data"in e))throw new r(...f("write requires a data argument"));e=e.data}else if(e.type==="seek")if(Number.isInteger(e.position)&&e.position>=0){if(this.size<e.position)throw new r(...z);this.position=e.position;return}else throw new r(...f("seek requires a position argument"));else if(e.type==="truncate")if(Number.isInteger(e.size)&&e.size>=0){i=e.size<this.size?new o([i.slice(0,e.size)],i.name,i):new o([i,new Uint8Array(e.size-this.size)],i.name),this.size=i.size,this.position>i.size&&(this.position=i.size),this.file=i;return}else throw new r(...f("truncate requires a size argument"))}e=new p([e]);let t=this.file;const s=t.slice(0,this.position),l=t.slice(this.position+e.size);let a=this.position-s.size;a<0&&(a=0),t=new o([s,new Uint8Array(a),e,l],t.name),this.size=t.size,this.position+=e.size,this.file=t}close(){if(this.fileHandle._deleted)throw new r(...n);this.fileHandle._file=this.file,this.file=this.position=this.size=null,this.fileHandle.onclose&&this.fileHandle.onclose(this.fileHandle)}},h=class{constructor(e="",i=new o([],e),t=!0){this._file=i,this.name=e,this.kind="file",this._deleted=!1,this.writable=t,this.readable=!0}async getFile(){if(this._deleted)throw new r(...n);return this._file}async createWritable(e){if(!this.writable)throw new r(...b);if(this._deleted)throw new r(...n);const i=e.keepExistingData?await this.getFile():new o([],this.name);return new m(this,i)}async isSameEntry(e){return this===e}async _destroy(){this._deleted=!0,this._file=null}},g=class d{constructor(i,t=!0){this.name=i,this.kind="directory",this._deleted=!1,this._entries={},this.writable=t,this.readable=!0}async*entries(){if(this._deleted)throw new r(...n);yield*Object.entries(this._entries)}async isSameEntry(i){return this===i}async getDirectoryHandle(i,t){if(this._deleted)throw new r(...n);const s=this._entries[i];if(s){if(s instanceof h)throw new r(...w);return s}else{if(t.create)return this._entries[i]=new d(i);throw new r(...n)}}async getFileHandle(i,t){const s=this._entries[i],l=s instanceof h;if(s&&l)return s;if(s&&!l)throw new r(...w);if(!s&&!t.create)throw new r(...n);if(!s&&t.create)return this._entries[i]=new h(i)}async removeEntry(i,t){const s=this._entries[i];if(!s)throw new r(...n);await s._destroy(t.recursive),delete this._entries[i]}async _destroy(i){for(let t of Object.values(this._entries)){if(!i)throw new r(...c);await t._destroy(i)}this._entries={},this._deleted=!0}},u=new g(""),F=()=>u;export{h as FileHandle,g as FolderHandle,m as Sink,F as default};
