// 1 завдання частина 1
 
function firstTask(a, b) { 
    a = 2;
    b = 8
 console.log(a *= b);   
 }
  firstTask(2, 8) ;
 

 // 1 завдання частина 2
function secondTask(c, d) { 
    c = "Better";
    d = "today"
    console.log(c + d);
    }
     secondTask("Better", "today") ;
 

  // 1 завдання частина 3
function thirdTask(e, f) {
    e = "hello";
    f = 7
 console.log(e %= f) ;
  }
   thirdTask("hello", 7) ;
   
   // 2 завдання
 function square(g) {
 
    // код
   const result = g > 0 ? console.log("Yes") : console.log("No")
    }
   square(2) ;

 // 3 завдання 
 function division(e, f) {

    if (e /= f) {
        console.log("True")
    }
    if (e %= f) {
        console.log("False")  
    }
     }
     division(12, 4) ;

     // 4 завдання код 
     function numberOutput(n) {
        return n ? numberOutput(n - 2) + n.toString() : "";
      }
      console.log(numberOutput(10));