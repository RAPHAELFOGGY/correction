let active = false;


function toggle() {
    let toggle = document.querySelector('.toggle')
    let text = document.querySelector('.text')
    active = !active
    if (active) {
        toggle.classList.add('active')
        text.innerHTML = 'NO'
    } else {
        toggle.classList.remove('active')
        text.innerHTML = '<span style="color:#06f76a; font-weight:400">Yes </span>'
    }
}