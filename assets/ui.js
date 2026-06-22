/* MUEC shared UI helpers: slugs, CSV download, license + download-button snippets. */
(function(){
  const esc = s => (s==null?'':String(s)).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const slug = s => String(s||'').toLowerCase().replace(/\([^)]*\)/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,60);

  const ATTRIBUTION = "Music Education Editors' Circle — CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/";

  // License-agreement modal. Calls onAgree() only if the user accepts.
  function licenseGate(onAgree){
    const ov = document.createElement('div'); ov.className='modal-ov';
    ov.innerHTML =
      '<div class="modal"><h3>Data license</h3>'+
      '<p>This dataset is provided by the Music Education Editors’ Circle under '+
      '<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener">CC BY-NC 4.0</a>. '+
      'By downloading, you agree to use it for <strong>non-commercial</strong> purposes and to '+
      '<strong>attribute</strong> the Music Education Editors’ Circle.</p>'+
      '<div class="modal-btns"><button class="btn ghost" data-act="cancel">Cancel</button>'+
      '<button class="btn" data-act="agree">I agree &amp; download</button></div></div>';
    document.body.appendChild(ov);
    const close=()=>ov.remove();
    ov.addEventListener('click',e=>{ if(e.target===ov) close(); });
    ov.querySelector('[data-act=cancel]').onclick=close;
    ov.querySelector('[data-act=agree]').onclick=()=>{ close(); onAgree(); };
  }

  // Download array-of-arrays as CSV — gated by the license modal and stamped with an Attribution field.
  function downloadCSV(filename, headers, rows){
    licenseGate(()=>{
      const q = v => { const s = (v==null?'':String(v)); return /[",\n]/.test(s) ? '"'+s.replace(/"/g,'""')+'"' : s; };
      const H = headers.concat(['Attribution / License']);
      const R = rows.map(r=>r.concat([ATTRIBUTION]));
      const lines = [H.map(q).join(',')].concat(R.map(r=>r.map(q).join(',')));
      const blob = new Blob(['﻿'+lines.join('\r\n')], {type:'text/csv;charset=utf-8;'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename; document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    });
  }

  const LICENSE_HTML =
    '<div class="note licen"><strong>Open data.</strong> This dataset is shared under ' +
    '<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener">CC BY-NC 4.0</a> ' +
    '— reuse with attribution for non-commercial purposes. Please cite the Music Education Editors’ Circle. ' +
    'Corrections welcome via <a href="https://groups.io/g/muec" target="_blank" rel="noopener">the list</a>.</div>';

  function triggerDownload(url){
    const a=document.createElement('a'); a.href=url; a.setAttribute('download',''); document.body.appendChild(a); a.click(); a.remove();
  }
  // Gate any element with [data-dl-url] (XLSX and other direct file downloads) behind the license modal.
  document.addEventListener('click', e=>{
    const el = e.target.closest('[data-dl-url]');
    if(el){ e.preventDefault(); licenseGate(()=>triggerDownload(el.getAttribute('data-dl-url'))); }
  });

  const fileExt = url => { const m=String(url||'').match(/\.([a-z0-9]+)(?:[?#]|$)/i); return m?m[1].toUpperCase():'FILE'; };
  function downloadBar(opts){
    let h = '<div class="dlbar">';
    if(opts.csvId)   h += `<button class="btn ghost" id="${opts.csvId}">Download dataset (CSV)</button>`;
    if(opts.xlsxUrl) h += `<button class="btn ghost" data-dl-url="${esc(opts.xlsxUrl)}">Download dataset (${fileExt(opts.xlsxUrl)})</button>`;
    h += '</div>';
    return h;
  }

  window.MUEC = { esc, slug, downloadCSV, licenseGate, LICENSE_HTML, downloadBar };
})();
