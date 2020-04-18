
interface Time
{
    h : number;
    m : number;
    s : number;
}

function printTime(v:Time) {
   console.log(v.h)
   console.log(v.m)
   console.log(v.s)
}

var t1 : Time = { h : 10, m : 20, s: 20};

printTime({ h : 10, m : 20, s: 20})  // Duck Typing 



