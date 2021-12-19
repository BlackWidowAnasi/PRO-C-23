class Cannon {
    constructor(x,y,width,height,angle){
        this.y = y;
        this.w = width;
        this.x = x;
        this.h = height;
        this.angle= angle;
    }

    show(){
        fill("#676e6a")
        push()
      
        translate(this.x,this.y)
        rotate(this.angle)
        rect(-10, -20, this.w, this.h);
        pop();
        arc(this.x-40, this.y+80, 80, 230, PI, TWO_PI);//PI = 180
       
    }
}