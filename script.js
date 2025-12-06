// ===== SCRIPT.JS — Logic phát lì xì, pháo hoa, hoa mai, âm thanh =====

// ============================
// TỶ LỆ RANDOM BAO LÌ XÌ
// ============================
const rewards = [
    { amount: 2500, weight: 5 },
    { amount: 1000, weight: 10 },
    { amount: 800,  weight: 20 },
    { amount: 600,  weight: 25 },
    { amount: 500,  weight: 30 },
    { amount: "Next time", weight: 10 }
];

function weightedRandom() {
    let total = rewards.reduce((s, r) => s + r.weight, 0);
    let rnd = Math.random() * total;

    for (let r of rewards) {
        if (rnd < r.weight) return r.amount;
        rnd -= r.weight;
    }
}

// ============================
// PHÁT BAO LÌ XÌ + HIỆU ỨNG
// ============================
function spawnLixi() {
    for (let i = 0; i < 6; i++) {
        let lixi = document.createElement('img');
        lixi.src = `https://i.imgur.com/5G8bY2M.png`;
        lixi.className = 'lixi';
        lixi.style.left = (200 + Math.random() * 900) + 'px';
        lixi.style.top = (80 + Math.random() * 200) + 'px';

        lixi.onclick = function (event) {
            let reward = weightedRandom();
            alert("Bạn nhận được: " + reward + " Naira");
            showFireworks(event);
            this.remove();
        };

        document.body.appendChild(lixi);
    }
}

// ============================
// HOA MAI RƠI
// ============================
setInterval(() => {
    let fl = document.createElement('img');
    fl.src = "https://i.imgur.com/nxv1yYF.png";
    fl.className = 'flower';
    fl.style.left = Math.random() * 100 + 'vw';
    fl.style.animationDuration = (4 + Math.random() * 4) + 's';
    document.body.appendChild(fl);
    setTimeout(() => fl.remove(), 6000);
}, 400);

// ============================
// PHÁO HOA KIỂU TẾT VIỆT
// ============================
function showFireworks(event) {
    for (let i = 0; i < 20; i++) {
        let f = document.createElement('div');
        f.style.position = 'absolute';
        f.style.width = '10px';
        f.style.height = '10px';
        f.style.borderRadius = '50%';
        f.style.background = 'gold';
        f.style.left = (event.pageX - 5) + 'px';
        f.style.top = (event.pageY - 5) + 'px';
        f.style.transition = '1s';
        document.body.appendChild(f);

        setTimeout(() => {
            f.style.transform = `translate(${(Math.random()-0.5)*300}px, ${(Math.random()-0.5)*300}px)`;
            f.style.opacity = 0;
        }, 50);

        setTimeout(() => f.remove(), 1100);
    }
}

// ============================
// NHẠC NỀN
// ============================
function toggleMusic() {
    let bgm = document.getElementById('bgm');
    if (bgm.paused) bgm.play(); else bgm.pause();
}
