//variables globales
let pages = [
    //remplacer par le nom de toutes tes pages (si y en a plus que 4 ça marche quand même :p)
    "index.html",
    "entreprise.html",
    "missions.html",
    "PO.html",
    "profil.html",
    "anecdote.html",
    "projects.html",
    "comm.html",
    "RS.html",
    "RS_avis.html",
    "merci.html", 
    "contact.html",   
    "bilan.html"

];
let file_name = window.location.pathname;
console.log(window.location);

//création des deux fonction principales du script
function check_seen(page) {
    let page_seen = sessionStorage.getItem(page);

    if (page_seen === "true") {
        return true;
    }
    else {
        return false;
    }
}
function show_page() {

    //création de la liste dans la div #pages_list
    let div_list = document.querySelector("#pages_list");
    console.log(div_list);
    let ul = document.createElement("ul");
    div_list.appendChild(ul);

    //loop pour ajouter les pages à la liste + check si page déjà vue ou non
    for (i = 0; i < pages.length; i++) {

        //création + ajout du nouveau li
        li = document.createElement("li");
        a = document.createElement("a");
        a.href = `/Users/manonclint/Desktop/SITE%20MANON/${pages[i]}`;
        ul.appendChild(li);
        li.appendChild(a);
        cool_name = pages[i].replace(".html", "") //enlève le .html à la string
        //le nom du nouveau tableau [i]
        page_name = document.createTextNode(cool_name);
        a.appendChild(page_name);


        //appel à la fonction pour voir si la page a été vue
        check = check_seen(`/Users/manonclint/Desktop/SITE%20MANON/${pages[i]}`);

        if (check === true) {
            a.style.color = "green";
        }
        else {
            a.style.color = "red";
        }

    }
}

function beep(){
   
}


//function déclenchée dès que la page est chargée
(function() {
    var url = document.querySelectorAll('.btn');

    url.forEach(e => {
        e.addEventListener("click", function (){
        link=this.dataset.key;
        //POUR LE SON
            let beep = document.querySelector('audio');
            beep.src = "send.mp3";
            beep.play();

            setTimeout(function(){
                window.location.href = link;
            },
            500)
            
        })
    })
 


// check les vues de pages 

    if (file_name  === "/Users/manonclint/Desktop/SITE%20MANON/sitemap.html") {
        show_page()
    }
    else {
        sessionStorage.setItem(file_name, "true");
    }
})()


