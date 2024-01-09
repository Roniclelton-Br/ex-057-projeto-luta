let log = new Log(document.querySelector('.log'));
let char = new Knigth('Guerreiro');
let monster = new LitleMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();