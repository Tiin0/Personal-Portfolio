
export default function startObserver() {

    const options = {
        root: null,
        rootMargin: "50px",
        threshold: 0.7
    }

    const targets = document.querySelectorAll("[data-animation]");

    const callback = (entries) => {
        entries.forEach(entry => {
            const ratio = entry.intersectionRatio;
            if (ratio >= 0.7) {
                console.log(entry.target, entry.intersectionRatio)
                const animation = entry.target.dataset.animation;
                console.log(animation);
                entry.target.classList.add(`${animation}`);
            }
        })
    }

    const observer = new IntersectionObserver(callback, options);
    targets.forEach(element => observer.observe(element));
}
