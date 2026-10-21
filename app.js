(()=>{
 'use strict';
 const $=s=>document.querySelector(s);
 const arrow='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
 const photo=(v,id,label,first=false)=>`<figure class="photo" tabindex="0" role="button" aria-label="放大查看：${label}" data-full="assets/v${v}-${id}-1200.webp" data-label="${label} · 体验示意"><img src="assets/v${v}-${id}-640.webp" srcset="assets/v${v}-${id}-640.webp 640w, assets/v${v}-${id}-1200.webp 1200w" sizes="(min-width:700px) 520px, 90vw" width="1200" height="675" alt="${label}，佩戴Vision Pro头显的体验示意" loading="${first?'eager':'lazy'}" decoding="async"><figcaption>${label}</figcaption></figure>`;
 const pair=(a,b)=>`<div class="image-grid">${photo(...a)}${photo(...b)}</div>`;
 const targets=xs=>`<div class="targets">${xs.map(x=>`<span>${x}</span>`).join('')}</div>`;
 const end=i=>`<div class="slide-end"><span>墨MOXR作品${i===8?'':' · 体验示意'}</span><a class="poster-link" href="posters/${String(i+1).padStart(2,'0')}.jpg" data-poster="${i+1}">查看本页海报 ↗</a></div>`;
 const intro=(eyebrow,title,desc)=>`<div class="intro"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="lead">${desc}</p></div>`;
 const pages=[
  {name:'作品精选',sub:'MR空间交互 × VR沉浸影像',theme:'dark',class:'cover',html:`<div class="cover-copy"><p class="eyebrow">SPATIAL STORIES / 墨MOXR</p><p class="cover-wordmark">MR × VR</p><h1>把空间<br>变成故事</h1><p class="lead">MR空间交互 · 全景VR沉浸影像<br>虚拟现实电影</p><button class="primary" data-go="1">进入作品 ${arrow}</button></div><div class="hero-portal"><img src="assets/v1-08-games-battle-1200.webp" width="1200" height="800" alt="佩戴Vision Pro参与空间游戏的体验示意" fetchpriority="high"><div class="swipe-prompt"></div></div><div class="swipe-prompt"><svg viewBox="0 0 44 20" aria-hidden="true"><path d="M2 10h38m-8-6 8 6-8 6"/></svg><span>左右滑动翻页 · 向上滑动查看页内内容</span></div>`},
  {name:'文旅场景',sub:'文旅街区 · 博物馆展陈',theme:'light',html:`<div class="layout-split">${intro('CULTURE & TOURISM / 文旅场景','让街区与文物<br>展开新的故事','面向景区、商业街区与博物馆的MR内容。')}<div class="visuals"><h2>百米三时空MR街区</h2><p class="project-description">山海异兽、三国、赛博三大世界叠加实景街巷，让游客在行走中探索与互动。</p>${photo(1,'01-street-myth','山海异兽')}${pair([2,'02-street-three-kingdoms','三国世界'],[1,'03-street-cyber','赛博空间'])}<h2>博物馆山海瓷器MR展</h2><p class="project-description">瓷器纹样幻化异兽，延伸文物讲解与文化科普。</p>${pair([1,'04-museum-wide','馆藏活化'],[2,'05-museum-close','纹饰互动'])}${targets(['针对文旅景区','商业街区 / 夜游','博物馆展陈'])}</div></div>`},
  {name:'空间游戏',sub:'商场体验店 · 主题乐园',theme:'blue',html:`<div class="layout-split">${intro('PLAY IN SPACE / 商场乐园','给商场一场<br>空间里的新体验','三款原创MR空间游戏，适配Vision Pro手势交互。')}<div class="visuals">${photo(2,'08-games-battle','多人对战')}<h2>三款原创MR空间游戏</h2><p class="project-description">解谜、闯关、寻宝、竞速与多人对战，为门店体验与场地活动提供互动内容。</p>${pair([1,'06-games-puzzle','解谜与寻宝'],[2,'07-games-racing','闯关与竞速'])}${targets(['针对商场体验店','主题乐园','商业娱乐空间'])}</div></div>`},
  {name:'迷宫与竞技',sub:'大型体验空间 · 团队团建',theme:'dark',html:`<div class="layout-split">${intro('MOVE & TEAM UP / 商场乐园','把场地<br>变成游乐场','走动、协作，在真实空间中完成挑战。')}<div class="visuals"><h2>大型MR立体迷宫</h2><p class="project-description">实景叠加迷宫与动态机关，支持单人探险与多人组队。</p>${pair([1,'09-maze-wide','迷宫全景'],[2,'10-maze-team','协作解谜'])}<h2>MR实景CS对战</h2><p class="project-description">真人实地走位，结合虚拟枪械与战斗反馈，开展团队竞技。</p>${pair([2,'11-cs-arena','团队配合'],[1,'12-cs-action','战斗反馈'])}${targets(['针对主题乐园','大型体验空间','团队团建'])}</div></div>`},
  {name:'航天研学',sub:'中国空间站 · 游学科普',theme:'light',html:`<div class="layout-split">${intro('LEARN BY EXPLORING / 研学科普','知识，<br>可以走进去','从整体结构观察，到舱内探索，让航天知识更直观。')}<div class="visuals">${photo(1,'15-station-outside','空间站整体认知')}<h2>中国空间站</h2><p class="project-description">观察舱体与太阳能帆板，探索舱内空间，了解航天结构与太空科研。</p>${photo(2,'16-station-inside','舱内探索')}${targets(['针对研学机构','科技馆 / 科普馆','校园科普 / 游学'])}</div></div>`},
  {name:'重器科普',sub:'核潜艇 · 航空母舰',theme:'dark',html:`<div class="layout-split">${intro('DISCOVER THE OCEAN / 研学科普','让重器成为<br>一堂空间里的课','通过模型观察与舱室探索，理解结构、原理和功能。')}<div class="visuals"><h2>核潜艇</h2><p class="project-description">观察艇体与舱室关系，认识基础结构与原理。</p>${pair([2,'17-submarine-outside','整体结构'],[1,'18-submarine-inside','舱室探索'])}<h2>航空母舰</h2><p class="project-description">走近甲板、舰岛与内部空间，展开海防科普。</p>${pair([1,'19-carrier-deck','甲板体验'],[2,'20-carrier-inside','舰岛视角'])}${targets(['针对研学基地','科普场馆','国防主题教育'])}</div></div>`},
  {name:'医学教学',sub:'三维组织结构 · 医学演示',theme:'light',html:`<div class="layout-split">${intro('SEE & UNDERSTAND / 医学教学','让三维结构<br>更容易被理解','以空间视角呈现人体组织、病灶位置与周边关系。')}<div class="visuals">${photo(2,'13-medical-overview','三维结构教学')}<h2>MR医学可视化系统</h2><p class="project-description">从平面图像到空间理解，呈现组织结构与病灶点位，用于医学教学与演示。</p>${photo(1,'14-medical-detail','病灶空间标注')}${targets(['针对医学院校','医学教学','科研展示 / 医疗演示'])}</div></div>`},
  {name:'虚拟现实电影',sub:'《五号空间站》· BMD Immersive',theme:'dark',html:`<div class="layout-split">${intro('IMMERSIVE CINEMA / 虚拟现实电影','《五号空间站》','使用 BMD Immersive 拍摄的科幻类空间短片。<br>从空间交互，到空间叙事。')}<div class="visuals">${photo(2,'21-film-viewing','沉浸观影示意')}<h2>以沉浸影像讲述科幻故事</h2><p class="project-description">佩戴头显，进入科幻叙事空间。以下为观影与拍摄场景示意。</p>${photo(2,'22-film-production','空间短片拍摄示意')}${targets(['针对沉浸影像展映','主题空间 / 场馆','影视创作'])}</div></div>`},
  {name:'合作微信',sub:'雷鸣 · 扫码交流项目合作',theme:'dark',class:'contact-slide',html:`<div class="layout-split"><div class="intro"><p class="eyebrow">LET’S CREATE / 合作交流</p><h1>下一场沉浸体验<br>从你的场地开始</h1><p class="lead">现有内容合作 / 场地适配 / 主题内容定制<br>全景VR沉浸影像 / 虚拟现实电影</p>${targets(['文旅街区','商场乐园','博物馆展陈','研学科普','医学教学','沉浸影像'])}</div><div><div class="qr-block"><img class="qr" src="assets/wechat.png" width="728" height="728" alt="雷鸣合作微信二维码，长按识别" data-full="assets/wechat.png" data-label="雷鸣 · 合作微信"><div class="qr-copy"><h2>合作微信 · 雷鸣</h2><p>长按识别二维码<br>交流项目与合作</p></div></div><div class="button-row"><button class="primary" id="contact-qr">放大二维码</button><button class="secondary" id="share-end">分享作品集 ↗</button></div></div></div><p class="brand-close">墨MOXR作品</p><p class="company">北京一墨不凡影视文化传媒有限公司</p>`}
 ];
 const deck=$('#deck');
 deck.innerHTML=pages.map((p,i)=>`<section class="slide ${p.class||''}" data-index="${i}" data-theme="${p.theme}" role="group" aria-roledescription="幻灯片" aria-label="${i+1} / 9 ${p.name}"><div class="story">${p.html}${end(i)}</div></section>`).join('');
 $('#menu-items').innerHTML=pages.map((p,i)=>`<button data-go="${i}"><span class="menu-index">${String(i+1).padStart(2,'0')}</span><span>${p.name}<small>${p.sub}</small></span></button>`).join('');
 $('#progress').innerHTML=pages.map((p,i)=>`<button data-go="${i}" aria-label="第${i+1}页：${p.name}"></button>`).join('');
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let current=0,scrollTimer,toastTimer;
 function update(i,hash=true){
  current=Math.max(0,Math.min(8,i));document.body.dataset.theme=pages[current].theme;
  document.querySelectorAll('.slide').forEach((s,i)=>{s.inert=i!==current;s.setAttribute('aria-hidden',String(i!==current));});
  $('#page-number').textContent=String(current+1).padStart(2,'0');$('#chapter-name').textContent=pages[current].name;
  $('#previous').disabled=current===0;$('#next').setAttribute('aria-label',current===8?'回到首页':'下一页');
  document.querySelectorAll('#progress button,#menu-items button').forEach(b=>b.setAttribute('aria-current',String(Number(b.dataset.go)===current)));
  $('#page-announcement').textContent=`第${current+1}页，共9页：${pages[current].name}`;
  if(hash&&location.hash!==`#page-${current+1}`)history.replaceState(null,'',`#page-${current+1}`);
 }
 function go(i,smooth=true){i=Math.max(0,Math.min(8,i));update(i);deck.scrollTo({left:i*deck.clientWidth,behavior:smooth&&!reduce?'smooth':'auto'});}
 function fromHash(){const m=location.hash.match(/^#page-([1-9])$/);return m?Number(m[1])-1:0;}
 function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2600);}
 function open(id){const d=$(id);if(!d.open)d.showModal();}
 function image(src,label){$('#photo-full').src=src;$('#photo-full').alt=label;$('#photo-label').textContent=label;open('#photo-dialog');$('.photo-scroll').scrollTop=0;}
 async function copy(value){try{await navigator.clipboard.writeText(value);return true}catch{const t=document.createElement('textarea');t.value=value;t.style.cssText='position:fixed;top:0;opacity:0';document.body.append(t);t.select();const ok=document.execCommand('copy');t.remove();return ok;}}
 async function share(){
  if(location.protocol==='file:'||['localhost','127.0.0.1','::1'].includes(location.hostname)){
   $('#share-title').textContent='当前是本机预览';$('#share-description').textContent='作品集已经做好，公开链接上线后才可对外分享。这个本机地址无法供其他人访问。';$('#share-link').value='公开链接尚未生成';$('#copy-link').disabled=true;open('#share-dialog');return;
  }
  $('#share-title').textContent='分享墨MOXR作品';$('#copy-link').disabled=false;
  const url=new URL(location.href);url.hash='';url.search='';const link=url.href;$('#share-link').value=link;
  if(navigator.share&&!/MicroMessenger/i.test(navigator.userAgent)){try{await navigator.share({title:'墨MOXR · 把空间变成故事',text:'MR空间交互 × VR沉浸影像，左右滑动查看作品。',url:link});return}catch(e){if(e.name==='AbortError')return;}}
  $('#share-description').textContent=/MicroMessenger/i.test(navigator.userAgent)?'点击微信右上角“···”，选择发送给朋友或分享到朋友圈。\n也可以复制下方链接分享。':'复制下方链接，发送给朋友，即可打开这本作品集。';open('#share-dialog');
 }
 document.addEventListener('click',e=>{
  const target=e.target.closest('[data-go]');if(target){go(Number(target.dataset.go));$('#menu-dialog').close();return;}
  const full=e.target.closest('[data-full]');if(full){image(full.dataset.full,full.dataset.label);return;}
  const poster=e.target.closest('[data-poster]');if(poster){e.preventDefault();image(poster.href,`墨MOXR作品 · 第${poster.dataset.poster}页海报`);return;}
  const close=e.target.closest('.close');if(close)close.closest('dialog').close();
 });
 document.addEventListener('keydown',e=>{
  if(e.target.closest('.photo')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();e.target.click();return;}
  if(document.querySelector('dialog[open]')||e.target.matches('input,textarea,select'))return;
  if(e.key==='ArrowRight'){e.preventDefault();go(Math.min(8,current+1));}else if(e.key==='ArrowLeft'){e.preventDefault();go(Math.max(0,current-1));}else if(e.key==='Home'){e.preventDefault();go(0);}else if(e.key==='End'){e.preventDefault();go(8);}
 });
 deck.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>update(Math.round(deck.scrollLeft/deck.clientWidth)),90);},{passive:true});
 $('#previous').onclick=()=>go(current-1);$('#next').onclick=()=>go(current===8?0:current+1);
 $('#contact').onclick=()=>go(8);$('#open-menu').onclick=$('#page-menu').onclick=()=>open('#menu-dialog');
 $('#share').onclick=$('#share-end').onclick=share;
 $('#contact-qr').onclick=()=>image('assets/wechat.png','雷鸣 · 合作微信');
 $('#copy-link').onclick=async()=>{if(await copy($('#share-link').value)){toast('作品链接已复制');$('#share-dialog').close();}else{$('#share-link').focus();$('#share-link').select();toast('请长按链接复制');}};
 document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
 addEventListener('hashchange',()=>go(fromHash()));
 let resizeTimer;addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>go(current,false),120);});
 requestAnimationFrame(()=>go(fromHash(),false));
})();
