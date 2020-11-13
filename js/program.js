let ulProgram = document.getElementById('list-program')

program.forEach((item) => {
  let li = document.createElement('li')
  const list = item.list
  const homework = item.homework
  const bonus = item.bonus
  const practice = item.practice

  /*list */
  function listProgram() {
    let b
    for (let i = 0; i < list.length; i++) {
      if (i > 0) {
        b += list[i].innerHTML = `
        <li class="list__item"> <span class="list__counter"> 
        ${i + 1}.</span>${list[i]}</li>`
      } else
        b = list[i].innerHTML = `
        <li class="list__item"> <span class="list__counter"> 
        ${i + 1}.</span>${list[i]}</li>`
    }
    return b
  }

  /*program */
  function listHomework() {
    let b
    for (let i = 0; i < homework.tasks.length; i++) {
      if (i > 0) {
        b += homework.tasks[i].innerHTML = `
        <li class="list__item"> <span class="list__counter"> 
        ${i + 1}.</span>${homework.tasks[i]}</li>`
      } else
        b = homework.tasks[i].innerHTML = `
        <li class="list__item"> <span class="list__counter">
         ${i + 1}.</span>${homework.tasks[i]}</li>`
    }
    return b
  }

  let ad = document.createElement('div')
  ad.setAttribute('class', 'aditional')

  function aditional(param) {
    if (param.title != '') {
      ad.innerHTML = `
        <span class="editional__title">
          ${param.title}
        </span>

      <span class="editional__content">
        ${param.content}
      </span>
      `
    }
    return ad.innerHTML
  }

  li.innerHTML = `
    <div class="top">
      <div> ${item.title}</div> <span class="open">+</span>
    </div>
    <div class="bottom">
      <ul class="list">
        ${listProgram()}
      </ul>
        ${aditional(practice)}
      <div class="homework">
        <p class="homework__title">
          ${item.homework.title}
        </p>
        <ul class="list">
          ${listHomework()}
        </ul>
      </div>
      ${aditional(bonus)}
    </div>
  `
  ulProgram.appendChild(li)
})
