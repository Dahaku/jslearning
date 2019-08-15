const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true}


function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, function (data){
            resolve(data)
        })
        .fail(()=> reject(id))
    })
}

function onSuccess(data){
    console.log(`El personaje es ${data.name}`)
}

function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

for(a=1;a<=25;a++){
    obtenerPersonaje(a)
        .then(onSuccess)
        .catch(onError)
}
