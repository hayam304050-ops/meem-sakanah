// ==========================================
// ⬇️ منطقة المنهج (Syllabus) ⬇️
// المادة الدراسية: أحكام الميم الساكنة
// ==========================================

const syllabus = [
    {
        chapter: "أحكام الميم الساكنة",

        branches: [

            // ==========================================
            // الدرس الأول: تعريف الميم الساكنة
            // ==========================================

            {
                title: "1. تعريف الميم الساكنة",

                lesson:
                    "📘 تعريف الميم الساكنة:\n\n" +
                    "الميم الساكنة هي الميم الخالية من الحركة، أي لا فتحة عليها ولا ضمة ولا كسرة.\n\n" +
                    "ويكون سكونها ثابتًا في الوصل والوقف.\n\n" +
                    "وقد تأتي في الاسم أو الفعل أو الحرف، وفي وسط الكلمة أو آخرها.\n\n" +
                    "📌 للميم الساكنة ثلاثة أحكام، بحسب الحرف الذي يأتي بعدها:\n\n" +
                    "1️⃣ الإخفاء الشفوي: إذا جاء بعدها حرف الباء.\n\n" +
                    "2️⃣ الإدغام الشفوي: إذا جاء بعدها حرف الميم المتحرك.\n\n" +
                    "3️⃣ الإظهار الشفوي: إذا جاء بعدها أي حرف آخر غير الباء والميم.\n\n" +
                    "💡 تذكري: ننظر إلى الحرف الذي يأتي بعد الميم الساكنة لتحديد الحكم.",

                questions: [

                    {
                        q: "ما تعريف الميم الساكنة؟",
                        options: [
                            "ميم خالية من الحركة",
                            "ميم مفتوحة دائمًا",
                            "ميم مكسورة دائمًا"
                        ],
                        a: "ميم خالية من الحركة"
                    },

                    {
                        q: "كم عدد أحكام الميم الساكنة؟",
                        options: [
                            "حكمان",
                            "ثلاثة أحكام",
                            "أربعة أحكام"
                        ],
                        a: "ثلاثة أحكام"
                    },

                    {
                        q: "على ماذا يعتمد تحديد حكم الميم الساكنة؟",
                        options: [
                            "الحرف الذي قبلها",
                            "الحرف الذي بعدها",
                            "عدد حروف الكلمة"
                        ],
                        a: "الحرف الذي بعدها"
                    }

                ]
            },


            // ==========================================
            // الدرس الثاني: الإخفاء الشفوي
            // ==========================================

            {
                title: "2. الإخفاء الشفوي",

                lesson:
                    "📘 تعريف الإخفاء الشفوي:\n\n" +
                    "يكون الإخفاء الشفوي إذا جاءت الباء بعد الميم الساكنة.\n\n" +
                    "🔤 حرف الإخفاء الشفوي:\n" +
                    "حرف واحد فقط، وهو الباء (ب).\n\n" +
                    "🎯 كيفية النطق:\n" +
                    "تُنطق الميم الساكنة بصفة بين الإظهار والإدغام، مع بقاء الغنة بمقدار حركتين، من غير تشديد الميم تشديدًا ناتجًا عن الإدغام.\n\n" +
                    "💡 سبب التسمية:\n" +
                    "سُمِّي شفويًّا لأن الميم والباء يخرجان من الشفتين.\n\n" +
                    "📖 أمثلة:\n" +
                    "1. تَرْمِيهِمْ بِحِجَارَةٍ.\n" +
                    "2. وَمَنْ يَعْتَصِمْ بِاللَّهِ.\n" +
                    "3. فَاحْكُمْ بَيْنَهُمْ بِمَا أَنْزَلَ اللَّهُ.\n\n" +
                    "📌 قاعدة الحفظ:\n" +
                    "ميم ساكنة + باء = إخفاء شفوي مع غنة مقدارها حركتان.",

                questions: [

                    {
                        q: "متى يكون الإخفاء الشفوي؟",
                        options: [
                            "عند الباء بعد الميم الساكنة",
                            "عند الميم بعد الميم الساكنة",
                            "عند اللام بعد الميم الساكنة"
                        ],
                        a: "عند الباء بعد الميم الساكنة"
                    },

                    {
                        q: "كم عدد حروف الإخفاء الشفوي؟",
                        options: [
                            "حرف واحد",
                            "حرفان",
                            "ستة أحرف"
                        ],
                        a: "حرف واحد"
                    },

                    {
                        q: "كم مقدار الغنة في الإخفاء الشفوي؟",
                        options: [
                            "حركة واحدة",
                            "حركتان",
                            "أربع حركات"
                        ],
                        a: "حركتان"
                    },

                    {
                        q: "ما الحكم في قوله تعالى: (تَرْمِيهِمْ بِحِجَارَةٍ)؟",
                        options: [
                            "الإظهار الشفوي",
                            "الإخفاء الشفوي",
                            "الإدغام الشفوي"
                        ],
                        a: "الإخفاء الشفوي"
                    }

                ]
            },


            // ==========================================
            // الدرس الثالث: الإدغام الشفوي
            // ==========================================

            {
                title: "3. الإدغام الشفوي",

                lesson:
                    "📘 تعريف الإدغام الشفوي:\n\n" +
                    "يكون الإدغام الشفوي إذا جاءت ميم متحركة بعد الميم الساكنة.\n\n" +
                    "🔤 حرف الإدغام الشفوي:\n" +
                    "حرف واحد فقط، وهو الميم (م).\n\n" +
                    "🎯 كيفية النطق:\n" +
                    "تُدغم الميم الساكنة في الميم التي بعدها، فتصيران ميمًا واحدة مشددة مع غنة مقدارها حركتان.\n\n" +
                    "💡 سبب التسمية:\n" +
                    "يسمى إدغامًا شفويًّا لأن الحرف المدغم هو الميم، ومخرج الميم من الشفتين.\n\n" +
                    "ويسمى أيضًا إدغام المتماثلين الصغير؛ لأن الحرفين متماثلان، والأول منهما ساكن والثاني متحرك.\n\n" +
                    "📖 أمثلة:\n" +
                    "1. لَهُمْ مَا يَشَاءُونَ.\n" +
                    "2. كَمْ مِنْ فِئَةٍ.\n" +
                    "3. لَكُمْ مَا كَسَبْتُمْ.\n\n" +
                    "📌 قاعدة الحفظ:\n" +
                    "ميم ساكنة + ميم متحركة = ميم مشددة مع غنة مقدارها حركتان.",

                questions: [

                    {
                        q: "متى يكون الإدغام الشفوي؟",
                        options: [
                            "إذا جاءت الباء بعد الميم الساكنة",
                            "إذا جاءت الميم المتحركة بعد الميم الساكنة",
                            "إذا جاءت الفاء بعد الميم الساكنة"
                        ],
                        a: "إذا جاءت الميم المتحركة بعد الميم الساكنة"
                    },

                    {
                        q: "ما الحرف الذي يأتي بعد الميم الساكنة في الإدغام الشفوي؟",
                        options: [
                            "الباء",
                            "الميم",
                            "الفاء"
                        ],
                        a: "الميم"
                    },

                    {
                        q: "ماذا يحدث للميمين عند الإدغام الشفوي؟",
                        options: [
                            "تصيران ميمًا مشددة",
                            "تُقلب الميم الأولى باءً",
                            "تُحذف الميم الأولى من النطق"
                        ],
                        a: "تصيران ميمًا مشددة"
                    },

                    {
                        q: "كم مقدار الغنة في الإدغام الشفوي؟",
                        options: [
                            "حركتان",
                            "حركة واحدة",
                            "لا توجد غنة"
                        ],
                        a: "حركتان"
                    },

                    {
                        q: "ما الحكم في قوله تعالى: (لَهُمْ مَا يَشَاءُونَ)؟",
                        options: [
                            "الإخفاء الشفوي",
                            "الإظهار الشفوي",
                            "الإدغام الشفوي"
                        ],
                        a: "الإدغام الشفوي"
                    }

                ]
            },


            // ==========================================
            // الدرس الرابع: الإظهار الشفوي
            // ==========================================

            {
                title: "4. الإظهار الشفوي",

                lesson:
                    "📘 تعريف الإظهار الشفوي:\n\n" +
                    "يكون الإظهار الشفوي إذا جاء بعد الميم الساكنة أي حرف من حروف الهجاء، ما عدا الباء والميم.\n\n" +
                    "🔤 عدد حروفه:\n" +
                    "ستة وعشرون حرفًا، وهي بقية حروف الهجاء بعد استثناء الباء والميم.\n\n" +
                    "🎯 كيفية النطق:\n" +
                    "تُنطق الميم الساكنة واضحة من مخرجها، من غير إدغام أو إخفاء.\n\n" +
                    "⚠️ تنبيه مهم:\n" +
                    "يجب الانتباه عند الواو والفاء، والحرص على إظهار الميم بوضوح وعدم إخفائها.\n\n" +
                    "📖 أمثلة:\n" +
                    "1. أَنْعَمْتَ.\n" +
                    "2. لَمْ يَلِدْ.\n" +
                    "3. هُمْ فِيهَا خَالِدُونَ.\n" +
                    "4. عَلَيْهِمْ وَلَا الضَّالِّينَ.\n\n" +
                    "💡 قاعدة الحفظ:\n" +
                    "ميم ساكنة + أي حرف غير الباء والميم = إظهار شفوي.",

                questions: [

                    {
                        q: "متى يكون الإظهار الشفوي؟",
                        options: [
                            "عند الباء والميم فقط",
                            "عند جميع الحروف دون استثناء",
                            "عند جميع الحروف ما عدا الباء والميم"
                        ],
                        a: "عند جميع الحروف ما عدا الباء والميم"
                    },

                    {
                        q: "كم عدد حروف الإظهار الشفوي؟",
                        options: [
                            "حرف واحد",
                            "ستة وعشرون حرفًا",
                            "ثمانية وعشرون حرفًا"
                        ],
                        a: "ستة وعشرون حرفًا"
                    },

                    {
                        q: "عند أي حرفين يجب الانتباه أكثر إلى إظهار الميم الساكنة؟",
                        options: [
                            "الواو والفاء",
                            "الباء والميم",
                            "اللام والراء"
                        ],
                        a: "الواو والفاء"
                    },

                    {
                        q: "ما الحكم في قوله تعالى: (هُمْ فِيهَا خَالِدُونَ)؟",
                        options: [
                            "الإدغام الشفوي",
                            "الإخفاء الشفوي",
                            "الإظهار الشفوي"
                        ],
                        a: "الإظهار الشفوي"
                    },

                    {
                        q: "ما الحكم في قوله تعالى: (عَلَيْهِمْ وَلَا الضَّالِّينَ)؟",
                        options: [
                            "الإظهار الشفوي",
                            "الإخفاء الشفوي",
                            "الإدغام الشفوي"
                        ],
                        a: "الإظهار الشفوي"
                    }

                ]
            },


            // ==========================================
            // الدرس الخامس: مراجعة وتطبيقات
            // ==========================================

            {
                title: "5. مراجعة أحكام الميم الساكنة",

                lesson:
                    "📘 مراجعة شاملة لأحكام الميم الساكنة:\n\n" +
                    "1️⃣ الإخفاء الشفوي:\n" +
                    "يكون عند حرف الباء، مع غنة مقدارها حركتان.\n\n" +
                    "مثال: تَرْمِيهِمْ بِحِجَارَةٍ.\n\n" +
                    "2️⃣ الإدغام الشفوي:\n" +
                    "يكون عند حرف الميم المتحرك، وتُدغم الميم الأولى في الثانية لتصيرا ميمًا مشددة مع غنة مقدارها حركتان.\n\n" +
                    "مثال: لَهُمْ مَا يَشَاءُونَ.\n\n" +
                    "3️⃣ الإظهار الشفوي:\n" +
                    "يكون عند جميع الحروف ما عدا الباء والميم، مع ضرورة الانتباه عند الواو والفاء.\n\n" +
                    "مثال: هُمْ فِيهَا خَالِدُونَ.\n\n" +
                    "🎯 طريقة التمييز:\n" +
                    "إذا جاءت الباء فالحكم إخفاء شفوي.\n" +
                    "إذا جاءت الميم فالحكم إدغام شفوي.\n" +
                    "إذا جاء غير الباء والميم فالحكم إظهار شفوي.\n\n" +
                    "💡 تذكري دائمًا: الحكم يتحدد بالحرف الذي يلي الميم الساكنة.",

                questions: [

                    {
                        q: "ما الحكم عند وقوع الباء بعد الميم الساكنة؟",
                        options: [
                            "الإظهار الشفوي",
                            "الإخفاء الشفوي",
                            "الإدغام الشفوي"
                        ],
                        a: "الإخفاء الشفوي"
                    },

                    {
                        q: "ما الحكم عند وقوع الميم المتحركة بعد الميم الساكنة؟",
                        options: [
                            "الإدغام الشفوي",
                            "الإخفاء الشفوي",
                            "الإظهار الشفوي"
                        ],
                        a: "الإدغام الشفوي"
                    },

                    {
                        q: "ما الحكم عند وقوع حرف غير الباء والميم بعد الميم الساكنة؟",
                        options: [
                            "الإخفاء الشفوي",
                            "الإدغام الشفوي",
                            "الإظهار الشفوي"
                        ],
                        a: "الإظهار الشفوي"
                    },

                    {
                        q: "ما الحكم في (كَمْ مِنْ فِئَةٍ)؟",
                        options: [
                            "الإظهار الشفوي",
                            "الإدغام الشفوي",
                            "الإخفاء الشفوي"
                        ],
                        a: "الإدغام الشفوي"
                    },

                    {
                        q: "أي العبارات التالية صحيحة؟",
                        options: [
                            "للميم الساكنة حكمان فقط",
                            "الإخفاء الشفوي حرفه الباء",
                            "الإدغام الشفوي حرفه الفاء"
                        ],
                        a: "الإخفاء الشفوي حرفه الباء"
                    }

                ]
            }

        ]
    }

    // يمكن إضافة أبواب أخرى هنا عند الحاجة.
];


