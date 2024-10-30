// ABOUT PAGE FUNCTIONS
function reveal(a) {
    reset();
    let title = (a.slice(7)).toLowerCase();
    document.getElementById('sectionBg').style.display = 'none';
    document.getElementById('sectionEd').style.display = 'none';
    document.getElementById('sectionSk').style.display = 'none';
    document.getElementById('sectionCv').style.display = 'none';
    document.getElementById(a).style.display = 'flex';
    highlight(title);
}

function reset() {
    document.getElementById('bg').style.color = 'white';
    document.getElementById('bg').style.textDecoration = 'none';

    document.getElementById('ed').style.color = 'white';
    document.getElementById('ed').style.textDecoration = 'none';

    document.getElementById('sk').style.color = 'white';
    document.getElementById('sk').style.textDecoration = 'none';

    document.getElementById('cv').style.color = 'white';
    document.getElementById('cv').style.textDecoration = 'none';
}

function highlight(title) {
    document.getElementById(title).style.color = 'deeppink';
    document.getElementById(title).style.textDecoration = 'underline';
}


// PROJECTS PAGE FUNCTIONS
function showPanel(active) {
    document.getElementById('projects').style.display = 'none';
    document.getElementById('back').style.display = 'block';
    switch(active) {
        case 'leftPanel':
            document.getElementById('xL').style.display = 'flex';
            break;
        case 'midPanel':
            document.getElementById('xM').style.display = 'flex';
            break;
        case 'rightPanel':
            document.getElementById('xR').style.display = 'flex';
            break;
    };
}

function panelReset() {
    document.getElementById('xL').style.display = 'none';
    document.getElementById('xM').style.display = 'none';
    document.getElementById('xR').style.display = 'none';
    document.getElementById('back').style.display = 'none';
    document.getElementById('projects').style.display = 'flex';

}
