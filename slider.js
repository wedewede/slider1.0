let allButton=$('#buttons>button')
highLight()
function highLight(){
  let s=0;
  for(let i=0;i<allButton.length;i++){
    $(allButton[i]).on('click',function(x){
      let index=$(x.currentTarget).index()
      n=index;
      let m=index*-305
      $('#images').css({
        'margin-left':m+'px'
      })
      allButton.eq(index).addClass('red').siblings().removeClass('red');
    }) 
  } 
}

let n=0
function setTimer(){
  return setInterval(function(){
    n=n+1
    let count=allButton.length
    allButton.eq(n%count).trigger('click')
  },2000)
}

let timer = setTimer()
$('#wrapper').on('mouseleave', function () {
  timer = setTimer() 
})

$('#wrapper').on('mouseenter', function () {
  window.clearInterval(timer)
})