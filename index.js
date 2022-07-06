const B = document.getElementById("B");
const A = document.getElementById("A");
const html = document.querySelector("html");
const oposer = document.getElementById("oposer");
const hypothen = document.getElementById("hypothen");
const divAC = document.getElementById("AC");
A.style.left = html.clientWidth/2+'px';
A.style.top = html.clientHeight/2+'px';

hypothen.style.left = html.clientWidth/2+'px';
hypothen.style.top = html.clientHeight/2+'px';

html.addEventListener('mousemove',(e)=>{
////////////////////////////////////////// deplacement des point et verification que le DOM marche
    C.style.left =e.pageX+"px";
    C.style.top = html.clientHeight/2+'px';
    B.style.left =e.pageX+"px";
    B.style.top =e.pageY+"px";
    hypothen.style.background = "red";
////////////////////////////////////////////////// calcule des longuer de chaque segment 
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
/////////////////////////////////////////////////////// AC
    if (AC<0){
        divAC.style.width = AC*-1+"px";
        divAC.style.left = html.clientWidth/2+AC/2+"px";

    }else{
        divAC.style.width = AC+"px";
        divAC.style.left = html.clientWidth/2+AC/2+"px";

    }

//////////////////////////////////// Hypothenus et les angles
    hypothen.style.left = (html.clientWidth/2)- AB/2+'px';
    hypothen.style.width = AB+"px";

    let angleCAB = Math.sin(AB/BC);
    hypothen.style.transform = "rotate("+angleCAB+"turn) translate(-50%,-50%)";
///////////////////////////////// Affichage dans la console
    console.log("---------------------------------");
    console.log("AC = ",AC);
    console.log("BC = ",BC);
    console.log("AB = ",AB);
    console.log("Angle A = ",angleCAB);
})