function scroller(x, el) {
    const thing = document.getElementById(el);
    var t = 0;
    var int = setInterval(function() {
        thing.scrollBy(x/20, 0);
        t += 1;
        if(t == 20){
            clearInterval(int);
        }
    }, 20)
}