console.log("hola");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const start = document.getElementById("start")
const stop = document.getElementById("stop")
const restart = document.getElementById("restart")

let h = 0;
let m = 0;
let s = 0;


let stopp = true;

function sleep(seconds){

    return new Promise(resolve => setTimeout(resolve, 1000 * seconds));

}

async function continuee(){
    while(true && !stopp){


        await sleep(1);

        if(stopp){

            break;

        }
        s++;
        
        seconds.innerText =  s<10 ? '0'+s : s;
        
        if(s===60){

            s=0;
            m++;

            minutes.innerText =  m<10 ? '0'+m : m; ;
            seconds.innerText =  s<10 ? '0'+s : s;;


            if(m===60){

                m=0;
                h++;
                hours.innerText = h<10 ? '0'+h : h; ;
                minutes.innerText =  m<10 ? '0'+m : m; ;
                
                
            }

        }
    }
}
let running = false;
start.addEventListener("click" , () => {
    stopp = false;
    if(!running){

        running = true;
        continuee();

    }

});

stop.addEventListener("click" , () => {
    running = false;
    stopp = true;
});

restart.addEventListener("click" , () => {

    h = 0;
    m = 0;
    s = 0;

    stopp = true;
    running = false;
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";

})


