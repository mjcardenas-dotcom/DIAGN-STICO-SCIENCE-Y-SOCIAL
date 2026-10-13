const $=id=>document.getElementById(id);
const actions=[
 {emoji:'✍️📓',subject:'He',verb:'write',ing:'writing',sentence:'He is writing in a notebook.'},
 {emoji:'👧📖',subject:'She',verb:'read',ing:'reading',sentence:'She is reading a book.'},
 {emoji:'✂️📄',subject:'He',verb:'cut',ing:'cutting',sentence:'He is cutting paper.'},
 {emoji:'👧🖍️',subject:'She',verb:'draw',ing:'drawing',sentence:'She is drawing a picture.'},
 {emoji:'🧒🧴📄',subject:'He',verb:'glue',ing:'gluing',sentence:'He is gluing the paper.'},
 {emoji:'👧🎒',subject:'She',verb:'open',ing:'opening',sentence:'She is opening her backpack.'},
 {emoji:'🧒👂',subject:'He',verb:'listen',ing:'listening',sentence:'He is listening to the teacher.'},
 {emoji:'👧🗣️',subject:'She',verb:'speak',ing:'speaking',sentence:'She is speaking English.'},
 {emoji:'🧒🪑',subject:'He',verb:'sit',ing:'sitting',sentence:'He is sitting on a chair.'},
 {emoji:'👧🙋',subject:'She',verb:'raise',ing:'raising',sentence:'She is raising her hand.'},
 {emoji:'👧👦📚',subject:'They',verb:'study',ing:'studying',sentence:'They are studying English.'},
 {emoji:'👧👦✏️',subject:'They',verb:'write',ing:'writing',sentence:'They are writing.'}
];
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
let A=0,B=0;
function team(t,d){if(t==='A'){A=Math.max(0,A+d);$('aScore').textContent=A}else{B=Math.max(0,B+d);$('bScore').textContent=B}if(d>0)confetti(10)}
function full(){if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.()}
function homeGo(){document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));$('home').classList.add('active');scrollTo({top:0,behavior:'smooth'})}
function openGame(id){document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));$(id).classList.add('active');scrollTo({top:0,behavior:'smooth'});if(id==='quiz')setupQuiz();if(id==='builder')newBuild();if(id==='memory')makeMemory();if(id==='tf')setupTF();if(id==='speed')resetSpeed()}
function sound(ok=true){try{const a=new(AudioContext||webkitAudioContext)(),o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);o.frequency.value=ok?680:190;g.gain.setValueAtTime(.11,a.currentTime);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+.2);o.start();o.stop(a.currentTime+.2)}catch(e){}}
function speak(text){if('speechSynthesis'in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=.82;speechSynthesis.speak(u)}}
function confetti(n=24){const box=$('confetti');for(let i=0;i<n;i++){const p=document.createElement('span');p.textContent=['⭐','✨','🎉','🦖','💫'][Math.floor(Math.random()*5)];Object.assign(p.style,{position:'fixed',zIndex:99,left:Math.random()*100+'vw',top:'-25px',fontSize:16+Math.random()*18+'px',transition:'transform 1.4s linear, opacity 1.4s'});box.appendChild(p);requestAnimationFrame(()=>{p.style.transform=`translateY(110vh) rotate(${Math.random()*720}deg)`;p.style.opacity='.8'});setTimeout(()=>p.remove(),1600)}}

