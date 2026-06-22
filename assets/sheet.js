/* MUEC live-spreadsheet loader.
   Reads an .xlsx file in the browser (via SheetJS) and renders a searchable table.
   The website reads the published copies in data/xlsx/ — replace those files
   (via the sync script) and the site updates itself, no rebuild needed. */
(function(){
  const esc = s => (s==null?'':String(s)).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  // Turn URL-ish text into links. Handles ';'-separated lists and bare domains.
  function linkify(val){
    const s = String(val||'').trim();
    if(!s) return '';
    return s.split(/\s*;\s*/).map(tok=>{
      const t = tok.trim();
      if(/^https?:\/\//i.test(t)) return `<a href="${esc(t)}" target="_blank" rel="noopener">${esc(t.replace(/^https?:\/\//,''))}</a>`;
      if(/^www\./i.test(t))       return `<a href="https://${esc(t)}" target="_blank" rel="noopener">${esc(t)}</a>`;
      if(/^[\w-]+(\.[\w-]+)+\//.test(t)) return `<a href="https://${esc(t)}" target="_blank" rel="noopener">${esc(t)}</a>`;
      return esc(t);
    }).join('; ');
  }

  async function workbook(url){
    const r = await fetch(url);
    if(!r.ok) throw new Error('HTTP '+r.status);
    return XLSX.read(await r.arrayBuffer(), {type:'array'});
  }
  function aoa(wb, sheet){
    const ws = wb.Sheets[sheet] || wb.Sheets[wb.SheetNames[0]];
    return XLSX.utils.sheet_to_json(ws, {header:1, blankrows:false, defval:''});
  }

  /* opts: { sheet, drop:[headers], linkCols:[headers], search:true, searchInput:el } */
  async function render(url, container, opts={}){
    const box = typeof container==='string' ? document.querySelector(container) : container;
    try{
      const wb = await workbook(url);
      let rows = aoa(wb, opts.sheet);
      if(!rows.length){ box.innerHTML = '<div class="note">No data found in this sheet.</div>'; return; }
      let headers = rows[0].map(h=>String(h));
      let body = rows.slice(1);
      // drop columns
      const dropIdx = (opts.drop||[]).map(h=>headers.indexOf(h)).filter(i=>i>=0).sort((a,b)=>b-a);
      dropIdx.forEach(i=>{ headers.splice(i,1); body = body.map(r=>{ const c=r.slice(); c.splice(i,1); return c; }); });
      const linkSet = new Set((opts.linkCols||[]).map(h=>headers.indexOf(h)).filter(i=>i>=0));

      const draw = (term='')=>{
        const t = term.trim().toLowerCase();
        const filtered = t ? body.filter(r=>r.join(' ').toLowerCase().includes(t)) : body;
        const thead = '<thead><tr>'+headers.map(h=>`<th>${esc(h)}</th>`).join('')+'</tr></thead>';
        const tb = '<tbody>'+filtered.map(r=>'<tr>'+r.map((c,i)=>`<td>${linkSet.has(i)?linkify(c):esc(c)}</td>`).join('')+'</tr>').join('')+'</tbody>';
        box.innerHTML = `<div class="count">${filtered.length} of ${body.length} rows</div>`+
                        `<div style="overflow-x:auto"><table>${thead}${tb}</table></div>`;
      };
      draw();
      if(typeof opts.onCount==='function') opts.onCount(body.length);
      if(opts.csvName){ window.__csv = window.__csv||{}; window.__csv[opts.csvName] = {headers, body}; }
      if(opts.searchInput){ opts.searchInput.addEventListener('input', e=>draw(e.target.value)); }
    }catch(err){
      box.innerHTML = `<div class="note">Live data didn't load (${esc(err.message)}). This table populates on the
        published GitHub Pages site. For a local preview, run a simple web server in this folder
        (e.g. <code>python3 -m http.server</code>) and open the page at <code>localhost:8000</code>,
        rather than double-clicking the file.</div>`;
    }
  }

  window.MUECSheet = { render, linkify };
})();
