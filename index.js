/////////////////////////// document recovery
const html = document.querySelector("html");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C")
const oposer = document.getElementById("oposer");
const hypothenus = document.getElementById("hypothenus");
const adjacent = document.getElementById("adjacent");

//////////////////////////////////////////////////// Init of some element
A.style.left = html.clientWidth/2+'px';
A.style.top = html.clientHeight/2+'px';

hypothenus.style.left = html.clientWidth/2+'px';
hypothenus.style.top = html.clientHeight/2+'px';


///////////// ADD of event

html.addEventListener('mousemove',(e)=>{
////////////////////////////////////////// EN: moving points and checking that the DOM works //FR : deplacement des point et verification que le DOM marche
    C.style.left =e.pageX+"px";
    C.style.top = html.clientHeight/2+'px';
    B.style.left =e.pageX+"px";
    B.style.top =e.pageY+"px";
    hypothenus.style.background = "red";
//////////////////////////////////////////////////EN: calculate length of each segment  //FR:calcule des longuer de chaque segment 
    let AC = (e.pageX-(html.clientWidth/2));
    let BC = (e.pageY-(html.clientHeight/2));


    let AB = Math.pow(AC,2)+Math.pow(BC,2);

    AB = Math.sqrt(AB);
    //sqrt( (Xb - Xa)**2 + (Yb - Ya)**2 ) = la distance du segement AB
    
    
    ///////////////////////////////////////////// BC
    oposer.style.left =e.pageX+"px";
    oposer.style.top = html.clientHeight/2+'px';
    if (BC < 0){
        oposer.style.height = BC*-1+"px";
        oposer.style.transform = "rotate(0turn)  translate(-50%,-50%)";
        oposer.style.top = html.clientHeight/2-BC*-1/2+'px';
    } else{
        oposer.style.transform = "rotate(0.5turn)  translate(-50%,-50%)";
        oposer.style.top = html.clientHeight/2-BC/2+'px';
        oposer.style.height = BC+"px";
    }
/////////////////////////////////////////////////////// adjacent
    if (AC<0){
        adjacent.style.width = AC*-1+"px";
        adjacent.style.left = html.clientWidth/2+AC/2+"px";

    }else{
        adjacent.style.width = AC+"px";
        adjacent.style.left = html.clientWidth/2+AC/2+"px";

    }

//////////////////////////////////// Hypothenus et les angles
    hypothenus.style.left = (html.clientWidth/2)- AB/2+'px';
    hypothenus.style.width = AB+"px";

    let angleCAB = Math.sin(AB/BC);//i try many function of trigonometrie
    hypothenus.style.transform = "rotate("+angleCAB+"turn) translate(-50%,-50%)";
/////////////////////////////////EN: Display in console  //FR: Affichage dans la console
    console.log("---------------------------------");
    console.log("AC = ",AC);
    console.log("BC = ",BC);
    console.log("AB = ",AB);
    console.log("Angle A = ",angleCAB);
})