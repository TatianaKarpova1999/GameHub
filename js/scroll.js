let animationItems = document.querySelectorAll('.animation');

if (animationItems.length > 0) {
    window.addEventListener('scroll', animScroll)
    function animScroll() {
        for (let i = 0; i < animationItems.length; i++) {
            const animationItem = animationItems[i];
            const animItemHeight = animationItem.offsetHeight;
            const animItemOffset = offset(animationItem).top;
            const animStart = 4;

            let animationItemsPoint = window.innerHeight - animItemHeight/animStart;

            if(animItemHeight > window.innerHeight) {
                animationItemsPoint = window.innerHeight - window.innerHeight/animStart;
            }

            if ((pageYOffset > animItemOffset - animationItemsPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animationItem.classList.add('active');
            } else {
                animationItem.classList.remove('active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect();
const scrollLeft = window.pageX || document.documentElement.scrollLeft;
   const scrollTop = window.pageY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animScroll();
}

