let task1 = document.getElementById('step1'),
    task0 = document.getElementById('step0'),
    task2 = document.getElementById('step2'),
    task3 = document.getElementById('step3'),
    task4 = document.getElementById('step4'),
    task5 = document.getElementById('step5'),
    task6 = document.getElementById('step6');


task0.onclick = state0;
task1.onclick = state1;
task2.onclick = state2;
task3.onclick = state3;
task4.onclick = state4;
task5.onclick = state5;
task6.onclick = state6;

function state0() {
    let link = document.querySelector('.b-but_schedule_linkButton'),
        btn = document.querySelectorAll('.b-but_schedule_decorButton');
    btn[0].classList.toggle('b-but_schedule_hide');
    link.classList.toggle('b-but_schedule_hide');
}

function state1() {
    let item = document.querySelectorAll('.b-schedule__item_state1');
    let category = document.querySelectorAll('.b-schedule__category_state1');
    for (let i = 0; i < item.length; i++) {
        item[i].classList.toggle('b-schedule__item_state1_hide');
    }
    for (let i = 0; i < category.length; i++) {
        category[i].classList.toggle('b-schedule__category_state1_hide');
    }
}

function state2() {
    let level = document.querySelectorAll('.state2');
    for (let i = 0; i < level.length; i++) {
        level[i].classList.toggle('state2_show')
    }
}

function state3() {
    let sub = document.querySelector('.b-section__subtitle');
    sub.classList.toggle('b-section__subtitle_hide');
}

function state4() {
    let btn = document.querySelectorAll('.b-but_schedule_decorButton');
    btn[0].classList.toggle('b-but_schedule_hide');
}

function state5() {
    let link = document.querySelector('.b-but_schedule_linkButton'),
        btn = document.querySelectorAll('.b-but_schedule_decorButton');
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.toggle('b-but_schedule_hide');
    }
    link.classList.toggle('b-but_schedule_hide');
}

function state6() {
    state3();
    state4();
}

let click = document.querySelectorAll('.click');
for (let i = 0; i < click.length; i++) {
    click[i].onclick = function () {
        let arrow = click[i].children,
            content = click[i].nextElementSibling;
        for (let j = 0; j < arrow.length; j++) {
            arrow[j].classList.toggle('arrow_down');
        }
        function contShow() {
            content.classList.toggle('phone_show');
        }
        setTimeout(contShow, 300);

    }
}






