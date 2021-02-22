class Paper{
    constructor(x,y){

        var Options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y,50,Options)
        this.radius=50
        this.image=loadImage("paper.png")
        World.add(world,this.body)

    }
    display(){
     push()
     
     translate(this.body.position.x,this.body.position.y)
     angleMode(RADIANS)
     rotate(this.body.angle)
     imageMode(RADIUS)
     image(this.image,0,0,this.radius,this.radius)   
     pop()
     
    }
}
   
