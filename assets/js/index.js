/* scroll event */
document.addEventListener('scroll', function(){
    //index-head Parallax scrolling
    const scroll = window.scrollY;
    const index_head = $('.index-head');
    index_head[0].style.transform = `translateY(${scroll * 0.6}px)`

    //goto button
    if(scroll > 100){
        $('.gotop')[0].style.opacity = '1';
    }else{
        $('.gotop')[0].style.opacity = '0';
    }
})

/* fade in effect */
let observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        console.log(entry.intersectionRatio);
        if(entry.intersectionRatio > 0){
            entry.target.classList.add('is-visited');
            observer.unobserve(entry.target);
        }
    })
}, {
    threshold: 0.8
});
$('.fade-in').forEach(function(elm){
    observer.observe(elm);
})

/* mouse effect */
let index_head = $('.index-head')[0];
index_head.addEventListener('mousemove', test);
index_head.addEventListener('touchmove', test);
function test(e){
    //create element
    let element = document.createElement('div');
    element.style.top = (e.clientY || e.touches[0].clientY) +'px';
    element.style.left = (e.clientX || e.touches[0].clientX) + 'px';
    element.classList.add('mouse');

    //set translate
    let random = Math.floor(Math.random() * 40)
    if(random <= 20) random -= 20
    element.style.setProperty('--translateX', random+"px")

    //spawn element
    $('body')[0].appendChild(element)
    setTimeout(function(){
        element.remove(); //remove element
    },2000)
}

/* Selector */
function $(Selector){
    return document.querySelectorAll(Selector);
}