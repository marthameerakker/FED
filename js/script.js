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
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function() {
    // hier de id gebruiken van de section in de html
    createCaroCarrousel("justBolletjes");
    //je kunt hier ook meerdere carrousellen activeren
})();