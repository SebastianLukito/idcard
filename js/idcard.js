const speed = 7;
const r = gsap.timeline({ repeat: -1 });
const o = gsap.timeline({ repeat: -1 });
const h = gsap.timeline({ repeat: -1 });

const $ticket = document.querySelector(".ticket");
$ticket.addEventListener("mouseenter", () => {
    r.pause();
    o.pause();
    h.pause();
});
$ticket.addEventListener("mouseleave", () => {
    r.play();
    o.play();
    h.play();
});

// Mengubah rotasi pada .ticket
r.to(".ticket", {
    "--r": "180deg",
    "--p": "0%",
    duration: speed,
    ease: "sine.in"
});
r.to(".ticket", {
    "--r": "360deg",
    "--p": "100%",
    duration: speed,
    ease: "sine.out"
});

// Perbaikan animasi opacity dan posisi horizontal
o.to(".ticket", {
    "--o": 1,
    duration: speed / 2,
    ease: "power1.in"
});
o.to(".ticket", {
    "--o": 0,
    duration: speed / 2,
    ease: "power1.out"
});

h.to(".ticket", {
    "--h": "100%",
    duration: speed / 2,
    ease: "sine.in"
});
h.to(".ticket", {
    "--h": "50%",
    duration: speed / 2,
    ease: "sine.out"
});
h.to(".ticket", {
    "--h": "0%",
    duration: speed / 2,
    ease: "sine.in"
});
h.to(".ticket", {
    "--h": "50%",
    duration: speed / 2,
    ease: "sine.out"
});