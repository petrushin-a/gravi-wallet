function foundsChangeHref(){
    var foundsLinks = document.querySelectorAll("tr > td:nth-child(4)")
    console.log(foundsLinks[0].textContent.trim())
    foundsLinks.forEach(u => {
        var founderWallet = u.textContent.trim()
        var graviFounderUrl = 'https://pool.gravitsapa.space/wallet?tw=' + founderWallet
        var tonShFounderUrl = 'https://ton.sh/address/' + founderWallet
        u.innerHTML=`<a href="${tonShFounderUrl}"  class="diamondlink" target="_blank" title="Explore wallet on Ton.sh">💎</a> <a href="${graviFounderUrl}" title="Go to wallet">${founderWallet}</a>`
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