// ==========================================
// إعدادات السلالم والثعابين
// يمكنك تعديل أماكنها حسب رغبتك (من: إلى)
// ==========================================

const snakesAndLadders = {
    4:  { to: 14, msg: "🪜 صعود السلم!" },
    9:  { to: 31, msg: "🪜 قفزة رائعة!" },
    17: { to: 7,  msg: "🐍 انزلاق الثعبان!" },
    20: { to: 38, msg: "🪜 صعود السلم!" },
    45: { to: 22, msg: "🐍 انزلاق الثعبان!" },
    54: { to: 88, msg: "🪜 قفزة عملاقة!" },
    62: { to: 19, msg: "🐍 انزلاق خطير!" },
    99: { to: 8,  msg: "🐍 ثعبان النهاية!" }
};


// ==========================================
// متغيرات اللعبة الأساسية
// ==========================================

let cIdx = 0;
let bIdx = 0;
let qIdx = 0;
let needsLesson = true;
let currentPosition = 1;
let isMoving = false;


// ==========================================
// بدء اللعبة عند تحميل الصفحة
// ==========================================

window.onload = () => {
    createBoard();
    populateIndex();
    positionPlayerAtStart();
};


// ==========================================
// إنشاء رقعة اللعبة
// ==========================================

function createBoard() {

    const board = document.getElementById("board");

    board.innerHTML = "";

    for (let row = 9; row >= 0; row--) {

        for (let col = 0; col < 10; col++) {

            let num = (row % 2 === 0)
                ? (row * 10 + 10 - col)
                : (row * 10 + col + 1);

            const cell = document.createElement("div");

            cell.className = "cell";
            cell.id = `cell-${num}`;
            cell.innerText = num;

            // إضافة أيقونات السلالم والثعابين
            if (snakesAndLadders[num]) {

                cell.innerText +=
                    snakesAndLadders[num].to > num
                        ? " 🪜"
                        : " 🐍";
            }

            board.appendChild(cell);
        }
    }
}


