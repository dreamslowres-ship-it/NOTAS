"use strict";

const ICONS = {
  search:'<circle cx="11" cy="11" r="7"/><path d="M20.5 20.5 16.7 16.7"/>',
  more:'<circle cx="12" cy="5" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.6" fill="currentColor" stroke="none"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  back:'<path d="M15 19l-7-7 7-7"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  pin:'<path d="M9 3h6l-.9 6.5 2.9 3.1V15H7v-2.4l2.9-3.1L9 3z"/><path d="M12 15v6"/>',
  pinFilled:'<path d="M9 3h6l-.9 6.5 2.9 3.1V15H7v-2.4l2.9-3.1L9 3z" fill="currentColor"/><path d="M12 15v6"/>',
  palette:'<path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a5 5 0 0 0 5-5c0-3.9-4-7.7-9-7.7z"/><circle cx="8.5" cy="10.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="12" cy="7.8" r="1.1" fill="currentColor" stroke="none"/><circle cx="15.6" cy="10" r="1.1" fill="currentColor" stroke="none"/>',
  archive:'<rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8"/><path d="M10 12.5h4"/>',
  unarchive:'<rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8"/><path d="M12 17v-5"/><path d="M9.5 14.5 12 12l2.5 2.5"/>',
  trash:'<path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6.5 7l.9 12.1A1.2 1.2 0 0 0 8.6 20h6.8a1.2 1.2 0 0 0 1.2-1.1L17.5 7"/><path d="M9.5 7V4.8A.8.8 0 0 1 10.3 4h3.4a.8.8 0 0 1 .8.8V7"/>',
  restore:'<path d="M3.5 12a8.5 8.5 0 1 0 2.8-6.3"/><path d="M3 4v4.5h4.5"/>',
  copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',
  duplicate:'<rect x="3" y="3" width="13" height="13" rx="2"/><path d="M8 21h9a2 2 0 0 0 2-2V9"/>',
  download:'<path d="M12 3v12"/><path d="M7.5 10.5 12 15l4.5-4.5"/><path d="M4 20h16"/>',
  upload:'<path d="M12 21V9"/><path d="M7.5 13.5 12 9l4.5 4.5"/><path d="M4 4h16"/>',
  erase:'<path d="M4 20h16"/><path d="M6.5 16.5 14 9a2.1 2.1 0 0 1 3 0l2 2a2.1 2.1 0 0 1 0 3l-5.5 5.5H8.5z"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r="1" fill="currentColor" stroke="none"/>',
  note:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  hash:'<path d="M9 3 7 21M17 3l-2 18M4 8h16M3 16h16"/>',
  checklist:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4.5 5.5l1 1 2-2M4.5 11.5l1 1 2-2M4.5 17.5l1 1 2-2"/>',
  checkSquare:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12l3 3 5-6"/>',
  square:'<rect x="3" y="3" width="18" height="18" rx="3"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.2V16h6v-.3c0-.8.4-1.6 1-2.2A6 6 0 0 0 12 3z"/>',
  users:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3 2.8-5 6-5s6 2 6 5"/><path d="M16 4.5a3.2 3.2 0 0 1 0 6.4"/><path d="M21 20c0-2.6-1.9-4.6-4.5-5"/>',
  calendar:'<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 3v3M16 3v3"/>',
  mic:'<rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3M8 21h8"/>',
  sort:'<path d="M3 6h13M3 12h9M3 18h5"/><path d="M18 8l3 3-3 3"/>',
  fileText:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8 13h6M8 17h6"/>',
  sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>',
  folderPlus:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/><path d="M12 11v6M9 14h6"/>',
  list:'<path d="M3 6h18M3 12h18M3 18h18"/>',
  grid:'<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/>',
  columns:'<rect x="3" y="4" width="5" height="16" rx="1.5"/><rect x="9.5" y="4" width="5" height="16" rx="1.5"/><rect x="16" y="4" width="5" height="16" rx="1.5"/>',
  zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  play:'<path d="M5 3l14 9-14 9V3z"/>',
  star:'<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>',
  plusCircle:'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  minus:'<path d="M5 12h14"/>',
  chevDown:'<path d="M6 9l6 6 6-6"/>',
  chevUp:'<path d="M6 15l6-6 6 6"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>'
};
function icon(name, size){
  size = size || 22;
  return '<svg viewBox="0 0 24 24" width="'+size+'" height="'+size+'" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICONS[name] || ICONS.note)+'</svg>';
}

