function mindGame(num){
    if(num.constructor != Number || num<0){
        return "please input  a positive integer value";
    }
    num= (num*3) + 10;
    num = num/2;
    num = num -5
    return num;
}