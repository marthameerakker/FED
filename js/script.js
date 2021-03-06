/************************/
/* HAMBURGER MENU */
/************************/

var hamburger = document.querySelector('header > button:first-of-type');
var hamburgerClose = document.querySelector('header > nav:first-of-type > section > button:last-of-type');
var menu = document.querySelector('header nav:first-of-type');

function toggleMenu() {
    menu.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);
hamburgerClose.addEventListener('click', toggleMenu);

function createCaroCarrousel(carrouselID) {
    let carrousel = document.querySelector("#" + carrouselID);
    let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
    let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
    let bolletjes = carrousel.querySelectorAll(":scope > nav a");


    /****************/
    /* DE BOLLETJES */
    /****************/

    // de bolletjes activeren
    function iniBolletjes() {
        for (bolletje of bolletjes) {
            // elk bolletje laten luisteren naar kliks
            bolletje.addEventListener("click", function(e) {
                // als er geklikt wordt

                // de default-actie (de link volgen) niet uitvoeren
                e.preventDefault();

                // de id van het bijbehorende element bepalen
                let newElementID = this.hash.substring(1); // de # eraf halen

                // nieuwe element current element maken
                updateCurrentElement(newElementID);

                // scrollLeft van de container aanpassen
                let theElement = carrousel.querySelector("#" + newElementID);
                let elementOffset = theElement.offsetLeft;
                carrouselElementsContainer.scrollLeft = elementOffset;

                // de bolletjes updaten
                updateBolletjes(newElementID);
            });
        }
    }


    /*****************/
    /* START POSITIE */
    /*****************/

    // het eerste element en bolletje actief maaken
    function iniStartPosition() {
        // eerste element current maken
        carrouselElements[0].classList.add("current");
        // eerste bolletje current maken
        bolletjes[0].classList.add("current");
        // aan het begin van de container starten
        carrouselElementsContainer.scrollLeft = 0;
    }


    /*********************/
    /* ALGEMENE FUNCTIES */
    /*********************/

    ////////////////////////////
    // update current element //
    function updateCurrentElement(elementID) {
        // het huidige current element opzoeken
        let currentElement = carrousel.querySelector(":scope > ul > .current");
        // de class current verwijderen
        currentElement.classList.remove("current");

        // het nieuwe element opzoeken
        let newElement = carrousel.querySelector("#" + elementID);
        // de class current toevoegen
        newElement.classList.add("current");
    }


    //////////////////////
    // update bolletjes //
    function updateBolletjes(elementID) {
        // het huidige current bolletje opzoeken
        let currentBolletje = carrousel.querySelector(":scope > nav .current");
        // de class current verwijderen
        currentBolletje.classList.remove("current");

        // het nieuwe bolletje opzoeken
        let newBolletje = carrousel.querySelector("a[href='#" + elementID + "']");
        // de class current toevoegen
        newBolletje.classList.add("current");
    }



    // de bolletjes activeren
    iniBolletjes();
    // de carrousel bij het begin starten
    iniStartPosition();
}


/************************/
/* DE CARROUSEL CRE??REN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function() {
    // hier de id gebruiken van de section in de html
    createCarrousel("justBolletjes");

});


/************************/
/* TERUG NAAR BOVEN */
/************************/

//Get the button:
mybutton = document.getElementById("myBtn");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/************************/
/* ACCORDION */
/************************/

var section = document.querySelector('.accordion');

function hideDetailsMenu(e) {

    var button = e.target;


    if (button.innerText == 'TOON MEER') {
        button.innerText = 'TOON MINDER';
    } else {
        button.innerText = 'TOON MEER';

    }
    section.classList.toggle('expanded')
}

var button = document.querySelector('button#toonmeer-minder');
if (button) {
    button.addEventListener('click', hideDetailsMenu);
}


/************************/
/* HARTJES ANIMATIE */
/************************/

var likeButton = document.querySelectorAll('.likebutton').forEach(button => {
    button.addEventListener('click', event => {
        event.target.classList.toggle("liked")
    })
})