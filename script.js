const arr = [
    {
        "word": "PREFACE",
        "translation": "Предисловие"
    },
    {
        "word": "This",
        "translation": "Этот"
    },
    {
        "word": "document",
        "translation": "документ"
    },
    {
        "word": "specifies",
        "translation": "уточняет"
    },
    {
        "word": "Standard",
        "translation": "Стандарт"
    },
    {
        "word": "Internet",
        "translation": "Интернет"
    },
    {
        "word": "Protocol.",
        "translation": "Протокол."
    },
    {
        "word": "is",
        "translation": "является"
    },
    {
        "word": "based",
        "translation": "основан"
    },
    {
        "word": "on",
        "translation": "на"
    },
    {
        "word": "six",
        "translation": "шести"
    },
    {
        "word": "earlier",
        "translation": "ранее"
    },
    {
        "word": "editions",
        "translation": "изданиях"
    },
    {
        "word": "of",
        "translation": "из"
    },
    {
        "word": "Specification,",
        "translation": "Спецификация,"
    },
    {
        "word": "and",
        "translation": "и"
    },
    {
        "word": "present",
        "translation": "настоящий"
    },
    {
        "word": "text",
        "translation": "текст"
    },
    {
        "word": "draws",
        "translation": "черпает"
    },
    {
        "word": "heavily",
        "translation": "значительно"
    },
    {
        "word": "from",
        "translation": "из"
    },
    {
        "word": "them.",
        "translation": "их."
    },
    {
        "word": "There",
        "translation": "Существует"
    },
    {
        "word": "have",
        "translation": "есть"
    },
    {
        "word": "been",
        "translation": "было"
    },
    {
        "word": "many",
        "translation": "много"
    },
    {
        "word": "contributors",
        "translation": "вкладчиков"
    },
    {
        "word": "to",
        "translation": "в"
    },
    {
        "word": "this",
        "translation": "эта"
    },
    {
        "word": "work",
        "translation": "работа"
    },
    {
        "word": "both",
        "translation": "как"
    },
    {
        "word": "in",
        "translation": "в"
    },
    {
        "word": "terms",
        "translation": "терминах"
    },
    {
        "word": "of",
        "translation": "из"
    },
    {
        "word": "concepts",
        "translation": "концепций"
    },
    {
        "word": "and",
        "translation": "и"
    },
    {
        "word": "in",
        "translation": "в"
    },
    {
        "word": "terms",
        "translation": "терминах"
    },
    {
        "word": "of",
        "translation": "из"
    },
    {
        "word": "text.",
        "translation": "текста."
    },
    {
        "word": "This",
        "translation": "Это"
    },
    {
        "word": "edition",
        "translation": "издание"
    },
    {
        "word": "revises",
        "translation": "пересматривает"
    },
    {
        "word": "aspects",
        "translation": "аспекты"
    },
    {
        "word": "of",
        "translation": "из"
    },
    {
        "word": "addressing,",
        "translation": "адресации,"
    },
    {
        "word": "error",
        "translation": "ошибка"
    },
    {
        "word": "handling,",
        "translation": "обработка,"
    },
    {
        "word": "option",
        "translation": "опция"
    },
    {
        "word": "codes,",
        "translation": "коды,"
    },
    {
        "word": "and",
        "translation": "и"
    },
    {
        "word": "security,",
        "translation": "безопасность,"
    },
    {
        "word": "precedence,",
        "translation": "приоритет,"
    },
    {
        "word": "compartments,",
        "translation": "отделения,"
    },
    {
        "word": "and",
        "translation": "и"
    },
    {
        "word": "handling",
        "translation": "обработка"
    },
    {
        "word": "restriction",
        "translation": "ограничения"
    },
    {
        "word": "features",
        "translation": "особенности"
    },
    {
        "word": "of",
        "translation": "из"
    },
    {
        "word": "internet",
        "translation": "интернет"
    },
    {
        "word": "protocol.",
        "translation": "протокол."
    },
    {
        "word": "Editor",
        "translation": "Редактор"
    }
];

const spans = document.querySelectorAll('span');
let currentIndex = 0;

function highlightSpan(index) {
    spans.forEach((span, i) => {
        span.classList.remove('highlight');
        if (i === index) {
            let res = arr.find(item => {
                if(item.word == span.innerText){
                    return item;
                }
            });
            if(res !== undefined){
                document.getElementsByClassName("translation")[0].innerHTML = "[" + res.translation + "]";
            } else {
                document.getElementsByClassName("translation")[0].innerHTML = "[----]";
            }
            span.classList.add('highlight');
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % spans.length; // Перейти к следующему
        highlightSpan(currentIndex);
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + spans.length) % spans.length; // Перейти к предыдущему
        highlightSpan(currentIndex);
    }
});

// Подсветить первый элемент при загрузке
highlightSpan(currentIndex);