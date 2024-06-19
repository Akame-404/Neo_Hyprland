(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[98072],{71550:(e,r,t)=>{"use strict";var s=t(82109),o=t(317854),n=t(447045),i=t(919781),a=TypeError,l=Object.defineProperty,p=o.self!==o;try{if(i){var c=Object.getOwnPropertyDescriptor(o,"self");!p&&c&&c.get&&c.enumerable||n(o,"self",{get:function(){return o},set:function(e){if(this!==o)throw a("Illegal invocation");l(o,"self",{value:e,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else s({global:!0,simple:!0,forced:p},{self:o})}catch(h){}},722257:(e,r,t)=>{const s=Symbol("SemVer ANY");class o{static get ANY(){return s}constructor(e,r){if(r=n(r),e instanceof o){if(e.loose===!!r.loose)return e;e=e.value}p("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===s?this.value="":this.value=this.operator+this.semver.version,p("comp",this)}parse(e){const r=this.options.loose?i[a.COMPARATORLOOSE]:i[a.COMPARATOR],t=e.match(r);if(!t)throw new TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==t[1]?t[1]:"","="===this.operator&&(this.operator=""),t[2]?this.semver=new c(t[2],this.options.loose):this.semver=s}toString(){return this.value}test(e){if(p("Comparator.test",e,this.options.loose),this.semver===s||e===s)return!0;if("string"==typeof e)try{e=new c(e,this.options)}catch(r){return!1}return l(e,this.operator,this.semver,this.options)}intersects(e,r){if(!(e instanceof o))throw new TypeError("a Comparator is required");if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),""===this.operator)return""===this.value||new h(e.value,r).test(this.value);if(""===e.operator)return""===e.value||new h(this.value,r).test(e.semver);const t=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),s=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),n=this.semver.version===e.semver.version,i=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=l(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),p=l(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return t||s||n&&i||a||p}}e.exports=o;const n=t(912893),{re:i,t:a}=t(355765),l=t(7539),p=t(74225),c=t(126376),h=t(966902)},966902:(e,r,t)=>{class s{constructor(e,r){if(r=n(r),e instanceof s)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new s(e.raw,r);if(e instanceof i)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${e}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter((e=>!$(e[0]))),0===this.set.length)this.set=[e];else if(this.set.length>1)for(const r of this.set)if(1===r.length&&m(r[0])){this.set=[r];break}}this.format()}format(){return this.range=this.set.map((e=>e.join(" ").trim())).join("||").trim(),this.range}toString(){return this.range}parseRange(e){e=e.trim();const r=`parseRange:${Object.keys(this.options).join(",")}:${e}`,t=o.get(r);if(t)return t;const s=this.options.loose,n=s?p[c.HYPHENRANGELOOSE]:p[c.HYPHENRANGE];e=e.replace(n,w(this.options.includePrerelease)),a("hyphen replace",e),e=e.replace(p[c.COMPARATORTRIM],h),a("comparator trim",e,p[c.COMPARATORTRIM]),e=(e=(e=e.replace(p[c.TILDETRIM],E)).replace(p[c.CARETTRIM],u)).split(/\s+/).join(" ");const l=s?p[c.COMPARATORLOOSE]:p[c.COMPARATOR],m=e.split(" ").map((e=>I(e,this.options))).join(" ").split(/\s+/).map((e=>S(e,this.options))).filter(this.options.loose?e=>!!e.match(l):()=>!0).map((e=>new i(e,this.options))),f=(m.length,new Map);for(const o of m){if($(o))return[o];f.set(o.value,o)}f.size>1&&f.has("")&&f.delete("");const R=[...f.values()];return o.set(r,R),R}intersects(e,r){if(!(e instanceof s))throw new TypeError("a Range is required");return this.set.some((t=>f(t,r)&&e.set.some((e=>f(e,r)&&t.every((t=>e.every((e=>t.intersects(e,r)))))))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new l(e,this.options)}catch(r){return!1}for(let t=0;t<this.set.length;t++)if(d(this.set[t],e,this.options))return!0;return!1}}e.exports=s;const o=new(t(39593))({max:1e3}),n=t(912893),i=t(722257),a=t(74225),l=t(126376),{re:p,t:c,comparatorTrimReplace:h,tildeTrimReplace:E,caretTrimReplace:u}=t(355765),$=e=>"<0.0.0-0"===e.value,m=e=>""===e.value,f=(e,r)=>{let t=!0;const s=e.slice();let o=s.pop();for(;t&&s.length;)t=s.every((e=>o.intersects(e,r))),o=s.pop();return t},I=(e,r)=>(a("comp",e,r),e=L(e,r),a("caret",e),e=N(e,r),a("tildes",e),e=T(e,r),a("xrange",e),e=g(e,r),a("stars",e),e),R=e=>!e||"x"===e.toLowerCase()||"*"===e,N=(e,r)=>e.trim().split(/\s+/).map((e=>O(e,r))).join(" "),O=(e,r)=>{const t=r.loose?p[c.TILDELOOSE]:p[c.TILDE];return e.replace(t,((r,t,s,o,n)=>{let i;return a("tilde",e,r,t,s,o,n),R(t)?i="":R(s)?i=`>=${t}.0.0 <${+t+1}.0.0-0`:R(o)?i=`>=${t}.${s}.0 <${t}.${+s+1}.0-0`:n?(a("replaceTilde pr",n),i=`>=${t}.${s}.${o}-${n} <${t}.${+s+1}.0-0`):i=`>=${t}.${s}.${o} <${t}.${+s+1}.0-0`,a("tilde return",i),i}))},L=(e,r)=>e.trim().split(/\s+/).map((e=>v(e,r))).join(" "),v=(e,r)=>{a("caret",e,r);const t=r.loose?p[c.CARETLOOSE]:p[c.CARET],s=r.includePrerelease?"-0":"";return e.replace(t,((r,t,o,n,i)=>{let l;return a("caret",e,r,t,o,n,i),R(t)?l="":R(o)?l=`>=${t}.0.0${s} <${+t+1}.0.0-0`:R(n)?l="0"===t?`>=${t}.${o}.0${s} <${t}.${+o+1}.0-0`:`>=${t}.${o}.0${s} <${+t+1}.0.0-0`:i?(a("replaceCaret pr",i),l="0"===t?"0"===o?`>=${t}.${o}.${n}-${i} <${t}.${o}.${+n+1}-0`:`>=${t}.${o}.${n}-${i} <${t}.${+o+1}.0-0`:`>=${t}.${o}.${n}-${i} <${+t+1}.0.0-0`):(a("no pr"),l="0"===t?"0"===o?`>=${t}.${o}.${n}${s} <${t}.${o}.${+n+1}-0`:`>=${t}.${o}.${n}${s} <${t}.${+o+1}.0-0`:`>=${t}.${o}.${n} <${+t+1}.0.0-0`),a("caret return",l),l}))},T=(e,r)=>(a("replaceXRanges",e,r),e.split(/\s+/).map((e=>A(e,r))).join(" ")),A=(e,r)=>{e=e.trim();const t=r.loose?p[c.XRANGELOOSE]:p[c.XRANGE];return e.replace(t,((t,s,o,n,i,l)=>{a("xRange",e,t,s,o,n,i,l);const p=R(o),c=p||R(n),h=c||R(i),E=h;return"="===s&&E&&(s=""),l=r.includePrerelease?"-0":"",p?t=">"===s||"<"===s?"<0.0.0-0":"*":s&&E?(c&&(n=0),i=0,">"===s?(s=">=",c?(o=+o+1,n=0,i=0):(n=+n+1,i=0)):"<="===s&&(s="<",c?o=+o+1:n=+n+1),"<"===s&&(l="-0"),t=`${s+o}.${n}.${i}${l}`):c?t=`>=${o}.0.0${l} <${+o+1}.0.0-0`:h&&(t=`>=${o}.${n}.0${l} <${o}.${+n+1}.0-0`),a("xRange return",t),t}))},g=(e,r)=>(a("replaceStars",e,r),e.trim().replace(p[c.STAR],"")),S=(e,r)=>(a("replaceGTE0",e,r),e.trim().replace(p[r.includePrerelease?c.GTE0PRE:c.GTE0],"")),w=e=>(r,t,s,o,n,i,a,l,p,c,h,E,u)=>`${t=R(s)?"":R(o)?`>=${s}.0.0${e?"-0":""}`:R(n)?`>=${s}.${o}.0${e?"-0":""}`:i?`>=${t}`:`>=${t}${e?"-0":""}`} ${l=R(p)?"":R(c)?`<${+p+1}.0.0-0`:R(h)?`<${p}.${+c+1}.0-0`:E?`<=${p}.${c}.${h}-${E}`:e?`<${p}.${c}.${+h+1}-0`:`<=${l}`}`.trim(),d=(e,r,t)=>{for(let s=0;s<e.length;s++)if(!e[s].test(r))return!1;if(r.prerelease.length&&!t.includePrerelease){for(let t=0;t<e.length;t++)if(a(e[t].semver),e[t].semver!==i.ANY&&e[t].semver.prerelease.length>0){const s=e[t].semver;if(s.major===r.major&&s.minor===r.minor&&s.patch===r.patch)return!0}return!1}return!0}},126376:(e,r,t)=>{const s=t(74225),{MAX_LENGTH:o,MAX_SAFE_INTEGER:n}=t(983295),{re:i,t:a}=t(355765),l=t(912893),{compareIdentifiers:p}=t(86742);class c{constructor(e,r){if(r=l(r),e instanceof c){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid Version: ${e}`);if(e.length>o)throw new TypeError(`version is longer than ${o} characters`);s("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const t=e.trim().match(r.loose?i[a.LOOSE]:i[a.FULL]);if(!t)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const r=+e;if(r>=0&&r<n)return r}return e})):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(s("SemVer.compare",this.version,this.options,e),!(e instanceof c)){if("string"==typeof e&&e===this.version)return 0;e=new c(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof c||(e=new c(e,this.options)),p(this.major,e.major)||p(this.minor,e.minor)||p(this.patch,e.patch)}comparePre(e){if(e instanceof c||(e=new c(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const t=this.prerelease[r],o=e.prerelease[r];if(s("prerelease compare",r,t,o),void 0===t&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===t)return-1;if(t!==o)return p(t,o)}while(++r)}compareBuild(e){e instanceof c||(e=new c(e,this.options));let r=0;do{const t=this.build[r],o=e.build[r];if(s("prerelease compare",r,t,o),void 0===t&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===t)return-1;if(t!==o)return p(t,o)}while(++r)}inc(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}}e.exports=c},713507:(e,r,t)=>{const s=t(833959);e.exports=(e,r)=>{const t=s(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null}},7539:(e,r,t)=>{const s=t(758718),o=t(881194),n=t(471312),i=t(625903),a=t(821544),l=t(412056);e.exports=(e,r,t,p)=>{switch(r){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e===t;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e!==t;case"":case"=":case"==":return s(e,t,p);case"!=":return o(e,t,p);case">":return n(e,t,p);case">=":return i(e,t,p);case"<":return a(e,t,p);case"<=":return l(e,t,p);default:throw new TypeError(`Invalid operator: ${r}`)}}},399038:(e,r,t)=>{const s=t(126376),o=t(833959),{re:n,t:i}=t(355765);e.exports=(e,r)=>{if(e instanceof s)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let t=null;if((r=r||{}).rtl){let r;for(;(r=n[i.COERCERTL].exec(e))&&(!t||t.index+t[0].length!==e.length);)t&&r.index+r[0].length===t.index+t[0].length||(t=r),n[i.COERCERTL].lastIndex=r.index+r[1].length+r[2].length;n[i.COERCERTL].lastIndex=-1}else t=e.match(n[i.COERCE]);return null===t?null:o(`${t[2]}.${t[3]||"0"}.${t[4]||"0"}`,r)}},888880:(e,r,t)=>{const s=t(126376);e.exports=(e,r,t)=>{const o=new s(e,t),n=new s(r,t);return o.compare(n)||o.compareBuild(n)}},327880:(e,r,t)=>{const s=t(346269);e.exports=(e,r)=>s(e,r,!0)},346269:(e,r,t)=>{const s=t(126376);e.exports=(e,r,t)=>new s(e,t).compare(new s(r,t))},62378:(e,r,t)=>{const s=t(833959),o=t(758718);e.exports=(e,r)=>{if(o(e,r))return null;{const t=s(e),o=s(r),n=t.prerelease.length||o.prerelease.length,i=n?"pre":"",a=n?"prerelease":"";for(const e in t)if(("major"===e||"minor"===e||"patch"===e)&&t[e]!==o[e])return i+e;return a}}},758718:(e,r,t)=>{const s=t(346269);e.exports=(e,r,t)=>0===s(e,r,t)},471312:(e,r,t)=>{const s=t(346269);e.exports=(e,r,t)=>s(e,r,t)>0},625903:(e,r,t)=>{const s=t(346269);e.exports=(e,r,t)=>s(e,r,t)>=0},320253:(e,r,t)=>{const s=t(126376);e.exports=(e,r,t,o)=>{"string"==typeof t&&(o=t,t=void 0);try{return new s(e,t).inc(r,o).version}catch(n){return null}}},821544:(e,r,t)=>{const s=t(346269);e.exports=(e,r,t)=>s(e,r,t)<0},412056:(e,r,t)=>{const s=t(346269);e.exports=(e,r,t)=>s(e,r,t)<=0},938679:(e,r,t)=>{const s=t(126376);e.exports=(e,r)=>new s(e,r).major},887789:(e,r,t)=>{const s=t(126376);e.exports=(e,r)=>new s(e,r).minor},881194:(e,r,t)=>{const s=t(346269);e.exports=(e,r,t)=>0!==s(e,r,t)},833959:(e,r,t)=>{const{MAX_LENGTH:s}=t(983295),{re:o,t:n}=t(355765),i=t(126376),a=t(912893);e.exports=(e,r)=>{if(r=a(r),e instanceof i)return e;if("string"!=typeof e)return null;if(e.length>s)return null;if(!(r.loose?o[n.LOOSE]:o[n.FULL]).test(e))return null;try{return new i(e,r)}catch(t){return null}}},852358:(e,r,t)=>{const s=t(126376);e.exports=(e,r)=>new s(e,r).patch},657559:(e,r,t)=>{const s=t(833959);e.exports=(e,r)=>{const t=s(e,r);return t&&t.prerelease.length?t.prerelease:null}},579795:(e,r,t)=>{const s=t(346269);e.exports=(e,r,t)=>s(r,e,t)},763657:(e,r,t)=>{const s=t(888880);e.exports=(e,r)=>e.sort(((e,t)=>s(t,e,r)))},745712:(e,r,t)=>{const s=t(966902);e.exports=(e,r,t)=>{try{r=new s(r,t)}catch(o){return!1}return r.test(e)}},721100:(e,r,t)=>{const s=t(888880);e.exports=(e,r)=>e.sort(((e,t)=>s(e,t,r)))},476397:(e,r,t)=>{const s=t(833959);e.exports=(e,r)=>{const t=s(e,r);return t?t.version:null}},481249:(e,r,t)=>{const s=t(355765);e.exports={re:s.re,src:s.src,tokens:s.t,SEMVER_SPEC_VERSION:t(983295).SEMVER_SPEC_VERSION,SemVer:t(126376),compareIdentifiers:t(86742).compareIdentifiers,rcompareIdentifiers:t(86742).rcompareIdentifiers,parse:t(833959),valid:t(476397),clean:t(713507),inc:t(320253),diff:t(62378),major:t(938679),minor:t(887789),patch:t(852358),prerelease:t(657559),compare:t(346269),rcompare:t(579795),compareLoose:t(327880),compareBuild:t(888880),sort:t(721100),rsort:t(763657),gt:t(471312),lt:t(821544),eq:t(758718),neq:t(881194),gte:t(625903),lte:t(412056),cmp:t(7539),coerce:t(399038),Comparator:t(722257),Range:t(966902),satisfies:t(745712),toComparators:t(551042),maxSatisfying:t(85775),minSatisfying:t(771657),minVersion:t(995316),validRange:t(889042),outside:t(106826),gtr:t(897606),ltr:t(350032),intersects:t(182937),simplifyRange:t(617908),subset:t(222691)}},983295:e=>{const r=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:r,MAX_SAFE_COMPONENT_LENGTH:16}},74225:e=>{const r=("object"==typeof process&&process.env,()=>{});e.exports=r},86742:e=>{const r=/^[0-9]+$/,t=(e,t)=>{const s=r.test(e),o=r.test(t);return s&&o&&(e=+e,t=+t),e===t?0:s&&!o?-1:o&&!s?1:e<t?-1:1};e.exports={compareIdentifiers:t,rcompareIdentifiers:(e,r)=>t(r,e)}},912893:e=>{const r=["includePrerelease","loose","rtl"];e.exports=e=>e?"object"!=typeof e?{loose:!0}:r.filter((r=>e[r])).reduce(((e,r)=>(e[r]=!0,e)),{}):{}},355765:(e,r,t)=>{const{MAX_SAFE_COMPONENT_LENGTH:s}=t(983295),o=t(74225),n=(r=e.exports={}).re=[],i=r.src=[],a=r.t={};let l=0;const p=(e,r,t)=>{const s=l++;o(s,r),a[e]=s,i[s]=r,n[s]=new RegExp(r,t?"g":void 0)};p("NUMERICIDENTIFIER","0|[1-9]\\d*"),p("NUMERICIDENTIFIERLOOSE","[0-9]+"),p("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),p("MAINVERSION",`(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})`),p("MAINVERSIONLOOSE",`(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})`),p("PRERELEASEIDENTIFIER",`(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`),p("PRERELEASEIDENTIFIERLOOSE",`(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`),p("PRERELEASE",`(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${i[a.PRERELEASEIDENTIFIER]})*))`),p("PRERELEASELOOSE",`(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[a.PRERELEASEIDENTIFIERLOOSE]})*))`),p("BUILDIDENTIFIER","[0-9A-Za-z-]+"),p("BUILD",`(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`),p("FULLPLAIN",`v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`),p("FULL",`^${i[a.FULLPLAIN]}$`),p("LOOSEPLAIN",`[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${i[a.BUILD]}?`),p("LOOSE",`^${i[a.LOOSEPLAIN]}$`),p("GTLT","((?:<|>)?=?)"),p("XRANGEIDENTIFIERLOOSE",`${i[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),p("XRANGEIDENTIFIER",`${i[a.NUMERICIDENTIFIER]}|x|X|\\*`),p("XRANGEPLAIN",`[v=\\s]*(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:${i[a.PRERELEASE]})?${i[a.BUILD]}?)?)?`),p("XRANGEPLAINLOOSE",`[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:${i[a.PRERELEASELOOSE]})?${i[a.BUILD]}?)?)?`),p("XRANGE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`),p("XRANGELOOSE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`),p("COERCE",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?(?:$|[^\\d])`),p("COERCERTL",i[a.COERCE],!0),p("LONETILDE","(?:~>?)"),p("TILDETRIM",`(\\s*)${i[a.LONETILDE]}\\s+`,!0),r.tildeTrimReplace="$1~",p("TILDE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`),p("TILDELOOSE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`),p("LONECARET","(?:\\^)"),p("CARETTRIM",`(\\s*)${i[a.LONECARET]}\\s+`,!0),r.caretTrimReplace="$1^",p("CARET",`^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`),p("CARETLOOSE",`^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`),p("COMPARATORLOOSE",`^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`),p("COMPARATOR",`^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`),p("COMPARATORTRIM",`(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`,!0),r.comparatorTrimReplace="$1$2$3",p("HYPHENRANGE",`^\\s*(${i[a.XRANGEPLAIN]})\\s+-\\s+(${i[a.XRANGEPLAIN]})\\s*$`),p("HYPHENRANGELOOSE",`^\\s*(${i[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[a.XRANGEPLAINLOOSE]})\\s*$`),p("STAR","(<|>)?=?\\s*\\*"),p("GTE0","^\\s*>=\\s*0.0.0\\s*$"),p("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},897606:(e,r,t)=>{const s=t(106826);e.exports=(e,r,t)=>s(e,r,">",t)},182937:(e,r,t)=>{const s=t(966902);e.exports=(e,r,t)=>(e=new s(e,t),r=new s(r,t),e.intersects(r))},350032:(e,r,t)=>{const s=t(106826);e.exports=(e,r,t)=>s(e,r,"<",t)},85775:(e,r,t)=>{const s=t(126376),o=t(966902);e.exports=(e,r,t)=>{let n=null,i=null,a=null;try{a=new o(r,t)}catch(l){return null}return e.forEach((e=>{a.test(e)&&(n&&-1!==i.compare(e)||(n=e,i=new s(n,t)))})),n}},771657:(e,r,t)=>{const s=t(126376),o=t(966902);e.exports=(e,r,t)=>{let n=null,i=null,a=null;try{a=new o(r,t)}catch(l){return null}return e.forEach((e=>{a.test(e)&&(n&&1!==i.compare(e)||(n=e,i=new s(n,t)))})),n}},995316:(e,r,t)=>{const s=t(126376),o=t(966902),n=t(471312);e.exports=(e,r)=>{e=new o(e,r);let t=new s("0.0.0");if(e.test(t))return t;if(t=new s("0.0.0-0"),e.test(t))return t;t=null;for(let o=0;o<e.set.length;++o){const r=e.set[o];let i=null;r.forEach((e=>{const r=new s(e.semver.version);switch(e.operator){case">":0===r.prerelease.length?r.patch++:r.prerelease.push(0),r.raw=r.format();case"":case">=":i&&!n(r,i)||(i=r);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${e.operator}`)}})),!i||t&&!n(t,i)||(t=i)}return t&&e.test(t)?t:null}},106826:(e,r,t)=>{const s=t(126376),o=t(722257),{ANY:n}=o,i=t(966902),a=t(745712),l=t(471312),p=t(821544),c=t(412056),h=t(625903);e.exports=(e,r,t,E)=>{let u,$,m,f,I;switch(e=new s(e,E),r=new i(r,E),t){case">":u=l,$=c,m=p,f=">",I=">=";break;case"<":u=p,$=h,m=l,f="<",I="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,r,E))return!1;for(let s=0;s<r.set.length;++s){const t=r.set[s];let i=null,a=null;if(t.forEach((e=>{e.semver===n&&(e=new o(">=0.0.0")),i=i||e,a=a||e,u(e.semver,i.semver,E)?i=e:m(e.semver,a.semver,E)&&(a=e)})),i.operator===f||i.operator===I)return!1;if((!a.operator||a.operator===f)&&$(e,a.semver))return!1;if(a.operator===I&&m(e,a.semver))return!1}return!0}},617908:(e,r,t)=>{const s=t(745712),o=t(346269);e.exports=(e,r,t)=>{const n=[];let i=null,a=null;const l=e.sort(((e,r)=>o(e,r,t)));for(const o of l){s(o,r,t)?(a=o,i||(i=o)):(a&&n.push([i,a]),a=null,i=null)}i&&n.push([i,null]);const p=[];for(const[s,o]of n)s===o?p.push(s):o||s!==l[0]?o?s===l[0]?p.push(`<=${o}`):p.push(`${s} - ${o}`):p.push(`>=${s}`):p.push("*");const c=p.join(" || "),h="string"==typeof r.raw?r.raw:String(r);return c.length<h.length?c:r}},222691:(e,r,t)=>{const s=t(966902),o=t(722257),{ANY:n}=o,i=t(745712),a=t(346269),l=(e,r,t)=>{if(e===r)return!0;if(1===e.length&&e[0].semver===n){if(1===r.length&&r[0].semver===n)return!0;e=t.includePrerelease?[new o(">=0.0.0-0")]:[new o(">=0.0.0")]}if(1===r.length&&r[0].semver===n){if(t.includePrerelease)return!0;r=[new o(">=0.0.0")]}const s=new Set;let l,h,E,u,$,m,f;for(const o of e)">"===o.operator||">="===o.operator?l=p(l,o,t):"<"===o.operator||"<="===o.operator?h=c(h,o,t):s.add(o.semver);if(s.size>1)return null;if(l&&h){if(E=a(l.semver,h.semver,t),E>0)return null;if(0===E&&(">="!==l.operator||"<="!==h.operator))return null}for(const o of s){if(l&&!i(o,String(l),t))return null;if(h&&!i(o,String(h),t))return null;for(const e of r)if(!i(o,String(e),t))return!1;return!0}let I=!(!h||t.includePrerelease||!h.semver.prerelease.length)&&h.semver,R=!(!l||t.includePrerelease||!l.semver.prerelease.length)&&l.semver;I&&1===I.prerelease.length&&"<"===h.operator&&0===I.prerelease[0]&&(I=!1);for(const o of r){if(f=f||">"===o.operator||">="===o.operator,m=m||"<"===o.operator||"<="===o.operator,l)if(R&&o.semver.prerelease&&o.semver.prerelease.length&&o.semver.major===R.major&&o.semver.minor===R.minor&&o.semver.patch===R.patch&&(R=!1),">"===o.operator||">="===o.operator){if(u=p(l,o,t),u===o&&u!==l)return!1}else if(">="===l.operator&&!i(l.semver,String(o),t))return!1;if(h)if(I&&o.semver.prerelease&&o.semver.prerelease.length&&o.semver.major===I.major&&o.semver.minor===I.minor&&o.semver.patch===I.patch&&(I=!1),"<"===o.operator||"<="===o.operator){if($=c(h,o,t),$===o&&$!==h)return!1}else if("<="===h.operator&&!i(h.semver,String(o),t))return!1;if(!o.operator&&(h||l)&&0!==E)return!1}return!(l&&m&&!h&&0!==E)&&(!(h&&f&&!l&&0!==E)&&(!R&&!I))},p=(e,r,t)=>{if(!e)return r;const s=a(e.semver,r.semver,t);return s>0?e:s<0||">"===r.operator&&">="===e.operator?r:e},c=(e,r,t)=>{if(!e)return r;const s=a(e.semver,r.semver,t);return s<0?e:s>0||"<"===r.operator&&"<="===e.operator?r:e};e.exports=(e,r,t={})=>{if(e===r)return!0;e=new s(e,t),r=new s(r,t);let o=!1;e:for(const s of e.set){for(const e of r.set){const r=l(s,e,t);if(o=o||null!==r,r)continue e}if(o)return!1}return!0}},551042:(e,r,t)=>{const s=t(966902);e.exports=(e,r)=>new s(e,r).set.map((e=>e.map((e=>e.value)).join(" ").trim().split(" ")))},889042:(e,r,t)=>{const s=t(966902);e.exports=(e,r)=>{try{return new s(e,r).range||"*"}catch(t){return null}}}}]);