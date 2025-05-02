document.addEventListener("DOMContentLoaded", function () {
    

    // Animação de Texto (primeira parte)
    var textWrapper1 = document.querySelector('.ml9 .letters');
    if (textWrapper1) {
        textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline()
            .add({
                targets: '.ml9 .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i + 1)
            });
    }

    // Animação de Texto (segunda parte)
    var textWrapper2 = document.querySelector('.ml1 .letters');
    if (textWrapper2) {
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline()
            .add({
                targets: '.ml1 .letter',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 90 * (i + 1)
            }).add({
                targets: '.ml1 .line',
                scaleX: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 700,
                offset: '-=875',
                delay: (el, i, l) => 90 * (l - i)
            });
    }

    // Animação de Texto (pagina inicial)
    anime.timeline()
        .add({
            targets: '.ml5 .line',
            opacity: [0.5,1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 800,
            delay: (el, i) => 90 * (i + 1)
        }).add({
            targets: '.ml5 .line',
            duration: 800,
            easing: "easeOutExpo",
            translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
        }).add({
            targets: '.ml5 .ampersand',
            opacity: [0,1],
            scaleY: [0.5, 1],
            easing: "easeOutExpo",
            duration: 800,
            offset: '-=600'
        }).add({
            targets: '.ml5 .letters-left',
            opacity: [0,1],
            translateX: ["0.5em", 0],
            easing: "easeOutExpo",
            duration: 800,
            offset: '-=300'
        }).add({
            targets: '.ml5 .letters-right',
            opacity: [0,1],
            translateX: ["-0.5em", 0],
            easing: "easeOutExpo",
            duration: 800,
            offset: '-=600'
        });
    
}); 
