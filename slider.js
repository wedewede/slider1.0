let allButton=$('#buttons>button')
highLight()
function highLight(){
  for(let i=0;i<allButton.length;i++){
  $(allButton[i]).on('click',function(x){
    let index=$(x.currentTarget).index()
    let m=index*-305
    $('#images').css({
      'margin-left':m+'px'
    })
    allButton.eq(index).addClass('red').siblings().removeClass('red')
  })
}
}
let n=0

function autoSlide(){
  n=n+1
  let count=allButton.length
  allButton.eq(n%count).trigger('click')
  
}
function setTimer(){
  return setInterval(function(){
    autoSlide()
  },1500)
}
let timer = setTimer()
$('#viewport').on('mouseenter',function(){
  window.clearInterval(timer)
})
$('#viewport').on('mouseleave', function () {
  timer= setTimer()
})