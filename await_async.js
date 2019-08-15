const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true}


function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, function (data){
            resolve(data.name)
        })
        .fail(()=> reject(id))
    })
}


async function obtenerPersonajes() {
    var ids = [1,2,3,4,5,6,7]
    var promises = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promises)
        for(var personaje in personajes) { 
            debugger
            console.log(personajes[personaje])
        }
    } catch (id){
        console.log('Error ' + id)
    }
}

obtenerPersonajes()