// ==========================================
// تحريك اللاعب إلى مربع معين
// ==========================================

function movePlayerTo(position, isJumping = false) {

    const player = document.getElementById("player");
    const targetCell = document.getElementById(`cell-${position}`);
    const board = document.getElementById("board");

    if (player && targetCell && board) {

        const cellRect = targetCell.getBoundingClientRect();
        const boardRect = board.getBoundingClientRect();

        // حساب الموضع النسبي داخل الرقعة
        const top =
            cellRect.top -
            boardRect.top +
            (cellRect.height - player.offsetHeight) / 2;

        const left =
            cellRect.left -
            boardRect.left +
            (cellRect.width - player.offsetWidth) / 2;

        player.style.top = `${top}px`;
        player.style.left = `${left}px`;

        if (isJumping) {

            player.classList.add("jumping");

            setTimeout(() => {
                player.classList.remove("jumping");
            }, 150);
        }
    }
}


// ==========================================
// وضع اللاعب في نقطة البداية
// ==========================================

function positionPlayerAtStart() {

    setTimeout(() => {
        movePlayerTo(1);
    }, 100);
}


// ==========================================
// تحديث مكان اللاعب عند تغيير حجم الشاشة
// ==========================================

window.onresize = () => {
    movePlayerTo(currentPosition);
};


