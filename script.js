// item 1

const item1 = document.getElementById('item1');

function close(event) {
    if (event.type === 'click') {
        const c1 = document.getElementById('c1');
        c1.classList.toggle('show');
        item1.classList.toggle('change');
    }
}

item1.addEventListener('click', close);

// item 2

const item2 = document.getElementById('item2');

function close2(event) {
    if (event.type === 'click') {
        const c2 = document.getElementById('c2');
        c2.classList.toggle('show');
        item2.classList.toggle('change');
    }
}

item2.addEventListener('click', close2);

// item 3

const item3 = document.getElementById('item3');

function close3(event) {
    if (event.type === 'click') {
        const c3 = document.getElementById('c3');
        c3.classList.toggle('show');
        item3.classList.toggle('change');
    }
}

item3.addEventListener('click', close3);

// item 4

const item4 = document.getElementById('item4');

function close4(event) {
    if (event.type === 'click') {
        const c4 = document.getElementById('c4');
        c4.classList.toggle('show');
        item4.classList.toggle('change');
    }
}

item4.addEventListener('click', close4);

// item 5

const item5 = document.getElementById('item5');

function close5(event) {
    if (event.type === 'click') {
        const c5 = document.getElementById('c5');
        c5.classList.toggle('show');
        item5.classList.toggle('change');
    }
}

item5.addEventListener('click', close5);

// END