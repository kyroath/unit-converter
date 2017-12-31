let idResults = {};

let form = document.getElementsByTagName("form");

for (let i = 0; i < form.length; i++) {
    form[i].onsubmit = function() {
        return false;
    }
}

function updateToValue(value) {
    let keys = Object.keys(idResults);
    for (let i = 0; i < keys.length; i++) {
        idResults[keys[i]] = value;
    }
}

function updateValues() {
    let keys = Object.keys(idResults);
    for (let i = 0; i < keys.length; i++) {
        document.getElementById(keys[i]).value = idResults[keys[i]];
    }
    
    $(document).ready(function() {
        Materialize.updateTextFields();
    });
}

function isValid() {
    let klv = idResults['klv'];
    let rnk = idResults['rnk'];

    if (klv == '-' || rnk == '-') {
        return true;
    }

    if (klv < 0 || rnk < 0) {
        return false;
    }

    return true;
}

document.getElementById('cls').addEventListener('input', function(e) {

    let cls = e.target.value;

    if (cls != '-' && (cls == '' || isNaN(cls))) {
        updateToValue('');
    } else {

        /*
            Below is needed for string values to be a float
            Probably could use parseFloat() but it's 4AM so...
            Will copy this to all of them
        */
        idResults['cls'] = cls;

        cls *= 1.0;

        // fahrenheit conversion
        idResults['fhr'] = ((cls * 9/5) + 32).toFixed(2);
        // kelvin conversion
        idResults['klv'] = (cls * 1.0 + 273.15).toFixed(2);
        // rankine conversion
        idResults['rnk'] = ((cls + 273.15) * 9/5).toFixed(2);

        if (!isValid()) {
            updateToValue('Doesn\'t exist!');
        }
    }

    updateValues();

});

document.getElementById('fhr').addEventListener('input', function(e) {

    let fhr = e.target.value;

    if (fhr != '-' && (fhr == '' || isNaN(fhr))) {
        updateToValue('');
    } else {

        idResults['fhr'] = fhr;

        /*
            Below is needed for string values to be a float
            Probably could use parseFloat() but it's 4AM so...
            Will copy this to all of them
        */
        fhr *= 1.0;

        // celsius conversion
        idResults['cls'] = ((fhr - 32) * 5/9).toFixed(2);
        // kelvin conversion
        idResults['klv'] = ((fhr + 459.67) * 5/9).toFixed(2);
        // rankine conversion
        idResults['rnk'] = (fhr * 1 + 459.67).toFixed(2);

        if (!isValid()) {
            updateToValue('Doesn\'t exist!');
        }        
    }

    updateValues();

});

document.getElementById('klv').addEventListener('input', function(e) {

    let klv = e.target.value;

    if (klv != '-' && (klv == '' || isNaN(klv))) {
        updateToValue('');
    } else {

        idResults['klv'] = klv;

        /*
            Below is needed for string values to be a float
            Probably could use parseFloat() but it's 4AM so...
            Will copy this to all of them
        */
        klv *= 1.0;

        // celsius conversion
        idResults['cls'] = (klv - 273.15).toFixed(2);
        // fahrenheit conversion
        idResults['fhr'] = ((klv * 9/5) - 459.67).toFixed(2);
        // rankine conversion
        idResults['rnk'] = (klv * 9/5).toFixed(2);

        if (!isValid()) {
            updateToValue('Doesn\'t exist!');
        }

    }

    updateValues();

});

document.getElementById('rnk').addEventListener('input', function(e) {

    let rnk = e.target.value;

    if (rnk != '-' && (rnk == '' || isNaN(rnk))) {
        updateToValue('');
    } else {

        idResults['rnk'];

        /*
            Below is needed for string values to be a float
            Probably could use parseFloat() but it's 4AM so...
            Will copy this to all of them
        */
        rnk *= 1.0; 

        // celsius conversion
        idResults['cls'] = ((rnk - 491.67) * 5/9).toFixed(2);
        // fahrenheit conversion
        idResults['fhr'] = (rnk - 459.67).toFixed(2);
        // kelvin conversion
        idResults['klv'] = (rnk * 5/9).toFixed(2);

        if (!isValid()) {
            updateToValue('Doesn\'t exist!');
        }
    }

    updateValues();

});