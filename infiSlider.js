let i=1
initTarget()
setInterval(()=>{
    $(`.images > img:nth-child(${loop(i)})`).removeClass('current').addClass('leave')
        .one('transitionend', (zzz) => {
            console.log(zzz)
            $(zzz.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images > img:nth-child(${loop(i+1)})`).removeClass('enter').addClass('current')
    i+=1
},2000)
function loop(i){
    let m=$('.images>img').length;
    if (i > m){
        i = i % m;
        if(i === 0) {
            i =m;
        }
    }
    return i  ;   
}
function initTarget(){
    $('.images>img').addClass('enter')
    $('.images >img:nth-child(1)').removeClass('enter').addClass('current') 
}