class plinko{
    constructor(x,y){
        var json={
            restitution: 0.7,
            density: 0.3,
            friction: 0,
            isStatic: true
        }
        this.body=Matter.Bodies.circle(x,y,6,json)
        World.add(world,this.body)
    }
    display(){
        var a=this.body.position
        push()
        ellipseMode(RADIUS)
        fill('white')
        ellipse(a.x,a.y,6)
        pop()
    }
}