function bascule(cla) {
    console.log('Appel à la fonction cacher détecté' + cla);
    let paragraphe = document.querySelectorAll('.'+cla)
    paragraphe.forEach(function(p,i){
        if (p.style.display == 'none') {
             p.style.display ='block';
        } else {
            p.style.display='none';
        }
    });
}

function carrousel3Images() {
    var fi_lm = document.querySelectorAll('.fi_lm');
    let d = 2000;
    let delta = 1000;

    fi_lm.forEach(function(img,indice) {
        img.style.zIndex = fi_lm.length - indice;
    });

    let anim153 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim153.add({
        targets: fi_lm,
        translateX: [{value: '288', duration: d},
                     {value: '-288', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (2*delta)+d;
                         if (ind == 1) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 2) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            return (3*delta)+(2*d);
        }
    });
}