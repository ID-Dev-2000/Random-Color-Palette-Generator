let colorImage = document.getElementById('colorImage')
let imageHex1 = document.getElementById('li1')
let imageHex2 = document.getElementById('li2')
let imageHex3 = document.getElementById('li3')
let imageHex4 = document.getElementById('li4')
let imageHex5 = document.getElementById('li5')
let imageHex6 = document.getElementById('li6')
let colorItemParent = document.getElementById('colorItemParent')
let selectColor = document.getElementById('selectColor')

async function fetchImages() {
    colorItemParent.hidden = false
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let fetchedData = await fetch(`https://www.thecolorapi.com/scheme?hex=${randomColor}&mode=triad&count=6`, {
        headers: {"Accept" : "application/json"},
    })
    let fetchedDataAsJSON = await fetchedData.json()
    if (fetchedData.ok == false) {
        alert("API is probably on cooldown")
    }else if(fetchedDataAsJSON['colors']['0']['hex']['value'] == '#000000') {
        fetchImages() // re-calls function if value display error is true
    } else {
        colorImage.src = fetchedDataAsJSON.image.bare
        console.log(fetchedDataAsJSON)
        imageHex1.innerHTML = fetchedDataAsJSON['colors']['0']['hex']['value']
        imageHex2.innerHTML = fetchedDataAsJSON['colors']['1']['hex']['value']
        imageHex3.innerHTML = fetchedDataAsJSON['colors']['2']['hex']['value']
        imageHex4.innerHTML = fetchedDataAsJSON['colors']['3']['hex']['value']
        imageHex5.innerHTML = fetchedDataAsJSON['colors']['4']['hex']['value']
        imageHex6.innerHTML = fetchedDataAsJSON['colors']['5']['hex']['value']
    }
}

selectColor.addEventListener('click', fetchImages)