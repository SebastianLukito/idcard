const speed = 8;
const r = gsap.timeline({ repeat: -1 });
const o = gsap.timeline({ repeat: -1 });
const h = gsap.timeline({ repeat: -1 });
let isDragging = false;
let startX, currentRotation = 0;

const $ticket = document.querySelector(".ticket");

$ticket.addEventListener("mouseenter", () => {
    r.pause();
    o.pause();
    h.pause();
});
$ticket.addEventListener("mouseleave", () => {
    if (!isDragging) {
        r.play();
        o.play();
        h.play();
    }
});

// Menambahkan event listener untuk drag dan touch
$ticket.addEventListener("mousedown", startDrag);
$ticket.addEventListener("mousemove", drag);
$ticket.addEventListener("mouseup", endDrag);
$ticket.addEventListener("mouseleave", endDrag);  // Handle mouse leaving while dragging

$ticket.addEventListener("touchstart", startDrag);
$ticket.addEventListener("touchmove", drag);
$ticket.addEventListener("touchend", endDrag);

function startDrag(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    r.pause();
    o.pause();
    h.pause();
}

function drag(e) {
    if (!isDragging) return;
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const dx = x - startX;
    currentRotation += dx * 0.7;  // Adjust this value to change rotation sensitivity
    $ticket.style.setProperty('--r', `${currentRotation}deg`);
    startX = x;
}

function endDrag() {
    isDragging = false;
    r.play();
    o.play();
    h.play();
}

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
// o.to(".ticket", {
//     "--o": 1,
//     duration: speed / 2,
//     ease: "power1.in"
// });
// o.to(".ticket", {
//     "--o": 0,
//     duration: speed / 2,
//     ease: "power1.out"
// });

// h.to(".ticket", {
//     "--h": "100%",
//     duration: speed / 2,
//     ease: "sine.in"
// });
// h.to(".ticket", {
//     "--h": "50%",
//     duration: speed / 2,
//     ease: "sine.out"
// });
// h.to(".ticket", {
//     "--h": "0%",
//     duration: speed / 2,
//     ease: "sine.in"
// });
// h.to(".ticket", {
//     "--h": "50%",
//     duration: speed / 2,
//     ease: "sine.out"
// });
