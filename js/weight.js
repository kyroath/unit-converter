let idResults = {};

function emptyEverything() {
    let keys = Object.keys(idResults);
    for (let i = 0; i < keys.length; i++) {
        idResults[keys[i]] = '';
    }
}

function updateValues() {
    let keys = Object.keys(idResults);
    console.log(idResults);
    for (let i = 0; i < keys.length; i++) {
        document.getElementById(keys[i]).value = idResults[keys[i]];
    }
    
    $(document).ready(function() {
        Materialize.updateTextFields();
    });
}

document.getElementById('gr').addEventListener('input', function(e) {

    let gr = e.target.value;

    if (gr == '' || isNaN(e.target.value)) {
        emptyEverything();
    } else {

        idResults['gr'] = gr;

        // kg conversion
        idResults['kg'] = (gr / 1000).toFixed(2);
        // ton conversion
        idResults['ton'] = (gr / 1000000).toFixed(2);
        // ounce conversion
        idResults['oz'] = (gr / 28.34952313).toFixed(2);
        // pound conversion
        idResults['lbs'] = (gr / 453.59237).toFixed(2);

    }

    updateValues();

});

document.getElementById('kg').addEventListener('input', function(e) {

    let kg = e.target.value;

    if (kg == '' || isNaN(e.target.value)) {
        emptyEverything();
    } else {

        idResults['kg'] = kg;

        // gram conversion
        idResults['gr'] = (kg * 1000).toFixed(2);
        // ton conversion
        idResults['ton'] = (kg / 1000).toFixed(2);
        // ounce conversion
        idResults['oz'] = (kg * 35.27396195).toFixed(2);
        // pound conversion
        idResults['lbs'] = (kg * 2.20462262185).toFixed(2);

    }
    
    updateValues();

});

document.getElementById('ton').addEventListener('input', function(e) {

    let ton = e.target.value;

    if (ton == '' || isNaN(e.target.value)) {
        emptyEverything();
    } else {

        idResults['ton'] = ton;

        // gram conversion
        idResults['gr'] = (ton * 1000000).toFixed(2);
        // kg conversion
        idResults['kg'] = (ton * 1000).toFixed(2);
        // ounce conversion
        idResults['oz'] = (ton * 3527.396195).toFixed(2);
        // pound conversion
        idResults['lbs'] = (ton * 2204.62262185).toFixed(2);

    }

    updateValues();
    
});

document.getElementById('oz').addEventListener('input', function(e) {

    let oz = e.target.value;

    if (oz == '' || isNaN(e.target.value)) {
        emptyEverything();
    } else {

        idResults['oz'] = oz;

        // gram conversion
        idResults['gr'] = (oz * 28.34952).toFixed(2);
        // kg conversion
        idResults['kg'] = (oz * 2834.952).toFixed(2);
        // ton conversion
        idResults['ton'] = (oz * 283495.2).toFixed(2);
        // pound conversion
        idResults['lbs'] = (oz / 16).toFixed(2);

    }

    updateValues();
    
});

document.getElementById('lbs').addEventListener('input', function(e) {

    let lbs = e.target.value;

    if (lbs == '' || isNaN(e.target.value)) {
        emptyEverything();
    } else {

        idResults['lbs'] = lbs;

        // gram conversion
        idResults['gr'] = (lbs * 453.59237).toFixed(2);
        // kg conversion
        idResults['kg'] = (lbs * 0.453592).toFixed(2);
        // ton conversion
        idResults['ton'] = (lbs * 0.0004536).toFixed(2);
        // ounce conversion
        idResults['oz'] = (lbs * 16).toFixed(2);

    }

    updateValues();
    
});