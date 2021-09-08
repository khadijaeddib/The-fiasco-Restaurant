const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
}
let targets = document.querySelectorAll('.animation')

let callbacks = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animationScroll')
        }
    })
}
let observer = new IntersectionObserver(callbacks,options) 

targets.forEach(target => {
    observer.observe(target)
})