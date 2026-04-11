

// Formulaire
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message envoyé avec succès !");
});
// Observer pour sections et animations
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
},{threshold:0.3});

document.querySelectorAll('section, .skill, .projet, .timeline-item').forEach(el => observer.observe(el));

// Animation des compétences
const bars = document.querySelectorAll(".progress");
const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.width = entry.target.dataset.width;
            skillsObserver.unobserve(entry.target);
        }
    });
},{threshold:0.5});
bars.forEach(bar => skillsObserver.observe(bar));

// Navbar scroll
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Parallaxe photo
const photo = document.querySelector(".hero-photo img");
if (window.innerWidth > 768) {
    document.addEventListener("mousemove", e => {
    const x = (window.innerWidth/2 - e.clientX)/50;
    const y = (window.innerHeight/2
            });
}