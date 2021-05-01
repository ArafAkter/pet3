class Foodate{
    constructor(){

    }
    display(){
    //  var title = createElement("h2");
      //title.html("Car racing game");
       //title.position(550,150);

     //  var imput = createInput("name");
       var button = createButton("feed");
       
    //   imput.position(580,200);
       button.position(600,75);

       button.mousePressed(function(){
         //  imput.hide();
         //  button.hide();
         foodStock  = foodStock - 1
         ball.y = hypnoticBall.y
         ball.x = hypnoticBall.x
         eat = "eat"
          milk2.velocityX = -25
          database.ref("/").update({
            feedtime:hour()   
          })
          feedHour()
          //feedtime : hour 
         // feedHour()
       //    var name = imput.value();
          // var greeting = createElement("h2");
         //  greeting.html("hello " + name);
          // greeting.position(600,200);
       })

       var button2 = createButton("add food");
       button2.position(850,75);

       button2.mousePressed(function(){
        //  imput.hide();
        //  button.hide();
//if(foodStock < 20){
        foodStock  = foodStock + 1
       
//}
     //   ball.y = hypnoticBall.y
       // ball.x = hypnoticBall.x
        eat = "no"
      //    var name = imput.value();
         // var greeting = createElement("h2");
        //  greeting.html("hello " + name);
         // greeting.position(600,200);
      })


    }
}