const Q = [
{s:'Science',q:'Which part of your body helps you see?',a:['Eyes','Ears','Nose','Hands'],c:0,h:'Look at Rex’s face.'},
{s:'Science',q:'Which sense do you use to hear music?',a:['Sight','Hearing','Taste','Touch'],c:1,h:'You use your ears.'},
{s:'Science',q:'Which body part helps you smell a flower?',a:['Nose','Knee','Elbow','Foot'],c:0,h:'It is in the middle of your face.'},
{s:'Science',q:'Which sense helps you know that ice is cold?',a:['Taste','Touch','Sight','Hearing'],c:1,h:'Your skin can feel it.'},
{s:'Science',q:'Which organ pumps blood around the body?',a:['Heart','Stomach','Lungs','Brain'],c:0,h:'It beats in your chest.'},
{s:'Science',q:'Which organs help us breathe?',a:['Lungs','Eyes','Bones','Teeth'],c:0,h:'They fill with air.'},
{s:'Science',q:'What protects the organs inside your body?',a:['Skeleton','Hair','Nails','Skin color'],c:0,h:'It is made of bones.'},
{s:'Science',q:'Which is a healthy habit?',a:['Washing hands','Never sleeping','Eating only candy','Skipping breakfast'],c:0,h:'It removes germs.'},
{s:'Science',q:'What should you do before eating?',a:['Wash your hands','Touch the floor','Share your toothbrush','Eat candy'],c:0,h:'Use soap and water.'},
{s:'Science',q:'Which food helps your body grow healthy?',a:['Fruit','Candy','Soda','Chips'],c:0,h:'It grows on plants or trees.'},
{s:'Science',q:'Which food comes from a plant?',a:['Apple','Cheese','Egg','Fish'],c:0,h:'It grows on a tree.'},
{s:'Science',q:'What do humans need to stay alive?',a:['Air, water and food','Only toys','Only sunlight','Rocks and sand'],c:0,h:'Think about what you use every day.'},
{s:'Science',q:'Which animal is a mammal?',a:['Dog','Frog','Fish','Butterfly'],c:0,h:'It has hair and drinks milk when young.'},
{s:'Science',q:'Which animal has feathers?',a:['Bird','Cat','Snake','Fish'],c:0,h:'It can have wings.'},
{s:'Science',q:'Which animal lives mainly in water?',a:['Fish','Horse','Chicken','Rabbit'],c:0,h:'It has fins.'},
{s:'Science',q:'Which animal is an insect?',a:['Butterfly','Frog','Dog','Snake'],c:0,h:'It has six legs.'},
{s:'Science',q:'What does a caterpillar become?',a:['Butterfly','Fish','Bird','Spider'],c:0,h:'It grows colorful wings.'},
{s:'Science',q:'A frog begins life as a…',a:['Tadpole','Chick','Cub','Calf'],c:0,h:'It swims and has a tail.'},
{s:'Science',q:'Where does a bird usually lay its eggs?',a:['Nest','Ocean','Cave under water','Classroom'],c:0,h:'It builds this home with twigs.'},
{s:'Science',q:'What do plants need to grow?',a:['Water and sunlight','Plastic and glass','Toys and books','Shoes and socks'],c:0,h:'Rain and the Sun help.'},
{s:'Science',q:'Which part of a plant takes in water?',a:['Roots','Flower','Fruit','Leaf'],c:0,h:'It grows under the soil.'},
{s:'Science',q:'Which part of a plant is usually in the soil?',a:['Roots','Leaves','Flower','Fruit'],c:0,h:'It holds the plant in place.'},
{s:'Science',q:'What can a seed grow into?',a:['A plant','A rock','A cloud','A chair'],c:0,h:'It needs soil and water.'},
{s:'Science',q:'Which is a living thing?',a:['Tree','Pencil','Table','Ball'],c:0,h:'It grows and needs water.'},
{s:'Science',q:'Which is nonliving?',a:['Rock','Bird','Flower','Ant'],c:0,h:'It does not grow or breathe.'},
{s:'Science',q:'Where does a camel live?',a:['Desert','Ocean','Polar ice','River'],c:0,h:'It is hot and dry.'},
{s:'Science',q:'A polar bear is adapted to a…',a:['Cold habitat','Hot desert','Tropical ocean','City street'],c:0,h:'It has thick white fur.'},
{s:'Science',q:'What is the weather like when water falls from clouds?',a:['Rainy','Sunny','Windless','Dry'],c:0,h:'You need an umbrella.'},
{s:'Science',q:'What gives Earth light and heat?',a:['The Sun','The Moon','A cloud','A rock'],c:0,h:'You see it in the daytime.'},
{s:'Science',q:'When do we usually see the Moon and stars?',a:['At night','At lunch only','Inside a cave only','Never'],c:0,h:'The sky is dark.'},
{s:'Science',q:'Which season is often the coldest?',a:['Winter','Summer','Spring','All are hot'],c:0,h:'People wear warm coats.'},
{s:'Science',q:'Water becomes ice when it…',a:['Freezes','Melts','Boils','Grows'],c:0,h:'It gets very cold.'},
{s:'Science',q:'Ice becomes liquid water when it…',a:['Melts','Freezes','Grows','Breaks only'],c:0,h:'Heat changes it.'},
{s:'Science',q:'Which material is transparent?',a:['Clear glass','Wood','Brick','Cardboard'],c:0,h:'You can see through it.'},
{s:'Science',q:'Which object is attracted to a magnet?',a:['Iron nail','Paper cup','Wooden spoon','Rubber ball'],c:0,h:'It is made of metal.'},
{s:'Science',q:'What happens when you push a toy car?',a:['It can move','It becomes food','It grows','It disappears'],c:0,h:'A push is a force.'},
{s:'Science',q:'Which gives us natural light?',a:['Sun','Lamp','Flashlight','Television'],c:0,h:'People did not make it.'},
{s:'Science',q:'Which action helps the planet?',a:['Recycling paper','Dropping trash','Wasting water','Cutting every tree'],c:0,h:'Use materials again.'},
{s:'Science',q:'Where should you put a plastic bottle after using it?',a:['Recycling bin','River','Street','School floor'],c:0,h:'Choose the bin that lets it be used again.'},
{s:'Science',q:'Which action saves water?',a:['Turn off the tap','Leave the tap running','Play with the hose','Take a very long shower'],c:0,h:'Stop water when you do not need it.'},
{s:'Science',q:'What is a dinosaur fossil?',a:['A preserved remain or trace','A living dinosaur','A new toy','A type of cloud'],c:0,h:'It is evidence from long ago.'},
{s:'Science',q:'Which dinosaur ate plants?',a:['Triceratops','Tyrannosaurus rex','Velociraptor','All only ate meat'],c:0,h:'Its teeth helped cut plants.'},
{s:'Science',q:'What does herbivore mean?',a:['An animal that eats plants','An animal that eats rocks','An animal that never eats','An animal that makes rain'],c:0,h:'Think of leaves and grass.'},
{s:'Science',q:'Which planet is our home?',a:['Earth','Mars','Jupiter','Venus'],c:0,h:'It has oceans and people.'},
{s:'Science',q:'Which action is safe during a storm?',a:['Stay indoors','Stand under a tall tree','Swim outside','Hold a metal pole'],c:0,h:'A building offers protection.'},
{s:'Social Studies',q:'What is a family?',a:['People who care for one another','Only people at school','A group of toys','A type of building'],c:0,h:'They support and care for each other.'},
{s:'Social Studies',q:'Which is a responsibility at home?',a:['Putting away toys','Breaking things','Shouting at everyone','Ignoring rules'],c:0,h:'It helps keep the home organized.'},
{s:'Social Studies',q:'Which place is part of a community?',a:['School','Moon','Cloud','Ocean floor'],c:0,h:'Children learn there.'},
{s:'Social Studies',q:'Who helps students learn at school?',a:['Teacher','Pilot','Farmer','Chef'],c:0,h:'You see this person in class.'},
{s:'Social Studies',q:'Who helps put out fires?',a:['Firefighter','Dentist','Baker','Musician'],c:0,h:'This person uses a fire truck.'},
{s:'Social Studies',q:'Who helps people when they are sick?',a:['Doctor','Carpenter','Artist','Driver'],c:0,h:'This person works in a clinic or hospital.'},
{s:'Social Studies',q:'Who keeps a community safe and enforces laws?',a:['Police officer','Singer','Gardener','Actor'],c:0,h:'This person may wear a badge.'},
{s:'Social Studies',q:'What is a rule?',a:['Something we agree to follow','A kind of food','A toy','A song only'],c:0,h:'It helps people stay safe and fair.'},
{s:'Social Studies',q:'Why do classrooms have rules?',a:['To learn safely together','To stop all learning','To make a mess','To lose our things'],c:0,h:'Rules help everyone.'},
{s:'Social Studies',q:'What should you do when someone else is speaking?',a:['Listen','Shout louder','Run away','Interrupt'],c:0,h:'Show respect with your ears.'},
{s:'Social Studies',q:'Which action shows respect?',a:['Taking turns','Pushing in line','Laughing at others','Taking things without asking'],c:0,h:'Everyone gets a chance.'},
{s:'Social Studies',q:'What is a right of every child?',a:['To learn','To hurt others','To break every rule','To take anything'],c:0,h:'School supports this right.'},
{s:'Social Studies',q:'What is a map?',a:['A drawing of a place','A kind of animal','A musical instrument','A meal'],c:0,h:'It helps us find locations.'},
{s:'Social Studies',q:'What does a map symbol represent?',a:['A real place or feature','A loud sound','A smell','A feeling only'],c:0,h:'A small picture can stand for something.'},
{s:'Social Studies',q:'Which direction is opposite north?',a:['South','East','West','Up'],c:0,h:'Look at a compass rose.'},
{s:'Social Studies',q:'Which direction is opposite east?',a:['West','North','South','Down'],c:0,h:'The Sun sets in this direction.'},
{s:'Social Studies',q:'What helps us find north, south, east and west?',a:['Compass rose','Calendar','Clock','Thermometer'],c:0,h:'You can see it on a map.'},
{s:'Social Studies',q:'A globe is a model of…',a:['Earth','A classroom','A car','A house'],c:0,h:'It is round like our planet.'},
{s:'Social Studies',q:'What color often shows water on a map?',a:['Blue','Orange','Pink','Black'],c:0,h:'Think of oceans and rivers.'},
{s:'Social Studies',q:'Which is a natural feature?',a:['Mountain','Bridge','Road','School'],c:0,h:'People did not build it.'},
{s:'Social Studies',q:'Which is built by people?',a:['Bridge','River','Mountain','Forest'],c:0,h:'It helps people cross water.'},
{s:'Social Studies',q:'Is a river a natural or human-made feature?',a:['Natural','Human-made','Both always','Neither'],c:0,h:'It exists in nature.'},
{s:'Social Studies',q:'What is a neighborhood?',a:['An area where people live near each other','A planet','A wild animal','A school subject'],c:0,h:'It includes homes and nearby places.'},
{s:'Social Studies',q:'Which transport travels on rails?',a:['Train','Boat','Airplane','Bicycle'],c:0,h:'It stops at a station.'},
{s:'Social Studies',q:'Which transport travels in the air?',a:['Airplane','Bus','Ship','Train'],c:0,h:'It has wings.'},
{s:'Social Studies',q:'Which transport travels on water?',a:['Boat','Car','Train','Bicycle'],c:0,h:'It can sail.'},
{s:'Social Studies',q:'What does a red traffic light mean?',a:['Stop','Go','Run','Turn anywhere'],c:0,h:'Cars must wait.'},
{s:'Social Studies',q:'Where is the safest place to cross a street?',a:['Crosswalk','Middle of the road','Behind a bus','Between parked cars'],c:0,h:'It has painted lines for pedestrians.'},
{s:'Social Studies',q:'What is the capital city of Ecuador?',a:['Quito','Cuenca','Loja','Manta'],c:0,h:'It is the city where Teacher Majo lives.'},
{s:'Social Studies',q:'Which country do we live in?',a:['Ecuador','Canada','Japan','Egypt'],c:0,h:'Its flag is yellow, blue and red.'},
{s:'Social Studies',q:'What are the colors of Ecuador’s flag?',a:['Yellow, blue and red','Green and purple','Black and white','Orange and pink'],c:0,h:'The largest stripe is yellow.'},
{s:'Social Studies',q:'Which is a national symbol of Ecuador?',a:['The flag','A classroom desk','A traffic cone','A lunchbox'],c:0,h:'It represents our country.'},
{s:'Social Studies',q:'Ecuador is in which continent?',a:['South America','Europe','Asia','Africa'],c:0,h:'It is below North America.'},
{s:'Social Studies',q:'Which is a region of Ecuador?',a:['The Coast','The Arctic','The Sahara','The North Pole'],c:0,h:'Guayaquil is in this region.'},
{s:'Social Studies',q:'The Galápagos Islands belong to…',a:['Ecuador','France','Australia','India'],c:0,h:'They are one of our four regions.'},
{s:'Social Studies',q:'Which region of Ecuador has the Andes Mountains?',a:['Highlands','Coast','Insular Region only','Ocean'],c:0,h:'Quito is in this region.'},
{s:'Social Studies',q:'Which region has the Amazon rainforest?',a:['Amazon Region','Coast','Insular Region','Antarctica'],c:0,h:'It has many rivers and trees.'},
{s:'Social Studies',q:'What is a tradition?',a:['A custom passed from one generation to another','A new video game only','A traffic sign','A school desk'],c:0,h:'Families and communities repeat it over time.'},
{s:'Social Studies',q:'Which is part of culture?',a:['Food, music and traditions','Only buildings','Only weather','Only roads'],c:0,h:'It shows how a group lives.'},
{s:'Social Studies',q:'Why do people celebrate local festivals?',a:['To share traditions','To forget their community','To break rules','To waste water'],c:0,h:'Festivals connect people and culture.'},
{s:'Social Studies',q:'Which source tells us about the past?',a:['An old photograph','Tomorrow’s weather','A new blank page','A made-up answer'],c:0,h:'It shows a real moment from before.'},
{s:'Social Studies',q:'What is history?',a:['The study of the past','A map of only oceans','A type of sport','A science experiment'],c:0,h:'It helps us know what happened before.'},
{s:'Social Studies',q:'Which comes first on a timeline?',a:['The earliest event','The latest event','Every event at once','No event'],c:0,h:'Timelines show events in order.'},
{s:'Social Studies',q:'What do we use to know the day and month?',a:['Calendar','Map','Compass','Scale'],c:0,h:'It shows dates.'},
{s:'Social Studies',q:'Which is a basic need?',a:['Food','Video games','Jewelry','A giant television'],c:0,h:'Your body needs it to live.'},
{s:'Social Studies',q:'Which service collects trash in the community?',a:['Sanitation service','Cinema','Toy store','Museum guide'],c:0,h:'It helps keep streets clean.'},
{s:'Social Studies',q:'How can you help your community?',a:['Keep shared places clean','Throw trash on the ground','Damage plants','Ignore everyone'],c:0,h:'Care for places everyone uses.'},
{s:'Social Studies',q:'What should you do in an earthquake drill?',a:['Follow instructions calmly','Run and push','Hide without telling anyone','Use the elevator'],c:0,h:'Listen to the teacher and stay calm.'},
{s:'Social Studies',q:'What is cooperation?',a:['Working together','Fighting for everything','Never helping','Working against the group'],c:0,h:'A team uses it.'},
{s:'Social Studies',q:'If a classmate is different from you, you should…',a:['Treat them with respect','Exclude them','Laugh at them','Take their things'],c:0,h:'Everyone deserves kindness.'}
];

