import { courseOne } from './database.js'
import { courseTwo } from './database.js'
import { courseThree } from './database.js'
import { courseFour } from './database.js'
import { courseFive } from './database.js'


const levelTitle = document.getElementById("level-title")
const levelList = document.getElementById("level-list")
const levelText = document.getElementById("level-text")

const a1Btn = document.getElementById("a1-btn")
const a2Btn = document.getElementById("a2-btn")
const b1Btn = document.getElementById("b1-btn")
const b2Btn = document.getElementById("b2-btn")
const c1Btn = document.getElementById("c1-btn")


a1Btn.addEventListener('click', function(){
     levelList.innerHTML = ''
    renderA1title()
    renderA1text()

   
})
function renderA1title(){
 let title = courseOne.titel 
 levelTitle.innerHTML=`
                      <h1>${title}</h1>  
                      `
}
function renderA1list(){
     let list = courseOne.list
    for (let i = 0; i < list.length; i++) {  
        levelList.innerHTML+=`
                      <li>${list[i]}</li>                        
                      `  
}}
function renderA1text(){
    let text = courseOne.text
     levelText.innerHTML=`
                      <p>${text}</p>  
                      `
}




a2Btn.addEventListener('click', function(){
    levelList.innerHTML = ''
    renderA2title()
    renderA2list()
    renderA2text()
    
})
function renderA2title(){
 let title = courseTwo.titel 
 levelTitle.innerHTML=`
                      <h1>${title}</h1>  
                      `
}
function renderA2list(){
 let list = courseTwo.list
    for (let i = 0; i < list.length; i++) {  
        levelList.innerHTML+=`
                      <li>${list[i]}</li>
                        
                      `  
}}

function renderA2text(){
    let text = courseTwo.text
     levelText.innerHTML=`
                      <p>${text}</p>  
                      `
}




b1Btn.addEventListener('click', function(){
     levelList.innerHTML = ''
    renderb1title()
    renderb1list()
    renderb1text()
    
})
function renderb1title(){
 let title = courseThree.titel 
 levelTitle.innerHTML=`
                      <h1>${title}</h1>  
                      `
}
function renderb1list(){
 let list = courseThree.list
    for (let i = 0; i < list.length; i++) {  
        levelList.innerHTML+=`
                      <li>${list[i]}</li>
                        
                      `  
}}
function renderb1text(){
    let text = courseThree.text
     levelText.innerHTML=`
                      <p>${text}</p>  
                      `
}





b2Btn.addEventListener('click', function(){
     levelList.innerHTML = ''
    renderb2title()
    renderb2list()
    renderb2text()
    
})
function renderb2title(){
 let title = courseFour.titel 
 levelTitle.innerHTML=`
                      <h1>${title}</h1>  
                      `
}
function renderb2list(){
 let list = courseFour.list
    for (let i = 0; i < list.length; i++) {  
        levelList.innerHTML+=`
                      <li>${list[i]}</li>
                        
                      `  
}}
function renderb2text(){
    let text = courseFour.text
     levelText.innerHTML=`
                      <p>${text}</p>  
                      `
}





c1Btn.addEventListener('click', function(){
     levelList.innerHTML = ''
    renderc1title()
    renderc1list()
    renderc1text()
    
})
function renderc1title(){
 let title = courseFive.titel 
 levelTitle.innerHTML=`
                      <h1>${title}</h1>  
                      `
}
function renderc1list(){
 let list = courseFive.list
    for (let i = 0; i < list.length; i++) {  
        levelList.innerHTML+=`
                      <li>${list[i]}</li>
                        
                      `  
}}
function renderc1text(){
    let text = courseFive.text
     levelText.innerHTML=`
                      <p>${text}</p>  
                      `
}