class player{
    constructor(x,y){
        var a={
            restitution: 0.7,
            density: 1,
            friction: 0.1
        }
        this.body=Matter.Bodies.circle(x,y,10,a)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(pos.x,pos.y,6)
        pop()
    }
}