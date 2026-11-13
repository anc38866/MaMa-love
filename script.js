const questions = [
  {q:'မမရေ... မောင်မောင်ကို ချစ်လား? 💜', sub:'မောင် မေးစရာလေးရှိတယ်...', yes:'ချစ်တာပေါ့မောင် 💗', no:'မချစ်ဘူး 🙈'},
  {q:'ဘယ်လောက်ချစ်လဲ? 🥰', sub:'မောင် သိချင်လို့ပါ...', yes:'အများကြီး ❤️', no:'နည်းနည်းပဲ 🤏'},
  {q:'မောင့်ကို အများကြီးချစ်တယ်ပေါ့။ မောင်ကလည်း အရမ်းချစ်တယ်။ 💜', sub:'အမှန်အတိုင်းဖြေပေးနော်...', yes:'မောင့်ကို အရမ်းချစ်တယ် 😘', no:'မချစ်ဘူး 🥺'},
  {q:'မောင်နဲ့ မမ လက်ထပ်ကြဖို့ ဖိတ်စာရိုက်လိုက်ရတော့မလား? 💍', sub:'နောက်ဆုံးမေးခွန်းလေးပါ...', yes:'ရိုက်လိုက်တော့ 💐', no:'မရိုက်ဘူး 🙈'}
];
let page = 0;
const question = document.getElementById('question');
const subtitle = document.getElementById('subtitle');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const area = document.getElementById('answerArea');
const progress = document.getElementById('progress');
const modal = document.getElementById('inviteModal');

function render(){
  const item = questions[page];
  question.textContent = item.q;
  subtitle.textContent = item.sub;
  yesBtn.textContent = item.yes;
  noBtn.textContent = item.no;
  progress.textContent = `0${page+1} / 04`;
  yesBtn.style.transform = 'scale(1)';
  noBtn.style.transform = 'scale(1)';
  noBtn.style.position = 'relative';
  noBtn.style.left = '0';
  noBtn.style.top = '0';
  noBtn.style.opacity = '1';
}
yesBtn.addEventListener('click',()=>{
  if(page === 3){ modal.classList.remove('hidden'); return; }
  page++;
  render();
});
noBtn.addEventListener('click',()=>{
  if(page===0){
    noBtn.style.position='absolute';
    noBtn.style.left=Math.random()*65+'%';
    noBtn.style.top=Math.random()*55+'%';
    yesBtn.style.transform='scale(1.12)';
  } else if(page===1){
    noBtn.style.transform='scale(.72)';
    yesBtn.style.transform='scale(1.18)';
  } else if(page===2){
    noBtn.style.position='absolute';
    noBtn.style.left=(Math.random()*65)+'%';
    noBtn.style.top=(Math.random()*55)+'%';
    noBtn.style.transform='rotate(12deg)';
    yesBtn.style.boxShadow='0 0 35px #ff8bc8';
  } else {
    noBtn.style.transform='rotate(18deg) scale(.8)';
    noBtn.style.position='absolute';
    noBtn.style.left='8%';
    noBtn.style.top='8%';
    yesBtn.style.transform='scale(1.2)';
  }
});
document.getElementById('closeInvite').addEventListener('click',()=>modal.classList.add('hidden'));
render();
