/* -----------------------------------------------
    Fichier JS
----------------------------------------------- */

// Vérification de la bonne connexion
console.log("Connexion JS - Ok")

let apologies = [
    // Random
    [],
    // Transports
    [
        'Transports 1',
        'Transports 2',
        'Transports 3',
        'Transports 4',
    ],
    // Animals
    [
        'Animals 1',
        'Animals 2',
        'Animals 3',
        'Animals 4',
    ],
    // Weather
    [
        'Weather 1',
        'Weather 2',
        'Weather 3',
        'Weather 4',
    ],
    // WTF
    [
        'WTF 1',
        'WTF 2',
        'WTF 3',
    ],
    // Excuse Personnalisée
    [
        [
            'Fred 1',
            'Fred 2',
        ],
        [
            'Anousone 1',
            'Anousone 2',
        ],
        [
            'Sébastien 1',
            'Sébastien 2',
        ],
        [
            'Camille 1',
            'Camille 2',
        ],
    ]
];

let teachers = [
    0.9,
    0.3,
    0.7,
    0.5,
]

let categories = [
    0.2,
    0.6,
    0.8,
    0.5,
    0.1,
    0.1
]

let late = [
    0.25,
    0.5,
    0.75,
    1,
]

let latelabels = [
    '< 15 min',
    '15 à 45 min',
    '45 min à 1h30',
    '> 1h30',
]


$(function () {
    // Initialisation

    $('#late').val(0);
    $('#lateLabel').text(latelabels[0]);

    let teacherText;
    let teacherId;
    let categoriesText;
    let categoriesId;
    let lateId = 0;

    let indexArray;
    let indexElement = -1;
    let tmp = -1;

    let prob;
    let apology;

    // Detecting Changes on inputs

    $('#late').on('change', function () {
        lateId = $("#late").val();
        console.log(lateId);
        $('#lateLabel').text(latelabels[lateId]);
        submitActivation();
    });

    $('#teacher').on('change', function () {
        teacherText = $("#teacher option:selected").text();
        teacherId = $("#teacher").val();
        console.log(teacherText + ' - ' + teacherId);
        submitActivation();
    });

    $('#categories').on('change', function () {
        categoriesText = $("#categories option:selected").text();
        categoriesId = $("#categories").val();
        console.log(categoriesText + ' - ' + categoriesId);
        submitActivation();
    });

    // Submit application

    $("#generateApology").submit(function (event) {
        // Démarrage de l'affichage
        event.preventDefault();
        $('#result').removeClass("d-none");

        // Calcul de la probabilité
        prob = (teachers[teacherId] + categories[categoriesId] + late[lateId]) / 3 * 100;
        prob = Math.round(prob * 100) / 100 + ' %';
        $('#pourcentage').text(prob);

        // Algorithme pour trouver l'excuse
        if (categoriesId == 0) {
            indexArray = Math.floor(Math.random() * 4) + 1;
        }
        else {
            indexArray = categoriesId;
        }

        if (indexArray != 5) {
            while (indexElement == tmp) {
                tmp = Math.floor(Math.random() * apologies[indexArray].length) + 0;
            }
            indexElement = tmp;
            apology = apologies[indexArray][indexElement];
        }
        else {
            while (indexElement == tmp) {
                tmp = Math.floor(Math.random() * apologies[5][teacherId].length) + 0;
            }
            indexElement = tmp;
            apology = apologies[5][teacherId][indexElement];
        }

        $('#apology').text(apology);
    });
});


function submitActivation() {
    let teacherStatus = $("#teacher").val();
    let categoryStatus = $("#categories").val();
    // console.log(teacherStatus);
    // console.log(categoryStatus);

    if (teacherStatus != null && categoryStatus != null) {
        $('#submitBtn').removeAttr("disabled");
        // console.log('OK !');
    }
    // console.log('Submit Test');
}