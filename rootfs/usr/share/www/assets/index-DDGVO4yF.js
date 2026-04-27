import{L as g,M as _,c as Y,i as $,a as z,k as E,d as G,a4 as F,j as N,e as O,O as L,s as R,K as I,a5 as K,a1 as U,n as q,o as J}from"./index-BhIWbVFV.js";import{x as Q,y as V,c as W,l as Z,X as ee,d as te,a as ae,e as ne,i as re}from"./index-BQ2s08M1.js";import{d as se,L as oe,z as ie,N as le,A as ce,w as X,o as ue,l as ye,D as de,s as fe}from"./index-B8y1bvW4.js";function ve(){var v=Q,i=null,t=g(0),s=V,u=g(!0),y=null,l=W,n=null;function a(e){var o,S,p,x=e.length,m,r=!1,c,f=new Array(x),d=new Array(x);for(y==null&&(n=l(c=_())),o=0;o<=x;++o){if(!(o<x&&u(m=e[o],o,e))===r)if(r=!r)S=o,n.areaStart(),n.lineStart();else{for(n.lineEnd(),n.lineStart(),p=o-1;p>=S;--p)n.point(f[p],d[p]);n.lineEnd(),n.areaEnd()}r&&(f[o]=+v(m,o,e),d[o]=+t(m,o,e),n.point(i?+i(m,o,e):f[o],s?+s(m,o,e):d[o]))}if(c)return n=null,c+""||null}function h(){return Z().defined(u).curve(l).context(y)}return a.x=function(e){return arguments.length?(v=typeof e=="function"?e:g(+e),i=null,a):v},a.x0=function(e){return arguments.length?(v=typeof e=="function"?e:g(+e),a):v},a.x1=function(e){return arguments.length?(i=e==null?null:typeof e=="function"?e:g(+e),a):i},a.y=function(e){return arguments.length?(t=typeof e=="function"?e:g(+e),s=null,a):t},a.y0=function(e){return arguments.length?(t=typeof e=="function"?e:g(+e),a):t},a.y1=function(e){return arguments.length?(s=e==null?null:typeof e=="function"?e:g(+e),a):s},a.lineX0=a.lineY0=function(){return h().x(v).y(t)},a.lineY1=function(){return h().x(v).y(s)},a.lineX1=function(){return h().x(i).y(t)},a.defined=function(e){return arguments.length?(u=typeof e=="function"?e:g(!!e),a):u},a.curve=function(e){return arguments.length?(l=e,y!=null&&(n=l(y)),a):l},a.context=function(e){return arguments.length?(e==null?y=n=null:n=l(y=e),a):y},a}const he=Object.assign(Object.assign({},ee),{color:void 0,curveType:te.MonotoneX,baseline:()=>0,opacity:1,cursor:null,minHeight1Px:!1,minHeight:void 0}),B=Y`
  label: area-component;
`,pe=$`
  :root {
    --vis-area-cursor: default;
    --vis-area-fill-opacity: 1;
    --vis-area-stroke-color: none;
    --vis-area-stroke-width: 0px;
    --vis-area-stroke-dasharray: none;
    --vis-area-stroke-opacity: 1;
    --vis-area-hover-fill-opacity: none;
    --vis-area-hover-stroke-width: none;

    /* Dark Theme */
    --vis-dark-area-stroke-color: none;
  }

  body.theme-dark ${`.${B}`} {
    --vis-area-stroke-color: var(--vis-dark-area-stroke-color);
  }

`,T=Y`
  label: area;
  cursor: var(--vis-area-cursor);
  fill-opacity: var(--vis-area-fill-opacity);
  stroke-width: var(--vis-area-stroke-width);
  stroke-dasharray: var(--vis-area-stroke-dasharray);
  stroke: var(--vis-area-stroke-color);
  stroke-opacity: var(--vis-area-stroke-opacity);

  &:hover {
    fill-opacity: var(--vis-area-hover-fill-opacity);
    stroke-width: var(--vis-area-hover-stroke-width);
  }
`,ge=Object.freeze(Object.defineProperty({__proto__:null,area:T,globalStyles:pe,root:B},Symbol.toStringTag,{value:"Module"}));class A extends ae{constructor(i){super(),this._defaultConfig=he,this.config=this._defaultConfig,this.stacked=!0,this.events={[A.selectors.area]:{}},i&&this.setConfig(i),this.stacked=Array.isArray(this.config.y)}_render(i){super._render(i);const{config:t,datamodel:{data:s}}=this,u=z(i)?i:t.duration,y=ne[t.curveType];this._areaGen=ve().x(r=>r.x).y0(r=>r.y0).y1(r=>r.y1).curve(y);const l=E(t.y)?t.y:[t.y],n=s.map((r,c)=>this.xScale(G(r,t.x,c))),a=F(s,t.baseline,l,this._prevNegative);this._prevNegative=a.map(r=>!!r.isMostlyNegative);const h=[],e=a.map(r=>r.map((c,f)=>{var d,k;const j=n[f],w=this.yScale(c[0]),P=this.yScale(c[1]),H=P>w,b=h[f]||0,M=H?w+b:w-b,C=H?P+b:P-b;let D=0;return(t.minHeight||t.minHeight1Px)&&Math.abs(C-M)<((d=t.minHeight)!==null&&d!==void 0?d:1)&&(D=((k=t.minHeight)!==null&&k!==void 0?k:1)-Math.abs(C-M),h[f]=b+D),{x:j,y0:M,y1:H?C+D:C-D}})),o=e.length-1,S=e.reverse(),p=this.g.selectAll(`.${T}`).data(S),x=p.enter().append("path").attr("class",T).attr("d",r=>this._areaGen(r)||this._emptyPath()).style("opacity",0).style("fill",(r,c)=>N(s,t.color,o-c)),m=O(x.merge(p),u).style("opacity",(r,c)=>r.some(d=>d.y0-d.y1!==0)?G(s,t.opacity,o-c):0).style("fill",(r,c)=>N(s,t.color,o-c)).style("cursor",(r,c)=>L(s,t.cursor,o-c));u?m.attrTween("d",(c,f,d)=>{const k=R(d[f]).attr("d"),j=this._areaGen(c)||this._emptyPath();return re(k,j)}):m.attr("d",r=>this._areaGen(r)||this._emptyPath()),O(p.exit(),u).style("opacity",0).remove()}getYDataExtent(i){const{config:t,datamodel:s}=this,u=E(t.y)?t.y:[t.y],y=this.xScale.domain(),l=i?I(s.data,y,t.x,!0):s.data;return K(l,t.baseline,...u)}_emptyPath(){const i=this.xScale.range(),t=this.yScale.domain(),s=this.yScale((t[0]+t[1])/2),u=s;return this._areaGen([{y0:s,y1:u,x:i[0]},{y0:s,y1:u,x:i[1]}])}}A.selectors=ge;const me={"data-vis-component":""},Se=se({__name:"index",props:{color:{},curveType:{},baseline:{},opacity:{},cursor:{},minHeight1Px:{type:Boolean},minHeight:{},x:{},y:{},id:{type:Function},xScale:{type:[Object,Function]},yScale:{type:[Object,Function]},excludeFromDomainCalculation:{type:Boolean},duration:{},events:{},attributes:{},data:{}},setup(v,{expose:i}){const t=oe(U),s=v,u=de(()=>t.data.value??s.data),y=q(s),l=fe();return ie(()=>{le(()=>{var n;l.value=new A(y.value),(n=l.value)==null||n.setData(u.value),t.update(l.value)})}),ce(()=>{var n;(n=l.value)==null||n.destroy(),t.destroy()}),X(y,(n,a)=>{var h;J(n,a)||(h=l.value)==null||h.setConfig(y.value)}),X(u,()=>{var n;(n=l.value)==null||n.setData(u.value)}),i({component:l}),(n,a)=>(ue(),ye("div",me))}});export{Se as P};
