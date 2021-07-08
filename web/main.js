/*
function loadJSON(filename, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', filename, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") callback(xobj.responseText);
    }
    xobj.send(null);
}
*/

function loadJSON(filename, callback) {
    fetch(filename, {method: 'GET'})
        .then(res => res.json())
        .then(json => callback(json))
        .catch(err => console.error(err));
}

// function loadCircuit(id, filename) {
//     loadJSON(filename, json => {
//         //var json = JSON.parse(res);
//         var cir = new digitaljs.Circuit(json);
//         var can = cir.displayOn($('#' + id));
//         cir.start();
//     });
// };

function loadCircuit(htmlElement, filename) {
    loadJSON(filename, json => {
        //var json = JSON.parse(res);
        var cir = new digitaljs.Circuit(json);
        var can = cir.displayOn(htmlElement);
        cir.start();
    });
};

// var circuits = [
//     //{"id":"c1", "path": "./circuits/clb.json"},
//     {"id":"c2", "path": "./circuits/1bitRegister.json"}
// ];

// circuits.forEach(value => {
//     loadCircuit(value.id, value.path);
// });

var circuits = document.getElementsByClassName('circuit')
for (let elem of circuits) {
    var file = "./circuits/" + elem.getAttribute("circuit") + ".json";
    loadCircuit(elem, file);
}