function foundsChangeHref(){
    var foundsLinks = document.querySelectorAll("tr > td:nth-child(4)")
    console.log(foundsLinks[0].textContent.trim())
    foundsLinks.forEach(u => {
        var founderWallet = u.textContent.trim()
        var graviFounderUrl = 'https://pool.gravitsapa.space/wallet?tw=' + founderWallet
        u.innerHTML=`<a href="${graviFounderUrl}">${founderWallet}</a>`
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