// 1. PICTURE QUIZ
let qi=0,qset=[];
function setupQuiz(){qi=0;qset=shuffle(actions).slice(0,8);drawQuiz()}
function drawQuiz(){const q=qset[qi];$('qbar').style.width=(qi/qset.length*100)+'%';$('qscene').textContent=q.emoji;$('qfeed').textContent='';$('qnext').classList.remove('show');const wrong=shuffle(actions.filter(x=>x.sentence!==q.sentence)).slice(0,3).map(x=>x.sentence);const list=shuffle([q.sentence,...wrong]);const wrap=$('qopts');wrap.innerHTML='';list.forEach(text=>{const b=document.createElement('button');b.textContent=text;b.onclick=()=>answerQuiz(b,text,q.sentence);wrap.appendChild(b)})}
function answerQuiz(btn,choice,correct){document.querySelectorAll('#qopts button').forEach(x=>x.disabled=true);if(choice===correct){btn.classList.add('ok');$('qfeed').textContent='🌟 Great! '+correct;sound(true);confetti();speak(correct)}else{btn.classList.add('no');$('qfeed').textContent='Almost! Listen to the correct sentence.';sound(false);[...document.querySelectorAll('#qopts button')].find(x=>x.textContent===correct)?.classList.add('ok');speak(correct)}$('qnext').classList.add('show')}
function nextQuiz(){qi++;if(qi>=qset.length){$('qbar').style.width='100%';$('qscene').textContent='🦖🏆';$('qopts').innerHTML='';$('qfeed').textContent='Challenge complete!';$('qnext').classList.remove('show');confetti(45)}else drawQuiz()}

// 2. SENTENCE BUILDER
let currentBuild=null,bank=[],built=[];
function newBuild(){currentBuild=actions[Math.floor(Math.random()*actions.length)];$('bscene').textContent=currentBuild.emoji;$('bhint').textContent=`Build the sentence: ${currentBuild.subject} + ...`;$('bfeed').textContent='';built=[];bank=shuffle(currentBuild.sentence.replace('.','').split(' ').map((word,id)=>({word,id})));drawBuild()}
function drawBuild(){const tray=$('tray'),tokens=$('tokens');tray.innerHTML='';if(!built.length){tray.innerHTML='<span style="opacity:.45;font-weight:1000">Tap the words in order…</span>'}else built.forEach((t,i)=>{const b=document.createElement('button');b.className='built';b.textContent=t.word;b.onclick=()=>{built.splice(i,1);drawBuild()};tray.appendChild(b)});tokens.innerHTML='';bank.forEach(t=>{const b=document.createElement('button');b.className='token'+(built.some(x=>x.id===t.id)?' used':'');b.textContent=t.word;b.onclick=()=>{built.push(t);drawBuild()};tokens.appendChild(b)})}
function clearBuild(){built=[];$('bfeed').textContent='';drawBuild()}
function checkBuild(){const answer=built.map(x=>x.word).join(' ')+'.';if(answer===currentBuild.sentence){$('bfeed').textContent='✅ Perfect sentence!';sound(true);confetti();speak(answer)}else{$('bfeed').textContent='🔎 Try again: subject + is/are + verb-ing.';sound(false)}}
function listenBuild(){speak(built.length?built.map(x=>x.word).join(' '):currentBuild.sentence)}

// 3. MEMORY
let openCards=[],locked=false,pairs=0;
function makeMemory(){openCards=[];locked=false;pairs=0;$('mfeed').textContent='';let cards=[];shuffle(actions).slice(0,6).forEach((a,i)=>{cards.push({pair:i,content:a.emoji});cards.push({pair:i,content:a.sentence})});cards=shuffle(cards);const g=$('memoryGrid');g.innerHTML='';cards.forEach(c=>{const b=document.createElement('button');b.className='mem';b.dataset.pair=c.pair;b.dataset.content=c.content;b.textContent='❓';b.onclick=()=>flipMemory(b);g.appendChild(b)})}
function flipMemory(card){if(locked||card.classList.contains('open')||card.classList.contains('done'))return;card.classList.add('open');card.textContent=card.dataset.content;openCards.push(card);if(openCards.length===2){locked=true;const[a,b]=openCards;if(a.dataset.pair===b.dataset.pair){setTimeout(()=>{a.classList.add('done');b.classList.add('done');a.classList.remove('open');b.classList.remove('open');openCards=[];locked=false;pairs++;sound(true);if(pairs===6){$('mfeed').textContent='🏆 All pairs found!';confetti(45)}},450)}else setTimeout(()=>{a.classList.remove('open');b.classList.remove('open');a.textContent=b.textContent='❓';openCards=[];locked=false;sound(false)},850)}}

