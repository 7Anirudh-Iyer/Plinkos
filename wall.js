class wall{
    constructor(x,y,width,height){
        var a={
            restitution: 1,
            density: 3,
            friction: 0.8,
            isStatic: true
        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,a)
        this.h=height
        this.w=width
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}