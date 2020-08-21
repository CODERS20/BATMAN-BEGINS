class Drop{
    constructor(x,y,radius){

        var options = {
            'friction' : 0.1
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        fill("#3939CC")
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }

    updatePosition(){
        if(this.body.position.y > 800){
            Matter.Body.setPosition(this.body, {x:(random(0,400)),y:(random(0,300))})
        }
    }
}