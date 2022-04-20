$('button').forEach(function(elm){
    elm.addEventListener('click', function(e){
        /* jump to Contact_us page */
        console.log(e.target.dataset.course)
        sessionStorage.setItem("course", e.target.dataset.course);
        window.location.href = "Contact_us.html"
    })
})