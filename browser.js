// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r=function(e){return e!=e},n=Math.floor,t=n,u=function(e){return t(e)===e},f=function(e){return Math.abs(e)},i=Math.ceil,o=n,c=i,a=function(e){return e<0?c(e):o(e)},y=Number.NEGATIVE_INFINITY,l=Number.POSITIVE_INFINITY,v=l,s=y,p=function(e){return e===v||e===s},b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,A=w,N=function(e){return A.call(e)},h=Object.prototype.hasOwnProperty,d=function(e,r){return null!=e&&h.call(e,r)},U="function"==typeof Symbol?Symbol.toStringTag:"",m=d,I=U,g=w,F=N,S=function(e){var r,n,t;if(null==e)return g.call(e);n=e[I],r=m(e,I);try{e[I]=void 0}catch(r){return g.call(e)}return t=g.call(e),r?e[I]=n:delete e[I],t},H=b&&"symbol"==typeof Symbol.toStringTag?S:F,O=H,T="function"==typeof Uint32Array,j="function"==typeof Uint32Array?Uint32Array:null,x=function(e){return T&&e instanceof Uint32Array||"[object Uint32Array]"===O(e)},E=j,G=function(){var e,r;if("function"!=typeof E)return!1;try{r=new E(r=[1,3.14,-3.14,4294967296,4294967297]),e=x(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e},M="function"==typeof Uint32Array?Uint32Array:void 0,L=function(){throw new Error("not implemented")},W=G()?M:L,k=H,P="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,Y=function(e){return P&&e instanceof Float64Array||"[object Float64Array]"===k(e)},_=V,q=function(){var e,r;if("function"!=typeof _)return!1;try{r=new _([1,3.14,-3.14,NaN]),e=Y(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e},z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},C=q()?z:B,D=H,J="function"==typeof Uint8Array,K="function"==typeof Uint8Array?Uint8Array:null,Q=function(e){return J&&e instanceof Uint8Array||"[object Uint8Array]"===D(e)},R=K,X=function(){var e,r;if("function"!=typeof R)return!1;try{r=new R(r=[1,3.14,-3.14,256,257]),e=Q(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e},Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},ee=X()?Z:$,re=H,ne="function"==typeof Uint16Array,te="function"==typeof Uint16Array?Uint16Array:null,ue=function(e){return ne&&e instanceof Uint16Array||"[object Uint16Array]"===re(e)},fe=te,ie=function(){var e,r;if("function"!=typeof fe)return!1;try{r=new fe(r=[1,3.14,-3.14,65536,65537]),e=ue(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e},oe="function"==typeof Uint16Array?Uint16Array:void 0,ce=function(){throw new Error("not implemented")},ae={uint16:ie()?oe:ce,uint8:ee};(e=new ae.uint16(1))[0]=4660;var ye,le,ve=52===new ae.uint8(e.buffer)[0];!0===ve?(ye=1,le=0):(ye=0,le=1);var se,pe,be=W,we={HIGH:ye,LOW:le},Ae=new C(1),Ne=new be(Ae.buffer),he=we.HIGH,de=we.LOW,Ue=function(e,r){return Ae[0]=r,e[0]=Ne[he],e[1]=Ne[de],e},me=function(e,r){return 1===arguments.length?Ue([0,0],e):Ue(e,r)},Ie=me,ge=W,Fe=!0===ve?1:0,Se=new C(1),He=new ge(Se.buffer),Oe=function(e){return Se[0]=e,He[Fe]};!0===ve?(se=1,pe=0):(se=0,pe=1);var Te=W,je={HIGH:se,LOW:pe},xe=new C(1),Ee=new Te(xe.buffer),Ge=je.HIGH,Me=je.LOW,Le=function(e,r){return Ee[Ge]=e,Ee[Me]=r,xe[0]},We=Le,ke=Ie,Pe=Oe,Ve=We,Ye=[0,0],_e=function(e,r){var n,t;return ke(Ye,e),n=Ye[0],n&=2147483647,t=Pe(r),Ve(n|=t&=2147483648,Ye[1])},qe=p,ze=r,Be=f,Ce=function(e,r){return ze(r)||qe(r)?(e[0]=r,e[1]=0,e):0!==r&&Be(r)<22250738585072014e-324?(e[0]=4503599627370496*r,e[1]=-52,e):(e[0]=r,e[1]=0,e)},De=function(e,r){return 1===arguments.length?Ce([0,0],e):Ce(e,r)},Je=Oe,Ke=function(e){var r=Je(e);return(r=(2146435072&r)>>>20)-1023|0},Qe=l,Re=y,Xe=r,Ze=p,$e=_e,er=De,rr=Ke,nr=Ie,tr=We,ur=[0,0],fr=[0,0],ir=function(e,r){var n,t;return 0===r||0===e||Xe(e)||Ze(e)?e:(er(ur,e),r+=ur[1],(r+=rr(e=ur[0]))<-1074?$e(0,e):r>1023?e<0?Re:Qe:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,nr(fr,e),n=fr[0],n&=2148532223,t*tr(n|=r+1023<<20,fr[1])))},or=ir,cr=or,ar=function(e){return 0===e?.16666666666666602:.16666666666666602+e*(e*(6613756321437934e-20+e*(4.1381367970572385e-8*e-16533902205465252e-22))-.0027777777777015593)},yr=r,lr=a,vr=y,sr=l,pr=function(e,r,n){var t,u,f;return f=(t=e-r)-(u=t*t)*ar(u),cr(1-(r-t*f/(2-f)-e),n)},br=1.4426950408889634,wr=1/(1<<28),Ar=function(e){var r;return yr(e)||e===sr?e:e===vr?0:e>709.782712893384?sr:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<wr?1+e:(r=lr(e<0?br*e-.5:br*e+.5),pr(e-.6931471803691238*r,1.9082149292705877e-10*r,r))},Nr=y,hr=function(e){return 0===e&&1/e===Nr},dr=function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)},Ur=function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7},mr=function(e,r){var n,t,u,f;return u=(f=e*e)*f,t=f*dr(f),t+=u*u*Ur(f),(u=1-(n=.5*f))+(1-u-n+(f*t-e*r))},Ir=-.16666666666666632,gr=function(e,r){var n,t,u;return n=.00833333333332249+(u=e*e)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*e,0===r?e+t*(Ir+u*n):e-(u*(.5*r-t*n)-r-t*Ir)},Fr=W,Sr=!0===ve?0:1,Hr=new C(1),Or=new Fr(Hr.buffer),Tr=function(e){return Hr[0]=e,Or[Sr]},jr=function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n},xr=n,Er=or,Gr=function(e){return jr(0,e)},Mr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Lr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Wr=16777216,kr=5.960464477539063e-8,Pr=Gr(20),Vr=Gr(20),Yr=Gr(20),_r=Gr(20);function qr(e,r,n,t,u,f,i,o,c){var a,y,l,v,s,p,b,w,A;for(v=f,A=t[n],w=n,s=0;w>0;s++)y=kr*A|0,_r[s]=A-Wr*y|0,A=t[w-1]+y,w-=1;if(A=Er(A,u),A-=8*xr(.125*A),A-=b=0|A,l=0,u>0?(b+=s=_r[n-1]>>24-u,_r[n-1]-=s<<24-u,l=_r[n-1]>>23-u):0===u?l=_r[n-1]>>23:A>=.5&&(l=2),l>0){for(b+=1,a=0,s=0;s<n;s++)w=_r[s],0===a?0!==w&&(a=1,_r[s]=16777216-w):_r[s]=16777215-w;if(u>0)switch(u){case 1:_r[n-1]&=8388607;break;case 2:_r[n-1]&=4194303}2===l&&(A=1-A,0!==a&&(A-=Er(1,u)))}if(0===A){for(w=0,s=n-1;s>=f;s--)w|=_r[s];if(0===w){for(p=1;0===_r[f-p];p++);for(s=n+1;s<=n+p;s++){for(c[o+s]=Mr[i+s],y=0,w=0;w<=o;w++)y+=e[w]*c[o+(s-w)];t[s]=y}return qr(e,r,n+=p,t,u,f,i,o,c)}}if(0===A)for(n-=1,u-=24;0===_r[n];)n-=1,u-=24;else(A=Er(A,-u))>=Wr?(y=kr*A|0,_r[n]=A-Wr*y|0,u+=24,_r[n+=1]=y):_r[n]=0|A;for(y=Er(1,u),s=n;s>=0;s--)t[s]=y*_r[s],y*=kr;for(s=n;s>=0;s--){for(y=0,p=0;p<=v&&p<=n-s;p++)y+=Lr[p]*t[s+p];Yr[n-s]=y}for(y=0,s=n;s>=0;s--)y+=Yr[s];for(r[0]=0===l?y:-y,y=Yr[0]-y,s=1;s<=n;s++)y+=Yr[s];return r[1]=0===l?y:-y,7&b}var zr=function(e,r,n,t){var u,f,i,o,c,a,y;for((f=(n-3)/24|0)<0&&(f=0),o=n-24*(f+1),a=f-(i=t-1),y=i+4,c=0;c<=y;c++)Pr[c]=a<0?0:Mr[a],a+=1;for(c=0;c<=4;c++){for(u=0,a=0;a<=i;a++)u+=e[a]*Pr[i+(c-a)];Vr[c]=u}return qr(e,r,4,Vr,o,4,f,i,Pr)},Br=Math.round,Cr=Oe,Dr=Oe,Jr=Tr,Kr=We,Qr=zr,Rr=function(e,r,n){var t,u,f,i,o;return f=e-1.5707963267341256*(t=Br(.6366197723675814*e)),i=6077100506506192e-26*t,o=r>>20|0,n[0]=f-i,o-(Cr(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((u=f)-(f=u-(i=6077100506303966e-26*t))-i),n[0]=f-i,o-(Cr(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((u=f)-(f=u-(i=20222662487111665e-37*t))-i),n[0]=f-i)),n[1]=f-n[0]-i,t},Xr=1.5707963267341256,Zr=6077100506506192e-26,$r=2*Zr,en=3*Zr,rn=4*Zr,nn=[0,0,0],tn=[0,0],un=function(e,r){var n,t,u,f,i,o,c;if((u=2147483647&Dr(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Rr(e,u,r):u<=1073928572?e>0?(c=e-Xr,r[0]=c-Zr,r[1]=c-r[0]-Zr,1):(c=e+Xr,r[0]=c+Zr,r[1]=c-r[0]+Zr,-1):e>0?(c=e-2*Xr,r[0]=c-$r,r[1]=c-r[0]-$r,2):(c=e+2*Xr,r[0]=c+$r,r[1]=c-r[0]+$r,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Rr(e,u,r):e>0?(c=e-3*Xr,r[0]=c-en,r[1]=c-r[0]-en,3):(c=e+3*Xr,r[0]=c+en,r[1]=c-r[0]+en,-3):1075388923===u?Rr(e,u,r):e>0?(c=e-4*Xr,r[0]=c-rn,r[1]=c-r[0]-rn,4):(c=e+4*Xr,r[0]=c+rn,r[1]=c-r[0]+rn,-4);if(u<1094263291)return Rr(e,u,r);if(u>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=Jr(e),c=Kr(u-((t=(u>>20)-1046)<<20|0),n),i=0;i<2;i++)nn[i]=0|c,c=16777216*(c-nn[i]);for(nn[2]=c,f=3;0===nn[f-1];)f-=1;return o=Qr(nn,tn,t,f),e<0?(r[0]=-tn[0],r[1]=-tn[1],-o):(r[0]=tn[0],r[1]=tn[1],o)},fn=un,on=Oe,cn=mr,an=gr,yn=fn,ln=[0,0],vn=function(e){var r;if(r=on(e),(r&=2147483647)<=1072243195)return r<1045430272?e:an(e,0);if(r>=2146435072)return NaN;switch(3&yn(e,ln)){case 0:return an(ln[0],ln[1]);case 1:return cn(ln[0],ln[1]);case 2:return-an(ln[0],ln[1]);default:return-cn(ln[0],ln[1])}},sn=3.141592653589793,pn=u,bn=function(e){return pn(e/2)},wn=function(e){return bn(e>0?e-1:e+1)},An=Math.sqrt,Nn=W,hn=!0===ve?0:1,dn=new C(1),Un=new Nn(dn.buffer),mn=function(e,r){return dn[0]=e,Un[hn]=r>>>0,dn[0]},In=mn,gn=function(e){return 0|e},Fn=wn,Sn=_e,Hn=y,On=l,Tn=function(e,r){return r===Hn?On:r===On?0:r>0?Fn(r)?e:0:Fn(r)?Sn(On,e):On},jn=Oe,xn=function(e,r){return(2147483647&jn(e))<=1072693247?r<0?1/0:0:r>0?1/0:0},En=f,Gn=l,Mn=function(e,r){return-1===e?(e-e)/(e-e):1===e?1:En(e)<1==(r===Gn)?0:Gn},Ln=W,Wn=!0===ve?1:0,kn=new C(1),Pn=new Ln(kn.buffer),Vn=function(e,r){return kn[0]=e,Pn[Wn]=r>>>0,kn[0]},Yn=Oe,_n=In,qn=Vn,zn=function(e){return 0===e?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+.20697501780033842*e))))},Bn=1048576,Cn=[1,1.5],Dn=[0,.5849624872207642],Jn=[0,1.350039202129749e-8],Kn=In,Qn=function(e){return 0===e?.5:.5+e*(.25*e-.3333333333333333)},Rn=Oe,Xn=Vn,Zn=In,$n=gn,et=or,rt=function(e){return 0===e?.16666666666666602:.16666666666666602+e*(e*(6613756321437934e-20+e*(4.1381367970572385e-8*e-16533902205465252e-22))-.0027777777777015593)},nt=2147483647,tt=1048575,ut=1048576,ft=r,it=wn,ot=p,ct=u,at=An,yt=f,lt=Ie,vt=In,st=gn,pt=y,bt=l,wt=Tn,At=xn,Nt=Mn,ht=function(e,r,n){var t,u,f,i,o,c,a,y,l,v,s,p,b,w,A,N,h,d,U,m;return d=0,n<Bn&&(d-=53,n=Yn(r*=9007199254740992)),d+=(n>>20)-1023|0,n=1072693248|(U=1048575&n|0),U<=235662?m=0:U<767610?m=1:(m=0,d+=1,n-=Bn),t=524288+(n>>1|536870912),o=(h=1/((r=qn(r,n))+(a=Cn[m])))*((N=r-a)-(i=_n(u=N*h,0))*(c=qn(0,t+=m<<18))-i*(r-(c-a))),A=(f=u*u)*f*zn(f),c=_n(c=3+(f=i*i)+(A+=o*(i+u)),0),b=(s=-7.028461650952758e-9*(l=_n(l=(N=i*c)+(h=o*c+(A-(c-3-f))*u),0))+.9617966939259756*(h-(l-N))+Jn[m])-((p=_n(p=(v=.9617967009544373*l)+s+(y=Dn[m])+(w=d),0))-w-y-v),e[0]=p,e[1]=b,e},dt=function(e,r){var n,t,u,f,i;return n=(i=1.9259629911266175e-8*(u=r-1)-u*u*Qn(u)*1.4426950408889634)-((t=Kn(t=(f=1.4426950216293335*u)+i,0))-f),e[0]=t,e[1]=n,e},Ut=function(e,r,n){var t,u,f,i,o,c,a,y,l;return l=((y=e&nt|0)>>20)-1023|0,a=0,y>1071644672&&(u=Xn(0,((a=e+(ut>>l+1)>>>0)&~(tt>>(l=((a&nt)>>20)-1023|0)))>>>0),a=(a&tt|ut)>>20-l>>>0,e<0&&(a=-a),r-=u),o=(i=.6931471805599453*(n-((u=Zn(u=n+r,0))-r))+-1.904654299957768e-9*u)-((c=(f=.6931471824645996*u)+i)-f),t=c-(u=c*c)*rt(u),e=Rn(c=1-(c*t/(t-2)-(o+c*o)-c)),e=$n(e),c=(e+=a<<20>>>0)>>20<=0?et(c,a):Xn(c,e)},mt=2147483647,It=1083179008,gt=1e300,Ft=1e-300,St=[0,0],Ht=[0,0],Ot=function e(r,n){var t,u,f,i,o,c,a,y,l,v,s,p,b,w;if(ft(r)||ft(n))return NaN;if(lt(St,n),o=St[0],0===St[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return at(r);if(-.5===n)return 1/at(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(ot(n))return Nt(r,n)}if(lt(St,r),i=St[0],0===St[1]){if(0===i)return wt(r,n);if(1===r)return 1;if(-1===r&&it(n))return-1;if(ot(r))return r===pt?e(-0,-n):n<0?0:bt}if(r<0&&!1===ct(n))return(r-r)/(r-r);if(f=yt(r),t=i&mt|0,u=o&mt|0,a=o>>>31|0,c=(c=i>>>31|0)&&it(n)?-1:1,u>1105199104){if(u>1139802112)return At(r,n);if(t<1072693247)return 1===a?c*gt*gt:c*Ft*Ft;if(t>1072693248)return 0===a?c*gt*gt:c*Ft*Ft;s=dt(Ht,f)}else s=ht(Ht,f,t);if(v=(n-(y=vt(n,0)))*s[0]+n*s[1],l=y*s[0],lt(St,p=v+l),b=st(St[0]),w=st(St[1]),b>=It){if(0!=(b-It|w))return c*gt*gt;if(v+8008566259537294e-32>p-l)return c*gt*gt}else if((b&mt)>=1083231232){if(0!=(b-3230714880|w))return c*Ft*Ft;if(v<=p-l)return c*Ft*Ft}return c*(p=Ut(b,l,v))},Tt=Ot,jt=Tt,xt=Ar,Et=function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))},Gt=r,Mt=u,Lt=hr,Wt=f,kt=n,Pt=vn,Vt=l,Yt=y,_t=sn,qt=function(e){var r,n,t;return r=1+(r=1/e)*Et(r),n=xt(e),2.5066282746310007*(n=e>143.01608?(t=jt(e,.5*e-.25))*(t/n):jt(e,e-.5)/n)*r},zt=function(e,r){return r/((1+.5772156649015329*e)*e)},Bt=function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)},Ct=function(e){var r,n,t,u;if(Mt(e)&&e<0||e===Yt||Gt(e))return NaN;if(0===e)return Lt(e)?Yt:Vt;if(e>171.61447887182297)return Vt;if(e<-170.5674972726612)return 0;if((n=Wt(e))>33)return e>=0?qt(e):(r=0==(1&(t=kt(n)))?-1:1,(u=n-t)>.5&&(u=n-(t+=1)),u=n*Pt(_t*u),r*_t/(Wt(u)*qt(n)));for(u=1;e>=3;)u*=e-=1;for(;e<0;){if(e>-1e-9)return zt(e,u);u/=e,e+=1}for(;e<2;){if(e<1e-9)return zt(e,u);u/=e,e+=1}return 2===e?u:u*Bt(e-=2)},Dt=Oe,Jt=Vn,Kt=r,Qt=y,Rt=function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)},Xt=function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))},Zt=.6931471803691238,$t=1.9082149292705877e-10,eu=1048575,ru=function(e){var r,n,t,u,f,i,o,c,a,y,l;return 0===e?Qt:Kt(e)||e<0?NaN:(u=0,(n=Dt(e))<1048576&&(u-=54,n=Dt(e*=0x40000000000000)),n>=2146435072?e+e:(u+=(n>>20)-1023|0,u+=(o=614244+(n&=eu)&1048576|0)>>20|0,i=(e=Jt(e,n|1072693248^o))-1,(eu&2+n)<3?0===i?0===u?0:u*Zt+u*$t:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*Zt-(f-u*$t-i)):(o=n-398458|0,c=440401-n|0,t=(y=(l=(a=i/(2+i))*a)*l)*Rt(y),f=l*Xt(y)+t,(o|=c)>0?(r=.5*i*i,0===u?i-(r-a*(r+f)):u*Zt-(r-(a*(r+f)+u*$t)-i)):0===u?i-a*(i-f):u*Zt-(a*(i-f)-u*$t-i))))},nu=Oe,tu=mr,uu=gr,fu=fn,iu=[0,0],ou=r,cu=p,au=function(e){var r;if(r=nu(e),(r&=2147483647)<=1072243195)return r<1044381696?1:tu(e,0);if(r>=2146435072)return NaN;switch(3&fu(e,iu)){case 0:return tu(iu[0],iu[1]);case 1:return-uu(iu[0],iu[1]);case 2:return-tu(iu[0],iu[1]);default:return uu(iu[0],iu[1])}},yu=vn,lu=f,vu=_e,su=sn,pu=function(e){var r,n;return ou(e)||cu(e)?NaN:0===(r=lu(n=e%2))||1===r?vu(0,n):r<.25?yu(su*n):r<.75?vu(au(su*(r=.5-r)),n):r<1.25?(n=vu(1,n)-n,yu(su*n)):r<1.75?-vu(au(su*(r-=1.5)),n):(n-=vu(2,n),yu(su*n))},bu=r,wu=p,Au=f,Nu=ru,hu=a,du=pu,Uu=l,mu=function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))},Iu=function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))},gu=function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))},Fu=function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))},Su=function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965},Hu=function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)},Ou=function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144},Tu=function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))},ju=function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))},xu=function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)},Eu=1.4616321449683622,Gu=1.4616321449683622,Mu=function(e){var r,n,t,u,f,i,o,c;if(bu(e)||wu(e))return e;if(0===e)return Uu;if(e<0?(r=!0,e=-e):r=!1,e<8470329472543003e-37)return-Nu(e);if(r){if(e>=4503599627370496)return Uu;if(0===(u=du(e)))return Uu;n=Nu(3.141592653589793/Au(u*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(c=-Nu(e),e>=Eu-1+.27?(i=1-e,t=0):e>=Eu-1-.27?(i=e-(Gu-1),t=1):(i=e,t=2)):(c=0,e>=Eu+.27?(i=2-e,t=0):e>=Eu-.27?(i=e-Gu,t=1):(i=e-1,t=2)),t){case 0:c+=i*(.07721566490153287+(o=i*i)*mu(o))+o*(.3224670334241136+o*Iu(o))-.5*i;break;case 1:c+=(o=i*i)*(.48383612272381005+(f=o*i)*Su(f))-(-3638676997039505e-33-f*(f*Hu(f)-.1475877229945939+i*(.06462494023913339+f*Ou(f))))-.12148629053584961;break;case 2:c+=-.5*i+i*(i*Tu(i)-.07721566490153287)/(1+i*ju(i))}else if(e<8)switch(c=.5*(i=e-(t=hu(e)))+i*(i*Fu(i)-.07721566490153287)/(1+i*gu(i)),o=1,t){case 7:o*=i+6;case 6:o*=i+5;case 5:o*=i+4;case 4:o*=i+3;case 3:c+=Nu(o*=i+2)}else c=e<0x400000000000000?(e-.5)*((u=Nu(e))-1)+(f=.4189385332046727+(o=1/e)*xu(i=o*o)):e*(Nu(e)-1);return r&&(c=n-c),c},Lu=6.283185307179586,Wu=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],ku=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Pu=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290];return function e(t){var i,o,c,a,v,s,p,b,w;if(r(t))return NaN;if(1===t)return NaN;if(t>=56)return 1;if(u(t)&&(a=0|t)===t){if(!(a<0))return 0==(1&a)?ku[a/2]:Wu[(a-3)/2];if(0==(1&(c=0|-a)))return 0;if((s=(c+1)/2|0)<=129)return-Pu[s]/(c+1)}return f(t)<1.4901161193847656e-8?-.5-.9189385332046728*t:(o=1-t,t<0?n(t/2)===t/2?0:(i=t,t=o,o=i,t>170?(i=2*pu(.5*o)*e(t),v=Mu(t),(v-=t*ru(Lu))>709?i<0?y:l:i*Ar(v)):2*pu(.5*o)*Tt(Lu,-t)*Ct(t)*e(t)):t<1?(i=0===(p=o)?.2433929443359375:((p<0?-p:p)<=1?(b=.2433929443359375+p*(p*(.055761621477604675+p*(p*(.0004515345286457964+-9332412703570615e-21*p)-.003209124988790859))-.4909247051635357),w=1+p*(p*(.04196762233099861+p*(p*(.00024978985622317937+-10185578841856403e-21*p)-.00413421406552171))-.27996033431034445)):(b=(p=1/p)*(.0004515345286457964+p*(p*(.055761621477604675+p*(.2433929443359375*p-.4909247051635357))-.003209124988790859))-9332412703570615e-21,w=p*(.00024978985622317937+p*(p*(.04196762233099861+p*(1*p-.27996033431034445))-.00413421406552171))-10185578841856403e-21),b/w),i-=1.2433929443359375,i+=o,i/=o):t<=2?(i=1/(o=-o))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(o):t<=4?(i=.6986598968505859+1/-o)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(t-2):t<=7?(i=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(t-4),1+Ar(i)):t<15?(i=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(t-7),1+Ar(i)):t<36?(i=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(t-15),1+Ar(i)):1+Tt(2,-t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).zeta=r();
//# sourceMappingURL=browser.js.map
