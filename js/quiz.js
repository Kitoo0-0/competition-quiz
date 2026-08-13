(() => {
  const questions = window.QUIZ_QUESTIONS;
  const scaleLabels = ['非常不符合','比较不符合','一般','比较符合','非常符合'];
  const dimLabels = {E:'底层能力 · 情绪洞察',A:'底层能力 · 外貌呈现',S:'底层能力 · 社交资本',W:'底层能力 · 工作执行',C:'底层能力 · 竞争野心',R:'底层能力 · 战略认知',L:'底层能力 · 资源杠杆',K69:'最终校准',K70:'最终校准',K71:'最终校准',K72:'最终校准'};

  if (localStorage.getItem('competition_quiz_code') !== 'DEMO-2026') {
    location.href = 'redeem.html';
    return;
  }

  let index = Number(localStorage.getItem('competition_quiz_index') || 0);
  let answers = {};
  try { answers = JSON.parse(localStorage.getItem('competition_quiz_answers') || '{}'); } catch (_) {}
  index = Math.max(0, Math.min(index, questions.length - 1));

  const box = document.getElementById('questionBox');
  const meta = document.getElementById('questionMeta');
  const title = document.getElementById('questionTitle');
  const answersEl = document.getElementById('answers');
  const bar = document.getElementById('progressBar');
  const count = document.getElementById('progressCount');
  const prevBtn = document.getElementById('prevBtn');
  const saveBtn = document.getElementById('saveBtn');

  function persist() {
    localStorage.setItem('competition_quiz_index', String(index));
    localStorage.setItem('competition_quiz_answers', JSON.stringify(answers));
  }

  function render() {
    const q = questions[index];
    count.textContent = `${String(index + 1).padStart(2,'0')} / 72`;
    bar.style.width = `${((index + 1) / 72) * 100}%`;
    meta.textContent = q.type === 'binary' ? '策略选择 · 强制二选一' : (dimLabels[q.dimension] || '最终校准');
    title.textContent = q.text;
    answersEl.innerHTML = '';

    const options = q.type === 'binary'
      ? [{value:'A',label:`A｜${q.a}`},{value:'B',label:`B｜${q.b}`}]
      : scaleLabels.map((label, i) => ({value:i + 1,label}));

    options.forEach(option => {
      const button = document.createElement('button');
      button.className = 'answer';
      if (answers[q.id] === option.value) button.classList.add('selected');
      button.innerHTML = `<span class="answer-dot"></span><span>${option.label}</span>`;
      button.addEventListener('click', () => choose(option.value));
      answersEl.appendChild(button);
    });

    prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
  }

  function choose(value) {
    const q = questions[index];
    answers[q.id] = value;
    persist();
    [...answersEl.children].forEach(btn => btn.classList.remove('selected'));
    const selectedIndex = q.type === 'binary' ? (value === 'A' ? 0 : 1) : value - 1;
    answersEl.children[selectedIndex]?.classList.add('selected');
    setTimeout(() => {
      if (index === questions.length - 1) {
        localStorage.setItem('competition_quiz_completed', '1');
        location.href = 'result.html';
      } else {
        index += 1;
        persist();
        transition();
      }
    }, 180);
  }

  function transition() {
    box.classList.remove('q-enter');
    box.classList.add('q-exit');
    setTimeout(() => {
      box.classList.remove('q-exit');
      render();
      box.classList.add('q-enter');
    }, 140);
  }

  prevBtn.addEventListener('click', () => {
    if (index <= 0) return;
    index -= 1;
    persist();
    transition();
  });

  saveBtn.addEventListener('click', () => {
    persist();
    location.href = 'index.html';
  });

  render();
})();