// 4. TRUE / FALSE
let tfi=0,tfset=[];
function setupTF(){tfi=0;tfset=shuffle(actions).slice(0,8).map(a=>{const truth=Math.random()>.5;return{a,truth,sentence:truth?a.sentence:shuffle(actions.filter(x=>x.sentence!==a.sentence))[0].sentence}});drawTF()}
function drawTF(){const q=tfset[tfi];$('tfbar').style.width=(tfi/tfset.length*100)+'%';$('tfscene').textContent=q.a.emoji;$('tfsentence').textContent=q.sentence;$('tffeed').textContent=''}
function answerTF(value){const q=tfset[tfi];if(value===q.truth){$('tffeed').textContent='✅ Correct!';sound(true);confetti(10)}else{$('tffeed').textContent='❌ Look at the action carefully.';sound(false)}setTimeout(()=>{tfi++;if(tfi>=tfset.length){$('tfbar').style.width='100%';$('tfscene').textContent='🦖🏆';$('tfsentence').textContent='Fantastic thinking!';$('tffeed').textContent='Challenge complete!';confetti(40)}else drawTF()},800)}

// 5. SPEED ROUND
let timer=null,seconds=45,points=0,playing=false,speedItem=null;
function resetSpeed(){clearInterval(timer);seconds=45;points=0;playing=false;$('stime').textContent=45;$('spoints').textContent=0;$('sscene').textContent='🦖';$('sprompt').textContent='Press START!';$('sopts').innerHTML='';$('sfeed').textContent='';$('sstart').disabled=false;$('sstart').textContent='START'}
function startSpeed(){resetSpeed();playing=true;$('sstart').disabled=true;$('sstart').textContent='GO!';speedQuestion();timer=setInterval(()=>{seconds--;$('stime').textContent=seconds;if(seconds<=0){clearInterval(timer);playing=false;$('sopts').innerHTML='';$('sscene').textContent='🏁🦖';$('sprompt').textContent=`Time! You scored ${points}!`;$('sfeed').textContent=points>=8?'🌟 AMAZING!':'👏 Great practice!';$('sstart').disabled=false;$('sstart').textContent='PLAY AGAIN';confetti(35)}},1000)}
function speedQuestion(){speedItem=actions[Math.floor(Math.random()*actions.length)];$('sscene').textContent=speedItem.emoji;$('sprompt').textContent='Choose the correct verb + ing.';const wrong=[...new Set(shuffle(actions.map(x=>x.ing).filter(x=>x!==speedItem.ing)))].slice(0,2);const choices=shuffle([speedItem.ing,...wrong]);const box=$('sopts');box.innerHTML='';choices.forEach(x=>{const b=document.createElement('button');b.textContent=x;b.onclick=()=>answerSpeed(x);box.appendChild(b)})}
function answerSpeed(x){if(!playing)return;if(x===speedItem.ing){points++;$('spoints').textContent=points;$('sfeed').textContent='⭐ Yes!';sound(true)}else{$('sfeed').textContent='Next one!';sound(false)}speedQuestion()}

// 6. ACT IT OUT
let actItem=null;
function spinAct(){actItem=actions[Math.floor(Math.random()*actions.length)];$('actscene').textContent=actItem.emoji;$('actprompt').textContent='Mime: '+actItem.verb.toUpperCase()+'!';$('actanswer').textContent='🤫 Don’t reveal the sentence yet!';sound(true)}
function revealAct(){if(!actItem){$('actanswer').textContent='Spin first!';return}$('actanswer').textContent=actItem.sentence;speak(actItem.sentence);confetti(12)}

setupQuiz();newBuild();makeMemory();setupTF();resetSpeed();