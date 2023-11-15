
async function consumeApiWithAxios(url){
    try{
        const response = await axios.get(url);
        console.log(`la petición a la api se completo correctamente con status: ${response.status}`);
        return await response.data;
        
        
    } catch(error){
        console.error(`fallo la petición a la api con error: ${error.message}`);
    }    
}
let Palabra="";
function buscar(){
    const palabra = document.getElementById("entrada");
    Palabra=palabra.value;
    const respuestaPeticion = consumeApiWithAxios('https://api.openweathermap.org/data/2.5/weather?units=metric&q='+ Palabra +'&appid=d3c39f57206d5904890771c822ffaac3');
    if(Palabra.length !== 0){
        procesarDatosRespuesta(respuestaPeticion);
    }
    event.preventDefault(); 
}

async function procesarDatosRespuesta(resp){
    const respApi = await resp;
    const dato1 = respApi;
    var weather= document.getElementById("weather");

    const img = document.createElement('img');
    img.setAttribute('class', 'weather-icon','src', 'images/'+dato1.weather[0].main+'.png');
    weather.appendChild(img);

    const temp = document.getElementById("temp");
    temp.innerHTML = `${dato1.main.temp}<ºC>`;
    weather.appendChild(temp);

    const city= document.createElement('h2');
    city.innerHTML = `${dato1.name}<ºC>`;
    weather.appendChild(city);

    const details= document.createElement('div');
    details.setAttribute('class', 'details');
    weather.appendChild(details);

    const col= document.createElement('div');
    col.setAttribute('class', 'details');
    details.appendChild(col);
    const img2 = document.createElement('img');
    img2.setAttribute('src', 'images/Wind.png');
    col.appendChild(img2);
    const detalle= document.createElement('div');
    detalle.setAttribute('class', 'detalle');
    col.appendChild(detalle);
    const humidity = document.createElement('p');
    humidity.setAttribute('class', 'humidity');