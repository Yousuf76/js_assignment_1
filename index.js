//Problem 1 : Let’s play a mind game
function mindGame(num){
    if(num.constructor != Number || num<0){
        return "please input  a positive integer value";
    }
    num= (num*3) + 10;
    num = num/2;
    num = num -5
    return num;
}

// problem 2 : Even Odd
function evenOdd(str){
    if(str.constructor != String){
        return "Please enter a string";
    }
    else{
        if(str.length %2 == 0){
            return "even";
        }
        else{
            return "odd";
        }
    }
}

// Problem 3:Less or Greater than seven

function isLGSeven(num)
{
    if(typeof(num)!=='number')
    {
          return "please input a number";
    }
    else if((num-7)<7)
    {
        return num-7;
    }
    return num*2;
}
 
// function isLGSeven takes an integer parameter. Then from that input seven is deducted. If the absolute difference found by deducting is less than 7 then it returns the difference else it returns difference multiplied by 2 
function isLGSeven(number){
    if(number.constructor != Number){
        return "Please enter a number";
    }
    else{
        let difference = number-7;
    if(difference<7){
        return difference;
    }
    else{
        return number*2;
    }
    }
}

// Problem 4: Finding Bad data
function findingBadData(numarr)
{
    let count = 0;
    for(let i=0;i<numarr.length ;i++)
    {
        if(typeof(numarr[i])!=='number')
        {
            return "please input a integer";
        }
    }
    for(let i=0;i<numarr.length ;i++)
    {
        if(numarr[i]<0)
        {
            count++;
        }
    }
    return count;

}


// Problem 5: Convert gems into diamond

function gemsToDiamond(firstfriend,secondfriend,thirdfriend){
    if(firstfriend === undefined || secondfriend === undefined || thirdfriend === undefined){
        return "Please enter all three perameters";
    }
    if(firstfriend.constructor != Number || secondfriend.constructor != Number || thirdfriend.constructor != Number){
        return "Please enter three numbers";
    }
    firstfriend = firstfriend*21;
    secondfriend = secondfriend*32;
    thirdfriend = thirdfriend*43;
    let totalgems = firstfriend+secondfriend+thirdfriend;
    if(totalgems>=2000){
        totalgems = totalgems - 2000;
        return totalgems;
    }
    else{
        return totalgems;
    }
}

function gemsToDiamond(firstfrnd,secondfrnd,thirdfrnd)
{

    const firstfriend=21, secondfriend=32,thirdfriend=43;
    if(typeof(firstfrnd)!=='number')
    {
        return "give a integer number";
    }
    if(typeof(secondfrnd)!=='number')
    {
          return "please give a integer number";
    }
    if(typeof(thirdfrnd)!=='number')
    {
         return "please give a integer number";
    }


    let totalgems;
    totalgems = (firstfrnd*firstfriend) + (secondfrnd*secondfriend) + (thirdfrnd*thirdfriend);
    if(totalgems<2000)
    {
        return totalgems;
    }
    return totalgems-(2000);
}