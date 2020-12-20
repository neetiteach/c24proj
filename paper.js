class Paper{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{restitution:0.5,friction:0.0,density:1.8});
        this.r=radius;
       
        World.add(myworld,this.body);

    }
    display(){
      var pos=this.body.position;
      push();
      //rotate(this.body.angle);
      //translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("yellow");
      noStroke();
      ellipse(pos.x,pos.y,this.r,this.r);
      pop();
    }
}