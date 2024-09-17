class Pad{ 
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=5;
        this.largura= 20;
        this.altura= 100;
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=5;

        this.messi2 = new Image ();
        this.messi2.src = "assets/messi2.png";
        this.messi2.width=100;
        this.messi2.height=100;
        this.messi2.addEventListener('load',()=>{
           this.draw()
        })

    }
    management(){
      
            
        if (this.keyboard.cima) 
            if (this.y > 0 && this.y - 5)
                this.y-=this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.altura - 5) 
                this.y+=this.vel;            
    }
    draw(){
        this.management();
        this.c.drawImage(this.messi2,-20, this.y, this.messi2.width, this.messi2.height);
        //this.c.fillRect( this.x, this.y, this.largura, this.altura);
        
        
    }
   
}






