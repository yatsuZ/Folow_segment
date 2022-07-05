const B = document.getElementById("B")
const A = document.getElementById("A")
const html = document.querySelector("html")
const oposer = document.getElementById("oposer")
const hypothen = document.getElementById("hypothen")
A.style.left = html.clientWidth/2+'px'
A.style.top = html.clientHeight/2+'px'
hypothen.style.left = html.clientWidth/2+'px'
hypothen.style.top = html.clientHeight/2+'px'

html.addEventListener('mousemove',(e)=>{
    C.style.left =e.pageX+"px";
    C.style.top = html.clientHeight/2+'px'
    B.style.left =e.pageX+"px";
    B.style.top =e.pageY+"px";
    hypothen.style.background = "red"


    let AC = (e.pageX-(html.clientWidth/2));
    let BC = (e.pageY-(html.clientHeight/2));


    let AB = Math.pow(AC,2)+Math.pow(BC,2);
    AB = Math.sqrt(AB);
    //sqrt( (Xb - Xa)**2 + (Yb - Ya)**2 ) = la distance du segement AB
    hypothen.style.left = (html.clientWidth/2)- AB/2+'px';
    hypothen.style.width = AB+"px";

    
    oposer.style.left =e.pageX+"px";
    oposer.style.top = html.clientHeight/2+'px';
    if (BC < 0){
        oposer.style.height = BC*-1+"px";
        oposer.style.transform = "rotate(0turn)  translate(-50%,-50%)"
        oposer.style.top = html.clientHeight/2-BC*-1/2+'px';
    } else{
        oposer.style.transform = "rotate(0.5turn)  translate(-50%,-50%)"
        oposer.style.top = html.clientHeight/2-BC/2+'px';
        oposer.style.height = BC+"px";
    }
    let angleCAB = Math.sin(AB/BC);
    console.log("---------------------------------")
    console.log("AC = ",AC)
    console.log("BC = ",BC)
    console.log("AB = ",AB)
    console.log("Angle A = ",angleCAB);
    hypothen.style.transform = "rotate("+angleCAB+"turn) translate(-50%,-50%)";
})