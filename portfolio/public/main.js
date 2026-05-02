/* ── SHARED JS: CURSOR + SCROLL REVEAL + NAV + THEME + AI CHAT ── */

// THEME
(function(){
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const btn = document.getElementById('theme-toggle');
  if(!btn) return;
  btn.textContent = saved === 'dark' ? '☀' : '☾';
  btn.addEventListener('click', () => {
    const curr = document.documentElement.getAttribute('data-theme');
    const next = curr === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀' : '☾';
  });
})();

// CURSOR
(function(){
  const isMobile = window.matchMedia('(hover:none),(pointer:coarse)').matches;
  if(isMobile) return;
  const cur = document.getElementById('cur'), dot = document.getElementById('cur-dot');
  if(!cur||!dot) return;
  let mx=0,my=0,cx=0,cy=0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx+'px'; dot.style.top = my+'px';
  });
  (function loop(){ cx+=(mx-cx)*.16; cy+=(my-cy)*.16; cur.style.left=cx+'px'; cur.style.top=cy+'px'; requestAnimationFrame(loop); })();
  document.querySelectorAll('a,button,[data-hot],.loop-step,.case,.edge-cell,.cred-block,.sk-tag,.tier-block,.artifact-card,.tax-row,.principle,.mode-block,.ai-input,.ai-sug').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('hot'));
    el.addEventListener('mouseleave', () => cur.classList.remove('hot'));
  });
})();

// SCROLL REVEAL
(function(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const children = [...e.target.querySelectorAll('.case,.edge-cell,.cred-block,.sk-block,.tier-block,.loop-step,.artifact-card,.tax-row,.principle,.mode-block,.cv-job,.cv-cred')];
        if(children.length){
          children.forEach((c,i) => {
            c.style.opacity='0'; c.style.transform='translateY(14px)';
            setTimeout(() => { c.style.transition='opacity .5s ease,transform .5s ease'; c.style.opacity='1'; c.style.transform='translateY(0)'; }, i*60);
          });
        }
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.07});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

// NAV ACTIVE STATE
(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tb-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if(href === path || (path===''&&href==='index.html') || (href.includes('index')&&path==='')) {
      a.classList.add('active');
    }
  });
})();

// EVAL LOOP DATA
const LOOP_STEPS = [
  {name:'Anchor',badge:'Always run',title:'Strip the prompt to what must be true.',desc:'Extract the core requirement, constraints, format, exclusions, and failure boundary before evaluating anything. If the anchor is wrong, everything downstream is wrong.<br><br><strong>This is not a skim.</strong> Missing a constraint at this stage means the entire evaluation is built on a wrong foundation.',rule:'If the anchor is wrong, everything downstream is wrong.',signals:['Core requirement','Explicit constraints','Format requirements','Exclusions','Failure boundary'],trigger:'Always run'},
  {name:'Instruction Check',badge:'Always run',title:'Did the response do exactly that?',desc:'Scan for missed constraints, wrong format, added assumptions, violated exclusions. A clear instruction miss is a failure. No rehabilitation.<br><br>A response that executes every keyword while violating the instruction\'s intent is still a failure. The test is not "did it try?" — it\'s "did it do the thing?"',rule:'Clear instruction miss = failure. No rehabilitation.',signals:['Missed constraints','Wrong format','Added assumptions','Violated exclusions','Intent vs literal execution'],trigger:'Always run'},
  {name:'Reality Check',badge:'Trigger: precise claims',title:'Is anything made up, overstated, or unsupported?',desc:'Test every factual claim: entailed by the task = valid. Merely compatible with the task = hallucination flag. <strong>One confirmed hallucination overrides everything else.</strong><br><br>Confident framing is not evidence. Suspicious specificity always triggers this step.',rule:'One confirmed hallucination overrides everything else.',signals:['False precision','Plausible but ungrounded','Confident framing','Named entity claims','Numeric distortion'],trigger:'Precise claims'},
  {name:'Logic Check',badge:'After Step 3',title:'Do conclusions follow from valid premises?',desc:'Evaluate reasoning only on facts that pass Step 3. A correct answer produced by broken reasoning is a <strong>reasoning failure</strong>. A wrong answer from valid reasoning is a <strong>factual failure</strong>.<br><br>If Step 3 fails, Step 4 only documents downstream damage.',rule:'Correct answer + broken reasoning = reasoning failure.',signals:['Premise validity','Inference chain','Conclusion alignment','Step 3 dependency','Reasoning vs factual failure'],trigger:'After Reality Check'},
  {name:'Ambiguity Check',badge:'Trigger: conflicting constraints',title:'Would another annotator read this the same way?',desc:'Classify ambiguity as prompt-level or interpretation-level. <strong>No ambiguity → don\'t invent it. Silent assumption → failure. Explicit assumption → acceptable minimum.</strong><br><br>When ambiguity exists but a decision is required: select the most defensible interpretation, state the assumption minimally, commit.',rule:'Silent assumption = failure. Explicit assumption = acceptable minimum.',signals:['Prompt-level ambiguity','Interpretation-level','Silent assumptions','Conflicting constraints','Defensible interpretation'],trigger:'Conflicting constraints'},
  {name:'Root Cause',badge:'Trigger: multiple failures',title:'Find the first thing that went wrong.',desc:'When multiple failures are present, the root cause is the earliest failure in the evaluation loop. <strong>Do not list symptoms. Name the cause.</strong><br><br>If your root cause cannot be expressed as a single fix, it is not the root cause — keep tracing upstream.',rule:'The root cause is the earliest failure in the loop. One fix.',signals:['First failure point','Cascade attribution','Single-fix test','Primary vs secondary cause'],trigger:'Multiple failures'},
  {name:'The Call',badge:'Always run',title:'Make a single, decisive judgment.',desc:'Classify internally: reliable / usable with weakness / unreliable. Do not expose the classification in output. <strong>Partial fulfillment of the core requirement is task failure</strong> unless the remaining gap doesn\'t affect usability.<br><br>Epistemic and semantic uncertainty are valid. Normative disagreement is not.',rule:'Partial fulfillment of core requirement = task failure.',signals:['Reliable','Usable with weakness','Unreliable','Usability gap test'],trigger:'Always run'},
  {name:'Write It',badge:'Always run',title:'One paragraph. Decision visible in the lead sentence.',desc:'Include what the response did, the root issue if any, and why it matters. <strong>1–2 core judgments only. No cataloging.</strong><br><br>No rubric language. No visible scoring structure. The decision must be instantly verifiable from the first sentence.',rule:'Decision visible in lead sentence. No rubric language.',signals:['Decision-first','Root issue if any','Why it matters','No structure exposed'],trigger:'Always run'}
];

