class chain{
   constructor(body1,body2,offsetX,offsetY){
      this.offsetX=offsetX ;
      this.offsetY=offsetY;
      bodyA:body1;
      bodyB:body2;
      pointB:{x:this.offsetX;
      y:this.offsetY}
       var options= {
        bodyA:body1,
        bodyB:body2,
        length:100,
        pointB:{x:offsetX,y:offsetY}
       }
       this.rope = Matter.Constraint.create(options);
       World.add(world,this.rope);
       
    }
   display(){
    line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetX)
   }
}