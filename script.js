const correctPin = "4267";

/* 🔐 الدخول */
function checkPin() {
    const input = document.getElementById("pin").value.trim();

    if (input === correctPin) {
        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");

        startTyping();
        autoSlide();
        enableMusic();
        spawnRoses(); // 🌹
    } else {
        document.getElementById("error").innerText = "رمز خاطئ ❤️";
    }
}

/* 🎵 تشغيل الموسيقى (متوافق مع الموبايل + fade) */
function enableMusic() {
    const music = document.getElementById("music");

    music.volume = 0;
    music.play().catch(() => {});

    let volume = 0;
    const fade = setInterval(() => {
        if (volume < 1) {
            volume += 0.05;
            music.volume = volume;
        } else {
            clearInterval(fade);
        }
    }, 200);

    const startMusic = () => {
        music.play().catch(() => {});
    };

    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("touchstart", startMusic, { once: true });
}

/* 💌 رسالة (مناسبة للموبايل) */
const textLines = [
    "حبيبتي مجودة ❤️",
    "في مثل هذا اليوم بدأت أجمل قصة في حياتي ❤️",
    "بدأت رحلتي معكِ… والتي ستكون إلى آخر نفس ❤️",
    "اليوم أحبك أكثر من أي وقت مضى ❤️",
    "بحبك يا عمري ❤️"
];

/* 🎬 كتابة سطر سطر */
function startTyping() {
    const el = document.getElementById("typing");
    el.innerHTML = "";

    let i = 0;

    function showLine() {
        if (i < textLines.length) {
            el.innerHTML += textLines[i] + "<br><br>";
            i++;
            setTimeout(showLine, 900);
        }
    }

    showLine();
}

/* 📸 الصور */
const images = [
    "img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg","img5.jpeg",
    "img6.jpeg","img7.jpeg","img8.jpeg","img9.jpeg","img10.jpeg",
    "img11.jpeg","img12.jpeg","img13.jpeg","img14.jpeg","img15.jpeg",
    "img16.jpeg","img17.jpeg","img18.jpeg","img19.jpeg","img20.jpeg"
];

let index = 0;

/* عرض الصورة */
function show() {
    const img = document.getElementById("slider");

    img.style.opacity = 0;

    setTimeout(() => {
        img.src = images[index];
        img.style.opacity = 1;
    }, 400);
}

/* تشغيل تلقائي */
function autoSlide() {
    setInterval(() => {
        index = (index + 1) % images.length;
        show();
    }, 3000);
}

/* 🎵 زر */
function toggleMusic() {
    const music = document.getElementById("music");
    music.paused ? music.play() : music.pause();
}

/* 🎁 */
function showSurprise() {
    document.getElementById("surprise").classList.remove("hidden");

    // اهتزاز خفيف للموبايل
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
}

/* ❤️ */
function yes() {
    showCustomMessage("كنت أعرف أنك ستقولين نعم ❤️ وأنا سأبقى أحبك إلى الأبد");
}

/* 💬 رسالة احترافية */
function showCustomMessage(message) {
    const box = document.createElement("div");

    box.innerHTML = `
        <div style="
            position:fixed;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            width:90%;
            max-width:300px;
            background:#222;
            padding:20px;
            border-radius:15px;
            text-align:center;
            z-index:999;
            box-shadow:0 0 20px pink;
        ">
            <p style="font-size:18px; line-height:1.6;">${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                style="margin-top:15px; padding:10px; background:pink; border:none; width:100%;">
                ❤️
            </button>
        </div>
    `;

    document.body.appendChild(box);
}

/* 🌹 ورود متساقطة */
function spawnRoses() {
    setInterval(() => {
        const rose = document.createElement("div");
        rose.innerHTML = "🌹";
        rose.style.position = "fixed";
        rose.style.top = "-50px";
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.fontSize = "20px";
        rose.style.animation = "fall 6s linear";

        document.body.appendChild(rose);

        setTimeout(() => rose.remove(), 6000);
    }, 800);
}

/* 🎬 intro */
function startIntro() {

    const title = "حبيبتي ❤️";
    const lines = [
        "بمناسبة عيد زواجنا الرابع عشر 💍",
        "أحببت أن أقدم لكِ هذه الهدية 🎁",
        "أرجو أن تنال إعجابك ❤️",
        "ادخلي الأرقام الاربعة الخاصة بنا والتي تعشقينها  ❤️"
    ];

    let i = 0;

    const titleEl = document.getElementById("introTitle");
    const msgEl = document.getElementById("introMessage");

    titleEl.innerHTML = "";
    msgEl.innerHTML = "";

    function typeTitle() {
        let index = 0;

        function type() {
            if (index < title.length) {
                titleEl.innerHTML += title[index];
                index++;
                setTimeout(type, 70);
            } else {
                setTimeout(showLines, 600);
            }
        }

        type();
    }

    function showLines() {
        if (i < lines.length) {
            msgEl.innerHTML += lines[i] + "<br><br>";
            i++;
            setTimeout(showLines, 1000);
        }
    }

    typeTitle();
}

/* 🚀 تشغيل آمن */
document.addEventListener("DOMContentLoaded", () => {

    startIntro();

    const pinInput = document.getElementById("pin");

    if (pinInput) {
        pinInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                checkPin();
            }
        });
    }

});