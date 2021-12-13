/* -----------------------------------------------
    Fichier JS
----------------------------------------------- */

// Vérification de la bonne connexion
console.log("Connexion JS - Ok")

let apologies = [
    // Random
    [
        '',
        '',
        '',
        '',
    ],
    // Transports
    [
        '',
        '',
        '',
        '',
    ],
    // Animals
    [
        '',
        '',
        '',
        '',
    ],
    // Weather
    [
        '',
        '',
        '',
        '',
    ],
    // WTF
    [
        '',
        '',
        '',
        '',
    ]
];


$(function () {

    // jQuery methods go here...



    $('#teacherName').on('change', function () {
        let teacherNameCoeff = $("#teacherName").val();
        let teacherNameText = $("#teacherName option:selected" ).text();
        console.log(teacherNameCoeff + ' ');
        console.log(teacherNameText);
    });
});


