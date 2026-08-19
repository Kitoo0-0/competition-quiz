(() => {
  const questions = window.QUIZ_QUESTIONS;
  const scaleLabels = ['非常不符合','比较不符合','一般','比较符合','非常符合'];
  const QUIZ_SCHEMA_VERSION = 'v16-48';

  // 题目不展示测量维度，减少受试者按“想得到的类型”作答。
  // 只有题库结构真的变化时才清理旧版本答案；UI/文案升级不改 schema。
  const storedSchema = localStorage.getItem('competition_quiz_schema');
  if (storedSchema && storedSchema !== QUIZ_SCHEMA_VERSION) {
    localStorage.removeItem('competition_quiz_index');
    localStorage.removeItem('competition_quiz_answers');
    localStorage.removeItem('competition_quiz_completed');
  }
  localStorage.setItem('competition_quiz_schema', QUIZ_SCHEMA_VERSION);

  let answers = {};
  try { answers = JSON.parse(localStorage.getItem('competition_quiz_answers') || '{}'); } catch (_) {}

  function isAnswerAllowed(q, value) {
    if (q.type === 'binary') return value === 'A' || value === 'B';
    const n = Number(value);
    return Number.isInteger(n) && n >= 1 && n <= 5;
  }

  // 浏览器缓存若出现异常，只丢掉那一题，不清空整份答卷。
  Object.keys(answers).forEach(key => {
    const q = questions.find(item => String(item.id) === String(key));
    if (!q || !isAnswerAllowed(q, answers[key])) delete answers[key];
  });

  const completedCount = questions.filter(q =>
    Object.prototype.hasOwnProperty.call(answers, q.id) && isAnswerAllowed(q, answers[q.id])
  ).length;
  const actuallyComplete = completedCount === questions.length;

  // 只有上一份测试真的完整完成后，再次主动进入答题页才开启新测试。
  // 如果只是少题/中断，则保留全部已有答案并从第一道未答题继续。
  if (localStorage.getItem('competition_quiz_completed') === '1' && actuallyComplete) {
    answers = {};
    localStorage.removeItem('competition_quiz_index');
    localStorage.removeItem('competition_quiz_answers');
    localStorage.removeItem('competition_quiz_completed');
  } else if (!actuallyComplete) {
    localStorage.removeItem('competition_quiz_completed');
  }

  function firstUnansweredIndex() {
    const missing = questions.findIndex(q =>
      !Object.prototype.hasOwnProperty.call(answers, q.id) || !isAnswerAllowed(q, answers[q.id])
    );
    return missing === -1 ? 0 : missing;
  }

  let savedIndex = Number(localStorage.getItem('competition_quiz_index'));
  let index;
  if (!Number.isInteger(savedIndex) || savedIndex < 0 || savedIndex >= questions.length) {
    index = firstUnansweredIndex();
  } else {
    const currentQ = questions[savedIndex];
    // 如果保存位置已经答过，而后面还有漏题，优先跳到第一道漏题。
    const missingIndex = firstUnansweredIndex();
    index = (!actuallyComplete && missingIndex < savedIndex) ? missingIndex : savedIndex;
    if (!actuallyComplete && answers[currentQ.id] !== undefined && missingIndex !== -1) {
      index = missingIndex;
    }
  }
  index = Math.max(0, Math.min(index, questions.length - 1));
  localStorage.setItem('competition_quiz_answers', JSON.stringify(answers));
  localStorage.setItem('competition_quiz_index', String(index));

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
    count.textContent = `${String(index + 1).padStart(2,'0')} / ${questions.length}`;
    bar.style.width = `${((index + 1) / questions.length) * 100}%`;
    meta.textContent = q.type === 'binary'
      ? '情境选择 · 选更接近你的反应'
      : (q.dimension && q.dimension.startsWith('K') ? '补充判断 · 按第一反应作答' : '行为判断 · 按真实习惯作答');
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
