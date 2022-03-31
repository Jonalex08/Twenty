let input = "y";
let player = 0;
let bot = 0;
var value = 0;
var pvalue = 0;
var option = 0;

function name(){
    var nam = prompt("Hello, what is your name")
    return nam;
}

function computer(){
    do{
        if (pvalue > 20){ 
            break;
        }
        do{
            var ran = Math.floor(Math.random() * 11)
        }while(ran == 0)
        value = value + ran;
        if (value < 16){
            alert(`I have ${value}. I'm going to draw`)
        }else if(value == 20){
            break;
        }else if(value > 20){
            break;
        }else if(value >= 16){
            alert(`I have ${value}. I think I'll stop here.`)
        }

    }while(value < 16)
    return value;
}

function player1(){
    alert("You go first")
    do{
        if(value > 20){
            break;
        }else{
            do{
                var ran = Math.floor(Math.random() * 10)
            }while(ran == 0)
            pvalue = pvalue + ran;
            if (pvalue > 20){
                alert(`You got ${pvalue} and lost.`)
                bot++;
            }else if(pvalue == 20){
                break; 
            }else{
            option = window.prompt(`You have ${pvalue}. If you want to draw press 1 if you want to stop press 2.`)
            }
        }
    }while((option != "2") && (pvalue < 20) && (input != "n"))
    return pvalue;

}

function winning(pvalue , value){
    if((pvalue <= 20) && (value <= 20) && (pvalue > value) && (pvalue != 20) || (pvalue == 20)){
        alert(`You got ${pvalue} and Won. I had ${value}`)
        player++;
    }else if(value > 20){
        alert(`I got ${value} and lost.`)
        player++;
    }else if((value > pvalue) && (value <= 20) && (pvalue <= 20)){
        alert(`I got ${value} and won.`)
        bot++;
    }else if((value == pvalue) && (pvalue >= 20)){
        alert(`We got ${pvalue} and tied.`)
    }
    
    input = window.prompt(`The score is ${bot} for me and ${player} for you ${na}. Would you like to play again? If yes press y if no press n`)
    console.log(`The score was ${player} for you and ${bot} for me`)
}

let na = name();
alert(`Hello ${na}, Welcome to Twenty in this game we will go against each other trying to get the closest to 20`)

do{
    value = 0;
    pvalue = 0;
    var x = player1();
    var y = computer();


    winning(x, y);

    
    
}while(input != "n")