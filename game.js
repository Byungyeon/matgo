/* 맞고 (Go-Stop) - 풀 룰
   타입: gwang(광), yul(끗/동물), dan(띠), pi(피)
   특수: rain(비광), godori(고도리 새), ssang(쌍피), bi-dan(비띠), bi-yul(제비)
*/

// ====== 카드 데이터 (48장) ======
const MONTH_NAME = {1:'송학',2:'매조',3:'벚꽃',4:'흑싸리',5:'난초',6:'모란',7:'홍싸리',8:'공산',9:'국화',10:'단풍',11:'오동',12:'비'};
const MONTH_ICON = {1:'\u677e',2:'\u6885',3:'\u685c',4:'\u85e4',5:'\u862d',6:'\u7261',7:'\u8403',8:'\u6708',9:'\u83ca',10:'\u6953',11:'\u6850',12:'\u96e8'};
const TYPE_LABEL = {gwang:'\uad11', yul:'\ubabd', dan:'\ub760', pi:'\ud53c'};
const TYPE_ORDER = ['gwang','dan','yul','pi'];

const MONTH_EN = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
function cardFile(name) { return 'cards/' + name; }

function makeDeck() {
  const cards = [];
  let uid = 0;
  const add = (c) => { cards.push({uid: uid++, ...c}); };
  const M = (m, type, suffix) => cardFile('Hwatu_' + MONTH_EN[m] + '_' + type + (suffix ? '_' + suffix : '') + '.svg');

  // 1\uc6d4 \uc1a1\ud559
  add({month:1, type:'gwang', name:'\uc1a1\ud559\uad11', file:M(1,'Hikari')});
  add({month:1, type:'dan', dan:'hong', name:'\ud64d\ub2e8\ub760', file:M(1,'Tanzaku')});
  add({month:1, type:'pi', name:'\uc1a1\ud53c', file:M(1,'Kasu',1)});
  add({month:1, type:'pi', name:'\uc1a1\ud53c', file:M(1,'Kasu',2)});
  // 2\uc6d4 \ub9e4\uc870
  add({month:2, type:'yul', godori:true, name:'\uaf48\uaf3c\ub9ac', file:M(2,'Tane')});
  add({month:2, type:'dan', dan:'hong', name:'\ud64d\ub2e8\ub760', file:M(2,'Tanzaku')});
  add({month:2, type:'pi', name:'\ub9e4\ud53c', file:M(2,'Kasu',1)});
  add({month:2, type:'pi', name:'\ub9e4\ud53c', file:M(2,'Kasu',2)});
  // 3\uc6d4 \ubcda\uaf43
  add({month:3, type:'gwang', name:'\ubcda\uaf43\uad11', file:M(3,'Hikari')});
  add({month:3, type:'dan', dan:'hong', name:'\ud64d\ub2e8\ub760', file:M(3,'Tanzaku')});
  add({month:3, type:'pi', name:'\ubcda\ud53c', file:M(3,'Kasu',1)});
  add({month:3, type:'pi', name:'\ubcda\ud53c', file:M(3,'Kasu',2)});
  // 4\uc6d4 \ud751\uc2f8\ub9ac
  add({month:4, type:'yul', godori:true, name:'\ub450\uacac', file:M(4,'Tane')});
  add({month:4, type:'dan', dan:'cho', name:'\ucd08\ub2e8\ub760', file:M(4,'Tanzaku')});
  add({month:4, type:'pi', name:'\ud751\ud53c', file:M(4,'Kasu',1)});
  add({month:4, type:'pi', name:'\ud751\ud53c', file:M(4,'Kasu',2)});
  // 5\uc6d4 \ub09c\ucd08
  add({month:5, type:'yul', name:'\ub2e4\ub9ac', file:M(5,'Tane')});
  add({month:5, type:'dan', dan:'cho', name:'\ucd08\ub2e8\ub760', file:M(5,'Tanzaku')});
  add({month:5, type:'pi', name:'\ub09c\ud53c', file:M(5,'Kasu',1)});
  add({month:5, type:'pi', name:'\ub09c\ud53c', file:M(5,'Kasu',2)});
  // 6\uc6d4 \ubaa8\ub780
  add({month:6, type:'yul', name:'\ub098\ube44', file:M(6,'Tane')});
  add({month:6, type:'dan', dan:'cheong', name:'\uccad\ub2e8\ub760', file:M(6,'Tanzaku')});
  add({month:6, type:'pi', name:'\ubaa8\ud53c', file:M(6,'Kasu',1)});
  add({month:6, type:'pi', name:'\ubaa8\ud53c', file:M(6,'Kasu',2)});
  // 7\uc6d4 \ud64d\uc2f8\ub9ac
  add({month:7, type:'yul', name:'\uba67\ub3fc\uc9c0', file:M(7,'Tane')});
  add({month:7, type:'dan', dan:'cho', name:'\ucd08\ub2e8\ub760', file:M(7,'Tanzaku')});
  add({month:7, type:'pi', name:'\ud64d\uc2f8\ub9ac\ud53c', file:M(7,'Kasu',1)});
  add({month:7, type:'pi', name:'\ud64d\uc2f8\ub9ac\ud53c', file:M(7,'Kasu',2)});
  // 8\uc6d4 \uacf5\uc0b0
  add({month:8, type:'gwang', name:'\uacf5\uc0b0\uad11', file:M(8,'Hikari')});
  add({month:8, type:'yul', godori:true, name:'\uae30\ub7ec\uae30', file:M(8,'Tane')});
  add({month:8, type:'pi', name:'\uacf5\uc0b0\ud53c', file:M(8,'Kasu',1)});
  add({month:8, type:'pi', name:'\uacf5\uc0b0\ud53c', file:M(8,'Kasu',2)});
  // 9\uc6d4 \uad6d\ud654
  add({month:9, type:'yul', name:'\uad6d\uc900', file:M(9,'Tane')});
  add({month:9, type:'dan', dan:'cheong', name:'\uccad\ub2e8\ub760', file:M(9,'Tanzaku')});
  add({month:9, type:'pi', name:'\uad6d\ud53c', file:M(9,'Kasu',1)});
  add({month:9, type:'pi', name:'\uad6d\ud53c', file:M(9,'Kasu',2)});
  // 10\uc6d4 \ub2e8\ud48d
  add({month:10, type:'yul', name:'\uc0ac\uc2b4', file:M(10,'Tane')});
  add({month:10, type:'dan', dan:'cheong', name:'\uccad\ub2e8\ub760', file:M(10,'Tanzaku')});
  add({month:10, type:'pi', name:'\ub2e8\ud48d\ud53c', file:M(10,'Kasu',1)});
  add({month:10, type:'pi', name:'\ub2e8\ud48d\ud53c', file:M(10,'Kasu',2)});
  // 11\uc6d4 \uc624\ub3d9 (Kasu_3\uc744 \uc30d\ud53c\ub85c \uac00\uc815)
  add({month:11, type:'gwang', name:'\uc624\ub3d9\uad11', file:M(11,'Hikari')});
  add({month:11, type:'pi', ssang:true, name:'\uc624\ub3d9\uc30d\ud53c', file:M(11,'Kasu',3)});
  add({month:11, type:'pi', name:'\uc624\ub3d9\ud53c', file:M(11,'Kasu',1)});
  add({month:11, type:'pi', name:'\uc624\ub3d9\ud53c', file:M(11,'Kasu',2)});
  // 12\uc6d4 \ube44
  add({month:12, type:'gwang', rain:true, name:'\ube44\uad11', file:M(12,'Hikari')});
  add({month:12, type:'dan', dan:'bi', name:'\ube44\ub760', file:M(12,'Tanzaku')});
  add({month:12, type:'yul', name:'\uc81c\ube44', file:M(12,'Tane')});
  add({month:12, type:'pi', ssang:true, name:'\ube44\uc30d\ud53c', file:M(12,'Kasu')});

  return cards;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ====== \uac8c\uc784 \uc0c1\ud0dc ======
const G = {
  deck: [],
  field: {}, // month -> [card]
  fieldOrder: [], // \ubc14\ub2e5 \uc2ac\ub86f \ud45c\uc2dc \uc21c\uc11c (\uc0bd\uc785 \uc21c \uc720\uc9c0)
  hands: { me: [], opp: [] },
  captured: { me: [], opp: [] }, // \uac01\uc790 \uac00\uc838\uac04 \uce74\ub4dc
  scores: { me: 0, opp: 0 },
  turn: 'me',
  pending: null, // \ub2e4\uc74c \ud134\uc5d0 \uac00\uc838\uac08 \uce74\ub4dc (\ubed1 \ud6c4)
  bombs: { me: [], opp: [] }, // \ud3ed\ud0c4 \ub300\uae30
  ppeokCount: { me: 0, opp: 0 }, // \ubed1 \ub2f9\ud55c \ud69f\uc218 (\uc0c1\ub300\uac00 \ub05d\ub0bc \ub54c +1)
  shake: { me: 0, opp: 0 }, // \ud754\ub4e4\uae30 \ud69f\uc218
  bonusPi: { me: 0, opp: 0 }, // \ucabd/\ub530\ub2e5/\uc4f8 \ub54c \uc0c1\ub300\uac8c\uc11c \ubc1b\uc744 \ud53c \uc218
  bombBonus: { me: 0, opp: 0 }, // \ud3ed\ud0c4 \ubcf4\ub108\uc2a4: \ub0a8\uc740 \ud69f\uc218\ub9cc\ud07c "\ub371\ub9cc \ub4a4\uc9d1\uae30" \uc120\ud0dd \uac00\ub2a5
  locked: false, // \uc790\ub3d9 \ud134/\uc560\ub2c8\uba54\uc774\uc158 \uc911 \uc870\uc791 \uc7a0\uae08
  goCount: { me: 0, opp: 0 },
  lastGoScore: { me: 0, opp: 0 }, // \uace0 \uc120\uc5b8 \uc2dc\uc810 \uc810\uc218
  lastGoScorer: null, // \uace0\ubc15 \uacc4\uc0b0\uc6a9
  gameOver: false,
  msgQueue: [],
};

function newGame() {
  const deck = shuffle(makeDeck());
  G.deck = deck.slice();
  G.field = {};
  G.fieldOrder = [];
  G.hands = { me: [], opp: [] };
  G.captured = { me: [], opp: [] };
  G.scores = { me: 0, opp: 0 };
  G.pending = null;
  G.bombs = { me: [], opp: [] };
  G.ppeokCount = { me: 0, opp: 0 };
  G.shake = { me: 0, opp: 0 };
  G.bonusPi = { me: 0, opp: 0 };
  G.bombBonus = { me: 0, opp: 0 };
  G.locked = false;
  G.goCount = { me: 0, opp: 0 };
  G.lastGoScore = { me: 0, opp: 0 };
  G.lastGoScorer = null;
  G.gameOver = false;

  // 2\uc778 \ub9de\uace0: \ub0b4 10 + \uc0c1\ub300 10 + \ubc14\ub2e5 8 + \ub371 20 = 48
  for (let i = 0; i < 10; i++) G.hands.me.push(G.deck.pop());
  for (let i = 0; i < 10; i++) G.hands.opp.push(G.deck.pop());
  // \ucd08\uae30 \ubc14\ub2e5 8\uc7a5: \ub840 \uc21c\uc11c\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uac8c \uc190\uc5d0 \ubaa8\uc544\uc11c \ub2e4\uc2dc \uc139\uc77c
  const initField = [];
  for (let i = 0; i < 8; i++) initField.push(G.deck.pop());
  shuffle(initField);
  initField.forEach(c => {
    if (!G.field[c.month]) { G.field[c.month] = []; G.fieldOrder.push(c.month); }
    G.field[c.month].push(c);
  });
  // \ub098\ub204\uae30 \ud6c4 \ubc14\ub2e5\uc5d0 \uac19\uc740 \uc6d4 4\uc7a5 \uc788\uc73c\uba74 \ub354\ub7ec\uc8fc\uae30\ub85c \uadf8\ub300\ub85c \ud569\uce58\uace0 \ucc28\ub840 \uc2dc\uc791
  // (\uac04\ub2e8\ud654: \uadf8\ub0e5 \ub458)
  G.turn = 'me';
  setTimeout(() => {
    checkShakeOption('me');
    checkShakeOption('opp');
    render();
    showMsg('\uac8c\uc784 \uc2dc\uc791!');
  }, 50);
  render();
}

// ====== \ubc14\ub2e5 \uc2ac\ub86f \ud5ec\ud37c ======
function fieldDel(month) {
  fieldDel(month);
  const i = G.fieldOrder.indexOf(month);
  if (i >= 0) G.fieldOrder.splice(i, 1);
}
function fieldSetSingle(month, card) {
  G.field[month] = [card];
  if (G.fieldOrder.indexOf(month) < 0) G.fieldOrder.push(month);
}

// ====== \uc720\ud2f8 ======
function piValue(c) { return c.type === 'pi' ? (c.ssang ? 2 : 1) : 0; }
function isBright(c) { return c.type === 'gwang'; }
function countByMonth(hand, month) { return hand.filter(c => c.month === month).length; }

function showMsg(s) {
  const el = document.getElementById('message');
  if (el) el.textContent = s;
}

// ====== \ubc14\ub2e5 2\uc7a5 \uc120\ud0dd \ud31d\uc5c5 ======
function pickFieldCard(who, cards) {
  return new Promise(resolve => {
    if (who === 'opp') {
      // CPU: \uac00\uce58 \ub192\uc740 \uac83 \uc120\ud0dd
      const pick = cards.reduce((a, b) => cardValue(a) >= cardValue(b) ? a : b);
      resolve(pick);
      return;
    }
    // \uc0ac\ub78c: \ubaa8\ub2ec\ub85c \uc120\ud0dd
    const box = document.createElement('div');
    box.style.display = 'flex';
    box.style.gap = '14px';
    box.style.justifyContent = 'center';
    cards.forEach(c => {
      const wrap = document.createElement('div');
      wrap.style.cursor = 'pointer';
      wrap.style.transition = 'transform 0.1s';
      wrap.onmouseenter = () => wrap.style.transform = 'translateY(-6px)';
      wrap.onmouseleave = () => wrap.style.transform = '';
      wrap.appendChild(cardEl(c));
      wrap.onclick = () => { hideModal(); resolve(c); };
      box.appendChild(wrap);
    });
    document.getElementById('modal-title').textContent = '\uc5b4\ub5a4 \uce74\ub4dc\ub97c \uac00\uc838\uac08\uae4c\uc694?';
    const body = document.getElementById('modal-body');
    body.innerHTML = '';
    body.appendChild(box);
    document.getElementById('modal-actions').innerHTML = '';
    document.getElementById('modal').classList.remove('hidden');
  });
}

// ====== \ud754\ub4e4\uae30 \uccb4\ud06c ======
function checkShakeOption(who) {
  // \ub370\uc774\ud130 \ub098\ub204\uae30 \uc9c1\ud6c4 \uc190\uc5d0 \uac19\uc740 \uc6d4 3\uc7a5\uc774\uba74 \uc790\ub3d9 \ud754\ub4e4\uae30 \uc84c \uc720\uc9c0
  // (\uc0ac\uc6a9\uc790\uac00 \uba85\uc2dc\uc801\uc73c\ub85c \ud754\ub4e4\uc9c0 \uc54a\uc544\ub3c4 \ubcf4\ub108\uc2a4 \uc801\uc6a9 \u2014 \uac04\ub2e8\ud654)
  const months = {};
  G.hands[who].forEach(c => { months[c.month] = (months[c.month] || 0) + 1; });
  for (const m in months) {
    if (months[m] >= 3 && (G.field[m] || []).length === 0) {
      G.shake[who]++;
      if (who === 'me') showMsg('\ud754\ub4e4\uc5b4! (' + m + '\uc6d4 3\uc7a5)');
    }
  }
}

// ====== \ud3ed\ud0c4 (\uc190 3\uc7a5 + \ubc14\ub2e5 \ub9e4\uce58) ======
function checkBombOpportunity(who, month) {
  const sameCount = G.hands[who].filter(c => c.month === month).length;
  const fieldHas = (G.field[month] || []).length >= 1;
  return sameCount >= 3 && fieldHas;
}

function askBomb(month) {
  return new Promise(resolve => {
    showModal('\ud3ed\ud0c4 \uae30\ud68c!',
      '\uc190\uc5d0 ' + month + '\uc6d4 3\uc7a5\uc774 \uc788\uace0 \ubc14\ub2e5\uc5d0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. <br>\ud3ed\ud0c4\uc73c\ub85c 3\uc7a5\uc744 \ud55c\uaebc\ubc88\uc5d0 \ub0b4\uace0 \ud53c 1\uc7a5 \ubcf4\ub108\uc2a4 + \ub2e4\uc74c 2\ud134 \uc790\ub3d9(\ub371\ub9cc) \ucc98\ub9ac?',
      [
        { text: '\ud3ed\ud0c4!', onClick: () => { hideModal(); resolve('bomb'); } },
        { text: '\uadf8\ub0e5 1\uc7a5\ub9cc', cls: 'secondary', onClick: () => { hideModal(); resolve('normal'); } },
      ]);
  });
}

async function playBomb(who, month) {
  const hand = G.hands[who];
  const extracted = [];
  for (let i = hand.length - 1; i >= 0 && extracted.length < 3; i--) {
    if (hand[i].month === month) extracted.push(hand.splice(i, 1)[0]);
  }
  const fieldCards = (G.field[month] || []).slice();
  fieldDel(month);
  addCaptured(who, fieldCards.concat(extracted));
  G.bonusPi[who]++;
  transferPi(who);
  G.bombBonus[who] += 2;
  showMsg(who === 'me' ? '\ud3ed\ud0c4! 3\uc7a5 \ubc1c\uc0ac (\ub2e4\uc74c 2\ud134 \ub371\ub9cc \ub4a4\uc9d1\uae30 \uc120\ud0dd\uc73c\ub85c \uac00\ub2a5)' : 'CPU \ud3ed\ud0c4!');
  // \ub371 \ub4a4\uc9d1\uae30
  await deckFlipPhase(who, month);
  await finishTurn(who);
}

// \ub371\uc5d0\uc11c 1\uc7a5 \ub4a4\uc9d1\uc5b4 \ubc14\ub2e5\uacfc \uc0c1\ud638\uc791\uc6a9 \u2014 \uc190\uc73c\ub85c \uba39\uc740 \uc6d4(contextMonth) \uc548\ub4e4\uc5b4\uac00 \ub3c4 \ucabd/\ub530\ub2e5 \uccb4\ud06c \uc5c6\uc774 \ucc98\ub9ac
async function deckFlipPhase(who, contextMonth) {
  const flipped = G.deck.pop();
  if (!flipped) return;
  const fm = flipped.month;
  const fcards = (G.field[fm] || []).slice();
  if (fcards.length === 0) {
    fieldSetSingle(fm, flipped);
  } else if (fcards.length === 1) {
    addCaptured(who, [fcards[0], flipped]);
    fieldDel(fm);
  } else if (fcards.length === 2) {
    G.field[fm] = fcards.concat([flipped]);
    G.ppeokCount[who === 'me' ? 'opp' : 'me']++;
    showMsg('\ubf65!');
  } else if (fcards.length === 3) {
    addCaptured(who, fcards.concat([flipped]));
    fieldDel(fm);
    G.bonusPi[who]++;
    transferPi(who);
    showMsg('\ud3ed\ud0c4 (\ub371)!');
  }
}

async function finishTurn(who) {
  const sc = calcScore(who);
  G.scores[who] = sc.total;
  render();
  if (sc.total >= 7 && sc.total > G.lastGoScore[who]) {
    await goStopDecision(who, sc);
  } else {
    await endTurn(who);
  }
}

async function autoFlipTurn(who) {
  G.locked = true;
  showMsg(who === 'me' ? '\uc790\ub3d9 \ud134: \ub371 \ub4a4\uc9d1\uae30' : 'CPU \uc790\ub3d9 \ud134');
  render();
  await new Promise(r => setTimeout(r, 700));
  await deckFlipPhase(who, null);
  G.locked = false;
  await finishTurn(who);
}

// ====== \uce74\ub4dc \ub0b4\uae30 (\uba54\uc778 \ub85c\uc9c1) ======
async function playCard(who, card) {
  // \ud3ed\ud0c4 \uae30\ud68c \uccb4\ud06c
  if (checkBombOpportunity(who, card.month)) {
    let choice;
    if (who === 'me') choice = await askBomb(card.month);
    else {
      // CPU: \ubc14\ub2e5 \uce74\ub4dc \uac00\uce58 \ub192\uc73c\uba74 \ud3ed\ud0c4
      const fv = (G.field[card.month] || []).reduce((s, c) => s + cardValue(c), 0);
      choice = fv >= 3 ? 'bomb' : 'normal';
    }
    if (choice === 'bomb') return playBomb(who, card.month);
  }
  // hand\uc5d0\uc11c \uc81c\uac70
  const hand = G.hands[who];
  const idx = hand.findIndex(c => c.uid === card.uid);
  if (idx < 0) return;
  hand.splice(idx, 1);

  const month = card.month;
  const fieldCards = (G.field[month] || []).slice();
  const origFieldLen = fieldCards.length;
  let captured = [];

  if (origFieldLen === 0) {
    fieldSetSingle(month, card);
  } else if (origFieldLen === 1) {
    captured = [fieldCards[0], card];
    fieldDel(month);
  } else if (origFieldLen === 2) {
    // 2\uc7a5 \uc911 1\uc7a5\ub9cc \uc120\ud0dd \ud6c4 \uac00\uc838\uac10, \ub098\uba38\uc9c0\ub294 \ubc14\ub2e5\uc5d0 \uc720\uc9c0
    const pick = await pickFieldCard(who, fieldCards);
    captured = [pick, card];
    G.field[month] = fieldCards.filter(c => c.uid !== pick.uid);
  } else if (origFieldLen === 3) {
    // 3\uc7a5 \ubaa8\ub450 + \ub0b4 \uce74\ub4dc = 4\uc7a5 \uac00\uc838\uac10, \ud754\ub4e4\uae30 \uc801\uc6a9
    captured = fieldCards.concat([card]);
    fieldDel(month);
    G.bonusPi[who]++;
    G.shake[who]++;
    showMsg(who === 'me' ? '\ud754\ub4e4\uc5b4! 4\uc7a5 \ud68d\ub4dd' : 'CPU \ud754\ub4e4\uc5b4!');
  }

  // \ud30c\uc77c \ub4a4\uc9d1\uae30
  const flipped = G.deck.pop();
  let flippedCaptured = [];
  let flippedEvent = null;
  if (flipped) {
    const fm = flipped.month;
    if (fm === month) {
      if (origFieldLen === 0) {
        // \ucabd: \ub0b4\uac00 \ube48 \uacf3\uc5d0 \ub0c8\ub294\ub370 \uac19\uc740 \uc6d4
        flippedCaptured = [card, flipped];
        fieldDel(month);
        flippedEvent = 'jjok';
      } else if (origFieldLen === 1) {
        // \ub530\ub2e5: \uc774\ubbf8 \ub450 \uc7a5 \uac00\uc838\uac14\ub294\ub370 \uac19\uc740 \uc6d4 \ub6f0
        captured.push(flipped);
        flippedEvent = 'ttadak';
      } else if (origFieldLen === 2) {
        // \uc774\ubbf8 3\uc7a5 \uac00\uc838\uac14\ub294\ub370 \uac19\uc740 \uc6d4 \ub6f0 \u2192 4\uc7a5\uc9f8 \ucd94\uac00
        captured.push(flipped);
        flippedEvent = 'ttadak';
      } else {
        // \ub09c\uc790\ud55c \uacbd\uc6b0: \ud544\ub4dc\uc5d0 \ub193\uc74c
        fieldSetSingle(fm, flipped);
      }
    } else {
      const fcards = (G.field[fm] || []).slice();
      if (fcards.length === 0) {
        fieldSetSingle(fm, flipped);
      } else if (fcards.length === 1) {
        flippedCaptured = [fcards[0], flipped];
        fieldDel(fm);
      } else if (fcards.length === 2) {
        // \ubed1: 3\uc7a5\uc774 \ub428
        G.field[fm] = fcards.concat([flipped]);
        flippedEvent = 'ppeok';
        G.ppeokCount[who === 'me' ? 'opp' : 'me']++;
      } else if (fcards.length === 3) {
        flippedCaptured = fcards.concat([flipped]);
        fieldDel(fm);
        flippedEvent = 'pok';
        G.bonusPi[who]++;
      }
    }
  }

  // \ud68d\ub4dd \ucc98\ub9ac
  if (captured.length > 0) addCaptured(who, captured);
  if (flippedCaptured.length > 0) addCaptured(who, flippedCaptured);

  // \uc774\ubca4\ud2b8 \ucc98\ub9ac (\ubcf4\ub108\uc2a4 \ud53c)
  if (flippedEvent === 'jjok') { transferPi(who); showMsg('\ucabd!'); }
  else if (flippedEvent === 'ttadak') { transferPi(who); showMsg('\ub530\ub2e5!'); }
  else if (flippedEvent === 'pok') { transferPi(who); showMsg('\ud3ed\ud0c4!'); }
  else if (flippedEvent === 'ppeok') { showMsg('\ubed1!'); }
  if (origFieldLen === 3) { transferPi(who); }

  // \uc810\uc218 \uacc4\uc0b0
  const sc = calcScore(who);
  G.scores[who] = sc.total;
  render();

  // \uc2b9\ub9ac \uccb4\ud06c
  if (sc.total >= 7 && sc.total > G.lastGoScore[who]) {
    await goStopDecision(who, sc);
  } else {
    await endTurn(who);
  }
}

function transferPi(who) {
  // \uc0c1\ub300\uac8c\uc11c \ud53c \uc77c\ubc18 1\uc7a5 \uac00\uc838\uc624\uae30 (\uc5c6\uc73c\uba74 \uc4cd\ud53c)
  const opp = who === 'me' ? 'opp' : 'me';
  const pile = G.captured[opp];
  // \uc77c\ubc18 \ud53c \uc6b0\uc120
  let idx = pile.findIndex(c => c.type === 'pi' && !c.ssang);
  if (idx < 0) idx = pile.findIndex(c => c.type === 'pi');
  if (idx >= 0) {
    const [c] = pile.splice(idx, 1);
    G.captured[who].push(c);
  }
}

function addCaptured(who, cards) {
  G.captured[who].push(...cards);
}

// ====== \uc810\uc218 \uacc4\uc0b0 ======
function calcScore(who) {
  const pile = G.captured[who];
  const oppPile = G.captured[who === 'me' ? 'opp' : 'me'];
  const gwangs = pile.filter(c => c.type === 'gwang');
  const yuls = pile.filter(c => c.type === 'yul');
  const dans = pile.filter(c => c.type === 'dan');
  const pis = pile.filter(c => c.type === 'pi');
  const piTotal = pis.reduce((s, c) => s + (c.ssang ? 2 : 1), 0);

  let s = 0;
  const detail = [];

  // \uad11
  const hasRain = gwangs.some(c => c.rain);
  const gn = gwangs.length;
  if (gn === 5) { s += 15; detail.push(['5\uad11', 15]); }
  else if (gn === 4) { s += 4; detail.push(['4\uad11', 4]); }
  else if (gn === 3) {
    if (hasRain) { s += 2; detail.push(['3\uad11(\ube44\ud3ec\ud568)', 2]); }
    else { s += 3; detail.push(['3\uad11', 3]); }
  }

  // \ub04f
  const yn = yuls.length;
  if (yn >= 5) { const v = yn - 4; s += v; detail.push([yn + '\ubabd', v]); }
  // \uace0\ub3c4\ub9ac (2,4,8\uc6d4 \uc0c8 3\uc885)
  const godoriCount = yuls.filter(c => c.godori).length;
  if (godoriCount === 3) { s += 5; detail.push(['\uace0\ub3c4\ub9ac', 5]); }

  // \ub760
  const dn = dans.length;
  if (dn >= 5) { const v = dn - 4; s += v; detail.push([dn + '\ub760', v]); }
  const hong = dans.filter(c => c.dan === 'hong').length;
  const cheong = dans.filter(c => c.dan === 'cheong').length;
  const cho = dans.filter(c => c.dan === 'cho').length;
  if (hong >= 3) { s += 3; detail.push(['\ud64d\ub2e8', 3]); }
  if (cheong >= 3) { s += 3; detail.push(['\uccad\ub2e8', 3]); }
  if (cho >= 3) { s += 3; detail.push(['\ucd08\ub2e8', 3]); }

  // \ud53c
  if (piTotal >= 10) { const v = piTotal - 9; s += v; detail.push([piTotal + '\ud53c', v]); }

  // \uace0 \ubcf4\ub108\uc2a4
  const goN = G.goCount[who];
  if (goN >= 1) {
    if (goN <= 2) { s += goN; detail.push([goN + '\uace0(+' + goN + ')', goN]); }
    // 3\uace0\ubd80\ud130\ub294 \ubc30\uc218 (\uc544\ub798\uc5d0\uc11c \ucc98\ub9ac)
  }

  let mult = 1;
  // \ud754\ub4e4\uae30
  if (G.shake[who] > 0) mult *= Math.pow(2, G.shake[who]);
  // \ubed1 (\uc0c1\ub300\uac00 \ubed1 \ub2f9\ud55c \ud69f\uc218)
  if (G.ppeokCount[who] > 0) mult *= Math.pow(2, G.ppeokCount[who]);
  // \uad11\ubc15: \uc0c1\ub300 \uad11 0\uc7a5\uc774\uace0 \ub0b4\uac00 \uc810\uc218 \uc644\uc131
  const oppGwang = oppPile.filter(c => c.type === 'gwang').length;
  if (gn >= 3 && oppGwang === 0) { mult *= 2; detail.push(['\uad11\ubc15', 'x2']); }
  // \ud53c\ubc15: \uc0c1\ub300 \ud53c 7 \ubbf8\ub9cc
  const oppPi = oppPile.filter(c => c.type === 'pi').reduce((a, c) => a + (c.ssang ? 2 : 1), 0);
  if (piTotal >= 10 && oppPi < 7) { mult *= 2; detail.push(['\ud53c\ubc15', 'x2']); }
  // \uba4d\ub530: \uace0\ub3c4\ub9ac \uc644\uc131 \uc2dc \uc0c1\ub300 \ub04f \uc218 \uc801\uc73c\uba74... (\uc0dd\ub7b5)

  // 3\uace0\uc5d0\uc11c \ubc30\uc218 (\uace0\ub2f9 x2)
  if (goN >= 3) mult *= Math.pow(2, goN - 2);

  const total = s * mult;
  return { base: s, mult, total, detail, gn, yn, dn, piTotal, godoriCount };
}

// ====== \uace0/\uc2a4\ud0d1 ======
function goStopDecision(who, sc) {
  return new Promise(resolve => {
    if (who === 'opp') {
      // CPU \ud310\ub2e8: \ub0a8\uc740 \uce74\ub4dc \ub9ce\uace0 \uc810\uc218 \ub300\ube44 \uc801\uc73c\uba74 \uace0
      const remaining = G.deck.length + G.hands.opp.length;
      const myScore = G.scores.me;
      const oppScore = sc.total;
      let goAI = false;
      if (remaining >= 4 && oppScore - myScore <= 4 && G.goCount.opp < 2) goAI = true;
      if (oppScore >= 12) goAI = false;
      setTimeout(() => {
        if (goAI) {
          G.goCount.opp++;
          G.lastGoScorer = 'opp';
          G.lastGoScore.opp = sc.total;
          showMsg('CPU: \uace0! (' + G.goCount.opp + '\uace0)');
          endTurn(who).then(resolve);
        } else {
          showMsg('CPU: \uc2a4\ud0d1! \uc2b9\ub9ac');
          endGame('opp', sc);
          resolve();
        }
      }, 800);
      return;
    }
    // \uc0ac\ub78c
    showModal('\uace0? \uc2a4\ud0d1?', renderScoreDetail(sc, who), [
      { text: '\uace0! (' + (G.goCount.me + 1) + '\uace0)', onClick: () => {
        G.goCount.me++;
        G.lastGoScorer = 'me';
        G.lastGoScore.me = sc.total;
        hideModal();
        endTurn(who).then(resolve);
      }},
      { text: '\uc2a4\ud0d1! (\uc2b9\ub9ac)', cls: 'danger', onClick: () => {
        hideModal();
        endGame('me', sc);
        resolve();
      }},
    ]);
  });
}

function renderScoreDetail(sc, who) {
  let html = '<table>';
  sc.detail.forEach(([k, v]) => {
    html += '<tr><td>' + k + '</td><td>' + v + '</td></tr>';
  });
  html += '<tr><td><b>\uae30\ubcf8</b></td><td><b>' + sc.base + '</b></td></tr>';
  html += '<tr><td><b>\ubc30\uc218</b></td><td><b>x' + sc.mult + '</b></td></tr>';
  html += '<tr><td><b>\ucd1d\uc810</b></td><td><b style="color:#ffd54a">' + sc.total + '</b></td></tr>';
  html += '</table>';
  return html;
}

function endGame(winner, sc) {
  G.gameOver = true;
  let finalScore = sc.total;
  // \uace0\ubc15: \uc0c1\ub300\uac00 \uace0\ub97c \ubd80\ub974\uace0 \uc774\uae30\uba74 \uc0c1\ub300\uac8c x2
  const loser = winner === 'me' ? 'opp' : 'me';
  if (G.lastGoScorer === loser && G.goCount[loser] > 0) {
    finalScore *= 2;
    showMsg('\uace0\ubc15! \uc810\uc218 x2');
  }
  showModal(winner === 'me' ? '\u2728 \uc2b9\ub9ac!' : '\ud328\ubc30...',
    '<div style="text-align:center;font-size:28px;color:#ffd54a;margin:14px 0">' + finalScore + ' \uc810</div>' +
    renderScoreDetail(sc, winner),
    [{ text: '\uc0c8 \uac8c\uc784', onClick: () => { hideModal(); newGame(); } }]
  );
}

// ====== \ud134 \uc885\ub8cc ======
async function endTurn(who) {
  // \uc190 + \ub371 \ubaa8\ub450 \ube44\uc5c8\uc73c\uba74 \uac8c\uc784 \uc885\ub8cc (\ub098\uac00\ub9ac)
  if (G.hands.me.length === 0 && G.hands.opp.length === 0 && G.deck.length === 0) {
    const myS = calcScore('me');
    const opS = calcScore('opp');
    if (myS.total >= 7 && opS.total < 7) endGame('me', myS);
    else if (opS.total >= 7 && myS.total < 7) endGame('opp', opS);
    else if (myS.total > opS.total) endGame('me', myS);
    else endGame('opp', opS);
    return;
  }
  G.turn = who === 'me' ? 'opp' : 'me';
  const next = G.turn;
  render();
  if (next === 'opp') {
    setTimeout(() => cpuTurn(), 700);
  } else {
    checkShakeOption('me');
    render();
  }
}

// \uc0ac\uc6a9\uc790\uac00 "\ub371\ub9cc \ub4a4\uc9d1\uae30" \uc120\ud0dd (\ud3ed\ud0c4 \ubcf4\ub108\uc2a4 1\ud69f \uc18c\ubaa8)
async function useBombBonus(who) {
  if (G.bombBonus[who] <= 0 || G.locked) return;
  G.bombBonus[who]--;
  await autoFlipTurn(who);
}

// ====== CPU AI ======
function cpuTurn() {
  if (G.gameOver) return;
  const hand = G.hands.opp;
  if (hand.length === 0) { endTurn('opp'); return; }
  // \ud3ed\ud0c4 \ubcf4\ub108\uc2a4: \uc190\uc5d0 \ub9e4\uce58 \uac00\ub2a5\ud55c \uce74\ub4dc \uc5c6\uc73c\uba74 \uc2a4\ud0b5
  if (G.bombBonus.opp > 0) {
    const hasMatch = hand.some(c => (G.field[c.month] || []).length > 0);
    if (!hasMatch) {
      G.bombBonus.opp--;
      showMsg('CPU: \ub371\ub9cc \ub4a4\uc9d1\uae30 (\ud3ed\ud0c4 \ubcf4\ub108\uc2a4)');
      setTimeout(() => autoFlipTurn('opp'), 600);
      return;
    }
  }

  // \uc804\ub7b5: \uba54\uce58\ub418\ub294 \uce74\ub4dc \uc911 \ud68d\ub4dd \uac00\uce58 \ub192\uc740 \uac83 \uc6b0\uc120
  // 1) \ubc14\ub2e5\uc5d0 \ub9e4\uce58 \uc788\uace0 \uadf8 \uce74\ub4dc\uac00 \uad11/\uba85\ud310\uc774\uba74 \ucd5c\uc6b0\uc120
  // 2) \uadf8\ub2e4\uc74c \ub530\ub2e5/\uc4f8 \uac00\ub2a5\uc131
  // 3) \uadf8\uc678 \uc81c\uc77c \uc4f8\ubaa8 \uc5c6\ub294 \ud53c \ubc84\ub9ac\uae30
  let best = null;
  let bestScore = -1;
  for (const c of hand) {
    let sc = 0;
    const fc = G.field[c.month] || [];
    if (fc.length === 1) sc += 5 + cardValue(fc[0]) + cardValue(c);
    else if (fc.length === 2) sc += 3 + cardValue(c);
    else if (fc.length === 3) sc += 12 + cardValue(c) * 2;
    else sc += 1;
    sc += cardValue(c) * 0.5;
    if (sc > bestScore) { bestScore = sc; best = c; }
  }
  if (!best) best = hand[0];
  showMsg('CPU \ucc28\ub840: ' + MONTH_NAME[best.month] + ' ' + TYPE_LABEL[best.type]);
  setTimeout(() => playCard('opp', best), 600);
}

function cardValue(c) {
  if (c.type === 'gwang') return c.rain ? 4 : 6;
  if (c.type === 'yul') return c.godori ? 4 : 2;
  if (c.type === 'dan') return c.dan === 'bi' ? 1 : 3;
  if (c.type === 'pi') return c.ssang ? 2 : 1;
  return 0;
}

// ====== \ub80c\ub354\ub9c1 ======
function cardEl(c, opts = {}) {
  const div = document.createElement('div');
  let cls = 'card-img card-' + c.type;
  if (c.ssang) cls += ' ssang';
  if (opts.facedown) cls += ' facedown';
  if (opts.disabled) cls += ' disabled';
  if (opts.selectable) cls += ' selectable';
  div.className = cls;
  div.dataset.uid = c.uid;
  div.title = c.month + '\uc6d4 ' + c.name;
  if (opts.facedown) {
    div.innerHTML = '<div class="card-back-inner"></div>';
  } else {
    const img = document.createElement('img');
    img.src = c.file;
    img.alt = c.name;
    img.draggable = false;
    div.appendChild(img);
  }
  if (opts.onClick) div.addEventListener('click', opts.onClick);
  return div;
}

function miniCard(c) {
  const d = document.createElement('div');
  d.className = 'mini-img';
  const img = document.createElement('img');
  img.src = c.file;
  img.alt = c.name;
  img.draggable = false;
  d.appendChild(img);
  d.title = c.month + '\uc6d4 ' + c.name;
  return d;
}

function render() {
  // \uc810\uc218
  G.scores.me = calcScore('me').total;
  G.scores.opp = calcScore('opp').total;
  document.getElementById('me-score').textContent = G.scores.me;
  document.getElementById('opp-score').textContent = G.scores.opp;
  document.getElementById('deck-count').textContent = G.deck.length;
  document.getElementById('turn-name').textContent = G.turn === 'me' ? '\ub098' : 'CPU';

  // \ub0b4 \uc190 (\uc624\ub984\ucc28\uc21c \uc815\ub82c)
  const myH = document.getElementById('my-hand');
  myH.innerHTML = '';
  const sortedMyHand = G.hands.me.slice().sort((a, b) => a.month - b.month || a.uid - b.uid);
  sortedMyHand.forEach(c => {
    const can = G.turn === 'me' && !G.gameOver && !G.locked;
    const hasMatch = (G.field[c.month] || []).length > 0;
    myH.appendChild(cardEl(c, {
      disabled: !can,
      selectable: can && hasMatch,
      onClick: can ? () => playCard('me', c) : null,
    }));
  });

  // \uc0c1\ub300 \uc190 (\ub4a4\uc9d1)
  const opH = document.getElementById('opp-hand');
  opH.innerHTML = '';
  G.hands.opp.forEach(c => opH.appendChild(cardEl(c, { facedown: true })));

  // \ud544\ub4dc \u2014 \uc0bd\uc785 \uc21c\uc11c (\ub79c\ub364 \uc704\uce58 \uc720\uc9c0)
  const f = document.getElementById('field');
  f.innerHTML = '';
  G.fieldOrder.forEach(m => {
    const cards = G.field[m];
    if (!cards || cards.length === 0) return;
    const slot = document.createElement('div');
    slot.className = 'slot';
    const stack = document.createElement('div');
    stack.className = 'stack';
    cards.forEach(c => stack.appendChild(cardEl(c)));
    slot.appendChild(stack);
    f.appendChild(slot);
  });

  renderCaptured('me');
  renderCaptured('opp');

  // \ud3ed\ud0c4 \ubcf4\ub108\uc2a4 \ubc84\ud2bc
  const bb = document.getElementById('bomb-pass-wrap');
  if (bb) {
    const show = G.turn === 'me' && G.bombBonus.me > 0 && !G.locked && !G.gameOver;
    bb.style.display = show ? 'flex' : 'none';
    if (show) document.getElementById('bomb-pass-count').textContent = G.bombBonus.me;
  }
}

function renderCaptured(who) {
  const el = document.getElementById(who + '-captured');
  el.innerHTML = '';
  const groups = { gwang: [], dan: [], yul: [], pi: [] };
  G.captured[who].forEach(c => groups[c.type].push(c));
  // \ud53c \uc815\ub82c: \uc30d\ud53c \uba3c\uc800
  groups.pi.sort((a, b) => (b.ssang ? 1 : 0) - (a.ssang ? 1 : 0));
  TYPE_ORDER.forEach(g => {
    const row = document.createElement('div');
    row.className = 'cap-group cap-' + g;
    row.dataset.label = TYPE_LABEL[g];
    if (groups[g].length === 0) row.classList.add('empty');
    groups[g].forEach(c => row.appendChild(miniCard(c)));
    el.appendChild(row);
  });
}

// ====== \ubaa8\ub2ec ======
function showModal(title, body, actions) {
  document.getElementById('modal-title').innerHTML = title;
  document.getElementById('modal-body').innerHTML = body;
  const ac = document.getElementById('modal-actions');
  ac.innerHTML = '';
  actions.forEach(a => {
    const b = document.createElement('button');
    if (a.cls) b.className = a.cls;
    b.textContent = a.text;
    b.onclick = a.onClick;
    ac.appendChild(b);
  });
  document.getElementById('modal').classList.remove('hidden');
}
function hideModal() { document.getElementById('modal').classList.add('hidden'); }

// ====== \uaddc\uce59 \ubaa8\ub2ec ======
function showRules() {
  showModal('\ub9de\uace0 \uaddc\uce59',
    '<b>\uc138\ud305</b><br>\ub0b4 \uc190 10\uc7a5, \uc0c1\ub300 10\uc7a5, \ubc14\ub2e5 8\uc7a5, \ub371 20\uc7a5\uc73c\ub85c \uc2dc\uc791 (\ucd1d 48\uc7a5).<br><br>' +
    '<b>\uc9c4\ud589</b><br>\uc190\uc5d0\uc11c \uce74\ub4dc 1\uc7a5 \ub0b4\uae30 \u2192 \ubc14\ub2e5 \uac19\uc740 \uc6d4 \uba39\uae30 \u2192 \ub371\uc5d0\uc11c 1\uc7a5 \ub4a4\uc9d1\uae30 \u2192 \uac19\uc740 \uc6d4 \uc788\uc73c\uba74 \ub610 \uba39\uae30. \uc810\uc218\uac00 7\uc810 \uc774\uc0c1\uc774\uba74 \uace0/\uc2a4\ud0d1 \uc120\ud0dd.<br><br>' +
    '<b>\uc810\uc218</b><br>' +
    '\u2022 3\uad11 3\uc810 / 4\uad11 4\uc810 / 5\uad11 15\uc810 (\ube44\ud3ec\ud568 3\uad11 = 2\uc810)<br>' +
    '\u2022 \ubabd(\ub3d9\ubb3c) \u2265 5\uc7a5: 1\uc810 + \ucd94\uac00 1\uc7a5\ub2f9 +1\uc810, \uace0\ub3c4\ub9ac(2/4/8\uc6d4 \uc0c8 3\uc885) = 5\uc810<br>' +
    '\u2022 \ub760 \u2265 5\uc7a5: 1\uc810 + \ucd94\uac00 1\uc7a5\ub2f9 +1\uc810, \ud64d\ub2e8/\uccad\ub2e8/\ucd08\ub2e8 \uac01 3\uc810<br>' +
    '\u2022 \ud53c \u2265 10\uc7a5: 1\uc810 + +1\uc7a5/+1\uc810 (\uc30d\ud53c = 2\uc7a5 \uc73c\ub85c \uce74\uc6b4\ud2b8)<br><br>' +
    '<b>\ubc30\uc218</b><br>' +
    '\u2022 \uad11\ubc15(\uc0c1\ub300 \uad11 0\uc7a5) / \ud53c\ubc15(\uc0c1\ub300 \ud53c 10 \ubbf8\ub9cc) \uac01 x2<br>' +
    '\u2022 \ud754\ub4e4\uae30(\uc190\uc5d0 \uac19\uc740 \uc6d4 3\uc7a5) / \ubed1 / \ud3ed\ud0c4 \uac01 x2<br>' +
    '\u2022 1\uace0 = +1\uc810, 2\uace0 = +2\uc810, 3\uace0\ubd80\ud130 x2 (\ub204\uc801)<br>' +
    '\u2022 \uace0\ubc15: \uace0 \ubd80\ub978 \uc0ac\ub78c\uc774 \uc9c0\uba74 \uc0c1\ub300 \uc810\uc218 x2<br><br>' +
    '<b>\uc774\ubca4\ud2b8</b><br>' +
    '\u2022 \ucabd/\ub530\ub2e5/\ud3ed\ud0c4: \uc0c1\ub300\uc5d0\uac8c \ud53c 1\uc7a5 \ubcf4\ub108\uc2a4<br>' +
    '\u2022 \ubed1: \ubc14\ub2e5\uc5d0 \uac19\uc740 \uc6d4 2\uc7a5\uc774 \uc788\ub294 \uc0c1\ud0dc\uc5d0\uc11c \ub4a4\uc9d1\uc740 \uce74\ub4dc\uac00 \uac19\uc740 \uc6d4 \u2192 3\uc7a5 \uc801\uccb4. \ub098\uc911\uc5d0 4\uc7a5\uc9f8 \uba39\uc73c\uba74 \ud3ed\ud0c4.',
    [{ text: '\ub2eb\uae30', onClick: hideModal }]);
}

// ====== \ucd08\uae30\ud654 ======
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('reset').addEventListener('click', newGame);
  document.getElementById('rules-btn').addEventListener('click', showRules);
  const bp = document.getElementById('bomb-pass-btn');
  if (bp) bp.addEventListener('click', () => useBombBonus('me'));
  newGame();
});