const $ = (s,r) => (r||document).querySelector(s);
const $$ = (s,r) => Array.prototype.slice.call((r||document).querySelectorAll(s));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,8);
function esc(s){
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
const escAttr = esc;

const TAG_RE = /(?:^|[\s(¿¡"'])#([\p{L}\p{N}_-]{1,30})/gu;
function parseTags(text){
  const out = new Set(); let m; TAG_RE.lastIndex = 0;
  while ((m = TAG_RE.exec(text || '')) !== null) out.add(m[1]);
  return Array.from(out);
}
function noteTags(n){
  if (!n) return [];
  const set = new Set();
  (n.tags || []).forEach(t => { if (t) set.add(String(t)); });
  parseTags(n.text || '').forEach(t => set.add(t));
  parseTags(n.title || '').forEach(t => set.add(t));
  return Array.from(set);
}
function noteTitle(n){
  if (!n) return '';
  if (n.title != null && String(n.title).trim()) return String(n.title).trim();
  return firstLine(n.text || '');
}
function noteSearchText(n){
  return [n.title||'', n.text||'', (n.tags||[]).join(' ')].join(' ').toLowerCase();
}
const CHECK_RE = /^(\s*)([-*])\s+\[([ xX])\]\s?(.*)$/;
function checkStats(text){
  let t=0, d=0;
  (text||'').split('\n').forEach(l => { const m = l.match(CHECK_RE); if (m){ t++; if (m[3].toLowerCase()==='x') d++; } });
  return { total:t, done:d };
}
const firstLine = t => (t||'').split('\n')[0].trim();
function restLines(t){ const p=(t||'').split('\n'); p.shift(); return p.join('\n').replace(/\s+$/,''); }
function stripMd(s){
  return String(s||'').replace(/\*\*([^*]+)\*\*/g,'$1').replace(/(^|[^*\w])\*([^*\n]+)\*/g,'$1$2')
    .replace(/~~([^~]+)~~/g,'$1').replace(/`([^`]+)`/g,'$1').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1');
}
function renderInline(text){
  let s = esc(text);
  s = s.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/__([^_\n]+)__/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^\*\w])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  s = s.replace(/(^|[^_\w])_([^_\n]+)_/g, '$1<em>$2</em>');
  s = s.replace(/~~([^~\n]+)~~/g, '<s>$1</s>');
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/(^|\s)(https?:\/\/[^\s<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
  s = s.replace(/(^|[\s(¿¡"'])#([\p{L}\p{N}_-]{1,30})/gu, '$1<span class="inline-tag">#$2</span>');
  return s;
}
function renderPreview(text, startLine){
  if (!text) return '';
  startLine = startLine || 0;
  const lines = text.split('\n');
  const out = [];
  let inCheck = false, inUl = false, inOl = false, inCode = false, codeBuf = [];
  function closeLists(){
    if (inCheck){ out.push('</div>'); inCheck = false; }
    if (inUl){ out.push('</ul>'); inUl = false; }
    if (inOl){ out.push('</ol>'); inOl = false; }
  }
  function flushCode(){
    if (!inCode) return;
    out.push('<pre class="md-code"><code>'+esc(codeBuf.join('\n'))+'</code></pre>');
    codeBuf = []; inCode = false;
  }
  function isTableSep(line){
    return /^\s*\|?[\s:]*-{3,}[\s:]*(\|[\s:]*-{3,}[\s:]*)+\|?\s*$/.test(line);
  }
  function parseTableRow(line){
    let s = line.trim();
    if (s.startsWith('|')) s = s.slice(1);
    if (s.endsWith('|')) s = s.slice(0, -1);
    return s.split('|').map(c => c.trim());
  }
  let i = 0;
  while (i < lines.length){
    const line = lines[i];
    const absLine = startLine + i;

    if (/^```/.test(line)){
      closeLists();
      if (inCode){ flushCode(); }
      else { inCode = true; codeBuf = []; }
      i++; continue;
    }
    if (inCode){ codeBuf.push(line); i++; continue; }

    if (i + 1 < lines.length && line.indexOf('|') !== -1 && isTableSep(lines[i+1])){
      closeLists();
      const headers = parseTableRow(line);
      const seps = parseTableRow(lines[i+1]);
      const aligns = seps.map(s => {
        const t = s.trim();
        const left = t.startsWith(':'), right = t.endsWith(':');
        if (left && right) return 'center';
        if (right) return 'right';
        return 'left';
      });
      let html = '<table class="md-table"><thead><tr>';
      headers.forEach((h, hi) => {
        html += '<th style="text-align:'+(aligns[hi]||'left')+'">'+renderInline(h)+'</th>';
      });
      html += '</tr></thead><tbody>';
      i += 2;
      while (i < lines.length && lines[i].indexOf('|') !== -1 && lines[i].trim() && !isTableSep(lines[i])){
        const cells = parseTableRow(lines[i]);
        html += '<tr>';
        headers.forEach((_, hi) => {
          html += '<td style="text-align:'+(aligns[hi]||'left')+'">'+renderInline(cells[hi]||'')+'</td>';
        });
        html += '</tr>';
        i++;
      }
      html += '</tbody></table>';
      out.push('<div class="md-table-scroll">'+html+'</div>');
      continue;
    }

    const m = line.match(CHECK_RE);
    if (m){
      if (inUl){ out.push('</ul>'); inUl = false; }
      if (inOl){ out.push('</ol>'); inOl = false; }
      if (!inCheck){ out.push('<div class="checklist">'); inCheck = true; }
      const checked = m[3].toLowerCase() === 'x';
      const svg = checked
        ? '<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>'
        : '';
      out.push('<div class="check-row" data-line="'+absLine+'"><span class="check-box'+(checked?' checked':'')+'" role="checkbox" aria-checked="'+checked+'">'+svg+'</span><span class="check-text'+(checked?' done':'')+'">'+renderInline(m[4])+'</span></div>');
      i++; continue;
    }

    const hm = line.match(/^(#{1,6})\s+(.+)$/);
    if (hm){
      closeLists();
      const lvl = hm[1].length;
      out.push('<h'+lvl+'>'+renderInline(hm[2])+'</h'+lvl+'>');
      i++; continue;
    }

    if (/^\s*([-*_])\s*\1\s*\1[\s\1]*$/.test(line) || /^\s*([-*_]\s*){3,}$/.test(line)){
      closeLists(); out.push('<hr>'); i++; continue;
    }

    if (/^>/.test(line)){
      closeLists();
      const callM = line.match(/^>\s*\[!(note|tip|hint|warning|caution|danger|error|info|todo|bug|quote|cite|success|question|example)\]\s*(.*)$/i);
      if (callM){
        const ctype = callM[1].toLowerCase();
        let title = (callM[2] || '').trim() || ctype;
        const body = [];
        i++;
        while (i < lines.length && /^>/.test(lines[i])){
          body.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }
        out.push('<div class="md-callout '+escAttr(ctype)+'"><div class="callout-title">'+esc(title)+'</div>'+
          (body.length ? '<div class="callout-body">'+body.map(b => b.trim() ? renderInline(b) : '<br>').join('<br>')+'</div>' : '')+
          '</div>');
        continue;
      }
      const qlines = [];
      while (i < lines.length && /^>/.test(lines[i]) && !/^>\s*\[!/.test(lines[i])){
        qlines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      out.push('<blockquote>'+qlines.map(q => renderInline(q)).join('<br>')+'</blockquote>');
      continue;
    }

    const ul = line.match(/^\s*[-*]\s+(.+)$/);
    if (ul){
      if (inCheck){ out.push('</div>'); inCheck = false; }
      if (inOl){ out.push('</ol>'); inOl = false; }
      if (!inUl){ out.push('<ul class="md-list">'); inUl = true; }
      out.push('<li>'+renderInline(ul[1])+'</li>');
      i++; continue;
    }

    const ol = line.match(/^\s*(\d+)[.)]\s+(.+)$/);
    if (ol){
      if (inCheck){ out.push('</div>'); inCheck = false; }
      if (inUl){ out.push('</ul>'); inUl = false; }
      if (!inOl){ out.push('<ol class="md-list">'); inOl = true; }
      out.push('<li>'+renderInline(ol[2])+'</li>');
      i++; continue;
    }

    closeLists();
    if (line.trim()) out.push('<div class="para">'+renderInline(line)+'</div>');
    else out.push('<div class="blank-line"></div>');
    i++;
  }
  flushCode();
  closeLists();
  return out.join('');
}
function fmtDate(ts){
  if (!ts) return '';
  const d = new Date(ts), now = new Date();
  if (d.toDateString() === now.toDateString()) return d.toLocaleTimeString('es',{hour:'2-digit',minute:'2-digit'});
  const y = new Date(now); y.setDate(now.getDate()-1);
  if (d.toDateString() === y.toDateString()) return 'Ayer';
  if (d.getFullYear() === now.getFullYear()) return d.toLocaleDateString('es',{day:'numeric',month:'short'});
  return d.toLocaleDateString('es',{day:'numeric',month:'short',year:'2-digit'});
}
const pad2 = n => String(n).padStart(2,'0');

/* ===== Status icons (customs only; presets use CSS mask atlas) ===== */
const ICON_SZ = 128;
const MAX_CUSTOM_ICONS = 10;
const _iconUrlCache = Object.create(null);

function iconTintColor(){
  try {
    const cs = getComputedStyle(document.documentElement);
    const mode = document.documentElement.getAttribute('data-mode') || 'light';
    if (mode === 'dark') return (cs.getPropertyValue('--accent') || '#8FA0E8').trim();
    return (cs.getPropertyValue('--ink') || '#14161C').trim();
  } catch(_){ return '#14161C'; }
}
function parseTint(tint){
  let r=255,g=255,b=255;
  const m = String(tint||'').match(/#([0-9a-fA-F]{3,8})/);
  if (m){
    let h = m[1];
    if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
    r = parseInt(h.slice(0,2),16); g = parseInt(h.slice(2,4),16); b = parseInt(h.slice(4,6),16);
  }
  return {r,g,b};
}
function alphaToTintedDataURL(alpha, tint){
  const {r,g,b} = parseTint(tint);
  const c = document.createElement('canvas');
  c.width = ICON_SZ; c.height = ICON_SZ;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(ICON_SZ, ICON_SZ);
  const n = ICON_SZ * ICON_SZ;
  for (let i=0;i<n;i++){
    const o = i*4;
    const av = alpha[i] || 0;
    img.data[o]=r; img.data[o+1]=g; img.data[o+2]=b;
    img.data[o+3] = Math.max(0, Math.min(255, Math.round(av * 255)));
  }
  ctx.putImageData(img, 0, 0);
  return c.toDataURL('image/png');
}
function customIconDataURL(pixels){
  const tint = iconTintColor();
  let alpha;
  if (!pixels || !pixels.length) alpha = new Float32Array(ICON_SZ*ICON_SZ);
  else if (pixels.length === ICON_SZ*ICON_SZ){
    alpha = new Float32Array(ICON_SZ*ICON_SZ);
    for (let i=0;i<pixels.length;i++){
      const v = pixels[i];
      alpha[i] = v > 1 ? v/255 : v;
    }
  } else if (pixels.length === 1024){
    alpha = new Float32Array(ICON_SZ*ICON_SZ);
    for (let y=0;y<ICON_SZ;y++){
      for (let x=0;x<ICON_SZ;x++){
        const sx = Math.floor(x/4), sy = Math.floor(y/4);
        alpha[y*ICON_SZ+x] = pixels[sy*32+sx] ? 1 : 0;
      }
    }
  } else {
    alpha = new Float32Array(ICON_SZ*ICON_SZ);
  }
  const sig = pixels && pixels.length ? (pixels[0]+'|'+pixels[Math.floor(pixels.length/2)]+'|'+pixels[pixels.length-1]+'|'+pixels.length) : '0';
  const key = 'c|'+sig+'|'+tint;
  if (_iconUrlCache[key]) return _iconUrlCache[key];
  const url = alphaToTintedDataURL(alpha, tint);
  _iconUrlCache[key] = url;
  return url;
}
function clearIconCache(){ for (const k in _iconUrlCache) delete _iconUrlCache[k]; }
function statusIconHTML(st, sizeClass){
  if (!st) return '';
  const icon = (st.icon || 'p0');
  const sc = sizeClass || '';
  const px = sc === 'lg' ? 24 : sc === 'sm' ? 14 : 18;
  if (icon.startsWith('c_') || icon.startsWith('custom:')){
    const id = icon.replace(/^c_/,'').replace(/^custom:/,'');
    const c = (prefs.customIcons || []).find(x => x.id === id);
    if (c){
      const url = customIconDataURL(c.pixels);
      return '<span class="st-icon custom '+sc+'" style="width:'+px+'px;height:'+px+'px;background-image:url(\''+url+'\')" title="'+escAttr(st.name||'')+'"></span>';
    }
  }
  const idx = /^p[0-9]$/.test(icon) ? Number(icon.slice(1)) : 0;
  const sizeCls = sc === 'lg' ? ' lg' : (sc === 'sm' ? ' sm' : '');
  return '<span class="st-icon atlas p'+idx+sizeCls+'" style="width:'+px+'px;height:'+px+'px" title="'+escAttr(st.name||'')+'"></span>';
}

const COLORS = ['slate','sky','mint','lilac','rose','amber'];
const COLOR_LABELS = { slate:'Pizarra', sky:'Cielo', mint:'Menta', lilac:'Lila', rose:'Rosa', amber:'Ámbar' };

const KEYS = {
  notes:'notas.v7.notes', folders:'notas.v7.folders', statuses:'notas.v7.statuses',
  collections:'notas.v7.collections', blocks:'notas.v7.blocks', prefs:'notas.v7.prefs',
  history:'notas.v7.history', seeded:'notas.v7.seeded'
};
const TRASH_DAYS = 30;
const MAX_STATUSES = 8;
const MAX_NOTE_TAGS = 10;
const MAX_CUSTOM_COLORS = 12;

let notes = [];
let folders = [];
let statuses = [];
let collections = [];
let blocks = [];
let prefs = { theme:'auto', themePalette:'classic', themeMode:'auto', sort:'modified', view:'list', chips:null, editorMode:'source', blocksPaused:false, customIcons:[], customColors:[] };
let view = { type:'all', tag:null, folderId:null, status:null, collectionId:null };
let query = '';
let editingId = null;
let saveTimer = null;
let selectedIdx = -1;
let currentSession = { noteId:null, openedAt:0, timer:null, isNew:false };

// Cache para visibleNotes (invalidado al persistir cambios)
let _visibleCache = null;
function invalidateVisibleCache(){ _visibleCache = null; }

function defaultStatuses(){
  return [
    { id:'idea', name:'Idea', icon:'p0', color:'slate', final:false, order:0 },
    { id:'active', name:'Activo', icon:'p1', color:'sky', final:false, order:1 },
    { id:'done', name:'Hecho', icon:'p2', color:'mint', final:true, order:2 }
  ];
}
function defaultChips(){ return [{ type:'all' }, { type:'pinned' }]; }
function presetBlocks(){
  const st0 = () => (statuses[0] && statuses[0].id) || 'active';
  const stFinal = () => {
    const f = statuses.find(s => s.final);
    return (f && f.id) || (statuses[statuses.length-1] && statuses[statuses.length-1].id) || st0();
  };
  return [
    { id:'p_idea', name:'Idea al vuelo', pack:'Captura', desc:'Al crear con título vacío → prefijo «Idea · »',
      when:{type:'note.create'}, if:[{type:'titleEmpty'}],
      then:[{type:'prefixTitle', text:'Idea · '}] },
    { id:'p_nocturno', name:'Nota de la noche', pack:'Captura', desc:'Al crear entre 22:00 y 06:00 → #nocturno',
      when:{type:'note.create'}, if:[{type:'hourBetween', from:'22:00', to:'06:00'}], then:[{type:'addTag', tag:'nocturno'}] },
    { id:'p_contacto', name:'Detectar contacto', pack:'Captura', desc:'Si el texto tiene un correo → #contacto',
      when:{type:'note.edit'}, if:[{type:'containsEmail'}], then:[{type:'addTag', tag:'contacto'}] },
    { id:'p_lista_ok', name:'Lista terminada', pack:'Tareas', desc:'Al completar todas las tareas → estado final + aviso',
      when:{type:'note.checklistDone'}, if:[], then:[{type:'setStatus', status:'hecho'}, {type:'toast', text:'Lista completa'}] },
    { id:'p_limpieza', name:'Limpiar hechas', pack:'Tareas', desc:'Al archivar → quitar tareas completadas',
      when:{type:'note.archive'}, if:[{type:'hasTasks'}], then:[{type:'clearDoneTasks'}] },
    { id:'p_pendientes', name:'Recordatorio de pendientes', pack:'Tareas', desc:'Cada día a las 9:00 si hay tareas sin completar → aviso',
      when:{type:'daily', time:'09:00'}, if:[{type:'hasUnchecked'}], then:[{type:'toast', text:'Tienes tareas pendientes'}] },
    { id:'p_fijar_imp', name:'Fijar = importante', pack:'Organización', desc:'Al fijar → #importante',
      when:{type:'note.pin'}, if:[], then:[{type:'addTag', tag:'importante'}] },
    { id:'p_desfijar', name:'Desfijar = soltar', pack:'Organización', desc:'Al desfijar → quitar #importante',
      when:{type:'note.unpin'}, if:[{type:'hasTag', tag:'importante'}], then:[{type:'removeTag', tag:'importante'}] },
    { id:'p_archivar_limpio', name:'Archivar limpio', pack:'Organización', desc:'Al archivar → desfijar',
      when:{type:'note.archive'}, if:[{type:'isPinned'}], then:[{type:'unpin'}] },
    { id:'p_polvo', name:'Ideas en polvo', pack:'Higiene', desc:'#idea sin abrir 45 días → archivar',
      when:{type:'inactivity', days:45}, if:[{type:'hasTag', tag:'idea'}], then:[{type:'archive'}] },
    { id:'p_larga', name:'Texto largo', pack:'Higiene', desc:'Al editar + más de 400 palabras → #revisar',
      when:{type:'note.edit'}, if:[{type:'wordCount', op:'>', n:400}], then:[{type:'addTag', tag:'revisar'}] },
    { id:'p_reunion', name:'Nota de reunión', pack:'Reuniones', desc:'Título con «reunión» → #reunión + checklist de acciones',
      when:{type:'note.create'}, if:[{type:'titleContains', text:'reunión'}],
      then:[{type:'addTag', tag:'reunión'}, {type:'appendChecklist', text:'Seguimiento\nEnviar acta'}] }
  ];
}

function load(){
  try { notes = JSON.parse(localStorage.getItem(KEYS.notes)) || []; } catch(_){ notes = []; }
  try { folders = JSON.parse(localStorage.getItem(KEYS.folders)) || []; } catch(_){ folders = []; }
  try { statuses = JSON.parse(localStorage.getItem(KEYS.statuses)) || []; } catch(_){ statuses = []; }
  try { collections = JSON.parse(localStorage.getItem(KEYS.collections)) || []; } catch(_){ collections = []; }
  try { blocks = JSON.parse(localStorage.getItem(KEYS.blocks)) || []; } catch(_){ blocks = []; }
  try { prefs = Object.assign(prefs, JSON.parse(localStorage.getItem(KEYS.prefs)) || {}); } catch(_){}

  if (!Array.isArray(notes)) notes = [];
  if (!Array.isArray(folders)) folders = [];
  if (!Array.isArray(statuses)) statuses = [];
  if (!Array.isArray(collections)) collections = [];
  if (!Array.isArray(blocks)) blocks = [];
  if (!Array.isArray(prefs.chips)) prefs.chips = null;

  if (!statuses.length){ statuses = defaultStatuses(); }
  else {
    statuses = statuses.map((s,i) => {
      let icon = s.icon || null;
      if (!icon){
        const map = { slate:'p0', sky:'p1', mint:'p2', lilac:'p5', rose:'p9', amber:'p3' };
        icon = map[s.color] || ('p' + (i % 10));
      }
      return {
        id: String(s.id || uid()),
        name: String(s.name || 'Estado'),
        icon: String(icon),
        color: COLORS.indexOf(s.color) !== -1 ? s.color : 'slate',
        final: !!s.final,
        order: typeof s.order === 'number' ? s.order : i
      };
    }).sort((a,b) => a.order - b.order).slice(0, MAX_STATUSES);
  }
  if (!statuses.some(s => s.final) && statuses.length){ statuses[statuses.length-1].final = true; }

  notes = notes.filter(n => n && typeof n === 'object' && typeof n.id === 'string');
  notes.forEach(n => {
    n.text = typeof n.text === 'string' ? n.text : '';
    n.pinned = !!n.pinned; n.archived = !!n.archived;
    n.deleted = typeof n.deleted === 'number' ? n.deleted : null;
    n.color = n.color || null;
    n.folderId = n.folderId || null;
    n.status = n.status || statuses[0].id;
    if (!statuses.find(s => s.id === n.status)) n.status = statuses[0].id;
    n.created = n.created || Date.now();
    n.modified = n.modified || n.created;
    n.openedAt = n.openedAt || null;
    n.viewTime = n.viewTime || 0;
    n._fired = n._fired || {};
    if (typeof n.title !== 'string'){
      const fl = (n.text||'').split('\n')[0] || '';
      const rest = (n.text||'').split('\n').slice(1).join('\n');
      n.title = fl.trim();
      n.text = rest.replace(/^\n+/, '');
    }
    if (!Array.isArray(n.tags)){
      const fromBody = parseTags(n.text || '');
      const fromTitle = parseTags(n.title || '');
      n.tags = Array.from(new Set([...fromTitle, ...fromBody]));
    } else {
      n.tags = n.tags.map(t => String(t||'').replace(/^#/, '').trim()).filter(Boolean);
    }
  });

  folders = folders.filter(f => f && typeof f.id === 'string').map(f => ({
    id: f.id, name: f.name || 'Carpeta', created: f.created || Date.now(), order: f.order || 0
  }));
  collections = collections.filter(c => c && typeof c.id === 'string').map(c => ({
    id: c.id, name: c.name || 'Colección', query: c.query || '', created: c.created || Date.now()
  }));
  blocks = blocks.filter(b => b && typeof b.id === 'string').map((b,i) => ({
    id:b.id, name:b.name || 'Bloque', enabled:!!b.enabled, preset:!!b.preset,
    singleFire:!!b.singleFire, ui: b.ui === 'advanced' ? 'advanced' : (b.ui === 'simple' ? 'simple' : (b.preset ? 'simple' : 'advanced')),
    category:b.category || '', order: typeof b.order === 'number' ? b.order : i,
    when: normalizeWhen(b.when),
    if: Array.isArray(b.if) ? b.if : [], ifLogic: b.ifLogic === 'OR' ? 'OR' : 'AND',
    then: Array.isArray(b.then) ? b.then : [],
    lastRun: b.lastRun || null, runCount: b.runCount || 0, created: b.created || Date.now()
  })).sort((a,b) => a.order - b.order);

  const limit = Date.now() - TRASH_DAYS * 864e5;
  notes = notes.filter(n => !n.deleted || n.deleted > limit);

  if (localStorage.getItem(KEYS.seeded) !== '1'){
    localStorage.setItem(KEYS.seeded, '1');
  }
  if (blocks.length && blocks.every(b => b.preset && !b.enabled)){
    blocks = [];
  }
  if (typeof prefs.blocksPaused !== 'boolean') prefs.blocksPaused = false;
  if (!prefs.themePalette){
    const t = prefs.theme || 'auto';
    if (t === 'gold' || t === 'gold-dark'){ prefs.themePalette = 'gold'; prefs.themeMode = t.includes('dark') ? 'dark' : 'light'; }
    else if (t === 'fire' || t === 'fire-dark'){ prefs.themePalette = 'fire'; prefs.themeMode = t.includes('dark') ? 'dark' : 'light'; }
    else if (t === 'forest' || t === 'forest-dark'){ prefs.themePalette = 'forest'; prefs.themeMode = t.includes('dark') ? 'dark' : 'light'; }
    else if (t === 'dark'){ prefs.themePalette = 'classic'; prefs.themeMode = 'dark'; }
    else if (t === 'light'){ prefs.themePalette = 'classic'; prefs.themeMode = 'light'; }
    else { prefs.themePalette = 'classic'; prefs.themeMode = 'auto'; }
  }
  if (!prefs.themeMode) prefs.themeMode = 'auto';
  if (!prefs.editorMode) prefs.editorMode = 'source';
  if (!Array.isArray(prefs.customIcons)) prefs.customIcons = [];
  prefs.customIcons = prefs.customIcons.filter(c => c && c.id && Array.isArray(c.pixels)).slice(0, 10);
  if (!Array.isArray(prefs.customColors)) prefs.customColors = [];
  prefs.customColors = prefs.customColors.filter(c => c && c.id && c.hex).slice(0, 12);
  persistNow();
}
let _persistTimer = null;
function persist(){ clearTimeout(_persistTimer); _persistTimer = setTimeout(persistNow, 60); invalidateVisibleCache(); }
function persistNow(){
  try {
    localStorage.setItem(KEYS.notes, JSON.stringify(notes));
    localStorage.setItem(KEYS.folders, JSON.stringify(folders));
    localStorage.setItem(KEYS.statuses, JSON.stringify(statuses));
    localStorage.setItem(KEYS.collections, JSON.stringify(collections));
    localStorage.setItem(KEYS.blocks, JSON.stringify(blocks));
    localStorage.setItem(KEYS.prefs, JSON.stringify(prefs));
  } catch(_){ toast('No se pudo guardar'); }
}
const find = id => notes.find(n => n.id === id);
const findFolder = id => folders.find(f => f.id === id);
const findStatus = id => statuses.find(s => s.id === id) || statuses[0];

function applyTheme(){
  try { clearIconCache(); } catch(_){}

  let palette = prefs.themePalette || 'classic';
  let mode = prefs.themeMode || 'auto';
  if (['classic','gold','fire','forest'].indexOf(palette) === -1) palette = 'classic';
  const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const resolvedMode = mode === 'auto' ? (sysDark ? 'dark' : 'light') : mode;
  document.documentElement.dataset.palette = palette;
  if (resolvedMode === 'dark') document.documentElement.dataset.mode = 'dark';
  else delete document.documentElement.dataset.mode;

  (function(){
    const map = {
      classic: {
        light:{slate:'#E4E7EF',sky:'#DEE9F2',mint:'#DDEBE2',lilac:'#E5DFEE',rose:'#F2DFE5',amber:'#F2E8D2'},
        dark:{slate:'#252A36',sky:'#1E2A36',mint:'#1E2C28',lilac:'#282436',rose:'#322228',amber:'#322E1E'}
      },
      gold: {
        light:{slate:'#E8E2D4',sky:'#E4E8DC',mint:'#E0E8D8',lilac:'#E8E0DC',rose:'#F0E0D8',amber:'#F5E8C8'},
        dark:{slate:'#2A261C',sky:'#26281E',mint:'#22281C',lilac:'#2A241E',rose:'#2E201C',amber:'#2E2818'}
      },
      fire: {
        light:{slate:'#EDE4E0',sky:'#EDE6E0',mint:'#E8E8DC',lilac:'#EDE0E6',rose:'#F5DCD8',amber:'#F5E4D0'},
        dark:{slate:'#2C201C',sky:'#2A221C',mint:'#28241A',lilac:'#2C1E24',rose:'#321C1A',amber:'#322818'}
      },
      forest: {
        light:{slate:'#E0E8E4',sky:'#DCE8E4',mint:'#D4E8DC',lilac:'#E0E4E8',rose:'#E8E0E0',amber:'#E8E8D4'},
        dark:{slate:'#1E2824',sky:'#1C2826',mint:'#1A2C24',lilac:'#1E2428',rose:'#281E1E',amber:'#28281A'}
      }
    };
    const bag = (map[palette] || map.classic)[resolvedMode] || map.classic.light;
    const root = document.documentElement;
    Object.keys(bag).forEach(k => root.style.setProperty('--n-'+k, bag[k]));
  })();

  delete document.documentElement.dataset.theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta){
    const lightMeta = { classic:'#F6F5F2', gold:'#F7F3E8', fire:'#FBF6F3', forest:'#F2F6F3' };
    meta.setAttribute('content', resolvedMode === 'dark' ? '#0E0F12' : (lightMeta[palette] || '#F6F5F2'));
  }
}
try {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
} catch(_){
  try { window.matchMedia('(prefers-color-scheme: dark)').addListener(applyTheme); } catch(__){}
}

function visibleNotes(global){
  if (_visibleCache && !global && query === _visibleCache.query &&
      JSON.stringify(view) === _visibleCache.viewKey && prefs.sort === _visibleCache.sort) {
    return _visibleCache.list;
  }
  const q = query.trim().toLowerCase();
  let list = notes.filter(n => {
    if (global) return !n.deleted;
    if (view.type === 'trash') return !!n.deleted;
    if (n.deleted) return false;
    if (view.type === 'archived') return n.archived;
    if (n.archived) return false;
    if (view.type === 'pinned') return n.pinned;
    if (view.type === 'tag') return noteTags(n).indexOf(view.tag) !== -1;
    if (view.type === 'folder') return n.folderId === view.folderId;
    if (view.type === 'status') return n.status === view.status;
    if (view.type === 'collection'){
      const c = collections.find(x => x.id === view.collectionId);
      if (!c) return true;
      const cq = (c.query || '').trim().toLowerCase();
      if (!cq) return true;
      return noteSearchText(n).includes(cq) || noteTags(n).some(t => t.toLowerCase().includes(cq));
    }
    return true;
  });
  if (q) list = list.filter(n => noteSearchText(n).includes(q));
  if (view.type === 'trash' && !global){
    list.sort((a,b) => b.deleted - a.deleted);
  } else {
    const pin = (a,b) => b.pinned - a.pinned;
    const sort = prefs.sort || 'modified';
    if (sort === 'created') list.sort((a,b) => pin(a,b) || b.created - a.created);
    else if (sort === 'title-asc') list.sort((a,b) => pin(a,b) || stripMd(noteTitle(a)).localeCompare(stripMd(noteTitle(b)), 'es'));
    else if (sort === 'title-desc') list.sort((a,b) => pin(a,b) || stripMd(noteTitle(b)).localeCompare(stripMd(noteTitle(a)), 'es'));
    else list.sort((a,b) => pin(a,b) || b.modified - a.modified);
  }
  if (!global) _visibleCache = { query, viewKey: JSON.stringify(view), sort: prefs.sort, list };
  return list;
}
function allTags(){
  const map = new Map();
  notes.forEach(n => {
    if (n.deleted || n.archived) return;
    noteTags(n).forEach(t => map.set(t, (map.get(t)||0) + 1));
  });
  return Array.from(map.entries()).sort((a,b) => (b[1]-a[1]) || a[0].localeCompare(b[0], 'es'));
}
const activeCount = () => notes.filter(n => !n.deleted && !n.archived).length;
const folderCount = id => notes.filter(n => !n.deleted && !n.archived && n.folderId === id).length;
const statusCount = s => notes.filter(n => !n.deleted && !n.archived && n.status === s).length;

/* ===== BLOQUES ===== */
const WHEN_TYPES = {
  'note.create':{label:'Al guardar una nota nueva'},
  'note.open':{label:'Al abrir una nota'},
  'note.close':{label:'Al cerrar una nota'},
  'note.edit':{label:'Al editar una nota'},
  'note.editTitle':{label:'Al cambiar el título'},
  'note.status':{label:'Al cambiar de estado'},
  'note.folder':{label:'Al cambiar de carpeta'},
  'note.tag':{label:'Al cambiar etiquetas'},
  'note.pin':{label:'Al fijar'},
  'note.unpin':{label:'Al desfijar'},
  'note.archive':{label:'Al archivar'},
  'note.unarchive':{label:'Al desarchivar'},
  'note.checklist':{label:'Al marcar o desmarcar una tarea'},
  'note.checklistDone':{label:'Al completar todas las tareas'},
  'note.view':{label:'Tras N segundos en una nota', params:['seconds']},
  'daily':{label:'Cada día a una hora', params:['time']},
  'interval':{label:'Cada N días', params:['days']},
  'inactivity':{label:'Tras N días sin abrir', params:['days']},
  'manual':{label:'Solo manualmente'}
};
const IF_TYPES = {
  'hasTag':{label:'Tiene la etiqueta', params:['tag']},
  'noTag':{label:'No tiene la etiqueta', params:['tag']},
  'hasColor':{label:'Tiene el color', params:['color']},
  'inFolder':{label:'Está en la carpeta', params:['folderId']},
  'noFolder':{label:'No está en ninguna carpeta'},
  'hasStatus':{label:'Tiene el estado', params:['status']},
  'isPinned':{label:'Está fijada'},
  'isNotPinned':{label:'No está fijada'},
  'isArchived':{label:'Está archivada'},
  'titleEmpty':{label:'El título está vacío'},
  'titleStarts':{label:'El título empieza por', params:['text']},
  'titleContains':{label:'El título contiene', params:['text']},
  'titleMatches':{label:'El título coincide con patrón', params:['text']},
  'containsEmail':{label:'Contiene un correo'},
  'containsUrl':{label:'Contiene un enlace'},
  'containsPhone':{label:'Contiene un teléfono'},
  'bodyContains':{label:'El texto contiene', params:['text']},
  'wordCount':{label:'Nº de palabras', params:['op','n']},
  'taskCount':{label:'Nº de tareas', params:['op','n']},
  'taskDoneCount':{label:'Nº de tareas hechas', params:['op','n']},
  'hasUnchecked':{label:'Tiene tareas sin completar'},
  'allTasksDone':{label:'Todas las tareas están hechas'},
  'hasTasks':{label:'Tiene al menos una tarea'},
  'hourBetween':{label:'La hora está entre', params:['from','to']},
  'dayOfWeek':{label:'El día es', params:['days']},
  'viewTime':{label:'Tiempo en vista (seg)', params:['op','n']},
  'ageDays':{label:'Días desde creación', params:['op','n']},
  'modifiedDays':{label:'Días sin modificar', params:['op','n']},
  'wordCountGt':{label:'Tiene más de N palabras (legado)', params:['n'], hidden:true},
  'viewTimeGt':{label:'Tiempo en vista > N (legado)', params:['n'], hidden:true},
  'ageDaysGt':{label:'Creada hace más de N días (legado)', params:['n'], hidden:true},
  'modifiedDaysGt':{label:'Sin modificar más de N días (legado)', params:['n'], hidden:true}
};
const COMPARE_OPS = {
  '>':  (a,b) => a > b,
  '>=': (a,b) => a >= b,
  '<':  (a,b) => a < b,
  '<=': (a,b) => a <= b,
  '=':  (a,b) => a === b,
  '!=': (a,b) => a !== b
};
const OP_LABELS = { '>':'>', '>=':'≥', '<':'<', '<=':'≤', '=':'=', '!=':'≠' };
function cmpNum(a, op, b){
  const fn = COMPARE_OPS[op] || COMPARE_OPS['>'];
  return fn(Number(a) || 0, Number(b) || 0);
}
const THEN_TYPES = {
  'addTag':{label:'Añadir etiqueta', params:['tag']},
  'removeTag':{label:'Quitar etiqueta', params:['tag']},
  'setColor':{label:'Cambiar color', params:['color']},
  'pin':{label:'Fijar'},
  'unpin':{label:'Desfijar'},
  'archive':{label:'Archivar'},
  'unarchive':{label:'Desarchivar'},
  'setFolder':{label:'Mover a carpeta', params:['folderId']},
  'setStatus':{label:'Cambiar estado', params:['status']},
  'prependText':{label:'Añadir texto al inicio', params:['text']},
  'appendText':{label:'Añadir texto al final', params:['text']},
  'prefixTitle':{label:'Prefijo al título', params:['text']},
  'setTitle':{label:'Reemplazar título', params:['text']},
  'appendChecklist':{label:'Añadir tareas al final', params:['text']},
  'clearDoneTasks':{label:'Quitar tareas completadas'},
  'checkAllTasks':{label:'Marcar todas las tareas'},
  'uncheckAllTasks':{label:'Desmarcar todas las tareas'},
  'duplicate':{label:'Duplicar esta nota'},
  'createNote':{label:'Crear nota nueva', params:['text']},
  'runBlock':{label:'Ejecutar otro bloque', params:['blockId']},
  'toast':{label:'Mostrar aviso', params:['text']}
};

function substituteVars(text, note){
  if (!text) return '';
  const f = findFolder(note.folderId);
  const s = findStatus(note.status);
  const st = checkStats(note.text);
  const dateStr = new Date().toLocaleDateString('es');
  const timeStr = new Date().toLocaleTimeString('es',{hour:'2-digit',minute:'2-digit'});
  const words = note.text.trim() ? note.text.trim().split(/\s+/).length : 0;
  return String(text)
    .replace(/\{t[ií]tulo\}|\{title\}/gi, noteTitle(note).slice(0,80) || '')
    .replace(/\{fecha\}|\{date\}/gi, dateStr)
    .replace(/\{hora\}|\{time\}/gi, timeStr)
    .replace(/\{carpeta\}|\{folder\}/gi, f ? f.name : '')
    .replace(/\{estado\}|\{status\}/gi, s ? s.name : '')
    .replace(/\{etiquetas\}|\{tags\}/gi, noteTags(note).map(t => '#'+t).join(' '))
    .replace(/\{n_tareas\}|\{tasks\}/gi, String(st.total))
    .replace(/\{n_hechas\}|\{done\}/gi, String(st.done))
    .replace(/\{palabras\}|\{words\}/gi, String(words));
}

function normalizeWhen(when){
  if (!when) return { mode:'any', events:[{ type:'manual' }] };
  if (Array.isArray(when.events) && when.events.length){
    return { mode: when.mode === 'all' ? 'all' : 'any', events: when.events.map(e => Object.assign({}, e)) };
  }
  const type = when.type;
  if (!type) return { mode:'any', events:[{ type:'manual' }] };
  const ev = { type: type };
  if (when.time != null) ev.time = when.time;
  if (when.days != null) ev.days = when.days;
  if (when.seconds != null) ev.seconds = when.seconds;
  return { mode:'any', events:[ev] };
}
function whenEvents(block){
  return normalizeWhen(block && block.when).events;
}
function whenMatchesEvent(block, eventType){
  const w = normalizeWhen(block && block.when);
  for (let i = 0; i < w.events.length; i++){
    if (w.events[i].type === eventType) return w.events[i];
  }
  return null;
}
function summarizeWhen(when){
  const w = normalizeWhen(when);
  if (!w.events.length) return '—';
  const parts = w.events.map(e => {
    const def = WHEN_TYPES[e.type];
    let s = (def && def.label) || e.type;
    if (e.type === 'daily' && e.time) s += ' · ' + e.time;
    if ((e.type === 'inactivity' || e.type === 'interval') && e.days) s += ' · ' + e.days + 'd';
    if (e.type === 'note.view' && e.seconds) s += ' · ' + e.seconds + 's';
    return s;
  });
  if (parts.length === 1) return parts[0];
  return parts.join(w.mode === 'all' ? ' y ' : ' o ');
}

function blocksRunOn(eventType, note, ctx){
  ctx = ctx || {};
  if (prefs.blocksPaused && eventType !== 'manual') return;
  const now = new Date();
  const sorted = blocks.slice().sort((a,b) => (a.order||0) - (b.order||0));
  const chainDepth = (ctx._chainDepth || 0);
  if (chainDepth > 5) return;
  let anyChanged = false;
  // Dedup toasts: misma acción toast por bloque se emite una sola vez
  const toastEmitted = new Set();
  for (const b of sorted){
    try {
      if (!b.enabled) continue;
      const ev = whenMatchesEvent(b, eventType);
      if (!ev) continue;
      if (b.singleFire && note && note._fired && note._fired[b.id]) continue;
      if (eventType === 'note.view'){
        const need = Number(ev.seconds) || 0;
        const vt = ctx.viewTime != null ? ctx.viewTime : (note.viewTime || 0);
        if (need > 0 && vt < need) continue;
        if (need > 0 && note._viewFired && note._viewFired[b.id]) continue;
      }
      if (!conditionsMatch(b, note, ctx, now)) continue;
      const changes = applyActions(b.then, note, b, Object.assign({}, ctx, { _chainDepth: chainDepth + 1, _toastEmitted: toastEmitted }));
      if (changes.length){
        anyChanged = true;
        b.lastRun = Date.now();
        b.runCount = (b.runCount || 0) + 1;
        if (b.singleFire && note){ note._fired = note._fired || {}; note._fired[b.id] = Date.now(); }
        if (eventType === 'note.view' && Number(ev.seconds) > 0 && note){
          note._viewFired = note._viewFired || {};
          note._viewFired[b.id] = Date.now();
        }
        if (!changes.every(ch => ch === 'toast') && eventType !== 'note.view'){
          const label = b.name || 'Bloque';
          const key = label + '|' + changes.slice(0,3).join(',');
          if (!toastEmitted.has(key)){
            toastEmitted.add(key);
            setTimeout(function(){ toast(label + ' · ' + changes.slice(0,3).join(', ')); }, 30);
          }
        }
      }
    } catch (err){
      console.warn('[bloques] error en', b.name || b.id, err);
    }
  }
  if (anyChanged) persist();
}

function conditionsMatch(block, note, ctx, now){
  const conds = block.if || [];
  if (!conds.length) return true;
  const method = block.ifLogic === 'OR' ? 'some' : 'every';
  return conds[method](function(c){ return conditionNode(c, note, ctx, now); });
}
function conditionNode(c, note, ctx, now){
  if (!c) return true;
  if (c.op === 'AND' || c.op === 'OR' || c.group){
    const kids = c.if || c.children || [];
    if (!kids.length) return true;
    const mode = String(c.op || c.group || 'AND').toUpperCase();
    const method = mode === 'OR' ? 'some' : 'every';
    return kids[method](function(k){ return conditionNode(k, note, ctx, now); });
  }
  return conditionTest(c, note, ctx, now);
}
function conditionTest(c, note, ctx, now){
  const op = c.op || '>';
  const nVal = Number(c.n) || 0;
  switch(c.type){
    case 'hasTag': return noteTags(note).indexOf(c.tag) !== -1;
    case 'noTag': return noteTags(note).indexOf(c.tag) === -1;
    case 'hasColor': return note.color === c.color;
    case 'inFolder': return note.folderId === c.folderId;
    case 'noFolder': return !note.folderId;
    case 'hasStatus': return note.status === c.status;
    case 'isPinned': return !!note.pinned;
    case 'isNotPinned': return !note.pinned;
    case 'isArchived': return !!note.archived;
    case 'titleEmpty': return !(note && note.title != null ? String(note.title).trim() : '');
    case 'titleStarts': return noteTitle(note).toLowerCase().startsWith((c.text||'').toLowerCase());
    case 'titleContains': return noteTitle(note).toLowerCase().includes((c.text||'').toLowerCase());
    case 'titleMatches': {
      try {
        const re = new RegExp(c.text || '', 'i');
        return re.test(noteTitle(note));
      } catch(_){ return noteTitle(note).toLowerCase().includes((c.text||'').toLowerCase()); }
    }
    case 'bodyContains': return note.text.toLowerCase().includes((c.text||'').toLowerCase());
    case 'containsEmail': return /[\w.+-]+@[\w-]+\.[\w.-]+/.test(note.text);
    case 'containsUrl': return /https?:\/\/\S+/.test(note.text);
    case 'containsPhone': return /(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]?)?\d{3,4}[\s.-]?\d{3,4}/.test(note.text);
    case 'wordCount': {
      const w = note.text.trim() ? note.text.trim().split(/\s+/).length : 0;
      return cmpNum(w, op, nVal);
    }
    case 'wordCountGt': {
      const w = note.text.trim() ? note.text.trim().split(/\s+/).length : 0;
      return w > nVal;
    }
    case 'taskCount': return cmpNum(checkStats(note.text).total, op, nVal);
    case 'taskDoneCount': return cmpNum(checkStats(note.text).done, op, nVal);
    case 'hasUnchecked': { const s = checkStats(note.text); return s.total > s.done; }
    case 'allTasksDone': { const s = checkStats(note.text); return s.total > 0 && s.done === s.total; }
    case 'hasTasks': return checkStats(note.text).total > 0;
    case 'hourBetween': {
      const hm = now.getHours()*60 + now.getMinutes();
      const from = toMin(c.from||'00:00'), to = toMin(c.to||'23:59');
      if (from <= to) return hm >= from && hm <= to;
      return hm >= from || hm <= to;
    }
    case 'dayOfWeek': { const d = c.days||[]; return d.indexOf(now.getDay()) !== -1; }
    case 'viewTime': return cmpNum(ctx.viewTime || note.viewTime || 0, op, nVal);
    case 'viewTimeGt': return (ctx.viewTime || note.viewTime || 0) > nVal;
    case 'ageDays': return cmpNum((Date.now() - note.created) / 864e5, op, nVal);
    case 'ageDaysGt': return (Date.now() - note.created) > nVal*864e5;
    case 'modifiedDays': return cmpNum((Date.now() - note.modified) / 864e5, op, nVal);
    case 'modifiedDaysGt': return (Date.now() - note.modified) > nVal*864e5;
  }
  return false;
}
function toMin(t){ const [h,m] = (t||'00:00').split(':').map(Number); return (h||0)*60 + (m||0); }

function applyActions(actions, note, block, ctx){
  const changes = [];
  const toastEmitted = (ctx && ctx._toastEmitted) || new Set();
  for (const a of actions){
    switch(a.type){
      case 'addTag': {
        const t = (a.tag||'').trim().replace(/^#/, '');
        if (!t) break;
        note.tags = Array.isArray(note.tags) ? note.tags : [];
        if (note.tags.indexOf(t) !== -1) break;
        note.tags.push(t);
        changes.push('tag+'+t);
        break;
      }
      case 'removeTag': {
        const t = (a.tag||'').trim().replace(/^#/, ''); if (!t) break;
        const before = (note.tags || []).length;
        note.tags = Array.isArray(note.tags) ? note.tags : [];
        note.tags = note.tags.filter(x => x !== t);
        // Also strip from body/title markdown tags
        const safeT = t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
        const re = new RegExp('(^|[\\s(¿¡"\'])#'+safeT+'(?=\\s|$|[,.;:!?])','gu');
        if (re.test(note.text||'')) note.text = note.text.replace(re,'$1').replace(/\s+/g,' ').trim();
        if (re.test(note.title||'')) note.title = note.title.replace(re,'$1').replace(/\s+/g,' ').trim();
        // Solo marcar cambio si realmente había algo que quitar
        if (note.tags.length !== before || parseTags(note.text||'').indexOf(t) === -1 && parseTags(note.title||'').indexOf(t) === -1){
          // más laxo: consideramos cambio si el tag estaba en algún lado
          const wasPresent = before !== note.tags.length ||
                            (note.text||'').toLowerCase().indexOf('#'+t.toLowerCase()) === -1;
          if (before !== note.tags.length || (note.title||'').indexOf(t) !== -1) changes.push('tag-'+t);
        } else if (before !== note.tags.length) {
          changes.push('tag-'+t);
        }
        break;
      }
      case 'setColor': note.color = a.color || null; changes.push('color'); break;
      case 'pin': if (!note.pinned){ note.pinned = true; changes.push('pin'); } break;
      case 'unpin': if (note.pinned){ note.pinned = false; changes.push('unpin'); } break;
      case 'archive': if (!note.archived){ note.archived = true; note.pinned = false; changes.push('archive'); } break;
      case 'unarchive': if (note.archived){ note.archived = false; changes.push('unarchive'); } break;
      case 'setFolder':
        if (note.folderId !== (a.folderId || null)){ note.folderId = a.folderId || null; changes.push('folder'); }
        break;
      case 'setStatus': {
        let sid = a.status;
        if (sid && !findStatus(sid)){
          const byName = statuses.find(s => s.name.toLowerCase() === String(sid).toLowerCase());
          if (byName) sid = byName.id;
          else if (/hecho|done|complet/i.test(String(sid))) sid = (statuses.find(s => s.final) || statuses[statuses.length-1] || {}).id;
          else if (/activo|active|idea/i.test(String(sid))) sid = (statuses[0] || {}).id;
        }
        const newStatus = sid || (statuses[0] && statuses[0].id);
        if (note.status !== newStatus){ note.status = newStatus; changes.push('status'); }
        break;
      }
      case 'prependText': { const t = substituteVars((a.text||'').trim(), note); if (t){ note.text = t + '\n\n' + note.text; changes.push('prepend'); } break; }
      case 'appendText': { const t = substituteVars((a.text||'').trim(), note); if (t){ note.text = note.text + '\n\n' + t; changes.push('append'); } break; }
      case 'prefixTitle': {
        const t = substituteVars((a.text||'').trim(), note);
        if (t){
          const cur = noteTitle(note);
          if (!cur.startsWith(t)){
            note.title = (t + ' ' + cur).trim();
            changes.push('prefix');
          }
        }
        break;
      }
      case 'setTitle': {
        const t = substituteVars((a.text||'').trim(), note);
        if (t && note.title !== t){ note.title = t; changes.push('setTitle'); }
        break;
      }
      case 'appendChecklist': {
        const raw = substituteVars((a.text||'').trim(), note);
        if (raw){
          const lines = raw.split('\n').map(l => {
            const s = l.trim();
            if (!s) return '';
            if (/^[-*]\s+\[[ xX]\]/.test(s)) return s;
            return '- [ ] ' + s.replace(/^[-*]\s+/, '');
          }).filter(Boolean);
          if (lines.length){
            note.text = (note.text ? note.text.replace(/\s+$/,'') + '\n\n' : '') + lines.join('\n');
            changes.push('checklist+');
          }
        }
        break;
      }
      case 'clearDoneTasks': {
        const lines = (note.text||'').split('\n');
        const next = lines.filter(l => {
          const m = l.match(CHECK_RE);
          if (!m) return true;
          return m[3].toLowerCase() !== 'x';
        });
        if (next.length !== lines.length){ note.text = next.join('\n'); changes.push('clearDone'); }
        break;
      }
      case 'checkAllTasks': {
        const lines = (note.text||'').split('\n').map(l => {
          const m = l.match(CHECK_RE);
          if (!m) return l;
          return l.replace(/\[[ xX]\]/, '[x]');
        });
        const before = note.text;
        note.text = lines.join('\n');
        if (before !== note.text) changes.push('checkAll');
        break;
      }
      case 'uncheckAllTasks': {
        const lines = (note.text||'').split('\n').map(l => {
          const m = l.match(CHECK_RE);
          if (!m) return l;
          return l.replace(/\[[ xX]\]/, '[ ]');
        });
        const before = note.text;
        note.text = lines.join('\n');
        if (before !== note.text) changes.push('uncheckAll');
        break;
      }
      case 'duplicate': {
        notes.unshift({
          id: uid(),
          title: note.title || '',
          text: note.text,
          tags: Array.isArray(note.tags) ? note.tags.slice() : [],
          pinned:false, archived:false, deleted:null,
          color: note.color, folderId: note.folderId, status: note.status,
          created: Date.now(), modified: Date.now(), openedAt:null, viewTime:0, _fired:{}
        });
        changes.push('duplicate'); break;
      }
      case 'createNote': {
        const t = substituteVars((a.text||'').trim(), note) || ('Nota ' + new Date().toLocaleDateString('es'));
        notes.unshift({
          id: uid(), title:'', text: t, tags: [],
          pinned:false, archived:false, deleted:null,
          color:null, folderId: note.folderId || null, status: statuses[0].id,
          created: Date.now(), modified: Date.now(), openedAt:null, viewTime:0, _fired:{}
        });
        changes.push('createNote'); break;
      }
      case 'runBlock': {
        const target = blocks.find(x => x.id === a.blockId);
        if (target && target.id !== block.id){
          const nested = applyActions(target.then || [], note, target, ctx);
          if (nested.length) changes.push('run:'+target.name);
        }
        break;
      }
      case 'toast': {
        const t = substituteVars(a.text||'', note);
        if (t && !toastEmitted.has(t)){
          toastEmitted.add(t);
          setTimeout(() => toast(t), 200);
          changes.push('toast');
        }
        break;
      }
    }
  }
  if (changes.length){
    note.modified = Date.now();
    invalidateVisibleCache();
    try {
      const h = JSON.parse(localStorage.getItem(KEYS.history) || '[]');
      h.unshift({ blockId:block.id, blockName:block.name, noteId:note.id, at:Date.now(), changes });
      localStorage.setItem(KEYS.history, JSON.stringify(h.slice(0, 80)));
    } catch(_){}
  }
  return changes;
}

function runScheduledBlocks(){
  if (prefs.blocksPaused) return;
  const now = new Date();
  let anyChanged = false;
  blocks.filter(b => b.enabled).forEach(b => {
    try {
      const events = whenEvents(b);
      events.forEach(ev => {
        if (ev.type === 'daily'){
          const t = ev.time || '09:00';
          const [h,m] = t.split(':').map(Number);
          const trigger = new Date(now); trigger.setHours(h||0, m||0, 0, 0);
          if (now < trigger) trigger.setDate(trigger.getDate() - 1);
          if (b.lastRun && b.lastRun >= trigger.getTime()) return;
          const toastEmitted = new Set();
          let any = false;
          notes.filter(n => !n.deleted && !n.archived).forEach(n => {
            if (b.singleFire && n._fired && n._fired[b.id]) return;
            if (conditionsMatch(b, n, {}, now)){
              const ch = applyActions(b.then, n, b, { _toastEmitted: toastEmitted });
              if (ch.length){
                any = true;
                b.runCount = (b.runCount || 0) + 1;
                if (b.singleFire){ n._fired = n._fired || {}; n._fired[b.id] = Date.now(); }
              }
            }
          });
          b.lastRun = Date.now();
          if (any) anyChanged = true;
        }
        if (ev.type === 'inactivity'){
          const days = Number(ev.days) || 30;
          const period = Math.max(days, 1) * 864e5;
          // Throttle: solo evalúa una vez por periodo
          if (b.lastRun && (Date.now() - b.lastRun) < period) return;
          const limit = Date.now() - days * 864e5;
          const toastEmitted = new Set();
          let any = false;
          notes.filter(n => !n.deleted && !n.archived).forEach(n => {
            const ref = n.openedAt || n.created || 0;
            if (ref >= limit) return;
            if (b.singleFire && n._fired && n._fired[b.id]) return;
            if (conditionsMatch(b, n, {}, now)){
              const ch = applyActions(b.then, n, b, { _toastEmitted: toastEmitted });
              if (ch.length){
                any = true;
                b.runCount = (b.runCount || 0) + 1;
                if (b.singleFire){ n._fired = n._fired || {}; n._fired[b.id] = Date.now(); }
              }
            }
          });
          b.lastRun = Date.now();
          if (any) anyChanged = true;
        }
        if (ev.type === 'interval'){
          const days = Math.max(1, Number(ev.days) || 7);
          const period = days * 864e5;
          if (b.lastRun && (Date.now() - b.lastRun) < period) return;
          const toastEmitted = new Set();
          let any = false;
          notes.filter(n => !n.deleted && !n.archived).forEach(n => {
            if (b.singleFire && n._fired && n._fired[b.id]) return;
            if (conditionsMatch(b, n, {}, now)){
              const ch = applyActions(b.then, n, b, { _toastEmitted: toastEmitted });
              if (ch.length){
                any = true;
                b.runCount = (b.runCount || 0) + 1;
                if (b.singleFire){ n._fired = n._fired || {}; n._fired[b.id] = Date.now(); }
              }
            }
          });
          b.lastRun = Date.now();
          if (any) anyChanged = true;
        }
      });
    } catch (err){
      console.warn('[bloques] scheduled error', b.name || b.id, err);
    }
  });
  if (anyChanged) persist();
}

/* ===== RENDER ===== */
function renderTitle(){
  let crumb = '';
  if (view.type === 'folder'){ const f = findFolder(view.folderId); if (f) crumb = f.name; }
  else if (view.type === 'status'){ const s = findStatus(view.status); if (s) crumb = s.name; }
  else if (view.type === 'collection'){ const c = collections.find(x => x.id === view.collectionId); if (c) crumb = c.name; }
  else if (view.type === 'archived') crumb = 'Archivadas';
  else if (view.type === 'trash') crumb = 'Papelera';
  else if (view.type === 'pinned') crumb = 'Fijadas';
  else if (view.type === 'tag') crumb = '#'+view.tag;
  $('#titleMain').textContent = 'Notas';
  const cr = $('#titleCrumb');
  if (crumb){ cr.textContent = crumb; cr.classList.remove('hidden'); } else cr.classList.add('hidden');
}
function chipMatchesView(c){
  if (c.type === 'all') return view.type === 'all';
  if (c.type === 'pinned') return view.type === 'pinned';
  if (c.type === 'archived') return view.type === 'archived';
  if (c.type === 'trash') return view.type === 'trash';
  if (c.type === 'folder') return view.type === 'folder' && view.folderId === c.id;
  if (c.type === 'status') return view.type === 'status' && view.status === c.id;
  if (c.type === 'collection') return view.type === 'collection' && view.collectionId === c.id;
  if (c.type === 'tag') return view.type === 'tag' && view.tag === c.value;
  return false;
}
function chipExists(c){
  if (c.type === 'folder') return !!findFolder(c.id);
  if (c.type === 'status') return !!findStatus(c.id);
  if (c.type === 'collection') return !!collections.find(x => x.id === c.id);
  if (c.type === 'tag') return allTags().some(([t]) => t === c.value);
  return ['all','pinned','archived','trash'].indexOf(c.type) !== -1;
}
function chipHTML(c){
  const on = chipMatchesView(c);
  if (c.type === 'all') return '<button type="button" class="chip'+(on?' active':'')+'" data-chip="'+escAttr(chipKey(c))+'">Todas</button>';
  if (c.type === 'pinned') return '<button type="button" class="chip'+(on?' active':'')+'" data-chip="'+escAttr(chipKey(c))+'">'+icon('pin',13)+'Fijadas</button>';
  if (c.type === 'archived') return '<button type="button" class="chip'+(on?' active':'')+'" data-chip="'+escAttr(chipKey(c))+'">'+icon('archive',13)+'Archivadas</button>';
  if (c.type === 'trash') return '<button type="button" class="chip'+(on?' active':'')+'" data-chip="'+escAttr(chipKey(c))+'">'+icon('trash',13)+'Papelera</button>';
  if (c.type === 'folder'){
    const f = findFolder(c.id); if (!f) return '';
    return '<button type="button" class="chip'+(on?' active':'')+'" data-chip="'+escAttr(chipKey(c))+'">'+icon('folder',13)+esc(f.name)+'</button>';
  }
  if (c.type === 'status'){
    const s = findStatus(c.id); if (!s) return '';
    const n = statusCount(s.id);
    return '<button type="button" class="chip'+(on?' active':'')+'" data-chip="'+escAttr(chipKey(c))+'"><span class="cdot" style="background:var(--n-'+escAttr(s.color)+')"></span>'+esc(s.name)+(n?' '+n:'')+'</button>';
  }
  if (c.type === 'collection'){
    const col = collections.find(x => x.id === c.id); if (!col) return '';
    return '<button type="button" class="chip'+(on?' active':'')+'" data-chip="'+escAttr(chipKey(c))+'">'+icon('star',13)+esc(col.name)+'</button>';
  }
  if (c.type === 'tag') return '<button type="button" class="chip'+(on?' active':'')+'" data-chip="'+escAttr(chipKey(c))+'">#'+esc(c.value)+'</button>';
  return '';
}
function chipKey(c){
  if (c.type === 'folder') return 'folder:'+c.id;
  if (c.type === 'status') return 'status:'+c.id;
  if (c.type === 'collection') return 'collection:'+c.id;
  if (c.type === 'tag') return 'tag:'+c.value;
  return c.type;
}
function renderChips(){
  const el = $('#chips');
  let chips = prefs.chips && prefs.chips.length ? prefs.chips.slice() : defaultChips();
  chips = chips.filter(chipExists);
  if (!chips.length) chips = defaultChips();
  let html = chips.map(chipHTML).join('');
  html += '<button type="button" class="chip chip-edit" id="chipEditBtn" title="Editar barra">'+icon('plus',13)+'Editar</button>';
  el.innerHTML = html;
}

const EMPTY_STATES = {
  all:['note','Sin notas','Toca <b>+</b> o pulsa <kbd>Ctrl</kbd>+<kbd>N</kbd> para empezar.'],
  pinned:['pin','Nada fijado','Desliza una nota a la derecha para fijarla.'],
  archived:['archive','El archivo está vacío','Las notas que archives aparecerán aquí.'],
  trash:['trash','Papelera vacía','Las notas eliminadas se conservan 30 días.'],
  tag:['hash','Sin notas con esta etiqueta','Prueba con otra etiqueta.'],
  search:['search','Sin resultados','Prueba con otras palabras o etiquetas.'],
  folder:['folder','Carpeta vacía','Mueve notas aquí desde el editor.'],
  status:['target','Nada en este estado','Cambia el estado de una nota para verla aquí.'],
  collection:['star','Colección vacía','Añade notas que coincidan con la búsqueda.']
};

function renderList(){
  const el = $('#list');
  el.className = 'list ' + (prefs.view === 'cards' ? 'cards' : prefs.view === 'board' ? 'board' : prefs.view === 'tasks' ? 'tasks' : '');
  const list = visibleNotes();
  if (!list.length){
    let key = view.type;
    if (query.trim()) key = 'search';
    if (!EMPTY_STATES[key]) key = 'all';
    const e = EMPTY_STATES[key];
    el.innerHTML = '<div class="empty"><div class="empty-icon">'+icon(e[0],30)+'</div><h2>'+esc(e[1])+'</h2>'+(e[2]?'<p>'+e[2]+'</p>':'')+'</div>';
    return;
  }
  if (prefs.view === 'board') renderBoard(list);
  else if (prefs.view === 'tasks'){
    const withTasks = list.filter(n => checkStats(n.text).total > 0);
    if (!withTasks.length){
      el.innerHTML = '<div class="empty"><div class="empty-icon">'+icon('checklist',30)+'</div><h2>Sin tareas</h2><p>Las notas con listas <code>- [ ]</code> aparecerán aquí.</p></div>';
    } else {
      el.innerHTML = withTasks.map(n => renderNoteHTML(n, { tasksFocus:true })).join('');
      $$('.note-wrap', el).forEach(attachGestures);
    }
  } else {
    el.innerHTML = list.map(n => renderNoteHTML(n)).join('');
    $$('.note-wrap', el).forEach(attachGestures);
  }
  if (selectedIdx >= list.length) selectedIdx = list.length - 1;
  applySelection();
}
function renderNoteHTML(n, opts){
  opts = opts || {};
  const titleRaw = stripMd(noteTitle(n)).trim();
  let rest = n.text || '';
  if (opts.tasksFocus){
    // Para vista tareas: preservamos el índice de línea original usando data-abs-line
    const lines = (n.text||'').split('\n');
    const kept = [];
    lines.forEach((l, idx) => {
      if (CHECK_RE.test(l)) kept.push({ line: l, abs: idx });
    });
    rest = kept.map(k => k.line).join('\n');
    // Guardamos un mapa para que toggleChecklistRow resuelva
    opts._taskMap = kept.map(k => k.abs);
  }
  const tags = noteTags(n).slice(0, 3);
  const stats = checkStats(n.text);
  const colorAttr = n.color ? ' data-color="'+escAttr(n.color)+'"' : '';
  const colorStyle = (n.color && String(n.color).startsWith('c_')) ? ' style="'+noteColorStyle(n.color)+'"' : '';
  const dateTxt = (view.type === 'trash') ? ('Eliminada ' + fmtDate(n.deleted).toLowerCase()) : fmtDate(n.modified);
  const st = findStatus(n.status);
  const titleDot = statusIconHTML(st, 'sm');
  let meta = '<div class="note-meta">';
  if (stats.total) meta += '<span class="meta-badge">'+icon('checkSquare',12)+' '+stats.done+'/'+stats.total+'</span>';
  if (n.folderId){ const f = findFolder(n.folderId); if (f) meta += '<span class="folder-badge">'+icon('folder',11)+' '+esc(f.name)+'</span>'; }
  tags.forEach(t => { meta += '<span class="tag">#'+esc(t)+'</span>'; });
  meta += '<span class="note-date">'+esc(dateTxt)+'</span></div>';
  let bodyHtml = '';
  if (rest){
    if (opts.tasksFocus && opts._taskMap){
      // Re-render check rows con índice absoluto correcto
      const taskLines = rest.split('\n');
      let inner = '<div class="checklist">';
      taskLines.forEach((line, i) => {
        const m = line.match(CHECK_RE);
        if (!m) return;
        const checked = m[3].toLowerCase() === 'x';
        const abs = opts._taskMap[i] != null ? opts._taskMap[i] : i;
        const svg = checked
          ? '<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>'
          : '';
        inner += '<div class="check-row" data-line="'+abs+'"><span class="check-box'+(checked?' checked':'')+'" role="checkbox" aria-checked="'+checked+'">'+svg+'</span><span class="check-text'+(checked?' done':'')+'">'+renderInline(m[4])+'</span></div>';
      });
      inner += '</div>';
      bodyHtml = '<div class="note-body">'+inner+'</div>';
    } else {
      bodyHtml = '<div class="note-body">'+renderPreview(rest, 0)+'</div>';
    }
  }
  return '<div class="note-wrap" data-id="'+escAttr(n.id)+'">' +
    '<div class="hint hint-left">'+icon(n.pinned ? 'pinFilled' : 'pin', 22)+'</div>' +
    '<div class="hint hint-right">'+icon('archive', 22)+'</div>' +
    '<div class="note"'+colorAttr+colorStyle+'>' +
      '<div class="note-head">' +
        (titleRaw ? '<div class="note-title">'+titleDot+esc(titleRaw)+'</div>' : '<div class="note-title empty">'+titleDot+'Sin título</div>') +
        (n.pinned ? '<span class="pin-dot">'+icon('pinFilled',15)+'</span>' : '') +
      '</div>' + bodyHtml + meta +
    '</div></div>';
}
function renderBoard(list){
  const el = $('#list');
  el.innerHTML = statuses.map(s => {
    const items = list.filter(n => n.status === s.id);
    return '<div class="board-col" data-status="'+escAttr(s.id)+'">' +
      '<div class="board-col-head">'+statusIconHTML(s,'sm')+' '+esc(s.name)+'<span class="n">'+items.length+'</span></div>' +
      '<div class="board-col-body" data-status="'+escAttr(s.id)+'">' +
        (items.length ? items.map(n => renderNoteHTML(n)).join('') : '<div style="padding:20px;text-align:center;color:var(--ink-muted);font-size:12.5px">Vacío</div>') +
      '</div></div>';
  }).join('');
  $$('.note-wrap', el).forEach(attachGestures);
  attachBoardDrag();
}
function render(){
  renderTitle();
  renderChips();
  renderList();
  $('#count').textContent = activeCount();
  if (editor.classList.contains('open')) renderEditorMeta();
}
function applySelection(){
  $$('#list .note').forEach(n => n.classList.remove('sel'));
  if (selectedIdx < 0) return;
  const wrap = $$('#list .note-wrap')[selectedIdx];
  if (wrap){ const nt = wrap.querySelector('.note'); if (nt) nt.classList.add('sel'); }
}

$('#chips').addEventListener('click', e => {
  if (e.target.closest('#chipEditBtn')){ e.preventDefault(); openChipManager(); return; }
  const chip = e.target.closest('.chip');
  if (!chip) return;
  const key = chip.dataset.chip;
  if (!key) return;
  applyChipKey(key);
});
function applyChipKey(key){
  if (key === 'all') view = { type:'all' };
  else if (key === 'pinned') view = { type:'pinned' };
  else if (key === 'archived') view = { type:'archived' };
  else if (key === 'trash') view = { type:'trash' };
  else if (key.indexOf('folder:') === 0) view = { type:'folder', folderId: key.slice(7) };
  else if (key.indexOf('status:') === 0) view = { type:'status', status: key.slice(7) };
  else if (key.indexOf('collection:') === 0) view = { type:'collection', collectionId: key.slice(11) };
  else if (key.indexOf('tag:') === 0) view = { type:'tag', tag: key.slice(4) };
  else view = { type:'all' };
  selectedIdx = -1;
  invalidateVisibleCache();
  render();
}

/* ===== CHIP MANAGER ===== */
function openChipManager(){
  const current = (prefs.chips && prefs.chips.length ? prefs.chips : defaultChips()).filter(chipExists);
  let rows = current.map((c,i) => chipManagerRow(c, i, current.length)).join('');
  if (!rows) rows = '<div style="padding:10px 4px;color:var(--ink-muted);font-size:13px">Sin chips. Añade uno.</div>';
  openSheet('Barra rápida', [
    { icon:'plusCircle', label:'Añadir chip…', action: () => { setTimeout(openAddChipSheet, 180); } },
    { sep:true },
    { icon:'info', label:'Los cambios se guardan al instante', action: () => {} }
  ], {
    html: rows,
    onMount: root => {
      $$('[data-chip-act]', root).forEach(btn => {
        btn.addEventListener('click', ev => {
          ev.stopPropagation();
          const act = btn.dataset.chipAct;
          const i = Number(btn.dataset.i);
          const arr = (prefs.chips && prefs.chips.length ? prefs.chips : defaultChips()).slice();
          if (act === 'up' && i > 0){ const t = arr[i-1]; arr[i-1] = arr[i]; arr[i] = t; }
          else if (act === 'down' && i < arr.length - 1){ const t = arr[i+1]; arr[i+1] = arr[i]; arr[i] = t; }
          else if (act === 'remove'){ arr.splice(i, 1); }
          prefs.chips = arr;
          persist();
          render();
          openChipManager();
        });
      });
    }
  });
}
function chipManagerRow(c, i, len){
  const label = chipLabel(c);
  const color = chipColor(c);
  return '<div class="chipmgr-row">' +
    (color ? '<span class="cdot" style="background:var(--n-'+escAttr(color)+')"></span>' : '<span style="width:9px"></span>') +
    '<span class="label">'+esc(label)+'</span>' +
    '<div class="acts">' +
      '<button type="button" data-chip-act="up" data-i="'+i+'" title="Subir" '+(i===0?'disabled style="opacity:.35"':'')+'>'+icon('chevUp',14)+'</button>' +
      '<button type="button" data-chip-act="down" data-i="'+i+'" title="Bajar" '+(i===len-1?'disabled style="opacity:.35"':'')+'>'+icon('chevDown',14)+'</button>' +
      '<button type="button" class="danger" data-chip-act="remove" data-i="'+i+'" title="Quitar">'+icon('close',14)+'</button>' +
    '</div>' +
  '</div>';
}
function chipLabel(c){
  if (c.type === 'all') return 'Todas';
  if (c.type === 'pinned') return 'Fijadas';
  if (c.type === 'archived') return 'Archivadas';
  if (c.type === 'trash') return 'Papelera';
  if (c.type === 'folder') return 'Carpeta · ' + (findFolder(c.id)?.name || '');
  if (c.type === 'status') return 'Estado · ' + (findStatus(c.id)?.name || '');
  if (c.type === 'collection') return 'Colección · ' + (collections.find(x => x.id === c.id)?.name || '');
  if (c.type === 'tag') return 'Etiqueta · #' + c.value;
  return c.type;
}
function chipColor(c){ if (c.type === 'status') return findStatus(c.id)?.color || null; return null; }
function openAddChipSheet(){
  const current = prefs.chips && prefs.chips.length ? prefs.chips : defaultChips();
  const currentKeys = new Set(current.map(chipKey));
  const items = [];
  items.push({ icon: currentKeys.has('all') ? 'checkSquare' : 'square', label:'Todas', action: () => { addChip({type:'all'}); } });
  items.push({ icon: currentKeys.has('pinned') ? 'checkSquare' : 'square', label:'Fijadas', action: () => { addChip({type:'pinned'}); } });
  items.push({ icon: currentKeys.has('archived') ? 'checkSquare' : 'square', label:'Archivadas', action: () => { addChip({type:'archived'}); } });
  items.push({ icon: currentKeys.has('trash') ? 'checkSquare' : 'square', label:'Papelera', action: () => { addChip({type:'trash'}); } });
  if (folders.length){
    items.push({ sep:true });
    items.push({ icon:'folder', label:'— Carpetas —', action: () => {} });
    folders.forEach(f => {
      const key = 'folder:'+f.id;
      items.push({ icon: currentKeys.has(key) ? 'checkSquare' : 'folder', label: f.name, action: () => addChip({type:'folder', id:f.id}) });
    });
  }
  if (statuses.length){
    items.push({ sep:true });
    items.push({ icon:'target', label:'— Estados —', action: () => {} });
    statuses.forEach(s => {
      const key = 'status:'+s.id;
      items.push({ icon: currentKeys.has(key) ? 'checkSquare' : 'target', label: s.name, action: () => addChip({type:'status', id:s.id}) });
    });
  }
  if (collections.length){
    items.push({ sep:true });
    items.push({ icon:'star', label:'— Colecciones —', action: () => {} });
    collections.forEach(c => {
      const key = 'collection:'+c.id;
      items.push({ icon: currentKeys.has(key) ? 'checkSquare' : 'star', label: c.name, action: () => addChip({type:'collection', id:c.id}) });
    });
  }
  const tags = allTags().map(([t]) => t);
  if (tags.length){
    items.push({ sep:true });
    items.push({ icon:'hash', label:'— Etiquetas —', action: () => {} });
    tags.slice(0, 20).forEach(t => {
      const key = 'tag:'+t;
      items.push({ icon: currentKeys.has(key) ? 'checkSquare' : 'hash', label: '#'+t, action: () => addChip({type:'tag', value:t}) });
    });
  }
  openSheet('Añadir chip a la barra', items);
}
function addChip(chip){
  const arr = (prefs.chips && prefs.chips.length ? prefs.chips : defaultChips()).slice();
  const key = chipKey(chip);
  if (arr.some(c => chipKey(c) === key)){ toast('Ya está en la barra'); return; }
  arr.push(chip);
  prefs.chips = arr;
  persist();
  render();
  toast('Chip añadido');
  closeSheet();
  setTimeout(openChipManager, 220);
}

/* ===== GESTURES ===== */
function attachGestures(wrap){
  const note = wrap.querySelector('.note');
  const hl = wrap.querySelector('.hint-left');
  const hr = wrap.querySelector('.hint-right');
  const TH = 76;
  const isTrash = view.type === 'trash';
  const inBoard = prefs.view === 'board';
  let sx=0, sy=0, dx=0, mode='idle', lpTimer=null, pointerId=null;

  function resetVisual(){
    note.style.transition = '';
    note.style.transform = '';
    hl.style.opacity = 0; hr.style.opacity = 0;
  }
  wrap.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (e.target.closest('.check-row')) return;
    if (e.target.closest('a[href]')) return;
    if (mode !== 'idle' || inBoard) return;
    mode = 'pending'; pointerId = e.pointerId;
    sx = e.clientX; sy = e.clientY; dx = 0;
    note.style.transition = 'none';
    if (!isTrash){
      lpTimer = setTimeout(() => {
        if (mode !== 'pending') return;
        mode = 'ignore';
        wrap._longpressed = true;
        setTimeout(() => { wrap._longpressed = false; }, 600);
        note.style.transition = ''; note.style.transform = '';
        hl.style.opacity = 0; hr.style.opacity = 0;
        if (navigator.vibrate) navigator.vibrate(12);
        openNoteSheet(wrap.dataset.id);
      }, 480);
    }
  });
  wrap.addEventListener('pointermove', e => {
    if (mode === 'idle' || mode === 'ignore') return;
    if (e.pointerId !== pointerId) return;
    const mx = e.clientX - sx, my = e.clientY - sy;
    if (mode === 'pending'){
      if (Math.abs(mx) < 7 && Math.abs(my) < 7) return;
      clearTimeout(lpTimer);
      if (Math.abs(mx) > Math.abs(my) * 1.15){
        mode = 'drag-h';
        try { wrap.setPointerCapture(pointerId); } catch(_){}
      } else { mode = 'ignore'; note.style.transition = ''; return; }
    }
    if (mode === 'drag-h'){
      e.preventDefault();
      dx = mx;
      const d = Math.sign(dx) * Math.min(Math.abs(dx), 130);
      note.style.transform = 'translateX(' + d + 'px)';
      const p = Math.min(Math.abs(dx) / TH, 1);
      hl.style.opacity = dx > 0 ? p : 0;
      hr.style.opacity = dx < 0 ? p : 0;
    }
  }, { passive:false });
  function end(e){
    if (mode === 'idle') return;
    if (e.pointerId !== undefined && e.pointerId !== pointerId) return;
    clearTimeout(lpTimer);
    const wasDrag = mode === 'drag-h' && Math.abs(dx) > TH;
    if (wasDrag){
      wrap._swiped = true;
      setTimeout(() => { wrap._swiped = false; }, 400);
      if (dx > 0) togglePin(wrap.dataset.id);
      else archiveNote(wrap.dataset.id);
    }
    mode = 'idle'; pointerId = null;
    resetVisual();
  }
  wrap.addEventListener('pointerup', end);
  wrap.addEventListener('pointercancel', end);
  wrap.addEventListener('lostpointercapture', end);
}
function attachBoardDrag(){
  if (prefs.view !== 'board') return;
  $$('#list .note-wrap').forEach(wrap => {
    wrap.style.touchAction = 'none';
    const note = wrap.querySelector('.note');
    let dragging=false, startX=0, startY=0, ghost=null, currentCol=null, pointerId=null;
    wrap.addEventListener('pointerdown', e => {
      if (e.target.closest('.check-row')) return;
      if (e.target.closest('a[href]')) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      pointerId = e.pointerId; startX = e.clientX; startY = e.clientY;
      wrap._dragTimer = setTimeout(() => {
        dragging = true;
        note.style.transition = 'none';
        ghost = note.cloneNode(true);
        const r = note.getBoundingClientRect();
        Object.assign(ghost.style, {
          position:'fixed', left:r.left+'px', top:r.top+'px', width:r.width+'px',
          zIndex:'999', pointerEvents:'none', transform:'rotate(-1.5deg)',
          boxShadow:'var(--sh-lift)', opacity:'.95'
        });
        document.body.appendChild(ghost);
        note.style.opacity = '.25';
        if (navigator.vibrate) navigator.vibrate(8);
      }, 260);
    });
    wrap.addEventListener('pointermove', e => {
      if (!dragging){
        if (Math.abs(e.clientX - startX) > 8 || Math.abs(e.clientY - startY) > 8)
          clearTimeout(wrap._dragTimer);
        return;
      }
      e.preventDefault();
      if (!ghost) return;
      const dx = e.clientX - startX, dy = e.clientY - startY;
      ghost.style.transform = 'translate('+dx+'px,'+dy+'px) rotate(-1.5deg)';
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const col = el && el.closest('.board-col-body');
      if (currentCol && currentCol !== col) currentCol.classList.remove('drag-over');
      if (col){ col.classList.add('drag-over'); currentCol = col; } else currentCol = null;
    }, { passive:false });
    function endDrag(){
      clearTimeout(wrap._dragTimer);
      if (!dragging) return;
      dragging = false;
      if (currentCol && currentCol.dataset.status){
        const n = find(wrap.dataset.id);
        if (n && n.status !== currentCol.dataset.status){
          const old = n.status;
          n.status = currentCol.dataset.status;
          n.modified = Date.now();
          persist();
          blocksRunOn('note.status', n, { oldStatus:old });
        }
      }
      if (ghost) ghost.remove();
      if (currentCol) currentCol.classList.remove('drag-over');
      note.style.opacity = ''; note.style.transition = ''; note.style.transform = '';
      ghost = null; currentCol = null;
      render();
    }
    wrap.addEventListener('pointerup', endDrag);
    wrap.addEventListener('pointercancel', endDrag);
  });
}

$('#list').addEventListener('click', e => {
  // Enlaces clicables
  if (e.target.closest('a[href]')) return;
  const row = e.target.closest('.check-row');
  if (row){
    const w = row.closest('.note-wrap');
    if (w && (w._swiped || w._longpressed)) return;
    e.stopPropagation();
    toggleChecklistRow(row);
    return;
  }
  const wrap = e.target.closest('.note-wrap');
  if (!wrap) return;
  if (wrap._swiped || wrap._longpressed){ wrap._swiped = false; wrap._longpressed = false; return; }
  const idx = $$('#list .note-wrap').indexOf(wrap);
  selectedIdx = idx;
  applySelection();
  const id = wrap.dataset.id;
  if (view.type === 'trash') openTrashSheet(id);
  else openEditor(id);
});
function toggleChecklistRow(row){
  const wrap = row.closest('.note-wrap'); if (!wrap) return;
  const n = find(wrap.dataset.id); if (!n) return;
  const idx = Number(row.dataset.line);
  const lines = (n.text || '').split('\n');
  if (idx < 0 || idx >= lines.length) return;
  const m = lines[idx].match(CHECK_RE); if (!m) return;
  const checked = m[3].toLowerCase() === 'x';
  lines[idx] = lines[idx].replace(/\[[ xX]\]/, checked ? '[ ]' : '[x]');
  n.text = lines.join('\n');
  n.modified = Date.now();
  persist();
  blocksRunOn('note.edit', n);
  blocksRunOn('note.checklist', n);
  const st = checkStats(n.text);
  if (st.total > 0 && st.done === st.total) blocksRunOn('note.checklistDone', n);
  const html = renderNoteHTML(n, view.type === 'search' ? {} : (prefs.view === 'tasks' ? { tasksFocus:true } : {}));
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const fresh = tmp.firstElementChild;
  if (fresh){
    wrap.replaceWith(fresh);
    attachGestures(fresh);
  }
  updateFooter();
}

/* ===== ACCIONES ===== */
function togglePin(id){
  const n = find(id); if (!n) return;
  n.pinned = !n.pinned; n.modified = Date.now(); persist();
  blocksRunOn(n.pinned ? 'note.pin' : 'note.unpin', n, { pinned: n.pinned });
  render();
}
function archiveNote(id){
  const n = find(id); if (!n) return;
  n.archived = true; n.pinned = false; n.modified = Date.now();
  persist(); render(); blocksRunOn('note.archive', n); blocksRunOn('note.close', n);
  toast('Nota archivada', 'Deshacer', () => { n.archived = false; persist(); render(); });
}
function unarchiveNote(id){
  const n = find(id); if (!n) return;
  n.archived = false; n.modified = Date.now(); persist(); blocksRunOn('note.unarchive', n); render();
  toast('Nota restaurada', 'Deshacer', () => { n.archived = true; persist(); render(); });
}
function deleteNote(id){
  const n = find(id); if (!n) return;
  n.deleted = Date.now(); n.pinned = false;
  persist(); render();
  toast('Movida a la papelera', 'Deshacer', () => { n.deleted = null; persist(); render(); });
}
function restoreNote(id){ const n = find(id); if (!n) return; n.deleted = null; n.modified = Date.now(); persist(); render(); }
function purgeNote(id){ if (!find(id)) return; notes = notes.filter(x => x.id !== id); persist(); render(); toast('Eliminada definitivamente'); }
function setColor(id, color){
  const n = find(id); if (!n) return;
  n.color = (color === 'none' || !color) ? null : color;
  n.modified = Date.now(); persist(); blocksRunOn('note.edit', n); render();
  if (editingId === id) renderEditorMeta();
}
function noteColorStyle(color){
  if (!color) return '';
  if (COLORS.indexOf(color) !== -1) return 'background:var(--n-'+color+');border-color:transparent';
  if (String(color).startsWith('c_')){
    const cc = (prefs.customColors||[]).find(x => x.id === color.slice(2));
    if (cc) return 'background:'+cc.hex+';border-color:transparent';
  }
  return '';
}
function openCustomColorDialog(noteId){
  if ((prefs.customColors||[]).length >= MAX_CUSTOM_COLORS){
    toast('Máximo ' + MAX_CUSTOM_COLORS + ' colores');
    return;
  }
  openSheet('Nuevo color', [], {
    html: '<div style="padding:8px 14px 14px">'+
      '<label style="font-size:11.5px;font-weight:700;color:var(--ink-muted);text-transform:uppercase;letter-spacing:.6px;display:block;margin-bottom:8px">Nombre</label>'+
      '<input id="ccName" class="block-field" style="width:100%;padding:12px 14px;margin-bottom:12px" placeholder="Ej. Lavanda" autocomplete="off">'+
      '<label style="font-size:11.5px;font-weight:700;color:var(--ink-muted);text-transform:uppercase;letter-spacing:.6px;display:block;margin-bottom:8px">Color</label>'+
      '<input id="ccHex" type="color" value="#C8D4F0" style="width:100%;height:44px;border:0;background:transparent;padding:0">'+
      '<div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end">'+
        '<button type="button" class="chip" id="ccCancel">Cancelar</button>'+
        '<button type="button" class="chip active" id="ccSave">Crear</button>'+
      '</div></div>',
    onMount: root => {
      $('#ccCancel', root).onclick = closeSheet;
      $('#ccSave', root).onclick = () => {
        const name = ($('#ccName', root).value || '').trim() || 'Color';
        const hex = $('#ccHex', root).value || '#C8D4F0';
        const id = uid();
        prefs.customColors = prefs.customColors || [];
        prefs.customColors.push({ id, name, hex });
        persist();
        closeSheet();
        toast('Color creado');
        if (noteId) setColor(noteId, 'c_'+id);
        else render();
      };
    }
  });
}
function openCustomColorsManager(){
  const list = prefs.customColors || [];
  if (!list.length) return toast('No hay colores personalizados');
  openSheet('Mis colores', list.map(cc => ({
    icon: 'palette', label: cc.name || cc.hex, sub: cc.hex,
    action: () => {
      closeSheet();
      setTimeout(() => openSheet(cc.name || 'Color', [
        { icon:'trash', label:'Eliminar', danger:true, action: () => {
          prefs.customColors = prefs.customColors.filter(x => x.id !== cc.id);
          notes.forEach(n => { if (n.color === 'c_'+cc.id) n.color = null; });
          persist(); closeSheet(); toast('Color eliminado'); render();
        }},
        { icon:'close', label:'Cancelar', action: closeSheet }
      ]), 200);
    }
  })));
}

function setStatus(id, status){
  const n = find(id); if (!n || n.status === status) return;
  const old = n.status;
  n.status = status; n.modified = Date.now();
  persist(); blocksRunOn('note.status', n, { oldStatus:old }); render();
}
function setFolder(id, folderId){
  const n = find(id); if (!n) return;
  n.folderId = folderId || null; n.modified = Date.now();
  persist(); blocksRunOn('note.folder', n); render();
}
function duplicateNote(id){
  const n = find(id); if (!n) return;
  notes.unshift({
    id: uid(),
    title: n.title || '',
    text: n.text,
    tags: Array.isArray(n.tags) ? n.tags.slice() : [],
    pinned:false, archived:false, deleted:null,
    color:n.color, folderId:n.folderId, status:n.status,
    created:Date.now(), modified:Date.now(), openedAt:null, viewTime:0, _fired:{}
  });
  persist(); render();
  toast('Nota duplicada');
}

/* ===== EDITOR ===== */
const editor = $('#editor');
const edText = $('#edText');
const edTags = $('#edTags');
const edStatus = $('#edStatus');
const edPin = $('#edPin');
const edBar = $('#edBar');
const edMeta = $('#edMeta');
let edStatusState = 'saved';

function updateFooter(){
  const v = edText.value;
  const words = v.trim() ? v.trim().split(/\s+/).length : 0;
  const stats = checkStats(v);
  const parts = [];
  if (words) parts.push(words + (words === 1 ? ' palabra' : ' palabras'));
  if (stats.total) parts.push(stats.done + '/' + stats.total);
  const left = edStatusState === 'saving' ? 'Guardando…' : 'Guardado';
  edStatus.classList.toggle('saving', edStatusState === 'saving');
  edStatus.innerHTML = '<span class="dot"></span>' + (parts.length ? parts.join(' · ') + ' · ' + left : left);
}
function setStatusState(state){ edStatusState = state; updateFooter(); }
function renderEditorMeta(){
  if (!editingId){ edMeta.innerHTML = ''; return; }
  const n = find(editingId); if (!n) return;
  const st = findStatus(n.status);
  const f = n.folderId ? findFolder(n.folderId) : null;
  let colorDot = '';
  if (n.color && COLORS.indexOf(n.color) !== -1){
    colorDot = '<span class="meta-dot" style="background:var(--n-'+n.color+')"></span>';
  } else if (n.color && String(n.color).startsWith('c_')){
    const cc = (prefs.customColors||[]).find(x => x.id === n.color.slice(2));
    colorDot = '<span class="meta-dot" style="background:'+(cc?cc.hex:'#888')+'"></span>';
  }
  const parts = [];
  if (st) parts.push('<span class="meta-info">'+statusIconHTML(st,'sm')+'<span class="lbl">'+esc(st.name)+'</span></span>');
  if (f) parts.push('<span class="meta-info">'+icon('folder',13)+'<span class="lbl">'+esc(f.name)+'</span></span>');
  else parts.push('<span class="meta-info muted">'+icon('folder',13)+'<span class="lbl">Sin carpeta</span></span>');
  if (colorDot) parts.push('<span class="meta-info">'+colorDot+'</span>');
  edMeta.innerHTML = parts.join('<span class="meta-sep"></span>');
}
function refreshEditorChrome(n){
  edPin.innerHTML = n.pinned ? icon('pinFilled') : icon('pin');
  edPin.classList.toggle('on', !!n.pinned);
  if (typeof edTags !== 'undefined' && edTags) edTags.innerHTML = '';
  renderEditorMeta();
  if (typeof renderEditorTags === 'function') renderEditorTags();
}
function renderEditorTags(){
  if (!editingId) return;
  const n = find(editingId);
  const list = $('#edTagsList');
  const count = $('#edTagsCount');
  if (!list) return;
  if (n && n.tags && n.tags.length > MAX_NOTE_TAGS) n.tags = n.tags.slice(0, MAX_NOTE_TAGS);
  const tags = (n && n.tags) ? n.tags : [];
  if (count) count.textContent = tags.length ? (tags.length + '/' + MAX_NOTE_TAGS) : '';
  list.innerHTML = tags.map(t =>
    '<span class="tag">#'+esc(t)+'<button type="button" data-rm-tag="'+escAttr(t)+'" aria-label="Quitar">×</button></span>'
  ).join('');
}
function addEditorTag(raw){
  const n = find(editingId); if (!n) return;
  const t = String(raw||'').trim().replace(/^#/, '');
  if (!t) return;
  n.tags = Array.isArray(n.tags) ? n.tags : [];
  if (n.tags.indexOf(t) !== -1) return;
  if (n.tags.length >= MAX_NOTE_TAGS){
    toast('Máximo ' + MAX_NOTE_TAGS + ' etiquetas por nota');
    return;
  }
  const before = n.tags.slice();
  n.tags.push(t);
  n.modified = Date.now();
  persist();
  renderEditorTags();
  blocksRunOn('note.tag', n, { tagsBefore: before, tagsAfter: n.tags.slice() });
}
function removeEditorTag(t){
  const n = find(editingId); if (!n) return;
  const before = (n.tags||[]).slice();
  n.tags = (n.tags||[]).filter(x => x !== t);
  // Sincronizar también en título/cuerpo para que commit() no lo reintroduzca
  const safeT = t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const reBody = new RegExp('(^|[\\s(¿¡"\'])#'+safeT+'(?=\\s|$|[,.;:!?])','gu');
  const beforeBody = n.text;
  const beforeTitle = n.title;
  n.text = (n.text||'').replace(reBody, '$1').replace(/\s+/g,' ').trim();
  n.title = (n.title||'').replace(reBody, '$1').replace(/\s+/g,' ').trim();
  // Si el textarea está abierto, sincronizar
  if (editingId === n.id && edText){
    edText.value = n.text;
  }
  const edTitle = $('#edTitle');
  if (editingId === n.id && edTitle && n.title !== beforeTitle){
    edTitle.value = n.title;
  }
  n.modified = Date.now();
  persist();
  renderEditorTags();
  blocksRunOn('note.tag', n, { tagsBefore: before, tagsAfter: n.tags.slice() });
}
function setEditorMode(mode){
  if (['read','live','source'].indexOf(mode) === -1) mode = 'source';
  prefs.editorMode = mode;
  persist();
  const labels = { read:'Lectura', live:'En vivo', source:'Fuente' };
  const btn = $('#edModeBtn');
  if (btn) btn.textContent = labels[mode] || 'Fuente';
  const preview = $('#edPreview');
  const live = $('#edLive');
  const fmt = $('#edFmt');
  if (fmt){
    fmt.classList.toggle('fmt-hidden', mode === 'read');
  }
  if (mode === 'source'){
    edText.classList.remove('hidden');
    if (preview) preview.classList.add('hidden');
    if (live) live.classList.add('hidden');
  } else if (mode === 'live'){
    edText.classList.add('hidden');
    if (preview) preview.classList.add('hidden');
    if (live) live.classList.remove('hidden');
    renderLiveView();
  } else {
    edText.classList.add('hidden');
    if (live) live.classList.add('hidden');
    if (preview) preview.classList.remove('hidden');
    refreshEditorPreview();
  }
  const edTitle = $('#edTitle');
  if (edTitle) edTitle.readOnly = (mode === 'read');
}

function isTableSepLine(line){
  return /^\s*\|?[\s:]*-{3,}[\s:]*(\|[\s:]*-{3,}[\s:]*)+\|?\s*$/.test(line);
}
function parseDocBlocks(text){
  const lines = (text || '').split('\n');
  const blocks = [];
  let i = 0;
  const n = lines.length;
  function push(type, start, end){
    blocks.push({ type, start, end, raw: lines.slice(start, end + 1).join('\n') });
  }
  while (i < n){
    const line = lines[i];
    if (!line.trim()){ push('blank', i, i); i++; continue; }
    if (/^```/.test(line)){
      const start = i; i++;
      while (i < n && !/^```/.test(lines[i])) i++;
      if (i < n) i++;
      push('code', start, Math.min(i, n) - 1);
      continue;
    }
    if (i + 1 < n && line.indexOf('|') !== -1 && isTableSepLine(lines[i+1])){
      const start = i; i += 2;
      while (i < n && lines[i].indexOf('|') !== -1 && lines[i].trim() && !isTableSepLine(lines[i])) i++;
      push('table', start, i - 1);
      continue;
    }
    if (CHECK_RE.test(line)){
      const start = i;
      while (i < n && CHECK_RE.test(lines[i])) i++;
      push('check', start, i - 1);
      continue;
    }
    if (/^(#{1,6})\s+/.test(line)){ push('heading', i, i); i++; continue; }
    if (/^\s*([-*_])\s*\1\s*\1[\s\1]*$/.test(line) || /^\s*([-*_]\s*){3,}$/.test(line)){
      push('hr', i, i); i++; continue;
    }
    if (/^>\s?/.test(line)){
      const start = i;
      while (i < n && /^>\s?/.test(lines[i])) i++;
      push('quote', start, i - 1);
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)){
      const start = i;
      while (i < n && /^\s*[-*]\s+/.test(lines[i]) && !CHECK_RE.test(lines[i])) i++;
      push('ul', start, i - 1);
      continue;
    }
    if (/^\s*\d+[.)]\s+/.test(line)){
      const start = i;
      while (i < n && /^\s*\d+[.)]\s+/.test(lines[i])) i++;
      push('ol', start, i - 1);
      continue;
    }
    const start = i;
    i++;
    while (i < n && lines[i].trim() &&
      !/^(#{1,6})\s+/.test(lines[i]) &&
      !CHECK_RE.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+[.)]\s+/.test(lines[i]) &&
      !/^```/.test(lines[i]) &&
      !(lines[i].indexOf('|') !== -1 && i + 1 < n && isTableSepLine(lines[i+1])) &&
      !(/^\s*([-*_])\s*\1\s*\1[\s\1]*$/.test(lines[i]) || /^\s*([-*_]\s*){3,}$/.test(lines[i]))
    ) i++;
    push('para', start, i - 1);
  }
  if (!blocks.length) blocks.push({ type:'blank', start:0, end:0, raw:'' });
  return blocks;
}
function applyLinesToBody(start, end, newRaw){
  const lines = edText.value.split('\n');
  const next = newRaw.replace(/\s+$/,'').split('\n');
  const out = lines.slice(0, start).concat(next).concat(lines.slice(end + 1));
  edText.value = out.join('\n');
  edText.dispatchEvent(new Event('input'));
}
function parseTableRows(raw){
  return raw.split('\n').filter(l => l.indexOf('|') !== -1);
}
function splitTableCells(line){
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|')) s = s.slice(0, -1);
  return s.split('|').map(c => c.trim());
}
function tableBlockAction(act, start, end){
  const lines = edText.value.split('\n');
  const block = lines.slice(start, end + 1);
  if (block.length < 2) return;
  if (act === 'row'){
    const cols = splitTableCells(block[0]).length;
    block.push('| ' + Array(cols).fill('').join(' | ') + ' |');
  } else if (act === 'col'){
    for (let i = 0; i < block.length; i++){
      if (i === 1 && isTableSepLine(block[i])){
        let s = block[i].trim();
        if (!s.endsWith('|')) s += ' |';
        block[i] = s + ' --- |';
      } else {
        let s = block[i].trim();
        if (!s.endsWith('|')) s += ' |';
        block[i] = s + '  |';
      }
    }
  }
  applyLinesToBody(start, end, block.join('\n'));
  renderLiveView();
}
function renderLiveView(focusStart){
  const live = $('#edLive'); if (!live) return;
  const text = edText.value;
  const blocks = parseDocBlocks(text);
  if (!text.trim()){
    live.innerHTML = '<div class="live-block" data-start="0" data-end="0"><div class="live-ph">Toca para escribir…</div></div>';
  } else {
    live.innerHTML = blocks.map(b => {
      const inner = b.type === 'blank'
        ? '<div class="live-ph">·</div>'
        : renderPreview(b.raw, b.start);
      let tools = '';
      if (b.type === 'table'){
        tools = '<div class="live-table-tools">'+
          '<button type="button" data-tact="row" data-start="'+b.start+'" data-end="'+b.end+'">+ Fila</button>'+
          '<button type="button" data-tact="col" data-start="'+b.start+'" data-end="'+b.end+'">+ Columna</button>'+
        '</div>';
      }
      return '<div class="live-block" data-start="'+b.start+'" data-end="'+b.end+'" data-type="'+b.type+'"><div class="live-view">'+inner+'</div>'+tools+'</div>';
    }).join('');
  }
  $$('.live-table-tools button', live).forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      tableBlockAction(btn.dataset.tact, Number(btn.dataset.start), Number(btn.dataset.end));
    });
  });
  $$('.live-block[data-type="table"]', live).forEach(blockEl => {
    const start = Number(blockEl.dataset.start);
    const end = Number(blockEl.dataset.end);
    const table = blockEl.querySelector('table.md-table');
    if (!table) return;
    table.classList.add('live-table');
    const wrap = document.createElement('div');
    wrap.className = 'live-table-wrap';
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
    const rows = table.querySelectorAll('tr');
    rows.forEach((tr, ri) => {
      tr.querySelectorAll('th,td').forEach((cell, ci) => {
        cell.style.cursor = 'text';
        cell.title = 'Tocar para editar';
        cell.addEventListener('click', e => {
          e.stopPropagation();
          let mdR;
          if (cell.tagName === 'TH') mdR = 0;
          else {
            const bodyRows = Array.from(table.querySelectorAll('tbody tr'));
            const bi = bodyRows.indexOf(tr);
            mdR = bi + 2;
          }
          if (cell.classList.contains('editing')) return;
          const old = cell.textContent;
          cell.classList.add('editing');
          const inp = document.createElement('input');
          inp.value = old;
          cell.textContent = '';
          cell.appendChild(inp);
          inp.focus();
          inp.select();
          const finish = (save) => {
            if (!cell.classList.contains('editing')) return;
            cell.classList.remove('editing');
            const val = save ? inp.value : old;
            const lines = edText.value.split('\n');
            const block = lines.slice(start, end + 1);
            if (mdR >= 0 && mdR < block.length && !isTableSepLine(block[mdR])){
              const cells = splitTableCells(block[mdR]);
              while (cells.length <= ci) cells.push('');
              cells[ci] = val;
              block[mdR] = '| ' + cells.join(' | ') + ' |';
              applyLinesToBody(start, end, block.join('\n'));
            }
            renderLiveView();
          };
          inp.addEventListener('blur', () => finish(true));
          inp.addEventListener('keydown', ev => {
            if (ev.key === 'Enter'){ ev.preventDefault(); inp.blur(); }
            if (ev.key === 'Escape'){ ev.preventDefault(); finish(false); }
          });
        });
      });
    });
  });
  $$('.live-block', live).forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('a[href]')) return;
      if (el.classList.contains('editing')) return;
      if (e.target.closest('.live-table-tools')) return;
      if (e.target.closest('.check-row')){
        e.stopPropagation();
        const row = e.target.closest('.check-row');
        const line = Number(row.dataset.line);
        const lines = edText.value.split('\n');
        if (line < 0 || line >= lines.length) return;
        const m = lines[line].match(CHECK_RE); if (!m) return;
        const checked = m[3].toLowerCase() === 'x';
        lines[line] = lines[line].replace(/\[[ xX]\]/, checked ? '[ ]' : '[x]');
        edText.value = lines.join('\n');
        const n2 = find(editingId);
        if (n2){
          n2.text = edText.value; n2.modified = Date.now(); persist();
          blocksRunOn('note.edit', n2);
          blocksRunOn('note.checklist', n2);
          const st = checkStats(n2.text);
          if (st.total > 0 && st.done === st.total) blocksRunOn('note.checklistDone', n2);
        }
        renderLiveView();
        updateFooter();
        return;
      }
      beginLiveEdit(el);
    });
  });
  if (focusStart != null){
    const target = $$('.live-block', live).find(el => Number(el.dataset.start) === focusStart);
    if (target) beginLiveEdit(target);
  }
}
function beginLiveEdit(el){
  if (!el || el.classList.contains('editing')) return;
  $$('#edLive .live-block.editing').forEach(x => finishLiveEdit(x, false));
  const start = Number(el.dataset.start);
  const end = Number(el.dataset.end);
  const lines = edText.value.split('\n');
  let raw = lines.slice(start, end + 1).join('\n');
  if (el.querySelector('.live-ph') && !edText.value.trim()) raw = '';
  el.classList.add('editing');
  el.innerHTML = '<textarea class="live-edit" rows="1"></textarea>';
  const ta = el.querySelector('.live-edit');
  ta.value = raw;
  const fit = () => { ta.style.height = 'auto'; ta.style.height = Math.max(28, ta.scrollHeight) + 'px'; };
  fit();
  ta.addEventListener('input', fit);
  ta.focus();
  try { ta.setSelectionRange(ta.value.length, ta.value.length); } catch(_){}
  let finished = false;
  const done = (reRender) => {
    if (finished) return;
    finished = true;
    finishLiveEdit(el, reRender !== false);
  };
  ta.addEventListener('blur', () => setTimeout(() => done(true), 80));
  ta.addEventListener('keydown', e => {
    if (e.key === 'Escape'){ e.preventDefault(); done(true); return; }
    if (e.key === 'Enter' && !e.shiftKey){
      const type = el.dataset.type;
      if (type === 'table' || type === 'code' || type === 'quote' || type === 'check' || type === 'ul' || type === 'ol'){
        setTimeout(fit, 0);
        return;
      }
      e.preventDefault();
      const val = ta.value;
      applyLinesToBody(start, end, val);
      const lines2 = edText.value.split('\n');
      const newStart = start + val.split('\n').length;
      lines2.splice(newStart, 0, '');
      edText.value = lines2.join('\n');
      edText.dispatchEvent(new Event('input'));
      finished = true;
      renderLiveView(newStart);
    }
  });
  el._liveTa = ta;
  el._liveStart = start;
  el._liveEnd = end;
}
function finishLiveEdit(el, reRender){
  if (!el || !el.classList.contains('editing')) return;
  const ta = el._liveTa || el.querySelector('.live-edit');
  const start = el._liveStart != null ? el._liveStart : Number(el.dataset.start);
  const end = el._liveEnd != null ? el._liveEnd : Number(el.dataset.end);
  if (ta) applyLinesToBody(start, end, ta.value);
  el.classList.remove('editing');
  if (reRender) renderLiveView();
}
function refreshEditorPreview(){
  const preview = $('#edPreview'); if (!preview) return;
  const n = find(editingId);
  const body = edText.value || (n && n.text) || '';
  preview.innerHTML = body.trim()
    ? renderPreview(body, 0)
    : '<p style="color:var(--ink-muted);font-style:italic">Sin contenido</p>';
  $$('.check-row', preview).forEach(row => {
    row.addEventListener('click', e => {
      e.preventDefault();
      const line = Number(row.dataset.line);
      const lines = edText.value.split('\n');
      if (line < 0 || line >= lines.length) return;
      const m = lines[line].match(CHECK_RE); if (!m) return;
      const checked = m[3].toLowerCase() === 'x';
      lines[line] = lines[line].replace(/\[[ xX]\]/, checked ? '[ ]' : '[x]');
      edText.value = lines.join('\n');
      const n2 = find(editingId);
      if (n2){
        n2.text = edText.value; n2.modified = Date.now(); persist();
        blocksRunOn('note.edit', n2);
        blocksRunOn('note.checklist', n2);
        const st = checkStats(n2.text);
        if (st.total > 0 && st.done === st.total) blocksRunOn('note.checklistDone', n2);
      }
      refreshEditorPreview();
      updateFooter();
    });
  });
}
function insertAtCursor(snippet, opts){
  opts = opts || {};
  const mode = prefs.editorMode || 'source';
  if (mode === 'live'){
    // Insertar como nuevo bloque al final y enfocar
    const cur = edText.value;
    const needsNL = cur.length && !cur.endsWith('\n');
    edText.value = cur + (needsNL ? '\n' : '') + snippet + (opts.nlAfter !== false ? '\n' : '');
    edText.dispatchEvent(new Event('input'));
    renderLiveView();
    const live = $('#edLive');
    const blocks = $$('.live-block', live);
    if (blocks.length) beginLiveEdit(blocks[blocks.length - 1]);
    return;
  }
  if (mode === 'read') setEditorMode('source');
  const s = edText.selectionStart, e = edText.selectionEnd;
  const val = edText.value;
  const before = val.slice(0, s), after = val.slice(e);
  const pad = (before && !before.endsWith('\n') && opts.block) ? '\n' : '';
  const ins = pad + snippet;
  edText.value = before + ins + after;
  const pos = (before + ins).length;
  edText.setSelectionRange(pos, pos);
  edText.focus();
  edText.dispatchEvent(new Event('input'));
}
function insertFormat(kind){
  const map = {
    task: { text: '- [ ] ', block: true },
    ul: { text: '- ', block: true },
    h2: { text: '## ', block: true },
    quote: { text: '> ', block: true },
    hr: { text: '---', block: true, nlAfter: true },
    table: { text: '|  |  |\n| --- | --- |\n|  |  |', block: true },
    code: { text: '```\n\n```', block: true }
  };
  const m = map[kind]; if (!m) return;
  insertAtCursor(m.text, m);
}
function openEditor(id, isNew){
  const n = find(id); if (!n) return;
  editingId = id;
  if (typeof n.title !== 'string') n.title = '';
  if (!Array.isArray(n.tags)) n.tags = [];
  const edTitle = $('#edTitle');
  if (edTitle) edTitle.value = n.title || '';
  edText.value = n.text || '';
  edStatusState = 'saved';
  refreshEditorChrome(n);
  if (typeof renderEditorTags === 'function') renderEditorTags();
  updateFooter();
  if (typeof setEditorMode === 'function') setEditorMode(prefs.editorMode || 'source');
  editor.classList.add('open');
  document.body.style.overflow = 'hidden';
  n.openedAt = Date.now(); n.viewTime = 0;
  persist();
  currentSession.noteId = id;
  currentSession.openedAt = Date.now();
  currentSession.isNew = !!isNew;
  clearInterval(currentSession.timer);
  currentSession.timer = setInterval(() => {
    const nn = find(id); if (!nn) return;
    nn.viewTime = (nn.viewTime || 0) + 1;
    if (nn.viewTime % 5 === 0) blocksRunOn('note.view', nn, { viewTime: nn.viewTime });
    persist();
  }, 1000);
  if (!isNew) blocksRunOn('note.open', n);
  setTimeout(() => {
    const mode = prefs.editorMode || 'source';
    if (mode === 'source'){
      if (!(n.title||'').trim() && edTitle) edTitle.focus();
      else { edText.focus(); edText.setSelectionRange(edText.value.length, edText.value.length); }
    }
  }, 280);
}
function commit(){
  if (!editingId) return;
  const n = find(editingId); if (!n) return;
  const edTitle = $('#edTitle');
  const titleVal = edTitle ? edTitle.value : (n.title || '');
  const bodyVal = edText.value;
  const titleChanged = (n.title || '') !== titleVal;
  const bodyChanged = n.text !== bodyVal;
  if (!titleChanged && !bodyChanged){ setStatusState('saved'); return; }
  const tagsBefore = (n.tags || []).slice();
  n.title = titleVal;
  n.text = bodyVal;
  n.modified = Date.now();
  const inline = parseTags(bodyVal);
  n.tags = Array.isArray(n.tags) ? n.tags : [];
  inline.forEach(t => {
    if (n.tags.indexOf(t) === -1 && n.tags.length < MAX_NOTE_TAGS) n.tags.push(t);
  });
  if (n.tags.length > MAX_NOTE_TAGS) n.tags = n.tags.slice(0, MAX_NOTE_TAGS);
  persist(); setStatusState('saved');
  const before = n.text;
  blocksRunOn('note.edit', n);
  if (titleChanged) blocksRunOn('note.editTitle', n);
  const tagsAfter = (n.tags || []).slice();
  const tagChanged = tagsBefore.length !== tagsAfter.length || tagsBefore.some(t => tagsAfter.indexOf(t) === -1);
  if (tagChanged) blocksRunOn('note.tag', n, { tagsBefore, tagsAfter });
  if (n.text !== before && editor.classList.contains('open') && (prefs.editorMode === 'source')){
    const sel = edText.selectionStart;
    edText.value = n.text;
    try { edText.setSelectionRange(Math.min(sel, edText.value.length), Math.min(sel, edText.value.length)); } catch(_){}
  }
  if (typeof renderEditorTags === 'function') renderEditorTags();
  if (prefs.editorMode !== 'source' && typeof refreshEditorPreview === 'function') refreshEditorPreview();
}
function closeEditor(){
  clearTimeout(saveTimer);
  clearInterval(currentSession.timer);
  commit();
  const n = find(editingId);
  const wasNew = currentSession.isNew;
  if (n){
    const empty = !(n.title||'').trim() && !(n.text||'').trim() && !n.color && !n.pinned && !n.archived && !n.folderId && !(n.tags&&n.tags.length);
    if (empty){
      notes = notes.filter(x => x.id !== n.id); persist();
    } else {
      if (wasNew) blocksRunOn('note.create', n);
      else blocksRunOn('note.close', n);
    }
  }
  editingId = null;
  currentSession.noteId = null;
  currentSession.isNew = false;
  editor.classList.remove('open');
  document.body.style.overflow = '';
  edText.value = '';
  const edTitle = $('#edTitle'); if (edTitle) edTitle.value = '';
  hideTagAuto();
  render();
  if (wasNew) $('#list').scrollTop = 0;
}
function newNote(){
  if (editor.classList.contains('open')) return;
  if (view.type === 'archived' || view.type === 'trash') view = { type:'all' };
  const tags = (view.type === 'tag') ? [view.tag] : [];
  const n = {
    id: uid(), title: '', text: '', tags: tags.slice(),
    pinned:false, archived:false, deleted:null, color:null,
    folderId: view.type === 'folder' ? view.folderId : null,
    status: view.type === 'status' ? view.status : statuses[0].id,
    created:Date.now(), modified:Date.now(), openedAt:null, viewTime:0, _fired:{}
  };
  notes.unshift(n); persist();
  render();
  openEditor(n.id, true);
}
function newNoteWith(text, opts){
  if (view.type === 'archived' || view.type === 'trash') view = { type:'all' };
  opts = opts || {};
  let title = opts.title || '';
  let body = text || '';
  if (!title && body && body.indexOf('\n') === -1 && body.length < 80 && body.indexOf('- [') !== 0){
    title = body; body = '';
  }
  const n = {
    id: uid(), title: title, text: body, tags: Array.isArray(opts.tags) ? opts.tags.slice() : [],
    pinned:false, archived:false, deleted:null, color:null,
    folderId: opts.folderId || (view.type === 'folder' ? view.folderId : null),
    status: opts.status || (view.type === 'status' ? view.status : statuses[0].id),
    created:Date.now(), modified:Date.now(), openedAt:null, viewTime:0, _fired:{}
  };
  notes.unshift(n); persist();
  render();
  openEditor(n.id, true);
  setTimeout(() => {
    if (title && !body){ const t=$('#edTitle'); if(t) t.focus(); }
    else { edText.focus(); edText.setSelectionRange(edText.value.length, edText.value.length); }
  }, 340);
}
edText.addEventListener('input', () => {
  clearTimeout(saveTimer);
  setStatusState('saving');
  checkTagAuto();
  saveTimer = setTimeout(commit, 420);
});
(function bindEditorExtras(){
  const edTitle = $('#edTitle');
  if (edTitle){
    edTitle.addEventListener('input', () => {
      clearTimeout(saveTimer);
      setStatusState('saving');
      saveTimer = setTimeout(commit, 420);
    });
    edTitle.addEventListener('keydown', e => {
      if (e.key === 'Enter'){ e.preventDefault();
        if ((prefs.editorMode||'source') === 'source') edText.focus();
        else if (prefs.editorMode === 'live'){
          const live = $('#edLive'); const b = live && live.querySelector('.live-block');
          if (b) beginLiveEdit(b);
        }
      }
    });
  }
  const modeBtn = $('#edModeBtn');
  if (modeBtn){
    let holdTimer = null, held = false;
    const openModeMenu = () => {
      const cur = prefs.editorMode || 'source';
      const mark = m => cur === m ? 'checkSquare' : 'square';
      openSheet('Modo del editor', [
        { icon: mark('read'), label:'Lectura', sub:'Renderizado · tareas clicables', action: () => { closeSheet(); commit(); setEditorMode('read'); } },
        { icon: mark('live'), label:'En vivo', sub:'Editas el bloque · se renderiza al salir', action: () => { closeSheet(); commit(); setEditorMode('live'); } },
        { icon: mark('source'), label:'Fuente', sub:'Markdown crudo', action: () => { closeSheet(); commit(); setEditorMode('source'); } }
      ]);
    };
    const cycleMode = () => {
      const order = ['source','live','read'];
      const cur = prefs.editorMode || 'source';
      const next = order[(order.indexOf(cur) + 1) % order.length];
      commit();
      setEditorMode(next);
    };
    modeBtn.addEventListener('pointerdown', e => {
      held = false;
      holdTimer = setTimeout(() => { held = true; if (navigator.vibrate) navigator.vibrate(8); openModeMenu(); }, 420);
    });
    modeBtn.addEventListener('pointerup', e => {
      clearTimeout(holdTimer);
      if (!held) cycleMode();
    });
    modeBtn.addEventListener('pointerleave', () => clearTimeout(holdTimer));
    modeBtn.addEventListener('pointercancel', () => clearTimeout(holdTimer));
  }
  const tagsHead = $('#edTagsHead');
  if (tagsHead) tagsHead.addEventListener('click', () => {
    const box = $('#edTagsBox'); if (box){
      box.classList.toggle('collapsed');
      tagsHead.setAttribute('aria-expanded', String(!box.classList.contains('collapsed')));
    }
  });
  const tagsList = $('#edTagsList');
  if (tagsList) tagsList.addEventListener('click', e => {
    const btn = e.target.closest('[data-rm-tag]'); if (!btn) return;
    e.preventDefault();
    removeEditorTag(btn.dataset.rmTag);
  });
  const tagInput = $('#edTagInput');
  if (tagInput){
    tagInput.addEventListener('focus', () => {
      const box = $('#edTagsBox'); if (box) box.classList.remove('collapsed');
    });
    tagInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ','){
        e.preventDefault();
        addEditorTag(e.target.value);
        e.target.value = '';
      }
    });
    tagInput.addEventListener('blur', () => {
      if (tagInput.value.trim()){ addEditorTag(tagInput.value); tagInput.value = ''; }
    });
  }
  const fmt = $('#edFmt');
  if (fmt){
    const iconsFmt = {
      task: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12l3 3 5-6"/></svg>',
      ul: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="5" cy="6" r="1.2" fill="currentColor"/><circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="5" cy="18" r="1.2" fill="currentColor"/></svg>',
      h2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 6v12M12 6v12M5 12h7"/><path d="M16 12h4M18 12v6"/></svg>',
      quote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 8h5v5H9a3 3 0 00-3 3M14 8h5v5h-3a3 3 0 00-3 3"/></svg>',
      hr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 12h16"/></svg>',
      table: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 10h16M4 14h16M10 5v14M14 5v14"/></svg>',
      code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4"/></svg>'
    };
    $$('button[data-fmt]', fmt).forEach(b => {
      const k = b.dataset.fmt;
      if (iconsFmt[k]) b.innerHTML = iconsFmt[k];
      b.addEventListener('click', () => insertFormat(k));
    });
  }
})();

edText.addEventListener('scroll', () => { edBar.classList.toggle('scrolled', edText.scrollTop > 4); });
edText.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey){
    const k = e.key.toLowerCase();
    if (k === 'b'){ e.preventDefault(); wrapSel('**','**'); return; }
    if (k === 'i'){ e.preventDefault(); wrapSel('*','*'); return; }
    if (k === 'e'){ e.preventDefault(); wrapSel('`','`'); return; }
  }
  if (tagAuto.classList.contains('open')){
    if (e.key === 'ArrowDown'){ e.preventDefault(); moveTagSel(1); return; }
    if (e.key === 'ArrowUp'){ e.preventDefault(); moveTagSel(-1); return; }
    if (e.key === 'Enter' || e.key === 'Tab'){ e.preventDefault(); acceptTagSel(); return; }
    if (e.key === 'Escape'){ e.preventDefault(); hideTagAuto(); return; }
  }
  if (e.key === 'Enter' && !e.shiftKey){
    const pos = edText.selectionStart;
    if (pos !== edText.selectionEnd) return;
    const val = edText.value;
    const before = val.slice(0, pos), after = val.slice(pos);
    const lineStart = before.lastIndexOf('\n') + 1;
    const line = before.slice(lineStart);
    const m = line.match(/^(\s*)([-*])\s+\[([ xX])\]\s?(.*)$/);
    if (!m) return;
    const indent = m[1], bullet = m[2];
    const checked = m[3].toLowerCase() === 'x';
    const content = m[4];
    const afterCursorOnLine = after.split('\n')[0];
    if (!checked && content.trim() === '' && afterCursorOnLine.trim() === ''){
      e.preventDefault();
      edText.value = before.slice(0, lineStart) + after;
      const np = lineStart;
      edText.setSelectionRange(np, np);
      edText.dispatchEvent(new Event('input'));
      return;
    }
    if (!checked){
      e.preventDefault();
      const insert = '\n' + indent + bullet + ' [ ] ';
      edText.value = before + insert + after;
      const np = pos + insert.length;
      edText.setSelectionRange(np, np);
      edText.dispatchEvent(new Event('input'));
    }
  }
});
function wrapSel(open, close){
  const s = edText.selectionStart, e = edText.selectionEnd;
  const val = edText.value, sel = val.slice(s, e);
  const before = val.slice(0, s), after = val.slice(e);
  if (before.endsWith(open) && after.startsWith(close)){
    edText.value = before.slice(0, -open.length) + sel + after.slice(close.length);
    const ns = s - open.length;
    edText.setSelectionRange(ns, ns + sel.length);
  } else {
    edText.value = before + open + sel + close + after;
    edText.setSelectionRange(s + open.length, s + open.length + sel.length);
  }
  edText.dispatchEvent(new Event('input'));
}
$('#edBack').addEventListener('click', closeEditor);
edPin.addEventListener('click', () => {
  const n = find(editingId); if (!n) return;
  n.pinned = !n.pinned; n.modified = Date.now();
  persist(); blocksRunOn(n.pinned ? 'note.pin' : 'note.unpin', n, { pinned: n.pinned });
  refreshEditorChrome(n); setStatusState('saved');
});
$('#edColor').addEventListener('click', () => openColorSheet(editingId));
$('#edMore').addEventListener('click', () => {
  const n = find(editingId); if (!n) return;
  openSheet('Opciones de la nota', [
    { icon:'target', label:'Cambiar estado', action: () => { closeSheet(); setTimeout(() => openStatusPicker(editingId), 200); } },
    { icon:'folder', label:'Mover a carpeta', action: () => { closeSheet(); setTimeout(() => openFolderPicker(editingId), 200); } },
    { icon: n.archived ? 'unarchive' : 'archive', label: n.archived ? 'Desarchivar' : 'Archivar',
      action: () => { commit(); n.archived = !n.archived; if (n.archived) n.pinned = false; n.modified = Date.now();
        persist(); blocksRunOn(n.archived ? 'note.archive' : 'note.unarchive', n); closeSheet(); closeEditor(); } },
    { icon:'duplicate', label:'Duplicar',
      action: () => { commit();
        notes.unshift({ id: uid(), title:n.title||'', text:n.text, tags: Array.isArray(n.tags)?n.tags.slice():[],
          pinned:false, archived:false, deleted:null,
          color:n.color, folderId:n.folderId, status:n.status,
          created:Date.now(), modified:Date.now(), openedAt:null, viewTime:0, _fired:{} });
        persist(); closeSheet(); closeEditor(); } },
    { icon:'copy', label:'Copiar texto',
      action: () => { if (navigator.clipboard) navigator.clipboard.writeText(edText.value); closeSheet(); toast('Texto copiado'); } },
    { sep:true },
    { icon:'trash', label:'Eliminar', danger:true,
      action: () => {
        const id = n.id;
        commit();
        editingId = null;
        editor.classList.remove('open');
        document.body.style.overflow = '';
        edText.value = '';
        closeSheet();
        deleteNote(id);
      } }
  ]);
});

/* ===== AUTOCOMPLETADO ===== */
const tagAuto = $('#tagAuto');
let tagSuggestions = [], tagSelIdx = 0, tagReplaceRange = null;
function checkTagAuto(){
  const pos = edText.selectionStart;
  if (pos !== edText.selectionEnd){ hideTagAuto(); return; }
  const before = edText.value.slice(0, pos);
  const m = before.match(/(^|[\s(¿¡"'])#([\p{L}\p{N}_-]*)$/u);
  if (!m){ hideTagAuto(); return; }
  const partial = (m[2] || '').toLowerCase();
  const matches = allTags().map(([t]) => t).filter(t => t.toLowerCase().startsWith(partial) && t.toLowerCase() !== partial).slice(0, 6);
  if (!matches.length){ hideTagAuto(); return; }
  tagSuggestions = matches; tagSelIdx = 0;
  tagReplaceRange = { start: pos - (m[2] || '').length - 1, end: pos };
  renderTagAuto(); tagAuto.classList.add('open');
}
function renderTagAuto(){
  tagAuto.innerHTML = tagSuggestions.map((t,i) =>
    '<button type="button" class="'+(i===tagSelIdx?'sel':'')+'" data-i="'+i+'">'+icon('hash',13)+'<span class="label">#'+esc(t)+'</span></button>'
  ).join('');
}
function moveTagSel(dir){ tagSelIdx = (tagSelIdx + dir + tagSuggestions.length) % tagSuggestions.length; renderTagAuto(); }
function acceptTagSel(){
  const t = tagSuggestions[tagSelIdx];
  if (!t || !tagReplaceRange){ hideTagAuto(); return; }
  const val = edText.value, r = tagReplaceRange;
  edText.value = val.slice(0, r.start) + '#' + t + val.slice(r.end);
  const np = r.start + t.length + 1;
  edText.setSelectionRange(np, np);
  hideTagAuto();
  edText.dispatchEvent(new Event('input'));
}
function hideTagAuto(){ tagAuto.classList.remove('open'); tagSuggestions = []; tagReplaceRange = null; }
tagAuto.addEventListener('click', e => {
  const btn = e.target.closest('button'); if (!btn) return;
  tagSelIdx = Number(btn.dataset.i); acceptTagSel();
});

/* ===== SHEETS + DROPDOWN + TIMEPICKER ===== */
const scrim = $('#scrim');
const sheetEl = $('#sheet');
const sheetBody = $('#sheetBody');
let _sheetOpenFromDrawer = false;

/* TOAST */
let _toastTimer = null;
function toast(msg, actionLabel, actionFn){
  const el = document.getElementById('toast');
  const msgEl = document.getElementById('toastMsg');
  const btn = document.getElementById('toastBtn');
  if (!el || !msgEl) return;
  msgEl.textContent = msg || '';
  if (btn){
    if (actionLabel && actionFn){
      btn.textContent = actionLabel;
      btn.classList.add('show');
      btn.onclick = (e) => { e.stopPropagation(); actionFn(); el.classList.remove('open'); };
    } else {
      btn.textContent = '';
      btn.classList.remove('show');
      btn.onclick = null;
    }
  }
  el.classList.add('open');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => { el.classList.remove('open'); }, actionLabel ? 5000 : 2800);
}

function openSheet(title, items, opts){
  opts = opts || {};
  // Fix z-index: si el drawer está abierto, ciérralo antes para no tapar el sheet
  if (drawerEl && drawerEl.classList.contains('open')){
    _sheetOpenFromDrawer = true;
    drawerEl.classList.remove('open');
    drawerScrim.classList.remove('open');
  } else {
    _sheetOpenFromDrawer = false;
  }
  let html = title ? '<div class="sheet-title">'+esc(title)+'</div>' : '';
  if (opts.html) html += opts.html;
  items.forEach((it, i) => {
    if (it.sep){ html += '<div class="sheet-sep"></div>'; return; }
    html += '<button type="button" class="sheet-item'+(it.danger?' danger':'')+'" data-i="'+i+'">' +
              icon(it.icon, 20) + '<span>'+esc(it.label)+'</span>' +
              (it.sub ? '<span class="sub">'+esc(it.sub)+'</span>' : '') +
            '</button>';
  });
  sheetBody.innerHTML = html;
  sheetBody._items = items;
  scrim.classList.add('open');
  sheetEl.classList.add('open');
  if (opts.onMount) opts.onMount(sheetBody);
}
function closeSheet(){
  closeAllDropdowns();
  scrim.classList.remove('open');
  sheetEl.classList.remove('open');
  // Si la hoja reemplazó al drawer, no reabrimos (comportamiento esperado)
  _sheetOpenFromDrawer = false;
}
sheetBody.addEventListener('click', e => {
  const btn = e.target.closest('.sheet-item');
  if (!btn) return;
  const items = sheetBody._items || [];
  const it = items[Number(btn.dataset.i)];
  if (it && it.action) it.action();
});
scrim.addEventListener('click', closeSheet);

function closeAllDropdowns(){
  document.querySelectorAll('.dd-panel.open, .time-panel.open').forEach(p => {
    p.classList.remove('open');
    setTimeout(() => { if (p.parentNode) p.remove(); }, 180);
  });
}
function openDropdown(anchorEl, options, currentValue, onSelect){
  closeAllDropdowns();
  if (!options.length) options = [{ value:'', label:'Sin opciones' }];
  const panel = document.createElement('div');
  panel.className = 'dd-panel';
  panel.innerHTML = options.map(o => `
    <button type="button" class="dd-opt${o.value === currentValue ? ' sel' : ''}" data-v="${escAttr(o.value)}">
      ${o.color ? `<span class="cdot" style="background:var(--n-${escAttr(o.color)})"></span>` : ''}
      <span class="dd-opt-label">${esc(o.label)}</span>
      ${o.value === currentValue ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="opacity:.9"><path d="M5 12l5 5 9-10"/></svg>' : ''}
    </button>
  `).join('');
  document.body.appendChild(panel);
  const rect = anchorEl.getBoundingClientRect();
  const pw = panel.offsetWidth, ph = panel.offsetHeight;
  const vh = window.innerHeight, vw = window.innerWidth;
  const spaceBelow = vh - rect.bottom;
  let top = (spaceBelow >= ph + 8 || spaceBelow >= rect.top) ? rect.bottom + 4 : rect.top - ph - 4;
  let left = rect.left;
  if (left + pw > vw - 8) left = vw - pw - 8;
  if (left < 8) left = 8;
  if (top < 8) top = 8;
  if (top + ph > vh - 8) top = vh - ph - 8;
  panel.style.left = left + 'px';
  panel.style.top = top + 'px';
  panel.style.minWidth = Math.max(180, Math.min(rect.width, 320)) + 'px';
  requestAnimationFrame(() => panel.classList.add('open'));
  let closed = false;
  function close(){
    if (closed) return; closed = true;
    panel.classList.remove('open');
    setTimeout(() => { if (panel.parentNode) panel.remove(); }, 180);
    document.removeEventListener('mousedown', onDown, true);
    document.removeEventListener('touchstart', onDown, true);
    window.removeEventListener('resize', close);
  }
  function onDown(e){ if (!panel.contains(e.target) && !anchorEl.contains(e.target)) close(); }
  setTimeout(() => {
    document.addEventListener('mousedown', onDown, true);
    document.addEventListener('touchstart', onDown, true);
    window.addEventListener('resize', close);
  }, 0);
  panel.addEventListener('click', e => {
    const opt = e.target.closest('.dd-opt'); if (!opt) return;
    close();
    onSelect(opt.dataset.v);
  });
}
function openTimePicker(anchorEl, currentValue, onSelect){
  closeAllDropdowns();
  const [ch, cm] = (currentValue || '09:00').split(':').map(n => Number(n) || 0);
  const panel = document.createElement('div');
  panel.className = 'time-panel';
  const hours = Array.from({length:24}, (_,i) => i);
  const mins = [0,5,10,15,20,25,30,35,40,45,50,55];
  panel.innerHTML =
    '<div class="time-col" data-col="h"><div class="time-col-label">Hora</div>'+
      hours.map(h => '<button type="button" class="time-opt'+(h===ch?' sel':'')+'" data-h="'+h+'">'+pad2(h)+'</button>').join('')+
    '</div>'+
    '<div class="time-col" data-col="m"><div class="time-col-label">Min</div>'+
      mins.map(m => '<button type="button" class="time-opt'+(m===cm?' sel':'')+'" data-m="'+m+'">'+pad2(m)+'</button>').join('')+
    '</div>';
  document.body.appendChild(panel);
  const rect = anchorEl.getBoundingClientRect();
  const pw = panel.offsetWidth, ph = panel.offsetHeight;
  const vh = window.innerHeight, vw = window.innerWidth;
  const spaceBelow = vh - rect.bottom;
  let top = (spaceBelow >= ph + 8) ? rect.bottom + 4 : Math.max(8, rect.top - ph - 4);
  let left = Math.min(Math.max(8, rect.left), vw - pw - 8);
  panel.style.left = left + 'px';
  panel.style.top = top + 'px';
  requestAnimationFrame(() => {
    panel.classList.add('open');
    panel.querySelectorAll('.time-col').forEach(col => {
      const sel = col.querySelector('.time-opt.sel');
      if (sel) col.scrollTop = sel.offsetTop - col.clientHeight/2 + sel.offsetHeight/2;
    });
  });
  let pickH = ch, pickM = cm, closed = false;
  function close(){
    if (closed) return; closed = true;
    panel.classList.remove('open');
    setTimeout(() => { if (panel.parentNode) panel.remove(); }, 180);
    document.removeEventListener('mousedown', onDown, true);
    document.removeEventListener('touchstart', onDown, true);
    window.removeEventListener('resize', close);
  }
  function onDown(e){ if (!panel.contains(e.target) && !anchorEl.contains(e.target)) close(); }
  setTimeout(() => {
    document.addEventListener('mousedown', onDown, true);
    document.addEventListener('touchstart', onDown, true);
    window.addEventListener('resize', close);
  }, 0);
  panel.addEventListener('click', e => {
    const opt = e.target.closest('.time-opt'); if (!opt) return;
    if (opt.dataset.h !== undefined){
      pickH = Number(opt.dataset.h);
      panel.querySelectorAll('[data-h]').forEach(x => x.classList.toggle('sel', Number(x.dataset.h)===pickH));
    } else if (opt.dataset.m !== undefined){
      pickM = Number(opt.dataset.m);
      panel.querySelectorAll('[data-m]').forEach(x => x.classList.toggle('sel', Number(x.dataset.m)===pickM));
    }
    setTimeout(() => { close(); onSelect(pad2(pickH)+':'+pad2(pickM)); }, 180);
  });
}

function openColorSheet(id){
  const n = find(id); if (!n) return;
  const colors = ['none', ...COLORS];
  let html = '<div class="sheet-title">Color</div><div class="swatches">';
  colors.forEach(c => {
    const sel = n.color === c || (!n.color && c === 'none');
    html += '<button type="button" class="swatch'+(sel?' sel':'')+'" data-c="'+c+'" title="'+(c==='none'?'Sin color':COLOR_LABELS[c])+'">'+(c==='none'?icon('close',16):'')+'</button>';
  });
  (prefs.customColors||[]).forEach(cc => {
    const isSel = n.color === 'c_'+cc.id;
    html += '<button type="button" class="swatch'+(isSel?' sel':'')+'" data-c="c_'+cc.id+'" style="background:'+escAttr(cc.hex)+';border-color:transparent" title="'+escAttr(cc.name||cc.hex)+'"></button>';
  });
  html += '</div>';
  html += '<div class="sheet-sep"></div>';
  html += '<button type="button" class="sheet-item" id="ccCreate"><span>'+icon('plus',20)+'</span><span>Crear color…</span></button>';
  if ((prefs.customColors||[]).length){
    html += '<button type="button" class="sheet-item" id="ccManage"><span>'+icon('sliders',20)+'</span><span>Gestionar colores</span></button>';
  }
  sheetBody.innerHTML = html;
  sheetBody._items = [];
  scrim.classList.add('open');
  sheetEl.classList.add('open');
  $$('.swatch', sheetBody).forEach(sw => sw.addEventListener('click', () => { setColor(id, sw.dataset.c); closeSheet(); }));
  const ccCreate = $('#ccCreate');
  if (ccCreate) ccCreate.addEventListener('click', () => { closeSheet(); setTimeout(() => openCustomColorDialog(id), 200); });
  const ccManage = $('#ccManage');
  if (ccManage) ccManage.addEventListener('click', () => { closeSheet(); setTimeout(openCustomColorsManager, 200); });
}
function openStatusPicker(id){
  const n = find(id); if (!n) return;
  openSheet('Estado', statuses.map(s => ({
    icon: n.status === s.id ? 'checkSquare' : 'square',
    label: s.name,
    action: () => { closeSheet(); setStatus(id, s.id); renderEditorMeta(); }
  })));
}
function openFolderPicker(id){
  const n = find(id); if (!n) return;
  const items = folders.map(f => ({
    icon: n.folderId === f.id ? 'checkSquare' : 'folder',
    label: f.name,
    action: () => { closeSheet(); setFolder(id, f.id); renderEditorMeta(); }
  }));
  items.unshift({ icon: n.folderId === null ? 'checkSquare' : 'square', label:'Sin carpeta',
    action: () => { closeSheet(); setFolder(id, null); renderEditorMeta(); } });
  items.push({ sep:true });
  items.push({ icon:'folderPlus', label:'Nueva carpeta…', action: () => { closeSheet(); setTimeout(() => newFolderDialog(id), 200); } });
  openSheet('Mover a carpeta', items);
}
function openNoteSheet(id){
  const n = find(id); if (!n) return;
  if (view.type === 'trash'){ openTrashSheet(id); return; }
  const f = n.folderId ? findFolder(n.folderId) : null;
  const s = findStatus(n.status);
  openSheet(null, [
    { icon: n.pinned ? 'pinFilled' : 'pin', label: n.pinned ? 'Quitar de fijadas' : 'Fijar arriba',
      action: () => { togglePin(id); closeSheet(); } },
    { icon:'target', label:'Estado', sub: s ? s.name : '',
      action: () => { closeSheet(); setTimeout(() => openStatusPicker(id), 200); } },
    { icon:'folder', label:'Carpeta', sub: f ? f.name : 'Sin carpeta',
      action: () => { closeSheet(); setTimeout(() => openFolderPicker(id), 200); } },
    { icon:'palette', label:'Color',
      action: () => { closeSheet(); setTimeout(() => openColorSheet(id), 200); } },
    { icon: n.archived ? 'unarchive' : 'archive', label: n.archived ? 'Desarchivar' : 'Archivar',
      action: () => { closeSheet(); n.archived ? unarchiveNote(id) : archiveNote(id); } },
    { icon:'duplicate', label:'Duplicar', action: () => { duplicateNote(id); closeSheet(); } },
    { icon:'copy', label:'Copiar texto',
      action: () => { if (navigator.clipboard) navigator.clipboard.writeText(n.text); closeSheet(); toast('Texto copiado'); } },
    { sep:true },
    { icon:'trash', label:'Eliminar', danger:true, action: () => { closeSheet(); deleteNote(id); } }
  ]);
}
function openTrashSheet(id){
  if (!find(id)) return;
  openSheet(null, [
    { icon:'restore', label:'Restaurar', action: () => { closeSheet(); restoreNote(id); } },
    { icon:'trash', label:'Eliminar definitivamente', danger:true, action: () => { closeSheet(); purgeNote(id); } }
  ]);
}
function openSortSheet(){
  const cur = prefs.sort;
  const opts = [
    { v:'modified', label:'Última modificación' },
    { v:'created', label:'Fecha de creación' },
    { v:'title-asc', label:'Título (A–Z)' },
    { v:'title-desc', label:'Título (Z–A)' }
  ];
  openSheet('Ordenar por', opts.map(o => ({
    icon: cur === o.v ? 'checkSquare' : 'square', label: o.label,
    action: () => { prefs.sort = o.v; persist(); closeSheet(); render(); }
  })));
}
function openThemeSheet(){
  const pal = prefs.themePalette || 'classic';
  const mode = prefs.themeMode || 'auto';
  const markP = v => pal === v ? 'checkSquare' : 'square';
  const markM = v => mode === v ? 'checkSquare' : 'square';
  const setPal = v => () => { prefs.themePalette = v; persist(); applyTheme(); closeSheet(); setTimeout(openThemeSheet, 180); };
  const setMode = v => () => { prefs.themeMode = v; persist(); applyTheme(); closeSheet(); setTimeout(openThemeSheet, 180); };
  openSheet('Apariencia', [
    { icon:'info', label:'Temática', action: () => {} },
    { icon: markP('classic'), label:'Clásico', action: setPal('classic') },
    { icon: markP('gold'), label:'Oro', action: setPal('gold') },
    { icon: markP('fire'), label:'Fuego', action: setPal('fire') },
    { icon: markP('forest'), label:'Bosque', action: setPal('forest') },
    { sep:true },
    { icon:'info', label:'Modo', action: () => {} },
    { icon: markM('auto'), label:'Automático', sub:'Sigue el sistema', action: setMode('auto') },
    { icon: markM('light'), label:'Claro', action: setMode('light') },
    { icon: markM('dark'), label:'Oscuro', action: setMode('dark') }
  ]);
}
function openViewSheet(){
  const cur = prefs.view;
  const opts = [
    { v:'list', label:'Lista', icon:'list' },
    { v:'cards', label:'Tarjetas', icon:'grid' },
    { v:'board', label:'Tablero', icon:'columns' },
    { v:'tasks', label:'Tareas', icon:'checklist' }
  ];
  openSheet('Vista', opts.map(o => ({
    icon: cur === o.v ? 'checkSquare' : o.icon, label: o.label,
    action: () => { prefs.view = o.v; persist(); closeSheet(); render(); }
  })));
}
function emptyTrash(){
  const t = notes.filter(n => n.deleted).length;
  if (!t) return toast('La papelera ya está vacía');
  const backup = notes.slice();
  notes = notes.filter(n => !n.deleted);
  persist(); render();
  toast(t + ' nota' + (t>1?'s':'') + ' eliminada' + (t>1?'s':''), 'Deshacer', () => { notes = backup; persist(); render(); });
}

/* ===== FORMULARIOS ===== */
function textInputDialog(title, opts){
  opts = opts || {};
  openSheet(title, [], {
    html:
      '<div style="padding:4px 14px 14px">'+
        (opts.extraHtml || '')+
        '<input id="dlgInput" class="block-field" style="width:100%;padding:12px 14px;font-size:15px;display:block" placeholder="'+escAttr(opts.placeholder||'')+'" value="'+escAttr(opts.value||'')+'" autocomplete="off" spellcheck="false">'+
        '<div style="display:flex;gap:8px;margin-top:14px;justify-content:flex-end">'+
          '<button type="button" class="chip" id="dlgCancel">Cancelar</button>'+
          '<button type="button" class="chip active" id="dlgSave">'+esc(opts.confirmText||'Guardar')+'</button>'+
        '</div>'+
      '</div>',
    onMount: root => {
      const inp = $('#dlgInput', root);
      inp.focus(); inp.select();
      const save = () => {
        const v = inp.value.trim();
        if (!v){ inp.focus(); return; }
        if (opts.onSave) opts.onSave(v);
        closeSheet();
      };
      $('#dlgCancel', root).onclick = closeSheet;
      $('#dlgSave', root).onclick = save;
      inp.addEventListener('keydown', e => { if (e.key === 'Enter'){ e.preventDefault(); save(); } });
      if (opts.afterMount) opts.afterMount(root);
    }
  });
}
function newFolderDialog(afterId){
  closeDrawer();
  setTimeout(() => textInputDialog('Nueva carpeta', {
    placeholder:'Nombre de la carpeta',
    confirmText:'Crear',
    onSave: name => {
      const f = { id: uid(), name, created: Date.now(), order: folders.length };
      folders.push(f);
      const arr = (prefs.chips && prefs.chips.length ? prefs.chips : defaultChips()).slice();
      if (!arr.some(c => c.type==='folder' && c.id===f.id)) arr.push({ type:'folder', id: f.id });
      prefs.chips = arr;
      if (afterId){
        const n = find(afterId);
        if (n){ n.folderId = f.id; persist(); renderEditorMeta(); }
      }
      persist();
      render(); renderDrawer();
      toast('Carpeta "' + name + '" creada');
    }
  }), 220);
}

/* ===== DRAWER ===== */
const drawerEl = $('#drawer');
const drawerScrim = $('#drawerScrim');
const drawerBody = $('#drawerBody');

function openDrawer(){ drawerEl.classList.add('open'); drawerScrim.classList.add('open'); renderDrawer(); }
function closeDrawer(){ closeAllDropdowns(); drawerEl.classList.remove('open'); drawerScrim.classList.remove('open'); }
drawerScrim.addEventListener('click', closeDrawer);

function renderDrawer(){
  let html = '';
  html += '<div class="drawer-sec"><div class="drawer-sec-title">Carpetas<button class="add" data-add="folder" title="Nueva carpeta" type="button">'+icon('plus',14)+'</button></div>';
  if (folders.length){
    folders.forEach(f => {
      const on = view.type === 'folder' && view.folderId === f.id;
      html += '<div class="drawer-row'+(on?' active':'')+'" data-nav="folder" data-fid="'+escAttr(f.id)+'">'+
        icon('folder',16)+'<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(f.name)+'</span>'+
        '<span class="n">'+folderCount(f.id)+'</span>'+
        '<span class="actions">'+
          '<button data-folder-act="rename" data-fid="'+escAttr(f.id)+'" title="Renombrar" type="button">'+icon('edit',13)+'</button>'+
          '<button data-folder-act="delete" data-fid="'+escAttr(f.id)+'" title="Eliminar" type="button">'+icon('trash',13)+'</button>'+
        '</span></div>';
    });
  } else {
    html += '<div style="padding:10px 14px;color:var(--ink-muted);font-size:13px">Sin carpetas</div>';
  }
  html += '</div>';

  html += '<div class="drawer-sep"></div><div class="drawer-sec">';
  html += '<div class="drawer-sec-title">Estados <span style="font-weight:500;color:var(--ink-muted);letter-spacing:0;text-transform:none;font-size:11px">'+statuses.length+'/'+MAX_STATUSES+'</span>'+
    (statuses.length < MAX_STATUSES ? '<button class="add" data-add="status" title="Nuevo estado" type="button">'+icon('plus',14)+'</button>' : '<span style="width:22px"></span>')+'</div>';
  statuses.slice().sort((a,b) => a.order - b.order).forEach(s => {
    const on = view.type === 'status' && view.status === s.id;
    html += '<div class="drawer-row'+(on?' active':'')+'" data-nav="status" data-status="'+escAttr(s.id)+'">'+
      statusIconHTML(s,'sm')+
      '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:8px">'+esc(s.name)+
      (s.final ? ' <span style="font-size:10px;color:var(--ink-muted);font-weight:700;letter-spacing:.4px;text-transform:uppercase">final</span>' : '')+'</span>'+
      '<span class="n">'+statusCount(s.id)+'</span>'+
      '<span class="actions">'+
        '<button data-status-act="edit" data-sid="'+escAttr(s.id)+'" title="Editar" type="button">'+icon('edit',13)+'</button>'+
        '<button data-status-act="delete" data-sid="'+escAttr(s.id)+'" title="Eliminar" type="button">'+icon('trash',13)+'</button>'+
      '</span></div>';
  });
  html += '</div>';

  html += '<div class="drawer-sep"></div><div class="drawer-sec">';
  html += '<div class="drawer-sec-title">Colecciones<button class="add" data-add="collection" title="Nueva colección" type="button">'+icon('plus',14)+'</button></div>';
  if (collections.length){
    collections.forEach(c => {
      const on = view.type === 'collection' && view.collectionId === c.id;
      html += '<div class="drawer-row'+(on?' active':'')+'" data-nav="collection" data-cid="'+escAttr(c.id)+'">'+
        icon('star',16)+'<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(c.name)+'</span>'+
        '<span class="actions"><button data-col-act="delete" data-cid="'+escAttr(c.id)+'" title="Eliminar" type="button">'+icon('trash',13)+'</button></span>'+
      '</div>';
    });
  } else {
    html += '<div style="padding:10px 14px;color:var(--ink-muted);font-size:13px">Guarda una búsqueda como colección</div>';
  }
  html += '</div>';

  html += '<div class="drawer-sep"></div><div class="drawer-sec">';
  html += '<div class="drawer-sec-title">Bloques activos<button class="add" data-add="block" title="Nuevo bloque" type="button">'+icon('plus',14)+'</button></div>';
  html += '<button class="drawer-row" data-nav="blocks-pause" type="button">'+
    icon(prefs.blocksPaused ? 'play' : 'zap', 16)+
    '<span style="flex:1;text-align:left">'+(prefs.blocksPaused ? 'Reanudar automatizaciones' : 'Pausar todas las automatizaciones')+'</span></button>';
  const activeBlocks = blocks.slice().sort((a,b) => (a.order||0)-(b.order||0));
  if (activeBlocks.length){
    activeBlocks.forEach(b => {
      html += '<div class="drawer-row" data-block="'+escAttr(b.id)+'">'+
        icon(b.enabled ? 'zap' : 'square', 16)+
        '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap'+(b.enabled?'':';opacity:.55')+'">'+esc(b.name)+'</span>'+
        '<span class="n">'+(b.runCount||0)+'</span>'+
      '</div>';
    });
  } else {
    html += '<div style="padding:10px 14px;color:var(--ink-muted);font-size:13px">Sin bloques activos. Explora la biblioteca o crea uno.</div>';
  }
  html += '<button class="drawer-row" data-nav="block-library" type="button" style="margin-top:4px">'+icon('bulb',16)+'<span style="flex:1;text-align:left">Biblioteca de plantillas</span></button>';
  html += '</div>';

  html += '<div class="drawer-sep"></div><div class="drawer-sec">';
  html += '<div class="drawer-sec-title">Ajustes</div>';
  const themeLabel = 'Tema: ' + ({classic:'Clásico',gold:'Oro',fire:'Fuego',forest:'Bosque'}[prefs.themePalette]||'Clásico') + ' · ' + ({auto:'Auto',light:'Claro',dark:'Oscuro'}[prefs.themeMode]||'Auto');
  const viewLabel = prefs.view === 'list' ? 'Lista' : prefs.view === 'cards' ? 'Tarjetas' : prefs.view === 'board' ? 'Tablero' : prefs.view === 'tasks' ? 'Tareas' : 'Lista';
  html += '<button class="drawer-row" data-nav="chipmgr" type="button">'+icon('sliders',16)+'<span style="flex:1;text-align:left">Editar barra rápida</span></button>';
  html += '<button class="drawer-row" data-nav="theme" type="button">'+icon('palette',16)+'<span style="flex:1;text-align:left">'+themeLabel+'</span></button>';
  html += '<button class="drawer-row" data-nav="sort" type="button">'+icon('sort',16)+'<span style="flex:1;text-align:left">Ordenar notas</span></button>';
  html += '<button class="drawer-row" data-nav="view" type="button">'+icon('grid',16)+'<span style="flex:1;text-align:left">Vista: '+viewLabel+'</span></button>';
  html += '</div>';

  html += '<div class="drawer-sep"></div><div class="drawer-sec">';
  html += '<button class="drawer-row" data-nav="export-md" type="button">'+icon('fileText',16)+'<span style="flex:1;text-align:left">Exportar Markdown</span></button>';
  html += '<button class="drawer-row" data-nav="export-json" type="button">'+icon('download',16)+'<span style="flex:1;text-align:left">Exportar JSON</span></button>';
  html += '<button class="drawer-row" data-nav="import-json" type="button">'+icon('upload',16)+'<span style="flex:1;text-align:left">Importar JSON</span></button>';
  html += '<button class="drawer-row" data-nav="trash-empty" style="color:var(--warn)" type="button">'+icon('erase',16)+'<span style="flex:1;text-align:left">Vaciar papelera</span></button>';
  html += '</div>';

  drawerBody.innerHTML = html;
}

drawerBody.addEventListener('click', e => {
  const addBtn = e.target.closest('[data-add]');
  if (addBtn){
    e.stopPropagation();
    const t = addBtn.dataset.add;
    if (t === 'folder') newFolderDialog();
    else if (t === 'collection'){ closeDrawer(); setTimeout(() => newCollectionDialog(), 200); }
    else if (t === 'block'){ closeDrawer(); setTimeout(() => openBlockWizard(), 200); }
    else if (t === 'status') newStatusDialog();
    return;
  }
  const fAct = e.target.closest('[data-folder-act]');
  if (fAct){
    e.stopPropagation();
    const id = fAct.dataset.fid; const f = findFolder(id);
    if (!f) return;
    if (fAct.dataset.folderAct === 'rename'){
      textInputDialog('Renombrar carpeta', {
        value: f.name, confirmText:'Guardar',
        onSave: v => { f.name = v; persist(); renderDrawer(); render(); }
      });
    } else if (fAct.dataset.folderAct === 'delete'){
      openSheet('Eliminar carpeta', [
        { icon:'folder', label:'Solo la carpeta (las notas se mantienen)',
          action: () => {
            folders = folders.filter(x => x.id !== id);
            notes.forEach(n => { if (n.folderId === id) n.folderId = null; });
            if (prefs.chips){ prefs.chips = prefs.chips.filter(c => !(c.type==='folder' && c.id===id)); }
            persist(); closeSheet(); closeDrawer(); render();
          } },
        { icon:'trash', label:'Carpeta y sus notas', danger:true,
          action: () => {
            folders = folders.filter(x => x.id !== id);
            notes = notes.filter(n => n.folderId !== id);
            if (prefs.chips){ prefs.chips = prefs.chips.filter(c => !(c.type==='folder' && c.id===id)); }
            persist(); closeSheet(); closeDrawer(); render();
          } }
      ]);
    }
    return;
  }
  const sAct = e.target.closest('[data-status-act]');
  if (sAct){
    e.stopPropagation();
    const id = sAct.dataset.sid; const s = findStatus(id);
    if (!s) return;
    if (sAct.dataset.statusAct === 'edit') editStatusDialog(s);
    else if (sAct.dataset.statusAct === 'delete') deleteStatusDialog(s);
    return;
  }
  const cAct = e.target.closest('[data-col-act]');
  if (cAct){
    e.stopPropagation();
    const id = cAct.dataset.cid;
    collections = collections.filter(x => x.id !== id);
    if (prefs.chips){ prefs.chips = prefs.chips.filter(c => !(c.type==='collection' && c.id===id)); }
    if (view.collectionId === id) view = { type:'all' };
    persist(); renderDrawer(); render();
    return;
  }
  const blockRow = e.target.closest('[data-block]');
  if (blockRow){ openBlockEditor(blockRow.dataset.block); return; }
  const nav = e.target.closest('[data-nav]');
  if (!nav) return;
  const t = nav.dataset.nav;
  if (t === 'blocks-pause'){
    prefs.blocksPaused = !prefs.blocksPaused;
    persist(); renderDrawer();
    toast(prefs.blocksPaused ? 'Automatizaciones en pausa' : 'Automatizaciones activas');
    return;
  }
  if (t === 'block-library'){
    openBlockLibrary();
    return;
  }
  if (t === 'folder'){ view = { type:'folder', folderId: nav.dataset.fid }; closeDrawer(); selectedIdx=-1; render(); }
  else if (t === 'status'){ view = { type:'status', status: nav.dataset.status }; closeDrawer(); selectedIdx=-1; render(); }
  else if (t === 'collection'){ view = { type:'collection', collectionId: nav.dataset.cid }; closeDrawer(); selectedIdx=-1; render(); }
  else if (t === 'chipmgr'){ closeDrawer(); setTimeout(openChipManager, 220); }
  else if (t === 'theme'){ closeDrawer(); setTimeout(openThemeSheet, 220); }
  else if (t === 'sort'){ closeDrawer(); setTimeout(openSortSheet, 220); }
  else if (t === 'view'){ closeDrawer(); setTimeout(openViewSheet, 220); }
  else if (t === 'export-md'){ closeDrawer(); exportMarkdown(); }
  else if (t === 'export-json'){ closeDrawer(); exportJSON(); }
  else if (t === 'import-json'){ closeDrawer(); $('#fileInput').click(); }
  else if (t === 'trash-empty'){ closeDrawer(); emptyTrash(); }
});

/* ===== ESTADOS ===== */
function statusFormHTML(s){
  s = s || { id: uid(), name:'', icon:'p0', final:false };
  const isNew = !s.name;
  const cur = s.icon || 'p0';
  let grid = '<div class="icon-pick-grid" id="stIconGrid">';
  for (let i = 0; i < 10; i++){
    const id = 'p'+i;
    const fake = { name:'', icon:id };
    grid += '<button type="button" class="'+(cur===id?'sel':'')+'" data-icon="'+id+'" title="Icono '+(i+1)+'">'+statusIconHTML(fake,'')+'</button>';
  }
  (prefs.customIcons || []).forEach(c => {
    const id = 'c_'+c.id;
    const fake = { name:'Custom', icon:id };
    grid += '<button type="button" class="'+(cur===id?'sel':'')+'" data-icon="'+id+'" data-custom="1" title="Personalizado">'+statusIconHTML(fake,'')+
      '<span class="del-ico" data-del-icon="'+escAttr(c.id)+'">×</span></button>';
  });
  grid += '</div>';
  return '<div style="padding:4px 14px 14px">'+
    '<label style="font-size:11.5px;font-weight:700;color:var(--ink-muted);text-transform:uppercase;letter-spacing:.6px;display:block;margin-bottom:8px">Nombre</label>'+
    '<input id="stName" class="block-field" style="width:100%;padding:12px 14px;font-size:15px;display:block;margin-bottom:14px" value="'+escAttr(s.name)+'" placeholder="Ej. En revisión" autocomplete="off" spellcheck="false">'+
    '<label style="font-size:11.5px;font-weight:700;color:var(--ink-muted);text-transform:uppercase;letter-spacing:.6px;display:block;margin-bottom:4px">Icono</label>'+
    '<p style="font-size:11.5px;color:var(--ink-muted);margin:0 0 6px">Mantén pulsado un icono propio para borrarlo</p>'+
    grid +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">'+
      '<button type="button" class="chip" id="stPxNew">Dibujar icono…</button>'+
      '<button type="button" class="chip" id="stPxManage">Mis iconos</button>'+
    '</div>'+
    '<label class="toggle-row" style="display:flex;align-items:center;gap:10px;margin-top:8px;padding:10px 12px;background:var(--surface-2);border:1px solid var(--line);border-radius:9px;cursor:pointer;min-width:100%;text-transform:none;letter-spacing:0;color:var(--ink);font-size:13.5px;font-weight:550">'+
      '<span style="flex:1">Marcar como final</span>'+
      '<span class="toggle'+(s.final?' on':'')+'" id="stFinal" role="switch" aria-checked="'+s.final+'"></span>'+
    '</label>'+
    '<div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end">'+
      '<button type="button" class="chip" id="stCancel">Cancelar</button>'+
      '<button type="button" class="chip active" id="stSave">'+esc(isNew?'Crear':'Guardar')+'</button>'+
    '</div>'+
  '</div>';
}
function statusFormMount(root, s, onSave){
  const inp = $('#stName', root); inp.focus(); inp.select();
  let icon = s.icon || 'p0';
  let isFinal = !!s.final;
  const grid = $('#stIconGrid', root);
  function selectIcon(id){
    icon = id;
    $$('[data-icon]', grid).forEach(x => x.classList.toggle('sel', x.dataset.icon === icon));
  }
  let holdTimer = null;
  grid.addEventListener('pointerdown', e => {
    const del = e.target.closest('[data-del-icon]');
    if (del){
      e.preventDefault(); e.stopPropagation();
      const cid = del.dataset.delIcon;
      prefs.customIcons = (prefs.customIcons||[]).filter(x => x.id !== cid);
      statuses.forEach(st => { if (st.icon === 'c_'+cid) st.icon = 'p0'; });
      if (icon === 'c_'+cid) icon = 'p0';
      try { clearIconCache(); } catch(_){}
      persist();
      const btn = del.closest('button'); if (btn) btn.remove();
      toast('Icono eliminado');
      return;
    }
    const b = e.target.closest('[data-icon]'); if (!b) return;
    if (b.dataset.custom){
      holdTimer = setTimeout(() => { b.classList.add('show-del'); }, 450);
    }
  });
  grid.addEventListener('pointerup', e => {
    clearTimeout(holdTimer);
    const b = e.target.closest('[data-icon]'); if (!b) return;
    if (e.target.closest('[data-del-icon]')) return;
    selectIcon(b.dataset.icon);
  });
  grid.addEventListener('pointerleave', () => clearTimeout(holdTimer));
  grid.addEventListener('click', e => {
    const b = e.target.closest('[data-icon]'); if (!b) return;
    if (e.target.closest('[data-del-icon]')) return;
    selectIcon(b.dataset.icon);
  });
  const tg = $('#stFinal', root);
  const tgLbl = tg.closest('label') || tg;
  tgLbl.addEventListener('click', (e) => {
    e.preventDefault();
    isFinal = !isFinal;
    tg.classList.toggle('on', isFinal);
    tg.setAttribute('aria-checked', String(isFinal));
  });
  $('#stPxNew', root).onclick = () => openPixelEditor(null, (id) => {
    selectIcon('c_'+id);
    const c = (prefs.customIcons||[]).find(x => x.id === id);
    if (c && !grid.querySelector('[data-icon="c_'+id+'"]')){
      const fake = { name:'Custom', icon:'c_'+id };
      const btn = document.createElement('button');
      btn.type = 'button'; btn.dataset.icon = 'c_'+id; btn.dataset.custom = '1'; btn.className = 'sel';
      btn.innerHTML = statusIconHTML(fake,'') + '<span class="del-ico" data-del-icon="'+c.id+'">×</span>';
      grid.appendChild(btn);
      selectIcon('c_'+id);
    }
  });
  $('#stPxManage', root).onclick = () => openCustomIconsManager();
  $('#stCancel', root).onclick = closeSheet;
  const save = () => {
    const name = inp.value.trim();
    if (!name){ inp.focus(); return; }
    onSave({ name, icon, final: isFinal });
  };
  $('#stSave', root).onclick = save;
  inp.addEventListener('keydown', e => { if (e.key === 'Enter'){ e.preventDefault(); save(); } });
}
function newStatusDialog(){
  if (statuses.length >= MAX_STATUSES) return toast('Máximo ' + MAX_STATUSES + ' estados');
  closeDrawer();
  const draft = { id: uid(), name:'', icon:'p0', color:'slate', final:false, order: statuses.length };
  setTimeout(() => openSheet('Nuevo estado', [], {
    html: statusFormHTML(draft),
    onMount: root => statusFormMount(root, draft, ({ name, icon, final }) => {
      draft.name = name; draft.icon = icon; draft.final = final;
      statuses.push(draft);
      persist(); closeSheet(); renderDrawer(); render();
      if (editingId) renderEditorMeta();
      toast('Estado "' + name + '" creado');
    })
  }), 200);
}
function editStatusDialog(s){
  closeDrawer();
  setTimeout(() => openSheet('Editar estado', [], {
    html: statusFormHTML(s),
    onMount: root => statusFormMount(root, s, ({ name, icon, final }) => {
      if (s.final && !final){
        const otherFinals = statuses.filter(x => x.id !== s.id && x.final);
        if (!otherFinals.length){
          const other = statuses.find(x => x.id !== s.id);
          if (other) other.final = true;
        }
      }
      s.name = name; s.icon = icon; s.final = final;
      if (!statuses.some(x => x.final) && statuses.length) statuses[statuses.length-1].final = true;
      persist(); closeSheet(); renderDrawer(); render();
      if (editingId) renderEditorMeta();
      toast('Estado guardado');
    })
  }), 200);
}

function openPixelEditor(existing, onDone){
  if (!existing && (prefs.customIcons||[]).length >= MAX_CUSTOM_ICONS){
    toast('Máximo ' + MAX_CUSTOM_ICONS + ' iconos. Borrá uno primero.');
    openCustomIconsManager();
    return;
  }
  let pixels;
  if (existing && existing.pixels && existing.pixels.length === ICON_SZ*ICON_SZ){
    pixels = existing.pixels.map(v => v > 1 ? v/255 : +v);
  } else if (existing && existing.pixels && existing.pixels.length === 1024){
    pixels = new Array(ICON_SZ*ICON_SZ).fill(0);
    for (let y=0;y<ICON_SZ;y++) for (let x=0;x<ICON_SZ;x++){
      const sx = Math.floor(x/4), sy = Math.floor(y/4);
      pixels[y*ICON_SZ+x] = existing.pixels[sy*32+sx] ? 1 : 0;
    }
  } else {
    pixels = new Array(ICON_SZ*ICON_SZ).fill(0);
  }
  let tool = 'pencil';
  let brushSize = 4;
  let soft = 0.55;
  let zoom = 2.2;
  let panX = 0, panY = 0;
  // AbortController para limpiar listeners globales al cerrar
  const ctl = new AbortController();
  const sig = ctl.signal;
  let cleaned = false;
  function cleanup(){ if (!cleaned){ cleaned = true; ctl.abort(); } }
  openSheet(existing ? 'Editar icono' : 'Nuevo icono 128×128', [], {
    html: '<div class="px-editor">'+
      '<p style="font-size:12px;color:var(--ink-muted);margin:0 0 8px;text-align:center">Blanco suave · 128×128 · se tiñe con el tema</p>'+
      '<div class="px-stage" id="pxStage">'+
        '<div class="px-joy px-joy-pan" id="pxJoyPan" title="Mover"><div class="px-joy-knob" id="pxJoyPanKnob"></div><span class="px-joy-label">Mover</span></div>'+
        '<div class="px-canvas-wrap" id="pxWrap"><div class="px-canvas-inner" id="pxInner"><canvas id="pxCanvas" width="128" height="128"></canvas></div></div>'+
        '<div class="px-joy px-joy-zoom" id="pxJoyZoom" title="Zoom"><div class="px-joy-knob" id="pxJoyZoomKnob"></div><span class="px-joy-label">Zoom</span></div>'+
      '</div>'+
      '<div class="px-sliders">'+
        '<label>Tamaño <input type="range" id="pxSize" min="1" max="24" step="1" value="4"><span id="pxSizeVal">4</span></label>'+
        '<label>Suave <input type="range" id="pxSoft" min="0" max="100" step="1" value="55"><span id="pxSoftVal">55%</span></label>'+
      '</div>'+
      '<div class="px-tools">'+
        '<button type="button" class="on" id="pxDrawTool" title="Tocar para cambiar">✏ Lápiz</button>'+
        '<button type="button" id="pxClear">Limpiar</button>'+
      '</div>'+
      '<div style="display:flex;gap:8px;margin-top:12px;justify-content:flex-end">'+
        '<button type="button" class="chip" id="pxCancel">Cancelar</button>'+
        '<button type="button" class="chip active" id="pxSave">Guardar</button>'+
      '</div></div>',
    onMount: root => {
      const canvas = $('#pxCanvas', root);
      const wrap = $('#pxWrap', root);
      const inner = $('#pxInner', root);
      const ctx = canvas.getContext('2d');
      const stage = $('#pxStage', root);

      function paint(){
        const img = ctx.createImageData(ICON_SZ, ICON_SZ);
        for (let i = 0; i < ICON_SZ*ICON_SZ; i++){
          const o = i*4;
          const a = pixels[i] || 0;
          img.data[o]=255; img.data[o+1]=255; img.data[o+2]=255;
          img.data[o+3] = Math.max(0, Math.min(255, Math.round(a * 255)));
        }
        ctx.putImageData(img, 0, 0);
      }
      function applyTransform(){
        inner.style.transform = 'translate(-50%,-50%) translate('+panX+'px,'+panY+'px) scale('+zoom+')';
      }
      function updateDrawLabel(){
        const btn = $('#pxDrawTool', root);
        if (tool === 'eraser'){ btn.textContent = '⌫ Borrador'; btn.classList.add('on'); }
        else { btn.textContent = '✏ Lápiz'; btn.classList.add('on'); }
      }
      paint(); applyTransform(); updateDrawLabel();

      $('#pxSize', root).oninput = e => {
        brushSize = Number(e.target.value) || 1;
        $('#pxSizeVal', root).textContent = String(brushSize);
      };
      $('#pxSoft', root).oninput = e => {
        soft = (Number(e.target.value) || 0) / 100;
        $('#pxSoftVal', root).textContent = Math.round(soft*100) + '%';
      };
      $('#pxDrawTool', root).onclick = () => {
        tool = (tool === 'pencil') ? 'eraser' : 'pencil';
        updateDrawLabel();
      };
      $('#pxClear', root).onclick = () => {
        for (let i=0;i<pixels.length;i++) pixels[i]=0;
        paint();
      };
      $('#pxCancel', root).onclick = () => { cleanup(); closeSheet(); };
      $('#pxSave', root).onclick = () => {
        const data = pixels.map(v => Math.round(Math.max(0, Math.min(1, v)) * 255));
        clearIconCache();
        if (existing){
          existing.pixels = data;
          prefs.customIcons = (prefs.customIcons||[]).map(x => x.id === existing.id ? existing : x);
        } else {
          const id = uid();
          const item = { id, pixels: data, created: Date.now() };
          prefs.customIcons = prefs.customIcons || [];
          prefs.customIcons.push(item);
        }
        persist();
        cleanup();
        closeSheet();
        toast('Icono guardado');
        if (typeof onDone === 'function') onDone();
      };

      function stamp(cx, cy){
        const r = brushSize;
        const edge = Math.max(0.5, r * soft);
        const add = tool === 'pencil';
        const x0 = Math.max(0, Math.floor(cx - r - edge - 1));
        const x1 = Math.min(ICON_SZ-1, Math.ceil(cx + r + edge + 1));
        const y0 = Math.max(0, Math.floor(cy - r - edge - 1));
        const y1 = Math.min(ICON_SZ-1, Math.ceil(cy + r + edge + 1));
        for (let y=y0;y<=y1;y++){
          for (let x=x0;x<=x1;x++){
            const d = Math.hypot(x+0.5-cx, y+0.5-cy);
            let a = 0;
            if (d <= r - edge) a = 1;
            else if (d < r + edge) a = 1 - (d - (r - edge)) / (2 * edge || 1);
            if (a <= 0) continue;
            const i = y*ICON_SZ+x;
            if (add) pixels[i] = Math.min(1, pixels[i] + a * (0.55 + 0.45*(1-soft)));
            else pixels[i] = Math.max(0, pixels[i] - a);
          }
        }
        paint();
      }

      function canvasPos(clientX, clientY){
        const rect = canvas.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width * ICON_SZ;
        const y = (clientY - rect.top) / rect.height * ICON_SZ;
        return { x, y };
      }

      let drawing = false;
      let last = null;
      function onDown(e){
        if (e.target.closest && e.target.closest('.px-joy')) return;
        e.preventDefault();
        drawing = true;
        const t = e.touches ? e.touches[0] : e;
        const p = canvasPos(t.clientX, t.clientY);
        last = p;
        stamp(p.x, p.y);
      }
      function onMove(e){
        if (!drawing) return;
        e.preventDefault();
        const t = e.touches ? e.touches[0] : e;
        const p = canvasPos(t.clientX, t.clientY);
        if (last){
          const dist = Math.hypot(p.x-last.x, p.y-last.y);
          const steps = Math.max(1, Math.ceil(dist / Math.max(1, brushSize*0.35)));
          for (let s=1;s<=steps;s++){
            const t2 = s/steps;
            stamp(last.x + (p.x-last.x)*t2, last.y + (p.y-last.y)*t2);
          }
        } else stamp(p.x, p.y);
        last = p;
      }
      function onUp(){ drawing = false; last = null; }
      wrap.addEventListener('pointerdown', onDown);
      window.addEventListener('pointermove', onMove, { signal: sig });
      window.addEventListener('pointerup', onUp, { signal: sig });
      wrap.addEventListener('touchstart', onDown, { passive:false });
      window.addEventListener('touchmove', onMove, { passive:false, signal: sig });
      window.addEventListener('touchend', onUp, { signal: sig });

      function bindJoy(el, knob, mode){
        let active = false, base = null;
        function setKnob(dx, dy){
          const max = 28;
          const d = Math.hypot(dx, dy) || 1;
          const s = Math.min(1, max / d);
          knob.style.transform = 'translate('+ (dx*s) +'px,'+ (dy*s) +'px)';
        }
        function resetKnob(){ knob.style.transform = 'translate(0,0)'; }
        function start(e){
          e.preventDefault(); e.stopPropagation();
          active = true;
          const t = e.touches ? e.touches[0] : e;
          base = { x: t.clientX, y: t.clientY };
        }
        function move(e){
          if (!active) return;
          e.preventDefault();
          const t = e.touches ? e.touches[0] : e;
          const dx = t.clientX - base.x;
          const dy = t.clientY - base.y;
          setKnob(dx, dy);
          if (mode === 'pan'){
            panX += dx * 0.15;
            panY += dy * 0.15;
            base = { x: t.clientX, y: t.clientY };
            applyTransform();
          } else {
            const factor = 1 + (-dy) * 0.004;
            zoom = Math.max(0.8, Math.min(10, zoom * factor));
            base = { x: t.clientX, y: t.clientY };
            applyTransform();
          }
        }
        function end(){ active = false; resetKnob(); }
        el.addEventListener('pointerdown', start);
        window.addEventListener('pointermove', move, { signal: sig });
        window.addEventListener('pointerup', end, { signal: sig });
        el.addEventListener('touchstart', start, { passive:false });
        window.addEventListener('touchmove', move, { passive:false, signal: sig });
        window.addEventListener('touchend', end, { signal: sig });
      }
      bindJoy($('#pxJoyPan', root), $('#pxJoyPanKnob', root), 'pan');
      bindJoy($('#pxJoyZoom', root), $('#pxJoyZoomKnob', root), 'zoom');
    }
  });
}
function openCustomIconsManager(){
  const list = prefs.customIcons || [];
  if (!list.length){
    openSheet('Mis iconos', [
      { icon:'plus', label:'Dibujar icono nuevo', action: () => { closeSheet(); setTimeout(() => openPixelEditor(null), 200); } }
    ]);
    return;
  }
  const items = [];
  list.forEach((c, i) => {
    items.push({
      icon: 'palette',
      label: 'Icono ' + (i + 1),
      sub: 'Tocar para opciones',
      action: () => {
        closeSheet();
        setTimeout(() => openSheet('Icono ' + (i + 1), [
          { icon:'edit', label:'Editar dibujo', action: () => { closeSheet(); setTimeout(() => openPixelEditor(c, () => { render(); renderDrawer(); }), 200); } },
          { icon:'trash', label:'Eliminar icono', sub:'No se puede deshacer', danger: true, action: () => {
            prefs.customIcons = prefs.customIcons.filter(x => x.id !== c.id);
            statuses.forEach(s => { if (s.icon === 'c_'+c.id) s.icon = 'p0'; });
            try { clearIconCache(); } catch(_){}
            persist(); closeSheet(); toast('Icono eliminado'); renderDrawer(); render();
            if (editingId) renderEditorMeta();
          }},
          { icon:'close', label:'Cancelar', action: closeSheet }
        ]), 200);
      }
    });
  });
  items.push({ sep:true });
  if (list.length < MAX_CUSTOM_ICONS){
    items.push({ icon:'plus', label:'Dibujar otro', action: () => { closeSheet(); setTimeout(() => openPixelEditor(null), 200); } });
  } else {
    items.push({ icon:'info', label:'Límite alcanzado ('+MAX_CUSTOM_ICONS+')', sub:'Eliminá uno para crear otro', action: () => {} });
  }
  items.push({ icon:'download', label:'Exportar spritesheet PNG', action: () => { exportCustomSpritesheet(); closeSheet(); } });
  openSheet('Mis iconos ('+list.length+'/'+MAX_CUSTOM_ICONS+')', items);
}
function exportCustomSpritesheet(){
  const list = prefs.customIcons || [];
  if (!list.length) return toast('No hay iconos propios');
  const n = list.length;
  const c = document.createElement('canvas');
  c.width = ICON_SZ * n; c.height = ICON_SZ;
  const ctx = c.getContext('2d');
  list.forEach((ic, i) => {
    for (let y = 0; y < ICON_SZ; y++) for (let x = 0; x < ICON_SZ; x++){
      const v = ic.pixels[y*ICON_SZ+x];
      const alpha = v > 1 ? v/255 : v;
      if (alpha > 0){
        ctx.fillStyle = 'rgba(255,255,255,'+alpha+')';
        ctx.fillRect(i*ICON_SZ+x, y, 1, 1);
      }
    }
  });
  c.toBlob(blob => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'mis-iconos-status.png';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    toast('Spritesheet exportado');
  });
}

function deleteStatusDialog(s){
  if (statuses.length <= 1) return toast('Debe quedar al menos un estado');
  const target = statuses.find(x => x.id !== s.id) || statuses[0];
  const moved = notes.filter(n => !n.deleted && n.status === s.id).length;
  openSheet('Eliminar estado "' + s.name + '"', [
    { icon:'trash', label:'Eliminar y mover notas a "' + target.name + '"', sub: moved ? moved + (moved===1?' nota':' notas') : 'Sin notas',
      action: () => {
        notes.forEach(n => { if (n.status === s.id){ n.status = target.id; n.modified = Date.now(); } });
        statuses = statuses.filter(x => x.id !== s.id);
        statuses.forEach((x,i) => { x.order = i; });
        if (!statuses.some(x => x.final) && statuses.length) statuses[statuses.length-1].final = true;
        if (prefs.chips){ prefs.chips = prefs.chips.filter(c => !(c.type==='status' && c.id===s.id)); }
        if (view.type === 'status' && view.status === s.id) view = { type:'all' };
        persist(); closeSheet(); renderDrawer(); render();
        if (editingId) renderEditorMeta();
        toast('Estado eliminado' + (moved ? ' · notas movidas' : ''));
      }
    },
    { icon:'close', label:'Cancelar', action: closeSheet }
  ]);
}

/* ===== COLECCIÓN ===== */
function newCollectionDialog(){
  const q = $('#searchInput').value.trim();
  openSheet('Nueva colección', [], {
    html:
      '<div style="padding:4px 14px 14px">'+
        '<label style="font-size:11.5px;font-weight:700;color:var(--ink-muted);text-transform:uppercase;letter-spacing:.6px;display:block;margin-bottom:8px">Nombre</label>'+
        '<input id="colName" class="block-field" style="width:100%;padding:12px 14px;font-size:15px;display:block;margin-bottom:14px" placeholder="Ej. Ideas sin archivar" autocomplete="off" spellcheck="false">'+
        '<label style="font-size:11.5px;font-weight:700;color:var(--ink-muted);text-transform:uppercase;letter-spacing:.6px;display:block;margin-bottom:8px">Consulta</label>'+
        '<input id="colQuery" class="block-field" style="width:100%;padding:12px 14px;font-size:15px;display:block" placeholder="Palabra o #etiqueta" value="'+escAttr(q)+'" autocomplete="off" spellcheck="false">'+
        '<div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end">'+
          '<button type="button" class="chip" id="colCancel">Cancelar</button>'+
          '<button type="button" class="chip active" id="colSave">Crear</button>'+
        '</div>'+
      '</div>',
    onMount: root => {
      const nameI = $('#colName', root); nameI.focus();
      const qI = $('#colQuery', root);
      const save = () => {
        const name = nameI.value.trim();
        if (!name){ nameI.focus(); return; }
        collections.push({ id: uid(), name, query: qI.value.trim(), created: Date.now() });
        persist(); closeSheet(); renderDrawer(); render();
        toast('Colección creada');
      };
      $('#colCancel', root).onclick = closeSheet;
      $('#colSave', root).onclick = save;
    }
  });
}
$('#btnSearchSave').addEventListener('click', () => {
  if (!query.trim()) return toast('Escribe algo primero');
  newCollectionDialog();
});

/* ===== BLOQUES · EDITOR ===== */
let blockDraft = null;
let blockIsEdit = false;

const WIZARD_WHENS = [
  { type:'note.create', label:'Al guardar una nota nueva', icon:'plusCircle', group:'instant' },
  { type:'note.edit', label:'Al editar el texto', icon:'edit', group:'instant' },
  { type:'note.editTitle', label:'Al cambiar el título', icon:'fileText', group:'instant' },
  { type:'note.open', label:'Al abrir una nota', icon:'note', group:'instant' },
  { type:'note.close', label:'Al cerrar una nota', icon:'back', group:'instant' },
  { type:'note.pin', label:'Al fijar', icon:'pin', group:'org' },
  { type:'note.unpin', label:'Al desfijar', icon:'pin', group:'org' },
  { type:'note.archive', label:'Al archivar', icon:'archive', group:'org' },
  { type:'note.unarchive', label:'Al desarchivar', icon:'archive', group:'org' },
  { type:'note.status', label:'Al cambiar de estado', icon:'target', group:'org' },
  { type:'note.folder', label:'Al cambiar de carpeta', icon:'folder', group:'org' },
  { type:'note.tag', label:'Al cambiar etiquetas', icon:'hash', group:'org' },
  { type:'note.checklist', label:'Al marcar/desmarcar una tarea', icon:'checkSquare', group:'tasks' },
  { type:'note.checklistDone', label:'Al completar todas las tareas', icon:'checkSquare', group:'tasks' },
  { type:'daily', label:'Cada día a una hora', icon:'clock', group:'time' },
  { type:'inactivity', label:'Tras N días sin abrir', icon:'clock', group:'time' },
  { type:'manual', label:'Solo manualmente', icon:'play', group:'time' }
];
const WIZARD_IFS = [
  { type:null, label:'Siempre (sin condición)', icon:'zap' },
  { type:'titleEmpty', label:'Título vacío', icon:'fileText' },
  { type:'titleContains', label:'El título contiene…', icon:'fileText', need:'text' },
  { type:'bodyContains', label:'El texto contiene…', icon:'fileText', need:'text' },
  { type:'hasTag', label:'Tiene la etiqueta…', icon:'hash', need:'tag' },
  { type:'noTag', label:'No tiene la etiqueta…', icon:'hash', need:'tag' },
  { type:'hasStatus', label:'Tiene el estado…', icon:'target', need:'status' },
  { type:'inFolder', label:'Está en la carpeta…', icon:'folder', need:'folder' },
  { type:'isPinned', label:'Está fijada', icon:'pin' },
  { type:'isNotPinned', label:'No está fijada', icon:'pin' },
  { type:'allTasksDone', label:'Todas las tareas hechas', icon:'checkSquare' },
  { type:'hasUnchecked', label:'Tiene tareas sin completar', icon:'checkSquare' },
  { type:'wordCount', label:'Palabras ≥ N', icon:'sliders', need:'n', op:'>=' },
  { type:'hourBetween', label:'Solo de noche (22–06)', icon:'moon', fixed:{from:'22:00',to:'06:00'} },
  { type:'containsEmail', label:'Contiene un correo', icon:'users' }
];
const WIZARD_THENS = [
  { type:'addTag', label:'Añadir etiqueta…', icon:'hash', need:'tag' },
  { type:'removeTag', label:'Quitar etiqueta…', icon:'hash', need:'tag' },
  { type:'setStatus', label:'Cambiar estado…', icon:'target', need:'status' },
  { type:'setFolder', label:'Mover a carpeta…', icon:'folder', need:'folder' },
  { type:'setColor', label:'Cambiar color…', icon:'palette', need:'color' },
  { type:'pin', label:'Fijar', icon:'pin' },
  { type:'unpin', label:'Desfijar', icon:'pin' },
  { type:'archive', label:'Archivar', icon:'archive' },
  { type:'unarchive', label:'Desarchivar', icon:'archive' },
  { type:'prefixTitle', label:'Prefijo al título…', icon:'fileText', need:'text' },
  { type:'appendText', label:'Texto al final…', icon:'fileText', need:'text' },
  { type:'appendChecklist', label:'Añadir tareas…', icon:'checkSquare', need:'text' },
  { type:'clearDoneTasks', label:'Quitar tareas completadas', icon:'checkSquare' },
  { type:'toast', label:'Mostrar aviso…', icon:'info', need:'text' }
];

function openBlockWizard(){
  const draft = {
    when: { type:'note.create' },
    if: [],
    then: [],
    name: '',
    ui: 'simple'
  };
  function groupWhens(){
    const groups = [
      { key:'instant', title:'Al instante' },
      { key:'org', title:'Al organizar' },
      { key:'tasks', title:'Tareas' },
      { key:'time', title:'Tiempo / manual' }
    ];
    const items = [];
    groups.forEach(g => {
      const rows = WIZARD_WHENS.filter(w => w.group === g.key);
      if (!rows.length) return;
      items.push({ sep:true });
      items.push({ icon:'info', label: g.title, action: () => {} });
      rows.forEach(w => {
        items.push({
          icon: w.icon, label: w.label,
          action: () => {
            draft.when = { type: w.type };
            if (w.type === 'daily') draft.when.time = '09:00';
            if (w.type === 'inactivity') draft.when.days = 30;
            if (w.type === 'note.view') draft.when.seconds = 60;
            closeSheet();
            setTimeout(stepIf, 180);
          }
        });
      });
    });
    items.push({ sep:true });
    items.push({ icon:'sliders', label:'Editor avanzado…', action: () => {
      closeSheet();
      setTimeout(() => openBlockEditor(null, true), 180);
    }});
    return items;
  }
  function stepWhen(){
    openSheet('1 · ¿Cuándo?', groupWhens());
  }
  function pickIf(c, done){
    if (!c.type){ draft.if = []; done(); return; }
    if (c.fixed){ draft.if = [{ type:c.type, ...c.fixed }]; done(); return; }
    if (!c.need){ draft.if = [{ type:c.type }]; done(); return; }
    if (c.need === 'n'){
      textInputDialog(c.label, {
        placeholder: 'Número', value: '100', confirmText: 'Siguiente',
        onSave: v => {
          const n = Math.max(0, parseInt(String(v).replace(/\D/g,''), 10) || 0);
          draft.if = [{ type:c.type, op: c.op || '>=', n }];
          done();
        }
      });
      return;
    }
    if (c.need === 'status'){
      openSheet(c.label, statuses.map(s => ({
        icon:'target', label:s.name,
        action: () => { draft.if = [{ type:c.type, status:s.id }]; closeSheet(); setTimeout(done, 160); }
      })));
      return;
    }
    if (c.need === 'folder'){
      const items = [{ icon:'folder', label:'Sin carpeta', action: () => {
        draft.if = [{ type: c.type === 'inFolder' ? 'noFolder' : c.type }];
        closeSheet(); setTimeout(done, 160);
      }}].concat(folders.map(f => ({
        icon:'folder', label:f.name,
        action: () => { draft.if = [{ type:c.type, folderId:f.id }]; closeSheet(); setTimeout(done, 160); }
      })));
      openSheet(c.label, items);
      return;
    }
    textInputDialog(c.label, {
      placeholder: c.need === 'tag' ? 'etiqueta' : 'texto',
      confirmText: 'Siguiente',
      onSave: v => {
        const cond = { type: c.type };
        if (c.need === 'tag') cond.tag = String(v||'').replace(/^#/, '').trim();
        else cond.text = String(v||'').trim();
        draft.if = [cond];
        done();
      }
    });
  }
  function stepIf(){
    openSheet('2 · ¿Si…?', WIZARD_IFS.map(c => ({
      icon: c.icon, label: c.label,
      action: () => {
        closeSheet();
        setTimeout(() => pickIf(c, () => setTimeout(stepThen, 160)), 160);
      }
    })));
  }
  function pickThen(a, done){
    if (!a.need){ draft.then = [{ type:a.type }]; done(); return; }
    if (a.need === 'status'){
      openSheet(a.label, statuses.map(s => ({
        icon:'target', label:s.name,
        action: () => { draft.then = [{ type:a.type, status:s.id }]; closeSheet(); setTimeout(done, 160); }
      })));
      return;
    }
    if (a.need === 'folder'){
      openSheet(a.label, folders.length ? folders.map(f => ({
        icon:'folder', label:f.name,
        action: () => { draft.then = [{ type:a.type, folderId:f.id }]; closeSheet(); setTimeout(done, 160); }
      })) : [{ icon:'info', label:'No hay carpetas', action: closeSheet }]);
      return;
    }
    if (a.need === 'color'){
      openSheet(a.label, COLORS.map(col => ({
        icon:'palette', label: COLOR_LABELS[col] || col,
        action: () => { draft.then = [{ type:a.type, color:col }]; closeSheet(); setTimeout(done, 160); }
      })));
      return;
    }
    textInputDialog(a.label, {
      placeholder: a.need === 'tag' ? 'etiqueta' : (a.type === 'appendChecklist' ? 'una tarea por línea' : 'texto'),
      confirmText: 'Crear bloque',
      onSave: v => {
        const act = { type: a.type };
        if (a.need === 'tag') act.tag = String(v||'').replace(/^#/, '').trim();
        else act.text = String(v||'');
        draft.then = [act];
        done();
      }
    });
  }
  function stepThen(){
    openSheet('3 · ¿Entonces?', WIZARD_THENS.map(a => ({
      icon: a.icon, label: a.label,
      action: () => {
        closeSheet();
        setTimeout(() => pickThen(a, finish), 160);
      }
    })));
  }
  function finish(){
    if (!draft.then.length){ toast('Elige al menos una acción'); return; }
    const whenLabel = (WHEN_TYPES[draft.when.type]||{}).label || draft.when.type;
    const name = draft.name || whenLabel;
    const block = {
      id: uid(), name, enabled: true, preset: false, singleFire: false,
      ui: 'simple', category: '', order: blocks.length,
      when: normalizeWhen(draft.when), if: draft.if, ifLogic: 'AND', then: draft.then,
      runCount: 0, created: Date.now()
    };
    blocks.push(block);
    persist();
    renderDrawer();
    toast('Bloque creado · ' + name, 'Editar', () => openBlockEditor(block.id));
  }
  stepWhen();
}

function openBlockLibrary(){
  const presets = presetBlocks();
  const packs = [];
  const order = ['Captura','Tareas','Organización','Higiene','Reuniones'];
  order.forEach(p => { if (presets.some(x => x.pack === p)) packs.push(p); });
  presets.forEach(p => { if (packs.indexOf(p.pack) === -1) packs.push(p.pack || 'Otros'); });

  function showPack(pack){
    const list = presets.filter(p => (p.pack || 'Otros') === pack);
    const items = list.map(p => {
      const already = blocks.some(b => b.name === p.name);
      return {
        icon: already ? 'checkSquare' : 'plusCircle',
        label: p.name,
        sub: already ? 'Ya instalada' : (p.desc || ''),
        action: () => {
          if (already){ toast('Ya tienes «' + p.name + '»'); return; }
          const copy = {
            id: uid(), name: p.name, enabled: true, preset: true, singleFire: false,
            ui: 'simple', category: p.pack || '', order: blocks.length,
            when: normalizeWhen(JSON.parse(JSON.stringify(p.when))),
            if: JSON.parse(JSON.stringify(p.if || [])), ifLogic: 'AND',
            then: JSON.parse(JSON.stringify(p.then || [])),
            runCount: 0, created: Date.now()
          };
          copy.then.forEach(a => {
            if (a.type === 'setStatus' && a.status && !findStatus(a.status)){
              if (/hecho|done|complet/i.test(a.status)) a.status = (statuses.find(s=>s.final)||statuses[statuses.length-1]||{}).id;
              else a.status = (statuses[0]||{}).id;
            }
          });
          blocks.push(copy);
          persist(); closeSheet(); renderDrawer();
          toast('«' + p.name + '» activada', 'Editar', () => openBlockEditor(copy.id));
        }
      };
    });
    items.push({ sep:true });
    items.push({ icon:'back', label:'Todas las categorías', action: () => { closeSheet(); setTimeout(openBlockLibrary, 160); } });
    openSheet(pack, items);
  }

  const items = packs.map(pack => ({
    icon: 'star',
    label: pack,
    sub: presets.filter(p => (p.pack||'Otros') === pack).length + ' plantillas',
    action: () => { closeSheet(); setTimeout(() => showPack(pack), 160); }
  }));
  items.push({ sep:true });
  items.push({ icon:'plusCircle', label:'Crear desde cero (guía)', action: () => { closeSheet(); setTimeout(openBlockWizard, 160); } });
  openSheet('Plantillas de bloques', items);
}

function openBlockEditor(id, forceAdvanced){
  const existing = id ? blocks.find(b => b.id === id) : null;
  if (existing && !forceAdvanced && existing.ui !== 'advanced'){
    openBlockSimple(existing.id);
    return;
  }
  blockDraft = existing ? JSON.parse(JSON.stringify(existing)) : {
    id: uid(), name:'', enabled:true, preset:false, singleFire:false, ui:'advanced', category:'',
    order: blocks.length, when:{ mode:'any', events:[{ type:'note.create' }] }, if:[], ifLogic:'AND', then:[],
    runCount:0, created: Date.now()
  };
  blockDraft.when = normalizeWhen(blockDraft.when);
  if (forceAdvanced) blockDraft.ui = 'advanced';
  if (!blockDraft.ui) blockDraft.ui = 'advanced';
  blockIsEdit = !!existing;
  try {
    renderBlockEditor();
  } catch (err) {
    console.error('[bloques] renderBlockEditor', err);
    toast('No se pudo abrir el editor de bloques');
    blockDraft = null;
    blockIsEdit = false;
  }
}
function summarizeIf(c){
  if (!c) return '—';
  const def = IF_TYPES[c.type];
  let s = (def && def.label) || c.type;
  if (c.tag) s += ' #' + c.tag;
  if (c.text) s += ' «' + c.text + '»';
  if (c.status){ const st = findStatus(c.status); s += ' · ' + (st ? st.name : c.status); }
  if (c.folderId){ const f = findFolder(c.folderId); s += ' · ' + (f ? f.name : ''); }
  if (c.color) s += ' · ' + (COLOR_LABELS[c.color] || c.color);
  if (c.n != null && c.op) s += ' ' + c.op + ' ' + c.n;
  if (c.from && c.to) s += ' ' + c.from + '–' + c.to;
  return s;
}
function summarizeThen(a){
  if (!a) return '—';
  const def = THEN_TYPES[a.type];
  let s = (def && def.label) || a.type;
  if (a.tag) s += ' #' + a.tag;
  if (a.text) s += ' «' + String(a.text).slice(0,40) + (String(a.text).length>40?'…':'') + '»';
  if (a.status){ const st = findStatus(a.status); s += ' · ' + (st ? st.name : a.status); }
  if (a.folderId){ const f = findFolder(a.folderId); s += ' · ' + (f ? f.name : ''); }
  if (a.color) s += ' · ' + (COLOR_LABELS[a.color] || a.color);
  return s;
}

function openBlockSimple(id){
  const block = blocks.find(b => b.id === id);
  if (!block) return;
  const draft = JSON.parse(JSON.stringify(block));
  // Preservar scroll del sheet al repintar
  let savedScroll = 0;
  function paint(){
    const ifLines = (draft.if && draft.if.length)
      ? draft.if.map((c,i) => '<div class="bs-row" data-bs-if="'+i+'"><span class="bs-k">Si</span><span class="bs-v">'+esc(summarizeIf(c))+'</span></div>').join('')
      : '<div class="bs-row muted" data-bs-if-add="1"><span class="bs-k">Si</span><span class="bs-v">Siempre · toca para añadir condición</span></div>';
    const thenLines = (draft.then && draft.then.length)
      ? draft.then.map((a,i) => '<div class="bs-row" data-bs-then="'+i+'"><span class="bs-k">Entonces</span><span class="bs-v">'+esc(summarizeThen(a))+'</span></div>').join('')
      : '<div class="bs-row muted" data-bs-then-add="1"><span class="bs-k">Entonces</span><span class="bs-v">Toca para añadir acción</span></div>';
    const html = '<div class="bs-simple" style="padding:4px 12px 16px">'+
      '<label class="bs-name-lab">Nombre</label>'+
      '<input class="block-field" id="bsName" value="'+escAttr(draft.name||'')+'" placeholder="Nombre del bloque">'+
      '<div class="bs-row" id="bsWhen"><span class="bs-k">Cuando</span><span class="bs-v">'+esc(summarizeWhen(draft.when))+'</span></div>'+
      ifLines + thenLines +
      '<div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">'+
        '<label class="toggle-row" style="flex:1"><span class="toggle'+(draft.enabled?' on':'')+'" id="bsEnabled" role="switch"></span> Activo</label>'+
        '<label class="toggle-row" style="flex:1"><span class="toggle'+(draft.singleFire?' on':'')+'" id="bsOnce" role="switch"></span> Solo una vez</label>'+
      '</div>'+
      '<div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end;flex-wrap:wrap">'+
        '<button type="button" class="chip" id="bsAdvanced">Avanzado…</button>'+
        '<button type="button" class="chip" id="bsDelete" style="color:var(--warn)">Eliminar</button>'+
        '<button type="button" class="chip active" id="bsSave">Guardar</button>'+
      '</div></div>';
    openSheet('Bloque', [], { html, onMount: root => {
      if (savedScroll) sheetEl.scrollTop = savedScroll;
      const tog = (el, key) => {
        if (!el) return;
        el.addEventListener('click', () => {
          draft[key] = !draft[key];
          el.classList.toggle('on', !!draft[key]);
        });
      };
      tog($('#bsEnabled', root), 'enabled');
      tog($('#bsOnce', root), 'singleFire');
      $('#bsWhen', root)?.addEventListener('click', () => {
        openSheet('¿Cuándo?', WIZARD_WHENS.map(w => ({
          icon: w.icon, label: w.label,
          action: () => {
            draft.when = { type: w.type };
            if (w.type === 'daily') draft.when.time = draft.when.time || '09:00';
            if (w.type === 'inactivity') draft.when.days = draft.when.days || 30;
            savedScroll = sheetEl.scrollTop;
            closeSheet(); setTimeout(paint, 160);
          }
        })));
      });
      const addCond = () => {
        openSheet('Condición', WIZARD_IFS.map(c => ({
          icon: c.icon, label: c.label,
          action: () => {
            closeSheet();
            setTimeout(() => {
              const idx = draft.if.length;
              if (!c.type){ return; }
              if (c.fixed){ draft.if[idx] = { type:c.type, ...c.fixed }; savedScroll=sheetEl.scrollTop; setTimeout(paint, 160); return; }
              if (!c.need){ draft.if[idx] = { type:c.type }; savedScroll=sheetEl.scrollTop; setTimeout(paint, 160); return; }
              if (c.need === 'status'){
                openSheet(c.label, statuses.map(s => ({ icon:'target', label:s.name, action:() => {
                  draft.if[idx] = { type:c.type, status:s.id }; savedScroll=sheetEl.scrollTop; closeSheet(); setTimeout(paint,160);
                }})));
                return;
              }
              if (c.need === 'folder'){
                openSheet(c.label, folders.map(f => ({ icon:'folder', label:f.name, action:() => {
                  draft.if[idx] = { type:c.type, folderId:f.id }; savedScroll=sheetEl.scrollTop; closeSheet(); setTimeout(paint,160);
                }})));
                return;
              }
              if (c.need === 'n'){
                textInputDialog(c.label, { placeholder:'N', value:'100', confirmText:'OK', onSave:v=>{
                  draft.if[idx] = { type:c.type, op:c.op||'>=', n:parseInt(v,10)||0 }; savedScroll=sheetEl.scrollTop; setTimeout(paint,160);
                }});
                return;
              }
              textInputDialog(c.label, { placeholder:c.need==='tag'?'etiqueta':'texto', confirmText:'OK', onSave:v=>{
                const o = { type:c.type };
                if (c.need==='tag') o.tag = String(v||'').replace(/^#/,'').trim();
                else o.text = String(v||'');
                draft.if[idx] = o; savedScroll=sheetEl.scrollTop; setTimeout(paint,160);
              }});
            }, 160);
          }
        })));
      };
      const addAct = () => {
        openSheet('Acción', WIZARD_THENS.map(a => ({
          icon: a.icon, label: a.label,
          action: () => {
            closeSheet();
            setTimeout(() => {
              const idx = draft.then.length;
              if (!a.need){ draft.then[idx] = { type:a.type }; savedScroll=sheetEl.scrollTop; setTimeout(paint,160); return; }
              if (a.need === 'status'){
                openSheet(a.label, statuses.map(s => ({ icon:'target', label:s.name, action:()=>{
                  draft.then[idx] = { type:a.type, status:s.id }; savedScroll=sheetEl.scrollTop; closeSheet(); setTimeout(paint,160);
                }}))); return;
              }
              if (a.need === 'folder'){
                openSheet(a.label, folders.map(f => ({ icon:'folder', label:f.name, action:()=>{
                  draft.then[idx] = { type:a.type, folderId:f.id }; savedScroll=sheetEl.scrollTop; closeSheet(); setTimeout(paint,160);
                }}))); return;
              }
              if (a.need === 'color'){
                openSheet(a.label, COLORS.map(col => ({ icon:'palette', label:COLOR_LABELS[col]||col, action:()=>{
                  draft.then[idx] = { type:a.type, color:col }; savedScroll=sheetEl.scrollTop; closeSheet(); setTimeout(paint,160);
                }}))); return;
              }
              textInputDialog(a.label, { placeholder:a.need==='tag'?'etiqueta':'texto', confirmText:'OK', onSave:v=>{
                const o = { type:a.type };
                if (a.need==='tag') o.tag = String(v||'').replace(/^#/,'').trim();
                else o.text = String(v||'');
                draft.then[idx] = o; savedScroll=sheetEl.scrollTop; setTimeout(paint,160);
              }});
            }, 160);
          }
        })));
      };
      $$('[data-bs-if]', root).forEach(row => {
        row.addEventListener('click', () => {
          openSheet('Condición', [
            { icon:'edit', label:'Cambiar…', action:() => { closeSheet(); setTimeout(addCond, 200); } },
            { icon:'trash', label:'Quitar condición', danger:true, action:()=>{
              draft.if.splice(Number(row.dataset.bsIf),1); savedScroll=sheetEl.scrollTop; closeSheet(); setTimeout(paint,160);
            }}
          ]);
        });
      });
      const ifAddRow = root.querySelector('[data-bs-if-add]');
      if (ifAddRow) ifAddRow.addEventListener('click', addCond);
      $$('[data-bs-then]', root).forEach(row => {
        row.addEventListener('click', () => {
          openSheet('Acción', [
            { icon:'edit', label:'Cambiar…', action:() => { closeSheet(); setTimeout(addAct, 200); } },
            { icon:'trash', label:'Quitar acción', danger:true, action:()=>{
              draft.then.splice(Number(row.dataset.bsThen),1); savedScroll=sheetEl.scrollTop; closeSheet(); setTimeout(paint,160);
            }}
          ]);
        });
      });
      const thenAddRow = root.querySelector('[data-bs-then-add]');
      if (thenAddRow) thenAddRow.addEventListener('click', addAct);
      $('#bsAdvanced', root)?.addEventListener('click', () => {
        draft.ui = 'advanced';
        const idx = blocks.findIndex(b => b.id === draft.id);
        if (idx >= 0){ blocks[idx] = { ...blocks[idx], ...draft, ui:'advanced' }; persist(); }
        closeSheet();
        setTimeout(() => openBlockEditor(draft.id, true), 180);
      });
      $('#bsDelete', root)?.addEventListener('click', () => {
        openSheet('Eliminar bloque', [
          { icon:'trash', label:'Eliminar «'+esc(draft.name||'Bloque')+'»', danger:true, action:()=>{
            blocks = blocks.filter(b => b.id !== draft.id);
            persist(); closeSheet(); renderDrawer(); toast('Bloque eliminado');
          }},
          { icon:'close', label:'Cancelar', action: closeSheet }
        ]);
      });
      $('#bsSave', root)?.addEventListener('click', () => {
        draft.name = ($('#bsName', root)?.value || '').trim() || draft.name || 'Bloque';
        draft.ui = 'simple';
        if (!draft.then || !draft.then.length){ toast('Añade al menos una acción'); return; }
        const idx = blocks.findIndex(b => b.id === draft.id);
        if (idx >= 0) blocks[idx] = { ...blocks[idx], ...draft };
        else blocks.push(draft);
        persist(); closeSheet(); renderDrawer(); toast('Bloque guardado');
      });
    }});
  }
  paint();
}

function renderBlockEditor(){
  const draft = blockDraft;
  if (!draft) return;
  const whenN = normalizeWhen(draft.when);
  draft.when = whenN;
  if (!Array.isArray(draft.if)) draft.if = [];
  if (!Array.isArray(draft.then)) draft.then = [];
  if (draft.ifLogic !== 'OR') draft.ifLogic = 'AND';

  const whenEv0 = whenN.events[0] || { type: 'manual' };
  const whenType = whenEv0.type || 'manual';
  const whenDef = WHEN_TYPES[whenType] || { label: whenType, params: [] };

  const whenParams = (whenDef.params || []).map(p => {
    const v = whenEv0[p];
    if (p === 'time'){
      return '<button type="button" class="time-btn" data-when-time="1">'+icon('clock',14)+'<span id="whenTimeLabel">'+(v||'09:00')+'</span></button>';
    }
    if (p === 'days' || p === 'seconds'){
      const label = p === 'days' ? 'días' : 'seg';
      const val = Number(v) || (p === 'days' ? 30 : 30);
      return '<div class="stepper" data-when-num="'+p+'">'+
        '<button type="button" data-step="-1">'+icon('minus',14)+'</button>'+
        '<input type="text" inputmode="numeric" value="'+val+'" data-when-num-input="'+p+'">'+
        '<button type="button" data-step="1">'+icon('plus',14)+'</button>'+
        '<span class="unit">'+label+'</span>'+
      '</div>';
    }
    return '';
  }).join('');

  const whenExtra = whenN.events.slice(1).map((e, i) => {
    const lab = (WHEN_TYPES[e.type] || {}).label || e.type;
    return '<div class="block-edit-row" data-when-extra="'+i+'">'+
      '<span class="dd-label" style="flex:1">o · '+esc(lab)+'</span>'+
      '<button type="button" class="block-chip-remove" data-when-remove="'+(i+1)+'" title="Quitar">'+icon('close',14)+'</button>'+
    '</div>';
  }).join('');

  const ifHtml = draft.if.map((c, i) => {
    if (c && (c.op || c.group)) {
      const mode = String(c.op || c.group || 'AND').toUpperCase();
      const n = (c.if || c.children || []).length;
      return '<div class="block-edit-row" data-if-row data-if-type="__group__" data-if-group="'+i+'">'+
        '<span class="dd-label" style="flex:1">Grupo '+mode+' ('+n+' condiciones)</span>'+
        '<button type="button" class="block-chip-remove" data-if-remove="'+i+'" title="Quitar">'+icon('close',14)+'</button>'+
      '</div>';
    }
    return renderIfRow(c, i);
  }).join('');
  const thenHtml = draft.then.map((a, i) => renderThenRow(a, i)).join('');

  const html = `
    <div style="padding:0 4px 12px">
      <div class="block-edit-row">
        <label>Nombre del bloque</label>
        <span class="block-field" style="flex:1"><input id="bName" value="${escAttr(draft.name||'')}" placeholder="Ej. Idea nocturna" autocomplete="off" spellcheck="false" style="width:100%"></span>
      </div>
      <div class="block-edit-row">
        <span class="block-field" style="flex:1"><input id="bCategory" value="${escAttr(draft.category||'')}" placeholder="Categoría (opcional)" autocomplete="off" spellcheck="false" style="width:100%"></span>
        <label class="toggle-row"><span class="toggle${draft.enabled?' on':''}" id="bEnabled" role="switch" aria-checked="${!!draft.enabled}"></span>Activo</label>
      </div>
      <div class="block-edit-row">
        <label class="toggle-row"><span class="toggle${draft.singleFire?' on':''}" id="bSingle" role="switch" aria-checked="${!!draft.singleFire}"></span>Solo una vez por nota</label>
      </div>
      <div class="block-section-label">
        <span>CUANDO (cualquiera)</span>
        <button type="button" class="block-add" id="bAddWhen" title="Otro arrancador">+ arrancador</button>
      </div>
      <div class="block-edit-row">
        <button type="button" class="dd-btn" data-dd="when-type" style="flex:1;min-width:0">
          <span class="dd-label">${esc(whenDef.label || '—')}</span>${icon('chevDown',14)}
        </button>
        ${whenParams}
      </div>
      ${whenExtra}
      <div class="block-section-label">
        <span>SI</span>
        <span style="display:flex;gap:6px;align-items:center">
          <span class="logic" role="tablist">
            <button type="button" class="${draft.ifLogic==='AND'?'on':''}" data-logic="AND">Y</button>
            <button type="button" class="${draft.ifLogic==='OR'?'on':''}" data-logic="OR">O</button>
          </span>
          <button type="button" class="block-add" id="bAddIf">${icon('plus',12)}Añadir</button>
        </span>
      </div>
      <div id="bIfList">${ifHtml || '<div style="padding:6px 0;color:var(--ink-muted);font-size:12.5px">Sin condiciones — se aplica siempre</div>'}</div>
      <div class="block-section-label"><span>ENTONCES</span><button type="button" class="block-add" id="bAddThen">${icon('plus',12)}Añadir</button></div>
      <div id="bThenList">${thenHtml || '<div style="padding:6px 0;color:var(--ink-muted);font-size:12.5px">Sin acciones</div>'}</div>
      ${blockIsEdit ? '<div class="block-section-label">Historial</div><div id="bHistory"></div>' : ''}
      <div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end;flex-wrap:wrap">
        ${blockIsEdit ? '<button type="button" class="chip" id="bSimple">Vista simple</button>' : ''}
        ${blockIsEdit ? '<button type="button" class="chip" id="bDup">' + icon('duplicate',12) + ' Duplicar</button>' : ''}
        <button type="button" class="chip" id="bTest">${icon('play',12)} Probar</button>
        ${blockIsEdit ? '<button type="button" class="chip" id="bDelete" style="color:var(--warn);border-color:var(--warn-soft)">' + icon('trash',12) + ' Eliminar</button>' : ''}
        <button type="button" class="chip active" id="bSave">Guardar</button>
      </div>
      ${draft.preset ? '<div style="margin-top:14px;padding:10px 12px;background:var(--accent-tint);border-radius:9px;font-size:12.5px;color:var(--accent);font-weight:600">Plantilla instalada — puedes editarla o eliminarla.</div>' : ''}
    </div>`;

  sheetBody.innerHTML = html;
  sheetBody._items = [];
  scrim.classList.add('open');
  sheetEl.classList.add('open');
  attachBlockEditorHandlers();
  if (blockIsEdit) renderBlockHistory(draft.id);
}

function readBlockDraftFromDOM(){
  const draft = blockDraft;
  if (!draft) return;
  draft.name = ($('#bName')?.value || '').trim();
  draft.category = ($('#bCategory')?.value || '').trim();
  draft.when = normalizeWhen(draft.when);
  const timeLabel = $('#whenTimeLabel');
  if (timeLabel && draft.when.events[0]) draft.when.events[0].time = timeLabel.textContent.trim();
  $$('[data-when-num-input]').forEach(el => {
    if (draft.when.events[0]) draft.when.events[0][el.dataset.whenNumInput] = Number(el.value) || 0;
  });

  draft.if = $$('#bIfList [data-if-row]').map(row => {
    if (row.dataset.ifType === '__group__') return draft.if[Number(row.dataset.ifGroup)] || null;
    const obj = { type: row.dataset.ifType };
    $$('[data-if-param]', row).forEach(el => {
      const k = el.dataset.ifParam;
      let v = el.value;
      if (el.inputMode === 'numeric') v = Number(v) || 0;
      obj[k] = v;
    });
    $$('[data-if-param-dd]', row).forEach(el => {
      obj[el.dataset.ifParamDd] = el.dataset.ifValue || '';
    });
    const days = $$('[data-if-day]', row).filter(c => c.checked).map(c => Number(c.value));
    if (obj.type === 'dayOfWeek') obj.days = days;
    return obj;
  }).filter(Boolean);

  draft.then = $$('#bThenList [data-then-row]').map(row => {
    const obj = { type: row.dataset.thenType };
    $$('[data-then-param]', row).forEach(el => { obj[el.dataset.thenParam] = el.value; });
    $$('[data-then-param-dd]', row).forEach(el => {
      obj[el.dataset.thenParamDd] = el.dataset.thenValue || '';
    });
    return obj;
  });
}

function attachBlockEditorHandlers(){
  const tgEn = $('#bEnabled');
  if (tgEn){
    const lbl = tgEn.closest('label') || tgEn;
    lbl.addEventListener('click', (e) => {
      e.preventDefault();
      blockDraft.enabled = !blockDraft.enabled;
      tgEn.classList.toggle('on', blockDraft.enabled);
      tgEn.setAttribute('aria-checked', String(blockDraft.enabled));
    });
  }
  const tgSingle = $('#bSingle');
  if (tgSingle){
    const lbl = tgSingle.closest('label') || tgSingle;
    lbl.addEventListener('click', (e) => {
      e.preventDefault();
      blockDraft.singleFire = !blockDraft.singleFire;
      tgSingle.classList.toggle('on', blockDraft.singleFire);
      tgSingle.setAttribute('aria-checked', String(blockDraft.singleFire));
    });
  }
  $$('.logic button').forEach(b => {
    b.addEventListener('click', () => {
      blockDraft.ifLogic = b.dataset.logic;
      $$('.logic button').forEach(x => x.classList.toggle('on', x === b));
    });
  });
  const timeBtn = $('[data-when-time="1"]');
  if (timeBtn){
    timeBtn.addEventListener('click', e => {
      e.preventDefault();
      const w = normalizeWhen(blockDraft.when);
      const prevTime = (w.events[0] && w.events[0].time) || '09:00';
      openTimePicker(timeBtn, prevTime, v => {
        if (!w.events[0]) w.events[0] = { type:'daily' };
        w.events[0].time = v;
        blockDraft.when = w;
        renderBlockEditor();
      });
    });
  }
  $$('[data-when-num]').forEach(step => {
    const key = step.dataset.whenNum;
    const inp = step.querySelector('input');
    step.querySelector('[data-step="-1"]').addEventListener('click', () => {
      const n = Math.max(1, (Number(inp.value)||0) - 1);
      inp.value = n;
      const w = normalizeWhen(blockDraft.when);
      if (!w.events[0]) w.events[0] = { type:'inactivity' };
      w.events[0][key] = n;
      blockDraft.when = w;
    });
    step.querySelector('[data-step="1"]').addEventListener('click', () => {
      const n = (Number(inp.value)||0) + 1;
      inp.value = n;
      const w = normalizeWhen(blockDraft.when);
      if (!w.events[0]) w.events[0] = { type:'inactivity' };
      w.events[0][key] = n;
      blockDraft.when = w;
    });
    inp.addEventListener('input', () => {
      const w = normalizeWhen(blockDraft.when);
      if (!w.events[0]) w.events[0] = { type:'inactivity' };
      w.events[0][key] = Number(inp.value.replace(/\D/g,'')) || 0;
      blockDraft.when = w;
    });
  });

  $('#bAddWhen')?.addEventListener('click', () => {
    readBlockDraftFromDOM();
    const w = normalizeWhen(blockDraft.when);
    w.events.push({ type:'note.pin' });
    blockDraft.when = w;
    renderBlockEditor();
  });
  $$('[data-when-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.whenRemove);
      const w = normalizeWhen(blockDraft.when);
      if (w.events.length > 1) w.events.splice(idx, 1);
      blockDraft.when = w;
      renderBlockEditor();
    });
  });

  const whenDD = $('[data-dd="when-type"]');
  if (whenDD){
    whenDD.addEventListener('click', e => {
      e.preventDefault();
      readBlockDraftFromDOM();
      const opts = Object.entries(WHEN_TYPES).map(([k,v]) => ({ value:k, label:v.label }));
      const cur = (normalizeWhen(blockDraft.when).events[0]||{}).type;
      openDropdown(whenDD, opts, cur, v => {
        const w = normalizeWhen(blockDraft.when);
        const prev = w.events[0] || {};
        w.events[0] = { type: v };
        if (v === 'daily') w.events[0].time = prev.time || '09:00';
        if (v === 'inactivity' || v === 'interval') w.events[0].days = prev.days || 30;
        if (v === 'note.view') w.events[0].seconds = prev.seconds || 60;
        blockDraft.when = w;
        renderBlockEditor();
      });
    });
  }
  $('#bAddIf')?.addEventListener('click', () => {
    readBlockDraftFromDOM();
    blockDraft.if.push({ type:'hasTag', tag:'' });
    renderBlockEditor();
  });
  $('#bAddThen')?.addEventListener('click', () => {
    readBlockDraftFromDOM();
    blockDraft.then.push({ type:'addTag', tag:'' });
    renderBlockEditor();
  });
  $$('[data-if-row]').forEach((row, i) => {
    if (row.dataset.ifType === '__group__') return;
    const tBtn = row.querySelector('[data-dd="if-type"]');
    if (tBtn){
      tBtn.addEventListener('click', e => {
        e.preventDefault();
        readBlockDraftFromDOM();
        const opts = Object.entries(IF_TYPES).filter(([,v]) => !v.hidden).map(([k,v]) => ({ value:k, label:v.label }));
        openDropdown(tBtn, opts, row.dataset.ifType, v => {
          const base = { type: v };
          if ((IF_TYPES[v].params||[]).indexOf('op') !== -1) base.op = '>';
          if ((IF_TYPES[v].params||[]).indexOf('n') !== -1) base.n = 0;
          blockDraft.if[i] = base;
          renderBlockEditor();
        });
      });
    }
    $$('[data-if-param-dd]', row).forEach(btn => {
      const p = btn.dataset.ifParamDd;
      btn.addEventListener('click', e => {
        e.preventDefault();
        readBlockDraftFromDOM();
        openDropdown(btn, paramOptions(p), blockDraft.if[i][p], v => {
          blockDraft.if[i][p] = v;
          renderBlockEditor();
        });
      });
    });
    const rm = row.querySelector('[data-if-remove]');
    if (rm) rm.addEventListener('click', () => {
      readBlockDraftFromDOM();
      blockDraft.if.splice(i, 1);
      renderBlockEditor();
    });
  });
  $$('[data-then-row]').forEach((row, i) => {
    const tBtn = row.querySelector('[data-dd="then-type"]');
    if (tBtn){
      tBtn.addEventListener('click', e => {
        e.preventDefault();
        readBlockDraftFromDOM();
        const opts = Object.entries(THEN_TYPES).map(([k,v]) => ({ value:k, label:v.label }));
        openDropdown(tBtn, opts, row.dataset.thenType, v => {
          blockDraft.then[i] = { type: v };
          renderBlockEditor();
        });
      });
    }
    $$('[data-then-param-dd]', row).forEach(btn => {
      const p = btn.dataset.thenParamDd;
      btn.addEventListener('click', e => {
        e.preventDefault();
        readBlockDraftFromDOM();
        openDropdown(btn, paramOptions(p), blockDraft.then[i][p], v => {
          blockDraft.then[i][p] = v;
          renderBlockEditor();
        });
      });
    });
    const rm = row.querySelector('[data-then-remove]');
    if (rm) rm.addEventListener('click', () => {
      readBlockDraftFromDOM();
      blockDraft.then.splice(i, 1);
      renderBlockEditor();
    });
  });
  $('#bSave')?.addEventListener('click', () => {
    readBlockDraftFromDOM();
    blockDraft.when = normalizeWhen(blockDraft.when);
    blockDraft.ui = blockDraft.ui || 'advanced';
    if (!blockDraft.name) blockDraft.name = 'Bloque sin nombre';
    if (!blockDraft.then || !blockDraft.then.length){ toast('Añade al menos una acción'); return; }
    if (blockIsEdit){
      const idx = blocks.findIndex(b => b.id === blockDraft.id);
      if (idx >= 0) blocks[idx] = blockDraft;
    } else {
      blockDraft.order = blocks.length;
      blockDraft.lastRun = Date.now();
      blocks.push(blockDraft);
    }
    persist(); closeSheet(); renderDrawer();
    toast(blockIsEdit ? 'Bloque guardado' : 'Bloque creado');
  });
  $('#bSimple')?.addEventListener('click', () => {
    readBlockDraftFromDOM();
    blockDraft.ui = 'simple';
    const idx = blocks.findIndex(b => b.id === blockDraft.id);
    if (idx >= 0){ blocks[idx] = { ...blocks[idx], ...blockDraft, ui:'simple' }; persist(); }
    closeSheet();
    setTimeout(() => openBlockSimple(blockDraft.id), 180);
  });
  $('#bDelete')?.addEventListener('click', () => {
    openSheet('Eliminar bloque', [
      { icon:'trash', label:'Eliminar «'+esc(blockDraft.name||'Bloque')+'»', danger:true, action:()=>{
        blocks = blocks.filter(b => b.id !== blockDraft.id);
        persist(); closeSheet(); renderDrawer();
        toast('Bloque eliminado');
      }},
      { icon:'close', label:'Cancelar', action: closeSheet }
    ]);
  });
  $('#bDup')?.addEventListener('click', () => {
    readBlockDraftFromDOM();
    const copy = JSON.parse(JSON.stringify(blockDraft));
    copy.id = uid();
    copy.name = blockDraft.name + ' (copia)';
    copy.preset = false;
    copy.runCount = 0;
    copy.lastRun = Date.now();
    copy.order = blocks.length;
    blocks.push(copy);
    persist(); closeSheet(); renderDrawer();
    toast('Bloque duplicado');
  });
  $('#bTest')?.addEventListener('click', () => {
    readBlockDraftFromDOM();
    const now = new Date();
    const matches = notes.filter(n => !n.deleted).filter(n => conditionsMatch(blockDraft, n, { viewTime:999999 }, now));
    const acts = blockDraft.then.map(a => THEN_TYPES[a.type]?.label || a.type).join(' · ');
    // No destruir el editor: toast + expand
    toast('Prueba: ' + matches.length + ' nota' + (matches.length===1?'':'s') + ' coinciden · ' + (acts ? 'se aplicaría: ' + acts : 'sin acciones'));
  });
}

function paramOptions(p){
  if (p === 'color') return [{ value:'', label:'Sin color' }, ...COLORS.map(c => ({ value:c, label:COLOR_LABELS[c], color:c }))];
  if (p === 'folderId') return [{ value:'', label:'Sin carpeta' }, ...folders.map(f => ({ value:f.id, label:f.name }))];
  if (p === 'status') return statuses.map(s => ({ value:s.id, label:s.name, color:s.color }));
  if (p === 'op') return Object.keys(OP_LABELS).map(k => ({ value:k, label:OP_LABELS[k] + '  (' + k + ')' }));
  if (p === 'blockId') return blocks.filter(b => b.id !== (blockDraft && blockDraft.id)).map(b => ({ value:b.id, label:b.name }));
  return [];
}

function renderIfRow(c, i){
  const def = IF_TYPES[c.type] || { label:c.type, params:[] };
  const params = (def.params || []).map(p => {
    const v = c[p] != null ? c[p] : '';
    if (p === 'tag') return '<span class="block-field" style="flex:1"><input data-if-param="tag" value="'+escAttr(v)+'" placeholder="etiqueta" autocomplete="off" spellcheck="false"></span>';
    if (p === 'text') return '<span class="block-field" style="flex:1"><input data-if-param="text" value="'+escAttr(v)+'" placeholder="texto o patrón" autocomplete="off" spellcheck="false"></span>';
    if (p === 'op'){
      const op = v || '>';
      return '<button type="button" class="dd-btn" data-if-param-dd="op" data-if-value="'+escAttr(op)+'" style="flex:0 0 auto;min-width:52px;justify-content:center">'+
        '<span class="dd-label" style="text-align:center;font-weight:700">'+esc(OP_LABELS[op]||op)+'</span>'+icon('chevDown',13)+
      '</button>';
    }
    if (p === 'n'){
      const num = Number(v) || 0;
      return '<div class="stepper">'+
        '<button type="button" data-num-minus="'+i+'">'+icon('minus',14)+'</button>'+
        '<input type="text" inputmode="numeric" data-if-param="n" value="'+num+'">'+
        '<button type="button" data-num-plus="'+i+'">'+icon('plus',14)+'</button>'+
      '</div>';
    }
    if (p === 'from' || p === 'to'){
      const val = v || (p==='from'?'22:00':'06:00');
      return '<button type="button" class="time-btn" data-if-time="'+i+'" data-if-time-p="'+p+'" data-if-param-dd="'+p+'" data-if-value="'+escAttr(val)+'">'+icon('clock',13)+'<span data-time-label="'+p+'">'+val+'</span></button>';
    }
    if (p === 'color' || p === 'folderId' || p === 'status'){
      let label = '—';
      if (p === 'color') label = v ? COLOR_LABELS[v] : 'Sin color';
      if (p === 'folderId') label = v ? (findFolder(v)?.name || '—') : 'Sin carpeta';
      if (p === 'status') label = v ? (findStatus(v)?.name || '—') : '—';
      const color = p === 'color' && v ? v : (p === 'status' && v ? findStatus(v)?.color : null);
      return '<button type="button" class="dd-btn" data-if-param-dd="'+p+'" data-if-value="'+escAttr(v)+'" style="flex:1;min-width:0">'+
        (color ? '<span class="cdot" style="background:var(--n-'+escAttr(color)+')"></span>' : '')+
        '<span class="dd-label">'+esc(label)+'</span>'+icon('chevDown',13)+
      '</button>';
    }
    return '';
  }).join('');
  let extra = '';
  if (c.type === 'dayOfWeek'){
    const days = c.days || [];
    const labels = ['D','L','M','X','J','V','S'];
    extra = '<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px;width:100%">'+
      labels.map((l, idx) =>
        '<label class="cbx" style="padding:5px 8px"><input type="checkbox" data-if-day value="'+idx+'"'+(days.indexOf(idx)!==-1?' checked':'')+'><span class="box"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg></span><span class="lbl">'+l+'</span></label>').join('')+
    '</div>';
  }
  return '<div class="block-edit-row" data-if-row data-if-type="'+escAttr(c.type)+'" style="align-items:flex-start">'+
    '<button type="button" class="dd-btn" data-dd="if-type" style="flex:1;min-width:0"><span class="dd-label">'+esc(def.label)+'</span>'+icon('chevDown',13)+'</button>'+
    params + extra +
    '<button type="button" class="block-chip-remove" data-if-remove="'+i+'" title="Quitar">'+icon('close',14)+'</button>'+
  '</div>';
}

function renderThenRow(a, i){
  const def = THEN_TYPES[a.type] || { label:a.type, params:[] };
  const params = (def.params || []).map(p => {
    const v = a[p] != null ? a[p] : '';
    if (p === 'tag') return '<span class="block-field" style="flex:1"><input data-then-param="tag" value="'+escAttr(v)+'" placeholder="etiqueta" autocomplete="off" spellcheck="false"></span>';
    if (p === 'text') return '<span class="block-field" style="flex:1"><input data-then-param="text" value="'+escAttr(v)+'" placeholder="usa {fecha}, {hora}, {titulo}…" autocomplete="off" spellcheck="false"></span>';
    if (p === 'blockId'){
      const blk = blocks.find(x => x.id === v);
      return '<button type="button" class="dd-btn" data-then-param-dd="blockId" data-then-value="'+escAttr(v)+'" style="flex:1;min-width:0">'+
        '<span class="dd-label">'+esc(blk ? blk.name : 'Elegir bloque…')+'</span>'+icon('chevDown',13)+
      '</button>';
    }
    if (p === 'color' || p === 'folderId' || p === 'status'){
      let label = '—';
      if (p === 'color') label = v ? COLOR_LABELS[v] : 'Sin color';
      if (p === 'folderId') label = v ? (findFolder(v)?.name || '—') : 'Sin carpeta';
      if (p === 'status') label = v ? (findStatus(v)?.name || '—') : '—';
      const color = p === 'color' && v ? v : (p === 'status' && v ? findStatus(v)?.color : null);
      return '<button type="button" class="dd-btn" data-then-param-dd="'+p+'" data-then-value="'+escAttr(v)+'" style="flex:1;min-width:0">'+
        (color ? '<span class="cdot" style="background:var(--n-'+escAttr(color)+')"></span>' : '')+
        '<span class="dd-label">'+esc(label)+'</span>'+icon('chevDown',13)+
      '</button>';
    }
    return '';
  }).join('');
  return '<div class="block-edit-row" data-then-row data-then-type="'+escAttr(a.type)+'" style="align-items:flex-start">'+
    '<button type="button" class="dd-btn" data-dd="then-type" style="flex:1;min-width:0"><span class="dd-label">'+esc(def.label)+'</span>'+icon('chevDown',13)+'</button>'+
    params +
    '<button type="button" class="block-chip-remove" data-then-remove="'+i+'" title="Quitar">'+icon('close',14)+'</button>'+
  '</div>';
}

function renderBlockHistory(blockId){
  const el = $('#bHistory'); if (!el) return;
  let h = [];
  try { h = JSON.parse(localStorage.getItem(KEYS.history) || '[]'); } catch(_){}
  h = h.filter(x => x.blockId === blockId).slice(0, 8);
  if (!h.length){ el.innerHTML = '<div style="padding:6px 0;color:var(--ink-muted);font-size:12.5px">Sin ejecuciones aún</div>'; return; }
  el.innerHTML = h.map(x => {
    const n = find(x.noteId);
    const t = stripMd(noteTitle(n) || '') || 'Sin título';
    return '<div class="block-history-item">'+
      '<span class="when">'+new Date(x.at).toLocaleString('es',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})+'</span>'+
      '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(t)+'</span>'+
      '<span style="color:var(--accent);font-weight:600">'+esc((x.changes||[]).join(' · '))+'</span>'+
    '</div>';
  }).join('');
}

sheetBody.addEventListener('click', e => {
  const timeEl = e.target.closest('[data-if-time]');
  if (timeEl){
    e.preventDefault();
    const i = Number(timeEl.dataset.ifTime);
    const p = timeEl.dataset.ifTimeP;
    readBlockDraftFromDOM();
    const cur = (blockDraft.if[i] && blockDraft.if[i][p]) || (p === 'from' ? '22:00' : '06:00');
    openTimePicker(timeEl, cur, v => {
      blockDraft.if[i][p] = v;
      renderBlockEditor();
    });
    return;
  }
  const plus = e.target.closest('[data-num-plus]');
  const minus = e.target.closest('[data-num-minus]');
  if (plus || minus){
    e.preventDefault();
    const row = (plus || minus).closest('[data-if-row]');
    if (!row) return;
    const idx = $$('#bIfList [data-if-row]').indexOf(row);
    if (idx < 0) return;
    readBlockDraftFromDOM();
    const cur = Number(blockDraft.if[idx].n) || 0;
    const next = Math.max(0, cur + (plus ? 1 : -1));
    blockDraft.if[idx].n = next;
    renderBlockEditor();
    return;
  }
});

/* ===== MENÚ · BÚSQUEDA · FAB ===== */
$('#btnDrawer').addEventListener('click', openDrawer);
$('#btnMenu').addEventListener('click', () => {
  const trashCount = notes.filter(n => n.deleted).length;
  const sortLabels = { modified:'Modificación', created:'Creación', 'title-asc':'Título A–Z', 'title-desc':'Título Z–A' };
  const viewLabels = { list:'Lista', cards:'Tarjetas', board:'Tablero', tasks:'Tareas' };
  openSheet('Opciones', [
    { icon:'columns', label:'Vista', sub: viewLabels[prefs.view], action: () => { closeSheet(); setTimeout(openViewSheet, 200); } },
    { icon:'sort', label:'Ordenar por', sub: sortLabels[prefs.sort], action: () => { closeSheet(); setTimeout(openSortSheet, 200); } },
    { sep:true },
    { icon:'archive', label:'Archivadas', action: () => { closeSheet(); applyChipKey('archived'); } },
    { icon:'trash', label:'Papelera', sub: trashCount ? String(trashCount) : '', action: () => { closeSheet(); applyChipKey('trash'); } },
    { sep:true },
    { icon:'sliders', label:'Editar barra rápida', action: () => { closeSheet(); setTimeout(openChipManager, 200); } },
    { icon:'folderPlus', label:'Nueva carpeta', action: () => { closeSheet(); setTimeout(newFolderDialog, 200); } },
    { icon:'star', label:'Nueva colección', action: () => { closeSheet(); setTimeout(newCollectionDialog, 200); } },
    { icon:'zap', label:'Nuevo bloque', action: () => { closeSheet(); setTimeout(() => openBlockWizard(), 200); } },
    { icon:'target', label:'Nuevo estado', action: () => { closeSheet(); setTimeout(newStatusDialog, 200); } },
    { sep:true },
    { icon:'palette', label:'Tema', sub: ({classic:'Clásico',gold:'Oro',fire:'Fuego',forest:'Bosque'}[prefs.themePalette]||'Clásico') + ' · ' + ({auto:'Auto',light:'Claro',dark:'Oscuro'}[prefs.themeMode]||'Auto'),
      action: () => { closeSheet(); setTimeout(openThemeSheet, 200); } },
    { icon:'fileText', label:'Exportar Markdown', action: () => { closeSheet(); exportMarkdown(); } },
    { icon:'download', label:'Exportar JSON', action: () => { closeSheet(); exportJSON(); } },
    { icon:'upload', label:'Importar JSON', action: () => { closeSheet(); $('#fileInput').click(); } },
    { sep:true },
    { icon:'info', label:'Acerca de', action: () => {
      closeSheet();
      setTimeout(() => openSheet('Acerca de', [
        { icon:'note', label: notes.length + ' notas · ' + activeCount() + ' activas', action: closeSheet },
        { icon:'zap', label: blocks.length + ' bloques · ' + blocks.filter(b=>b.enabled).length + ' activos', action: closeSheet },
        { icon:'target', label: statuses.length + ' estados', action: closeSheet },
        { icon:'info', label:'Todo se guarda en este dispositivo', action: closeSheet }
      ]), 200);
    } }
  ]);
});

const searchbar = $('#searchbar');
const searchInput = $('#searchInput');
$('#btnSearch').addEventListener('click', () => {
  searchbar.classList.toggle('hidden');
  if (!searchbar.classList.contains('hidden')) searchInput.focus();
  else { searchInput.value = ''; query = ''; render(); }
});
$('#btnSearchClose').addEventListener('click', () => {
  searchbar.classList.add('hidden');
  searchInput.value = ''; query = '';
  searchInput.blur(); render();
});
searchInput.addEventListener('input', () => { query = searchInput.value; renderList(); });
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Escape'){ searchbar.classList.add('hidden'); searchInput.value = ''; query = ''; render(); }
});

const fab = $('#fab');
let fabTimer = null, fabLongFired = false, fabDown = false;
fab.addEventListener('pointerdown', e => {
  e.preventDefault(); fabDown = true; fabLongFired = false;
  fab.classList.add('pressing');
  fabTimer = setTimeout(() => {
    fabLongFired = true; fab.classList.remove('pressing');
    if (navigator.vibrate) navigator.vibrate(12);
    openTemplates();
  }, 480);
});
function fabUp(){
  if (!fabDown) return;
  fabDown = false; clearTimeout(fabTimer); fab.classList.remove('pressing');
  if (!fabLongFired) newNote();
}
fab.addEventListener('pointerup', fabUp);
fab.addEventListener('pointercancel', () => { fabDown=false; clearTimeout(fabTimer); fab.classList.remove('pressing'); });
fab.addEventListener('pointerleave', () => { if (!fabDown) return; fabDown=false; clearTimeout(fabTimer); fab.classList.remove('pressing'); });

function openTemplates(){
  openSheet('Nueva desde plantilla', [
    { icon:'note', label:'Nota en blanco', action: () => { closeSheet(); newNote(); } },
    { icon:'checklist', label:'Lista de tareas', action: () => { closeSheet(); newNoteWith('Tareas\n\n- [ ] Primera tarea\n- [ ] Segunda tarea\n- [ ] Tercera tarea\n'); } },
    { icon:'bulb', label:'Idea', action: () => { closeSheet(); newNoteWith('#idea\n\n'); } },
    { icon:'users', label:'Reunión', action: () => { closeSheet(); newNoteWith('#reunión\n\nAsistentes:\n\n- \n\nTemas:\n\n- \n\nAcciones:\n\n- [ ] \n'); } },
    { icon:'calendar', label:'Diario', action: () => {
      closeSheet();
      const d = new Date().toLocaleDateString('es', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
      newNoteWith('#diario\n' + d + '\n\n');
    } }
  ]);
}

/* ===== EXPORT / IMPORT ===== */
function exportJSON(){
  const data = { app:'notas', version:7, exportedAt:new Date().toISOString(), notes, folders, statuses, collections, blocks, prefs };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const d = new Date();
  a.href = url;
  a.download = 'notas-' + d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0') + '.json';
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 500);
  toast('Notas exportadas');
}
function exportMarkdown(){
  const list = notes.filter(n => !n.deleted).sort((a,b) => (b.pinned - a.pinned) || (b.modified - a.modified));
  if (!list.length) return toast('No hay notas para exportar');
  let md = '# Notas\n\n_Exportado el ' + new Date().toLocaleString('es') + '_\n\n';
  list.forEach(n => {
    const title = stripMd(noteTitle(n)).trim() || 'Sin título';
    const tags = noteTags(n);
    md += '## ' + title + '\n\n';
    if (tags.length) md += tags.map(t => '#' + t).join(' ') + '\n\n';
    if (n.folderId){ const f = findFolder(n.folderId); if (f) md += '_Carpeta: ' + f.name + '_\n\n'; }
    const s = findStatus(n.status);
    if (s) md += '_Estado: ' + s.name + '_\n\n';
    if (n.text) md += n.text + '\n\n';
    if (n.archived) md += '_Archivada_\n\n';
    md += '---\n\n';
  });
  const blob = new Blob([md], { type:'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const d = new Date();
  a.href = url;
  a.download = 'notas-' + d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0') + '.md';
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 500);
  toast('Markdown exportado');
}
$('#fileInput').addEventListener('change', e => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const incoming = Array.isArray(parsed) ? parsed : (parsed.notes || []);
      if (!Array.isArray(incoming)) throw new Error('formato');
      const existing = new Set(notes.map(n => n.id));
      let added = 0;
      incoming.forEach(n => {
        if (!n || typeof n !== 'object') return;
        if (!n.id || existing.has(n.id)) n.id = uid();
        notes.push({
          id: n.id,
          title: typeof n.title === 'string' ? n.title : '',
          text: String(n.text || ''),
          tags: Array.isArray(n.tags) ? n.tags.slice() : [],
          pinned: !!n.pinned, archived: !!n.archived,
          deleted: typeof n.deleted === 'number' ? n.deleted : null,
          color: n.color || null, folderId: n.folderId || null,
          status: n.status || statuses[0].id,
          created: n.created || Date.now(), modified: n.modified || Date.now(),
          openedAt: n.openedAt || null, viewTime: n.viewTime || 0, _fired: {}
        });
        added++;
      });
      if (Array.isArray(parsed.folders)) parsed.folders.forEach(f => { if (f && f.id && !folders.find(x => x.id === f.id)) folders.push(f); });
      if (Array.isArray(parsed.statuses)) parsed.statuses.forEach(s => { if (s && s.id && !statuses.find(x => x.id === s.id) && statuses.length < MAX_STATUSES) statuses.push(s); });
      if (Array.isArray(parsed.collections)) parsed.collections.forEach(c => { if (c && c.id && !collections.find(x => x.id === c.id)) collections.push(c); });
      if (Array.isArray(parsed.blocks)) parsed.blocks.forEach(b => { if (b && b.id && !blocks.find(x => x.id === b.id)) blocks.push(b); });
      persist(); render(); renderDrawer();
      toast(added + ' nota' + (added === 1 ? '' : 's') + ' importada' + (added === 1 ? '' : 's'));
    } catch(_){ toast('Archivo no válido'); }
    e.target.value = '';
  };
  reader.readAsText(file);
});

/* ===== TECLADO ===== */
document.addEventListener('keydown', e => {
  const mod = e.ctrlKey || e.metaKey;
  const inEditor = editor.classList.contains('open');
  const inSheet = sheetEl.classList.contains('open');
  const inDrawer = drawerEl.classList.contains('open');
  const inSearch = !searchbar.classList.contains('hidden') && document.activeElement === searchInput;
  const inAnyInput = inEditor || inSearch || (document.activeElement && /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName));

  if (e.key === 'Escape'){
    if (document.querySelector('.dd-panel.open, .time-panel.open')){ closeAllDropdowns(); return; }
    if (inSheet){ closeSheet(); return; }
    if (inDrawer){ closeDrawer(); return; }
    if (inEditor){ closeEditor(); return; }
    if (!searchbar.classList.contains('hidden')){ searchbar.classList.add('hidden'); searchInput.value = ''; query = ''; render(); }
    return;
  }
  if (mod && e.key.toLowerCase() === 'n'){ e.preventDefault(); if (!inEditor) newNote(); return; }
  if (mod && e.key.toLowerCase() === 's' && inEditor){ e.preventDefault(); commit(); setStatusState('saved'); return; }
  if (mod && e.key.toLowerCase() === 'b' && !inEditor){ e.preventDefault(); openDrawer(); return; }
  if (e.key === '/' && !inAnyInput && !inSheet && !inDrawer){
    e.preventDefault();
    searchbar.classList.remove('hidden'); searchInput.focus(); return;
  }
  if (inAnyInput || inSheet || inDrawer) return;
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp'){
    const list = visibleNotes();
    if (!list.length) return;
    e.preventDefault();
    if (e.key === 'ArrowDown') selectedIdx = selectedIdx < 0 ? 0 : Math.min(selectedIdx + 1, list.length - 1);
    else selectedIdx = selectedIdx < 0 ? 0 : Math.max(selectedIdx - 1, 0);
    applySelection();
    const w = $$('#list .note-wrap')[selectedIdx];
    if (w) w.scrollIntoView({ block:'nearest', behavior:'smooth' });
    return;
  }
  if (e.key === 'Enter' && selectedIdx >= 0){
    const list = visibleNotes();
    const n = list[selectedIdx];
    if (n){ e.preventDefault(); if (view.type === 'trash') openTrashSheet(n.id); else openEditor(n.id); }
    return;
  }
  if (selectedIdx >= 0){
    const list = visibleNotes();
    const n = list[selectedIdx];
    if (!n) return;
    if (e.key === 'p' && !mod){ e.preventDefault(); togglePin(n.id); return; }
    if (e.key === 'e' && !mod){ e.preventDefault(); archiveNote(n.id); return; }
    if (e.key === 'Backspace' && !mod){ e.preventDefault(); deleteNote(n.id); return; }
    const num = parseInt(e.key, 10);
    if (!mod && num >= 1 && num <= statuses.length){ e.preventDefault(); setStatus(n.id, statuses[num-1].id); return; }
  }
});
document.addEventListener('touchstart', e => { if (e.touches.length > 1) e.preventDefault(); }, { passive:false });

/* ===== INIT ===== */
(function init(){
  load();
  applyTheme();

  $('#btnDrawer').innerHTML = icon('sliders');
  $('#btnSearch').innerHTML = icon('search');
  $('#btnMenu').innerHTML = icon('more');
  $('#searchIcon').innerHTML = icon('search', 18);
  $('#btnSearchClose').innerHTML = icon('close', 18);
  $('#btnSearchSave').innerHTML = icon('star', 16);
  $('#fab').innerHTML = icon('plus', 25);
  $('#edBack').innerHTML = icon('back');
  $('#edMore').innerHTML = icon('more');
  $('#edColor').innerHTML = icon('palette');
  $('#edPin').innerHTML = icon('pin');

  render();
  updateFooter();
  renderDrawer();

  setTimeout(runScheduledBlocks, 1200);
  setInterval(runScheduledBlocks, 60000);

  /* Format bar above mobile keyboard */
  (function setupFmtKeyboard(){
    const fmt = () => $('#edFmt');
    function place(){
      const el = fmt(); if (!el) return;
      if (!editor.classList.contains('open')){
        el.classList.remove('kb-float'); el.style.bottom = ''; return;
      }
      if ((prefs.editorMode || 'source') === 'read'){
        el.classList.remove('kb-float'); el.style.bottom = ''; return;
      }
      const vv = window.visualViewport;
      if (!vv) return;
      const kb = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      if (kb > 80){
        el.classList.add('kb-float');
        el.style.bottom = kb + 'px';
        const scroll = $('#edScroll');
        if (scroll) scroll.style.paddingBottom = (el.offsetHeight + 8) + 'px';
      } else {
        el.classList.remove('kb-float');
        el.style.bottom = '';
        const scroll = $('#edScroll');
        if (scroll) scroll.style.paddingBottom = '';
      }
    }
    if (window.visualViewport){
      visualViewport.addEventListener('resize', place);
      visualViewport.addEventListener('scroll', place);
    }
    window.addEventListener('resize', place);
    const obs = new MutationObserver(place);
    if (editor) obs.observe(editor, { attributes:true, attributeFilter:['class'] });
  })();

  window.addEventListener('beforeunload', () => { clearTimeout(saveTimer); commit(); persistNow(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden){
      clearTimeout(saveTimer);
      commit();
      persistNow();
    }
  });
})();