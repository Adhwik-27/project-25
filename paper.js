class Paper
{
constructor(x,y,r)
{ 
var options={
        isStatic:false,
        restitution:0.1,
        friction: 0.5,
        density: 1.2



} 
this.x=x;
this.y=y;
this.r=r;

this.image= loadImage("paper.png")
this.body=Bodies.circle(this.x,this.y,this.r/2, options)
World.add(world, this.body);    

}
display()
{
    var pos=this.body.position ;

    push()
    translate(pos.x,pos.y);
    
    strokeWeight(3);
    fill("darkpink");
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop()
}







}