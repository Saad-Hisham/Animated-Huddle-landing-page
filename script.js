const firstCard = document.getElementById("first-card");
const secondCard = document.getElementById("second-card");
const thirdCard = document.getElementById("third-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const visibleRatio = entry.intersectionRatio;
            if (visibleRatio >= 0.8) {
                firstCard.classList.add("animate"); 
            }
        }
    });
}, { threshold: 0.8 });

observer.observe(firstCard);

const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const visibleRatio = entry.intersectionRatio;
            if (visibleRatio >= 0.8) {
                secondCard.classList.add("animate"); 
            }
        }
    });
}, { threshold: 0.8 });

observerTwo.observe(secondCard);

const observerThree = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const visibleRatio = entry.intersectionRatio;
            if (visibleRatio >= 0.8) {
                thirdCard.classList.add("animate"); 
            }
        }
    });
}, { threshold: 0.8 });

observerThree.observe(thirdCard);
