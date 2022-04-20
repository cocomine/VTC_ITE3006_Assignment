/* submit event */
$('#Contact_us')[0].addEventListener('submit', function(e){
    e.preventDefault();
    alert('Your Comments has been sent')
})

/* auto fill */
let course = sessionStorage.getItem('course')
if(course != null){
    $('#comments')[0].value = "Hello! I would like to take the "+course+" course, is there still a place?"
    sessionStorage.removeItem('course')
}