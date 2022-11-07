function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            reveals[i].classList.remove("disactivate");
        } 
        else if (elementTop == 0) {
            reveals[i].classList.remove("active");
            reveals[i].classList.remove("disactivate");
        }
        else {
            reveals[i].classList.remove("active");
            reveals[i].classList.add("disactivate");
        }
    }
}

window.addEventListener("scroll", reveal);

function playAudio(path) {
    let audio = new Audio(path);
    audio.play();

    window.addEventListener("click", function(event) {
        if (!event.target.getAttribute("onclick")?.includes('playAudio')) {
            audio.pause();
        }
    });
}