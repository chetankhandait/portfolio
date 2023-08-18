let skiLl = document.getElementById("btn1")
let skillBtn = document.getElementById("skill-btn")
let educAtion = document.getElementById("btn2")
let educAtionBtn = document.getElementById("education-btn")
let experienCebtn = document.getElementById("experience-btn")
let experienCe = document.getElementById("btn3")
console.log(skiLl)
console.log(skillBtn)




skillBtn.innerHTML = `
<div class= " just-fortest">

<ul class = "list">

<li> Programing language:C++</li>
<li>Data structure algorithm </li>
<li>Web development </li>
</ul>
</div>
`

skiLl.addEventListener("mouseenter", function () {
    skillBtn.innerHTML = `
    <div class= " just-fortest">
    
    <ul class = "list">
    <li> Programing language:C++</li>
    <li>Data structur algorithm </li>
    <li>Web development </li>
    </ul>
    </div>
    `
    console.log("hi ")
})

educAtion.addEventListener("mouseenter", function () {
    skillBtn.innerHTML = `<div class= "just-fortest">

<ul class = "list">
<li>Jabalpur engineering college</li>
<li> Vivekanda vidhyapeeth </li>
</ul>
</div>
`
})

experienCe.addEventListener("mouseenter", function () {
    skillBtn.innerHTML = `
<div class= "just-fortest">
<ul class = "list">
<li>Graphic designer at jlug </li>
<li>Campus ammbesdar at coding ninja </li>
</ul>
</div>
`
})
