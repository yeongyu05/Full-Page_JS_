const elbtn = document.querySelector('.checkBox > ul');
const ele = document.getElementsByName('check');
const pageBox = document.querySelector('.pageBox');
const scrollZero = "scrollZero";
const scrollOne = "scrollOne";
const scrollTwo = "scrollTwo";
const scrollThree = "scrollThree";
const scrollFour = "scrollFour";

sync();

window.addEventListener('wheel', function (e) {
    if(pageBox.classList.contains(scrollZero)) {
        if(e.deltaY > 0) {
            pageBox.classList.replace(scrollZero, scrollOne);
            ele[1].checked = true;
        }
    } else if (pageBox.classList.contains(scrollOne)) {
        if(e.deltaY > 0) {
            pageBox.classList.replace(scrollOne, scrollTwo);
            ele[2].checked = true;
        } else {
            pageBox.classList.replace(scrollOne, scrollZero);
            ele[0].checked = true;
        }
    } else if (pageBox.classList.contains(scrollTwo)) {
        if(e.deltaY > 0) {
            pageBox.classList.replace(scrollTwo, scrollThree);
            ele[3].checked = true;
        } else {
            pageBox.classList.replace(scrollTwo, scrollOne);
            ele[1].checked = true;
        }
    } else if (pageBox.classList.contains(scrollThree)) {
        if(e.deltaY > 0) {
            pageBox.classList.replace(scrollThree, scrollFour);
            ele[4].checked = true;
        } else {
            pageBox.classList.replace(scrollThree, scrollTwo);
            ele[2].checked = true;
        }
    } else if (pageBox.classList.contains(scrollFour)) {
        if(e.deltaY < 0) {
            pageBox.classList.replace(scrollFour, scrollThree)
            ele[3].checked = true;
        }
    }
})

elbtn.addEventListener('click', function(e) {
    if (e.target == ele[0]) {
        pageBox.classList.remove(scrollOne, scrollTwo, scrollThree, scrollFour);
        pageBox.classList.add(scrollZero);
    }
    if (e.target == ele[1]) {
        pageBox.classList.remove(scrollZero, scrollTwo, scrollThree, scrollFour);
        pageBox.classList.add(scrollOne);
    }
    if (e.target == ele[2]) {
        pageBox.classList.remove(scrollZero, scrollOne, scrollThree, scrollFour);
        pageBox.classList.add(scrollTwo);
    }
    if (e.target == ele[3]) {
        pageBox.classList.remove(scrollZero, scrollOne, scrollTwo, scrollFour);
        pageBox.classList.add(scrollThree);
    }
    if (e.target == ele[4]) {
        pageBox.classList.remove(scrollZero, scrollOne, scrollTwo, scrollThree);
        pageBox.classList.add(scrollFour);
    }
})