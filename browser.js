// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return e!=e}var r=Math.floor;function n(e){return r(e)===e}function t(e){return Math.abs(e)}var u=Math.ceil;function f(e){return e<0?u(e):r(e)}var i=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=1023;function c(e){return e===o||e===i}var l,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,p=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"";l=y&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,u,f;if(null==e)return v.call(e);n=e[s],f=s,r=null!=(u=e)&&p.call(u,f);try{e[s]=void 0}catch(r){return v.call(e)}return t=v.call(e),r?e[s]=n:delete e[s],t}:function(e){return v.call(e)};var b,w=l,d="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,h="function"==typeof Uint32Array?Uint32Array:void 0;b=function(){var e,r,n;if("function"!=typeof A)return!1;try{r=new A(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(d&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?h:function(){throw new Error("not implemented")};var _,N=b,m="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;_=function(){var e,r,n;if("function"!=typeof U)return!1;try{r=new U([1,3.14,-3.14,NaN]),n=r,e=(m&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?g:function(){throw new Error("not implemented")};var j,I=_,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var e,r,n;if("function"!=typeof S)return!1;try{r=new S(r=[1,3.14,-3.14,256,257]),n=r,e=(O&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?E:function(){throw new Error("not implemented")};var F,T=j,x="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,G="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var e,r,n;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,65536,65537]),n=r,e=(x&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?G:function(){throw new Error("not implemented")};var P,k={uint16:F,uint8:T};(P=new k.uint16(1))[0]=4660;var M,L,V=52===new k.uint8(P.buffer)[0];!0===V?(M=1,L=0):(M=0,L=1);var W={HIGH:M,LOW:L},Y=new I(1),q=new N(Y.buffer),z=W.HIGH,C=W.LOW;function B(e,r){return Y[0]=r,e[0]=q[z],e[1]=q[C],e}function D(e,r){return 1===arguments.length?B([0,0],e):B(e,r)}var J,K,Q=!0===V?1:0,R=new I(1),X=new N(R.buffer);function Z(e){return R[0]=e,X[Q]}!0===V?(J=1,K=0):(J=0,K=1);var $={HIGH:J,LOW:K},ee=new I(1),re=new N(ee.buffer),ne=$.HIGH,te=$.LOW;function ue(e,r){return re[ne]=e,re[te]=r,ee[0]}var fe=[0,0];function ie(e,r){var n,t;return D(fe,e),n=fe[0],n&=2147483647,t=Z(r),ue(n|=t&=2147483648,fe[1])}var oe,ae="function"==typeof Object.defineProperty?Object.defineProperty:null,ce=Object.defineProperty,le=Object.prototype,ye=le.toString,ve=le.__defineGetter__,pe=le.__defineSetter__,se=le.__lookupGetter__,be=le.__lookupSetter__;function we(r,n,u,f){return e(r)||c(r)?(n[f]=r,n[f+u]=0,n):0!==r&&t(r)<22250738585072014e-324?(n[f]=4503599627370496*r,n[f+u]=-52,n):(n[f]=r,n[f+u]=0,n)}oe=function(){try{return ae({},"x",{}),!0}catch(e){return!1}}()?ce:function(e,r,n){var t,u,f,i;if("object"!=typeof e||null===e||"[object Array]"===ye.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof n||null===n||"[object Array]"===ye.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((u="value"in n)&&(se.call(e,r)||be.call(e,r)?(t=e.__proto__,e.__proto__=le,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),f="get"in n,i="set"in n,u&&(f||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&ve&&ve.call(e,r,n.get),i&&pe&&pe.call(e,r,n.set),e},oe((function(e){return we(e,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:we});var de=[0,0],Ae=[0,0];function he(r,n){var t,u;return 0===n||0===r||e(r)||c(r)?r:(we(r,de,1,0),n+=de[1],n+=function(e){var r=Z(e);return(r=(2146435072&r)>>>20)-a|0}(r=de[0]),n<-1074?ie(0,r):n>1023?r<0?i:o:(n<=-1023?(n+=52,u=2220446049250313e-31):u=1,D(Ae,r),t=Ae[0],t&=2148532223,u*ue(t|=n+a<<20,Ae[1])))}var _e=1.4426950408889634,Ne=1/(1<<28);function me(r){var n;return e(r)||r===o?r:r===i?0:r>709.782712893384?o:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ne?1+r:function(e,r,n){var t,u,f,i;return he(1-(r-(t=e-r)*(f=t-(u=t*t)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-e),n)}(r-.6931471803691238*(n=f(r<0?_e*r-.5:_e*r+.5)),1.9082149292705877e-10*n,n)}function Ue(e,r){var n,t,u,f;return u=(f=e*e)*f,t=f*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(f),t+=u*u*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(f),(u=1-(n=.5*f))+(1-u-n+(f*t-e*r))}var ge=-.16666666666666632;function je(e,r){var n,t,u;return n=.00833333333332249+(u=e*e)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*e,0===r?e+t*(ge+u*n):e-(u*(.5*r-t*n)-r-t*ge)}var Ie=!0===V?0:1,Oe=new I(1),Se=new N(Oe.buffer);function Ee(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var Fe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Te=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],xe=16777216,He=5.960464477539063e-8,Ge=Ee(20),Pe=Ee(20),ke=Ee(20),Me=Ee(20);function Le(e,n,t,u,f,i,o,a,c){var l,y,v,p,s,b,w,d,A;for(p=i,A=u[t],d=t,s=0;d>0;s++)y=He*A|0,Me[s]=A-xe*y|0,A=u[d-1]+y,d-=1;if(A=he(A,f),A-=8*r(.125*A),A-=w=0|A,v=0,f>0?(w+=s=Me[t-1]>>24-f,Me[t-1]-=s<<24-f,v=Me[t-1]>>23-f):0===f?v=Me[t-1]>>23:A>=.5&&(v=2),v>0){for(w+=1,l=0,s=0;s<t;s++)d=Me[s],0===l?0!==d&&(l=1,Me[s]=16777216-d):Me[s]=16777215-d;if(f>0)switch(f){case 1:Me[t-1]&=8388607;break;case 2:Me[t-1]&=4194303}2===v&&(A=1-A,0!==l&&(A-=he(1,f)))}if(0===A){for(d=0,s=t-1;s>=i;s--)d|=Me[s];if(0===d){for(b=1;0===Me[i-b];b++);for(s=t+1;s<=t+b;s++){for(c[a+s]=Fe[o+s],y=0,d=0;d<=a;d++)y+=e[d]*c[a+(s-d)];u[s]=y}return Le(e,n,t+=b,u,f,i,o,a,c)}}if(0===A)for(t-=1,f-=24;0===Me[t];)t-=1,f-=24;else(A=he(A,-f))>=xe?(y=He*A|0,Me[t]=A-xe*y|0,f+=24,Me[t+=1]=y):Me[t]=0|A;for(y=he(1,f),s=t;s>=0;s--)u[s]=y*Me[s],y*=He;for(s=t;s>=0;s--){for(y=0,b=0;b<=p&&b<=t-s;b++)y+=Te[b]*u[s+b];ke[t-s]=y}for(y=0,s=t;s>=0;s--)y+=ke[s];for(n[0]=0===v?y:-y,y=ke[0]-y,s=1;s<=t;s++)y+=ke[s];return n[1]=0===v?y:-y,7&w}function Ve(e,r,n,t){var u,f,i,o,a,c,l;for((f=(n-3)/24|0)<0&&(f=0),o=n-24*(f+1),c=f-(i=t-1),l=i+4,a=0;a<=l;a++)Ge[a]=c<0?0:Fe[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=e[c]*Ge[i+(a-c)];Pe[a]=u}return Le(e,r,4,Pe,o,4,f,i,Ge)}var We=Math.round;function Ye(e,r,n){var t,u,f,i,o;return f=e-1.5707963267341256*(t=We(.6366197723675814*e)),i=6077100506506192e-26*t,o=r>>20|0,n[0]=f-i,o-(Z(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((u=f)-(f=u-(i=6077100506303966e-26*t))-i),n[0]=f-i,o-(Z(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((u=f)-(f=u-(i=20222662487111665e-37*t))-i),n[0]=f-i)),n[1]=f-n[0]-i,t}var qe=1.5707963267341256,ze=6077100506506192e-26,Ce=2*ze,Be=3*ze,De=4*ze,Je=[0,0,0],Ke=[0,0];function Qe(e,r){var n,t,u,f,i,o,a;if((u=2147483647&Z(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Ye(e,u,r):u<=1073928572?e>0?(a=e-qe,r[0]=a-ze,r[1]=a-r[0]-ze,1):(a=e+qe,r[0]=a+ze,r[1]=a-r[0]+ze,-1):e>0?(a=e-2*qe,r[0]=a-Ce,r[1]=a-r[0]-Ce,2):(a=e+2*qe,r[0]=a+Ce,r[1]=a-r[0]+Ce,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Ye(e,u,r):e>0?(a=e-3*qe,r[0]=a-Be,r[1]=a-r[0]-Be,3):(a=e+3*qe,r[0]=a+Be,r[1]=a-r[0]+Be,-3):1075388923===u?Ye(e,u,r):e>0?(a=e-4*qe,r[0]=a-De,r[1]=a-r[0]-De,4):(a=e+4*qe,r[0]=a+De,r[1]=a-r[0]+De,-4);if(u<1094263291)return Ye(e,u,r);if(u>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return Oe[0]=e,Se[Ie]}(e),a=ue(u-((t=(u>>20)-1046)<<20|0),n),i=0;i<2;i++)Je[i]=0|a,a=16777216*(a-Je[i]);for(Je[2]=a,f=3;0===Je[f-1];)f-=1;return o=Ve(Je,Ke,t,f),e<0?(r[0]=-Ke[0],r[1]=-Ke[1],-o):(r[0]=Ke[0],r[1]=Ke[1],o)}var Re=[0,0];function Xe(e){var r;if(r=Z(e),(r&=2147483647)<=1072243195)return r<1045430272?e:je(e,0);if(r>=2146435072)return NaN;switch(3&Qe(e,Re)){case 0:return je(Re[0],Re[1]);case 1:return Ue(Re[0],Re[1]);case 2:return-je(Re[0],Re[1]);default:return-Ue(Re[0],Re[1])}}var Ze=3.141592653589793;function $e(e){return n(e/2)}function er(e){return $e(e>0?e-1:e+1)}var rr=Math.sqrt,nr=!0===V?0:1,tr=new I(1),ur=new N(tr.buffer);function fr(e,r){return tr[0]=e,ur[nr]=r>>>0,tr[0]}function ir(e){return 0|e}var or=!0===V?1:0,ar=new I(1),cr=new N(ar.buffer);function lr(e,r){return ar[0]=e,cr[or]=r>>>0,ar[0]}var yr=1048576,vr=[1,1.5],pr=[0,.5849624872207642],sr=[0,1.350039202129749e-8],br=2147483647,wr=1048575,dr=1048576,Ar=2147483647,hr=1083179008,_r=1e300,Nr=1e-300,mr=[0,0],Ur=[0,0];function gr(r,u){var f,l,y,v,p,s,b,w,d,A,h,_,N,m;if(e(r)||e(u))return NaN;if(D(mr,u),p=mr[0],0===mr[1]){if(0===u)return 1;if(1===u)return r;if(-1===u)return 1/r;if(.5===u)return rr(r);if(-.5===u)return 1/rr(r);if(2===u)return r*r;if(3===u)return r*r*r;if(4===u)return(r*=r)*r;if(c(u))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:t(e)<1==(r===o)?0:o}(r,u)}if(D(mr,r),v=mr[0],0===mr[1]){if(0===v)return function(e,r){return r===i?o:r===o?0:r>0?er(r)?e:0:er(r)?ie(o,e):o}(r,u);if(1===r)return 1;if(-1===r&&er(u))return-1;if(c(r))return r===i?gr(-0,-u):u<0?0:o}if(r<0&&!1===n(u))return(r-r)/(r-r);if(y=t(r),f=v&Ar|0,l=p&Ar|0,b=p>>>31|0,s=(s=v>>>31|0)&&er(u)?-1:1,l>1105199104){if(l>1139802112)return function(e,r){return(2147483647&Z(e))<=1072693247?r<0?1/0:0:r>0?1/0:0}(r,u);if(f<1072693247)return 1===b?s*_r*_r:s*Nr*Nr;if(f>1072693248)return 0===b?s*_r*_r:s*Nr*Nr;h=function(e,r){var n,t,u,f,i,o;return n=(i=1.9259629911266175e-8*(u=r-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=fr(t=(f=1.4426950216293335*u)+i,0))-f),e[0]=t,e[1]=n,e}(Ur,y)}else h=function(e,r,n){var t,u,f,i,o,c,l,y,v,p,s,b,w,d,A,h,_,N,m,U,g;return N=0,n<yr&&(N-=53,n=Z(r*=9007199254740992)),N+=(n>>20)-a|0,n=1072693248|(m=1048575&n|0),m<=235662?U=0:m<767610?U=1:(U=0,N+=1,n-=yr),i=fr(u=(h=(r=lr(r,n))-(l=vr[U]))*(_=1/(r+l)),0),t=524288+(n>>1|536870912),c=lr(0,t+=U<<18),A=(f=u*u)*f*(0===(g=f)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),c=fr(c=3+(f=i*i)+(A+=(o=_*(h-i*c-i*(r-(c-l))))*(i+u)),0),w=(s=-7.028461650952758e-9*(v=fr(v=(h=i*c)+(_=o*c+(A-(c-3-f))*u),0))+.9617966939259756*(_-(v-h))+sr[U])-((b=fr(b=(p=.9617967009544373*v)+s+(y=pr[U])+(d=N),0))-d-y-p),e[0]=b,e[1]=w,e}(Ur,y,f);if(A=(u-(w=fr(u,0)))*h[0]+u*h[1],d=w*h[0],D(mr,_=A+d),N=ir(mr[0]),m=ir(mr[1]),N>=hr){if(0!=(N-hr|m))return s*_r*_r;if(A+8008566259537294e-32>_-d)return s*_r*_r}else if((N&Ar)>=1083231232){if(0!=(N-3230714880|m))return s*Nr*Nr;if(A<=_-d)return s*Nr*Nr}return _=function(e,r,n){var t,u,f,i,o,c,l,y,v,p;return v=((y=e&br|0)>>20)-a|0,l=0,y>1071644672&&(u=lr(0,((l=e+(dr>>v+1)>>>0)&~(wr>>(v=((l&br)>>20)-a|0)))>>>0),l=(l&wr|dr)>>20-v>>>0,e<0&&(l=-l),r-=u),e=ir(e=Z(c=1-((c=(f=.6931471824645996*(u=fr(u=n+r,0)))+(i=.6931471805599453*(n-(u-r))+-1.904654299957768e-9*u))*(t=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=i-(c-f))+c*o)-c))),(e+=l<<20>>>0)>>20<=0?he(c,l):lr(c,e)}(N,d,A),s*_}function jr(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=me(e),2.5066282746310007*(n=e>143.01608?(t=gr(e,.5*e-.25))*(t/n):gr(e,e-.5)/n)*r}function Ir(e,r){return r/((1+.5772156649015329*e)*e)}function Or(u){var f,a,c,l;if(n(u)&&u<0||u===i||e(u))return NaN;if(0===u)return function(e){return 0===e&&1/e===i}(u)?i:o;if(u>171.61447887182297)return o;if(u<-170.5674972726612)return 0;if((a=t(u))>33)return u>=0?jr(u):(f=0==(1&(c=r(a)))?-1:1,(l=a-c)>.5&&(l=a-(c+=1)),l=a*Xe(Ze*l),f*Ze/(t(l)*jr(a)));for(l=1;u>=3;)l*=u-=1;for(;u<0;){if(u>-1e-9)return Ir(u,l);l/=u,u+=1}for(;u<2;){if(u<1e-9)return Ir(u,l);l/=u,u+=1}return 2===u?l:l*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(u-=2)}var Sr=.6931471803691238,Er=1.9082149292705877e-10,Fr=1048575;function Tr(r){var n,t,u,f,o,c,l,y,v,p,s,b;return 0===r?i:e(r)||r<0?NaN:(o=0,(t=Z(r))<1048576&&(o-=54,t=Z(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-a|0,o+=(y=614244+(t&=Fr)&1048576|0)>>20|0,l=(r=lr(r,t|1072693248^y))-1,(Fr&2+t)<3?0===l?0===o?0:o*Sr+o*Er:(c=l*l*(.5-.3333333333333333*l),0===o?l-c:o*Sr-(c-o*Er-l)):(y=t-398458|0,v=440401-t|0,f=(s=(b=(p=l/(2+l))*p)*b)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(s),u=b*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(s),c=u+f,(y|=v)>0?(n=.5*l*l,0===o?l-(n-p*(n+c)):o*Sr-(n-(p*(n+c)+o*Er)-l)):0===o?l-p*(l-c):o*Sr-(p*(l-c)-o*Er-l))))}var xr=[0,0];function Hr(e){var r;if(r=Z(e),(r&=2147483647)<=1072243195)return r<1044381696?1:Ue(e,0);if(r>=2146435072)return NaN;switch(3&Qe(e,xr)){case 0:return Ue(xr[0],xr[1]);case 1:return-je(xr[0],xr[1]);case 2:return-Ue(xr[0],xr[1]);default:return je(xr[0],xr[1])}}function Gr(r){var n,u;return e(r)||c(r)?NaN:0===(n=t(u=r%2))||1===n?ie(0,u):n<.25?Xe(Ze*u):n<.75?ie(Hr(Ze*(n=.5-n)),u):n<1.25?(u=ie(1,u)-u,Xe(Ze*u)):n<1.75?-ie(Hr(Ze*(n-=1.5)),u):(u-=ie(2,u),Xe(Ze*u))}var Pr=1.4616321449683622,kr=1.4616321449683622,Mr=6.283185307179586,Lr=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Vr=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Wr=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290];return function u(a){var l,y,v,p,s,b,w,d,A;if(e(a))return NaN;if(1===a)return NaN;if(a>=56)return 1;if(n(a)&&(p=0|a)===a){if(!(p<0))return 0==(1&p)?Vr[p/2]:Lr[(p-3)/2];if(0==(1&(v=0|-p)))return 0;if((b=(v+1)/2|0)<=129)return-Wr[b]/(v+1)}return t(a)<1.4901161193847656e-8?-.5-.9189385332046728*a:(y=1-a,a<0?r(a/2)===a/2?0:(l=a,a=y,y=l,a>170?(l=2*Gr(.5*y)*u(a),s=function(r){var n,u,i,a,l,y,v,p,s,b,w,d,A;if(e(r)||c(r))return r;if(0===r)return o;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Tr(r);if(n){if(r>=4503599627370496)return o;if(0===(s=Gr(r)))return o;u=Tr(Ze/t(s*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(A=-Tr(r),r>=Pr-1+.27?(w=1-r,i=0):r>=Pr-1-.27?(w=r-(kr-1),i=1):(w=r,i=2)):(A=0,r>=Pr+.27?(w=2-r,i=0):r>=Pr-.27?(w=r-kr,i=1):(w=r-1,i=2)),i){case 0:y=.07721566490153287+(d=w*w)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(d),l=d*(.3224670334241136+d*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(d)),A+=(v=w*y+l)-.5*w;break;case 1:y=.48383612272381005+(b=(d=w*w)*w)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(b),l=b*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(b)-.1475877229945939,a=.06462494023913339+b*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(b),A+=(v=d*y-(-3638676997039505e-33-b*(l+w*a)))-.12148629053584961;break;case 2:y=w*(w*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(w)-.07721566490153287),l=1+w*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(w),A+=-.5*w+y/l}else if(r<8)switch(v=(w=r-(i=f(r)))*(w*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(w)-.07721566490153287),p=1+w*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(w),A=.5*w+v/p,d=1,i){case 7:d*=w+6;case 6:d*=w+5;case 5:d*=w+4;case 4:d*=w+3;case 3:A+=Tr(d*=w+2)}else r<0x400000000000000?(s=Tr(r),b=.4189385332046727+(d=1/r)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(w=d*d),A=(r-.5)*(s-1)+b):A=r*(Tr(r)-1);return n&&(A=u-A),A}(a),(s-=a*Tr(Mr))>709?l<0?i:o:l*me(s)):2*Gr(.5*y)*gr(Mr,-a)*Or(a)*u(a)):a<1?(l=0===(w=y)?.2433929443359375:((w<0?-w:w)<=1?(d=.2433929443359375+w*(w*(.055761621477604675+w*(w*(.0004515345286457964+-9332412703570615e-21*w)-.003209124988790859))-.4909247051635357),A=1+w*(w*(.04196762233099861+w*(w*(.00024978985622317937+-10185578841856403e-21*w)-.00413421406552171))-.27996033431034445)):(d=(w=1/w)*(.0004515345286457964+w*(w*(.055761621477604675+w*(.2433929443359375*w-.4909247051635357))-.003209124988790859))-9332412703570615e-21,A=w*(.00024978985622317937+w*(w*(.04196762233099861+w*(1*w-.27996033431034445))-.00413421406552171))-10185578841856403e-21),d/A),l-=1.2433929443359375,l+=y,l/=y):a<=2?(l=1/(y=-y))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(y):a<=4?(l=.6986598968505859+1/-y)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(a-2):a<=7?(l=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(a-4),1+me(l)):a<15?(l=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(a-7),1+me(l)):a<36?(l=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(a-15),1+me(l)):1+gr(2,-a))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).zeta=r();
//# sourceMappingURL=browser.js.map