function renderLoopStep(i){
  const s = LOOP_STEPS[i];
  const detail = document.getElementById('loopDetail');
  if(!detail) return;
  detail.innerHTML = `
    <div class="ld-header">
      <div class="ld-title">${s.title}</div>
      <div class="ld-badge">${s.badge}</div>
    </div>
    <div class="ld-trigger-tag">Trigger: <span>${s.trigger}</span></div>
    <div class="ld-desc">${s.desc}</div>
    <div class="ld-rule"><em>Rule →</em> ${s.rule}</div>
    <div class="ld-signal-wrap">
      <div class="ld-signal-label">Detection signals</div>
      <div class="ld-signal">${s.signals.map(t=>`<span class="signal-tag">${t}</span>`).join('')}</div>
    </div>`;
}

function initLoop(){
  const nav = document.getElementById('loopNav');
  if(!nav) return;
  renderLoopStep(0);
  nav.querySelectorAll('.loop-step').forEach((el,i) => {
    el.addEventListener('click', () => {
      nav.querySelectorAll('.loop-step').forEach(e => e.classList.remove('active'));
      el.classList.add('active');
      renderLoopStep(i);
    });
  });
}

document.addEventListener('DOMContentLoaded', initLoop);

// AI CHAT WIDGET
(function(){
  const btn = document.getElementById('ai-chat-btn');
  const panel = document.getElementById('ai-panel');
  const closeBtn = document.getElementById('ai-close');
  const input = document.getElementById('ai-input');
  const sendBtn = document.getElementById('ai-send');
  const msgs = document.getElementById('ai-messages');
  if(!btn||!panel) return;

  let isOpen = false;
  let isTyping = false;

  function togglePanel(){
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    if(isOpen && input) setTimeout(() => input.focus(), 200);
  }

  btn.addEventListener('click', togglePanel);
  if(closeBtn) closeBtn.addEventListener('click', () => { isOpen=false; panel.classList.remove('open'); });

  function addMsg(text, role){
    const div = document.createElement('div');
    div.className = 'ai-msg '+role;
    const now = new Date();
    const t = now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');
    div.innerHTML = `<div class="ai-bubble">${text}</div><div class="ai-msg-time">${t}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  function showThinking(){
    const group = document.createElement('div');
    group.className = 'ai-msg-group';
    group.id = 'ai-thinking-indicator';
    group.innerHTML = `
      <div class="ai-msg bot">
        <div class="ai-model-label">Ebubeco Multi-Model</div>
        <div class="ai-thinking"><span></span><span></span><span></span></div>
      </div>
    `;
    msgs.appendChild(group);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function hideThinking(){
    const t = document.getElementById('ai-thinking-indicator');
    if(t) t.remove();
  }

  function addBotReply(text) {
    const group = document.createElement('div');
    group.className = 'ai-msg-group';
    
    const col = document.createElement('div');
    col.className = 'ai-msg bot';
    const now = new Date();
    const t = now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');
    col.innerHTML = `
      <div class="ai-model-label">Ebubeco Multi-Model</div>
      <div class="ai-bubble">${text}</div>
      <div class="ai-msg-time">${t}</div>
    `;
    group.appendChild(col);
    
    msgs.appendChild(group);
    msgs.scrollTop = msgs.scrollHeight;
  }

  async function sendMessage(text){
    if(!text.trim()||isTyping) return;
    isTyping = true;
    if(sendBtn) sendBtn.disabled = true;
    addMsg(text, 'user');
    if(input) input.value = '';
    showThinking();
    const sugs = document.getElementById('ai-suggestions');
    if(sugs) sugs.style.display='none';
    try{
      const res = await fetch('/api/chat', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({message:text})
      });
      hideThinking();
      if(!res.ok) throw new Error('API unavailable');
      const data = await res.json();
      if (data.reply) {
        addBotReply(data.reply);
      } else {
        addMsg('The assistant is temporarily at capacity. Please try again.', 'bot');
      }
    } catch(err){
      hideThinking();
      addMsg('The assistant is currently offline. Please <a href="#contact" style="color:var(--teal)">reach out directly</a> — Ebube responds within 24 hours.', 'bot');
    }
    isTyping = false;
    if(sendBtn) sendBtn.disabled = false;
    if(input) input.focus();
  }

  if(sendBtn) sendBtn.addEventListener('click', () => sendMessage(input ? input.value : ''));
  if(input) input.addEventListener('keydown', e => {
    if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); sendMessage(input.value); }
  });

  document.querySelectorAll('.ai-sug').forEach(s => {
    s.addEventListener('click', () => sendMessage(s.textContent));
  });
})();

// AI KNOWLEDGE BASE
(function(){
  const input = document.getElementById('kb-input');
  const submit = document.getElementById('kb-submit');
  const response = document.getElementById('kb-response');
  const resContent = document.getElementById('kb-res-content');
  const clearBtn = document.getElementById('kb-clear');
  if(!input || !submit || !response || !resContent) return;

  let isLoading = false;

  document.querySelectorAll('.kb-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      input.value = chip.dataset.q || chip.textContent.trim();
      input.focus();
      input.dispatchEvent(new Event('input'));
    });
  });

  function showThinking(){
    response.hidden = false;
    resContent.innerHTML = `
      <div class="kb-res-card">
        <div class="kb-res-model">Ebubeco Multi-Model</div>
        <div class="kb-thinking"><span></span><span></span><span></span></div>
      </div>
    `;
  }

  async function askKB(question){
    if(!question.trim() || isLoading) return;
    isLoading = true;
    submit.disabled = true;
    const origText = submit.textContent;
    submit.textContent = 'Searching…';
    showThinking();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ message: question.trim() })
      });
      if(!res.ok) throw new Error('API error');
      const data = await res.json();
      if (data.reply) {
        resContent.innerHTML = `
          <div class="kb-res-card">
            <div class="kb-res-model">Ebubeco Multi-Model</div>
            <div>${data.reply}</div>
          </div>
        `;
      } else {
        resContent.textContent = 'Unable to generate response. Please try again.';
      }
    } catch(err) {
      resContent.innerHTML = '<div style="grid-column: 1 / -1;">The assistant is currently offline. Please <a href="mailto:charlesgigz7@gmail.com" style="color:var(--teal)">reach out directly</a> — Ebube responds within 24 hours.</div>';
    }

    isLoading = false;
    submit.disabled = false;
    submit.textContent = origText;
  }

  submit.addEventListener('click', () => askKB(input.value));
  input.addEventListener('keydown', e => {
    if(e.key === 'Enter' && e.ctrlKey){ e.preventDefault(); askKB(input.value); }
  });
  if(clearBtn) clearBtn.addEventListener('click', () => {
    response.hidden = true;
    resContent.textContent = '';
    input.value = '';
    input.focus();
  });
})();

// SPEED PROOF COUNTER
(function(){
  const el = document.getElementById('speed-counter');
  if(!el) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        let n=0; const target=50;
        const step = () => {
          n = Math.min(n+2, target);
          el.textContent = n;
          if(n<target) requestAnimationFrame(step);
        };
        step(); obs.unobserve(el);
      }
    });
  });
  obs.observe(el);
})();
// MICRO1 IMAGE POPUP
(function(){
  const img = document.querySelector('.micro1-img');
  if(!img) return;

  // Create modal elements
  const modal = document.createElement('div');
  modal.id = 'img-modal';
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);display:none;align-items:center;justify-content:center;z-index:10000;cursor:zoom-out;backdrop-filter:blur(8px);opacity:0;transition:opacity 0.3s ease;';
  
  const clone = document.createElement('img');
  clone.src = img.src;
  clone.style.cssText = 'max-width:90%;max-height:90%;object-fit:contain;transform:scale(0.8);transition:transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);';
  
  modal.appendChild(clone);
  document.body.appendChild(modal);

  img.style.cursor = 'zoom-in';
  img.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.style.opacity = '1';
      clone.style.transform = 'scale(1)';
    }, 10);
  });

  modal.addEventListener('click', () => {
    modal.style.opacity = '0';
    clone.style.transform = 'scale(0.8)';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  });
})();
