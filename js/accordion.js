var acc = document.getElementsByClassName('top')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    var panel = this.nextElementSibling
    if (panel.style.height) {
      panel.style.height = null
      panel.style.padding = null
    } else {
      // panel.style.height = panel.scrollHeight + 68 + 'px'
      panel.style.height = 'auto'
      // panel.style.padding = 34 + 'px' + ' ' + 48 + 'px'
    }
  })
}
