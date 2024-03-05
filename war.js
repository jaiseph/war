let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Example usage

shuffleArray(deck);



let p1deck = [];

let p2deck = [];

let p2spoil = [];

/*let p1spoil = [];

let waiting pile = [];
*/

let removedElements = deck.splice(0, 5);

//let removedElements2 = deck.splice(5, 5);

p1deck = p1deck.concat(removedElements);
//p2deck = p2deck.concat(removedElements2);

let yell = function(){
    
    alert("hi" + deck[0]);
    
    
};


const length = Math.min(deck.length, p1deck.length);


let scale = function(){
    
    /*let currentItemIndex = 0
    
     if (currentItemIndex < deck.length) {
            // Alert the current item and increment the counter
            alert(deck[currentItemIndex]);
            currentItemIndex++;
        } else {
            // If all items have been alerted, reset the counter
            currentItemIndex = 0;
            alert("Restarting from the beginning!");
        }
    */
    
    
    
    for(let i=0; i< length; i++){
 
        alert(p1deck[i] + "  " + deck[i]);
    }
    
}



let halfPush = function(){
    
    
};

let compare = function(){
    
    if(p1deck[0]>deck[0]){
        
        alert("player 1 wins this round");
        
        
    }else{
        
        
        alert("player 2 wins this round");
        
        let discarded = deck.splice(0, 0);
    p2spoil = p2spoil.concat(discarded);
    }
    
   
    
};


let spoilCopmare = function(){
    
    
    
};





//yell();


const sum = deck.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sum2 = p1deck.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

compare();
alert(sum + " " + sum2);

 

alert(p1deck[0]);
alert(deck[0]);
alert(p2spoil[0]);

//for(let i=0; i<=4; i++){
 
        //alert(p1deck[i]);}

//scale();




if(sum > sum2){
    
    alert("player 1 wins");
}else{
    
    alert("player 2 wins");
}
