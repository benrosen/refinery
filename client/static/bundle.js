(()=>{var _n=class r{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new y);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new y);let n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new r);let n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],v=i[0],p=i[1],f=i[2],x=i[3],_=i[4],w=i[5],S=i[6],T=i[7],R=i[8];return s[0]=o*v+a*x+c*S,s[1]=o*p+a*_+c*T,s[2]=o*f+a*w+c*R,s[3]=l*v+h*x+d*S,s[4]=l*p+h*_+d*T,s[5]=l*f+h*w+d*R,s[6]=u*v+m*x+g*S,s[7]=u*p+m*_+g*T,s[8]=u*f+m*w+g*R,e}scale(t,e){e===void 0&&(e=new r);let n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new y);let n=3,i=4,s=[],o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3,l=c,h,d=4,u;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){let m=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*m;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new r);let e=3,n=6,i=hl,s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3,c=a,l,h=n,d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){let u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{o=s-1;do{let u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{let u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,m=n*c,g=i*c,v=s*o,p=s*a,f=s*c,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-f,x[3*0+2]=d+p,x[3*1+0]=h+f,x[3*1+1]=1-(l+g),x[3*1+2]=m-v,x[3*2+0]=d-p,x[3*2+1]=m+v,x[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new r);let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},hl=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y=class r{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new r);let n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new r(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new r(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new _n([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new r);let e=this.x,n=this.y,i=this.z,s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new r);let n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new r),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new r),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new r),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=ul,s=1/n;i.set(this.x*s,this.y*s,this.z*s);let o=dl;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate($o),$o.almostEquals(t,e)}clone(){return new r(this.x,this.y,this.z)}};y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);var ul=new y,dl=new y,$o=new y,Ee=class r{constructor(t){t===void 0&&(t={}),this.lowerBound=new y,this.upperBound=new y,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Jo),l=Jo),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new r().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){let l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){let n=jo,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){let m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=jo,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){let m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||m>g)}},Jo=new y,jo=[new y,new y,new y,new y,new y,new y,new y,new y],ns=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){let o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},is=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}},ge=class r{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new y),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=fl,i=pl;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new r);let n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new r);let e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new r),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new y);let n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-a*n,m=-o*n-a*i-c*s;return e.x=h*l+m*-o+d*-c-u*-a,e.y=d*l+m*-a+u*-o-h*-c,e.z=u*l+m*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){let d=o*o,u=a*a,m=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");let s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new r(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new r);let i=this.x,s=this.y,o=this.z,a=this.w,c=t.x,l=t.y,h=t.z,d=t.w,u,m,g,v,p;return m=i*c+s*l+o*h+a*d,m<0&&(m=-m,c=-c,l=-l,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),v=Math.sin((1-e)*u)/g,p=Math.sin(e*u)/g):(v=1-e,p=e),n.x=v*i+p*c,n.y=v*s+p*l,n.z=v*o+p*h,n.w=v*a+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new r);let s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*l),i.y+=u*(o*d+a*c-s*h),i.z+=u*(a*d+s*l-o*c),i.w+=u*(-s*c-o*l-a*h),i}},fl=new y,pl=new y,ml={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},ut=class r{constructor(t){t===void 0&&(t={}),this.id=r.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};ut.idCounter=0;ut.types=ml;var Vt=class r{constructor(t){t===void 0&&(t={}),this.position=new y,this.quaternion=new ge,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return r.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return r.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new y),n.vsub(t,i),e.conjugate(Ko),Ko.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new y),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new y),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new y),e.w*=-1,e.vmult(n,i),e.w*=-1,i}},Ko=new ge,cr=class r extends ut{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:ut.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let i=new y;for(let s=0;s!==t.length;s++){let o=t[s],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);let e=this.faceNormals[t]||new y;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];r.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){let s=new y,o=new y;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){let h=new y,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);let v=h.dot(o);v>u&&(u=v,d=g)}let m=[];for(let g=0;g<n.faces[d].length;g++){let v=n.vertices[n.faces[d][g]],p=new y;p.copy(v),s.vmult(p,p),i.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(o,t,e,m,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){let l=new y,h=new y,d=new y,u=new y,m=new y,g=new y,v=Number.MAX_VALUE,p=this;if(p.uniqueAxes)for(let f=0;f!==p.uniqueAxes.length;f++){n.vmult(p.uniqueAxes[f],l);let x=p.testSepAxis(l,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(l))}else{let f=a?a.length:p.faces.length;for(let x=0;x<f;x++){let _=a?a[x]:x;l.copy(p.faceNormals[_]),n.vmult(l,l);let w=p.testSepAxis(l,t,e,n,i,s);if(w===!1)return!1;w<v&&(v=w,o.copy(l))}}if(t.uniqueAxes)for(let f=0;f!==t.uniqueAxes.length;f++){s.vmult(t.uniqueAxes[f],h);let x=p.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}else{let f=c?c.length:t.faces.length;for(let x=0;x<f;x++){let _=c?c[x]:x;h.copy(t.faceNormals[_]),s.vmult(h,h);let w=p.testSepAxis(h,t,e,n,i,s);if(w===!1)return!1;w<v&&(v=w,o.copy(h))}}for(let f=0;f!==p.uniqueEdges.length;f++){n.vmult(p.uniqueEdges[f],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],m),u.cross(m,g),!g.almostZero()){g.normalize();let _=p.testSepAxis(g,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){let a=this;r.project(a,t,n,i,nr),r.project(e,t,s,o,ir);let c=nr[0],l=nr[1],h=ir[0],d=ir[1];if(c<d||h<l)return!1;let u=c-d,m=h-l;return u<m?u:m}calculateLocalInertia(t,e){let n=new y,i=new y;this.computeLocalAABB(i,n);let s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){let c=new y,l=new y,h=new y,d=new y,u=new y,m=new y,g=new y,v=new y,p=this,f=[],x=i,_=f,w=-1,S=Number.MAX_VALUE;for(let E=0;E<p.faces.length;E++){c.copy(p.faceNormals[E]),n.vmult(c,c);let H=c.dot(t);H<S&&(S=H,w=E)}if(w<0)return;let T=p.faces[w];T.connectedFaces=[];for(let E=0;E<p.faces.length;E++)for(let H=0;H<p.faces[E].length;H++)T.indexOf(p.faces[E][H])!==-1&&E!==w&&T.connectedFaces.indexOf(E)===-1&&T.connectedFaces.push(E);let R=T.length;for(let E=0;E<R;E++){let H=p.vertices[T[E]],j=p.vertices[T[(E+1)%R]];H.vsub(j,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[w]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(H),n.vmult(m,m),e.vadd(m,m);let P=T.connectedFaces[E];g.copy(this.faceNormals[P]);let I=this.getPlaneConstantOfFace(P);v.copy(g),n.vmult(v,v);let L=I-v.dot(e);for(this.clipFaceAgainstPlane(x,_,v,L);x.length;)x.shift();for(;_.length;)x.push(_.shift())}g.copy(this.faceNormals[w]);let F=this.getPlaneConstantOfFace(w);v.copy(g),n.vmult(v,v);let M=F-v.dot(e);for(let E=0;E<x.length;E++){let H=v.dot(x[E])+M;if(H<=s&&(console.log(`clamped: depth=${H} to minDist=${s}`),H=s),H<=o){let j=x[E];if(H<=1e-6){let P={point:j,normal:v,depth:H};a.push(P)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o,a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){let d=new y;d.copy(l),e.push(d)}else{let d=new y;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){let d=new y;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);let n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new y);let n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){let s=this.vertices,o,a,c,l,h,d,u=new y;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);let g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new y);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){let o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){let o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){let o=i[s];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new y;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=i[a],l=e[n[a][0]],h=new y;t.vsub(l,h);let d=c.dot(h),u=new y;o.vsub(l,u);let m=c.dot(u);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(t,e,n,i,s){let o=t.vertices.length,a=vl,c=0,l=0,h=xl,d=t.vertices;h.setZero(),Vt.vectorToLocalFrame(n,i,e,a),Vt.pointToLocalFrame(n,i,h,h);let u=h.dot(a);l=c=d[0].dot(a);for(let m=1;m<o;m++){let g=d[m].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){let m=l;l=c,c=m}s[0]=c,s[1]=l}},nr=[],ir=[],gl=new y,vl=new y,xl=new y,lr=class r extends ut{constructor(t){super({type:ut.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=y,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new cr({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new y),r.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){let n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)xn.set(s[o][0],s[o][1],s[o][2]),e.vmult(xn,xn),t.vadd(xn,xn),n(xn.x,xn.y,xn.z)}calculateWorldAABB(t,e,n,i){let s=this.halfExtents;Xe[0].set(s.x,s.y,s.z),Xe[1].set(-s.x,s.y,s.z),Xe[2].set(-s.x,-s.y,s.z),Xe[3].set(-s.x,-s.y,-s.z),Xe[4].set(s.x,-s.y,-s.z),Xe[5].set(s.x,s.y,-s.z),Xe[6].set(-s.x,s.y,-s.z),Xe[7].set(s.x,-s.y,s.z);let o=Xe[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=Xe[a];e.vmult(c,c),t.vadd(c,c);let l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},xn=new y,Xe=[new y,new y,new y,new y,new y,new y,new y,new y],yr={DYNAMIC:1,STATIC:2,KINEMATIC:4},Mr={AWAKE:0,SLEEPY:1,SLEEPING:2},Dt=class r extends is{constructor(t){t===void 0&&(t={}),super(),this.id=r.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new y,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new y,this.force=new y;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?r.STATIC:r.DYNAMIC,typeof t.type==typeof r.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=r.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new ge,this.initQuaternion=new ge,this.previousQuaternion=new ge,this.interpolatedQuaternion=new ge,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new y,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new _n,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new _n,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new y(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new y(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ee,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=r.AWAKE,this.wakeUpAfterNarrowphase=!1,t===r.SLEEPING&&this.dispatchEvent(r.wakeupEvent)}sleep(){this.sleepState=r.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===r.AWAKE&&n<i?(this.sleepState=r.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(r.sleepyEvent)):e===r.SLEEPY&&n>i?this.wakeUp():e===r.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(r.sleepEvent))}}updateSolveMassProperties(){this.sleepState===r.SLEEPING||this.type===r.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new y),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new y),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e}addShape(t,e,n){let i=new y,s=new ge;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,i=0;for(let s=0;s!==n;s++){let o=t[s];o.updateBoundingSphereRadius();let a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=_l,o=yl,a=this.quaternion,c=this.aabb,l=Ml;for(let h=0;h!==i;h++){let d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=Sl,i=bl;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new y),this.type!==r.DYNAMIC)return;this.sleepState===r.SLEEPING&&this.wakeUp();let n=El;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new y),this.type!==r.DYNAMIC)return;let n=Al,i=Tl;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===r.DYNAMIC&&(this.sleepState===r.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new y),this.type!==r.DYNAMIC)return;this.sleepState===r.SLEEPING&&this.wakeUp();let n=e,i=Rl;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let s=Cl;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new y),this.type!==r.DYNAMIC)return;let n=Pl,i=Ll;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){let t=Il;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),lr.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new y;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===r.DYNAMIC||this.type===r.KINEMATIC)||this.sleepState===r.SLEEPING)return;let i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=a.x*m*u.x,i.y+=a.y*m*u.y,i.z+=a.z*m*u.z;let g=d.elements,v=this.angularFactor,p=c.x*v.x,f=c.y*v.y,x=c.z*v.z;s.x+=t*(g[0]*p+g[1]*f+g[2]*x),s.y+=t*(g[3]*p+g[4]*f+g[5]*x),s.z+=t*(g[6]*p+g[7]*f+g[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};Dt.idCounter=0;Dt.COLLIDE_EVENT_NAME="collide";Dt.DYNAMIC=yr.DYNAMIC;Dt.STATIC=yr.STATIC;Dt.KINEMATIC=yr.KINEMATIC;Dt.AWAKE=Mr.AWAKE;Dt.SLEEPY=Mr.SLEEPY;Dt.SLEEPING=Mr.SLEEPING;Dt.wakeupEvent={type:"wakeup"};Dt.sleepyEvent={type:"sleepy"};Dt.sleepEvent={type:"sleep"};var _l=new y,yl=new ge,Ml=new Ee,Sl=new _n,bl=new _n,wl=new _n,El=new y,Al=new y,Tl=new y,Rl=new y,Cl=new y,Pl=new y,Ll=new y,Il=new y,hr=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Dt.STATIC||t.sleepState===Dt.SLEEPING)&&(e.type&Dt.STATIC||e.sleepState===Dt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let s=Nl;e.position.vsub(t.position,s);let o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=Ul,i=Fl,s=Dl,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new y;t.position.vsub(e.position,n);let i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Nl=new y;new y;new ge;new y;var Ul={keys:[]},Fl=[],Dl=[];new y;var $0=new y;new y;var ur=class extends hr{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,s=i.length,o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){let s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}},Kn=class{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}},ha,ua,da,fa,pa,ma,ga,Sr={CLOSEST:1,ANY:2,ALL:4};ha=ut.types.SPHERE;ua=ut.types.PLANE;da=ut.types.BOX;fa=ut.types.CYLINDER;pa=ut.types.CONVEXPOLYHEDRON;ma=ut.types.HEIGHTFIELD;ga=ut.types.TRIMESH;var Ce=class r{get[ha](){return this._intersectSphere}get[ua](){return this._intersectPlane}get[da](){return this._intersectBox}get[fa](){return this._intersectConvex}get[pa](){return this._intersectConvex}get[ma](){return this._intersectHeightfield}get[ga](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new y),e===void 0&&(e=new y),this.from=t.clone(),this.to=e.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=r.ANY,this.result=new Kn,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||r.ANY,this.result=e.result||new Kn,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Qo),sr.length=0,t.broadphase.aabbQuery(t,Qo,sr),this.intersectBodies(sr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;let i=Bl,s=Ol;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let s=this.from;if(th(s,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){let o=this.from,a=this.to,c=this.direction,l=new y(0,0,1);e.vmult(l,l);let h=new y;o.vsub(n,h);let d=h.dot(l);a.vsub(n,h);let u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;let m=l.dot(c);if(Math.abs(m)<this.precision)return;let g=new y,v=new y,p=new y;o.vsub(n,g);let f=-l.dot(g)/m;c.scale(f,v),o.vadd(v,p),this.reportIntersection(l,p,s,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;let o=zl;o.from.copy(this.from),o.to.copy(this.to),Vt.pointToLocalFrame(n,e,o.from,o.from),Vt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=Vl,c,l,h,d;c=l=0,h=d=t.data.length-1;let u=new Ee;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let m=c;m<h;m++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(m,g,!1),Vt.pointToWorldFrame(n,e,t.pillarOffset,ji),this._intersectConvex(t.pillarConvex,e,ji,i,s,ta),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Vt.pointToWorldFrame(n,e,t.pillarOffset,ji),this._intersectConvex(t.pillarConvex,e,ji,i,s,ta)}}}_intersectSphere(t,e,n,i,s){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,m=kl,g=Hl;if(!(u<0))if(u===0)o.lerp(a,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{let v=(-h-Math.sqrt(u))/(2*l),p=(-h+Math.sqrt(u))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){let a=Wl,c=ea,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,v=this.to,p=g.distanceTo(v),f=l?l.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<f;_++){let w=l?l[_]:_,S=h[w],T=u[w],R=e,F=n;c.copy(d[S[0]]),R.vmult(c,c),c.vadd(F,c),c.vsub(g,c),R.vmult(T,a);let M=m.dot(a);if(Math.abs(M)<this.precision)continue;let E=a.dot(c)/M;if(!(E<0)){m.scale(E,Me),Me.vadd(g,Me),Ue.copy(d[S[0]]),R.vmult(Ue,Ue),F.vadd(Ue,Ue);for(let H=1;!x.shouldStop&&H<S.length-1;H++){Ye.copy(d[S[H]]),Ze.copy(d[S[H+1]]),R.vmult(Ye,Ye),R.vmult(Ze,Ze),F.vadd(Ye,Ye),F.vadd(Ze,Ze);let j=Me.distanceTo(g);!(r.pointInTriangle(Me,Ue,Ye,Ze)||r.pointInTriangle(Me,Ye,Ue,Ze))||j>p||this.reportIntersection(a,Me,s,i,w)}}}}_intersectTrimesh(t,e,n,i,s,o){let a=Xl,c=Kl,l=Ql,h=ea,d=Yl,u=Zl,m=$l,g=jl,v=Jl,p=t.indices;t.vertices;let f=this.from,x=this.to,_=this.direction;l.position.copy(n),l.quaternion.copy(e),Vt.vectorToLocalFrame(n,e,_,d),Vt.pointToLocalFrame(n,e,f,u),Vt.pointToLocalFrame(n,e,x,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();let w=u.distanceSquared(m);t.tree.rayQuery(this,l,c);for(let S=0,T=c.length;!this.result.shouldStop&&S!==T;S++){let R=c[S];t.getNormal(R,a),t.getVertex(p[R*3],Ue),Ue.vsub(u,h);let F=d.dot(a),M=a.dot(h)/F;if(M<0)continue;d.scale(M,Me),Me.vadd(u,Me),t.getVertex(p[R*3+1],Ye),t.getVertex(p[R*3+2],Ze);let E=Me.distanceSquared(u);!(r.pointInTriangle(Me,Ye,Ue,Ze)||r.pointInTriangle(Me,Ue,Ye,Ze))||E>w||(Vt.vectorToWorldFrame(e,a,v),Vt.pointToWorldFrame(n,e,Me,g),this.reportIntersection(v,g,s,i,R))}c.length=0}reportIntersection(t,e,n,i,s){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case r.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case r.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case r.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Fn),n.vsub(e,Pi),t.vsub(e,rr);let s=Fn.dot(Fn),o=Fn.dot(Pi),a=Fn.dot(rr),c=Pi.dot(Pi),l=Pi.dot(rr),h,d;return(h=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&h+d<s*c-o*o}};Ce.CLOSEST=Sr.CLOSEST;Ce.ANY=Sr.ANY;Ce.ALL=Sr.ALL;var Qo=new Ee,sr=[],Pi=new y,rr=new y,Bl=new y,Ol=new ge,Me=new y,Ue=new y,Ye=new y,Ze=new y;new y;new Kn;var ta={faceList:[0]},ji=new y,zl=new Ce,Vl=[],kl=new y,Hl=new y,Wl=new y,Gl=new y,ql=new y,ea=new y,Xl=new y,Yl=new y,Zl=new y,$l=new y,Jl=new y,jl=new y;new Ee;var Kl=[],Ql=new Vt,Fn=new y,Ki=new y;function th(r,t,e){e.vsub(r,Fn);let n=Fn.dot(t);return t.scale(n,Ki),Ki.vadd(r,Ki),e.distanceTo(Ki)}var ss=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},dr=class r{constructor(t,e,n){n===void 0&&(n={}),n=ss.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=r.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};dr.idCounter=0;var rs=class{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},Ui=class r{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=r.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new rs,this.jacobianElementB=new rs,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,na),a.scale(h,ia),n.invInertiaWorldSolve.vmult(o,sa),i.invInertiaWorldSolve.vmult(c,ra),t.multiplyVectors(na,sa)+e.multiplyVectors(ia,ra)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve,l=s+o;return a.vmult(t.rotational,Qi),l+=Qi.dot(t.rotational),c.vmult(e.rotational,Qi),l+=Qi.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=eh;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Ui.idCounter=0;var na=new y,ia=new y,sa=new y,ra=new y,Qi=new y,eh=new y,fr=class extends Ui{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(t){let e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=nh,l=ih,h=i.velocity,d=i.angularVelocity;i.force,i.torque;let u=s.velocity,m=s.angularVelocity;s.force,s.torque;let g=sh,v=this.jacobianElementA,p=this.jacobianElementB,f=this.ni;o.cross(f,c),a.cross(f,l),f.negate(v.spatial),c.negate(v.rotational),p.spatial.copy(f),p.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);let x=f.dot(g),_=this.restitution+1,w=_*u.dot(f)-_*h.dot(f)+m.dot(l)-d.dot(c),S=this.computeGiMf();return-x*e-w*n-t*S}getImpactVelocityAlongNormal(){let t=rh,e=oh,n=ah,i=ch,s=lh;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}},nh=new y,ih=new y,sh=new y,rh=new y,oh=new y,ah=new y,ch=new y,lh=new y;var J0=new y,j0=new y;var K0=new y,Q0=new y;new y;new y;var tv=new y,ev=new y;var nv=new y,iv=new y,os=class extends Ui{constructor(t,e,n){super(t,e,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,s=hh,o=uh,a=this.t;n.cross(a,s),i.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},hh=new y,uh=new y,as=class r{constructor(t,e,n){n=ss.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};as.idCounter=0;var cs=class r{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=r.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};cs.idCounter=0;var sv=new y,rv=new y,ov=new y,av=new y,cv=new y,lv=new y,hv=new y,uv=new y,dv=new y,fv=new y,pv=new y;var mv=new y,gv=new y;new y;new y;new y;var vv=new y,xv=new y,_v=new y;new Ce;new y;var yv=new y,Mv=new y,Sv=[new y(1,0,0),new y(0,1,0),new y(0,0,1)],bv=new y;var wv=new y,Ev=new y,Av=new y;var Tv=new y,Rv=new y,Cv=new y,Pv=new y;var Lv=new y,Iv=new y,Nv=new y;var Uv=new y,Fv=new y;var Dv=new y,Bv=new y,Ov=new y,zv=new y,Vv=new y,kv=new y,Hv=new y;var Wv=new y;var Gv=new y,qv=new y,Xv=new y,Yv=new y,Zv=new y,$v=new y,Jv=new y,jv=new y,Kv=new y;var Qv=new y,tx=new Ee;var ex=new y,nx=new Ee,ix=new y,sx=new y,rx=new y,ox=new y,ax=new y,cx=new y,lx=new y,hx=new Ee,ux=new y,dx=new Vt,fx=new Ee,pr=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},mr=class extends pr{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t,d,u,m,g,v,p;if(a!==0)for(let w=0;w!==l;w++)c[w].updateSolveMassProperties();let f=fh,x=ph,_=dh;f.length=a,x.length=a,_.length=a;for(let w=0;w!==a;w++){let S=o[w];_[w]=0,x[w]=S.computeB(h),f[w]=1/S.computeC()}if(a!==0){for(let T=0;T!==l;T++){let R=c[T],F=R.vlambda,M=R.wlambda;F.set(0,0,0),M.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==a;T++){let R=o[T];d=x[T],u=f[T],p=_[T],v=R.computeGWlambda(),m=u*(d-v-R.eps*p),p+m<R.minForce?m=R.minForce-p:p+m>R.maxForce&&(m=R.maxForce-p),_[T]+=m,g+=m>0?m:-m,R.addToWlambda(m)}if(g*g<s)break}for(let T=0;T!==l;T++){let R=c[T],F=R.velocity,M=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),F.vadd(R.vlambda,F),R.wlambda.vmul(R.angularFactor,R.wlambda),M.vadd(R.wlambda,M)}let w=o.length,S=1/h;for(;w--;)o[w].multiplier=_[w]*S}return n}},dh=[],fh=[],ph=[];var px=Dt.STATIC;var gr=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},vr=class extends gr{constructor(){super(...arguments),this.type=y}constructObject(){return new y}},Xt={sphereSphere:ut.types.SPHERE,spherePlane:ut.types.SPHERE|ut.types.PLANE,boxBox:ut.types.BOX|ut.types.BOX,sphereBox:ut.types.SPHERE|ut.types.BOX,planeBox:ut.types.PLANE|ut.types.BOX,convexConvex:ut.types.CONVEXPOLYHEDRON,sphereConvex:ut.types.SPHERE|ut.types.CONVEXPOLYHEDRON,planeConvex:ut.types.PLANE|ut.types.CONVEXPOLYHEDRON,boxConvex:ut.types.BOX|ut.types.CONVEXPOLYHEDRON,sphereHeightfield:ut.types.SPHERE|ut.types.HEIGHTFIELD,boxHeightfield:ut.types.BOX|ut.types.HEIGHTFIELD,convexHeightfield:ut.types.CONVEXPOLYHEDRON|ut.types.HEIGHTFIELD,sphereParticle:ut.types.PARTICLE|ut.types.SPHERE,planeParticle:ut.types.PLANE|ut.types.PARTICLE,boxParticle:ut.types.BOX|ut.types.PARTICLE,convexParticle:ut.types.PARTICLE|ut.types.CONVEXPOLYHEDRON,cylinderCylinder:ut.types.CYLINDER,sphereCylinder:ut.types.SPHERE|ut.types.CYLINDER,planeCylinder:ut.types.PLANE|ut.types.CYLINDER,boxCylinder:ut.types.BOX|ut.types.CYLINDER,convexCylinder:ut.types.CONVEXPOLYHEDRON|ut.types.CYLINDER,heightfieldCylinder:ut.types.HEIGHTFIELD|ut.types.CYLINDER,particleCylinder:ut.types.PARTICLE|ut.types.CYLINDER,sphereTrimesh:ut.types.SPHERE|ut.types.TRIMESH,planeTrimesh:ut.types.PLANE|ut.types.TRIMESH},xr=class{get[Xt.sphereSphere](){return this.sphereSphere}get[Xt.spherePlane](){return this.spherePlane}get[Xt.boxBox](){return this.boxBox}get[Xt.sphereBox](){return this.sphereBox}get[Xt.planeBox](){return this.planeBox}get[Xt.convexConvex](){return this.convexConvex}get[Xt.sphereConvex](){return this.sphereConvex}get[Xt.planeConvex](){return this.planeConvex}get[Xt.boxConvex](){return this.boxConvex}get[Xt.sphereHeightfield](){return this.sphereHeightfield}get[Xt.boxHeightfield](){return this.boxHeightfield}get[Xt.convexHeightfield](){return this.convexHeightfield}get[Xt.sphereParticle](){return this.sphereParticle}get[Xt.planeParticle](){return this.planeParticle}get[Xt.boxParticle](){return this.boxParticle}get[Xt.convexParticle](){return this.convexParticle}get[Xt.cylinderCylinder](){return this.convexConvex}get[Xt.sphereCylinder](){return this.sphereConvex}get[Xt.planeCylinder](){return this.planeConvex}get[Xt.boxCylinder](){return this.boxConvex}get[Xt.convexCylinder](){return this.convexConvex}get[Xt.heightfieldCylinder](){return this.heightfieldCylinder}get[Xt.particleCylinder](){return this.particleCylinder}get[Xt.sphereTrimesh](){return this.sphereTrimesh}get[Xt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new vr,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new fr(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){let u=l*(a.frictionGravity||a.gravity).length(),m=n.invMass+i.invMass;m>0&&(m=1/m);let g=this.frictionEquationPool,v=g.length?g.pop():new os(n,i,u*m),p=g.length?g.pop():new os(n,i,u*m);return v.bi=p.bi=n,v.bj=p.bj=i,v.minForce=p.minForce=-u*m,v.maxForce=p.maxForce=u*m,v.ri.copy(t.ri),v.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(v.t,p.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=t.enabled,e.push(v,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Un.setZero(),Jn.setZero(),jn.setZero();let s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Un.vadd(e.ni,Un),Jn.vadd(e.ri,Jn),jn.vadd(e.rj,jn)):(Un.vsub(e.ni,Un),Jn.vadd(e.rj,Jn),jn.vadd(e.ri,jn));let o=1/t;Jn.scale(o,n.ri),jn.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Un.normalize(),Un.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let c=vh,l=xh,h=mh,d=gh;for(let u=0,m=t.length;u!==m;u++){let g=t[u],v=e[u],p=null;g.material&&v.material&&(p=n.getContactMaterial(g.material,v.material)||null);let f=g.type&Dt.KINEMATIC&&v.type&Dt.STATIC||g.type&Dt.STATIC&&v.type&Dt.KINEMATIC||g.type&Dt.KINEMATIC&&v.type&Dt.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],c),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);let _=g.shapes[x];for(let w=0;w<v.shapes.length;w++){v.quaternion.mult(v.shapeOrientations[w],l),v.quaternion.vmult(v.shapeOffsets[w],d),d.vadd(v.position,d);let S=v.shapes[w];if(!(_.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+S.boundingSphereRadius)continue;let T=null;_.material&&S.material&&(T=n.getContactMaterial(_.material,S.material)||null),this.currentContactMaterial=T||p||n.defaultContactMaterial;let R=_.type|S.type,F=this[R];if(F){let M=!1;_.type<S.type?M=F.call(this,_,S,h,d,c,l,g,v,_,S,f):M=F.call(this,S,_,d,h,l,c,v,g,_,S,f),M&&f&&(n.shapeOverlapKeeper.set(_.id,S.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,d){let u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,ts),u.ni.scale(u.ni.dot(ts),oa),ts.vsub(oa,u.rj),-ts.dot(u.ni)<=t.radius){if(d)return!0;let m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(a.position,m),g.vadd(i,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,h,d){let u=this.v3pool,m=Gh;n.vsub(i,es),e.getSideNormals(m,o);let g=t.radius,v=!1,p=Xh,f=Yh,x=Zh,_=null,w=0,S=0,T=0,R=null;for(let U=0,G=m.length;U!==G&&v===!1;U++){let z=kh;z.copy(m[U]);let X=z.length();z.normalize();let K=es.dot(z);if(K<X+g&&K>0){let B=Hh,O=Wh;B.copy(m[(U+1)%3]),O.copy(m[(U+2)%3]);let nt=B.length(),st=O.length();B.normalize(),O.normalize();let lt=es.dot(B),mt=es.dot(O);if(lt<nt&&lt>-nt&&mt<st&&mt>-st){let wt=Math.abs(K-X-g);if((R===null||wt<R)&&(R=wt,S=lt,T=mt,_=X,p.copy(z),f.copy(B),x.copy(O),w++,d))return!0}}}if(w){v=!0;let U=this.createContactEquation(a,c,t,e,l,h);p.scale(-g,U.ri),U.ni.copy(p),U.ni.negate(U.ni),p.scale(_,p),f.scale(S,f),p.vadd(f,p),x.scale(T,x),p.vadd(x,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let F=u.get(),M=qh;for(let U=0;U!==2&&!v;U++)for(let G=0;G!==2&&!v;G++)for(let z=0;z!==2&&!v;z++)if(F.set(0,0,0),U?F.vadd(m[0],F):F.vsub(m[0],F),G?F.vadd(m[1],F):F.vsub(m[1],F),z?F.vadd(m[2],F):F.vsub(m[2],F),i.vadd(F,M),M.vsub(n,M),M.lengthSquared()<g*g){if(d)return!0;v=!0;let X=this.createContactEquation(a,c,t,e,l,h);X.ri.copy(M),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(g,X.ri),X.rj.copy(F),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(c.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(F),F=null;let E=u.get(),H=u.get(),j=u.get(),P=u.get(),I=u.get(),L=m.length;for(let U=0;U!==L&&!v;U++)for(let G=0;G!==L&&!v;G++)if(U%3!==G%3){m[G].cross(m[U],E),E.normalize(),m[U].vadd(m[G],H),j.copy(n),j.vsub(H,j),j.vsub(i,j);let z=j.dot(E);E.scale(z,P);let X=0;for(;X===U%3||X===G%3;)X++;I.copy(n),I.vsub(P,I),I.vsub(H,I),I.vsub(i,I);let K=Math.abs(z),B=I.length();if(K<m[X].length()&&B<g){if(d)return!0;v=!0;let O=this.createContactEquation(a,c,t,e,l,h);H.vadd(P,O.rj),O.rj.copy(O.rj),I.negate(O.ni),O.ni.normalize(),O.ri.copy(O.rj),O.ri.vadd(i,O.ri),O.ri.vsub(n,O.ri),O.ri.normalize(),O.ri.scale(g,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(c.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}u.release(E,H,j,P,I)}planeBox(t,e,n,i,s,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,h,d,u,m){let g=lu;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,m)){let v=[],p=hu;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let f=0;for(let x=0;x!==v.length;x++){if(d)return!0;let _=this.createContactEquation(a,c,t,e,l,h),w=_.ri,S=_.rj;g.negate(_.ni),v[x].normal.negate(p),p.scale(v[x].depth,p),v[x].point.vadd(p,w),S.copy(v[x].point),w.vsub(n,w),S.vsub(i,S),w.vadd(n,w),w.vsub(a.position,w),S.vadd(i,S),S.vsub(c.position,S),this.result.push(_),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,d){let u=this.v3pool;n.vsub(i,$h);let m=e.faceNormals,g=e.faces,v=e.vertices,p=t.radius,f=!1;for(let x=0;x!==v.length;x++){let _=v[x],w=Qh;o.vmult(_,w),i.vadd(w,w);let S=Kh;if(w.vsub(n,S),S.lengthSquared()<p*p){if(d)return!0;f=!0;let T=this.createContactEquation(a,c,t,e,l,h);T.ri.copy(S),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(p,T.ri),w.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(c.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let x=0,_=g.length;x!==_&&f===!1;x++){let w=m[x],S=g[x],T=tu;o.vmult(w,T);let R=eu;o.vmult(v[S[0]],R),R.vadd(i,R);let F=nu;T.scale(-p,F),n.vadd(F,F);let M=iu;F.vsub(R,M);let E=M.dot(T),H=su;if(n.vsub(R,H),E<0&&H.dot(T)>0){let j=[];for(let P=0,I=S.length;P!==I;P++){let L=u.get();o.vmult(v[S[P]],L),i.vadd(L,L),j.push(L)}if(Vh(j,T,n)){if(d)return!0;f=!0;let P=this.createContactEquation(a,c,t,e,l,h);T.scale(-p,P.ri),T.negate(P.ni);let I=u.get();T.scale(-E,I);let L=u.get();T.scale(-p,L),n.vsub(i,P.rj),P.rj.vadd(L,P.rj),P.rj.vadd(I,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(c.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),u.release(I),u.release(L),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let U=0,G=j.length;U!==G;U++)u.release(j[U]);return}else for(let P=0;P!==S.length;P++){let I=u.get(),L=u.get();o.vmult(v[S[(P+1)%S.length]],I),o.vmult(v[S[(P+2)%S.length]],L),i.vadd(I,I),i.vadd(L,L);let U=Jh;L.vsub(I,U);let G=jh;U.unit(G);let z=u.get(),X=u.get();n.vsub(I,X);let K=X.dot(G);G.scale(K,z),z.vadd(I,z);let B=u.get();if(z.vsub(n,B),K>0&&K*K<U.lengthSquared()&&B.lengthSquared()<p*p){if(d)return!0;let O=this.createContactEquation(a,c,t,e,l,h);z.vsub(i,O.rj),z.vsub(n,O.ni),O.ni.normalize(),O.ni.scale(p,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(c.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let nt=0,st=j.length;nt!==st;nt++)u.release(j[nt]);u.release(I),u.release(L),u.release(z),u.release(B),u.release(X);return}u.release(I),u.release(L),u.release(z),u.release(B),u.release(X)}for(let P=0,I=j.length;P!==I;P++)u.release(j[P])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,d){let u=ru,m=ou;m.set(0,0,1),s.vmult(m,m);let g=0,v=au;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),m.dot(v)<=0){if(d)return!0;let x=this.createContactEquation(a,c,t,e,l,h),_=cu;m.scale(m.dot(v),_),u.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(m),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(c.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,d){let u=e.data,m=t.radius,g=e.elementSize,v=Su,p=Mu;Vt.pointToLocalFrame(i,o,n,p);let f=Math.floor((p.x-m)/g)-1,x=Math.ceil((p.x+m)/g)+1,_=Math.floor((p.y-m)/g)-1,w=Math.ceil((p.y+m)/g)+1;if(x<0||w<0||f>u.length||_>u[0].length)return;f<0&&(f=0),x<0&&(x=0),_<0&&(_=0),w<0&&(w=0),f>=u.length&&(f=u.length-1),x>=u.length&&(x=u.length-1),w>=u[0].length&&(w=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let S=[];e.getRectMinMax(f,_,x,w,S);let T=S[0],R=S[1];if(p.z-m>R||p.z+m<T)return;let F=this.result;for(let M=f;M<x;M++)for(let E=_;E<w;E++){let H=F.length,j=!1;if(e.getConvexTrianglePillar(M,E,!1),Vt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(j=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&j||(e.getConvexTrianglePillar(M,E,!0),Vt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(j=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&j))return!0;if(F.length-H>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,d){let u=e.data,m=e.elementSize,g=t.boundingSphereRadius,v=_u,p=yu,f=xu;Vt.pointToLocalFrame(i,o,n,f);let x=Math.floor((f.x-g)/m)-1,_=Math.ceil((f.x+g)/m)+1,w=Math.floor((f.y-g)/m)-1,S=Math.ceil((f.y+g)/m)+1;if(_<0||S<0||x>u.length||w>u[0].length)return;x<0&&(x=0),_<0&&(_=0),w<0&&(w=0),S<0&&(S=0),x>=u.length&&(x=u.length-1),_>=u.length&&(_=u.length-1),S>=u[0].length&&(S=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);let T=[];e.getRectMinMax(x,w,_,S,T);let R=T[0],F=T[1];if(!(f.z-g>F||f.z+g<R))for(let M=x;M<_;M++)for(let E=w;E<S;E++){let H=!1;if(e.getConvexTrianglePillar(M,E,!1),Vt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,p,null)),d&&H||(e.getConvexTrianglePillar(M,E,!0),Vt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,p,null)),d&&H))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,d){let u=pu;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let g=this.createContactEquation(c,a,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,d){let u=uu;u.set(0,0,1),a.quaternion.vmult(u,u);let m=du;if(i.vsub(a.position,m),u.dot(m)<=0){if(d)return!0;let v=this.createContactEquation(c,a,e,t,l,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);let p=fu;u.scale(u.dot(i),p),i.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,h,d){let u=-1,m=gu,g=vu,v=null,p=mu;if(p.copy(i),p.vsub(n,p),s.conjugate(aa),aa.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let f=0,x=t.faces.length;f!==x;f++){let _=[t.worldVertices[t.faces[f][0]]],w=t.worldFaceNormals[f];i.vsub(_[0],ca);let S=-w.dot(ca);if(v===null||Math.abs(S)<Math.abs(v)){if(d)return!0;v=S,u=f,m.copy(w)}}if(u!==-1){let f=this.createContactEquation(c,a,e,t,l,h);m.scale(v,g),g.vadd(i,g),g.vsub(n,g),f.rj.copy(g),m.negate(f.ni),f.ri.set(0,0,0);let x=f.ri,_=f.rj;x.vadd(i,x),x.vsub(c.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,d)}particleCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,d){let u=Ah,m=Th,g=Rh,v=Ch,p=Ph,f=Lh,x=Fh,_=Eh,w=bh,S=Dh;Vt.pointToLocalFrame(i,o,n,p);let T=t.radius;x.lowerBound.set(p.x-T,p.y-T,p.z-T),x.upperBound.set(p.x+T,p.y+T,p.z+T),e.getTrianglesInAABB(x,S);let R=wh,F=t.radius*t.radius;for(let P=0;P<S.length;P++)for(let I=0;I<3;I++)if(e.getVertex(e.indices[S[P]*3+I],R),R.vsub(p,w),w.lengthSquared()<=F){if(_.copy(R),Vt.pointToWorldFrame(i,o,_,R),R.vsub(n,w),d)return!0;let L=this.createContactEquation(a,c,t,e,l,h);L.ni.copy(w),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(t.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),L.rj.copy(R),L.rj.vsub(c.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let P=0;P<S.length;P++)for(let I=0;I<3;I++){e.getVertex(e.indices[S[P]*3+I],u),e.getVertex(e.indices[S[P]*3+(I+1)%3],m),m.vsub(u,g),p.vsub(m,f);let L=f.dot(g);p.vsub(u,f);let U=f.dot(g);if(U>0&&L<0&&(p.vsub(u,f),v.copy(g),v.normalize(),U=f.dot(v),v.scale(U,f),f.vadd(u,f),f.distanceTo(p)<t.radius)){if(d)return!0;let z=this.createContactEquation(a,c,t,e,l,h);f.vsub(p,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),Vt.pointToWorldFrame(i,o,f,f),f.vsub(c.position,z.rj),Vt.vectorToWorldFrame(o,z.ni,z.ni),Vt.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}let M=Ih,E=Nh,H=Uh,j=Sh;for(let P=0,I=S.length;P!==I;P++){e.getTriangleVertices(S[P],M,E,H),e.getNormal(S[P],j),p.vsub(M,f);let L=f.dot(j);if(j.scale(L,f),p.vsub(f,f),L=f.distanceTo(p),Ce.pointInTriangle(f,M,E,H)&&L<t.radius){if(d)return!0;let U=this.createContactEquation(a,c,t,e,l,h);f.vsub(p,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),Vt.pointToWorldFrame(i,o,f,f),f.vsub(c.position,U.rj),Vt.vectorToWorldFrame(o,U.ni,U.ni),Vt.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}S.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,d){let u=new y,m=_h;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);let v=new y;v.copy(u),Vt.pointToWorldFrame(i,o,v,u);let p=yh;if(u.vsub(n,p),m.dot(p)<=0){if(d)return!0;let x=this.createContactEquation(a,c,t,e,l,h);x.ni.copy(m);let _=Mh;m.scale(p.dot(m),_),u.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(c.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}},Un=new y,Jn=new y,jn=new y,mh=new y,gh=new y,vh=new ge,xh=new ge,_h=new y,yh=new y,Mh=new y,Sh=new y,bh=new y;new y;var wh=new y,Eh=new y,Ah=new y,Th=new y,Rh=new y,Ch=new y,Ph=new y,Lh=new y,Ih=new y,Nh=new y,Uh=new y,Fh=new Ee,Dh=[],ts=new y,oa=new y,Bh=new y,Oh=new y,zh=new y;function Vh(r,t,e){let n=null,i=r.length;for(let s=0;s!==i;s++){let o=r[s],a=Bh;r[(s+1)%i].vsub(o,a);let c=Oh;a.cross(t,c);let l=zh;e.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var es=new y,kh=new y,Hh=new y,Wh=new y,Gh=[new y,new y,new y,new y,new y,new y],qh=new y,Xh=new y,Yh=new y,Zh=new y,$h=new y,Jh=new y,jh=new y,Kh=new y,Qh=new y,tu=new y,eu=new y,nu=new y,iu=new y,su=new y;new y;new y;var ru=new y,ou=new y,au=new y,cu=new y,lu=new y,hu=new y,uu=new y,du=new y,fu=new y,pu=new y,aa=new ge,mu=new y;new y;var gu=new y,ca=new y,vu=new y,xu=new y,_u=new y,yu=[0],Mu=new y,Su=new y,ls=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,s=n.length,o=i.length,a=0;for(let c=0;c<s;c++){let l=!1,h=n[c];for(;h>i[a];)a++;l=h===i[a],l||la(t,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||la(e,h)}}};function la(r,t){r.push((t&4294901760)>>16,t&65535)}var or=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`,_r=class{constructor(){this.data={keys:[]}}get(t,e){let n=or(t,e);return this.data[n]}set(t,e,n){let i=or(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=or(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},hs=class extends is{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new ur,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new mr,this.constraints=[],this.narrowphase=new xr(this),this.collisionMatrix=new ns,this.collisionMatrixPrevious=new ns,this.bodyOverlapKeeper=new ls,this.shapeOverlapKeeper=new ls,this.contactmaterials=[],this.contactMaterialTable=new _r,this.defaultMaterial=new cs("default"),this.defaultContactMaterial=new as(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Kn?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Ce.ALL,n.from=t,n.to=e,n.callback=i,ar.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Ce.ANY,n.from=t,n.to=e,n.result=i,ar.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Ce.CLOSEST,n.from=t,n.to=e,n.result=i,ar.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Dt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let i=e[n].shapes;for(let s=0;s<i.length;s++){let o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=ee.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let i=ee.now(),s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ee.now()-i>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=Tu,i=Ru,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=Dt.DYNAMIC,u=-1/0,m=this.constraints,g=Au;c.length();let v=c.x,p=c.y,f=c.z,x=0;for(l&&(u=ee.now()),x=0;x!==s;x++){let P=o[x];if(P.type===d){let I=P.force,L=P.mass;I.x+=L*v,I.y+=L*p,I.z+=L*f}}for(let P=0,I=this.subsystems.length;P!==I;P++)this.subsystems[P].update();l&&(u=ee.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=ee.now()-u);let _=m.length;for(x=0;x!==_;x++){let P=m[x];if(!P.collideConnected)for(let I=n.length-1;I>=0;I-=1)(P.bodyA===n[I]&&P.bodyB===i[I]||P.bodyB===n[I]&&P.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),l&&(u=ee.now());let w=Eu,S=e.length;for(x=0;x!==S;x++)w.push(e[x]);e.length=0;let T=this.frictionEquations.length;for(x=0;x!==T;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,w,this.frictionEquations,g),l&&(h.narrowphase=ee.now()-u),l&&(u=ee.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);let R=e.length;for(let P=0;P!==R;P++){let I=e[P],L=I.bi,U=I.bj,G=I.si,z=I.sj,X;if(L.material&&U.material?X=this.getContactMaterial(L.material,U.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,L.material&&U.material&&(L.material.friction>=0&&U.material.friction>=0&&L.material.friction*U.material.friction,L.material.restitution>=0&&U.material.restitution>=0&&(I.restitution=L.material.restitution*U.material.restitution)),a.addEquation(I),L.allowSleep&&L.type===Dt.DYNAMIC&&L.sleepState===Dt.SLEEPING&&U.sleepState===Dt.AWAKE&&U.type!==Dt.STATIC){let K=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),B=U.sleepSpeedLimit**2;K>=B*2&&(L.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===Dt.DYNAMIC&&U.sleepState===Dt.SLEEPING&&L.sleepState===Dt.AWAKE&&L.type!==Dt.STATIC){let K=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),B=L.sleepSpeedLimit**2;K>=B*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,U,!0),this.collisionMatrixPrevious.get(L,U)||(Li.body=U,Li.contact=I,L.dispatchEvent(Li),Li.body=L,U.dispatchEvent(Li)),this.bodyOverlapKeeper.set(L.id,U.id),this.shapeOverlapKeeper.set(G.id,z.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=ee.now()-u,u=ee.now()),x=0;x!==s;x++){let P=o[x];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(_=m.length,x=0;x!==_;x++){let P=m[x];P.update();for(let I=0,L=P.equations.length;I!==L;I++){let U=P.equations[I];a.addEquation(U)}}a.solve(t,this),l&&(h.solve=ee.now()-u),a.removeAllEquations();let F=Math.pow;for(x=0;x!==s;x++){let P=o[x];if(P.type&d){let I=F(1-P.linearDamping,t),L=P.velocity;L.scale(I,L);let U=P.angularVelocity;if(U){let G=F(1-P.angularDamping,t);U.scale(G,U)}}}this.dispatchEvent(wu),l&&(u=ee.now());let E=this.stepnumber%(this.quatNormalizeSkip+1)===0,H=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,E,H);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=ee.now()-u),this.stepnumber+=1,this.dispatchEvent(bu);let j=!0;if(this.allowSleep)for(j=!1,x=0;x!==s;x++){let P=o[x];P.sleepTick(this.time),P.sleepState!==Dt.SLEEPING&&(j=!0)}this.hasActiveBodies=j}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Qe,tn),t){for(let s=0,o=Qe.length;s<o;s+=2)Ii.bodyA=this.getBodyById(Qe[s]),Ii.bodyB=this.getBodyById(Qe[s+1]),this.dispatchEvent(Ii);Ii.bodyA=Ii.bodyB=null}if(e){for(let s=0,o=tn.length;s<o;s+=2)Ni.bodyA=this.getBodyById(tn[s]),Ni.bodyB=this.getBodyById(tn[s+1]),this.dispatchEvent(Ni);Ni.bodyA=Ni.bodyB=null}Qe.length=tn.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Qe,tn),n){for(let s=0,o=Qe.length;s<o;s+=2){let a=this.getShapeById(Qe[s]),c=this.getShapeById(Qe[s+1]);en.shapeA=a,en.shapeB=c,a&&(en.bodyA=a.body),c&&(en.bodyB=c.body),this.dispatchEvent(en)}en.bodyA=en.bodyB=en.shapeA=en.shapeB=null}if(i){for(let s=0,o=tn.length;s<o;s+=2){let a=this.getShapeById(tn[s]),c=this.getShapeById(tn[s+1]);nn.shapeA=a,nn.shapeB=c,a&&(nn.bodyA=a.body),c&&(nn.bodyB=c.body),this.dispatchEvent(nn)}nn.bodyA=nn.bodyB=nn.shapeA=nn.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new Ee;var ar=new Ce,ee=globalThis.performance||{};if(!ee.now){let r=Date.now();ee.timing&&ee.timing.navigationStart&&(r=ee.timing.navigationStart),ee.now=()=>Date.now()-r}new y;var bu={type:"postStep"},wu={type:"preStep"},Li={type:Dt.COLLIDE_EVENT_NAME,body:null,contact:null},Eu=[],Au=[],Tu=[],Ru=[],Qe=[],tn=[],Ii={type:"beginContact",bodyA:null,bodyB:null},Ni={type:"endContact",bodyA:null,bodyB:null},en={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},nn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var Do="154";var Pu=0,va=1,Lu=2;var Fc=1,Iu=2,hn=3,Cn=0,be=1,dn=2;var Tn=0,_i=1,xa=2,_a=3,ya=4,Nu=5,mi=100,Uu=101,Fu=102,Ma=103,Sa=104,Du=200,Bu=201,Ou=202,zu=203,Dc=204,Bc=205,Vu=206,ku=207,Hu=208,Wu=209,Gu=210,qu=0,Xu=1,Yu=2,Qr=3,Zu=4,$u=5,Ju=6,ju=7,Oc=0,Ku=1,Qu=2,pn=0,td=1,ed=2,nd=3,id=4,sd=5,zc=300,Si=301,bi=302,to=303,eo=304,Js=306,no=1e3,ze=1001,io=1002,xe=1003,ba=1004;var br=1005;var Le=1006,rd=1007;var Hi=1008;var Rn=1009,od=1010,ad=1011,Bo=1012,Vc=1013,En=1014,An=1015,Wi=1016,kc=1017,Hc=1018,Hn=1020,cd=1021,Ve=1023,ld=1024,hd=1025,Wn=1026,wi=1027,ud=1028,Wc=1029,dd=1030,Gc=1031,qc=1033,wr=33776,Er=33777,Ar=33778,Tr=33779,wa=35840,Ea=35841,Aa=35842,Ta=35843,fd=36196,Ra=37492,Ca=37496,Pa=37808,La=37809,Ia=37810,Na=37811,Ua=37812,Fa=37813,Da=37814,Ba=37815,Oa=37816,za=37817,Va=37818,ka=37819,Ha=37820,Wa=37821,Rr=36492,pd=36283,Ga=36284,qa=36285,Xa=36286;var Ns=2300,Us=2301,Cr=2302,Ya=2400,Za=2401,$a=2402;var Xc=3e3,Gn=3001,md=3200,gd=3201,vd=0,xd=1,qn="",Pt="srgb",je="srgb-linear",Yc="display-p3";var Pr=7680;var _d=519,yd=512,Md=513,Sd=514,bd=515,wd=516,Ed=517,Ad=518,Td=519,Ja=35044;var ja="300 es",so=1035,fn=2e3,Fs=2001,Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lr=Math.PI/180,ro=180/Math.PI;function Zi(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ue[r&255]+ue[r>>8&255]+ue[r>>16&255]+ue[r>>24&255]+"-"+ue[t&255]+ue[t>>8&255]+"-"+ue[t>>16&15|64]+ue[t>>24&255]+"-"+ue[e&63|128]+ue[e>>8&255]+"-"+ue[e>>16&255]+ue[e>>24&255]+ue[n&255]+ue[n>>8&255]+ue[n>>16&255]+ue[n>>24&255]).toLowerCase()}function Se(r,t,e){return Math.max(t,Math.min(e,r))}function Rd(r,t){return(r%t+t)%t}function Ir(r,t,e){return(1-e)*r+e*t}function Ka(r){return(r&r-1)===0&&r!==0}function oo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function us(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ae(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Gt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},It=class r{constructor(t,e,n,i,s,o,a,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],v=i[0],p=i[3],f=i[6],x=i[1],_=i[4],w=i[7],S=i[2],T=i[5],R=i[8];return s[0]=o*v+a*x+c*S,s[3]=o*p+a*_+c*T,s[6]=o*f+a*w+c*R,s[1]=l*v+h*x+d*S,s[4]=l*p+h*_+d*T,s[7]=l*f+h*w+d*R,s[2]=u*v+m*x+g*S,s[5]=u*p+m*_+g*T,s[8]=u*f+m*w+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,m=l*s-o*c,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=m*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nr=new It;function Zc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}var Qa={};function Vi(r){r in Qa||(Qa[r]=!0,console.warn(r))}function yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ur(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Cd=new It().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Pd=new It().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ld(r){return r.convertSRGBToLinear().applyMatrix3(Pd)}function Id(r){return r.applyMatrix3(Cd).convertLinearToSRGB()}var Nd={[je]:r=>r,[Pt]:r=>r.convertSRGBToLinear(),[Yc]:Ld},Ud={[je]:r=>r,[Pt]:r=>r.convertLinearToSRGB(),[Yc]:Id},Fe={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return je},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=Nd[t],i=Ud[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},Qn,Bs=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=Ds("canvas")),Qn.width=t.width,Qn.height=t.height;let n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ds("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=yi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fd=0,Os=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Zi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Fr(i[o].image)):s.push(Fr(i[o]))}else s=Fr(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Fr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dd=0,ke=class r extends Pn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=ze,i=ze,s=Le,o=Hi,a=Ve,c=Rn,l=r.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Zi(),this.name="",this.source=new Os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Gn?Pt:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case ze:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case ze:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?Gn:Xc}set encoding(t){Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Gn?Pt:qn}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=zc;ke.DEFAULT_ANISOTROPY=1;var ce=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,w=(m+1)/2,S=(f+1)/2,T=(h+u)/4,R=(d+v)/4,F=(g+p)/4;return _>w&&_>S?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=R/n):w>S?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=T/i,s=F/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=R/s,i=F/s),this.set(n,i,s,e),this}let x=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((l+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gn=class extends Pn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Vi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gn?Pt:qn),this.texture=new ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Le,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Os(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zs=class extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xe,this.minFilter=xe,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ao=class extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xe,this.minFilter=xe,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||l!==m||h!==g){let p=1-a,f=c*u+l*m+h*g+d*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let S=Math.sqrt(_),T=Math.atan2(S,f*x);p=Math.sin(p*T)/S,a=Math.sin(a*T)/S}let w=a*x;if(c=c*p+u*w,l=l*p+m*w,h=h*p+g*w,d=d*p+v*w,p===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*d+c*m-l*u,t[e+1]=c*g+h*u+l*d-a*m,t[e+2]=l*g+h*m+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,h=c*n+a*e-s*i,d=c*i+s*n-o*e,u=-s*e-o*n-a*i;return this.x=l*c+u*-s+h*-a-d*-o,this.y=h*c+u*-o+d*-s-l*-a,this.z=d*c+u*-a+l*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dr=new W,tc=new Ln,Xn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),ti.copy(t.boundingBox),ti.applyMatrix4(t.matrixWorld),this.union(ti);else{let i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){let s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)rn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(rn)}else i.boundingBox===null&&i.computeBoundingBox(),ti.copy(i.boundingBox),ti.applyMatrix4(t.matrixWorld),this.union(ti)}let n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),ds.subVectors(this.max,Fi),ei.subVectors(t.a,Fi),ni.subVectors(t.b,Fi),ii.subVectors(t.c,Fi),yn.subVectors(ni,ei),Mn.subVectors(ii,ni),Dn.subVectors(ei,ii);let e=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-Dn.z,Dn.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,Dn.z,0,-Dn.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-Dn.y,Dn.x,0];return!Br(e,ei,ni,ii,ds)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,ei,ni,ii,ds))?!1:(fs.crossVectors(yn,Mn),e=[fs.x,fs.y,fs.z],Br(e,ei,ni,ii,ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},sn=[new W,new W,new W,new W,new W,new W,new W,new W],rn=new W,ti=new Xn,ei=new W,ni=new W,ii=new W,yn=new W,Mn=new W,Dn=new W,Fi=new W,ds=new W,fs=new W,Bn=new W;function Br(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Bn.fromArray(r,s);let a=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=t.dot(Bn),l=e.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Bd=new Xn,Di=new W,Or=new W,Gi=class{constructor(t=new W,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);let e=Di.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add(Or)),this.expandByPoint(Di.copy(t.center).sub(Or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},on=new W,zr=new W,ps=new W,Sn=new W,Vr=new W,ms=new W,kr=new W,co=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zr.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(zr);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ps),a=Sn.dot(this.direction),c=-Sn.dot(ps),l=Sn.lengthSq(),h=Math.abs(1-o*o),d,u,m,g;if(h>0)if(d=o*c-a,u=o*a-c,g=s*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,m=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(zr).addScaledVector(ps,u),m}intersectSphere(t,e){on.subVectors(t.center,this.origin);let n=on.dot(this.direction),i=on.dot(on)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,i,s){Vr.subVectors(e,t),ms.subVectors(n,t),kr.crossVectors(Vr,ms);let o=this.direction.dot(kr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);let c=a*this.direction.dot(ms.crossVectors(Sn,ms));if(c<0)return null;let l=a*this.direction.dot(Vr.cross(Sn));if(l<0||c+l>o)return null;let h=-a*Sn.dot(kr);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class r{constructor(t,e,n,i,s,o,a,c,l,h,d,u,m,g,v,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,d,u,m,g,v,p)}set(t,e,n,i,s,o,a,c,l,h,d,u,m,g,v,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/si.setFromMatrixColumn(t,0).length(),s=1/si.setFromMatrixColumn(t,1).length(),o=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,m=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=u-v*l,e[9]=-a*c,e[2]=v-u*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,m=c*d,g=l*h,v=l*d;e[0]=u+v*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=v+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,m=c*d,g=l*h,v=l*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,m=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=g*l-m,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,m=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=o*c,m=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Od,t,zd)}lookAt(t,e,n){let i=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),bn.crossVectors(n,Te),bn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),bn.crossVectors(n,Te)),bn.normalize(),gs.crossVectors(Te,bn),i[0]=bn.x,i[4]=gs.x,i[8]=Te.x,i[1]=bn.y,i[5]=gs.y,i[9]=Te.y,i[2]=bn.z,i[6]=gs.z,i[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],x=n[3],_=n[7],w=n[11],S=n[15],T=i[0],R=i[4],F=i[8],M=i[12],E=i[1],H=i[5],j=i[9],P=i[13],I=i[2],L=i[6],U=i[10],G=i[14],z=i[3],X=i[7],K=i[11],B=i[15];return s[0]=o*T+a*E+c*I+l*z,s[4]=o*R+a*H+c*L+l*X,s[8]=o*F+a*j+c*U+l*K,s[12]=o*M+a*P+c*G+l*B,s[1]=h*T+d*E+u*I+m*z,s[5]=h*R+d*H+u*L+m*X,s[9]=h*F+d*j+u*U+m*K,s[13]=h*M+d*P+u*G+m*B,s[2]=g*T+v*E+p*I+f*z,s[6]=g*R+v*H+p*L+f*X,s[10]=g*F+v*j+p*U+f*K,s[14]=g*M+v*P+p*G+f*B,s[3]=x*T+_*E+w*I+S*z,s[7]=x*R+_*H+w*L+S*X,s[11]=x*F+_*j+w*U+S*K,s[15]=x*M+_*P+w*G+S*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],v=t[7],p=t[11],f=t[15];return g*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*m-n*c*m)+v*(+e*c*m-e*l*u+s*o*u-i*o*m+i*l*h-s*c*h)+p*(+e*l*d-e*a*m-s*o*d+n*o*m+s*a*h-n*l*h)+f*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],v=t[13],p=t[14],f=t[15],x=d*p*l-v*u*l+v*c*m-a*p*m-d*c*f+a*u*f,_=g*u*l-h*p*l-g*c*m+o*p*m+h*c*f-o*u*f,w=h*v*l-g*d*l+g*a*m-o*v*m-h*a*f+o*d*f,S=g*d*c-h*v*c-g*a*u+o*v*u+h*a*p-o*d*p,T=e*x+n*_+i*w+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=x*R,t[1]=(v*u*s-d*p*s-v*i*m+n*p*m+d*i*f-n*u*f)*R,t[2]=(a*p*s-v*c*s+v*i*l-n*p*l-a*i*f+n*c*f)*R,t[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*m-n*c*m)*R,t[4]=_*R,t[5]=(h*p*s-g*u*s+g*i*m-e*p*m-h*i*f+e*u*f)*R,t[6]=(g*c*s-o*p*s-g*i*l+e*p*l+o*i*f-e*c*f)*R,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*m+e*c*m)*R,t[8]=w*R,t[9]=(g*d*s-h*v*s-g*n*m+e*v*m+h*n*f-e*d*f)*R,t[10]=(o*v*s-g*a*s+g*n*l-e*v*l-o*n*f+e*a*f)*R,t[11]=(h*a*s-o*d*s-h*n*l+e*d*l+o*n*m-e*a*m)*R,t[12]=S*R,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*p+e*d*p)*R,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*p-e*a*p)*R,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,m=s*h,g=s*d,v=o*h,p=o*d,f=a*d,x=c*l,_=c*h,w=c*d,S=n.x,T=n.y,R=n.z;return i[0]=(1-(v+f))*S,i[1]=(m+w)*S,i[2]=(g-_)*S,i[3]=0,i[4]=(m-w)*T,i[5]=(1-(u+f))*T,i[6]=(p+x)*T,i[7]=0,i[8]=(g+_)*R,i[9]=(p-x)*R,i[10]=(1-(u+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=si.set(i[0],i[1],i[2]).length(),o=si.set(i[4],i[5],i[6]).length(),a=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],De.copy(this);let l=1/s,h=1/o,d=1/a;return De.elements[0]*=l,De.elements[1]*=l,De.elements[2]*=l,De.elements[4]*=h,De.elements[5]*=h,De.elements[6]*=h,De.elements[8]*=d,De.elements[9]*=d,De.elements[10]*=d,e.setFromRotationMatrix(De),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=fn){let c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),m,g;if(a===fn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Fs)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=fn){let c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,m=(n+i)*h,g,v;if(a===fn)g=(o+s)*d,v=-2*d;else if(a===Fs)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},si=new W,De=new fe,Od=new W(0,0,0),zd=new W(1,1,1),bn=new W,gs=new W,Te=new W,ec=new fe,nc=new Ln,Vs=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nc.setFromEuler(this),this.setFromQuaternion(nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vs.DEFAULT_ORDER="XYZ";var ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vd=0,ic=new W,ri=new Ln,an=new fe,vs=new W,Bi=new W,kd=new W,Hd=new Ln,sc=new W(1,0,0),rc=new W(0,1,0),oc=new W(0,0,1),Wd={type:"added"},ac={type:"removed"},He=class r extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new W,e=new Vs,n=new Ln,i=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new It}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(sc,t)}rotateY(t){return this.rotateOnAxis(rc,t)}rotateZ(t){return this.rotateOnAxis(oc,t)}translateOnAxis(t,e){return ic.copy(t).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sc,t)}translateY(t){return this.translateOnAxis(rc,t)}translateZ(t){return this.translateOnAxis(oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Bi,vs,this.up):an.lookAt(vs,Bi,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(an),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ac)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(ac)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++){let a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};He.DEFAULT_UP=new W(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=new W,cn=new W,Hr=new W,ln=new W,oi=new W,ai=new W,cc=new W,Wr=new W,Gr=new W,qr=new W,xs=!1,gi=class r{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Be.subVectors(t,e),i.cross(Be);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Be.subVectors(i,e),cn.subVectors(n,e),Hr.subVectors(t,e);let o=Be.dot(Be),a=Be.dot(cn),c=Be.dot(Hr),l=cn.dot(cn),h=cn.dot(Hr),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);let u=1/d,m=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ln),ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(t,e,n,i,s,o,a,c){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),this.getInterpolation(t,e,n,i,s,o,a,c)}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,ln),c.setScalar(0),c.addScaledVector(s,ln.x),c.addScaledVector(o,ln.y),c.addScaledVector(a,ln.z),c}static isFrontFacing(t,e,n,i){return Be.subVectors(n,e),cn.subVectors(t,e),Be.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Be.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;oi.subVectors(i,n),ai.subVectors(s,n),Wr.subVectors(t,n);let c=oi.dot(Wr),l=ai.dot(Wr);if(c<=0&&l<=0)return e.copy(n);Gr.subVectors(t,i);let h=oi.dot(Gr),d=ai.dot(Gr);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(oi,o);qr.subVectors(t,s);let m=oi.dot(qr),g=ai.dot(qr);if(g>=0&&m<=g)return e.copy(s);let v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ai,a);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return cc.subVectors(s,i),a=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(cc,a);let f=1/(p+v+u);return o=v*f,a=u*f,e.copy(n).addScaledVector(oi,o).addScaledVector(ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gd=0,Ei=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=_i,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Bc,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oe={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Xr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Fe.workingColorSpace){if(t=Rd(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Xr(o,s,t+1/3),this.g=Xr(o,s,t),this.b=Xr(o,s,t-1/3)}return Fe.toWorkingColorSpace(this,i),this}setStyle(t,e=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pt){let n=$c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pt){return Fe.fromWorkingColorSpace(de.copy(this),t),Math.round(Se(de.r*255,0,255))*65536+Math.round(Se(de.g*255,0,255))*256+Math.round(Se(de.b*255,0,255))}getHexString(t=Pt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Fe.workingColorSpace){Fe.fromWorkingColorSpace(de.copy(this),e);let n=de.r,i=de.g,s=de.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Fe.workingColorSpace){return Fe.fromWorkingColorSpace(de.copy(this),e),t.r=de.r,t.g=de.g,t.b=de.b,t}getStyle(t=Pt){Fe.fromWorkingColorSpace(de.copy(this),t);let e=de.r,n=de.g,i=de.b;return t!==Pt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oe),Oe.h+=t,Oe.s+=e,Oe.l+=n,this.setHSL(Oe.h,Oe.s,Oe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oe),t.getHSL(_s);let n=Ir(Oe.h,_s.h,e),i=Ir(Oe.s,_s.s,e),s=Ir(Oe.l,_s.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},de=new Wt;Wt.NAMES=$c;var Hs=class extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var te=new W,ys=new Gt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this.updateRange={offset:0,count:-1},this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyMatrix3(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyMatrix4(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyNormalMatrix(t),this.setXYZ(e,te.x,te.y,te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.transformDirection(t),this.setXYZ(e,te.x,te.y,te.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}};var Ws=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gs=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var mn=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}};var qd=0,Pe=new fe,Yr=new He,ci=new W,Re=new Xn,Oi=new Xn,oe=new W,Yn=class r extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zc(t)?Gs:Ws)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new It().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return Yr.lookAt(t),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Re.setFromBufferAttribute(s),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Oi.setFromBufferAttribute(a),this.morphTargetsRelative?(oe.addVectors(Re.min,Oi.min),Re.expandByPoint(oe),oe.addVectors(Re.max,Oi.max),Re.expandByPoint(oe)):(Re.expandByPoint(Oi.min),Re.expandByPoint(Oi.max))}Re.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(oe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)oe.fromBufferAttribute(a,l),c&&(ci.fromBufferAttribute(t,l),oe.add(ci)),i=Math.max(i,n.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new W,h[E]=new W;let d=new W,u=new W,m=new W,g=new Gt,v=new Gt,p=new Gt,f=new W,x=new W;function _(E,H,j){d.fromArray(i,E*3),u.fromArray(i,H*3),m.fromArray(i,j*3),g.fromArray(o,E*2),v.fromArray(o,H*2),p.fromArray(o,j*2),u.sub(d),m.sub(d),v.sub(g),p.sub(g);let P=1/(v.x*p.y-p.x*v.y);isFinite(P)&&(f.copy(u).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(P),x.copy(m).multiplyScalar(v.x).addScaledVector(u,-p.x).multiplyScalar(P),l[E].add(f),l[H].add(f),l[j].add(f),h[E].add(x),h[H].add(x),h[j].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,H=w.length;E<H;++E){let j=w[E],P=j.start,I=j.count;for(let L=P,U=P+I;L<U;L+=3)_(n[L+0],n[L+1],n[L+2])}let S=new W,T=new W,R=new W,F=new W;function M(E){R.fromArray(s,E*3),F.copy(R);let H=l[E];S.copy(H),S.sub(R.multiplyScalar(R.dot(H))).normalize(),T.crossVectors(F,H);let P=T.dot(h[E])<0?-1:1;c[E*4]=S.x,c[E*4+1]=S.y,c[E*4+2]=S.z,c[E*4+3]=P}for(let E=0,H=w.length;E<H;++E){let j=w[E],P=j.start,I=j.count;for(let L=P,U=P+I;L<U;L+=3)M(n[L+0]),M(n[L+1]),M(n[L+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let i=new W,s=new W,o=new W,a=new W,c=new W,l=new W,h=new W,d=new W;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*h;for(let f=0;f<h;f++)u[g++]=l[m++]}return new Ie(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],m=t(u,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lc=new fe,On=new co,Ms=new Gi,hc=new W,li=new W,hi=new W,ui=new W,Zr=new W,Ss=new W,bs=new Gt,ws=new Gt,Es=new Gt,uc=new W,dc=new W,fc=new W,As=new W,Ts=new W,Je=class extends He{constructor(t=new Yn,e=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ss.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],d=s[c];h!==0&&(Zr.fromBufferAttribute(d,t),o?Ss.addScaledVector(Zr,h):Ss.addScaledVector(Zr.sub(e),h))}e.add(Ss)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),On.copy(t.ray).recast(t.near),!(Ms.containsPoint(On.origin)===!1&&(On.intersectSphere(Ms,hc)===null||On.origin.distanceToSquared(hc)>(t.far-t.near)**2))&&(lc.copy(s).invert(),On.copy(t.ray).applyMatrix4(lc),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let p=u[g],f=o[p.materialIndex],x=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=x,S=_;w<S;w+=3){let T=a.getX(w),R=a.getX(w+1),F=a.getX(w+2);i=Rs(this,f,t,n,l,h,d,T,R,F),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let x=a.getX(p),_=a.getX(p+1),w=a.getX(p+2);i=Rs(this,o,t,n,l,h,d,x,_,w),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let p=u[g],f=o[p.materialIndex],x=Math.max(p.start,m.start),_=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=x,S=_;w<S;w+=3){let T=w,R=w+1,F=w+2;i=Rs(this,f,t,n,l,h,d,T,R,F),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let x=p,_=p+1,w=p+2;i=Rs(this,o,t,n,l,h,d,x,_,w),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Xd(r,t,e,n,i,s,o,a){let c;if(t.side===be?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Cn,a),c===null)return null;Ts.copy(a),Ts.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(Ts);return l<e.near||l>e.far?null:{distance:l,point:Ts.clone(),object:r}}function Rs(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,li),r.getVertexPosition(c,hi),r.getVertexPosition(l,ui);let h=Xd(r,t,e,n,li,hi,ui,As);if(h){i&&(bs.fromBufferAttribute(i,a),ws.fromBufferAttribute(i,c),Es.fromBufferAttribute(i,l),h.uv=gi.getInterpolation(As,li,hi,ui,bs,ws,Es,new Gt)),s&&(bs.fromBufferAttribute(s,a),ws.fromBufferAttribute(s,c),Es.fromBufferAttribute(s,l),h.uv1=gi.getInterpolation(As,li,hi,ui,bs,ws,Es,new Gt),h.uv2=h.uv1),o&&(uc.fromBufferAttribute(o,a),dc.fromBufferAttribute(o,c),fc.fromBufferAttribute(o,l),h.normal=gi.getInterpolation(As,li,hi,ui,uc,dc,fc,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new W,materialIndex:0};gi.getNormal(li,hi,ui,d.normal),h.face=d}return h}var qi=class r extends Yn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(h,3)),this.setAttribute("uv",new mn(d,2));function g(v,p,f,x,_,w,S,T,R,F,M){let E=w/R,H=S/F,j=w/2,P=S/2,I=T/2,L=R+1,U=F+1,G=0,z=0,X=new W;for(let K=0;K<U;K++){let B=K*H-P;for(let O=0;O<L;O++){let nt=O*E-j;X[v]=nt*x,X[p]=B*_,X[f]=I,l.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[f]=T>0?1:-1,h.push(X.x,X.y,X.z),d.push(O/R),d.push(1-K/F),G+=1}}for(let K=0;K<F;K++)for(let B=0;B<R;B++){let O=u+B+L*K,nt=u+B+L*(K+1),st=u+(B+1)+L*(K+1),lt=u+(B+1)+L*K;c.push(O,nt,lt),c.push(nt,st,lt),z+=6}a.addGroup(m,z,M),m+=z,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ai(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ve(r){let t={};for(let e=0;e<r.length;e++){let n=Ai(r[e]);for(let i in n)t[i]=n[i]}return t}function Yd(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Jc(r){return r.getRenderTarget()===null?r.outputColorSpace:je}var Zd={clone:Ai,merge:ve},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qs=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_e=class extends qs{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},di=-90,fi=1,lo=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;let i=new _e(di,fi,t,e);i.layers=this.layers,this.add(i);let s=new _e(di,fi,t,e);s.layers=this.layers,this.add(s);let o=new _e(di,fi,t,e);o.layers=this.layers,this.add(o);let a=new _e(di,fi,t,e);a.layers=this.layers,this.add(a);let c=new _e(di,fi,t,e);c.layers=this.layers,this.add(c);let l=new _e(di,fi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[i,s,o,a,c,l]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=pn,t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}},Xs=class extends ke{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ho=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Vi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Gn?Pt:qn),this.texture=new Xs(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qi(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:Tn});s.uniforms.tEquirect.value=e;let o=new Je(i,s),a=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Le),new lo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},$r=new W,jd=new W,Kd=new It,un=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=$r.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kd.getNormalMatrix(t),i=this.coplanarPoint($r).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zn=new Gi,Cs=new W,Ys=class{constructor(t=new un,e=new un,n=new un,i=new un,s=new un,o=new un){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],m=i[8],g=i[9],v=i[10],p=i[11],f=i[12],x=i[13],_=i[14],w=i[15];if(n[0].setComponents(c-s,u-l,p-m,w-f).normalize(),n[1].setComponents(c+s,u+l,p+m,w+f).normalize(),n[2].setComponents(c+o,u+h,p+g,w+x).normalize(),n[3].setComponents(c-o,u-h,p-g,w-x).normalize(),n[4].setComponents(c-a,u-d,p-v,w-_).normalize(),e===fn)n[5].setComponents(c+a,u+d,p+v,w+_).normalize();else if(e===Fs)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Cs.x=i.normal.x>0?t.max.x:t.min.x,Cs.y=i.normal.y>0?t.max.y:t.min.y,Cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Qd(r,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let d=l.array,u=l.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=r.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=r.SHORT;else if(d instanceof Uint32Array)g=r.UNSIGNED_INT;else if(d instanceof Int32Array)g=r.INT;else if(d instanceof Int8Array)g=r.BYTE;else if(d instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){let u=h.array,m=h.updateRange;r.bindBuffer(d,l),m.count===-1?r.bufferSubData(d,0,u):(e?r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:a,update:c}}var uo=class r extends Yn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){let x=f*u-o;for(let _=0;_<l;_++){let w=_*d-s;g.push(w,-x,0),v.push(0,0,1),p.push(_/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<a;x++){let _=x+l*f,w=x+l*(f+1),S=x+1+l*(f+1),T=x+1+l*f;m.push(_,w,T),m.push(w,S,T)}this.setIndex(m),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Kf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,op=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:tf,alphahash_pars_fragment:ef,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:of,aomap_fragment:af,aomap_pars_fragment:cf,begin_vertex:lf,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:vf,color_fragment:xf,color_pars_fragment:_f,color_pars_vertex:yf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:wf,displacementmap_pars_vertex:Ef,displacementmap_vertex:Af,emissivemap_fragment:Tf,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:Pf,envmap_fragment:Lf,envmap_common_pars_fragment:If,envmap_pars_fragment:Nf,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Xf,envmap_vertex:Ff,fog_vertex:Df,fog_pars_vertex:Bf,fog_fragment:Of,fog_pars_fragment:zf,gradientmap_pars_fragment:Vf,lightmap_fragment:kf,lightmap_pars_fragment:Hf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Gf,lights_pars_begin:qf,lights_toon_fragment:Yf,lights_toon_pars_fragment:Zf,lights_phong_fragment:$f,lights_phong_pars_fragment:Jf,lights_physical_fragment:jf,lights_physical_pars_fragment:Kf,lights_fragment_begin:Qf,lights_fragment_maps:tp,lights_fragment_end:ep,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:rp,map_fragment:op,map_pars_fragment:ap,map_particle_fragment:cp,map_particle_pars_fragment:lp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:vp,normal_pars_fragment:xp,normal_pars_vertex:_p,normal_vertex:yp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Ep,opaque_fragment:Ap,packing:Tp,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Pp,dithering_pars_fragment:Lp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Fp,shadowmap_vertex:Dp,shadowmask_pars_fragment:Bp,skinbase_vertex:Op,skinning_pars_vertex:zp,skinning_vertex:Vp,skinnormal_vertex:kp,specularmap_fragment:Hp,specularmap_pars_fragment:Wp,tonemapping_fragment:Gp,tonemapping_pars_fragment:qp,transmission_fragment:Xp,transmission_pars_fragment:Yp,uv_pars_fragment:Zp,uv_pars_vertex:$p,uv_vertex:Jp,worldpos_vertex:jp,background_vert:Kp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:cm,equirect_frag:lm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:vm,meshnormal_vert:xm,meshnormal_frag:_m,meshphong_vert:ym,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:bm,meshtoon_vert:wm,meshtoon_frag:Em,points_vert:Am,points_frag:Tm,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Pm,sprite_frag:Lm},it={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},$e={basic:{uniforms:ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:ve([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:ve([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:ve([it.points,it.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:ve([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:ve([it.common,it.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:ve([it.sprite,it.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:ve([it.common,it.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:ve([it.lights,it.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};$e.physical={uniforms:ve([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var Ps={r:0,b:0,g:0};function Im(r,t,e,n,i,s,o){let a=new Wt(0),c=s===!0?0:1,l,h,d=null,u=0,m=null;function g(p,f){let x=!1,_=f.isScene===!0?f.background:null;switch(_&&_.isTexture&&(_=(f.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),x=!0),r.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Js)?(h===void 0&&(h=new Je(new qi(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Ai($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=_.colorSpace!==Pt,(d!==_||u!==_.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Je(new uo(2,2),new vn({name:"BackgroundMaterial",uniforms:Ai($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=_.colorSpace!==Pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,m=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,f){p.getRGB(Ps,Jc(r)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(a,c)},render:g}}function Nm(r,t,e,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null),l=c,h=!1;function d(I,L,U,G,z){let X=!1;if(o){let K=v(G,U,L);l!==K&&(l=K,m(l.object)),X=f(I,G,U,z),X&&x(I,G,U,z)}else{let K=L.wireframe===!0;(l.geometry!==G.id||l.program!==U.id||l.wireframe!==K)&&(l.geometry=G.id,l.program=U.id,l.wireframe=K,X=!0)}z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,F(I,L,U,G),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function v(I,L,U){let G=U.wireframe===!0,z=a[I.id];z===void 0&&(z={},a[I.id]=z);let X=z[L.id];X===void 0&&(X={},z[L.id]=X);let K=X[G];return K===void 0&&(K=p(u()),X[G]=K),K}function p(I){let L=[],U=[],G=[];for(let z=0;z<i;z++)L[z]=0,U[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:G,object:I,attributes:{},index:null}}function f(I,L,U,G){let z=l.attributes,X=L.attributes,K=0,B=U.getAttributes();for(let O in B)if(B[O].location>=0){let st=z[O],lt=X[O];if(lt===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(lt=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(lt=I.instanceColor)),st===void 0||st.attribute!==lt||lt&&st.data!==lt.data)return!0;K++}return l.attributesNum!==K||l.index!==G}function x(I,L,U,G){let z={},X=L.attributes,K=0,B=U.getAttributes();for(let O in B)if(B[O].location>=0){let st=X[O];st===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(st=I.instanceColor));let lt={};lt.attribute=st,st&&st.data&&(lt.data=st.data),z[O]=lt,K++}l.attributes=z,l.attributesNum=K,l.index=G}function _(){let I=l.newAttributes;for(let L=0,U=I.length;L<U;L++)I[L]=0}function w(I){S(I,0)}function S(I,L){let U=l.newAttributes,G=l.enabledAttributes,z=l.attributeDivisors;U[I]=1,G[I]===0&&(r.enableVertexAttribArray(I),G[I]=1),z[I]!==L&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,L),z[I]=L)}function T(){let I=l.newAttributes,L=l.enabledAttributes;for(let U=0,G=L.length;U<G;U++)L[U]!==I[U]&&(r.disableVertexAttribArray(U),L[U]=0)}function R(I,L,U,G,z,X,K){K===!0?r.vertexAttribIPointer(I,L,U,z,X):r.vertexAttribPointer(I,L,U,G,z,X)}function F(I,L,U,G){if(n.isWebGL2===!1&&(I.isInstancedMesh||G.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let z=G.attributes,X=U.getAttributes(),K=L.defaultAttributeValues;for(let B in X){let O=X[B];if(O.location>=0){let nt=z[B];if(nt===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor)),nt!==void 0){let st=nt.normalized,lt=nt.itemSize,mt=e.get(nt);if(mt===void 0)continue;let wt=mt.buffer,yt=mt.type,kt=mt.bytesPerElement,ye=n.isWebGL2===!0&&(yt===r.INT||yt===r.UNSIGNED_INT||nt.gpuType===Vc);if(nt.isInterleavedBufferAttribute){let Ft=nt.data,V=Ft.stride,le=nt.offset;if(Ft.isInstancedInterleavedBuffer){for(let Mt=0;Mt<O.locationSize;Mt++)S(O.location+Mt,Ft.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let Mt=0;Mt<O.locationSize;Mt++)w(O.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let Mt=0;Mt<O.locationSize;Mt++)R(O.location+Mt,lt/O.locationSize,yt,st,V*kt,(le+lt/O.locationSize*Mt)*kt,ye)}else{if(nt.isInstancedBufferAttribute){for(let Ft=0;Ft<O.locationSize;Ft++)S(O.location+Ft,nt.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ft=0;Ft<O.locationSize;Ft++)w(O.location+Ft);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let Ft=0;Ft<O.locationSize;Ft++)R(O.location+Ft,lt/O.locationSize,yt,st,lt*kt,lt/O.locationSize*Ft*kt,ye)}}else if(K!==void 0){let st=K[B];if(st!==void 0)switch(st.length){case 2:r.vertexAttrib2fv(O.location,st);break;case 3:r.vertexAttrib3fv(O.location,st);break;case 4:r.vertexAttrib4fv(O.location,st);break;default:r.vertexAttrib1fv(O.location,st)}}}}T()}function M(){j();for(let I in a){let L=a[I];for(let U in L){let G=L[U];for(let z in G)g(G[z].object),delete G[z];delete L[U]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;let L=a[I.id];for(let U in L){let G=L[U];for(let z in G)g(G[z].object),delete G[z];delete L[U]}delete a[I.id]}function H(I){for(let L in a){let U=a[L];if(U[I.id]===void 0)continue;let G=U[I.id];for(let z in G)g(G[z].object),delete G[z];delete U[I.id]}}function j(){P(),h=!0,l!==c&&(l=c,m(l.object))}function P(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:j,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:_,enableAttribute:w,disableUnusedAttributes:T}}function Um(r,t,e,n){let i=n.isWebGL2,s;function o(l){s=l}function a(l,h){r.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,d){if(d===0)return;let u,m;if(i)u=r,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,h,d),e.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=c}function Fm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,w=o||t.has("OES_texture_float"),S=_&&w,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:T}}function Dm(r){let t=this,e=null,n=0,i=!1,s=!1,o=new un,a=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{let x=s?0:n,_=x*4,w=f.clippingState||null;c.value=w,w=h(g,u,_,m);for(let S=0;S!==_;++S)w[S]=e[S];f.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let f=m+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,w=m;_!==v;++_,w+=4)o.copy(d[_]).applyMatrix4(x,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Bm(r){let t=new WeakMap;function e(o,a){return a===to?o.mapping=Si:a===eo&&(o.mapping=bi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===to||a===eo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ho(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var fo=class extends qs{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vi=4,pc=[.125,.215,.35,.446,.526,.582],kn=20,Jr=new fo,mc=new Wt,jr=null,Vn=(1+Math.sqrt(5))/2,pi=1/Vn,gc=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Vn,pi),new W(0,Vn,-pi),new W(pi,0,Vn),new W(-pi,0,Vn),new W(Vn,pi,0),new W(-Vn,pi,0)],Zs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){jr=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr),t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Wi,format:Ve,colorSpace:je,depthBuffer:!1},i=vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Om(s)),this._blurMaterial=zm(s,t,e)}return i}_compileMaterial(t){let e=new Je(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,i){let a=new _e(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(mc),h.toneMapping=pn,h.autoClear=!1;let m=new Hs({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new Je(new qi,m),v=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(mc),v=!0);for(let f=0;f<6;f++){let x=f%3;x===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):x===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let _=this._cubeSize;Ls(i,x*_,f>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Si||t.mapping===bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Ls(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Jr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=gc[(i-1)%gc.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Je(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*kn-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):kn;p>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);let f=[],x=0;for(let R=0;R<kn;++R){let F=R/v,M=Math.exp(-F*F/2);f.push(M),R===0?x+=M:R<p&&(x+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let w=this._sizeLods[i],S=3*w*(i>_-vi?i-_+vi:0),T=4*(this._cubeSize-w);Ls(e,S,T,3*w,2*w),c.setRenderTarget(e),c.render(d,Jr)}};function Om(r){let t=[],e=[],n=[],i=r,s=r-vi+1+pc.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>r-vi?c=pc[o-r+vi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,v=3,p=2,f=1,x=new Float32Array(v*g*m),_=new Float32Array(p*g*m),w=new Float32Array(f*g*m);for(let T=0;T<m;T++){let R=T%3*2/3-1,F=T>2?0:-1,M=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];x.set(M,v*g*T),_.set(u,p*g*T);let E=[T,T,T,T,T,T];w.set(E,f*g*T)}let S=new Yn;S.setAttribute("position",new Ie(x,v)),S.setAttribute("uv",new Ie(_,p)),S.setAttribute("faceIndex",new Ie(w,f)),t.push(S),i>vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vc(r,t,e){let n=new gn(r,t,e);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function zm(r,t,e){let n=new Float32Array(kn),i=new W(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function xc(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function _c(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===to||c===eo,h=c===Si||c===bi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Zs(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Zs(r));let u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function km(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hm(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let v=u.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)t.remove(v[p])}u.removeEventListener("dispose",o),delete i[u.id];let m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)t.update(u[g],r.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let v=m[g];for(let p=0,f=v.length;p<f;p++)t.update(v[p],r.ARRAY_BUFFER)}}function l(d){let u=[],m=d.index,g=d.attributes.position,v=0;if(m!==null){let x=m.array;v=m.version;for(let _=0,w=x.length;_<w;_+=3){let S=x[_+0],T=x[_+1],R=x[_+2];u.push(S,T,T,R,R,S)}}else{let x=g.array;v=g.version;for(let _=0,w=x.length/3-1;_<w;_+=3){let S=_+0,T=_+1,R=_+2;u.push(S,T,T,R,R,S)}}let p=new(Zc(u)?Gs:Ws)(u,1);p.version=v;let f=s.get(d);f&&t.remove(f),s.set(d,p)}function h(d){let u=s.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Wm(r,t,e,n){let i=n.isWebGL2,s;function o(u){s=u}let a,c;function l(u){a=u.type,c=u.bytesPerElement}function h(u,m){r.drawElements(s,m,a,u*c),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let v,p;if(i)v=r,p="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,a,u*c,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function Gm(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qm(r,t){return r[0]-t[0]}function Xm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Ym(r,t,e){let n={},i=new Float32Array(8),s=new WeakMap,o=new ce,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){let u=l.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=s.get(h);if(v===void 0||v.count!==g){let I=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();let x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],F=0;x===!0&&(F=1),_===!0&&(F=2),w===!0&&(F=3);let M=h.attributes.position.count*F,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let H=new Float32Array(M*E*4*g),j=new zs(H,M,E,g);j.type=An,j.needsUpdate=!0;let P=F*4;for(let L=0;L<g;L++){let U=S[L],G=T[L],z=R[L],X=M*E*4*L;for(let K=0;K<U.count;K++){let B=K*P;x===!0&&(o.fromBufferAttribute(U,K),H[X+B+0]=o.x,H[X+B+1]=o.y,H[X+B+2]=o.z,H[X+B+3]=0),_===!0&&(o.fromBufferAttribute(G,K),H[X+B+4]=o.x,H[X+B+5]=o.y,H[X+B+6]=o.z,H[X+B+7]=0),w===!0&&(o.fromBufferAttribute(z,K),H[X+B+8]=o.x,H[X+B+9]=o.y,H[X+B+10]=o.z,H[X+B+11]=z.itemSize===4?o.w:1)}}v={count:g,texture:j,size:new Gt(M,E)},s.set(h,v),h.addEventListener("dispose",I)}let p=0;for(let x=0;x<u.length;x++)p+=u[x];let f=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",f),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{let m=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<m;_++){let w=g[_];w[0]=_,w[1]=u[_]}g.sort(Xm);for(let _=0;_<8;_++)_<m&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(qm);let v=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let w=a[_],S=w[0],T=w[1];S!==Number.MAX_SAFE_INTEGER&&T?(v&&h.getAttribute("morphTarget"+_)!==v[S]&&h.setAttribute("morphTarget"+_,v[S]),p&&h.getAttribute("morphNormal"+_)!==p[S]&&h.setAttribute("morphNormal"+_,p[S]),i[_]=T,f+=T):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let x=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Zm(r,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var Kc=new ke,Qc=new zs,tl=new ao,el=new Xs,yc=[],Mc=[],Sc=new Float32Array(16),bc=new Float32Array(9),wc=new Float32Array(4);function Ri(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=yc[i];if(s===void 0&&(s=new Float32Array(i),yc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ne(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function js(r,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function $m(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Jm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;r.uniform2fv(this.addr,t),ie(e,t)}}function jm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ne(e,t))return;r.uniform3fv(this.addr,t),ie(e,t)}}function Km(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;r.uniform4fv(this.addr,t),ie(e,t)}}function Qm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;wc.set(n),r.uniformMatrix2fv(this.addr,!1,wc),ie(e,n)}}function tg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;bc.set(n),r.uniformMatrix3fv(this.addr,!1,bc),ie(e,n)}}function eg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;Sc.set(n),r.uniformMatrix4fv(this.addr,!1,Sc),ie(e,n)}}function ng(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ig(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;r.uniform2iv(this.addr,t),ie(e,t)}}function sg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;r.uniform3iv(this.addr,t),ie(e,t)}}function rg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;r.uniform4iv(this.addr,t),ie(e,t)}}function og(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ag(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;r.uniform2uiv(this.addr,t),ie(e,t)}}function cg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;r.uniform3uiv(this.addr,t),ie(e,t)}}function lg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;r.uniform4uiv(this.addr,t),ie(e,t)}}function hg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Kc,i)}function ug(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||tl,i)}function dg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||el,i)}function fg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qc,i)}function pg(r){switch(r){case 5126:return $m;case 35664:return Jm;case 35665:return jm;case 35666:return Km;case 35674:return Qm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return cg;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(r,t){r.uniform1fv(this.addr,t)}function gg(r,t){let e=Ri(t,this.size,2);r.uniform2fv(this.addr,e)}function vg(r,t){let e=Ri(t,this.size,3);r.uniform3fv(this.addr,e)}function xg(r,t){let e=Ri(t,this.size,4);r.uniform4fv(this.addr,e)}function _g(r,t){let e=Ri(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function yg(r,t){let e=Ri(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Mg(r,t){let e=Ri(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Sg(r,t){r.uniform1iv(this.addr,t)}function bg(r,t){r.uniform2iv(this.addr,t)}function wg(r,t){r.uniform3iv(this.addr,t)}function Eg(r,t){r.uniform4iv(this.addr,t)}function Ag(r,t){r.uniform1uiv(this.addr,t)}function Tg(r,t){r.uniform2uiv(this.addr,t)}function Rg(r,t){r.uniform3uiv(this.addr,t)}function Cg(r,t){r.uniform4uiv(this.addr,t)}function Pg(r,t,e){let n=this.cache,i=t.length,s=js(e,i);ne(n,s)||(r.uniform1iv(this.addr,s),ie(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Kc,s[o])}function Lg(r,t,e){let n=this.cache,i=t.length,s=js(e,i);ne(n,s)||(r.uniform1iv(this.addr,s),ie(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||tl,s[o])}function Ig(r,t,e){let n=this.cache,i=t.length,s=js(e,i);ne(n,s)||(r.uniform1iv(this.addr,s),ie(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||el,s[o])}function Ng(r,t,e){let n=this.cache,i=t.length,s=js(e,i);ne(n,s)||(r.uniform1iv(this.addr,s),ie(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Qc,s[o])}function Ug(r){switch(r){case 5126:return mg;case 35664:return gg;case 35665:return vg;case 35666:return xg;case 35674:return _g;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return bg;case 35668:case 35672:return wg;case 35669:case 35673:return Eg;case 5125:return Ag;case 36294:return Tg;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}var po=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=pg(e.type)}},mo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Ug(e.type)}},go=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Kr=/(\w+)(\])?(\[|\.)?/g;function Ec(r,t){r.seq.push(t),r.map[t.id]=t}function Fg(r,t,e){let n=r.name,i=n.length;for(Kr.lastIndex=0;;){let s=Kr.exec(n),o=Kr.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ec(e,l===void 0?new po(a,r,t):new mo(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new go(a),Ec(e,d)),e=d}}}var Mi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Fg(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Ac(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Dg=0;function Bg(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Og(r){switch(r){case je:return["Linear","( value )"];case Pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Tc(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Bg(r.getShaderSource(t),o)}else return i}function zg(r,t){let e=Og(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Vg(r,t){let e;switch(t){case td:e="Linear";break;case ed:e="Reinhard";break;case nd:e="OptimizedCineon";break;case id:e="ACESFilmic";break;case sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function Hg(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wg(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function zi(r){return r!==""}function Rc(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(r){return r.replace(Gg,Xg)}var qg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xg(r,t){let e=Ct[t];if(e===void 0){let n=qg.get(t);if(n!==void 0)e=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vo(e)}var Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(r){return r.replace(Yg,Zg)}function Zg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $g(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Si:case bi:t="ENVMAP_TYPE_CUBE";break;case Js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Kg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Oc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ku:t="ENVMAP_BLENDING_MIX";break;case Qu:t="ENVMAP_BLENDING_ADD";break}return t}function Qg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function t0(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=$g(e),l=Jg(e),h=jg(e),d=Kg(e),u=Qg(e),m=e.isWebGL2?"":kg(e),g=Hg(s),v=i.createProgram(),p,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zi).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zi).join(`
`),f.length>0&&(f+=`
`)):(p=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),f=[m,Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Ct.tonemapping_pars_fragment:"",e.toneMapping!==pn?Vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,zg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zi).join(`
`)),o=vo(o),o=Rc(o,e),o=Cc(o,e),a=vo(a),a=Rc(a,e),a=Cc(a,e),o=Pc(o),a=Pc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=x+p+o,w=x+f+a,S=Ac(i,i.VERTEX_SHADER,_),T=Ac(i,i.FRAGMENT_SHADER,w);if(i.attachShader(v,S),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){let M=i.getProgramInfoLog(v).trim(),E=i.getShaderInfoLog(S).trim(),H=i.getShaderInfoLog(T).trim(),j=!0,P=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,S,T);else{let I=Tc(i,S,"vertex"),L=Tc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+I+`
`+L)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(E===""||H==="")&&(P=!1);P&&(this.diagnostics={runnable:j,programLog:M,vertexShader:{log:E,prefix:p},fragmentShader:{log:H,prefix:f}})}i.deleteShader(S),i.deleteShader(T);let R;this.getUniforms=function(){return R===void 0&&(R=new Mi(i,v)),R};let F;return this.getAttributes=function(){return F===void 0&&(F=Wg(i,v)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}var e0=0,xo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _o(t),e.set(t,n)),n}},_o=class{constructor(t){this.id=e0++,this.code=t,this.usedTimes=0}};function n0(r,t,e,n,i,s,o){let a=new ks,c=new xo,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,E,H,j,P){let I=j.fog,L=P.geometry,U=M.isMeshStandardMaterial?j.environment:null,G=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),z=G&&G.mapping===Js?G.image.height:null,X=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,B=K!==void 0?K.length:0,O=0;L.morphAttributes.position!==void 0&&(O=1),L.morphAttributes.normal!==void 0&&(O=2),L.morphAttributes.color!==void 0&&(O=3);let nt,st,lt,mt;if(X){let Ge=$e[X];nt=Ge.vertexShader,st=Ge.fragmentShader}else nt=M.vertexShader,st=M.fragmentShader,c.update(M),lt=c.getVertexShaderID(M),mt=c.getFragmentShaderID(M);let wt=r.getRenderTarget(),yt=P.isInstancedMesh===!0,kt=!!M.map,ye=!!M.matcap,Ft=!!G,V=!!M.aoMap,le=!!M.lightMap,Mt=!!M.bumpMap,Tt=!!M.normalMap,Et=!!M.displacementMap,Zt=!!M.emissiveMap,Bt=!!M.metalnessMap,Lt=!!M.roughnessMap,Ht=M.anisotropy>0,ae=M.clearcoat>0,he=M.iridescence>0,C=M.sheen>0,b=M.transmission>0,Z=Ht&&!!M.anisotropyMap,Q=ae&&!!M.clearcoatMap,tt=ae&&!!M.clearcoatNormalMap,ot=ae&&!!M.clearcoatRoughnessMap,pt=he&&!!M.iridescenceMap,at=he&&!!M.iridescenceThicknessMap,J=C&&!!M.sheenColorMap,gt=C&&!!M.sheenRoughnessMap,vt=!!M.specularMap,_t=!!M.specularColorMap,dt=!!M.specularIntensityMap,ft=b&&!!M.transmissionMap,Nt=b&&!!M.thicknessMap,qt=!!M.gradientMap,N=!!M.alphaMap,rt=M.alphaTest>0,q=!!M.alphaHash,et=!!M.extensions,ct=!!L.attributes.uv1,zt=!!L.attributes.uv2,$t=!!L.attributes.uv3;return{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:nt,fragmentShader:st,defines:M.defines,customVertexShaderID:lt,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:yt,instancingColor:yt&&P.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:wt===null?r.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:je,map:kt,matcap:ye,envMap:Ft,envMapMode:Ft&&G.mapping,envMapCubeUVHeight:z,aoMap:V,lightMap:le,bumpMap:Mt,normalMap:Tt,displacementMap:u&&Et,emissiveMap:Zt,normalMapObjectSpace:Tt&&M.normalMapType===xd,normalMapTangentSpace:Tt&&M.normalMapType===vd,metalnessMap:Bt,roughnessMap:Lt,anisotropy:Ht,anisotropyMap:Z,clearcoat:ae,clearcoatMap:Q,clearcoatNormalMap:tt,clearcoatRoughnessMap:ot,iridescence:he,iridescenceMap:pt,iridescenceThicknessMap:at,sheen:C,sheenColorMap:J,sheenRoughnessMap:gt,specularMap:vt,specularColorMap:_t,specularIntensityMap:dt,transmission:b,transmissionMap:ft,thicknessMap:Nt,gradientMap:qt,opaque:M.transparent===!1&&M.blending===_i,alphaMap:N,alphaTest:rt,alphaHash:q,combine:M.combine,mapUv:kt&&v(M.map.channel),aoMapUv:V&&v(M.aoMap.channel),lightMapUv:le&&v(M.lightMap.channel),bumpMapUv:Mt&&v(M.bumpMap.channel),normalMapUv:Tt&&v(M.normalMap.channel),displacementMapUv:Et&&v(M.displacementMap.channel),emissiveMapUv:Zt&&v(M.emissiveMap.channel),metalnessMapUv:Bt&&v(M.metalnessMap.channel),roughnessMapUv:Lt&&v(M.roughnessMap.channel),anisotropyMapUv:Z&&v(M.anisotropyMap.channel),clearcoatMapUv:Q&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:tt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:at&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:J&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(M.sheenRoughnessMap.channel),specularMapUv:vt&&v(M.specularMap.channel),specularColorMapUv:_t&&v(M.specularColorMap.channel),specularIntensityMapUv:dt&&v(M.specularIntensityMap.channel),transmissionMapUv:ft&&v(M.transmissionMap.channel),thicknessMapUv:Nt&&v(M.thicknessMap.channel),alphaMapUv:N&&v(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Tt||Ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:ct,vertexUv2s:zt,vertexUv3s:$t,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(kt||N),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:O,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:pn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:et&&M.extensions.derivatives===!0,extensionFragDepth:et&&M.extensions.fragDepth===!0,extensionDrawBuffers:et&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:et&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let H in M.defines)E.push(H),E.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(x(E,M),_(E,M),E.push(r.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),M.push(a.mask)}function w(M){let E=g[M.type],H;if(E){let j=$e[E];H=Zd.clone(j.uniforms)}else H=M.uniforms;return H}function S(M,E){let H;for(let j=0,P=l.length;j<P;j++){let I=l[j];if(I.cacheKey===E){H=I,++H.usedTimes;break}}return H===void 0&&(H=new t0(r,E,M,s),l.push(H)),H}function T(M){if(--M.usedTimes===0){let E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:S,releaseProgram:T,releaseShaderCache:R,programs:l,dispose:F}}function i0(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function s0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ic(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Nc(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,m,g,v,p){let f=r[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},r[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=p),t++,f}function a(d,u,m,g,v,p){let f=o(d,u,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function c(d,u,m,g,v,p){let f=o(d,u,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||s0),n.length>1&&n.sort(u||Ic),i.length>1&&i.sort(u||Ic)}function h(){for(let d=t,u=r.length;d<u;d++){let m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function r0(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Nc,r.set(n,[o])):i>=s.length?(o=new Nc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function o0(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Wt};break;case"SpotLight":e={position:new W,direction:new W,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=e,e}}}function a0(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var c0=0;function l0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function h0(r,t){let e=new o0,n=a0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new W);let s=new W,o=new fe,a=new fe;function c(h,d){let u=0,m=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let v=0,p=0,f=0,x=0,_=0,w=0,S=0,T=0,R=0,F=0;h.sort(l0);let M=d===!0?Math.PI:1;for(let H=0,j=h.length;H<j;H++){let P=h[H],I=P.color,L=P.intensity,U=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=I.r*L*M,m+=I.g*L*M,g+=I.b*L*M;else if(P.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],L);else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){let X=P.shadow,K=n.get(P);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.directionalShadow[v]=K,i.directionalShadowMap[v]=G,i.directionalShadowMatrix[v]=P.shadow.matrix,w++}i.directional[v]=z,v++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(I).multiplyScalar(L*M),z.distance=U,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[f]=z;let X=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,X.updateMatrices(P),P.castShadow&&F++),i.spotLightMatrix[f]=X.matrix,P.castShadow){let K=n.get(P);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.spotShadow[f]=K,i.spotShadowMap[f]=G,T++}f++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(I).multiplyScalar(L),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=z,x++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*M),z.distance=P.distance,z.decay=P.decay,P.castShadow){let X=P.shadow,K=n.get(P);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=G,i.pointShadowMatrix[p]=P.shadow.matrix,S++}i.point[p]=z,p++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(L*M),z.groundColor.copy(P.groundColor).multiplyScalar(L*M),i.hemi[_]=z,_++}}x>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;let E=i.hash;(E.directionalLength!==v||E.pointLength!==p||E.spotLength!==f||E.rectAreaLength!==x||E.hemiLength!==_||E.numDirectionalShadows!==w||E.numPointShadows!==S||E.numSpotShadows!==T||E.numSpotMaps!==R)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=x,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+R-F,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=F,E.directionalLength=v,E.pointLength=p,E.spotLength=f,E.rectAreaLength=x,E.hemiLength=_,E.numDirectionalShadows=w,E.numPointShadows=S,E.numSpotShadows=T,E.numSpotMaps=R,i.version=c0++)}function l(h,d){let u=0,m=0,g=0,v=0,p=0,f=d.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){let w=h[x];if(w.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(w.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(w.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(w.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){let S=i.point[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:i}}function Uc(r,t){let e=new h0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function u0(r,t){let e=new WeakMap;function n(s,o=0){let a=e.get(s),c;return a===void 0?(c=new Uc(r,t),e.set(s,[c])):o>=a.length?(c=new Uc(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var yo=class extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mo=class extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p0(r,t,e){let n=new Ys,i=new Gt,s=new Gt,o=new ce,a=new yo({depthPacking:gd}),c=new Mo,l={},h=e.maxTextureSize,d={[Cn]:be,[be]:Cn,[dn]:dn},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Yn;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let f=this.type;this.render=function(S,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let F=r.getRenderTarget(),M=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Tn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let j=f!==hn&&this.type===hn,P=f===hn&&this.type!==hn;for(let I=0,L=S.length;I<L;I++){let U=S[I],G=U.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let z=G.getFrameExtents();if(i.multiply(z),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,G.mapSize.y=s.y)),G.map===null||j===!0||P===!0){let K=this.type!==hn?{minFilter:xe,magFilter:xe}:{};G.map!==null&&G.map.dispose(),G.map=new gn(i.x,i.y,K),G.map.texture.name=U.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let X=G.getViewportCount();for(let K=0;K<X;K++){let B=G.getViewport(K);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),H.viewport(o),G.updateMatrices(U,K),n=G.getFrustum(),w(T,R,G.camera,U,this.type)}G.isPointLightShadow!==!0&&this.type===hn&&x(G,R),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(F,M,E)};function x(S,T){let R=t.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new gn(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,R,u,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,R,m,v,null)}function _(S,T,R,F){let M=null,E=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)M=E;else if(M=R.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=M.uuid,j=T.uuid,P=l[H];P===void 0&&(P={},l[H]=P);let I=P[j];I===void 0&&(I=M.clone(),P[j]=I),M=I}if(M.visible=T.visible,M.wireframe=T.wireframe,F===hn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=r.properties.get(M);H.light=R}return M}function w(S,T,R,F,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===hn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);let j=t.update(S),P=S.material;if(Array.isArray(P)){let I=j.groups;for(let L=0,U=I.length;L<U;L++){let G=I[L],z=P[G.materialIndex];if(z&&z.visible){let X=_(S,z,F,M);r.renderBufferDirect(R,null,j,X,S,G)}}}else if(P.visible){let I=_(S,P,F,M);r.renderBufferDirect(R,null,j,I,S,null)}}let H=S.children;for(let j=0,P=H.length;j<P;j++)w(H[j],T,R,F,M)}}function m0(r,t,e){let n=e.isWebGL2;function i(){let N=!1,rt=new ce,q=null,et=new ce(0,0,0,0);return{setMask:function(ct){q!==ct&&!N&&(r.colorMask(ct,ct,ct,ct),q=ct)},setLocked:function(ct){N=ct},setClear:function(ct,zt,$t,se,Ge){Ge===!0&&(ct*=se,zt*=se,$t*=se),rt.set(ct,zt,$t,se),et.equals(rt)===!1&&(r.clearColor(ct,zt,$t,se),et.copy(rt))},reset:function(){N=!1,q=null,et.set(-1,0,0,0)}}}function s(){let N=!1,rt=null,q=null,et=null;return{setTest:function(ct){ct?wt(r.DEPTH_TEST):yt(r.DEPTH_TEST)},setMask:function(ct){rt!==ct&&!N&&(r.depthMask(ct),rt=ct)},setFunc:function(ct){if(q!==ct){switch(ct){case qu:r.depthFunc(r.NEVER);break;case Xu:r.depthFunc(r.ALWAYS);break;case Yu:r.depthFunc(r.LESS);break;case Qr:r.depthFunc(r.LEQUAL);break;case Zu:r.depthFunc(r.EQUAL);break;case $u:r.depthFunc(r.GEQUAL);break;case Ju:r.depthFunc(r.GREATER);break;case ju:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=ct}},setLocked:function(ct){N=ct},setClear:function(ct){et!==ct&&(r.clearDepth(ct),et=ct)},reset:function(){N=!1,rt=null,q=null,et=null}}}function o(){let N=!1,rt=null,q=null,et=null,ct=null,zt=null,$t=null,se=null,Ge=null;return{setTest:function(Jt){N||(Jt?wt(r.STENCIL_TEST):yt(r.STENCIL_TEST))},setMask:function(Jt){rt!==Jt&&!N&&(r.stencilMask(Jt),rt=Jt)},setFunc:function(Jt,qe,pe){(q!==Jt||et!==qe||ct!==pe)&&(r.stencilFunc(Jt,qe,pe),q=Jt,et=qe,ct=pe)},setOp:function(Jt,qe,pe){(zt!==Jt||$t!==qe||se!==pe)&&(r.stencilOp(Jt,qe,pe),zt=Jt,$t=qe,se=pe)},setLocked:function(Jt){N=Jt},setClear:function(Jt){Ge!==Jt&&(r.clearStencil(Jt),Ge=Jt)},reset:function(){N=!1,rt=null,q=null,et=null,ct=null,zt=null,$t=null,se=null,Ge=null}}}let a=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap,u={},m={},g=new WeakMap,v=[],p=null,f=!1,x=null,_=null,w=null,S=null,T=null,R=null,F=null,M=!1,E=null,H=null,j=null,P=null,I=null,L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,G=0,z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=G>=2);let X=null,K={},B=r.getParameter(r.SCISSOR_BOX),O=r.getParameter(r.VIEWPORT),nt=new ce().fromArray(B),st=new ce().fromArray(O);function lt(N,rt,q,et){let ct=new Uint8Array(4),zt=r.createTexture();r.bindTexture(N,zt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<q;$t++)n&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(rt,0,r.RGBA,1,1,et,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(rt+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return zt}let mt={};mt[r.TEXTURE_2D]=lt(r.TEXTURE_2D,r.TEXTURE_2D,1),mt[r.TEXTURE_CUBE_MAP]=lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(mt[r.TEXTURE_2D_ARRAY]=lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),mt[r.TEXTURE_3D]=lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),wt(r.DEPTH_TEST),c.setFunc(Qr),Et(!1),Zt(va),wt(r.CULL_FACE),Mt(Tn);function wt(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function yt(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function kt(N,rt){return m[N]!==rt?(r.bindFramebuffer(N,rt),m[N]=rt,n&&(N===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=rt),N===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=rt)),!0):!1}function ye(N,rt){let q=v,et=!1;if(N)if(q=g.get(rt),q===void 0&&(q=[],g.set(rt,q)),N.isWebGLMultipleRenderTargets){let ct=N.texture;if(q.length!==ct.length||q[0]!==r.COLOR_ATTACHMENT0){for(let zt=0,$t=ct.length;zt<$t;zt++)q[zt]=r.COLOR_ATTACHMENT0+zt;q.length=ct.length,et=!0}}else q[0]!==r.COLOR_ATTACHMENT0&&(q[0]=r.COLOR_ATTACHMENT0,et=!0);else q[0]!==r.BACK&&(q[0]=r.BACK,et=!0);et&&(e.isWebGL2?r.drawBuffers(q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function Ft(N){return p!==N?(r.useProgram(N),p=N,!0):!1}let V={[mi]:r.FUNC_ADD,[Uu]:r.FUNC_SUBTRACT,[Fu]:r.FUNC_REVERSE_SUBTRACT};if(n)V[Ma]=r.MIN,V[Sa]=r.MAX;else{let N=t.get("EXT_blend_minmax");N!==null&&(V[Ma]=N.MIN_EXT,V[Sa]=N.MAX_EXT)}let le={[Du]:r.ZERO,[Bu]:r.ONE,[Ou]:r.SRC_COLOR,[Dc]:r.SRC_ALPHA,[Gu]:r.SRC_ALPHA_SATURATE,[Hu]:r.DST_COLOR,[Vu]:r.DST_ALPHA,[zu]:r.ONE_MINUS_SRC_COLOR,[Bc]:r.ONE_MINUS_SRC_ALPHA,[Wu]:r.ONE_MINUS_DST_COLOR,[ku]:r.ONE_MINUS_DST_ALPHA};function Mt(N,rt,q,et,ct,zt,$t,se){if(N===Tn){f===!0&&(yt(r.BLEND),f=!1);return}if(f===!1&&(wt(r.BLEND),f=!0),N!==Nu){if(N!==x||se!==M){if((_!==mi||T!==mi)&&(r.blendEquation(r.FUNC_ADD),_=mi,T=mi),se)switch(N){case _i:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xa:r.blendFunc(r.ONE,r.ONE);break;case _a:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ya:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _i:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xa:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case _a:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ya:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,S=null,R=null,F=null,x=N,M=se}return}ct=ct||rt,zt=zt||q,$t=$t||et,(rt!==_||ct!==T)&&(r.blendEquationSeparate(V[rt],V[ct]),_=rt,T=ct),(q!==w||et!==S||zt!==R||$t!==F)&&(r.blendFuncSeparate(le[q],le[et],le[zt],le[$t]),w=q,S=et,R=zt,F=$t),x=N,M=!1}function Tt(N,rt){N.side===dn?yt(r.CULL_FACE):wt(r.CULL_FACE);let q=N.side===be;rt&&(q=!q),Et(q),N.blending===_i&&N.transparent===!1?Mt(Tn):Mt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);let et=N.stencilWrite;l.setTest(et),et&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Lt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?wt(r.SAMPLE_ALPHA_TO_COVERAGE):yt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Et(N){E!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),E=N)}function Zt(N){N!==Pu?(wt(r.CULL_FACE),N!==H&&(N===va?r.cullFace(r.BACK):N===Lu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):yt(r.CULL_FACE),H=N}function Bt(N){N!==j&&(U&&r.lineWidth(N),j=N)}function Lt(N,rt,q){N?(wt(r.POLYGON_OFFSET_FILL),(P!==rt||I!==q)&&(r.polygonOffset(rt,q),P=rt,I=q)):yt(r.POLYGON_OFFSET_FILL)}function Ht(N){N?wt(r.SCISSOR_TEST):yt(r.SCISSOR_TEST)}function ae(N){N===void 0&&(N=r.TEXTURE0+L-1),X!==N&&(r.activeTexture(N),X=N)}function he(N,rt,q){q===void 0&&(X===null?q=r.TEXTURE0+L-1:q=X);let et=K[q];et===void 0&&(et={type:void 0,texture:void 0},K[q]=et),(et.type!==N||et.texture!==rt)&&(X!==q&&(r.activeTexture(q),X=q),r.bindTexture(N,rt||mt[N]),et.type=N,et.texture=rt)}function C(){let N=K[X];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(N){nt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),nt.copy(N))}function dt(N){st.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),st.copy(N))}function ft(N,rt){let q=d.get(rt);q===void 0&&(q=new WeakMap,d.set(rt,q));let et=q.get(N);et===void 0&&(et=r.getUniformBlockIndex(rt,N.name),q.set(N,et))}function Nt(N,rt){let et=d.get(rt).get(N);h.get(rt)!==et&&(r.uniformBlockBinding(rt,et,N.__bindingPointIndex),h.set(rt,et))}function qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},X=null,K={},m={},g=new WeakMap,v=[],p=null,f=!1,x=null,_=null,w=null,S=null,T=null,R=null,F=null,M=!1,E=null,H=null,j=null,P=null,I=null,nt.set(0,0,r.canvas.width,r.canvas.height),st.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:wt,disable:yt,bindFramebuffer:kt,drawBuffers:ye,useProgram:Ft,setBlending:Mt,setMaterial:Tt,setFlipSided:Et,setCullFace:Zt,setLineWidth:Bt,setPolygonOffset:Lt,setScissorTest:Ht,activeTexture:ae,bindTexture:he,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:Z,texImage2D:gt,texImage3D:vt,updateUBOMapping:ft,uniformBlockBinding:Nt,texStorage2D:at,texStorage3D:J,texSubImage2D:Q,texSubImage3D:tt,compressedTexSubImage2D:ot,compressedTexSubImage3D:pt,scissor:_t,viewport:dt,reset:qt}}function g0(r,t,e,n,i,s,o){let a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,v,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,b){return f?new OffscreenCanvas(C,b):Ds("canvas")}function _(C,b,Z,Q){let tt=1;if((C.width>Q||C.height>Q)&&(tt=Q/Math.max(C.width,C.height)),tt<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let ot=b?oo:Math.floor,pt=ot(tt*C.width),at=ot(tt*C.height);v===void 0&&(v=x(pt,at));let J=Z?x(pt,at):v;return J.width=pt,J.height=at,J.getContext("2d").drawImage(C,0,0,pt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+pt+"x"+at+")."),J}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function w(C){return Ka(C.width)&&Ka(C.height)}function S(C){return a?!1:C.wrapS!==ze||C.wrapT!==ze||C.minFilter!==xe&&C.minFilter!==Le}function T(C,b){return C.generateMipmaps&&b&&C.minFilter!==xe&&C.minFilter!==Le}function R(C){r.generateMipmap(C)}function F(C,b,Z,Q,tt=!1){if(a===!1)return b;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ot=b;return b===r.RED&&(Z===r.FLOAT&&(ot=r.R32F),Z===r.HALF_FLOAT&&(ot=r.R16F),Z===r.UNSIGNED_BYTE&&(ot=r.R8)),b===r.RG&&(Z===r.FLOAT&&(ot=r.RG32F),Z===r.HALF_FLOAT&&(ot=r.RG16F),Z===r.UNSIGNED_BYTE&&(ot=r.RG8)),b===r.RGBA&&(Z===r.FLOAT&&(ot=r.RGBA32F),Z===r.HALF_FLOAT&&(ot=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ot=Q===Pt&&tt===!1?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)),(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function M(C,b,Z){return T(C,Z)===!0||C.isFramebufferTexture&&C.minFilter!==xe&&C.minFilter!==Le?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){return C===xe||C===ba||C===br?r.NEAREST:r.LINEAR}function H(C){let b=C.target;b.removeEventListener("dispose",H),P(b),b.isVideoTexture&&g.delete(b)}function j(C){let b=C.target;b.removeEventListener("dispose",j),L(b)}function P(C){let b=n.get(C);if(b.__webglInit===void 0)return;let Z=C.source,Q=p.get(Z);if(Q){let tt=Q[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(C),Object.keys(Q).length===0&&p.delete(Z)}n.remove(C)}function I(C){let b=n.get(C);r.deleteTexture(b.__webglTexture);let Z=C.source,Q=p.get(Z);delete Q[b.__cacheKey],o.memory.textures--}function L(C){let b=C.texture,Z=n.get(C),Q=n.get(b);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++)r.deleteFramebuffer(Z.__webglFramebuffer[tt]),Z.__webglDepthbuffer&&r.deleteRenderbuffer(Z.__webglDepthbuffer[tt]);else{if(r.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&r.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let tt=0;tt<Z.__webglColorRenderbuffer.length;tt++)Z.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(Z.__webglColorRenderbuffer[tt]);Z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let tt=0,ot=b.length;tt<ot;tt++){let pt=n.get(b[tt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(b[tt])}n.remove(b),n.remove(C)}let U=0;function G(){U=0}function z(){let C=U;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),U+=1,C}function X(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function K(C,b){let Z=n.get(C);if(C.isVideoTexture&&ae(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{kt(Z,C,b);return}}e.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+b)}function B(C,b){let Z=n.get(C);if(C.version>0&&Z.__version!==C.version){kt(Z,C,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+b)}function O(C,b){let Z=n.get(C);if(C.version>0&&Z.__version!==C.version){kt(Z,C,b);return}e.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+b)}function nt(C,b){let Z=n.get(C);if(C.version>0&&Z.__version!==C.version){ye(Z,C,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+b)}let st={[no]:r.REPEAT,[ze]:r.CLAMP_TO_EDGE,[io]:r.MIRRORED_REPEAT},lt={[xe]:r.NEAREST,[ba]:r.NEAREST_MIPMAP_NEAREST,[br]:r.NEAREST_MIPMAP_LINEAR,[Le]:r.LINEAR,[rd]:r.LINEAR_MIPMAP_NEAREST,[Hi]:r.LINEAR_MIPMAP_LINEAR},mt={[yd]:r.NEVER,[Td]:r.ALWAYS,[Md]:r.LESS,[bd]:r.LEQUAL,[Sd]:r.EQUAL,[Ad]:r.GEQUAL,[wd]:r.GREATER,[Ed]:r.NOTEQUAL};function wt(C,b,Z){if(Z?(r.texParameteri(C,r.TEXTURE_WRAP_S,st[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,st[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,st[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,lt[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,lt[b.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==ze||b.wrapT!==ze)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,E(b.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,E(b.minFilter)),b.minFilter!==xe&&b.minFilter!==Le&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,mt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===xe||b.minFilter!==br&&b.minFilter!==Hi||b.type===An&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Wi&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function yt(C,b){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",H));let Q=b.source,tt=p.get(Q);tt===void 0&&(tt={},p.set(Q,tt));let ot=X(b);if(ot!==C.__cacheKey){tt[ot]===void 0&&(tt[ot]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),tt[ot].usedTimes++;let pt=tt[C.__cacheKey];pt!==void 0&&(tt[C.__cacheKey].usedTimes--,pt.usedTimes===0&&I(b)),C.__cacheKey=ot,C.__webglTexture=tt[ot].texture}return Z}function kt(C,b,Z){let Q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=r.TEXTURE_3D);let tt=yt(C,b),ot=b.source;e.bindTexture(Q,C.__webglTexture,r.TEXTURE0+Z);let pt=n.get(ot);if(ot.version!==pt.__version||tt===!0){e.activeTexture(r.TEXTURE0+Z),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let at=S(b)&&w(b.image)===!1,J=_(b.image,at,!1,h);J=he(b,J);let gt=w(J)||a,vt=s.convert(b.format,b.colorSpace),_t=s.convert(b.type),dt=F(b.internalFormat,vt,_t,b.colorSpace);wt(Q,b,gt);let ft,Nt=b.mipmaps,qt=a&&b.isVideoTexture!==!0,N=pt.__version===void 0||tt===!0,rt=M(b,J,gt);if(b.isDepthTexture)dt=r.DEPTH_COMPONENT,a?b.type===An?dt=r.DEPTH_COMPONENT32F:b.type===En?dt=r.DEPTH_COMPONENT24:b.type===Hn?dt=r.DEPTH24_STENCIL8:dt=r.DEPTH_COMPONENT16:b.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Wn&&dt===r.DEPTH_COMPONENT&&b.type!==Bo&&b.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=En,_t=s.convert(b.type)),b.format===wi&&dt===r.DEPTH_COMPONENT&&(dt=r.DEPTH_STENCIL,b.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Hn,_t=s.convert(b.type))),N&&(qt?e.texStorage2D(r.TEXTURE_2D,1,dt,J.width,J.height):e.texImage2D(r.TEXTURE_2D,0,dt,J.width,J.height,0,vt,_t,null));else if(b.isDataTexture)if(Nt.length>0&&gt){qt&&N&&e.texStorage2D(r.TEXTURE_2D,rt,dt,Nt[0].width,Nt[0].height);for(let q=0,et=Nt.length;q<et;q++)ft=Nt[q],qt?e.texSubImage2D(r.TEXTURE_2D,q,0,0,ft.width,ft.height,vt,_t,ft.data):e.texImage2D(r.TEXTURE_2D,q,dt,ft.width,ft.height,0,vt,_t,ft.data);b.generateMipmaps=!1}else qt?(N&&e.texStorage2D(r.TEXTURE_2D,rt,dt,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,vt,_t,J.data)):e.texImage2D(r.TEXTURE_2D,0,dt,J.width,J.height,0,vt,_t,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qt&&N&&e.texStorage3D(r.TEXTURE_2D_ARRAY,rt,dt,Nt[0].width,Nt[0].height,J.depth);for(let q=0,et=Nt.length;q<et;q++)ft=Nt[q],b.format!==Ve?vt!==null?qt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ft.width,ft.height,J.depth,vt,ft.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,dt,ft.width,ft.height,J.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ft.width,ft.height,J.depth,vt,_t,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,dt,ft.width,ft.height,J.depth,0,vt,_t,ft.data)}else{qt&&N&&e.texStorage2D(r.TEXTURE_2D,rt,dt,Nt[0].width,Nt[0].height);for(let q=0,et=Nt.length;q<et;q++)ft=Nt[q],b.format!==Ve?vt!==null?qt?e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,ft.width,ft.height,vt,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,q,dt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(r.TEXTURE_2D,q,0,0,ft.width,ft.height,vt,_t,ft.data):e.texImage2D(r.TEXTURE_2D,q,dt,ft.width,ft.height,0,vt,_t,ft.data)}else if(b.isDataArrayTexture)qt?(N&&e.texStorage3D(r.TEXTURE_2D_ARRAY,rt,dt,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,vt,_t,J.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,dt,J.width,J.height,J.depth,0,vt,_t,J.data);else if(b.isData3DTexture)qt?(N&&e.texStorage3D(r.TEXTURE_3D,rt,dt,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,vt,_t,J.data)):e.texImage3D(r.TEXTURE_3D,0,dt,J.width,J.height,J.depth,0,vt,_t,J.data);else if(b.isFramebufferTexture){if(N)if(qt)e.texStorage2D(r.TEXTURE_2D,rt,dt,J.width,J.height);else{let q=J.width,et=J.height;for(let ct=0;ct<rt;ct++)e.texImage2D(r.TEXTURE_2D,ct,dt,q,et,0,vt,_t,null),q>>=1,et>>=1}}else if(Nt.length>0&&gt){qt&&N&&e.texStorage2D(r.TEXTURE_2D,rt,dt,Nt[0].width,Nt[0].height);for(let q=0,et=Nt.length;q<et;q++)ft=Nt[q],qt?e.texSubImage2D(r.TEXTURE_2D,q,0,0,vt,_t,ft):e.texImage2D(r.TEXTURE_2D,q,dt,vt,_t,ft);b.generateMipmaps=!1}else qt?(N&&e.texStorage2D(r.TEXTURE_2D,rt,dt,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,_t,J)):e.texImage2D(r.TEXTURE_2D,0,dt,vt,_t,J);T(b,gt)&&R(Q),pt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ye(C,b,Z){if(b.image.length!==6)return;let Q=yt(C,b),tt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Z);let ot=n.get(tt);if(tt.version!==ot.__version||Q===!0){e.activeTexture(r.TEXTURE0+Z),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let pt=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,J=[];for(let q=0;q<6;q++)!pt&&!at?J[q]=_(b.image[q],!1,!0,l):J[q]=at?b.image[q].image:b.image[q],J[q]=he(b,J[q]);let gt=J[0],vt=w(gt)||a,_t=s.convert(b.format,b.colorSpace),dt=s.convert(b.type),ft=F(b.internalFormat,_t,dt,b.colorSpace),Nt=a&&b.isVideoTexture!==!0,qt=ot.__version===void 0||Q===!0,N=M(b,gt,vt);wt(r.TEXTURE_CUBE_MAP,b,vt);let rt;if(pt){Nt&&qt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,N,ft,gt.width,gt.height);for(let q=0;q<6;q++){rt=J[q].mipmaps;for(let et=0;et<rt.length;et++){let ct=rt[et];b.format!==Ve?_t!==null?Nt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,0,0,ct.width,ct.height,_t,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,ft,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,0,0,ct.width,ct.height,_t,dt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,ft,ct.width,ct.height,0,_t,dt,ct.data)}}}else{rt=b.mipmaps,Nt&&qt&&(rt.length>0&&N++,e.texStorage2D(r.TEXTURE_CUBE_MAP,N,ft,J[0].width,J[0].height));for(let q=0;q<6;q++)if(at){Nt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,J[q].width,J[q].height,_t,dt,J[q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ft,J[q].width,J[q].height,0,_t,dt,J[q].data);for(let et=0;et<rt.length;et++){let zt=rt[et].image[q].image;Nt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,0,0,zt.width,zt.height,_t,dt,zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,ft,zt.width,zt.height,0,_t,dt,zt.data)}}else{Nt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,_t,dt,J[q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ft,_t,dt,J[q]);for(let et=0;et<rt.length;et++){let ct=rt[et];Nt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,0,0,_t,dt,ct.image[q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,ft,_t,dt,ct.image[q])}}}T(b,vt)&&R(r.TEXTURE_CUBE_MAP),ot.__version=tt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ft(C,b,Z,Q,tt){let ot=s.convert(Z.format,Z.colorSpace),pt=s.convert(Z.type),at=F(Z.internalFormat,ot,pt,Z.colorSpace);n.get(b).__hasExternalTextures||(tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,0,at,b.width,b.height,b.depth,0,ot,pt,null):e.texImage2D(tt,0,at,b.width,b.height,0,ot,pt,null)),e.bindFramebuffer(r.FRAMEBUFFER,C),Ht(b)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,tt,n.get(Z).__webglTexture,0,Lt(b)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,tt,n.get(Z).__webglTexture,0),e.bindFramebuffer(r.FRAMEBUFFER,null)}function V(C,b,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let Q=r.DEPTH_COMPONENT16;if(Z||Ht(b)){let tt=b.depthTexture;tt&&tt.isDepthTexture&&(tt.type===An?Q=r.DEPTH_COMPONENT32F:tt.type===En&&(Q=r.DEPTH_COMPONENT24));let ot=Lt(b);Ht(b)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,Q,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Q,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){let Q=Lt(b);Z&&Ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,b.width,b.height):Ht(b)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{let Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let tt=0;tt<Q.length;tt++){let ot=Q[tt],pt=s.convert(ot.format,ot.colorSpace),at=s.convert(ot.type),J=F(ot.internalFormat,pt,at,ot.colorSpace),gt=Lt(b);Z&&Ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,J,b.width,b.height):Ht(b)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt,J,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,J,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);let Q=n.get(b.depthTexture).__webglTexture,tt=Lt(b);if(b.depthTexture.format===Wn)Ht(b)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(b.depthTexture.format===wi)Ht(b)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Mt(C){let b=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");le(b.__webglFramebuffer,C)}else if(Z){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=r.createRenderbuffer(),V(b.__webglDepthbuffer[Q],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),V(b.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(C,b,Z){let Q=n.get(C);b!==void 0&&Ft(Q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),Z!==void 0&&Mt(C)}function Et(C){let b=C.texture,Z=n.get(C),Q=n.get(b);C.addEventListener("dispose",j),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=b.version,o.memory.textures++);let tt=C.isWebGLCubeRenderTarget===!0,ot=C.isWebGLMultipleRenderTargets===!0,pt=w(C)||a;if(tt){Z.__webglFramebuffer=[];for(let at=0;at<6;at++)Z.__webglFramebuffer[at]=r.createFramebuffer()}else{if(Z.__webglFramebuffer=r.createFramebuffer(),ot)if(i.drawBuffers){let at=C.texture;for(let J=0,gt=at.length;J<gt;J++){let vt=n.get(at[J]);vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ht(C)===!1){let at=ot?b:[b];Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let J=0;J<at.length;J++){let gt=at[J];Z.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[J]);let vt=s.convert(gt.format,gt.colorSpace),_t=s.convert(gt.type),dt=F(gt.internalFormat,vt,_t,gt.colorSpace,C.isXRRenderTarget===!0),ft=Lt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,dt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,Z.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),V(Z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),wt(r.TEXTURE_CUBE_MAP,b,pt);for(let at=0;at<6;at++)Ft(Z.__webglFramebuffer[at],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at);T(b,pt)&&R(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){let at=C.texture;for(let J=0,gt=at.length;J<gt;J++){let vt=at[J],_t=n.get(vt);e.bindTexture(r.TEXTURE_2D,_t.__webglTexture),wt(r.TEXTURE_2D,vt,pt),Ft(Z.__webglFramebuffer,C,vt,r.COLOR_ATTACHMENT0+J,r.TEXTURE_2D),T(vt,pt)&&R(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?at=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,Q.__webglTexture),wt(at,b,pt),Ft(Z.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,at),T(b,pt)&&R(at),e.unbindTexture()}C.depthBuffer&&Mt(C)}function Zt(C){let b=w(C)||a,Z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,tt=Z.length;Q<tt;Q++){let ot=Z[Q];if(T(ot,b)){let pt=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,at=n.get(ot).__webglTexture;e.bindTexture(pt,at),R(pt),e.unbindTexture()}}}function Bt(C){if(a&&C.samples>0&&Ht(C)===!1){let b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Z=C.width,Q=C.height,tt=r.COLOR_BUFFER_BIT,ot=[],pt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=n.get(C),J=C.isWebGLMultipleRenderTargets===!0;if(J)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){ot.push(r.COLOR_ATTACHMENT0+gt),C.depthBuffer&&ot.push(pt);let vt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(vt===!1&&(C.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),J&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[gt]),vt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[pt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[pt])),J){let _t=n.get(b[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_t,0)}r.blitFramebuffer(0,0,Z,Q,0,0,Z,Q,tt,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,at.__webglColorRenderbuffer[gt]);let vt=n.get(b[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,vt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Lt(C){return Math.min(d,C.samples)}function Ht(C){let b=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ae(C){let b=o.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function he(C,b){let Z=C.colorSpace,Q=C.format,tt=C.type;return C.isCompressedTexture===!0||C.format===so||Z!==je&&Z!==qn&&(Z===Pt?a===!1?t.has("EXT_sRGB")===!0&&Q===Ve?(C.format=so,C.minFilter=Le,C.generateMipmaps=!1):b=Bs.sRGBToLinear(b):(Q!==Ve||tt!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),b}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=nt,this.rebindTextures=Tt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Ht}function v0(r,t,e){let n=e.isWebGL2;function i(s,o=qn){let a;if(s===Rn)return r.UNSIGNED_BYTE;if(s===kc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Hc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===od)return r.BYTE;if(s===ad)return r.SHORT;if(s===Bo)return r.UNSIGNED_SHORT;if(s===Vc)return r.INT;if(s===En)return r.UNSIGNED_INT;if(s===An)return r.FLOAT;if(s===Wi)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cd)return r.ALPHA;if(s===Ve)return r.RGBA;if(s===ld)return r.LUMINANCE;if(s===hd)return r.LUMINANCE_ALPHA;if(s===Wn)return r.DEPTH_COMPONENT;if(s===wi)return r.DEPTH_STENCIL;if(s===so)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ud)return r.RED;if(s===Wc)return r.RED_INTEGER;if(s===dd)return r.RG;if(s===Gc)return r.RG_INTEGER;if(s===qc)return r.RGBA_INTEGER;if(s===wr||s===Er||s===Ar||s===Tr)if(o===Pt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===wr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===wr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Er)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ar)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wa||s===Ea||s===Aa||s===Ta)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ea)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Aa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ta)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ra||s===Ca)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ra)return o===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ca)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pa||s===La||s===Ia||s===Na||s===Ua||s===Fa||s===Da||s===Ba||s===Oa||s===za||s===Va||s===ka||s===Ha||s===Wa)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Pa)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===La)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ia)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Na)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ua)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fa)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Da)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ba)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Oa)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===za)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Va)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ka)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ha)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wa)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Rr)return o===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===pd||s===Ga||s===qa||s===Xa)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Rr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ga)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hn?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var So=class extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xi=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},x0={type:"move"},ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bo=class extends ke{constructor(t,e,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:Wn,h!==Wn&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wn&&(n=En),n===void 0&&h===wi&&(n=Hn),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xe,this.minFilter=c!==void 0?c:xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wo=class extends Pn{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,g=null,v=e.getContextAttributes(),p=null,f=null,x=[],_=[],w=new _e;w.layers.enable(1),w.viewport=new ce;let S=new _e;S.layers.enable(2),S.viewport=new ce;let T=[w,S],R=new So;R.layers.enable(1),R.layers.enable(2);let F=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let O=x[B];return O===void 0&&(O=new ki,x[B]=O),O.getTargetRaySpace()},this.getControllerGrip=function(B){let O=x[B];return O===void 0&&(O=new ki,x[B]=O),O.getGripSpace()},this.getHand=function(B){let O=x[B];return O===void 0&&(O=new ki,x[B]=O),O.getHandSpace()};function E(B){let O=_.indexOf(B.inputSource);if(O===-1)return;let nt=x[O];nt!==void 0&&(nt.update(B.inputSource,B.frame,l||o),nt.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",j);for(let B=0;B<x.length;B++){let O=_[B];O!==null&&(_[B]=null,x[B].disconnect(O))}F=null,M=null,t.setRenderTarget(p),m=null,u=null,d=null,i=null,f=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",H),i.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let O={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,O),i.updateRenderState({baseLayer:m}),f=new gn(m.framebufferWidth,m.framebufferHeight,{format:Ve,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let O=null,nt=null,st=null;v.depth&&(st=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=v.stencil?wi:Wn,nt=v.stencil?Hn:En);let lt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(lt),i.updateRenderState({layers:[u]}),f=new gn(u.textureWidth,u.textureHeight,{format:Ve,type:Rn,depthTexture:new bo(u.textureWidth,u.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let mt=t.properties.get(f);mt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function j(B){for(let O=0;O<B.removed.length;O++){let nt=B.removed[O],st=_.indexOf(nt);st>=0&&(_[st]=null,x[st].disconnect(nt))}for(let O=0;O<B.added.length;O++){let nt=B.added[O],st=_.indexOf(nt);if(st===-1){for(let mt=0;mt<x.length;mt++)if(mt>=_.length){_.push(nt),st=mt;break}else if(_[mt]===null){_[mt]=nt,st=mt;break}if(st===-1)break}let lt=x[st];lt&&lt.connect(nt)}}let P=new W,I=new W;function L(B,O,nt){P.setFromMatrixPosition(O.matrixWorld),I.setFromMatrixPosition(nt.matrixWorld);let st=P.distanceTo(I),lt=O.projectionMatrix.elements,mt=nt.projectionMatrix.elements,wt=lt[14]/(lt[10]-1),yt=lt[14]/(lt[10]+1),kt=(lt[9]+1)/lt[5],ye=(lt[9]-1)/lt[5],Ft=(lt[8]-1)/lt[0],V=(mt[8]+1)/mt[0],le=wt*Ft,Mt=wt*V,Tt=st/(-Ft+V),Et=Tt*-Ft;O.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Et),B.translateZ(Tt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let Zt=wt+Tt,Bt=yt+Tt,Lt=le-Et,Ht=Mt+(st-Et),ae=kt*yt/Bt*Zt,he=ye*yt/Bt*Zt;B.projectionMatrix.makePerspective(Lt,Ht,ae,he,Zt,Bt),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function U(B,O){O===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(O.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;R.near=S.near=w.near=B.near,R.far=S.far=w.far=B.far,(F!==R.near||M!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,M=R.far);let O=B.parent,nt=R.cameras;U(R,O);for(let st=0;st<nt.length;st++)U(nt[st],O);nt.length===2?L(R,w,S):R.projectionMatrix.copy(w.projectionMatrix),G(B,R,O)};function G(B,O,nt){nt===null?B.matrix.copy(O.matrixWorld):(B.matrix.copy(nt.matrixWorld),B.matrix.invert(),B.matrix.multiply(O.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);let st=B.children;for(let lt=0,mt=st.length;lt<mt;lt++)st[lt].updateMatrixWorld(!0);B.projectionMatrix.copy(O.projectionMatrix),B.projectionMatrixInverse.copy(O.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ro*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let z=null;function X(B,O){if(h=O.getViewerPose(l||o),g=O,h!==null){let nt=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let st=!1;nt.length!==R.cameras.length&&(R.cameras.length=0,st=!0);for(let lt=0;lt<nt.length;lt++){let mt=nt[lt],wt=null;if(m!==null)wt=m.getViewport(mt);else{let kt=d.getViewSubImage(u,mt);wt=kt.viewport,lt===0&&(t.setRenderTargetTextures(f,kt.colorTexture,u.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(f))}let yt=T[lt];yt===void 0&&(yt=new _e,yt.layers.enable(lt),yt.viewport=new ce,T[lt]=yt),yt.matrix.fromArray(mt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(mt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(wt.x,wt.y,wt.width,wt.height),lt===0&&(R.matrix.copy(yt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),st===!0&&R.cameras.push(yt)}}for(let nt=0;nt<x.length;nt++){let st=_[nt],lt=x[nt];st!==null&&lt!==void 0&&lt.update(st,O,l||o)}z&&z(B,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}let K=new jc;K.setAnimationLoop(X),this.setAnimationLoop=function(B){z=B},this.dispose=function(){}}};function _0(r,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Jc(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,x,_,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,x,_):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===be&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===be&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x=t.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let _=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*_,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,x,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=_*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===be&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let x=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function y0(r,t,e,n){let i={},s={},o=[],a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){let w=_.program;n.uniformBlockBinding(x,w)}function l(x,_){let w=i[x.id];w===void 0&&(g(x),w=h(x),i[x.id]=w,x.addEventListener("dispose",p));let S=_.program;n.updateUBOMapping(x,S);let T=t.render.frame;s[x.id]!==T&&(u(x),s[x.id]=T)}function h(x){let _=d();x.__bindingPointIndex=_;let w=r.createBuffer(),S=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,S,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,w),w}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let _=i[x.id],w=x.uniforms,S=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let T=0,R=w.length;T<R;T++){let F=w[T];if(m(F,T,S)===!0){let M=F.__offset,E=Array.isArray(F.value)?F.value:[F.value],H=0;for(let j=0;j<E.length;j++){let P=E[j],I=v(P);typeof P=="number"?(F.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,M+H,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=P.elements[0],F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=P.elements[0],F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=P.elements[0]):(P.toArray(F.__data,H),H+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,M,F.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(x,_,w){let S=x.value;if(w[_]===void 0){if(typeof S=="number")w[_]=S;else{let T=Array.isArray(S)?S:[S],R=[];for(let F=0;F<T.length;F++)R.push(T[F].clone());w[_]=R}return!0}else if(typeof S=="number"){if(w[_]!==S)return w[_]=S,!0}else{let T=Array.isArray(w[_])?w[_]:[w[_]],R=Array.isArray(S)?S:[S];for(let F=0;F<T.length;F++){let M=T[F];if(M.equals(R[F])===!1)return M.copy(R[F]),!0}}return!1}function g(x){let _=x.uniforms,w=0,S=16,T=0;for(let R=0,F=_.length;R<F;R++){let M=_[R],E={boundary:0,storage:0},H=Array.isArray(M.value)?M.value:[M.value];for(let j=0,P=H.length;j<P;j++){let I=H[j],L=v(I);E.boundary+=L.boundary,E.storage+=L.storage}if(M.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=w,R>0){T=w%S;let j=S-T;T!==0&&j-E.boundary<0&&(w+=S-T,M.__offset=w)}w+=E.storage}return T=w%S,T>0&&(w+=S-T),x.__size=w,x.__cache={},this}function v(x){let _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){let _=x.target;_.removeEventListener("dispose",p);let w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function f(){for(let x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:c,update:l,dispose:f}}function M0(){let r=Ds("canvas");return r.style.display="block",r}var Xi=class{constructor(t={}){let{canvas:e=M0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Pt,this.useLegacyLights=!0,this.toneMapping=pn,this.toneMappingExposure=1;let _=this,w=!1,S=0,T=0,R=null,F=-1,M=null,E=new ce,H=new ce,j=null,P=new Wt(0),I=0,L=e.width,U=e.height,G=1,z=null,X=null,K=new ce(0,0,L,U),B=new ce(0,0,L,U),O=!1,nt=new Ys,st=!1,lt=!1,mt=null,wt=new fe,yt=new Gt,kt=new W,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return R===null?G:1}let V=n;function le(A,k){for(let Y=0;Y<A.length;Y++){let D=A[Y],$=e.getContext(D,k);if($!==null)return $}return null}try{let A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",q,!1),e.addEventListener("webglcontextcreationerror",et,!1),V===null){let k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),V=le(k,A),V===null)throw le(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Mt,Tt,Et,Zt,Bt,Lt,Ht,ae,he,C,b,Z,Q,tt,ot,pt,at,J,gt,vt,_t,dt,ft,Nt;function qt(){Mt=new km(V),Tt=new Fm(V,Mt,t),Mt.init(Tt),dt=new v0(V,Mt,Tt),Et=new m0(V,Mt,Tt),Zt=new Gm(V),Bt=new i0,Lt=new g0(V,Mt,Et,Bt,Tt,dt,Zt),Ht=new Bm(_),ae=new Vm(_),he=new Qd(V,Tt),ft=new Nm(V,Mt,he,Tt),C=new Hm(V,he,Zt,ft),b=new Zm(V,C,he,Zt),gt=new Ym(V,Tt,Lt),pt=new Dm(Bt),Z=new n0(_,Ht,ae,Mt,Tt,ft,pt),Q=new _0(_,Bt),tt=new r0,ot=new u0(Mt,Tt),J=new Im(_,Ht,ae,Et,b,u,c),at=new p0(_,b,Tt),Nt=new y0(V,Zt,Tt,Et),vt=new Um(V,Mt,Zt,Tt),_t=new Wm(V,Mt,Zt,Tt),Zt.programs=Z.programs,_.capabilities=Tt,_.extensions=Mt,_.properties=Bt,_.renderLists=tt,_.shadowMap=at,_.state=Et,_.info=Zt}qt();let N=new wo(_,V);this.xr=N,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(L,U,!1))},this.getSize=function(A){return A.set(L,U)},this.setSize=function(A,k,Y=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,U=k,e.width=Math.floor(A*G),e.height=Math.floor(k*G),Y===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(L*G,U*G).floor()},this.setDrawingBufferSize=function(A,k,Y){L=A,U=k,G=Y,e.width=Math.floor(A*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,k,Y,D){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,k,Y,D),Et.viewport(E.copy(K).multiplyScalar(G).floor())},this.getScissor=function(A){return A.copy(B)},this.setScissor=function(A,k,Y,D){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,k,Y,D),Et.scissor(H.copy(B).multiplyScalar(G).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(A){Et.setScissorTest(O=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(A=!0,k=!0,Y=!0){let D=0;if(A){let $=!1;if(R!==null){let ht=R.texture.format;$=ht===qc||ht===Gc||ht===Wc}if($){let ht=R.texture.type,xt=ht===Rn||ht===En||ht===Bo||ht===Hn||ht===kc||ht===Hc,St=J.getClearColor(),bt=J.getClearAlpha(),Ut=St.r,At=St.g,Rt=St.b;xt?(m[0]=Ut,m[1]=At,m[2]=Rt,m[3]=bt,V.clearBufferuiv(V.COLOR,0,m)):(g[0]=Ut,g[1]=At,g[2]=Rt,g[3]=bt,V.clearBufferiv(V.COLOR,0,g))}else D|=V.COLOR_BUFFER_BIT}k&&(D|=V.DEPTH_BUFFER_BIT),Y&&(D|=V.STENCIL_BUFFER_BIT),V.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",q,!1),e.removeEventListener("webglcontextcreationerror",et,!1),tt.dispose(),ot.dispose(),Bt.dispose(),Ht.dispose(),ae.dispose(),b.dispose(),ft.dispose(),Nt.dispose(),Z.dispose(),N.dispose(),N.removeEventListener("sessionstart",Jt),N.removeEventListener("sessionend",qe),mt&&(mt.dispose(),mt=null),pe.stop()};function rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let A=Zt.autoReset,k=at.enabled,Y=at.autoUpdate,D=at.needsUpdate,$=at.type;qt(),Zt.autoReset=A,at.enabled=k,at.autoUpdate=Y,at.needsUpdate=D,at.type=$}function et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){let k=A.target;k.removeEventListener("dispose",ct),zt(k)}function zt(A){$t(A),Bt.remove(A)}function $t(A){let k=Bt.get(A).programs;k!==void 0&&(k.forEach(function(Y){Z.releaseProgram(Y)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Y,D,$,ht){k===null&&(k=ye);let xt=$.isMesh&&$.matrixWorld.determinant()<0,St=ol(A,k,Y,D,$);Et.setMaterial(D,xt);let bt=Y.index,Ut=1;D.wireframe===!0&&(bt=C.getWireframeAttribute(Y),Ut=2);let At=Y.drawRange,Rt=Y.attributes.position,jt=At.start*Ut,Kt=(At.start+At.count)*Ut;ht!==null&&(jt=Math.max(jt,ht.start*Ut),Kt=Math.min(Kt,(ht.start+ht.count)*Ut)),bt!==null?(jt=Math.max(jt,0),Kt=Math.min(Kt,bt.count)):Rt!=null&&(jt=Math.max(jt,0),Kt=Math.min(Kt,Rt.count));let Ne=Kt-jt;if(Ne<0||Ne===1/0)return;ft.setup($,D,St,Y,bt);let Ke,Qt=vt;if(bt!==null&&(Ke=he.get(bt),Qt=_t,Qt.setIndex(Ke)),$.isMesh)D.wireframe===!0?(Et.setLineWidth(D.wireframeLinewidth*Ft()),Qt.setMode(V.LINES)):Qt.setMode(V.TRIANGLES);else if($.isLine){let Ot=D.linewidth;Ot===void 0&&(Ot=1),Et.setLineWidth(Ot*Ft()),$.isLineSegments?Qt.setMode(V.LINES):$.isLineLoop?Qt.setMode(V.LINE_LOOP):Qt.setMode(V.LINE_STRIP)}else $.isPoints?Qt.setMode(V.POINTS):$.isSprite&&Qt.setMode(V.TRIANGLES);if($.isInstancedMesh)Qt.renderInstances(jt,Ne,$.count);else if(Y.isInstancedBufferGeometry){let Ot=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ks=Math.min(Y.instanceCount,Ot);Qt.renderInstances(jt,Ne,Ks)}else Qt.render(jt,Ne)},this.compile=function(A,k){function Y(D,$,ht){D.transparent===!0&&D.side===dn&&D.forceSinglePass===!1?(D.side=be,D.needsUpdate=!0,Ji(D,$,ht),D.side=Cn,D.needsUpdate=!0,Ji(D,$,ht),D.side=dn):Ji(D,$,ht)}p=ot.get(A),p.init(),x.push(p),A.traverseVisible(function(D){D.isLight&&D.layers.test(k.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights(_.useLegacyLights),A.traverse(function(D){let $=D.material;if($)if(Array.isArray($))for(let ht=0;ht<$.length;ht++){let xt=$[ht];Y(xt,A,D)}else Y($,A,D)}),x.pop(),p=null};let se=null;function Ge(A){se&&se(A)}function Jt(){pe.stop()}function qe(){pe.start()}let pe=new jc;pe.setAnimationLoop(Ge),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(A){se=A,N.setAnimationLoop(A),A===null?pe.stop():pe.start()},N.addEventListener("sessionstart",Jt),N.addEventListener("sessionend",qe),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(k),k=N.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,k,R),p=ot.get(A,x.length),p.init(),x.push(p),wt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),nt.setFromProjectionMatrix(wt),lt=this.localClippingEnabled,st=pt.init(this.clippingPlanes,lt),v=tt.get(A,f.length),v.init(),f.push(v),Wo(A,k,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(z,X),this.info.render.frame++,st===!0&&pt.beginShadows();let Y=p.state.shadowsArray;if(at.render(Y,A,k),st===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(v,A),p.setupLights(_.useLegacyLights),k.isArrayCamera){let D=k.cameras;for(let $=0,ht=D.length;$<ht;$++){let xt=D[$];Go(v,A,xt,xt.viewport)}}else Go(v,A,k);R!==null&&(Lt.updateMultisampleRenderTarget(R),Lt.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(_,A,k),ft.resetDefaultState(),F=-1,M=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Wo(A,k,Y,D){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){D&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);let xt=b.update(A),St=A.material;St.visible&&v.push(A,xt,St,Y,kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){let xt=b.update(A),St=A.material;if(D&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),kt.copy(xt.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(St)){let bt=xt.groups;for(let Ut=0,At=bt.length;Ut<At;Ut++){let Rt=bt[Ut],jt=St[Rt.materialIndex];jt&&jt.visible&&v.push(A,xt,jt,Y,kt.z,Rt)}}else St.visible&&v.push(A,xt,St,Y,kt.z,null)}}let ht=A.children;for(let xt=0,St=ht.length;xt<St;xt++)Wo(ht[xt],k,Y,D)}function Go(A,k,Y,D){let $=A.opaque,ht=A.transmissive,xt=A.transparent;p.setupLightsView(Y),st===!0&&pt.setGlobalState(_.clippingPlanes,Y),ht.length>0&&rl($,ht,k,Y),D&&Et.viewport(E.copy(D)),$.length>0&&$i($,k,Y),ht.length>0&&$i(ht,k,Y),xt.length>0&&$i(xt,k,Y),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function rl(A,k,Y,D){let $=Tt.isWebGL2;mt===null&&(mt=new gn(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Wi:Rn,minFilter:Hi,samples:$?4:0})),_.getDrawingBufferSize(yt),$?mt.setSize(yt.x,yt.y):mt.setSize(oo(yt.x),oo(yt.y));let ht=_.getRenderTarget();_.setRenderTarget(mt),_.getClearColor(P),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let xt=_.toneMapping;_.toneMapping=pn,$i(A,Y,D),Lt.updateMultisampleRenderTarget(mt),Lt.updateRenderTargetMipmap(mt);let St=!1;for(let bt=0,Ut=k.length;bt<Ut;bt++){let At=k[bt],Rt=At.object,jt=At.geometry,Kt=At.material,Ne=At.group;if(Kt.side===dn&&Rt.layers.test(D.layers)){let Ke=Kt.side;Kt.side=be,Kt.needsUpdate=!0,qo(Rt,Y,D,jt,Kt,Ne),Kt.side=Ke,Kt.needsUpdate=!0,St=!0}}St===!0&&(Lt.updateMultisampleRenderTarget(mt),Lt.updateRenderTargetMipmap(mt)),_.setRenderTarget(ht),_.setClearColor(P,I),_.toneMapping=xt}function $i(A,k,Y){let D=k.isScene===!0?k.overrideMaterial:null;for(let $=0,ht=A.length;$<ht;$++){let xt=A[$],St=xt.object,bt=xt.geometry,Ut=D===null?xt.material:D,At=xt.group;St.layers.test(Y.layers)&&qo(St,k,Y,bt,Ut,At)}}function qo(A,k,Y,D,$,ht){A.onBeforeRender(_,k,Y,D,$,ht),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(_,k,Y,D,A,ht),$.transparent===!0&&$.side===dn&&$.forceSinglePass===!1?($.side=be,$.needsUpdate=!0,_.renderBufferDirect(Y,k,D,$,A,ht),$.side=Cn,$.needsUpdate=!0,_.renderBufferDirect(Y,k,D,$,A,ht),$.side=dn):_.renderBufferDirect(Y,k,D,$,A,ht),A.onAfterRender(_,k,Y,D,$,ht)}function Ji(A,k,Y){k.isScene!==!0&&(k=ye);let D=Bt.get(A),$=p.state.lights,ht=p.state.shadowsArray,xt=$.state.version,St=Z.getParameters(A,$.state,ht,k,Y),bt=Z.getProgramCacheKey(St),Ut=D.programs;D.environment=A.isMeshStandardMaterial?k.environment:null,D.fog=k.fog,D.envMap=(A.isMeshStandardMaterial?ae:Ht).get(A.envMap||D.environment),Ut===void 0&&(A.addEventListener("dispose",ct),Ut=new Map,D.programs=Ut);let At=Ut.get(bt);if(At!==void 0){if(D.currentProgram===At&&D.lightsStateVersion===xt)return Xo(A,St),At}else St.uniforms=Z.getUniforms(A),A.onBuild(Y,St,_),A.onBeforeCompile(St,_),At=Z.acquireProgram(St,bt),Ut.set(bt,At),D.uniforms=St.uniforms;let Rt=D.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Rt.clippingPlanes=pt.uniform),Xo(A,St),D.needsLights=cl(A),D.lightsStateVersion=xt,D.needsLights&&(Rt.ambientLightColor.value=$.state.ambient,Rt.lightProbe.value=$.state.probe,Rt.directionalLights.value=$.state.directional,Rt.directionalLightShadows.value=$.state.directionalShadow,Rt.spotLights.value=$.state.spot,Rt.spotLightShadows.value=$.state.spotShadow,Rt.rectAreaLights.value=$.state.rectArea,Rt.ltc_1.value=$.state.rectAreaLTC1,Rt.ltc_2.value=$.state.rectAreaLTC2,Rt.pointLights.value=$.state.point,Rt.pointLightShadows.value=$.state.pointShadow,Rt.hemisphereLights.value=$.state.hemi,Rt.directionalShadowMap.value=$.state.directionalShadowMap,Rt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Rt.spotShadowMap.value=$.state.spotShadowMap,Rt.spotLightMatrix.value=$.state.spotLightMatrix,Rt.spotLightMap.value=$.state.spotLightMap,Rt.pointShadowMap.value=$.state.pointShadowMap,Rt.pointShadowMatrix.value=$.state.pointShadowMatrix);let jt=At.getUniforms(),Kt=Mi.seqWithValue(jt.seq,Rt);return D.currentProgram=At,D.uniformsList=Kt,At}function Xo(A,k){let Y=Bt.get(A);Y.outputColorSpace=k.outputColorSpace,Y.instancing=k.instancing,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function ol(A,k,Y,D,$){k.isScene!==!0&&(k=ye),Lt.resetTextureUnits();let ht=k.fog,xt=D.isMeshStandardMaterial?k.environment:null,St=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:je,bt=(D.isMeshStandardMaterial?ae:Ht).get(D.envMap||xt),Ut=D.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,At=!!Y.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Rt=!!Y.morphAttributes.position,jt=!!Y.morphAttributes.normal,Kt=!!Y.morphAttributes.color,Ne=D.toneMapped?_.toneMapping:pn,Ke=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Qt=Ke!==void 0?Ke.length:0,Ot=Bt.get(D),Ks=p.state.lights;if(st===!0&&(lt===!0||A!==M)){let we=A===M&&D.id===F;pt.setState(D,A,we)}let re=!1;D.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ks.state.version||Ot.outputColorSpace!==St||$.isInstancedMesh&&Ot.instancing===!1||!$.isInstancedMesh&&Ot.instancing===!0||$.isSkinnedMesh&&Ot.skinning===!1||!$.isSkinnedMesh&&Ot.skinning===!0||Ot.envMap!==bt||D.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==pt.numPlanes||Ot.numIntersection!==pt.numIntersection)||Ot.vertexAlphas!==Ut||Ot.vertexTangents!==At||Ot.morphTargets!==Rt||Ot.morphNormals!==jt||Ot.morphColors!==Kt||Ot.toneMapping!==Ne||Tt.isWebGL2===!0&&Ot.morphTargetsCount!==Qt)&&(re=!0):(re=!0,Ot.__version=D.version);let In=Ot.currentProgram;re===!0&&(In=Ji(D,k,$));let Yo=!1,Ci=!1,Qs=!1,me=In.getUniforms(),Nn=Ot.uniforms;if(Et.useProgram(In.program)&&(Yo=!0,Ci=!0,Qs=!0),D.id!==F&&(F=D.id,Ci=!0),Yo||M!==A){if(me.setValue(V,"projectionMatrix",A.projectionMatrix),Tt.logarithmicDepthBuffer&&me.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Ci=!0,Qs=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){let we=me.map.cameraPosition;we!==void 0&&we.setValue(V,kt.setFromMatrixPosition(A.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&me.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||$.isSkinnedMesh)&&me.setValue(V,"viewMatrix",A.matrixWorldInverse)}if($.isSkinnedMesh){me.setOptional(V,$,"bindMatrix"),me.setOptional(V,$,"bindMatrixInverse");let we=$.skeleton;we&&(Tt.floatVertexTextures?(we.boneTexture===null&&we.computeBoneTexture(),me.setValue(V,"boneTexture",we.boneTexture,Lt),me.setValue(V,"boneTextureSize",we.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let tr=Y.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0&&Tt.isWebGL2===!0)&&gt.update($,Y,In),(Ci||Ot.receiveShadow!==$.receiveShadow)&&(Ot.receiveShadow=$.receiveShadow,me.setValue(V,"receiveShadow",$.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Nn.envMap.value=bt,Nn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),Ci&&(me.setValue(V,"toneMappingExposure",_.toneMappingExposure),Ot.needsLights&&al(Nn,Qs),ht&&D.fog===!0&&Q.refreshFogUniforms(Nn,ht),Q.refreshMaterialUniforms(Nn,D,G,U,mt),Mi.upload(V,Ot.uniformsList,Nn,Lt)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Mi.upload(V,Ot.uniformsList,Nn,Lt),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&me.setValue(V,"center",$.center),me.setValue(V,"modelViewMatrix",$.modelViewMatrix),me.setValue(V,"normalMatrix",$.normalMatrix),me.setValue(V,"modelMatrix",$.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){let we=D.uniformsGroups;for(let er=0,ll=we.length;er<ll;er++)if(Tt.isWebGL2){let Zo=we[er];Nt.update(Zo,In),Nt.bind(Zo,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function al(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function cl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,k,Y){Bt.get(A.texture).__webglTexture=k,Bt.get(A.depthTexture).__webglTexture=Y;let D=Bt.get(A);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=Y===void 0,D.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){let Y=Bt.get(A);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,Y=0){R=A,S=k,T=Y;let D=!0,$=null,ht=!1,xt=!1;if(A){let bt=Bt.get(A);bt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(V.FRAMEBUFFER,null),D=!1):bt.__webglFramebuffer===void 0?Lt.setupRenderTarget(A):bt.__hasExternalTextures&&Lt.rebindTextures(A,Bt.get(A.texture).__webglTexture,Bt.get(A.depthTexture).__webglTexture);let Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(xt=!0);let At=Bt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?($=At[k],ht=!0):Tt.isWebGL2&&A.samples>0&&Lt.useMultisampledRTT(A)===!1?$=Bt.get(A).__webglMultisampledFramebuffer:$=At,E.copy(A.viewport),H.copy(A.scissor),j=A.scissorTest}else E.copy(K).multiplyScalar(G).floor(),H.copy(B).multiplyScalar(G).floor(),j=O;if(Et.bindFramebuffer(V.FRAMEBUFFER,$)&&Tt.drawBuffers&&D&&Et.drawBuffers(A,$),Et.viewport(E),Et.scissor(H),Et.setScissorTest(j),ht){let bt=Bt.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,Y)}else if(xt){let bt=Bt.get(A.texture),Ut=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,bt.__webglTexture,Y||0,Ut)}F=-1},this.readRenderTargetPixels=function(A,k,Y,D,$,ht,xt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){Et.bindFramebuffer(V.FRAMEBUFFER,St);try{let bt=A.texture,Ut=bt.format,At=bt.type;if(Ut!==Ve&&dt.convert(Ut)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Rt=At===Wi&&(Mt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(At!==Rn&&dt.convert(At)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===An&&(Tt.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-D&&Y>=0&&Y<=A.height-$&&V.readPixels(k,Y,D,$,dt.convert(Ut),dt.convert(At),ht)}finally{let bt=R!==null?Bt.get(R).__webglFramebuffer:null;Et.bindFramebuffer(V.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(A,k,Y=0){let D=Math.pow(2,-Y),$=Math.floor(k.image.width*D),ht=Math.floor(k.image.height*D);Lt.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,Y,0,0,A.x,A.y,$,ht),Et.unbindTexture()},this.copyTextureToTexture=function(A,k,Y,D=0){let $=k.image.width,ht=k.image.height,xt=dt.convert(Y.format),St=dt.convert(Y.type);Lt.setTexture2D(Y,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,D,A.x,A.y,$,ht,xt,St,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,D,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,xt,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,D,A.x,A.y,xt,St,k.image),D===0&&Y.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(A,k,Y,D,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ht=A.max.x-A.min.x+1,xt=A.max.y-A.min.y+1,St=A.max.z-A.min.z+1,bt=dt.convert(D.format),Ut=dt.convert(D.type),At;if(D.isData3DTexture)Lt.setTexture3D(D,0),At=V.TEXTURE_3D;else if(D.isDataArrayTexture)Lt.setTexture2DArray(D,0),At=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,D.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,D.unpackAlignment);let Rt=V.getParameter(V.UNPACK_ROW_LENGTH),jt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Kt=V.getParameter(V.UNPACK_SKIP_PIXELS),Ne=V.getParameter(V.UNPACK_SKIP_ROWS),Ke=V.getParameter(V.UNPACK_SKIP_IMAGES),Qt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Qt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Qt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,A.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,A.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?V.texSubImage3D(At,$,k.x,k.y,k.z,ht,xt,St,bt,Ut,Qt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(At,$,k.x,k.y,k.z,ht,xt,St,bt,Qt.data)):V.texSubImage3D(At,$,k.x,k.y,k.z,ht,xt,St,bt,Ut,Qt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Rt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Kt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ne),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ke),$===0&&D.generateMipmaps&&V.generateMipmap(At),Et.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Lt.setTextureCube(A,0):A.isData3DTexture?Lt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Lt.setTexture2DArray(A,0):Lt.setTexture2D(A,0),Et.unbindTexture()},this.resetState=function(){S=0,T=0,R=null,Et.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?Gn:Xc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Gn?Pt:je}},Eo=class extends Xi{};Eo.prototype.isWebGL1Renderer=!0;var $s=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};function wn(r,t,e){return nl(r)?new r.constructor(r.subarray(t,e!==void 0?e:r.length)):r.slice(t,e)}function Is(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function nl(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ti=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ao=class extends Ti{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ya,endingEnd:Ya}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Za:s=t,a=2*e-n;break;case $a:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Za:o=t,c=2*n-e;break;case $a:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(i-e),v=g*g,p=v*g,f=-u*p+2*u*v-u*g,x=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*g+1,_=(-1-m)*p+(1.5+m)*v+.5*g,w=m*p-m*v;for(let S=0;S!==a;++S)s[S]=f*o[h+S]+x*o[l+S]+_*o[c+S]+w*o[d+S];return s}},To=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[l+u]*d+o[c+u]*h;return s}},Ro=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},We=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Is(e,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Is(t.times,Array),values:Is(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ao(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ns:e=this.InterpolantFactoryMethodDiscrete;break;case Us:e=this.InterpolantFactoryMethodLinear;break;case Cr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return Cr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=wn(n,s,o),this.values=wn(this.values,s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&nl(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=wn(this.times),e=wn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Cr,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,u=d-n,m=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=wn(t,0,o),this.values=wn(e,0,o*n)):(this.times=t,this.values=e),this}clone(){let t=wn(this.times,0),e=wn(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};We.prototype.TimeBufferType=Float32Array;We.prototype.ValueBufferType=Float32Array;We.prototype.DefaultInterpolation=Us;var Zn=class extends We{};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=Ns;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends We{};Co.prototype.ValueTypeName="color";var Po=class extends We{};Po.prototype.ValueTypeName="number";var Lo=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ln.slerpFlat(s,0,o,l-a,o,l,c);return s}},Yi=class extends We{InterpolantFactoryMethodLinear(t){return new Lo(this.times,this.values,this.getValueSize(),t)}};Yi.prototype.ValueTypeName="quaternion";Yi.prototype.DefaultInterpolation=Us;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends We{};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Ns;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends We{};Io.prototype.ValueTypeName="vector";var No=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},S0=new No,Uo=class{constructor(t){this.manager=t!==void 0?t:S0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var zo="\\[\\]\\.:\\/",b0=new RegExp("["+zo+"]","g"),Vo="[^"+zo+"]",w0="[^"+zo.replace("\\.","")+"]",E0=/((?:WC+[\/:])*)/.source.replace("WC",Vo),A0=/(WCOD+)?/.source.replace("WCOD",w0),T0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vo),R0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vo),C0=new RegExp("^"+E0+A0+T0+R0+"$"),P0=["material","materials","bones","map"],Fo=class{constructor(t,e,n){let i=n||Yt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Yt=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(b0,"")}static parseTrackName(t){let e=C0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);P0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=Fo;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);var ko={},Ho=new EventTarget,I0=async({key:r,initialValue:t})=>r in ko?ko[r]:t,N0=async({key:r,value:t})=>(ko[r]=t,t),U0=async({topic:r,value:t})=>{let e=new CustomEvent(r,{detail:t});Ho.dispatchEvent(e)},F0=({topic:r,callback:t})=>{let e=async n=>{await t(n.detail)};return Ho.addEventListener(r,e),()=>{Ho.removeEventListener(r,e)}},D0=({key:r,initialValue:t})=>async()=>await I0({key:r,initialValue:t}),B0=({key:r})=>async t=>await N0({key:r,value:t}),O0=({topic:r})=>async t=>{await U0({topic:r,value:t})},z0=({topic:r})=>t=>F0({topic:r,callback:t}),il=({key:r,initialValue:t})=>({get:D0({key:r,initialValue:t}),set:B0({key:r})}),V0=({topic:r})=>({emit:O0({topic:r}),on:z0({topic:r})}),k0=({key:r,initialValue:t})=>{let{get:e,set:n}=il({key:r,initialValue:t}),{emit:i,on:s}=V0({topic:r});return{get:e,set:async o=>{await n(o),await i(o)},onChanged:s}};var H0=({key:r,initialValue:t})=>{let{get:e,set:n,onChanged:i}=k0({key:r,initialValue:t});return{get:e,set:n,onChanged:i,increment:async()=>{let s=await e();return await n(s+1),s+1},decrement:async()=>{let s=await e();return await n(s-1),s-1}}},W0=({onBeforeUpdate:r,onAfterUpdate:t})=>{let{get:e,set:n}=H0({key:"frameCount",initialValue:0}),{get:i,set:s}=il({key:"timestamp"}),o=[],a=async()=>{let[c,l]=await Promise.all([e(),i()]),h=Date.now(),u={index:c+1,timestamp:h,millisecondsSinceLastFrame:h-l};await Promise.all([n(u.index),s(u.timestamp)]),r&&await r(u),await Promise.all(o.map(m=>m(u))),t&&await t(u),requestAnimationFrame(a)};return requestAnimationFrame(a),c=>(o.push(c),()=>{o.splice(o.indexOf(c),1)})},G0=()=>new $s,q0=()=>new _e(75,1,.1,1e3),X0=()=>new Xi,Y0=()=>new hs,sl=()=>{let r=Y0(),t=X0(),e=q0(),n=G0(),i=W0({onBeforeUpdate:async s=>{r.step(1/60,s.millisecondsSinceLastFrame/1e3)},onAfterUpdate:async s=>{t.render(n,e)}});return s=>{i(async o=>{await s({scene:n,camera:e,renderer:t,physics:r,frame:o})})}};var Z0=sl();Z0(async({scene:r,camera:t,renderer:e,physics:n,frame:i})=>{console.log(i.index)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=bundle.js.map
