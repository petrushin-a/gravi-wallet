function foundsChangeHref(){
    var foundsLinks = document.querySelectorAll("td > a")
    foundsLinks.forEach(u => {
        var founderWallet = new URL(u.getAttribute("href")).pathname.split("/")[2]
        u.removeAttribute("target")
        u.setAttribute("href", "https://pool.gravitsapa.space/wallet?tw="+founderWallet )
    })
}

foundsChangeHref()

function foundsMarkYourBlock(){
    for (const a of document.querySelectorAll("td > a")) {
        if (a.textContent.includes(lw)) {
          a.setAttribute("style","color:#85f1a1")
        }
      }
}

foundsMarkYourBlock()