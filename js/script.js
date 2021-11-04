//CONSEGNA

// 1 Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

// 2 Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.

// 3 Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. (se non fate tempo a realizzare questa parte va bene ugualmente e pensateci in ogni caso solo una volta stampata correttamente tutta la pagina)


// creo un array con dentro gli array contenenti gli oggetti del team

const membriDelTeam = [
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