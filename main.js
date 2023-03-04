var body = document.body;
var scrollBtn = document.getElementById('scrollBtn');


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);
    if(scroll >= 800 ) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}