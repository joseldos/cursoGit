/*
Comienzo del uso de media queries para hacer la página responsive
*/ 

const mediaQuerySmall = window.matchMedia('(max-width: 600px)');
const mediaQueryMedium = window.matchMedia('(min-width: 601px) and (max-width:1024px)');
const mediaQueryLarge = window.matchMedia('(min-width: 1025px)');

function handleMediaQueryChange() {
    if(mediaQuerySmall.matches) {
        document.body.style.backgroundColor = "lightblue";
        document.body.style.fontsize = "0.2rem";
        
    } else if (mediaQueryMedium.matches) {
        document.body.style.backgroundColor = "lightgreen";
    } else if(mediaQueryLarge.matches){
        document.body.style.backgroundColor = "lightcoral";
    }
}

mediaQuerySmall.addListener(handleMediaQueryChange);
mediaQueryMedium.addListener(handleMediaQueryChange);
mediaQueryLarge.addListener(handleMediaQueryChange);

