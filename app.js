let input = "y";
let player = 0;
let bot = 0;
do{
    alert("Welcome to Twenty in this game we will go against each other trying to get the closest to 20")
    var value = 0;
    alert("I'll go first")
    do{
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
            alert("Your turn")
        }

    }while(value < 16)
    
    var pvalue = 0;
    var option = 0;


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
            option = window.prompt(`You have ${pvalue}. I had ${value}. If you want to draw press 1 if you want to stop press 2.`)
            }
        }
    }while((option != "2") && (pvalue < 20) && (input != "n"))


    if((pvalue <= 20) && (value <= 20) && (pvalue > value) && (pvalue != 20) || (pvalue == 20)){
        alert(`You got ${pvalue} and Won.`)
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
    
    input = window.prompt(`The score is ${bot} for me and ${player} for you. Would you like to play again? If yes press y if no press n`)
    
    if (input == "y"){
        value = 0;
        pvalue = 0;
    }

    console.log(value)
    console.log(pvalue)

}while(input != "n")