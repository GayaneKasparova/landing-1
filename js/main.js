let header = document.querySelector("header");
let headerPosition = header.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > headerPosition) {
        header.classList.contains("transparent") ? header.classList.remove("transparent") : null;
        //bannerContainer.classList.contains("fullHeight") ? bannerContainer.classList.remove("fullHeight") : null;
    } else {
        !header.classList.contains("transparent") ? header.classList.add("transparent") : null;
        //!bannerContainer.classList.contains("fullHeight") ? bannerContainer.classList.add("fullHeight") : null;
    }
};

document.addEventListener("DOMContentLoaded", function() {
    lightGallery(document.getElementById('lightgallery'));
    let accordion = document.querySelectorAll(".accordion span");
    let i;

    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function(e) {
            accordionListener(e.target);
        });
    }
});

accordionListener = function f(target) {
    target.classList.toggle("active");
    panel = target.parentNode.querySelector("p");
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
};



