// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},e=Math.floor,n=e;var t=function(r){return n(r)===r};var u=function(r){return Math.abs(r)},f=Math.ceil,i=e,o=f;var a=function(r){return r<0?o(r):i(r)},c=Number.NEGATIVE_INFINITY,v=Number.POSITIVE_INFINITY,y=v,l=c;var s=function(r){return r===y||r===l};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var p=function(){return w&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,A=b;var N=function(r){return A.call(r)},h=Object.prototype.hasOwnProperty;var U=function(r,e){return null!=r&&h.call(r,e)},m="function"==typeof Symbol?Symbol.toStringTag:"",d=U,I=m,F=b;var S=N,H=function(r){var e,n,t;if(null==r)return F.call(r);n=r[I],e=d(r,I);try{r[I]=void 0}catch(e){return F.call(r)}return t=F.call(r),e?r[I]=n:delete r[I],t},O=p()?H:S,g=O,E="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null,x=function(r){return E&&r instanceof Uint32Array||"[object Uint32Array]"===g(r)},T=j;var G=function(){var r,e;if("function"!=typeof T)return!1;try{e=new T(e=[1,3.14,-3.14,4294967296,4294967297]),r=x(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var M="function"==typeof Uint32Array?Uint32Array:void 0,L=function(){throw new Error("not implemented")},W=G()?M:L,k=O,P="function"==typeof Float64Array;var V="function"==typeof Float64Array?Float64Array:null,Y=function(r){return P&&r instanceof Float64Array||"[object Float64Array]"===k(r)},_=V;var q=function(){var r,e;if("function"!=typeof _)return!1;try{e=new _([1,3.14,-3.14,NaN]),r=Y(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},C=q()?z:B,D=O,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,e;if("function"!=typeof R)return!1;try{e=new R(e=[1,3.14,-3.14,256,257]),r=Q(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,er=O,nr="function"==typeof Uint16Array;var tr="function"==typeof Uint16Array?Uint16Array:null,ur=function(r){return nr&&r instanceof Uint16Array||"[object Uint16Array]"===er(r)},fr=tr;var ir=function(){var r,e;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,65536,65537]),r=ur(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var or,ar="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},vr={uint16:ir()?ar:cr,uint8:rr};(or=new vr.uint16(1))[0]=4660;var yr,lr,sr=52===new vr.uint8(or.buffer)[0];!0===sr?(yr=1,lr=0):(yr=0,lr=1);var wr=W,pr={HIGH:yr,LOW:lr},br=new C(1),Ar=new wr(br.buffer),Nr=pr.HIGH,hr=pr.LOW;var Ur=function(r,e){return br[0]=e,r[0]=Ar[Nr],r[1]=Ar[hr],r};var mr=function(r,e){return 1===arguments.length?Ur([0,0],r):Ur(r,e)},dr=W,Ir=!0===sr?1:0,Fr=new C(1),Sr=new dr(Fr.buffer);var Hr,Or,gr=function(r){return Fr[0]=r,Sr[Ir]};!0===sr?(Hr=1,Or=0):(Hr=0,Or=1);var Er=W,jr={HIGH:Hr,LOW:Or},xr=new C(1),Tr=new Er(xr.buffer),Gr=jr.HIGH,Mr=jr.LOW;var Lr=function(r,e){return Tr[Gr]=r,Tr[Mr]=e,xr[0]},Wr=Lr,kr=mr,Pr=gr,Vr=Wr,Yr=[0,0];var _r=function(r,e){var n,t;return kr(Yr,r),n=Yr[0],n&=2147483647,t=Pr(e),Vr(n|=t&=2147483648,Yr[1])},qr=s,zr=r,Br=u;var Cr=function(r,e){return zr(e)||qr(e)?(r[0]=e,r[1]=0,r):0!==e&&Br(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var Dr=gr;var Jr=function(r){var e=Dr(r);return(e=(2146435072&e)>>>20)-1023|0},Kr=v,Qr=c,Rr=r,Xr=s,Zr=_r,$r=function(r,e){return 1===arguments.length?Cr([0,0],r):Cr(r,e)},re=Jr,ee=mr,ne=Wr,te=[0,0],ue=[0,0];var fe=function(r,e){var n,t;return 0===e||0===r||Rr(r)||Xr(r)?r:($r(te,r),e+=te[1],(e+=re(r=te[0]))<-1074?Zr(0,r):e>1023?r<0?Qr:Kr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ee(ue,r),n=ue[0],n&=2148532223,t*ne(n|=e+1023<<20,ue[1])))},ie=fe;var oe=ie,ae=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ce=r,ve=a,ye=c,le=v,se=function(r,e,n){var t,u,f;return f=(t=r-e)-(u=t*t)*ae(u),oe(1-(e-t*f/(2-f)-r),n)};var we=function(r){var e;return ce(r)||r===le?r:r===ye?0:r>709.782712893384?le:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(e=ve(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),se(r-.6931471803691238*e,1.9082149292705877e-10*e,e))},pe=c;var be=function(r){return 0===r&&1/r===pe};var Ae=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Ne=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var he=function(r,e){var n,t,u,f;return u=(f=r*r)*f,t=f*Ae(f),t+=u*u*Ne(f),(u=1-(n=.5*f))+(1-u-n+(f*t-r*e))},Ue=-.16666666666666632;var me=function(r,e){var n,t,u;return n=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===e?r+t*(Ue+u*n):r-(u*(.5*e-t*n)-e-t*Ue)},de=W,Ie=!0===sr?0:1,Fe=new C(1),Se=new de(Fe.buffer);var He=function(r){return Fe[0]=r,Se[Ie]};var Oe=function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n};var ge=e,Ee=ie,je=function(r){return Oe(0,r)},xe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Te=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ge=5.960464477539063e-8,Me=je(20),Le=je(20),We=je(20),ke=je(20);function Pe(r,e,n,t,u,f,i,o,a){var c,v,y,l,s,w,p,b,A;for(l=f,A=t[n],b=n,s=0;b>0;s++)v=Ge*A|0,ke[s]=A-16777216*v|0,A=t[b-1]+v,b-=1;if(A=Ee(A,u),A-=8*ge(.125*A),A-=p=0|A,y=0,u>0?(p+=s=ke[n-1]>>24-u,ke[n-1]-=s<<24-u,y=ke[n-1]>>23-u):0===u?y=ke[n-1]>>23:A>=.5&&(y=2),y>0){for(p+=1,c=0,s=0;s<n;s++)b=ke[s],0===c?0!==b&&(c=1,ke[s]=16777216-b):ke[s]=16777215-b;if(u>0)switch(u){case 1:ke[n-1]&=8388607;break;case 2:ke[n-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=Ee(1,u)))}if(0===A){for(b=0,s=n-1;s>=f;s--)b|=ke[s];if(0===b){for(w=1;0===ke[f-w];w++);for(s=n+1;s<=n+w;s++){for(a[o+s]=xe[i+s],v=0,b=0;b<=o;b++)v+=r[b]*a[o+(s-b)];t[s]=v}return Pe(r,e,n+=w,t,u,f,i,o,a)}}if(0===A)for(n-=1,u-=24;0===ke[n];)n-=1,u-=24;else(A=Ee(A,-u))>=16777216?(v=Ge*A|0,ke[n]=A-16777216*v|0,u+=24,ke[n+=1]=v):ke[n]=0|A;for(v=Ee(1,u),s=n;s>=0;s--)t[s]=v*ke[s],v*=Ge;for(s=n;s>=0;s--){for(v=0,w=0;w<=l&&w<=n-s;w++)v+=Te[w]*t[s+w];We[n-s]=v}for(v=0,s=n;s>=0;s--)v+=We[s];for(e[0]=0===y?v:-v,v=We[0]-v,s=1;s<=n;s++)v+=We[s];return e[1]=0===y?v:-v,7&p}var Ve=function(r,e,n,t){var u,f,i,o,a,c,v;for(4,(f=(n-3)/24|0)<0&&(f=0),o=n-24*(f+1),c=f-(i=t-1),v=i+4,a=0;a<=v;a++)Me[a]=c<0?0:xe[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Me[i+(a-c)];Le[a]=u}return 4,Pe(r,e,4,Le,o,4,f,i,Me)},Ye=Math.round,_e=gr;var qe=gr,ze=He,Be=Wr,Ce=Ve,De=function(r,e,n){var t,u,f,i,o;return f=r-1.5707963267341256*(t=Ye(.6366197723675814*r)),i=6077100506506192e-26*t,o=e>>20|0,n[0]=f-i,o-(_e(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((u=f)-(f=u-(i=6077100506303966e-26*t))-i),n[0]=f-i,o-(_e(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((u=f)-(f=u-(i=20222662487111665e-37*t))-i),n[0]=f-i)),n[1]=f-n[0]-i,t},Je=1.5707963267341256,Ke=6077100506506192e-26,Qe=2*Ke,Re=4*Ke,Xe=[0,0,0],Ze=[0,0];var $e=function(r,e){var n,t,u,f,i,o,a;if((u=2147483647&qe(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?De(r,u,e):u<=1073928572?r>0?(a=r-Je,e[0]=a-Ke,e[1]=a-e[0]-Ke,1):(a=r+Je,e[0]=a+Ke,e[1]=a-e[0]+Ke,-1):r>0?(a=r-2*Je,e[0]=a-Qe,e[1]=a-e[0]-Qe,2):(a=r+2*Je,e[0]=a+Qe,e[1]=a-e[0]+Qe,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?De(r,u,e):r>0?(a=r-3*Je,e[0]=a-1.8231301519518578e-10,e[1]=a-e[0]-1.8231301519518578e-10,3):(a=r+3*Je,e[0]=a+1.8231301519518578e-10,e[1]=a-e[0]+1.8231301519518578e-10,-3):1075388923===u?De(r,u,e):r>0?(a=r-4*Je,e[0]=a-Re,e[1]=a-e[0]-Re,4):(a=r+4*Je,e[0]=a+Re,e[1]=a-e[0]+Re,-4);if(u<1094263291)return De(r,u,e);if(u>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=ze(r),a=Be(u-((t=(u>>20)-1046)<<20|0),n),i=0;i<2;i++)Xe[i]=0|a,a=16777216*(a-Xe[i]);for(Xe[2]=a,f=3;0===Xe[f-1];)f-=1;return o=Ce(Xe,Ze,t,f),r<0?(e[0]=-Ze[0],e[1]=-Ze[1],-o):(e[0]=Ze[0],e[1]=Ze[1],o)},rn=$e,en=gr,nn=he,tn=me,un=rn,fn=[0,0];var on=function(r){var e;if(e=en(r),(e&=2147483647)<=1072243195)return e<1045430272?r:tn(r,0);if(e>=2146435072)return NaN;switch(3&un(r,fn)){case 0:return tn(fn[0],fn[1]);case 1:return nn(fn[0],fn[1]);case 2:return-tn(fn[0],fn[1]);default:return-nn(fn[0],fn[1])}},an=3.141592653589793,cn=t;var vn=function(r){return cn(r/2)};var yn=function(r){return vn(r>0?r-1:r+1)},ln=Math.sqrt,sn=W,wn=!0===sr?0:1,pn=new C(1),bn=new sn(pn.buffer);var An=function(r,e){return pn[0]=r,bn[wn]=e>>>0,pn[0]},Nn=An;var hn=function(r){return 0|r},Un=yn,mn=_r,dn=c,In=v;var Fn=function(r,e){return e===dn?In:e===In?0:e>0?Un(e)?r:0:Un(e)?mn(In,r):In},Sn=gr;var Hn=function(r,e){return(2147483647&Sn(r))<=1072693247?e<0?1/0:0:e>0?1/0:0},On=u,gn=v;var En=function(r,e){return-1===r?(r-r)/(r-r):1===r?1:On(r)<1==(e===gn)?0:gn},jn=W,xn=!0===sr?1:0,Tn=new C(1),Gn=new jn(Tn.buffer);var Mn=function(r,e){return Tn[0]=r,Gn[xn]=e>>>0,Tn[0]};var Ln=gr,Wn=Nn,kn=Mn,Pn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Vn=[1,1.5],Yn=[0,.5849624872207642],_n=[0,1.350039202129749e-8];var qn=Nn,zn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Bn=gr,Cn=Mn,Dn=Nn,Jn=hn,Kn=ie,Qn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Rn=r,Xn=yn,Zn=s,$n=t,rt=ln,et=u,nt=mr,tt=Nn,ut=hn,ft=c,it=v,ot=Fn,at=Hn,ct=En,vt=function(r,e,n){var t,u,f,i,o,a,c,v,y,l,s,w,p,b,A,N,h,U,m,d;return U=0,n<1048576&&(U-=53,n=Ln(e*=9007199254740992)),U+=(n>>20)-1023|0,n=1072693248|(m=1048575&n|0),m<=235662?d=0:m<767610?d=1:(d=0,U+=1,n-=1048576),t=524288+(n>>1|536870912),o=(h=1/((e=kn(e,n))+(c=Vn[d])))*((N=e-c)-(i=Wn(u=N*h,0))*(a=kn(0,t+=d<<18))-i*(e-(a-c))),A=(f=u*u)*f*Pn(f),a=Wn(a=3+(f=i*i)+(A+=o*(i+u)),0),p=(s=-7.028461650952758e-9*(y=Wn(y=(N=i*a)+(h=o*a+(A-(a-3-f))*u),0))+.9617966939259756*(h-(y-N))+_n[d])-((w=Wn(w=(l=.9617967009544373*y)+s+(v=Yn[d])+(b=U),0))-b-v-l),r[0]=w,r[1]=p,r},yt=function(r,e){var n,t,u,f,i;return n=(i=1.9259629911266175e-8*(u=e-1)-1.4426950408889634*(u*u*zn(u)))-((t=qn(t=(f=1.4426950216293335*u)+i,0))-f),r[0]=t,r[1]=n,r},lt=function(r,e,n){var t,u,f,i,o,a,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(t=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),e-=f=Cn(0,t)),a=(o=.6931471805599453*(n-((f=Dn(f=n+e,0))-e))+-1.904654299957768e-9*f)-((c=(i=.6931471824645996*f)+o)-i),u=c-(f=c*c)*Qn(f),r=Bn(c=1-(c*u/(u-2)-(a+c*a)-c)),r=Jn(r),c=(r+=v<<20>>>0)>>20<=0?Kn(c,v):Cn(c,r)},st=1e300,wt=[0,0],pt=[0,0];var bt=function r(e,n){var t,u,f,i,o,a,c,v,y,l,s,w,p,b;if(Rn(e)||Rn(n))return NaN;if(nt(wt,n),o=wt[0],0===wt[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return rt(e);if(-.5===n)return 1/rt(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(Zn(n))return ct(e,n)}if(nt(wt,e),i=wt[0],0===wt[1]){if(0===i)return ot(e,n);if(1===e)return 1;if(-1===e&&Xn(n))return-1;if(Zn(e))return e===ft?r(-0,-n):n<0?0:it}if(e<0&&!1===$n(n))return(e-e)/(e-e);if(f=et(e),t=2147483647&i|0,u=2147483647&o|0,c=o>>>31|0,a=(a=i>>>31|0)&&Xn(n)?-1:1,u>1105199104){if(u>1139802112)return at(e,n);if(t<1072693247)return 1===c?a*st*st:1e-300*a*1e-300;if(t>1072693248)return 0===c?a*st*st:1e-300*a*1e-300;s=yt(pt,f)}else s=vt(pt,f,t);if(l=(n-(v=tt(n,0)))*s[0]+n*s[1],y=v*s[0],nt(wt,w=l+y),p=ut(wt[0]),b=ut(wt[1]),p>=1083179008){if(0!=(p-1083179008|b))return a*st*st;if(l+8008566259537294e-32>w-y)return a*st*st}else if((2147483647&p)>=1083231232){if(0!=(p-3230714880|b))return 1e-300*a*1e-300;if(l<=w-y)return 1e-300*a*1e-300}return a*(w=lt(p,y,l))},At=bt;var Nt=At,ht=we,Ut=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var mt=r,dt=t,It=be,Ft=u,St=e,Ht=on,Ot=v,gt=c,Et=an,jt=function(r){var e,n,t;return e=1+(e=1/r)*Ut(e),n=ht(r),2.5066282746310007*(n=r>143.01608?(t=Nt(r,.5*r-.25))*(t/n):Nt(r,r-.5)/n)*e},xt=function(r,e){return e/((1+.5772156649015329*r)*r)},Tt=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)};var Gt=function(r){var e,n,t,u;if(dt(r)&&r<0||r===gt||mt(r))return NaN;if(0===r)return It(r)?gt:Ot;if(r>171.61447887182297)return Ot;if(r<-170.5674972726612)return 0;if((n=Ft(r))>33)return r>=0?jt(r):(e=0==(1&(t=St(n)))?-1:1,(u=n-t)>.5&&(u=n-(t+=1)),u=n*Ht(Et*u),e*Et/(Ft(u)*jt(n)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return xt(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return xt(r,u);u/=r,r+=1}return 2===r?u:u*Tt(r-=2)};var Mt=gr,Lt=Mn,Wt=r,kt=c,Pt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Vt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Yt=.6931471803691238,_t=1.9082149292705877e-10;var qt=function(r){var e,n,t,u,f,i,o,a,c,v,y;return 0===r?kt:Wt(r)||r<0?NaN:(u=0,(n=Mt(r))<1048576&&(u-=54,n=Mt(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,u+=(o=(n&=1048575)+614244&1048576|0)>>20|0,i=(r=Lt(r,n|1072693248^o))-1,(1048575&2+n)<3?0===i?0===u?0:u*Yt+u*_t:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*Yt-(f-u*_t-i)):(o=n-398458|0,a=440401-n|0,t=(v=(y=(c=i/(2+i))*c)*y)*Pt(v),f=y*Vt(v)+t,(o|=a)>0?(e=.5*i*i,0===u?i-(e-c*(e+f)):u*Yt-(e-(c*(e+f)+u*_t)-i)):0===u?i-c*(i-f):u*Yt-(c*(i-f)-u*_t-i))))},zt=gr,Bt=he,Ct=me,Dt=rn,Jt=[0,0];var Kt=r,Qt=s,Rt=function(r){var e;if(e=zt(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Bt(r,0);if(e>=2146435072)return NaN;switch(3&Dt(r,Jt)){case 0:return Bt(Jt[0],Jt[1]);case 1:return-Ct(Jt[0],Jt[1]);case 2:return-Bt(Jt[0],Jt[1]);default:return Ct(Jt[0],Jt[1])}},Xt=on,Zt=u,$t=_r,ru=an;var eu=function(r){var e,n;return Kt(r)||Qt(r)?NaN:0===(e=Zt(n=r%2))||1===e?$t(0,n):e<.25?Xt(ru*n):e<.75?$t(Rt(ru*(e=.5-e)),n):e<1.25?(n=$t(1,n)-n,Xt(ru*n)):e<1.75?-$t(Rt(ru*(e-=1.5)),n):(n-=$t(2,n),Xt(ru*n))};var nu=r,tu=s,uu=u,fu=qt,iu=a,ou=eu,au=v,cu=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},vu=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},yu=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},lu=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},su=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},wu=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},pu=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},bu=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},Au=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},Nu=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},hu=1.4616321449683622,Uu=1.4616321449683622;var mu=function(r){var e,n,t,u,f,i,o,a;if(nu(r)||tu(r))return r;if(0===r)return au;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-fu(r);if(e){if(r>=4503599627370496)return au;if(0===(u=ou(r)))return au;n=fu(3.141592653589793/uu(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(a=-fu(r),r>=hu-1+.27?(i=1-r,t=0):r>=hu-1-.27?(i=r-(Uu-1),t=1):(i=r,t=2)):(a=0,r>=hu+.27?(i=2-r,t=0):r>=hu-.27?(i=r-Uu,t=1):(i=r-1,t=2)),t){case 0:a+=i*(.07721566490153287+(o=i*i)*cu(o))+o*(.3224670334241136+o*vu(o))-.5*i;break;case 1:a+=-.12148629053584961+((o=i*i)*(.48383612272381005+(f=o*i)*su(f))-(-3638676997039505e-33-f*(f*wu(f)-.1475877229945939+i*(.06462494023913339+f*pu(f)))));break;case 2:a+=-.5*i+i*(i*bu(i)-.07721566490153287)/(1+i*Au(i))}else if(r<8)switch(a=.5*(i=r-(t=iu(r)))+i*(i*lu(i)-.07721566490153287)/(1+i*yu(i)),o=1,t){case 7:o*=i+6;case 6:o*=i+5;case 5:o*=i+4;case 4:o*=i+3;case 3:a+=fu(o*=i+2)}else a=r<0x400000000000000?(r-.5)*((u=fu(r))-1)+(f=.4189385332046727+(o=1/r)*Nu(i=o*o)):r*(fu(r)-1);return e&&(a=n-a),a},du=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Iu=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Fu=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290];function Su(n){var f,i,o,a,y,l,s,w,p;if(r(n))return NaN;if(1===n)return NaN;if(n>=56)return 1;if(t(n)&&(a=0|n)===n){if(!(a<0))return 0==(1&a)?Iu[a/2]:du[(a-3)/2];if(0==(1&(o=0|-a)))return 0;if((l=(o+1)/2|0)<=129)return-Fu[l]/(o+1)}return u(n)<1.4901161193847656e-8?-.5-.9189385332046728*n:(i=1-n,n<0?e(n/2)===n/2?0:(f=n,n=i,i=f,n>170?(f=2*eu(.5*i)*Su(n),y=mu(n),(y-=n*qt(6.283185307179586))>709?f<0?c:v:f*we(y)):2*eu(.5*i)*At(6.283185307179586,-n)*Gt(n)*Su(n)):n<1?(f=0===(s=i)?.2433929443359375:((s<0?-s:s)<=1?(w=.2433929443359375+s*(s*(.055761621477604675+s*(s*(.0004515345286457964+-9332412703570615e-21*s)-.003209124988790859))-.4909247051635357),p=1+s*(s*(.04196762233099861+s*(s*(.00024978985622317937+-10185578841856403e-21*s)-.00413421406552171))-.27996033431034445)):(w=(s=1/s)*(.0004515345286457964+s*(s*(.055761621477604675+s*(.2433929443359375*s-.4909247051635357))-.003209124988790859))-9332412703570615e-21,p=s*(.00024978985622317937+s*(s*(.04196762233099861+s*(1*s-.27996033431034445))-.00413421406552171))-10185578841856403e-21),w/p),f-=1.2433929443359375,f+=i,f/=i):n<=2?(f=1/(i=-i))+function(r){var e,n;return 0===r?.5772156649015329:((r<0?-r:r)<=1?(e=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+1101084409767329e-20*r)))),n=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+10991819782396113e-21*r))))):(e=1101084409767329e-20+(r=1/r)*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+.5772156649015329*r)))),n=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+1*r))))),e/n)}(i):n<=4?(f=.6986598968505859+1/-i)+function(r){var e,n;return 0===r?-.053725830002359504:((r<0?-r:r)<=1?(e=r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+0*r)))))-.053725830002359504,n=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+2.3627662397497864e-8*r)))))):(e=0+(r=1/r)*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+-.053725830002359504*r))))),n=2.3627662397497864e-8+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+1*r)))))),e/n)}(n-2):n<=7?(f=function(r){var e,n;return 0===r?-2.497101906022594:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(0+r*(0+0*r))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(r*(49340956392759e-19+r*(r*(7.188337293654598e-9+-1.1292001134749475e-10*r)-2.3405548702528722e-7))-36910273311764616e-21))))):(e=0+(r=1/r)*(0+r*(0+r*(r*(r*(r*(r*(-2.497101906022594*r-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=r*(7.188337293654598e-9+r*(r*(49340956392759e-19+r*(r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+1*r)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),e/n)}(n-4),1+we(f)):n<15?(f=function(r){var e,n;return 0===r?-4.785580284951356:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+0*r))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+r*(.24434533737818856+r*(.008733707544922887+r*(r*(r*(r*(4.710012640030765e-9+r*(6998415452048457e-28*r-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(e=0+(r=1/r)*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(r*(r*(-4.785580284951356*r-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+r*(r*(4.710012640030765e-9+r*(r*(r*(r*(.008733707544922887+r*(.24434533737818856+1*r))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),e/n)}(n-7),1+we(f)):n<36?(f=function(r){var e,n;return 0===r?-10.39489505733089:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(-8.214657090954655e-9*r-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9.555611230656935e-7+r*(1.185071534740229e-8+2226094836273526e-30*r))))))):(e=(r=1/r)*(r*(r*(r*(r*(r*(-10.39489505733089*r-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+r*(1.185071534740229e-8+r*(9.555611230656935e-7+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+1*r))))))),e/n)}(n-15),1+we(f)):1+At(2,-n))}export{Su as default};
//# sourceMappingURL=mod.js.map