// ==========================================
// إنشاء قائمة الدروس
// ==========================================

function populateIndex() {

    const select = document.getElementById("lesson-index");

    select.innerHTML = "";

    syllabus.forEach((chap, cIndex) => {

        let optGroup = document.createElement("optgroup");

        optGroup.label = chap.chapter;

        chap.branches.forEach((branch, bIndex) => {

            let opt = document.createElement("option");

            opt.value = `${cIndex}-${bIndex}`;
            opt.innerText = branch.title;

            optGroup.appendChild(opt);
        });

        select.appendChild(optGroup);
    });
}


// ==========================================
// الانتقال إلى درس محدد
// ==========================================

function jumpToLesson() {

    const val = document.getElementById("lesson-index").value;

    const [c, b] = val.split("-");

    cIdx = parseInt(c, 10);
    bIdx = parseInt(b, 10);

    qIdx = 0;
    needsLesson = true;

    showFeedback("تم التبديل إلى الدرس المطلوب 🔄");
}


// ==========================================
// عرض الدرس أو السؤال
// ==========================================

function drawQuestion() {

    if (isMoving) return;

    if (cIdx >= syllabus.length) {

        alert("🎉 لقد أتممت جميع أسئلة أحكام الميم الساكنة!");

        return;
    }

    document.getElementById("lesson-index").value =
        `${cIdx}-${bIdx}`;

    if (needsLesson) {

        showLessonUI(false);

    } else {

        showQuestion();
    }
}


