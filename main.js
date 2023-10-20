
// recuperer  les utilsatreures avex function asnyc
async function fetchUser() {
    const r = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5', {
        method: 'GET',
        // ajouter en tete
        headers: {
            "Accept": "application/json",
            "Content-Type": "appliction/json"
        },
        // body: JSON.stringify({ titel: 'mon premier titre ' })
    })
    // console.log(r.url);
    if (r.ok === true) {
        // return la promise
        return r.text();
    }
    // si ya un probléme
    throw new Error('imposible de ontacter le serveur')
}

// console apres la racupération des utilisateurs
fetchUser().then(user => console.log(user))



