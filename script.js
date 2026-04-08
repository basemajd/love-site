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
    } else {
        document.getElementById("error").innerText = "رمز خاطئ ❤️";
    }
}

/* 🎵 تشغيل الموسيقى */
function enableMusic() {
    const music = document.getElementById("music");

    music.play().catch(() => {});

    document.addEventListener("click", () => {
        music.play().catch(() => {});
    }, { once: true });

    document.addEventListener("touchstart", () => {
        music.play().catch(() => {});
    }, { once: true });
}

/* 💌 رسالة */
const text = "حبيبتي مجودة ❤️ في مثل هذا اليوم بدأت أجمل قصة في حياتي ❤️ بدأت رحلتي معكي والتي ستكون الى اخر نفس  في عمري ❤️  اليوم أحبك أكثر من أي وقت مضى ❤️ بحبك يا عمري ❤️";
let i = 0;

function startTyping() {
    const el = document.getElementById("typing");
    el.innerHTML = "";

    function type() {
        if (i < text.length) {
            el.innerHTML += text[i];
            i++;
            setTimeout(type, 40);
        }
    }

    type();
}

/* 📸 الصور */
const images = [
    "img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg","img5.jpeg",
    "img6.jpeg","img7.jpeg","img8.jpeg","img9.jpeg","img10.jpeg",
    "img11.jpeg","img12.jpeg","img13.jpeg","img14.jpeg","img15.jpeg",
    "img16.jpeg","img17.jpeg","img18.jpeg","img19.jpeg","img20.jpeg"
];

let index = 0;

function show() {
    const img = document.getElementById("slider");

    img.style.opacity = 0;

    setTimeout(() => {
        img.src = images[index];
        img.style.opacity = 1;
    }, 400);
}

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
}

/* ❤️ */
function yes() {
    showCustomMessage("كنت أعرف أنك ستقولين نعم ❤️ وأنا سأبقى أحبك إلى الأبد");
}

/* 🎬 intro سينمائي */
function startIntro() {

    const title = "حبيبتي ❤️";
    const lines = [
        "بمناسبة عيد زواجنا الرابع عشر 💍",
        "أحببت أن أقدم لكِ هذه الهدية 🎁",
        "أرجو أن تنال إعجابك ❤️",
        "ادخلي الأرقام الاربع الخاصة بنا والتي تعشقينها❤️  "
    ];

    let i = 0;

    function typeTitle() {
        let index = 0;

        function type() {
            if (index < title.length) {
                document.getElementById("introTitle").innerHTML += title[index];
                index++;
                setTimeout(type, 80);
            } else {
                showLines();
            }
        }

        type();
    }

    function showLines() {
        if (i < lines.length) {
            document.getElementById("introMessage").innerHTML += lines[i] + "<br><br>";
            i++;
            setTimeout(showLines, 1200);
        }
    }

    typeTitle();
}
function showCustomMessage(message) {
    const box = document.createElement("div");

    box.innerHTML = `
        <div style="
            position:fixed;
            top:40%;
            left:50%;
            transform:translate(-50%,-50%);
            background:#222;
            padding:30px;
            border-radius:15px;
            text-align:center;
            z-index:999;
            box-shadow:0 0 20px pink;
        ">
            <p style="font-size:20px;">${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                style="margin-top:15px; padding:10px 20px; background:pink; border:none;">
                ❤️
            </button>
        </div>
    `;

    document.body.appendChild(box);
}
window.onload = startIntro;

/* Enter */
document.getElementById("pin").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        checkPin();
    }
});