const $=id=>document.getElementById(id); let round=[],idx=0,score=0,student='',answersLog=[],usedHelp={fifty:false,rex:false};
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function show(id){document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));$(id).classList.add('active')}
function makeRound(){const science=shuffle(Q.filter(x=>x.s==='Science')).slice(0,3),social=shuffle(Q.filter(x=>x.s==='Social Studies')).slice(0,2);return shuffle([...science,...social])}
function start(){student=$('studentName').value.trim();if(!student){$('nameError').textContent='Please write your name first.';return}$('nameError').textContent='';round=makeRound();idx=score=0;answersLog=[];usedHelp={fifty:false,rex:false};$('studentLabel').textContent=student;show('gameScreen');renderQuestion()}
function renderQuestion(){const item=round[idx];$('questionNumber').textContent=idx+1;$('progressBar').style.width=`${(idx+1)*20}%`;$('subjectPill').textContent=item.s;$('questionText').textContent=item.q;$('feedback').textContent='';$('feedback').className='feedback';$('clue').textContent='';$('clue').className='clue';$('nextBtn').classList.remove('show');$('fiftyBtn').disabled=usedHelp.fifty;$('rexHelpBtn').disabled=usedHelp.rex;document.querySelectorAll('.prize-ladder li').forEach(li=>{const n=+li.dataset.step;li.className=n===idx+1?'current':n<=idx?'done':''});const letters=['A','B','C','D'];const choices=shuffle(item.a.map((t,i)=>({t,ok:i===item.c})));$('answers').innerHTML='';choices.forEach((choice,i)=>{const b=document.createElement('button');b.className='answer';b.innerHTML=`<span>${letters[i]}</span>${choice.t}`;b.dataset.correct=choice.ok;b.addEventListener('click',()=>choose(b,choice,item));$('answers').appendChild(b)})}
function choose(button,choice,item){const buttons=[...document.querySelectorAll('.answer')];buttons.forEach(b=>{b.disabled=true;if(b.dataset.correct==='true')b.classList.add('correct')});const correct=choice.ok;if(correct){score++;$('feedback').textContent='ROAR-SOME! Correct answer!';$('feedback').classList.add('good')}else{button.classList.add('wrong');$('feedback').textContent='Good try! Rex found the correct answer.';$('feedback').classList.add('bad')}answersLog.push({subject:item.s,correct,question:item.q});$('nextBtn').textContent=idx===4?'SEE MY RESULT ▶':'NEXT QUESTION ▶';$('nextBtn').classList.add('show')}
function next(){idx++;if(idx<5)renderQuestion();else finish()}
function finish(){const sci=answersLog.filter(x=>x.subject==='Science'),soc=answersLog.filter(x=>x.subject==='Social Studies');const result={student,score,science:`${sci.filter(x=>x.correct).length}/${sci.length}`,social:`${soc.filter(x=>x.correct).length}/${soc.length}`,date:new Date().toLocaleString()};const data=JSON.parse(localStorage.getItem('rexResults')||'[]');data.push(result);localStorage.setItem('rexResults',JSON.stringify(data));$('scoreValue').textContent=`${score}/5`;$('resultTitle').textContent=score===5?'Dino Champion!':score>=3?'Roar-some work!':'Brave Explorer!';$('resultMessage').textContent=score===5?'You conquered every question in English!':score>=3?'You have a strong start. Keep exploring and learning!':'Every great explorer learns one step at a time. Rex is proud of you!';$('breakdown').innerHTML=`<span>🔬 Science: <b>${result.science}</b></span><span>🌎 Social Studies: <b>${result.social}</b></span>`;show('resultScreen')}
function newStudent(){$('studentName').value='';show('startScreen');$('studentName').focus()}
function fifty(){const wrong=[...document.querySelectorAll('.answer')].filter(b=>b.dataset.correct==='false');shuffle(wrong).slice(0,2).forEach(b=>b.classList.add('hidden'));usedHelp.fifty=true;$('fiftyBtn').disabled=true}
function rexHelp(){usedHelp.rex=true;$('rexHelpBtn').disabled=true;$('clue').textContent=`🦖 Rex says: ${round[idx].h}`;$('clue').classList.add('show')}
function speak(){if(!('speechSynthesis'in window))return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(round[idx].q);u.lang='en-US';u.rate=.82;window.speechSynthesis.speak(u)}
function renderResults(){const data=JSON.parse(localStorage.getItem('rexResults')||'[]');$('resultsBody').innerHTML=data.length?data.map(r=>`<tr><td>${safe(r.student)}</td><td>${r.score}/5</td><td>${r.science}</td><td>${r.social}</td><td>${safe(r.date)}</td></tr>`).join(''):'<tr><td colspan="5">No explorers have played yet.</td></tr>'}
function safe(x){const d=document.createElement('div');d.textContent=x;return d.innerHTML}
function openResults(){renderResults();$('teacherDialog').showModal()}
function download(){const data=JSON.parse(localStorage.getItem('rexResults')||'[]');if(!data.length)return;const rows=[['Student','Total','Science','Social Studies','Date'],...data.map(r=>[r.student,`${r.score}/5`,r.science,r.social,r.date])];const csv=rows.map(row=>row.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='rex-diagnostic-results.csv';a.click();URL.revokeObjectURL(a.href)}
function clearResults(){if(confirm('Delete all saved results from this device?')){localStorage.removeItem('rexResults');renderResults()}}
$('startBtn').onclick=start;$('studentName').addEventListener('keydown',e=>{if(e.key==='Enter')start()});$('nextBtn').onclick=next;$('newStudentBtn').onclick=newStudent;$('fiftyBtn').onclick=fifty;$('rexHelpBtn').onclick=rexHelp;$('speakBtn').onclick=speak;$('teacherBtn').onclick=openResults;$('closeDialog').onclick=()=>$('teacherDialog').close();$('downloadBtn').onclick=download;$('clearBtn').onclick=clearResults;
