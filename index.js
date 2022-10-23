
var minutes= document.getElementById('minutes');
var seconds= document.getElementById('seconds');
var mSeconds= document.getElementById('milleseconds');
var count =0;
var timer;

document.getElementById('button-start').addEventListener('click', function(){
begin();
clearInterval(timer);
timer= setInterval (begin, 10);
});

document.getElementById('button-stop').addEventListener('click', function(){
  clearInterval(timer);
});

document.getElementById('button-reset').addEventListener('click', function(){
  clearInterval(timer);
  count=0;
  seconds.textContent='0' + 0;
  mSeconds.textContent='0' + 0;
})

function begin(){
count++;
mSeconds.innerHTML=count;
if(count<=9){
  mSeconds.innerHTML='0' + count;
}else{
    mSeconds.innerHTML=count;
}

if(count>=99){
    count=0;
    mSeconds.innerHTML=count;
    seconds.innerHTML++;
    seconds.innerHTML='0'+seconds.innerHTML++;
}
if(seconds.innerHTML>9){
  seconds.innerHTML=seconds.innerHTML++
}
if(seconds.innerHTML>59){
  minutes.innerHTML++;
  minutes.innerHTML='0'+minutes.innerHTML++;
  seconds.innerHTML='0'+0;
}
if(minutes.innerHTML>9){
  minutes.innerHTML=minutes.innerHTML++;
}
};
