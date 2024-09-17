class VerifyWinner{ 
    constructor(c,placar)
    {
        this.c = c;
        this.placar = placar;
    }
   

    draw(){
        if(pontoJogador1 == 2 || pontoJogador2 == 2)
        {
            if(pontoJogador1 > pontoJogador2)
            {
                setTimeout(() => {
                    textWinner="Parabéns , o Messi venceu!";
                    this.placar.resetScore();
                    this.c.fillStyle = "gold";
                    
                },1000);
            }
            else
            {
                setTimeout(() => {
                    textWinner="O CR7 venceu!";
                    this.placar.resetScore();
                    this.c.fillStyle = "gold";
                },1000);
            }
        }
        this.c.font = "70px arial";
        this.c.fillStyle = "gold";
        this.c.fillText(textWinner, 100, this.c.canvas.height - 100, this.c.canvas.width);
    }
}



