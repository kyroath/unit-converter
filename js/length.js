let idResults = {};

let form = document.getElementsByTagName("form");

for (let i = 0; i < form.length; i++) {
    form[i].onsubmit = function() {
        return false;
    }
}

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

document.getElementById('cm').addEventListener('input', function(e) {

    if (e.target.value == '' || isNaN(e.target.value)) {
        emptyEverything();
    } else {
        
        let cm = e.target.value;

        // push cm to values array
        idResults['cm'] = cm;

        // meter conversion
        idResults['meter'] = (cm / 100).toFixed(2);
        // inch conversion
        idResults['inch'] = (cm * 0.39).toFixed(2);
        // feet conversion
        idResults['feet'] = (cm / 30.48).toFixed(2);

    }
    
    updateValues();
    
});

document.getElementById('meter').addEventListener('input', function(e) {

    if (e.target.value == '') {
        emptyEverything();
    } else {

        let meter = e.target.value;

        idResults['meter'] = meter;

        // cm conversion
        idResults['cm'] = (meter * 100).toFixed(2);
        // inch conversion
        idResults['inch'] = (meter * 39).toFixed(2);
        // feet conversion
        idResults['feet'] = (meter / 0.3048).toFixed(2);

    }
    
    updateValues();
            
});

document.getElementById('inch').addEventListener('input', function(e) {

    if (e.target.value == '') {
        emptyEverything();
    } else {
        
        let inch = e.target.value;

        idResults['inch'] = inch;
       
        // cm conversion
        idResults['cm'] = (inch / 0.39).toFixed(2);
        // meter conversion
        idResults['meter'] = (inch / 39).toFixed(2);
        // feet conversion
        idResults['feet'] = (inch / 12).toFixed(2);

    }
    
    updateValues();
        
});

document.getElementById('feet').addEventListener('input', function(e) {

    if (e.target.value == '') {
        emptyEverything();
    } else {
        
        let feet = e.target.value;

        idResults['feet'] = feet;

        // cm conversion
        idResults['cm'] = (feet * 30.48).toFixed(2);
        // meter conversion
        idResults['meter'] = (feet * 0.3048).toFixed(2);
        // inch conversion
        idResults['inch'] = (feet * 12).toFixed(2);

    }
    
    updateValues();
        
});