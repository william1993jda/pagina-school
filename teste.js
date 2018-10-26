var nomes = [
    'Jorge',
    'Gustavo',
    'William',
    'Michael'
];

var teste = [];

nomes.forEach(function (item) {
    switch (item) {
        case 'Gustavo':
            item += ' Santos';
            break;
        case 'William':
            item += ' Aquino';
            break;
        case 'Jorge':
            item += ' Mendes';
            break;
        case 'Michael':
            item += ' Douglas';
            break;
    }

    console.log(item);
});


var teste = [];

nomes.forEach(function (item) {
    switch (item) {
        case 'Gustavo':
            teste.push(item + ' Santos');
            break;
        case 'William':
            teste.push(item + ' Aquino');
            break;
        case 'Jorge':
            teste.push(item + ' Mendes');
            break;
        case 'Michael':
            teste.push(item + ' Douglas)');
            break;
    }
});

console.log(teste);
