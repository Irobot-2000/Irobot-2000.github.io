//Handle card onclick
document.querySelectorAll(".card").forEach(
    card => 
    {
        console.log(card)
        a = card
        if (card.dataset.href)
        {
            card.onclick = ()=> window.location = card.dataset.href
        }
    }
)

//Handle loader
//2s interval
const checkLoaded = window.setInterval(async ()=>
{
    if (document.readyState == "complete")
    {
        //document is ready
        let loader = document.querySelector("#loader")
        let main = document.querySelector("#main")
        loader.classList.add("fade-out")
        await wait(500)
        main.style.display = "block"
        loader.style.display = "none"
        clearInterval(checkLoaded)
    }
},2000)

function wait(ms)
{
    let resolver
    let promise = new Promise((resolve) => resolver = resolve)
    setTimeout(() => resolver(), ms)
    return promise

}