// ==========================================
// عرض الشرح
// ==========================================

function showLessonUI(isRetry) {

    const branchData = syllabus[cIdx].branches[bIdx];

    document.getElementById("lesson-title").innerText =
        branchData.title;

    let textToShow = branchData.lesson;

    if (isRetry) {

        document.getElementById("lesson-title").innerText =
            "❌ إجابة خاطئة!";

        textToShow =
            "راجع الشرح جيدًا قبل المحاولة:\n\n" +
            textToShow;
    }

    document.getElementById("lesson-text").innerText =
        textToShow;

    document.getElementById("lesson-section")
        .classList.remove("hidden");

    document.getElementById("question-section")
        .classList.add("hidden");

    document.getElementById("quiz-modal")
        .classList.remove("hidden");
}


// ==========================================
// عرض السؤال والاختيارات
// ==========================================

function showQuestion() {

    const chapterData = syllabus[cIdx];
    const branchData = chapterData.branches[bIdx];
    const questionData = branchData.questions[qIdx];

    document.getElementById("chapter-branch-label").innerText =
        `${chapterData.chapter} - ${branchData.title}`;

    document.getElementById("question-counter").innerText =
        `السؤال ${qIdx + 1} من ${branchData.questions.length}`;

    document.getElementById("question-text").innerText =
        questionData.q;

    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    questionData.options.forEach(opt => {

        const btn = document.createElement("button");

        btn.className = "opt-btn";
        btn.innerText = opt;

        btn.onclick = () => {
            checkAnswer(opt, questionData.a);
        };

        optionsDiv.appendChild(btn);
    });

    document.getElementById("lesson-section")
        .classList.add("hidden");

    document.getElementById("question-section")
        .classList.remove("hidden");

    document.getElementById("quiz-modal")
        .classList.remove("hidden");
}


