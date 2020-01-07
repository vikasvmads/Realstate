function codingScoreReport(scores) {
    
    console.log(scores);
    let PoorL=  300;
    let PoorH=  599;
    let FairL = 600;
    let FairH = 699;
    let GoodL = 700;
    let GoodH = 749;
    let ExcellentL = 750;
    let ExcellentH = 799;
    let EliteScore =  800;
    let Poor,Fair,Good,Excellent,Elite = 0;
    
    for(i=0;i<scores.lenght;i++){
        console.log("inside for loop")
        if(scores[i]>=PoorL && scores[i]<= PoorH){
            console.log(scores[i]);
            Poor = Poor++;
        }else if(scores[i]>=FairL && scores[i]<= FairH){
            console.log(scores[i]);
            Fair = Fair++;
        }else if(scores[i]>=GoodL && scores[i]<= GoodH){
            console.log(scores[i]);
            Good = Good++;
        }else if(scores[i]>=ExcellentL && scores[i]<= ExcellentH){
            console.log(scores[i]);
            Excellent = Excellent++;
        }else if(scores[i]> EliteScore){
            console.log(scores[i]);
            Elite = Elite ++;
        }
    
    let result = new array();
        result['Good'] =  Good ;
        result['Elite'] = Elite ;
        result['Poor'] =  Poor ;
    
        return result;
        
    }
}

