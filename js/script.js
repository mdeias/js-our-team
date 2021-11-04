//CONSEGNA

// 1 Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

// 2 Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.

// 3 Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. (se non fate tempo a realizzare questa parte va bene ugualmente e pensateci in ogni caso solo una volta stampata correttamente tutta la pagina)


// creo un array con dentro gli array contenenti gli oggetti del team

const membriDelTeam = [
    {
        foto: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",  
    },
    {
        foto: "img/angela-caroll-chief-editor.jpg",
        nome: "Angela Carol",
        ruolo: "Chief Editor",
    },
    {
        foto: "img/walter-gordon-office-manager.jpg",
        nome: "Walter Gordon",
        ruolo: "Office Manager",
    },
    {
        foto: "img/angela-lopez-social-media-manager.jpg",
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
    },
    {
        foto: "img/scott-estrada-developer.jpg",
        nome: "Scott Estrada",
        ruolo: "Developer",
    },
    {
        foto: "img/barbara-ramos-graphic-designer.jpg",
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
    }
]

console.log(membriDelTeam);

stampaValori(membriDelTeam)

//creo una funzione che stampa attraverso un ciclo for i valori di ogni componente del team

function stampaValori(arrayValori) {

    // recupero il contenitore
    const contenitore = document.querySelector(".team-container");

    // resettiamo il contenitore all'interno dell'html
    contenitore.innerHTML = "";

    // ciclo for che stamperà tutti i valori degli oggetti
    for(let valore in membriDelTeam){
        // creo il contenitore della card 
        const card = document.createElement("div");
        // aggiungo la classe
        card.classList.add("team-card");
        // scrivo l'hatml al suo interno con i relativi valori
        card.innerHTML = `
        <div class="card-image">
           <img
             src="${arrayValori[valore].foto}"
           />
        </div>
        <div class="card-text">
          <h2> ${arrayValori[valore].nome} </h2>
          <p> ${arrayValori[valore].ruolo} </p>
        </div>
        `
        //appendiamo la card al contenitore
        contenitore.append(card);

    }
}

