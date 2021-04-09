class Chain{
    constructor(bodyA,bodyB){
     var options = {
         bodyA:bodyA,
         bodyB:bodyB,
         stiffness:0.05,
         length:100
     }
     this.chain = Constraint.create(options)
     World.add(world,this.chain)
    }
     display(){
         var point_a = this.chain.bodyA.position
         var point_b = this.chain.bodyB.position
         strokeWeight(4)
         line(point_a.x,point_a.y,point_b.x,point_b.y)
     }
}