const colorButton = document.getElementById('colorBtn');
const colorHex = document.getElementById('colorHex');
const colorHSL = document.getElementById('colorHSL');

const randoColor = () => {
    let val = 0xFFFFFF;
    let randoNum = Math.floor(Math.random() * val);
    randoNum = randoNum.toString(16);
    let randColor = randoNum.padStart(6, 0);
    colorHex.innerHTML = `#${randColor.toUpperCase()}`;
    document.getElementById('mainDiv').style.backgroundColor = `#${randColor.toUpperCase()}`;

    axios.get(`https://www.thecolorapi.com/id?hex=${randColor}`)
        .then(response => {
            const apiResponse = response.data;
            console.log(apiResponse);
            document.getElementById('colorName').innerHTML = `${apiResponse.name.value}`;
            colorHSL.innerHTML = `${apiResponse.hsl.value}`;
        }).catch(error => {
            console.log(error);
        })
};

colorButton.addEventListener('click', randoColor);