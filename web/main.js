// fetch a file via the file / path
function fetchFile(filename, callback) {
    fetch(filename, {method: 'GET'})
        .then(res => res.json())
        .then(json => callback(json))
        .catch(err => console.error(err));
}

// load a digitalJS circuit using a htmlElement and the filename  / path
function loadCircuit(htmlElement, filename) {
    fetchFile(filename, json => {
        //var json = JSON.parse(res);
        var cir = new digitaljs.Circuit(json);
        var can = cir.displayOn(htmlElement);
        cir.start();
    });
};

// create circuits for all circuits in HTML
var circuits = document.getElementsByClassName('circuit')
for (let elem of circuits) {
    var file = "./circuits/" + elem.getAttribute("circuit") + ".json";
    loadCircuit(elem, file);
}