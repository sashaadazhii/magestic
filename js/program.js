let ulProgram = document.getElementById('list-program')

program.forEach((item) => {
  let li = document.createElement('li')
  const list = item.list

  function a() {
    for (let i = 0; i < list.length; i++) {
      document.createElement('li').innerHTML = `${list[i]}`
      console.log(list[i]) // ok
    }
    return list
  }

  li.innerHTML = `
    <div class="top">
      <div> ${item.title}</div> <span class="open">+</span>
    </div>

    <div class="bottom">
      <ul>${a()}</ul>
    </div>
  `

  ulProgram.appendChild(li)
})
