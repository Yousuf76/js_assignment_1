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