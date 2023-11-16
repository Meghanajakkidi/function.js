// prog to print sum of digits
function add(a,b,c){
      console.log(a+b+c)
}
add(2,3,5)
// prog to print table
function table(){
    let n = Number(prompt("enter any table"))
       for(let i=1;i<=10;i=i+1){
        let r = n*i
        result=""+n+"*"+i+"="+r
        console.log(result)
       result=""  
        }
    }
table()
//prog to check even or odd
function checkevenorodd(){
       let n = Number(prompt("enter any number"))
       if(n%2===0){
        console.log("number is even")
       }else{
        console.log("number is odd")
       }
}
checkevenorodd()
//prog to print even numbers
function evennumbers(){
    for(let i=2;i<50;i=i+2){
        console.log(i)
    }
}
evennumbers()
//prog to print reverse number
function reverse(){
      for( let i=10;i>=1;i=i-1){
        console.log(i)
      }
}
     
reverse()
//prog to check pailndrome
function ispalindrome(text,number){
    return text == text.split( ' ').reverse().join(' ');
}
console.log(ispalindrome('mom',141));
console.log(ispalindrome('level',55));




