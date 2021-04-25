class ball{
constructor(x, y, w, h, angle){
        var options={
            frictionAir:0.005,
            density:1
        }
        this.body=Bodies.rectangle(x, y, w, h, options)
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0,0,this.w, this.h);
        pop();
    }

}