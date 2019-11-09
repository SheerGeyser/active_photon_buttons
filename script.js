const buttons = document.querySelectorAll('.buttons');


for (var i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    buttons[i].addEventListener("mousemove", move);
    buttons[i].addEventListener("mouseout", stopMove);
}



function move(event) {
    const btnItem = this.querySelector('.btn');
    const btnWidth = -event.offsetX / 2.2;
    // btnItem.innerText  = btnWidth.toFixed(0);

    btnItem.style.backgroundPosition = btnWidth + '%';
}

function stopMove(event) {
    const btnItem = this.querySelector('.btn');
    btnItem.style.backgroundPosition = "0%";
}