// ==========================================
// التحقق من الإجابة
// ==========================================

function checkAnswer(selected, correct) {

    if (selected === correct) {

        document.getElementById("quiz-modal")
            .classList.add("hidden");

        showFeedback("✅ إجابة صحيحة!");

        document.getElementById("ask-btn").disabled = true;
        document.getElementById("dice-btn").disabled = false;

        qIdx++;

        needsLesson = false;

        // الانتقال إلى الدرس التالي عند انتهاء الأسئلة
        if (qIdx >= syllabus[cIdx].branches[bIdx].questions.length) {

            qIdx = 0;
            bIdx++;

            needsLesson = true;

            // الانتقال إلى الباب التالي عند انتهاء دروس الباب
            if (bIdx >= syllabus[cIdx].branches.length) {

                bIdx = 0;
                cIdx++;
            }
        }

    } else {

        needsLesson = true;

        showLessonUI(true);
    }
}


// ==========================================
// رسائل التشجيع والتنبيه
// ==========================================

function showFeedback(text) {

    const feedback = document.getElementById("feedback-message");

    feedback.innerText = text;

    feedback.classList.remove("hidden");

    feedback.style.animation = "none";

    feedback.offsetHeight;

    feedback.style.animation =
        "popIn 1.5s ease-out forwards";
}


// ==========================================
// رمي النرد وتحريك اللاعب
// ==========================================

function rollDice() {

    const diceDisplay = document.getElementById("dice-display");
    const diceBtn = document.getElementById("dice-btn");

    diceBtn.disabled = true;

    isMoving = true;

    diceDisplay.classList.add("rolling");

    setTimeout(() => {

        diceDisplay.classList.remove("rolling");

        const diceValue = Math.floor(Math.random() * 6) + 1;

        const diceIcons = [
            "⚀",
            "⚁",
            "⚂",
            "⚃",
            "⚄",
            "⚅"
        ];

        diceDisplay.innerText = diceIcons[diceValue - 1];

        let targetPosition = currentPosition + diceValue;

        if (targetPosition > 100) {
            targetPosition = 100;
        }

        // تحريك اللاعب مربعًا بعد مربع
        movePlayerStepByStep(
            currentPosition,
            targetPosition,
            () => {

                currentPosition = targetPosition;

                // التحقق من وجود سلم أو ثعبان
                setTimeout(() => {

                    if (snakesAndLadders[currentPosition]) {

                        const jumpData =
                            snakesAndLadders[currentPosition];

                        showFeedback(jumpData.msg);

                        movePlayerStepByStep(
                            currentPosition,
                            jumpData.to,
                            () => {

                                currentPosition = jumpData.to;

                                finishMove();
                            }
                        );

                    } else {

                        finishMove();
                    }

                }, 400);
            }
        );

    }, 1000);
}


// ==========================================
// إنهاء الحركة
// ==========================================

function finishMove() {

    isMoving = false;

    if (currentPosition === 100) {

        showFeedback("🎉 مبروك! وصلت إلى نهاية اللعبة!");

    } else {

        document.getElementById("ask-btn").disabled = false;
    }
}


// ==========================================
// التحريك التدريجي بين المربعات
// ==========================================

function movePlayerStepByStep(start, end, onComplete) {

    let current = start;

    let step = (end > start) ? 1 : -1;

    let timer = setInterval(() => {

        if (current !== end) {

            current += step;

            movePlayerTo(current, true);

        } else {

            clearInterval(timer);

            if (onComplete) {
                onComplete();
            }
        }

    }, 300);
}
