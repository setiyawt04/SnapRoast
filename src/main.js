import { memes } from "./data.js"

const formName = document.getElementById("name-input")
const delayData = document.getElementById("form-input")

formName.addEventListener("submit", function(e){
    e.preventDefault()
    const getFormData = new FormData(formName)
    const name = getFormData.get("name")
    
    delayData.innerHTML = `
        <img src="./assets/bouncing-circles.svg" class="loading"/>
        <p id="upload-text" class="text-center">Eitsss… bentar, lagi ngulik punchline biar lo nangis.</p>
    `
    setTimeout(function(){
        const uploadText = document.getElementById('upload-text')
        uploadText.innerText = "Tunggu bentar, lagi nyari kata paling pedes 🔥"
    }, 3000)

    setTimeout(function(){
        const rand = Math.floor(Math.random() * memes.length)
        const memeId = memes.map(meme => meme.id)
        const randMeme = memeId[rand]
        const findId = memes.find(meme => meme.id === randMeme)
        const addName = findId.text.replace("{name}", name)
        document.body.innerHTML = `
            <section class="w-full h-screen bg-yellow-300 flex justify-center items-center flex-col">
                <h1 class="title-result">Panas? Biasa Aja Lah!</h1>
                <div class="meme">
                    <img src="${findId.meme}" class="meme-image"/>
                    <p class="result">${addName}</p>
                </div>
            </section>
        `

    }, 4500)

})