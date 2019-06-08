function getScrollPercent() {
    const h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

document.addEventListener('scroll', () => {
    document.querySelector('html').style.backgroundColor = `hsla(${getScrollPercent()}, 100%, 90%)`;

    getScrollPercent();
    const scrolled = getScrollPercent();
    document.getElementById('showScroll').innerHTML = Math.round(scrolled) + '%';
});

