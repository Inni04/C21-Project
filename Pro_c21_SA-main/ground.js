class Ground //Ground is the name of the class
{
  constructor(x, y, w, h) //constructor - intialise the object, give it properties
  {
    let options = {  //properties that are added
      isStatic:true //the object is still (false - not still, true - still)
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options); //'this' is referring to the object - denotes the object
    this.w = w; //making the width and the height the same as the w and h in the constructor
    this.h = h;
    World.add(world, this.body); //adding the world's body into matter.js's world
  }

  show() { //make the object appear
    var pos = this.body.position; //pos stores the position of the body
    push(); //adding properties
    rectMode(CENTER); //centralises object
    stroke(255); //borderline of the object
    fill(127); //colour of the object
    rect(pos.x, pos.y, this.w, this.h); //displaying the objects
    pop(); //going back to previous properties
  }
  
}


